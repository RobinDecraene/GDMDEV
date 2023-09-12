document.addEventListener('DOMContentLoaded', function () {
  var openButton = document.getElementById('open-button');
  var closeButton = document.getElementById('close-button');
  var overlay = document.getElementById('overlay');

  openButton.addEventListener('click', function (event) {
    event.preventDefault();
    overlay.style.display = 'flex';
  });

  closeButton.addEventListener('click', function (event) {
    event.preventDefault();
    overlay.style.display = 'none';
  });
});