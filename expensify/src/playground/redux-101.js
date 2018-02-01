import { createStore } from 'redux';



const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const reset = () => ({
    type: 'RESET'
})

const set = ({ count }) => ({
    type: 'SET',
    count
})

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {        
        case 'INCREMENT':
        
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        };
        case 'RESET':
        return {
            count: 0
        };
        case 'SET':
        return {
            count: action.count
        }
    default:
        return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
});



//increment
// store.dispatch(
//     {
//         type: 'INCREMENT',
//         incrementBy: 5
//     });
store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(incrementCount());
store.dispatch(reset());
store.dispatch(decrementCount({ decrementBy: 12 }));
store.dispatch(set({ count: 102 }))

