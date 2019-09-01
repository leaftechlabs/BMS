import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { decrement, increment } from '../../actions/counterActions';

import './Counter.scss';

interface Props {
    value: number;
    incrementValue: () => any;
    decrementValue: () => any;
}

const Counter: React.FC <Props> = ({ value, incrementValue, decrementValue }) => (
    <div className="counter">
        <p id="counter-value">Current value: {value}</p>
        <p>
            <button id="increment" onClick={incrementValue}>
                Increment
            </button>
            <button id="decrement" onClick={decrementValue}>
                Decrement
            </button>
        </p>
    </div>
);

export default connect((state: RootState) => ({
	value: state.counter.value
}), (dispatch: Function) => ({
		incrementValue: () => dispatch(increment()),
		decrementValue: () => dispatch(decrement())
}))(Counter);
