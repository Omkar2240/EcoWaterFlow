// Function to filter products by category
function filterProducts() {
    const checkboxes = document.querySelectorAll(".category-filter input[type='checkbox']");
    const products = document.querySelectorAll(".product");
  
    // Get selected categories
    const selectedCategories = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
  
    // Show or hide products based on selected categories
    products.forEach(product => {
      const productCategory = product.getAttribute("data-category");
  
      if (selectedCategories.length === 0 || selectedCategories.includes(productCategory)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }
  