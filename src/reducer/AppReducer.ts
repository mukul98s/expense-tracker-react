import type { Transaction } from "../context/GlobalState";

interface AddTransactionAction {
  type: 'ADD_TRANSACTION'
  payload: Transaction
}

interface DeleteTransactionAction {
  type: 'DELETE_TRANSACTION'
  payload: Transaction['id']
}

type ExpenseAction = AddTransactionAction | DeleteTransactionAction

export interface TransactionsState {
  transactions: Transaction[];
}

const AppReducer = (state: TransactionsState, action: ExpenseAction) => {
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
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
}

export default AppReducer;
