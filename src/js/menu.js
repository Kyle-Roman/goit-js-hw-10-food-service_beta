import menuListItems from '../menu.json';
import menuCard from '../templates/menu.hbs';

const menuList = document.querySelector('.js-menu');
const menuTemplate = createMenuCard(menuListItems);

menuList.insertAdjacentHTML('beforeend', menuTemplate);

function createMenuCard(menuListItems) {
  return menuListItems.map(menuCard).join('');
}