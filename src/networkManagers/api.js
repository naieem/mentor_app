import querystring from "querystring";
import axios from "axios";

const CONN_ABORTED = "ECONNABORTED";

const getResponseLogData = (url = "", startTime = 0, result) => {
  const endTime = new Date().getTime();
  return {
    timeTaken: (endTime - startTime) / 1000,
    url,
    response: result
  };
};

const makeMethod = (method, hasBody) => urlTemplate => (config, data) => {
  let url = config.baseURL + urlTemplate;
  const { log } = config;
  for (const tag of url.match(/:\w+/g) || []) {
    let value = data[tag.slice(1)];
    if (value === undefined) {
      console.warn("Warning: calling", method, "without", tag);
      value = "";
    }
    url = url.replace(tag, encodeURIComponent(data[tag.slice(1)]));
    delete data[tag.slice(1)];
  }

  // const headerKeys = (config && config.headerKeys) || {};
  // const configKeys = Object.keys(headerKeys);
  const headers = config.headerKeys;
  // configKeys.forEach(key => {
  //   headers[headerKeys[key]] = config[key];
  // });

  if (!hasBody) {
    const qs = querystring.stringify(data);
    if (qs) {
      url += (url.indexOf("?") >= 0 ? "&" : "?") + qs;
    }
  }

  let axiosConfig = { method, headers, url };
  if (config.timeout) {
    axiosConfig.timeout = config.timeout;
  }

  if (hasBody) {
    axiosConfig = { ...axiosConfig, data };
  }

  if (config.isDebug) {
    console.log(axiosConfig);
  }

  const startTime = new Date().getTime();
  if (log) {
    log("APICALL", url);
  }

  return fetch(axiosConfig.url, {
  method: 'POST',
  body: axiosConfig.data,
  headers:axiosConfig.headers,
  "mimeType": "multipart/form-data",
  processData:false,
  contentType:false,
  async:true,
  crossDomain:true,
}).then(res => res.text()).then(console.log).catch(console.log)

  return axios(axiosConfig)
    .then(response => {
      // if (log) {
      //   log(
      //     "APICALL",
      //     "Success Response",
      //     getResponseLogData(url, startTime, response.data)
      //   );
      // }

      if (config.isDebug) {
        console.log("response", response);
      }
      return { error: null, response: response.data };
    })
    .catch(error => {
      console.log('Error in api is ', JSON.stringify(error))
      // if (log) {
      //   log(
      //     "APICALL",
      //     "Failure Response",
      //     getResponseLogData(url, startTime, error.response)
      //   );
      // }

      if (error.code === CONN_ABORTED) {
        // log(
        //   "APICALL",
        //   "Error Response - Timeout",
        //   getResponseLogData(url, startTime, error)
        // );
        return {
          error: {
            code: CONN_ABORTED,
            msg: "Connection Timed Out, Try again."
          },
          response: null
        };
      }

      if (config.isDebug) {
        console.log("error", error);
      }
      if (error.response) {
        if (config.isDebug) {
          console.log("error.response", error.response);
        }
        return { error: error.response, response: null };
      }
      return { error: { code: 9999, msg: "User is Offline" }, response: null };
    });
};

const GET = makeMethod("GET");
const DELETE = makeMethod("DELETE", true);
const POST = makeMethod("POST", true);
const PUT = makeMethod("PUT", true);

export { GET, DELETE, POST, PUT };
