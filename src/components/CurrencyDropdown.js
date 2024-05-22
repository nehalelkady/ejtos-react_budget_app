// CurrencyDropdown.js

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        dispatch({ type: 'CHANGE_CURRENCY', payload: newCurrency });
    };

    return (
        <select className="custom-select" onChange={handleCurrencyChange}>
            <option value="£">Pound (£)</option>
            <option value="$">Dollar ($)</option>
            <option value="€">Euro (€)</option>
            <option value="₹">Rupee (₹)</option>
        </select>
    );
};

export default CurrencyDropdown;
