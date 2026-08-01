/******************************************************************************
 * Project         : BeginPlay                                                *
 * File               : main.js                                               *
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

document.addEventListener("DOMContentLoaded", Init);

function Init() {
    // SetupNavigationMenu();
    SetupEmailCopyButton();
}

function SetupEmailCopyButton() {
    let copyButton = document.querySelector(".copy-email");
    copyButton.addEventListener("click", async () => {
        console.log("Copying email...");
        await navigator.clipboard.writeText(copyButton.dataset.email).then(() => {
            copyButton.innerHTML = "Email Copied!";
            copyButton.enabled = false;
            setTimeout(() => {
                copyButton.innerHTML = "Copy email";
                copyButton.enabled = true;
            }, 3000);
        });
    })
}
//
// const navToggle = document.getElementById("nav-toggle");
// const navContainer = document.getElementById("nav-list-container");
// const navClose = document.getElementById("nav-close");
// const navLinks = document.querySelectorAll("#nav-list a");

// function SetupNavigationMenu() {
//
//
//     if (navToggle) {
//         navToggle.addEventListener("click", () => toggleMenu());
//     }
//
//     if (navClose) {
//         navClose.addEventListener("click", () => toggleMenu(true));
//     }
//
//     if (navLinks) {
//         navLinks.forEach(link => {
//             link.addEventListener("click", () => toggleMenu(true));
//         });
//     }
//
//
// }
//
// const toggleMenu = (forceClose = false) => {
//     if (!navContainer || !navToggle) return;
//
//     const isActive = forceClose ? false : !navContainer.classList.contains("is-active");
//     navContainer.classList.toggle("is-active", isActive);
//     navToggle.setAttribute("aria-expanded", isActive ? "true" : "false");
//     document.body.classList.toggle("menu-open", isActive);
//
//     if (isActive && navClose) {
//         navClose.focus({preventScroll: true});
//     } else if (!isActive && navToggle) {
//         navToggle.focus({preventScroll: true});
//     }
// };
//
// function openInNewTab(url) {
//     const win = window.open(url, '_blank');
//     if (win) {
//         win.focus();
//     }
// }
