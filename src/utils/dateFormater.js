// formates the date form the string

const formatDate = (dateData) => {
  const d = new Date(dateData);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const date = String(d.getDate()).padStart(2, '0');

  return `${year}-${month}-${date}`;
};

export { formatDate };