const getReadlist = () => {
  const listStr = localStorage.getItem("readlist");
  if (listStr) {
    const list = JSON.parse(listStr);
    return list;
  }
  return [];
};

const setReadlist = (id) => {
  const readlist = getReadlist();
  if (readlist.includes(id)) {
    alert("Item already added!");
  } else {
    readlist.push(id);
    const list = JSON.stringify(readlist);
    return localStorage.setItem("readlist", list);
  }
};

export { getReadlist, setReadlist };
