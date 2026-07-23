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

document.addEventListener("DOMContentLoaded", () => {
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

})
