const createURL = (search, printFilter, bookFilter) => {
  const address = 'https://www.googleapis.com/books/v1/volumes?';
  const url = `${address}q=${search}&filter=${bookFilter ||
    'ebooks'}&printType=${printFilter || 'all'}&maxResults=40`;
  console.log(url);
  return url;
};

export default createURL;
