// netlify/functions/manage-links.js
const linksCollection = [];

exports.handler = async (event) => {
  if (event.httpMethod === 'POST') {
    const requestBody = JSON.parse(event.body);
    const { title, url } = requestBody;
    linksCollection.push({ title, url });
    return {
      statusCode: 201,
      body: JSON.stringify({ message: 'Link added successfully' })
    };
  }

  if (event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      body: JSON.stringify(linksCollection)
    };
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ message: 'Method not allowed' })
  };
};
