window.addEventListener('load', function() {
    const loading = document.querySelector('.loading');
    setTimeout(function() {
        loading.classList.remove('show');
        loading.addEventListener('transitionend', function() {
            this.style.display = 'none';
          });
      }, 300);
});