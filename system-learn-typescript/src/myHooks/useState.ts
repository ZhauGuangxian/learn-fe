let lastState;
function useState<T>(initialState: T): [T, any] {
  lastState = lastState || initialState;
  function setState(newState) {
    lastState = newState;
  }

  return [lastState, setState];
}
