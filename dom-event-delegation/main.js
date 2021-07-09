var $taskList = document.querySelector('.task-list');

function handleClick(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var ancestor = event.target.closest('.task-list-item');
    console.log('closest .task-list-item', ancestor);
    document.querySelector('.task-list-item').remove();
  }

}

$taskList.addEventListener('click', handleClick);
