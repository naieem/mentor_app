import idx from "idx";
import Services from "/networkManagers/services";
import {
  MA_LOGIN_REQUEST,
  MA_LOGIN_SUCCESS,
  MA_LOGIN_FAILED,
  ICON_SIGNUP_REQUEST,
  ICON_SIGNUP_SUCCESS,
  ICON_SIGNUP_FAILED,
  ICON_PRIVACYPOLICY_FAILED,
  ICON_PRIVACYPOLICY_REQUEST,
  ICON_PRIVACYPOLICY_SUCCESS,
  ICON_GETCAMPUSDETAILS_FAILED,
  ICON_GETCAMPUSDETAILS_REQUEST,
  ICON_GETCAMPUSDETAILS_SUCCESS,
  ICON_CHANGEPWD_REQUEST,
  ICON_CHANGEPWD_SUCCESS,
  ICON_CHANGEPWD_FAILED,
  ICON_FORGOTPWD_REQUEST,
  ICON_FORGOTPWD_SUCCESS,
  ICON_FORGOTPWD_FAILED,
  ICON_FORGOTPWDCODE_REQUEST,
  ICON_FORGOTPWDCODE_SUCCESS,
  ICON_FORGOTPWDCODE_FAILED,
  ICON_FORGOTPWDSETNEW_REQUEST,
  ICON_FORGOTPWDSETNEW_SUCCESS,
  ICON_FORGOTPWDSETNEW_FAILED,
  ICON_SIGNUP_ACTCODE_REQUEST,
  ICON_SIGNUP_ACTCODE_SUCCESS,
  ICON_SIGNUP_ACTCODE_FAILED,
  ICON_SIGNUP_ACTVALIDATE_REQUEST,
  ICON_SIGNUP_ACTVALIDATE_SUCCESS,
  ICON_SIGNUP_ACTVALIDATE_FAILED,
  BOOK_REF_DATA_RECEIVED
} from "./constants";

export function loginRequest(config, data) {
  return async dispatch => {
    const { username } = data;
    dispatch({ type: MA_LOGIN_REQUEST });
    const { error, response } = await Services.sendLoginRequest(config, data);
    if (response) {
      dispatch({
        type: MA_LOGIN_SUCCESS,
        payload: Object.assign(response, { username: username })
      });
    }
    if (error) {
      dispatch({ type: MA_LOGIN_FAILED, error: error });
    }

    return {
      response,
      error
    };
  };
}

export function signUpRequest(config, data) {
  return async dispatch => {
    dispatch({ type: ICON_SIGNUP_REQUEST });
    const { error, response } = await Services.sendSignupRequest(config, data);
    if (response) {
      dispatch({ type: ICON_SIGNUP_SUCCESS, payload: response });
    }
    if (error) {
      dispatch({ type: ICON_SIGNUP_FAILED, error: error });
    }

    return {
      response,
      error
    };
  };
}

export function getSignUpActivationCode(config, data) {
  return async dispatch => {
    dispatch({ type: ICON_SIGNUP_ACTCODE_REQUEST });
    const { error, response } = await Services.getActivationTokenForAccCreation(
      config,
      data
    );
    if (response) {
      dispatch({ type: ICON_SIGNUP_ACTCODE_SUCCESS, payload: response });
    }
    if (error) {
      dispatch({ type: ICON_SIGNUP_ACTCODE_FAILED, error: error });
    }

    return {
      response,
      error
    };
  };
}

export function validateSignUpActivationCode(config, data) {
  return async dispatch => {
    dispatch({ type: ICON_SIGNUP_ACTVALIDATE_REQUEST });
    const { error, response } = await Services.validateAccCreationOTP(
      config,
      data
    );
    if (response) {
      dispatch({ type: ICON_SIGNUP_ACTVALIDATE_SUCCESS, payload: response });
    }
    if (error) {
      dispatch({ type: ICON_SIGNUP_ACTVALIDATE_FAILED, error: error });
    }
    return {
      response,
      error
    };
  };
}

export function getPrivacyPolicy(config, data) {
  return async dispatch => {
    dispatch({ type: ICON_PRIVACYPOLICY_REQUEST });
    const { error, response } = await Services.getPrivacyPolicy(config, data);
    if (response) {
      dispatch({ type: ICON_PRIVACYPOLICY_SUCCESS, payload: response });
    }
    if (error) {
      dispatch({ type: ICON_PRIVACYPOLICY_FAILED, error: error });
    }

    return {
      response,
      error
    };
  };
}

export function getCampusDetails(config, data) {
  return async dispatch => {
    dispatch({ type: ICON_GETCAMPUSDETAILS_REQUEST });
    const { error, response } = await Services.getCampusDetails(config, data);
    if (response) {
      dispatch({ type: ICON_GETCAMPUSDETAILS_SUCCESS, payload: response });
    }
    if (error) {
      dispatch({ type: ICON_GETCAMPUSDETAILS_FAILED, error: error });
    }

    return {
      response,
      error
    };
  };
}

export function changePassword(config, data) {
  return async dispatch => {
    dispatch({ type: ICON_CHANGEPWD_REQUEST });
    const { error, response } = await Services.changePassword(config, data);
    if (response) {
      dispatch({ type: ICON_CHANGEPWD_SUCCESS, payload: response });
    }
    if (error) {
      dispatch({ type: ICON_CHANGEPWD_FAILED, error: error });
    }

    return {
      response,
      error
    };
  };
}

export function forgotPassword(config, data) {
  return async dispatch => {
    dispatch({ type: ICON_FORGOTPWD_REQUEST });
    const { error, response } = await Services.forgotPassword(config, data);
    if (response) {
      dispatch({ type: ICON_FORGOTPWD_SUCCESS, payload: response });
    }
    if (error) {
      dispatch({ type: ICON_FORGOTPWD_FAILED, error: error });
    }

    return {
      response,
      error
    };
  };
}

export function validateForgotPasswordCode(config, data) {
  return async dispatch => {
    dispatch({ type: ICON_FORGOTPWDCODE_REQUEST });
    const { error, response } = await Services.validateForgotPassword(
      config,
      data
    );
    if (response) {
      dispatch({ type: ICON_FORGOTPWDCODE_SUCCESS, payload: response });
    }
    if (error) {
      dispatch({ type: ICON_FORGOTPWDCODE_FAILED, error: error });
    }

    return {
      response,
      error
    };
  };
}

export function forgotPasswordSetNewPwd(config, data) {
  return async dispatch => {
    dispatch({ type: ICON_FORGOTPWDSETNEW_REQUEST });
    const { error, response } = await Services.setForgottenPassword(
      config,
      data
    );
    if (response) {
      dispatch({ type: ICON_FORGOTPWDSETNEW_SUCCESS, payload: response });
    }
    if (error) {
      dispatch({ type: ICON_FORGOTPWDSETNEW_FAILED, error: error });
    }

    return {
      response,
      error
    };
  };
}
