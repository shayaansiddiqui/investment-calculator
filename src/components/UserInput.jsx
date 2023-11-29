import {useState} from "react";

const UserInput = ({init, onUpdate}) => {
	const [investment, setInvestment] = useState(init);
	const onInvestmentUpdate = (e) => {
		const newData = init;
		switch(e.target.name)
		{
			case 'initialInvestment':
				newData.initialInvestment = e.currentTarget.value;
				break;
			case 'annualInvestment':
				newData.annualInvestment = e.currentTarget.value;
				break;
			case 'expectedReturn':
				newData.expectedReturn = e.currentTarget.value;
				break;
			case 'duration':
				newData.duration = e.currentTarget.value;
				break;
			default:
				break;
		}
		onUpdate(newData);
	}
	return (
		<div id={'user-input'}>
			<div className={'input-group'}>
				<div>
					<label>Initial Investment</label>
					<input type={'number'} name={'initalInvestment'} defaultValue={investment.initialInvestment} onChange={event => onInvestmentUpdate(event)} required/>
				</div>
				<div>
					<label>Annual Investment</label>
					<input type={'number'} name={'annualInvestment'} defaultValue={investment.annualInvestment} onChange={event => onInvestmentUpdate(event)} required/>
				</div>
				<div>
					<label>Expected Return</label>
					<input type={'number'} name={'expectedReturn'} defaultValue={investment.expectedReturn} onChange={event => onInvestmentUpdate(event)} step={'0.1'} required/>
				</div>
				<div>
					<label>Duration</label>
					<input type={'number'} name={'duration'} defaultValue={investment.duration} onChange={event => onInvestmentUpdate(event)} required/>
				</div>
			</div>
		</div>
	);
}

export default UserInput;