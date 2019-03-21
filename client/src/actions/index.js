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

export const fetchStreams = () => async dispatch => {
  const response = await streams.get("/streams");
  dispatch({ type: "FETCH_STREAMS", payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: "FETCH_STREAM", payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = streams.put(`/streams/${id}`, formValues);
  dispatch({ type: "EDIT_STREAM", payload: response.data });
};
