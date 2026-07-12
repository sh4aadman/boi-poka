const getWishlistFromStorage = () => {
  const listStr = localStorage.getItem("wishlist");
  if (listStr) {
    const list = JSON.parse(listStr);
    return list;
  }
  return [];
};

const setWishlistToStorage = (id) => {
  const wishlist = getWishlistFromStorage();
  if (wishlist.includes(id)) {
    alert("Item already added!");
  } else {
    wishlist.push(id);
    const data = JSON.stringify(wishlist);
    return localStorage.setItem("wishlist", data);
  }
};

export { getWishlistFromStorage, setWishlistToStorage };
