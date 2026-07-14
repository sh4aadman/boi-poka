const getReadlistFromStorage = () => {
  const listStr = localStorage.getItem("readlist");
  if (listStr) {
    const list = JSON.parse(listStr);
    return list;
  }
  return [];
};

const setReadlistToStorage = (id) => {
  const readlist = getReadlistFromStorage();
  if (readlist.includes(id)) {
    return false;
  } else {
    readlist.push(id);
    const data = JSON.stringify(readlist);
    localStorage.setItem("readlist", data);
    return true;
  }
};

export { getReadlistFromStorage, setReadlistToStorage };
