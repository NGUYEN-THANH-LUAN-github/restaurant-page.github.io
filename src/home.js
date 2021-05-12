const loadHomeContent = (content) => {
    document.querySelector('[data-home]').style.cssText = "text-decoration: 1px underline; text-underline-offset: 4px; color:white"

    document.querySelector('footer').style.setProperty('position', 'fixed');
    content.style.cssText = "height:85vh"

    // content.innerHTML = "";
    content.innerHTML = '<div><h1 class="display-1">A Night In Paris</h1></div>'
}

export { loadHomeContent }