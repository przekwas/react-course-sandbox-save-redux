import { connect } from 'react-redux';

const Messages = props => {
	return (
		<div>
			{props.messages.map((msg, i) => (
				<div key={i}>{msg}</div>
			))}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		messages: state.messages
	};
};

export default connect(mapStateToProps)(Messages);
