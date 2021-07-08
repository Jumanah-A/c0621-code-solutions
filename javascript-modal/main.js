
var $openModal = document.querySelector('.open-modal');
var $hidden = document.querySelector('.hidden');
var $noButton = document.querySelector('.no-button');
function handleOpenModal(event) {
  $hidden.className = 'modal overlay-shadow';
}

$openModal.addEventListener('click', handleOpenModal);

function handleNoButton(event) {
  $hidden.className = 'hidden';
}

$noButton.addEventListener('click', handleNoButton);
