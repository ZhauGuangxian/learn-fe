let lastState;
let hookStates = [];
let hookIndex = 0;
export function useState<T>(initialState: T): [T, any] {
  lastState = lastState || initialState;
  function setState(newState) {
    lastState = newState;
  }

  return [lastState, setState];
}

export function useCallback(callback, dependencies) {
  if ([hookIndex]) {
    let [lastCb, lastDeps] = hookStates[hookIndex];
    let same = dependencies.every((item, index) => item === lastDeps[index]);
    if (!same) {
      hookStates[hookIndex++] = callback;
      return callback;
    } else {
      hookIndex++;
      return lastCb;
    }
  } else {
    hookStates[hookIndex++] = [callback, dependencies];
    return callback;
  }
}
