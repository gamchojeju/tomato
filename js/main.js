
/* =========================================================
   똘똘이 방울토마토
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const menuButton = document.querySelector(".mobile-menu-button");
    const navLinks = document.querySelectorAll(".main-nav a");
    const sections = document.querySelectorAll("main section[id]");

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

    /*
     * 현재 스크롤 위치에 맞춰 메뉴 밑줄을 표시합니다.
     * 감초식당처럼 한 페이지에서 섹션을 이동할 때
     * 사용자가 현재 위치를 쉽게 알 수 있도록 합니다.
     */
    const updateActiveNav = () => {
        let currentId = "home";
        const headerHeight = header.offsetHeight;

        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop <= headerHeight + 120) {
                currentId = section.id;
            }
        });

        navLinks.forEach((link) => {
            const targetId = link.getAttribute("href").replace("#", "");
            link.classList.toggle("is-active", targetId === currentId);
        });
    };

    window.addEventListener("scroll", updateActiveNav, { passive: true });
    updateActiveNav();

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
