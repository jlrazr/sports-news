function getDate() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  const currentDate = `${day} ${month} ${year}`;
  return currentDate;
}

export default getDate;
