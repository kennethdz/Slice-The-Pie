import React, { useRef, useEffect, useState } from 'react';
import EntryBox from './EntryBox.jsx';
import PieChartFunctional from "./PieChartFunctional.jsx"
import revenueInput from "./revenueInput"

function Revenue(props) {

	const [revenuePieData, setPieData] = useState(revenueInput);

	function updatePie(newData) {
		setPieData(newData);
	}

	console.log(revenuePieData);		
	if (props.hide) {
		return (<div />)
	} else {
		return (
			<div className = "pieBlock">
				<label> UC Davis Revenues </label>
				<PieChartFunctional name="pie" data={revenuePieData} />
				<EntryBox className = "revenue" callback ={updatePie}/>
			</div>
	)}

}

export default Revenue;