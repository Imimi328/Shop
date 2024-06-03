document.addEventListener('DOMContentLoaded', () => {
  loadFeaturedProducts();
  loadProductList();
  handleBackToTopButton();
  handleThemeToggle();
});

function loadFeaturedProducts() {
  const featuredProducts = [
      {
          title: 'Luxury Watch',
          image: 'https://imgs.search.brave.com/1wen_IYyrzpcgd25-EtSbBEFvXZDMyEg4rMwkRPOK30/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAy/NzgvOTcyMy8zNTAx/L2ZpbGVzLzE3LUxv/bmdpbmVzLUJyYW5k/cy5qcGc_dj0xNjUw/OTg1MTM5',
          link: 'https://www.amazon.com/dp/example1'
      },
      {
          title: 'Designer Handbag',
          image: 'https://imgs.search.brave.com/mSCNburiaN_ISBK1a1xvIwXPhyCen7Yd3xUL6U2Edhk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wZXRp/dGVpbnBhcmlzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wOS9BbGV4YW5k/ZXItbWNxdWVlbi1i/YWcuanBn',
          link: 'https://www.amazon.com/dp/example2'
      }
  ];

  const slider = document.getElementById('product-slider');
  featuredProducts.forEach(product => {
      const productElement = createProductElement(product);
      slider.appendChild(productElement);
  });
}

function loadProductList() {
  const products = [
      {
          title: 'Luxury Shoes',
          image: 'https://imgs.search.brave.com/FUFznCdTe1ETwQVQ1_tbsGbPFWgEYxMtnxF0iouZ380/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL3ZhZGVyLXBy/b2QuczMuYW1hem9u/YXdzLmNvbS8xNzEw/ODA2MjY4LU1PTkMt/TVo0Ml9WMS5qcGc_/Y3JvcD0xLjAweHc6/MC42NjN4aDswLDAu/MTM0eGgmcmVzaXpl/PTk4MDoq',
          link: 'https://www.amazon.com/dp/exampleA'
      },
      {
          title: 'Exclusive Perfume',
          image: 'https://imgs.search.brave.com/8zru0x0eRr-mwcnJxw1z2eQCDguji85dhlDKmUUUd6g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlY2VvbWFn/YXppbmUubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzA2/LzI4MTcyMDEwL0xv/dWlzLVZ1aXR0b24t/RmxhY29uLWRFeGNl/cHRpb24uanBn',
          link: 'https://www.amazon.com/dp/exampleB'
      }
  ];

  const productList = document.getElementById('product-list');
  products.forEach(product => {
      const productElement = createProductElement(product);
      productList.appendChild(productElement);
  });
}

function createProductElement(product) {
  const div = document.createElement('div');
  div.classList.add('product');

  const img = document.createElement('img');
  img.src = product.image;
  img.alt = product.title;

  const h3 = document.createElement('h3');
  h3.textContent = product.title;

  const a = document.createElement('a');
  a.href = product.link;
  a.textContent = 'Buy on Amazon';
  a.target = '_blank';
  
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(a);

  return div;
}

function handleBackToTopButton() {
  const backToTopButton = document.getElementById('back-to-top');
  const footer = document.querySelector('footer');

  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          backToTopButton.style.display = 'block';
          const footerTop = footer.getBoundingClientRect().top;
          const buttonBottom = window.innerHeight - backToTopButton.getBoundingClientRect().bottom;
          if (footerTop < buttonBottom) {
              backToTopButton.style.animation = 'bounce 0.5s ease';
              backToTopButton.style.bottom = `${footerTop + 10}px`; // Adjusted to move only 10 pixels up
          } else {
              backToTopButton.style.animation = 'none';
              backToTopButton.style.bottom = '20px'; // Reset to default position
          }
      } else {
          backToTopButton.style.display = 'none';
      }
  });

  backToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Reset animation when it ends
  backToTopButton.addEventListener('animationend', () => {
      backToTopButton.style.animation = 'none';
  });
}


function handleThemeToggle() {
  const themeToggle = document.createElement('button');
  themeToggle.classList.add('theme-toggle');
  themeToggle.innerHTML = '☀️'; // Default emoji for light theme
  document.body.appendChild(themeToggle);

  const toggleTheme = () => {
      const currentTheme = document.body.classList.contains('dark-theme');
      if (currentTheme) {
          document.body.classList.remove('dark-theme');
          themeToggle.innerHTML = '☀️'; // Change emoji to sun for light theme
      } else {
          document.body.classList.add('dark-theme');
          themeToggle.innerHTML = '🌙'; // Change emoji to moon for dark theme
      }
  };

  themeToggle.addEventListener('click', toggleTheme);
}
// Function to transition from light mode to dark mode
function transitionToDarkMode() {
  // Apply CSS classes or styles to trigger the "sucking in" animation effect
  const elements = document.querySelectorAll('.animated-element');
  elements.forEach(element => {
      element.classList.remove('release-animation');
      element.classList.add('suck-in-animation');
  });
}

// Function to transition from dark mode to light mode
function transitionToLightMode() {
  // Apply CSS classes or styles to trigger the "releasing" animation effect
  const elements = document.querySelectorAll('.animated-element');
  elements.forEach(element => {
      element.classList.remove('suck-in-animation');
      element.classList.add('release-animation');
  });
}

// Event listener for theme toggle button
document.getElementById('theme-toggle').addEventListener('click', () => {
  const body = document.body;
  if (body.classList.contains('dark-theme')) {
      transitionToLightMode();
  } else {
      transitionToDarkMode();
  }
  body.classList.toggle('dark-theme');
});
