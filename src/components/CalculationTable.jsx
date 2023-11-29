import {calculateInvestmentResults, formatter} from "../util/investment";

const CalculationTable = ({data}) => {
	const tableData = calculateInvestmentResults(data);
	const initialInvestment = tableData[0].valueEndOfYear - tableData[0].interest - tableData[0].annualInvestment;

	console.log(tableData);
	return (
		<table id={'result'}>
			<thead>
			<tr>
				<th>Year</th>
				<th>Investment Value</th>
				<th>Interest (Year)</th>
				<th>Total Interest</th>
				<th>Invested Capital</th>
			</tr>
			</thead>
			<tbody>
			{tableData.map(item => {
				const totalInterest = (item.valueEndOfYear - item.annualInvestment * item.year) - initialInvestment;
				const totalAmountInvested = item.valueEndOfYear - totalInterest;
				return (<tr key={item.year}>
					<th>{item.year}</th>
					<th>{formatter.format(item.valueEndOfYear)}</th>
					<th>{formatter.format(item.interest)}</th>
					<th>{formatter.format(totalInterest)}</th>
					<th>{formatter.format(totalAmountInvested)}</th>
				</tr>)
			})}
			</tbody>
		</table>
	);
}

export default CalculationTable;