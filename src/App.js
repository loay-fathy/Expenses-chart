import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpesne/NewExpense";

const DUMMY_DATA = [
  {id: 'e1', title: "Cars", price: 255, date: new Date(2020, 1, 26) },
  {id: 'e2', title: "Laptops", price: 299, date: new Date(2021, 3, 25) },
  {id: 'e3', title: "Mobiles", price: 600, date: new Date(2022, 5, 24) },
  {id: 'e4', title: "TV", price: 499, date: new Date(2023, 0, 7) },
  {id: 'e5', title: "Toy", price: 509, date: new Date(2020, 2, 2) },
  {id: 'e6', title: "Desktop", price: 799, date: new Date(2021, 4, 25) },
  {id: 'e7', title: "Fifa 23", price: 199, date: new Date(2022, 11, 24) },
  {id: 'e8', title: "Elden Ring", price: 759, date: new Date(2023, 8, 23) },
];

const App = () => {
  const [expenses, setExpense] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
