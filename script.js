const loginContainer = document.getElementById('login-container');
const signupContainer = document.getElementById('signup-container');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const signupLink = document.getElementById('signup-link');
const headerLoginBtn = document.getElementById('header-login-btn');
const headerSignupBtn = document.getElementById('header-signup-btn');

let isLoginShown = false;
let isSignupShown = false;

loginBtn.addEventListener('click', () => {
  if (!isLoginShown) {
    loginContainer.style.display = 'block';
    signupContainer.style.display = 'none';
    isLoginShown = true;
    isSignupShown = false;
    scrollToLoginSignup();
  }
});

signupBtn.addEventListener('click', () => {
  if (!isSignupShown) {
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
    isSignupShown = true;
    isLoginShown = false;
    scrollToLoginSignup();
  }
});

signupLink.addEventListener('click', () => {
  if (!isSignupShown) {
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
    isSignupShown = true;
    isLoginShown = false;
    scrollToLoginSignup();
  }
});

headerLoginBtn.addEventListener('click', () => {
  if (!isLoginShown) {
    loginContainer.style.display = 'block';
    signupContainer.style.display = 'none';
    isLoginShown = true;
    isSignupShown = false;
    scrollToLoginSignup();
  }
});

headerSignupBtn.addEventListener('click', () => {
  if (!isSignupShown) {
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
    isSignupShown = true;
    isLoginShown = false;
    scrollToLoginSignup();
  }
});

function scrollToLoginSignup() {
  const loginSignupContainer = document.querySelector('.container');
  loginSignupContainer.scrollIntoView({ behavior: 'smooth' });
}
document.querySelector('.view-collection-btn').addEventListener('click', () => {
    // Fetch product data from a backend API or database
    fetchProductData()
      .then(products => {
        // Populate the product collection section with the fetched data
        const productGrid = document.querySelector('.product-grid');
        products.forEach(product => {
          const productItem = createProductItem(product);
          productGrid.appendChild(productItem);
        });
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  });
  
  function createProductItem(product) {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    return productItem;
  }
  
  function fetchProductData() {
    return new Promise((resolve, reject) => {
      resolve([
        { id: 1, name: 'Nike Air Max 270', price: 120 },
        { id: 2, name: 'Nike Air Running Shoes', price: 90 },
        { id: 3, name: 'Air Jordan Red', price: 150 },
        { id: 4, name: 'Air Force Jordan', price: 130 }
      ]);
    });
  }
const viewCollectionBtn = document.getElementById('view-collection-btn');
const productCollectionSection = document.getElementById('product-collection-section');
viewCollectionBtn.addEventListener('click', () => {
  productCollectionSection.scrollIntoView({ behavior: 'smooth' });
});