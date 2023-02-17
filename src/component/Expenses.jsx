import React, { useRef, useEffect, useState } from 'react';
import EntryBox from './EntryBox.jsx';
import PieChartFunctional from "./PieChartFunctional.jsx"
import expensesInput from "./expensesInput"

function Expenses(props) {
	const [expensesPieData, setPieData] = useState(expensesInput);
	function updatePie(newData) {
		setPieData(newData);
	}
	console.log(expensesPieData);		
	if (props.hide) {
		return (<div />)
	} else {
		return (
			<div className = "pieBlock">
				<label> UC Davis Expenditure </label>
				<PieChartFunctional name="pie" data={expensesPieData} />
				<EntryBox className = "expenses" callback = {updatePie}/>
			</div>
	)}

}

export default Expenses;