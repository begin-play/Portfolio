/******************************************************************************
 * Project         : BeginPlay                                                *
 * File               : footer.js                                             *
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

import data from "#data/footer" with {type: 'json'};
import {paths} from "./paths.js";

export function FooterButton() {
    return '<button class="default-button rounded-button" data-email="'+data.email+'">Copy email</button>';
}


const addressContent = '<address>' +
    FooterButton() +
    '\n<ul class="social-list">' +
    data.links.map(item =>
        '\n<li>' +
        '\n<a class="social-list-item" href="' + item.link + '" target="_blank" rel="noopener noreferrer">' +
        '\n<img class="social-icon" src="' + paths.iconsFooter + item["asset-src"] + '"' +
        ' alt="" aria-label="' + item.label + '" aria-hidden="true">' +
        '\n<span class="social-text">' + item.title + '</span>\n</a>\n</li>'
    ).join('') +
    '\n</ul>\n</address>';

const copyrightText = data["copyright-notice"].map(line => line + '<br>').join('');

const footerHtml = '\n<footer>\n<section class= "contact-description">' +
    '\n<h2>' + data.heading + '</h2>' +
    '\n<p>' + data.text + '</p>' +
    addressContent + '\n</section>\n' +
    '<hr>' +
    '<small>' + copyrightText + '</small>' +
    '\n</footer>';

export function Footer() {
    return footerHtml;
}