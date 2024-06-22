window.addEventListener('DOMContentLoaded', () => {
    const screenWidth = window.innerWidth;
  
    if (screenWidth >= 768) { // Load for large screens (desktop)
      loadPage('lg.html');
    } else { // Load for small screens (mobile)
      loadPage('small.html');
    }
  });
  
  function loadPage(pageUrl) {
    fetch(pageUrl)
      .then(response => response.text())
      .then(html => {
        document.body.innerHTML = html;
        // Create a script element for script.js and append it to the body
        
      })
      .catch(error => console.error('Error loading page:', error));
  }
  