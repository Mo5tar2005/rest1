document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});




const searchBox = document.querySelector(".search-box");
const suggestions = document.createElement("div");
suggestions.className = "suggestions";
searchBox.parentNode.appendChild(suggestions);

const menuItems = ["Pizza", "Burger", "Pasta", "Drinks", "Desserts"];

searchBox.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  suggestions.innerHTML = "";
  if (query) {
    const matches = menuItems.filter((item) =>
      item.toLowerCase().includes(query)
    );
    matches.forEach((match) => {
      const div = document.createElement("div");
      div.textContent = match;
      div.addEventListener("click", () => {
        searchBox.value = match;
        suggestions.innerHTML = "";
      });
      suggestions.appendChild(div);
    });
  }
});