import {GenerateNavbar} from '#components/navbar';


export function GenerateHeader() {

    return '<header class="header-container">' +
        '\n<div class="header-content">' +
        '\n<div class="logo-container">' +
        '\n<a href="index.html" aria-label="Home">' +
        '\n<span class="logo-text">Sagar Kumar</span>' +
        '\n</a>' +
        '\n</div>' +
        GenerateNavbar() +
        '\n</div>' +
        '\n</header>';

}