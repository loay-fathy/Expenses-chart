import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item-description">
        <h2>{props.title}</h2>
        <div className="expense-item-price">{props.price}$</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
