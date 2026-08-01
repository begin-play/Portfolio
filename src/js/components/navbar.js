/******************************************************************************
 * Project         : BeginPlay                                                *
 * File               : navbar.js                                             *
 * Author          : Sagar                                                    *
 *                                                                            *
 * Copyright (c) 2026 Sagar.                                                  *
 * All Rights Reserved.                                                       *
 *                                                                            *
 * This project is published as part of my professional portfolio.            *
 * Viewing the source code is permitted for evaluation purposes only.         *
 * No license is granted to copy, modify, redistribute, or incorporate any    *
 * portion of this code into other projects without prior written permission. *
 ******************************************************************************/
import data from '#data/navitems' with {type: "json"};


function CreateNavbarItems() {

    let navbarItems = '';
    data.forEach(item => {
        navbarItems += '\n<li class="'+ (item.itemType==='Button'?'default-button':'') + '"><a href="' + item.itemLink + '">' + item.itemName + '</a></li>';

    });
    return navbarItems;
}

export function GenerateNavbar() {

    return '\n<nav class="navbar">' +
        '\n<button id="navbar-toggle" class="default-button" aria-label="Toggle Menu" aria-expanded="false" aria-controls="navbar-menu">' +
        'Menu' +
        '</button>' +
        '\n<div class="navbar-mobile-header">' +
        '\n<button id="navbar-close" aria-label="Close Menu">' +
        '\n<svg class="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' +
        '\n</button>' +
        '\n</div>' +
        '\n<ul class="navbar-menu">' +
        CreateNavbarItems() +
        '\n</ul>' +
        '\n<div class="navbar-mobile-footer">' +
        '\n<p>&copy; 2026 Sagar Kumar. All rights reserved.</p>' +
        '\n</div>' +
        '\n</nav>';

}