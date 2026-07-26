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
import * as Console from "node:console";

function CreateNavbarItems()
{
    Console.log("createNavbarItems function called");
    let navbarItems = '';
    data.forEach(item => {

console.log("item: ", item);
        navbarItems += '\n<li' +  '><a href="' + item.itemLink + '">' + item.itemName + '</a></li>';
    });
    return navbarItems;
}

export function GenerateNavbar()
{
    Console.log("Navbar function called");
    return '<nav>'+
        '<button>'+
            'Menu'+
       '</button>' +
'        <div>'+
            '<div >'+
                '<button>'+

                '</button>'+
            '</div>'+
            '<ul>'+
     CreateNavbarItems() +
            '</ul>'+
            '<div >'+
                '<p>&copy; 2026 Sagar Kumar. All rights reserved.</p>'+
            '</div>'+
        '</div>'+
        '</nav>';

}