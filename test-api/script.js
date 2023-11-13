async function fetchApiData() {
	const url = 'https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&co2EmissionsClass=A%2B&field%5B0%5D=uri&beta=true&random=true&cuisineType%5B0%5D=American&imageSize%5B0%5D=LARGE&mealType%5B0%5D=Breakfast&health%5B0%5D=alcohol-cocktail&diet%5B0%5D=balanced&dishType%5B0%5D=Biscuits%20and%20cookies';
  
	const options = {
	  method: 'GET',
	  headers: {
		'Accept-Language': 'en',
		'X-RapidAPI-Key': `${process.env.API_KEY}`,
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com',
	  },
	};
  
	try {
	  const response = await fetch(url, options);
	  if (response.ok) {
		const data = await response.json(); // You might need to use response.json() if the API returns JSON data
		console.log(data);
	  } else {
		console.error('Failed to fetch data:', response.status, response.statusText);
	  }
	} catch (error) {
	  console.error('An error occurred:', error);
	}
  }
  
  // Call the function to fetch the API data
  fetchApiData();
  