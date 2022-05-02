import { useState } from 'react'; 
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    // let title = props.title;
    const [title, setTitle ] = useState(props.title);

    const clickHandler = () => {
        setTitle("Updated");
        //console.log(title);
    }
   
    return (
    <div className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{ title }</h2>
            <div className='expense-item__price'>${ props.amount }</div>
        </div>
        <button onClick={clickHandler}>Add New Expense</button>
    </div>
    );
}

export default ExpenseItem;
