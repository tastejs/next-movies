

import { STORAGE_KEY } from 'config/app-level';

const saveState = state => {
  try {
    const prevSerializedState = loadState() || {};
    const nextSerializedState = JSON.stringify({
      ...prevSerializedState,
      ...state
    });
    localStorage.setItem(STORAGE_KEY, nextSerializedState);
  } catch (error) {
    console.warn(`Failed to save state to local storage: ${error.message}`);
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (null === serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.warn(`Failed to load state from local storage: ${error.message}`);
    return undefined;
  }
};

export {
  saveState,
  loadState
};
