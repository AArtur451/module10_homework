const iconButton = document.getElementById('iconButton');
const icon = document.getElementById('icon');

let isIconOne = true;

iconButton.addEventListener('click', function() {
  if (isIconOne) {
    icon.classList.remove('bi-arrow-down-left-circle');
    icon.classList.add('bi-arrow-down-left-circle-fill');
  } else {
    icon.classList.remove('bi-arrow-down-left-circle-fill');
    icon.classList.add('bi-arrow-down-left-circle');
  }
  isIconOne = !isIconOne;
});