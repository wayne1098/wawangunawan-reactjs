import {useSelector, useDispatch} from 'react-redux';
import { decrementWithCheckingAction, increment } from '../../../../App/Features/Counter/action';

const Counter =() => {
    let count = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return ( 
        <div>
            <button onClick={() => dispatch(decrementWithCheckingAction(1))}>-</button>
            {' '}<span>{count.count}</span>{' '}
            <button onClick={() => dispatch(increment(1))}>+</button>
        </div>
    )
    } 
    
    export default Counter;