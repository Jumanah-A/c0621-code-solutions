var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

// console.log("tab container", $tabContainer);
// console.log("viewList", $viewList);
// console.log("tabList", $tabList);

function handleClick(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabList.length; i++) {
      if ($tabList[i] === event.target) {
        $tabList[i].className = 'tab active';
        var dataView = event.target.getAttribute('data-view');
        for (var index = 0; index < $viewList.length; index++) {
          if (dataView !== $viewList[index].getAttribute('data-view')) {
            $viewList[index].className = 'view hidden';
          } else {
            $viewList[index].className = 'view';
          }
        }
      } else {
        $tabList[i].className = 'tab';
      }
    }
  }
}
$tabContainer.addEventListener('click', handleClick);
