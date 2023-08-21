// add-link.js
const form = document.getElementById('addLinkForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const title = formData.get('title');
  const url = formData.get('url');

  try {
    const response = await fetch('/.netlify/functions/add-link', {
      method: 'POST',
      body: JSON.stringify({ title, url }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      alert('Link added successfully');
      window.location.reload(); // Refresh the page to show the updated links
    } else {
      alert('Error adding link');
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
