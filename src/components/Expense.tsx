import { useGlobalState } from "../context/GlobalState";

function Expense() {
  const { transactions } = useGlobalState();

  const positive = transactions
    .map((transaction: { amount: number }) => transaction.amount)
    .filter((amount) => amount > 0)
    .reduce((a, b) => a + b, 0);

  const negative = transactions
    .map((transaction) => transaction.amount)
    .filter((amount) => amount < 0)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="expense">
      <div className="expense__income">
        <h4>Income</h4>
        <h2>
          <span className="money">Rs.</span>
          {positive}
        </h2>
      </div>
      <div className="expense__debt">
        <h4>Expense</h4>
        <h2>
          <span className="money">Rs.</span> {Math.abs(negative)}
        </h2>
      </div>
    </div>
  );
}

export default Expense;
