const initialState = {
  message: '',
  messageType: '' // 'success' atau 'error'
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SUCCESS_MESSAGE':
      return { ...state, message: action.payload, messageType: 'success' };
    case 'SET_ERROR_MESSAGE':
      return { ...state, message: action.payload, messageType: 'error' };
    case 'CLEAR_MESSAGE':
      return { ...state, message: '', messageType: '' };
    default:
      return state;
  }
};

export const setSuccessMessage = message => ({
  type: 'SET_SUCCESS_MESSAGE',
  payload: message,
});

export const setErrorMessage = message => ({
  type: 'SET_ERROR_MESSAGE',
  payload: message,
});

export const clearMessage = () => ({
  type: 'CLEAR_MESSAGE',
});


export default errorReducer;
