/******************************************************************************
 * Project         : BeginPlay                                                *
 * File               : default.js                                            *
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

import {GenerateHeader} from '#components/header';
import {Footer} from '#components/footer';
import {DEFAULT_THEME} from "#components/theme";


function GenerateHead(title) {
    return '<link rel="stylesheet" href="./public/css/layouts/default.css">' +
        '<link rel="stylesheet" href="./public/css/pages/' +
        title + '.css">'
}

export function DefaultLayout(title,stylesheetName, content) {
    return '<!DOCTYPE html>' +
        '<html lang="en" data-theme="' +
        DEFAULT_THEME +
        '">' +
        '\n<head>' +
        '\n<meta charset="utf-8">' +
        '\n<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
        '\n<title>' +
        title +
        '</title>\n' +
        GenerateHead(stylesheetName) +
        '\n</head>' +
        '\n<body>\n' +
        GenerateHeader() +
        '\n<main>\n' +
        content +
        '</main>\n' +
        Footer() +
        '\n<script type="module" src="./public/js/main.js"></script>' +
        '\n</body>' +
        '\n</html>';

}
