document.addEventListener("DOMContentLoaded", () => {
  const filterSelect = document.querySelector('.filter-bar select:nth-child(1)');
  const sortSelect = document.querySelector('.filter-bar select:nth-child(2)');
  const productGrid = document.querySelector('.product-grid');

  const allProducts = Array.from(productGrid.children);

  filterSelect.addEventListener("change", () => {
    const category = filterSelect.value;
    allProducts.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      if (!category || title.includes(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  sortSelect.addEventListener("change", () => {
    const sortBy = sortSelect.value;
    const sorted = allProducts.slice().sort((a, b) => {
      const priceA = parseFloat(a.querySelector("p").textContent.replace(/[^\d.]/g, ""));
      const priceB = parseFloat(b.querySelector("p").textContent.replace(/[^\d.]/g, ""));
      return sortBy === "low-to-high" ? priceA - priceB : priceB - priceA;
    });

    // Re-append sorted elements
    sorted.forEach(card => productGrid.appendChild(card));
  });
});
