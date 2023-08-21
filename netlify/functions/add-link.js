// netlify/functions/add-link.js
exports.handler = async (event) => {
    try {
      // Parse the incoming data from the request
      const requestBody = JSON.parse(event.body);
      const title = requestBody.title;
      const url = requestBody.url;
      
      // Process the data and add it to your collection (in-memory for simplicity)
      const newLink = {
        title: title,
        url: url
      };
      
      // Replace this with your actual collection storage mechanism
      let collection = [];
      if (typeof localStorage !== 'undefined') {
        const storedCollection = localStorage.getItem('linksCollection');
        if (storedCollection) {
          collection = JSON.parse(storedCollection);
        }
      }
      collection.push(newLink);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('linksCollection', JSON.stringify(collection));
      }
      
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Link added successfully' })
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Internal Server Error' })
      };
    }
  };
  