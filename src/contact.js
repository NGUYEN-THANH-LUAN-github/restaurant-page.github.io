const loadContact = (content) => {
    document.querySelector('[data-contact]').style.cssText = "text-decoration: 1px underline; text-underline-offset: 4px; color:white;"

    document.querySelector('footer').style.setProperty('position', 'fixed');

    content.innerHTML = `
        <div class="container contact-content p-4 rounded" style="width:70%; height:auto; background-color: rgba(0, 0, 0, 0.527);">
            <div class="container info">
                <div class="fs-5">
                    <p><i class="fas fa-map-marker-alt"></i> 〒811-1101 福岡県福岡市早良区重留１丁目８−20</p>
                </div>
                <div class="fs-5">
                    <p><i class="fas fa-clock"></i> Mon-Thurs: 8am-8pm / Fri-Sun: 8am-11pm</p>
                </div>
                <div class="fs-5">
                    <p><i class="fas fa-phone-alt"></i> 012-3456-6789</p>
                </div>
                <div class="fs-5">
                    <p><i class="fas fa-envelope"></i> Message Us</p>
                </div>
                <form class="text-dark">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="name" placeholder="Full Name">
                        <label for="name">Full Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="email" placeholder="Email">
                        <label for="email">Email</label>
                    </div>
                    <div class="form-floating">
                        <textarea id="comment" class="form-control" placeholder="Comment" style="height: 100px"></textarea>
                        <label for="comment">Leave a comment here</label>
                    </div>
                </form>
            </div>
            <div class="container google-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106412.28102419643!2d130.29284958796686!3d33.54340366808075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8e32a27dd85e8e2f!2sMcDonald&#39;s!5e0!3m2!1sen!2sjp!4v1620841624827!5m2!1sen!2sjp"
                    width="100%" height="100%" loading="lazy"></iframe>
            </div>
        </div>
    `
}

export { loadContact }