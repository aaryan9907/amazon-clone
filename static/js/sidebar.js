document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openSidebarBtn");
    const closeBtn = document.getElementById("sidebarCloseBtn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");

    function openSidebar() {
        sidebar.classList.add("active");
        overlay.classList.add("active");
        document.body.classList.add("sidebar-open");
    }

    function closeSidebar() {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("sidebar-open");
    }

    // Open on hamburger click
    openBtn.addEventListener("click", openSidebar);

    // Close on 'X' button click
    closeBtn.addEventListener("click", closeSidebar);

    // Close on dark backdrop click
    overlay.addEventListener("click", closeSidebar);

    // Close on Escape key press
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && sidebar.classList.contains("active")) {
            closeSidebar();
        }
    });
    // Hero Carousel Logic
    const slides = document.querySelectorAll(".slide");
    const prevHero = document.getElementById("prevHero");
    const nextHero = document.getElementById("nextHero");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((s) => s.classList.remove("active"));
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    if (prevHero && nextHero) {
        prevHero.addEventListener("click", () => showSlide(currentSlide - 1));
        nextHero.addEventListener("click", () => showSlide(currentSlide + 1));

        // Auto-advance every 5 seconds
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    }
});