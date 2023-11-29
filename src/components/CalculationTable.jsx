import {calculateInvestmentResults, formatter} from "../util/investment";

const CalculationTable = ({data}) => {
	const tableData = calculateInvestmentResults(data);
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
				return (<tr>
					<th>{item.year}</th>
					<th>{formatter.format(item.valueEndOfYear)}</th>
					<th>{formatter.format(item.interest)}</th>
					<th>Total Interest</th>
					<th>{formatter.format(item.annualInvestment)}</th>
				</tr>)
			})}
			</tbody>
		</table>
	);
}

export default CalculationTable;