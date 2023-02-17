import React, { useRef, useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import expensesInput from "./expensesInput.jsx"
import revenueInput from "./revenueInput.jsx"
import revenueTooltips from "./revenueTooltips.jsx"
import expensesTooltips from "./expensesTooltips.jsx"


function EntryBox (props) {

	const callback = props.callback;
	const [revenueTotal, setRevenueTotal] = useState(0);
	const [expensesTotal, setExpensesTotal] = useState(0);

	// calls state function to update revenueTotal
	function changeRevenueTotal(value) {
		console.log("changing revenue total");
		setRevenueTotal(value);
	}
	// calls state function to update expensesTotal
	function changeExpensesTotal(value) {
		setExpensesTotal(value);
	}
	function MakeTooltip(props) {
		return (
			<Popup
				trigger={open => (
					<button className="tooltipButton"> i </button>
				)}
				position="right center"
				closeOnDocumentClick
			>
				<p className = "tooltipInfo"> {props.info}</p>
			</Popup>
		)
	}

	// Creates an input entry given a color, className, and name for the entry 
	function EntryMaker(props) {
		let dotColor = "dot " + props.color;
		return (
			<div className = {props.className}>
				<label> 
					<span className = {dotColor} /> 
					{props.name} 
					<MakeTooltip info = {props.info} />
				</label>
				<span>
					<input name = {props.name} type="number"  min = "0" max = "100" placeholder = {props.dataType == "revenue" ? findRevenueValue(props.name) : findExpensesValue(props.name)} onKeyUp = {props.onKeyUp} />
					% 
				</span>					
			</div>
		)
	}
	// finds revenue value given name
	function findRevenueValue(name) {
		for (var i = 0; i < revenueInput.length; i++) {
			if (revenueInput[i].name == name)
				{
					return revenueInput[i].value;
				}
		}
		return 0;
	}
	// finds expenses value given name
	function findExpensesValue(name) {
		for (var i = 0; i < expensesInput.length; i++) {
			if (expensesInput[i].name == name)
				{
					return expensesInput[i].value;
				}
		}
		return 0;
	}
	// finds revenue info given name
	function findRevenueInfo(name) {
		for (var i = 0; i < revenueTooltips.length; i++) {
			if (revenueTooltips[i].name == name)
				{
					return revenueTooltips[i].info;
				}
		}
		return "Nothing found.";
	}
	// finds expenses info given name
	function findExpensesInfo(name) {
		for (var i = 0; i < expensesTooltips.length; i++) {
			if (expensesTooltips[i].name == name)
				{
					return expensesTooltips[i].info;
				}
		}
		return "Nothing found.";
	}



	// handler function for when revenue input value changes
	function handleRevenueInput(element, value, name) {
		console.log("input has changed", name, value);
			for(var i = 0; i < revenueInput.length; i++) {
				if (revenueInput[i].name == name)
				{
					console.log("input data found");
					revenueInput[i].value = value;}
			}
		console.log(revenueInput);
		addRevenueTotal();
		let newData = [...revenueInput];
		callback(newData);
	}

	// handler function for when expenses input value changes
	function handleExpensesInput(element, value, name) {
		console.log("input has changed");
			for(var i = 0; i < expensesInput.length; i++) {
				if (expensesInput[i].name == name)
				{
					console.log("input data found");
					expensesInput[i].value = value;}
			}
		console.log(expensesInput);
		addExpensesTotal();
		let newData = [...expensesInput];
		callback(newData);
	}

	// calculates total percentage of all revenue parts
	function addRevenueTotal() {
		let newTotal = 0;
		for(var i = 0; i < revenueInput.length; i++) {
			newTotal += Number(revenueInput[i].value);
		}
		if (newTotal > 100) {
			changeRevenueTotal(100);
		} else {
			changeRevenueTotal(newTotal);
		}

	}
	// calculates total percentage of all expenses parts
	function addExpensesTotal() {
		let newTotal = 0;
		for(var i = 0; i < expensesInput.length; i++) {
			newTotal += Number(expensesInput[i].value);
		}
		if (newTotal > 100) {
			changeExpensesTotal(100);
		} else {
			changeExpensesTotal(newTotal);
		}
	}
	// returns specified entry box based on className
	if (props.className === "revenue") {

	return (
		<div>
			<div className = "entry">
				<p> Function </p> <p> (Press "Enter" to update) </p> <p> Percentage (%) </p>
			</div>
			<EntryMaker info = {findRevenueInfo("Medical Center")} dataType = {props.className} className = "entry medicalCenter" name="Medical Center" color = "hf0bf00" onKeyUp = {event => event.key === "Enter" && handleRevenueInput(event.target, event.target.value, event.target.name)}/>
			<EntryMaker info = {findRevenueInfo("Student Fees")} dataType = {props.className} className = "entry studentFees" name="Student Fees" color = "h12c5e4" onKeyUp = {event => event.key === "Enter" &&  handleRevenueInput(event.target, event.target.value, event.target.name)}/>
			<EntryMaker info = {findRevenueInfo("State of California")} dataType = {props.className} className = "entry state" name="State of California" color = "hf6e50e" onKeyUp = {event => event.key === "Enter" && handleRevenueInput(event.target, event.target.value, event.target.name)}/>	
			<EntryMaker info = {findRevenueInfo("Tuition")} dataType = {props.className} className = "entry tuition" name="Tuition" color = "hfff688" onKeyUp = {event => event.key === "Enter" && handleRevenueInput(event.target, event.target.value, event.target.name)}/>	
			<EntryMaker info = {findRevenueInfo("Research Grants and Contracts")} dataType = {props.className}className = "entry researchGrants" name="Research Grants and Contracts" color = "h5f63ec" onKeyUp = {event => event.key === "Enter" && handleRevenueInput(event.target, event.target.value, event.target.name)}/>	
			<EntryMaker info = {findRevenueInfo("Pell Grants")} dataType = {props.className} className = "entry pellGrants" name="Pell Grants" color = "h71a8ff" onKeyUp = {event => event.key === "Enter" && handleRevenueInput(event.target, event.target.value, event.target.name)}/>	
			<EntryMaker info = {findRevenueInfo("Non-educational Services")} dataType = {props.className} className = "entry nonEducational" name="Non-educational Services" color = "h0f7ab4" onKeyUp = {event => event.key === "Enter" && handleRevenueInput(event.target, event.target.value, event.target.name)}/>	
			<EntryMaker info = {findRevenueInfo("Gifts, Endowments, Interest, Etc.")} dataType = {props.className} className = "entry gifts" name="Gifts, Endowments, Interest, Etc." color = "hd4e4ff" onKeyUp = {event => event.key === "Enter" && handleRevenueInput(event.target, event.target.value, event.target.name)}/>
			<div className = "entry">
				<label> Total </label> 
				<span> 
					<input className = "total" value = {revenueTotal} readOnly/>
					% 
				</span>	
			</div>
		</div>
	)} // expenses portion of entrybox
	else if (props.className === "expenses") {
	return (
		<div>
			<div className = "entry">
				<p> Function </p> <p> (Press "Enter" to update) </p> <p> Percentage (%) </p>
			</div>
			<EntryMaker info = {findExpensesInfo("Medical Center")} dataType = {props.className}  className = "entry medicalCenter" name="Medical Center" color = "hf0bf00" onKeyUp = {event => event.key === "Enter" && handleExpensesInput(event.target, event.target.value, event.target.name)}/>
			<EntryMaker info = {findExpensesInfo("Teaching and Teaching Support")} dataType = {props.className}  className = "entry teaching" name="Teaching and Teaching Support" color = "hf6e50e" onKeyUp = {event => event.key === "Enter" && handleExpensesInput(event.target, event.target.value, event.target.name)} />
			<EntryMaker info = {findExpensesInfo("Research")} dataType = {props.className}  className = "entry research" name="Research" color = "hfff688" onKeyUp = {event => event.key === "Enter" && handleExpensesInput(event.target, event.target.value, event.target.name)}/>	
			<EntryMaker info = {findExpensesInfo("Student Services and Financial Aid")} dataType = {props.className}  className = "entry studentServices" name="Student Services and Financial Aid" color = "h5f63ec" onKeyUp = {event => event.key === "Enter" && handleExpensesInput(event.target, event.target.value, event.target.name)}/>	
			<EntryMaker info = {findExpensesInfo("Operations and Maintenance (Buildings, etc)")} dataType = {props.className}  className = "entry operations" name="Operations and Maintenance (Buildings, etc)" color = "h71a8ff" onKeyUp = {event => event.key === "Enter" && handleExpensesInput(event.target, event.target.value, event.target.name)}/>	
			<EntryMaker info = {findExpensesInfo("Administration")} dataType = {props.className} className = "entry administration" name="Administration" color = "h0f7ab4" onKeyUp = {event => event.key === "Enter" && handleExpensesInput(event.target, event.target.value, event.target.name)}/>	
			<EntryMaker info = {findExpensesInfo("Non-Educational Services")} dataType = {props.className}  className = "entry nonEducationalExpenses" name="Non-Educational Services" color = "hd4e4ff" onKeyUp = {event => event.key === "Enter" && handleExpensesInput(event.target, event.target.value, event.target.name)}/>
			<EntryMaker info = {findExpensesInfo("Public Service")} dataType = {props.className}  className = "entry publicService" name="Public Service" color = "h7f8187" onKeyUp = {event => event.key === "Enter" && handleExpensesInput(event.target, event.target.value, event.target.name)}/>	
			<EntryMaker info = {findExpensesInfo("Depreciation, Interest, etc.")} dataType = {props.className}  className = "entry deprecation" name="Depreciation, Interest, etc." color = "h12c5e4" onKeyUp = {event => event.key === "Enter" && handleExpensesInput(event.target, event.target.value, event.target.name)}/>			
			<div className = "entry">
				<label> Total </label> 
				<span> 
					<input className = "total" value = {expensesTotal} readOnly/>
					% 
				</span>	
			</div>
		</div>
	)}
	else {
		return(<div />)
	}
}

export default EntryBox;