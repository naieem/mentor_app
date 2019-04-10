import {
  ICON_LOGIN_REQUEST,
  ICON_LOGIN_SUCCESS,
  ICON_LOGIN_FAILED,
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
  ICON_SIGNUP_ACTVALIDATE_REQUEST,
  ICON_SIGNUP_ACTVALIDATE_SUCCESS,
  ICON_SIGNUP_ACTVALIDATE_FAILED
} from "../actions/constants";
import ip from "icepick";

const initialState = ip.freeze({ loginResponse: null, loginStatus: "" });
const LOGIN_REQUEST_STATUS_INPROG = "login_requesting";
const LOGIN_REQUEST_STATUS_SUCCESS = "login_success";
const LOGIN_REQUEST_STATUS_FAILED = "login_failed";
const SIGNUP_REQUEST_STATUS_INPROG = "signup_requesting";
const SIGNUP_REQUEST_STATUS_SUCCESS = "signup_success";
const SIGNUP_REQUEST_STATUS_FAILED = "signup_failed";

const PP_REQUEST_STATUS_INPROG = "privavypolicy_requesting";
const PP_REQUEST_STATUS_SUCCESS = "privavypolicy_success";
const PP_REQUEST_STATUS_FAILED = "privavypolicy_failed";

const REQUEST_STATUS_INPROG = "requesting";
const REQUEST_STATUS_SUCCESS = "success";
const REQUEST_STATUS_FAILED = "failed";

export default function(state = initialState, action) {
  switch (action.type) {
    case ICON_LOGIN_REQUEST: {
      state = ip.setIn(state, ["loginStatus"], LOGIN_REQUEST_STATUS_INPROG);
      state = ip.setIn(state, ["loginResponse"], null);
      return state;
    }

    case ICON_LOGIN_SUCCESS: {
      state = ip.setIn(state, ["loginStatus"], LOGIN_REQUEST_STATUS_SUCCESS);
      state = ip.setIn(state, ["loginResponse"], action.payload);
      return state;
    }
    case ICON_LOGIN_FAILED: {
      state = ip.setIn(state, ["loginStatus"], LOGIN_REQUEST_STATUS_FAILED);
      state = ip.setIn(state, ["loginResponse"], null);
      return state;
    }

    case ICON_SIGNUP_REQUEST: {
      state = ip.setIn(state, ["signupStatus"], SIGNUP_REQUEST_STATUS_INPROG);
      state = ip.setIn(state, ["signupResponse"], null);
      return state;
    }

    case ICON_SIGNUP_SUCCESS: {
      state = ip.setIn(state, ["signupStatus"], SIGNUP_REQUEST_STATUS_SUCCESS);
      state = ip.setIn(state, ["signupResponse"], action.payload);
      return state;
    }

    case ICON_SIGNUP_FAILED: {
      state = ip.setIn(state, ["signupStatus"], SIGNUP_REQUEST_STATUS_FAILED);
      state = ip.setIn(state, ["signupResponse"], null);
      return state;
    }

    case ICON_SIGNUP_ACTVALIDATE_FAILED: {
      state = ip.setIn(state, ["campusDetailsStatus"], REQUEST_STATUS_FAILED);
      state = ip.setIn(state, ["campusListResponse"], null);
      return state;
    }

    case ICON_SIGNUP_ACTVALIDATE_REQUEST: {
      state = ip.setIn(state, ["campusDetailsStatus"], REQUEST_STATUS_INPROG);
      state = ip.setIn(state, ["campusListResponse"], null);
      return state;
    }

    case ICON_SIGNUP_ACTVALIDATE_SUCCESS: {
      state = ip.setIn(state, ["campusDetailsStatus"], REQUEST_STATUS_SUCCESS);
      state = ip.setIn(state, ["campusListResponse"], action.payload);
      return state;
    }

    case ICON_PRIVACYPOLICY_FAILED: {
      state = ip.setIn(
        state,
        ["privacyPolicyStatus"],
        PP_REQUEST_STATUS_FAILED
      );
      state = ip.setIn(state, ["privacyPolicyResponse"], null);
      return state;
    }

    case ICON_PRIVACYPOLICY_REQUEST: {
      state = ip.setIn(
        state,
        ["privacyPolicyStatus"],
        PP_REQUEST_STATUS_INPROG
      );
      state = ip.setIn(state, ["privacyPolicyResponse"], null);
      return state;
    }

    case ICON_PRIVACYPOLICY_SUCCESS: {
      state = ip.setIn(
        state,
        ["privacyPolicyStatus"],
        PP_REQUEST_STATUS_SUCCESS
      );
      state = ip.setIn(state, ["privacyPolicyResponse"], action.payload);
      return state;
    }

    case ICON_GETCAMPUSDETAILS_FAILED: {
      state = ip.setIn(state, ["campusDetailsStatus"], REQUEST_STATUS_FAILED);
      state = ip.setIn(state, ["campusListResponse"], null);
      return state;
    }

    case ICON_GETCAMPUSDETAILS_REQUEST: {
      state = ip.setIn(state, ["campusDetailsStatus"], REQUEST_STATUS_INPROG);
      state = ip.setIn(state, ["campusListResponse"], null);
      return state;
    }

    case ICON_GETCAMPUSDETAILS_SUCCESS: {
      state = ip.setIn(state, ["campusDetailsStatus"], REQUEST_STATUS_SUCCESS);
      state = ip.setIn(state, ["campusListResponse"], action.payload);
      return state;
    }

    case ICON_GETCAMPUSDETAILS_FAILED: {
      state = ip.setIn(state, ["campusDetailsStatus"], REQUEST_STATUS_FAILED);
      state = ip.setIn(state, ["campusListResponse"], null);
      return state;
    }

    case ICON_CHANGEPWD_REQUEST: {
      state = ip.setIn(state, ["changePwdRequest"], REQUEST_STATUS_INPROG);
      state = ip.setIn(state, ["changePwdResponse"], null);
      return state;
    }

    case ICON_CHANGEPWD_SUCCESS: {
      state = ip.setIn(state, ["changePwdRequest"], REQUEST_STATUS_SUCCESS);
      state = ip.setIn(state, ["changePwdResponse"], action.payload);
      return state;
    }
    case ICON_CHANGEPWD_FAILED: {
      state = ip.setIn(state, ["changePwdRequest"], REQUEST_STATUS_FAILED);
      state = ip.setIn(state, ["changePwdResponse"], null);
      return state;
    }
    default:
      return state;
  }
}
