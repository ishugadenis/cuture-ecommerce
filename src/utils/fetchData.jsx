
export const productsCat = {
  method: 'GET',
//   url: 'https://real-time-amazon-data.p.rapidapi.com/products-by-category',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
  }
};


export const fetchData =async (url, options) => {
   const response = await fetch(url,options);
   const data = await response.json();
   
   return data; 
}