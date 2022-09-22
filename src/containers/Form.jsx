import { useState } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../reducers/messages';

const Form = props => {
	const [text, setText] = useState('');

    const handleAddMsg = () => {
        props.addMessage(text);
        setText('');
    }

	return (
		<div>
            <label>WHY ARE U DOING THIS {props.why}</label>
			<input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={handleAddMsg}>Add Message</button>
		</div>
	);
};

const mapDispatchToProps = {
    addMessage
}

export default connect(null, mapDispatchToProps)(Form);
