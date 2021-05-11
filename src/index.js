import { loadHomeContent } from './home'
import { loadMenu } from './menu'

const content = document.querySelector('#content')
const headerOptions = document.querySelectorAll('.header-option')

headerOptions.forEach(el => el.addEventListener('click', () => {
    headerOptions.forEach(el => {
        el.style.removeProperty('text-decoration');
    })
}))

window.addEventListener('DOMContentLoaded', () => {
    loadHomeContent(content)
});

document.querySelector('[data-home]').addEventListener('click', (e) => {
    e.preventDefault();
    loadHomeContent(content)
});
document.querySelector('[data-menu]').addEventListener('click', (e) => {
    e.preventDefault();
    loadMenu(content);
});