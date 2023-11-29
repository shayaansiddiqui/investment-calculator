import {useState} from "react";

const UserInput = ({investment, onUpdate}) => {
	// const [investment, setInvestment] = useState(init);
	// const onInvestmentUpdate = (e) => {
	// 	const newData = init;
	// 	switch(e.target.name)
	// 	{
	// 		case 'initialInvestment':
	// 			newData.initialInvestment = e.currentTarget.value;
	// 			break;
	// 		case 'annualInvestment':
	// 			newData.annualInvestment = e.currentTarget.value;
	// 			break;
	// 		case 'expectedReturn':
	// 			newData.expectedReturn = e.currentTarget.value;
	// 			break;
	// 		case 'duration':
	// 			newData.duration = e.currentTarget.value;
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// 	onUpdate(newData);
	// }
	return (
		<section id={'user-input'}>
			<div className={'input-group'}>
				<p>
					<label>Initial Investment</label>
					<input type={'number'} name={'initialInvestment'} value={investment.initialInvestment} onChange={event => onUpdate('initialInvestment', +event.target.value)} required/>
				</p>
				<p>
					<label>Annual Investment</label>
					<input type={'number'} name={'annualInvestment'} value={investment.annualInvestment} onChange={event => onUpdate('annualInvestment', +event.target.value)} required/>
				</p>
				<p>
					<label>Expected Return</label>
					<input type={'number'} name={'expectedReturn'} value={investment.expectedReturn} onChange={event => onUpdate('expectedReturn', +event.target.value)} step={'0.1'} required/>
				</p>
				<p>
					<label>Duration</label>
					<input type={'number'} name={'duration'} value={investment.duration} onChange={event => onUpdate('duration', +event.target.value)} required/>
				</p>
			</div>
		</section>
	);
}

export default UserInput;