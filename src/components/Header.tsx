import { useGlobalState } from "../context/GlobalState";

function Header() {
  const { transactions } = useGlobalState();

  const money = transactions
    .map((transaction: { amount: number }) => transaction.amount)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="header">
      <div className="header__title">
        <h2>Expense Tracker</h2>
      </div>
      <div className="header__balance">
        <h4>Your Balance</h4>
        <h1>
          <span className="money">Rs.</span>
          {money}
        </h1>
      </div>
    </div>
  );
}

export default Header;
