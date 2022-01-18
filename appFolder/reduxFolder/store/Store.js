

import { createStore, combineReducers } from 'redux';
import IntroduceReducer1 from '../reducer/IntroduceReducer1';

const rootReducer = combineReducers(
    {
        introduceReducer1: IntroduceReducer1
    }

)


const Store = () => {
    return createStore(rootReducer);

}

export default Store