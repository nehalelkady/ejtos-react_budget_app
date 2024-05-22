import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses, currency,newBudget } = useContext(AppContext);

    // Calculate total expenses
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currency}{newBudget}</span>
        </div>
    );
};

export default ExpenseTotal;
