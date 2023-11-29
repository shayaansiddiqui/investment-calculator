import Header from './components/Header'
import UserInput from "./components/UserInput";
import {useState} from "react";
import CalculationTable from "./components/CalculationTable";

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 140000,
		annualInvestment: 5000,
		expectedReturn: 4.5,
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

	const inputIsValid = userInput.duration >=1;
	return (
		<>
			<Header/>
			<UserInput investment={userInput} onUpdate={handleChange}/>
			{inputIsValid && <CalculationTable data={userInput}/>}
			{!inputIsValid && <p className={'center'}>Please enter a duration greater than 0</p>}
		</>
	)
}

export default App
