const getData = async () => {
  const response = await fetch("/books.json");
  return response.json();
};

const dataPromise = getData();

export { dataPromise };
