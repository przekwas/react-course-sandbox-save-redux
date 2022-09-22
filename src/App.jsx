import { connect } from 'react-redux';
import { incrementOne, incrementBy, decrementBy } from './reducers/count';

import Messages from './containers/Messages';
import Form from './containers/Form';

const App = props => {
	return (
		<div>
			<Form why={props.count} />
			<h2>{props.a}</h2>
			<h1>Count is: {props.count}</h1>
			<button onClick={() => props.incrementOne()}>Add 1</button>
			<button onClick={() => props.incrementBy(10)}>Add 10</button>
			<button onClick={() => props.decrementBy(5)}>Sub 5</button>
			<Messages />
		</div>
	);
};

const mapStateToProps = state => {
	return {
		a: 42,
		count: state.count
	};
};

const mapDispatchToProps = dispatch => {
	return {
		incrementBy: num => dispatch(incrementBy(num)),
		decrementBy: num => dispatch(decrementBy(num)),
		incrementOne: () => dispatch(incrementOne())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
