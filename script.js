document.querySelector('.main-nav').addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.tagName === 'A') {
      const theme = event.target.textContent.trim();
      if (theme === '🌙 Dark Mode') {
        document.body.className = 'dark';
      } else if (theme === '😎 Light Mode') {
        document.body.className = '';
      } else if (theme == '🌗 OS Default') {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.body.className = 'dark';
        } else {
          document.body.className = '';
        }
      }
    }
  });
  