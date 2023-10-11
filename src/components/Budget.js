import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, remaining, totalExpenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const newInput = event.target.value;

        if(newInput > 2000){
            alert("The value cannot exceed remaining fund £"+remaining);
            setNewBudget('');
        }
        else if(newInput < totalExpenses){
            alert("You cannot reduce the budget value lower than than the spending £"+totalExpenses);
            setNewBudget('');
        }
        else{
            setNewBudget(newInput);
        }
    }
 
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
