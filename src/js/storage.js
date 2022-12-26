const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (e) {
    console.error(e.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (e) {
    console.error(e.message);
  }
};

const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error(e.message);
  }
};

export { save, remove, load };
