export function addZero(date) {
  let newDate = date;
  if (date[1] === '-') {
    newDate = '0' + date;
  }
  let parts = newDate.split(/-/g);
  newDate = `${parts[2]}-${parts[0]}-${parts[1]}`;
  return newDate;
}
