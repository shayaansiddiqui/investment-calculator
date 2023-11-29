import Header from './components/Header'
import UserInput from "./components/UserInput";
import {useState} from "react";

function App() {
	const [initialInvestment, setInitialInvestment] = useState({
		initialInvestment: 100,
		annualInvestment: 200,
		expectedReturn: 3.3,
		duration: 4
	});

	const investmentHandler = (investment) => {
		console.log("state: " + initialInvestment);
		console.log("initialInvestment: " + investment.initialInvestment);
		console.log("annualInvestment: " + investment.annualInvestment);
		console.log("expectedReturn: " + investment.expectedReturn);
		console.log("duration: " + investment.duration);
		setInitialInvestment((prevInvestment) => {
			return {
				...prevInvestment,
				investment
			}
		});
	}
	return (
		<>
			<Header/>
			<UserInput init={initialInvestment} onUpdate={investmentHandler}/>
			<span>Table Calculations</span>
		</>
	)
}

export default App
