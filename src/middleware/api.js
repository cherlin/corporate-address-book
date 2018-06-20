export const API = Symbol('API');

export const api = url => store => next => (action) => {
  if (action[API]) {
    const {
      endpoint,
      method,
      body,
      headers,
    } = action[API];

    fetch(`${url}${endpoint}`, {
      method: method || 'GET',
      body: JSON.stringify(body),
      headers,
    })
      .then(result => result.json())
      .then((data) => {
        store.dispatch({
          type: `${action.type}_SUCCESS`,
          data,
        });
      })
      .catch((error) => {
        store.dispatch({
          type: `${action.type}_FAILURE`,
          error,
        });
      });
    next({
      ...action,
      type: `${action.type}_REQUEST`,
    });
  } else {
    next(action);
  }
};
