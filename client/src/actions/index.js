import streams from "../apis/streams";

export const signIn = userId => {
  return {
    type: "SIGN_IN",
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

export const createStream = formValues => {
  return async dispatch => {
    const response = await streams.post("/streams", formValues);
    dispatch({ type: "CREATE_STREAM", payload: response.data });
  };
};
