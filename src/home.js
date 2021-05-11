const loadHomeContent = (content) => {
    document.querySelector('[data-home]').style.cssText = "text-decoration: 1px underline; text-underline-offset: 4px;"
    content.innerHTML = "";
    content.innerHTML = '<h1 class="display-1">A Night In Paris</h1>'
    content.style.cssText = 'height: 90vh;'
    document.querySelector('footer').style.cssText = 'position: fixed; bottom: 0;'
}

export { loadHomeContent }