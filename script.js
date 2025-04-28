async function getQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  document.getElementById('quote').innerText = `"${data.content}"`;
  document.getElementById('author').innerText = `- ${data.author}`;

  // Set a random background image
  document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?nature,water,sky')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
}

// Load a quote when the page starts
window.onload = getQuote;