const loadMenu = (content) => {
    document.querySelector('[data-menu]').style.cssText = "text-decoration: 1px underline; text-underline-offset: 4px;color:white;"

    document.querySelector('footer').style.setProperty('position', 'relative');
    content.style.cssText = "height:auto"

    // content.innerHTML = "";
    content.innerHTML = `
    <div class="menu gx-5"> 
        <div class = "row" id = "menu-content"></div> 
    </div > `

    const menu = content.querySelector('#menu-content')
    for (let i = 1; i <= 8; i++) {
        menu.innerHTML += `
        <div class="col-md-6">
            <div class="card mb-3 bg-dark">
                <div class="container mt-3" style="height: 12rem">
                    <img src="./images/menu/${i}.jpg" class="card-img-top">
                </div>
                <div class="card-body text-center">
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="#" class="btn btn-primary shadow-none">View More</a>
                </div>
            </div>
        </div>`
    }
}

export { loadMenu }