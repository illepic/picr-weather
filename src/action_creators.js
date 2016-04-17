// Makes our actions full functions that callable elsewhere
// These JUST return action objects {type: 'NAME_OF_ACTION', state}

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function dostuff() {
  return {
    type: 'DO_STUFF'
  }
}
