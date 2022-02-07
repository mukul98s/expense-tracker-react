interface action {
  type: string,
  payload: Object
}

interface state {
  transactions: [];
}

const AppReducer = (state: state, action: action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: {id: number}) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
}

export default AppReducer;
