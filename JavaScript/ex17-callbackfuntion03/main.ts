// document.addEventListener('DOMContentLoaded', function () {
//   tabMenu(document.getElementById('tabmenu1'));
// });

// function tabMenu(seletor: HTMLElement) {
//   var tabMenu = null;
//   var menuItems = null;
//   var selectedMenuItem = null;

//   function init(selector: HTMLElement) {
//     tabMenu = selector;
//     menuItems = tabMenu.getElementsByTagName('li');
//   }

//   function initEvent() {
//     for (let i = 0; i <= menuItems.length; i++) {
//       menuItems[i].addEventListener('click', function () {
//         setSelectItem(this);
//       });
//     }
//   }

//   function setSelectItem(item: HTMLElement) {
//     if (selectedMenuItem != null) {
//       selectedMenuItem.classList.remove('select');
//     }
//     selectedMenuItem = item;
//     console.log(selectedMenuItem);
//     selectedMenuItem.classList.add('select');

//     document.getElementById('info').innerHTML = selectedMenuItem;
//   }

//   init(seletor);
//   initEvent();
// }

// // $(document).ready(function () {
// //   tabMenu('#tabmenu1');
// // });
// // function tabMenu(seletor) {
// //   var $tabMenu = null;
// //   var $menuItems = null;
// //   var $selectedMenuItem = null;
// //   function init(selector) {
// //     $tabMenu = $(selector);
// //     $menuItems = $tabMenu.find('li');
// //   }
// //   function initEvent() {
// //     $menuItems.click(function () {
// //       setSelectItem($(this));
// //     });
// //   }
// //   function setSelectItem($item) {
// //     if ($selectedMenuItem != null) {
// //       $selectedMenuItem.removeClass('select');
// //     }
// //     $selectedMenuItem = $item;
// //     $selectedMenuItem.addClass('select');
// //     $('#info').html($selectedMenuItem.index());
// //   }
// //   init(seletor);
// //   initEvent();
// // }
