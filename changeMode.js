var checkbox = document.querySelector('input[name=theme]');
let logo = document.querySelector('#logo');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'light');
        logo.src = "image/logo_black.png";
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark');
        logo.src = "image/logo_white.png";
    }
})
let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}
