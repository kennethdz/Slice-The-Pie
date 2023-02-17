import React, { useRef, useEffect, useState } from 'react';
import PieChartFunctional from "./PieChartFunctional.jsx";
import expenditureData from './expensesData';
import revenueData from './revenueData';
import expensesInput from './expensesInput';
import revenueInput from './revenueInput';

function Compare(props) {


	const [revenuePieInput, setRevenuePieInput] = useState(revenueInput);
	const [revenuePieData, setRevenuePieData] = useState(revenueData);
	const [expensesPieInput, setExpensesPieInput] = useState(expensesInput);
	const [expensesPieData, setExpensesPieData] = useState(expenditureData);
		
	if (props.hide) {
		return (<div />)
	}
	else if (props.className === "revenue") {
		return (
			<div className = "pieBlock">
				<label> Your Revenue Guess </label>
				<PieChartFunctional name="pie1" data={revenuePieInput} />
				<label> Actual Revenue </label>
				<PieChartFunctional name="pie2" data= {revenuePieData} />
			</div>
		)} 
		else if (props.className === "expenses") {
			return (
				<div className = "pieBlock">
					<label> Your Expenses Guess </label>
					<PieChartFunctional name="pie1" data={expensesPieInput} />
					<label> Actual Expenses </label>
					<PieChartFunctional name="pie2" data= {expensesPieData} />
				</div>)} 
		else {
			return (
				<div />
		)}
}

export default Compare;