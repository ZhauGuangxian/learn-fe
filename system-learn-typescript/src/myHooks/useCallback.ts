export function useCallback(callback, dependencies) {
  if (hookStates[hookIndex]) {
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
