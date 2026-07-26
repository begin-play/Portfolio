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
import data from '#data/navitems' with { type: "json" };

function createNavbarItems()
{
    let navbarItems = '';
    data.forEach(item => {
        let classtoAdd = '';
        if(item.itemType === 'link')
            classtoAdd = 'nav-link';
        else
            classtoAdd = 'nav-item';

        navbarItems += '\n<li class="' + classtoAdd + '"><a href="' + item.itemLink + '">' + item.itemName + '</a></li>';
    });
    return navbarItems;
}

export function Navbar()
{
    return '\n<nav>' +
        '\n<ul>'+
       createNavbarItems()+
        '\n</ul>'+
        '</nav>';
}