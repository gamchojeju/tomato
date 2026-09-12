
/* =========================================================
   똘똘이 방울토마토
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const menuButton = document.querySelector(".mobile-menu-button");
    const navLinks = document.querySelectorAll(".main-nav a");

    if (!header || !menuButton) {
        return;
    }

    menuButton.addEventListener("click", () => {
        const isOpen = header.classList.toggle("menu-open");

        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.textContent = isOpen ? "닫기" : "메뉴";
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            header.classList.remove("menu-open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.textContent = "메뉴";
        });
    });

    document.querySelectorAll("[data-shop-link]").forEach((button) => {
        button.addEventListener("click", (event) => {
            const url = button.dataset.shopLink;

            if (!url || url === "#") {
                event.preventDefault();
                window.alert("실제 쇼핑몰 링크를 연결할 자리입니다.");
            }
        });
    });
});
