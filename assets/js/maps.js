document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `<iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24334.91930974088!2d-3.8882308037500968!3d40.32315549233212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418dd5cd83c237%3A0x1c298bd038d71292!2sM%C3%B3stoles%2C%20Madrid!5e0!3m2!1ses!2ses!4v1706565903915!5m2!1ses!2ses"
    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    }, 500)

})