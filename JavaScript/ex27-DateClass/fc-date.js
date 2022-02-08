$(document).ready(function () {
  var $menu = $('#menu');
  var menuData = 'home,about,contact';
  var menuItems = menuData.split(',');

  for (var i = 0; i < menuItems.length; i++) {
    var newItem = '<li>' + menuItems[i].toUpperCase() + '</li>';

    $menu.append(newItem);
  }
});
