const useLocalStorage = () => {
  const setItem = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = (key) => {
    const item = JSON.parse(window.localStorage.getItem(key));
    return item;
  };
  return { setItem, getItem };
};

export default useLocalStorage;
