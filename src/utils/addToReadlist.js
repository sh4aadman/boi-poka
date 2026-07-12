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
    alert("Item already added!");
  } else {
    readlist.push(id);
    const data = JSON.stringify(readlist);
    return localStorage.setItem("readlist", data);
  }
};

export { getReadlistFromStorage, setReadlistToStorage };
