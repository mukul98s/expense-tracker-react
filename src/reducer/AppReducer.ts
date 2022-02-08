import type { Transaction } from "../context/GlobalState";

interface AddTransactionAction {
  type: 'ADD_TRANSACTION'
  payload: Transaction
}

interface DeleteTransactionAction {
  type: 'DELETE_TRANSACTION'
  payload: number
}

type ExpenseAction = AddTransactionAction | DeleteTransactionAction

interface ExpenseState {
  transactions: Transaction[];
}

const AppReducer = (state: ExpenseState, action: ExpenseAction) => {
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
