import AddTransaction from "./components/AddTransaction";
import Expense from "./components/Expense";
import Header from "./components/Header";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Expense />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
