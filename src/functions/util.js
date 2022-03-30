export const getItem = (key) => {
  const result = localStorage.getItem(key)
  return result;
}
export const setItem = (key, value) => {
  localStorage.setItem(key, value)
}
export const getList = (pageSize, pageCount) => {
  const result = (async (pageSize, pageCount) => {
    const value = await fetch(
      `https://randomuser.me/api/?page=${pageCount}&results=${pageSize}&seed=abc`
    ).then((response) => response.json())
    return value.results;
  })(pageSize, pageCount);
  return result;
}