fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    const navContainer = document.getElementById('nav-container');
    navContainer.innerHTML = data;
  });
