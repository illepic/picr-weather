import {Map} from 'immutable';

function setState(state, newState) {
  // console.log(state);
  return state.merge(newState);
}

function doStuff(state) {
  console.log('DO STUFF');
  const newState = {results: [{id: 1, title: 'TESTING State Change across actions'}]};
  return state.merge(newState);
}

export default function(state = Map(), action) {
  // state is initialized THE VERY FIRST TIME as a Map(), thus all future calls
  // to state have Immutable map benefits
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'DO_STUFF':
      return doStuff(state);
  }
  return state;
}
