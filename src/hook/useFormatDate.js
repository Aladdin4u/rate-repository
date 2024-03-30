const useFormatDate = (d) => {
  const date = new Date(d);
  let day = date.getDay();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  day < 10 ? (day = String(day).padStart(2, "0")) : day;
  month < 10 ? (month = String(month).padStart(2, "0")) : month;

  return `${day}.${month}.${year}`;
};

export default useFormatDate