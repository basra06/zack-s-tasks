const axios = require('axios');
require('dotenv').config(); 
exports.getTopstories = async function (req, res) {
    try {
      const section = 'home'; // Replace with the desired section
      const url = `${process.env.NYT_URL}${section}.json?api-key=${process.env.API_KEY}`;
      
      const response = await axios.get(url);
  
      // Check if the request was successful
      if (response.status === 200) {
        const data = response.data;
        res.status(200).json({
          message: `Top Stories in the ${section} section`,
          data: data.results,
        });
      } else {
        res.status(response.status).json({
          message: 'Failed to fetch data from the New York Times API',
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({
        message: 'Something went wrong',
      });
    }
  };