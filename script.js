let cartCount = 0;
let cartDisplay = document.getElementById("cartCount");
let popup = document.getElementById("popup");

let searchInput = document.getElementById("searchInput");
let cards = document.querySelectorAll(".card");

let activeCategory = "all";

/* Add To Cart */
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        cartCount++;
        cartDisplay.innerText = cartCount;

        popup.style.display = "block";

        setTimeout(() => {
            popup.style.display = "none";
        }, 1500);
    });
});

/* Category Filter */
document.querySelectorAll(".cat").forEach(button => {
    button.addEventListener("click", () => {

        document.querySelectorAll(".cat").forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");
        activeCategory = button.getAttribute("data-filter");

        filterProducts();
    });
});

/* Search */
searchInput.addEventListener("keyup", () => {
    filterProducts();
});

/* Filter Function */
function filterProducts() {
    let searchValue = searchInput.value.toLowerCase();

    cards.forEach(card => {
        let title = card.querySelector("h3").innerText.toLowerCase();

        let matchesCategory =
            activeCategory === "all" || card.classList.contains(activeCategory);

        let matchesSearch = title.includes(searchValue);

        if (matchesCategory && matchesSearch) {
            card.classList.remove("hide");
        } else {
            card.classList.add("hide");
        }
    });
}

/* Scroll Reveal Animation */
function revealOnScroll() {
    document.querySelectorAll(".reveal").forEach(el => {
        let position = el.getBoundingClientRect().top;

        if (position < window.innerHeight - 120) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
