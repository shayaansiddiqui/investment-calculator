import Header from './components/Header'
import UserInput from "./components/UserInput";
import {useState} from "react";
import CalculationTable from "./components/CalculationTable";

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10
	});

	// const investmentHandler = (investment) => {
	// 	console.log("state: " + userInput);
	// 	console.log("initialInvestment: " + investment.initialInvestment);
	// 	console.log("annualInvestment: " + investment.annualInvestment);
	// 	console.log("expectedReturn: " + investment.expectedReturn);
	// 	console.log("duration: " + investment.duration);
	// 	setUserInput(prevInvestment => {
	// 		return {
	// 			...prevInvestment,
	// 			investment
	// 		}
	// 	});
	// }

	const handleChange = (inputIdentifier, newValue) => {
		setUserInput(previousUserInput => {
			return {
				...previousUserInput,
				[inputIdentifier]: newValue
			};
		});
	}
	return (
		<>
			<Header/>
			<UserInput investment={userInput} onUpdate={handleChange}/>
			<CalculationTable data={userInput}/>
		</>
	)
}

export default App
