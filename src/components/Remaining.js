// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// const Remaining = () => {
//     const { expenses, budget } = useContext(AppContext);
//     const totalExpenses = expenses.reduce((total, item) => {
//         return (total = total + item.cost);
//     }, 0);
//     const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
//     return (
//         <div className={`alert ${alertType}`}>
//             <span>Remaining: £{budget - totalExpenses}</span>
//         </div>
//     );
// };
// export default Remaining;

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget,currency } = useContext(AppContext);

    // Calculate total expenses
    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    // Calculate remaining budget using the updated budget value
    const remaining = budget - totalExpenses;

    // Determine alert type based on remaining budget
    const alertType = remaining < 0 ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{remaining}</span>
        </div>
    );
};

export default Remaining;
