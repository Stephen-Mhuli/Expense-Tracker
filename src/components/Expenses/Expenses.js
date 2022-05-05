import { useState } from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from './ExpenseFIlter';

const Expenses = (props) =>{
    const [filteredYear,setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };


    return (
    <div className="expenses">
      <ExpenseFilter selected={filteredYear} onChnageFilter={filterChangeHandler}/>
      {props.items.map((expense)=>(
        <ExpenseItem
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}
        />
      ))} 
    </div>
      
    );

}

export default Expenses;