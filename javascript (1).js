
if (typeof emailjs !== "undefined") {
  emailjs.init("ASz3B4rvbAmcIvXY9");
}


const EMAILJS_SERVICE_ID = "service_qtglfwb";
const CHECKOUT_TEMPLATE_ID = "template_jgkd5f6"; // Order template (created in EmailJS for the checkout/payment form)
const DELIVERY_FEE = 5;

////////////// Contact Form /////////////////

const contactForm = document.getElementById('contact-form');


if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('service_qtglfwb', 'template_ykt3e55', this)
      .then(function () {
        alert('Seccessfully submitted');
      }, function (error) {
        alert('Error ' + JSON.stringify(error));
      });
  });
}

////////////// Nav-Menu /////////////////

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
}


// ////////////////// Scroll Animation //////////////////

const scrollElements = document.querySelectorAll(
  ".banner, " +
  ".categories, " +
  ".category-col, " +
  ".world, " +
  ".coat, " +
  ".list, " +
  ".newsletter, " +
  ".toolbar, " +
  ".grid, " +
  ".card, " +
  ".stats-bar, " +
  ".about-story, " +
  ".mission-vision, " +
  ".timeline-section, " +
  ".values, " +
  ".team, " +
  ".about-quote, " +
  ".about-cta, " +
  ".contact-main, " +
  ".contact-info-cards, " +
  ".contact-map"
);

scrollElements.forEach(function(element) {
  element.classList.add("scroll-reveal");
});

const observer = new IntersectionObserver(function(entries) {

  entries.forEach(function(entry) {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }

  });

}, {
  threshold: 0.15
});

scrollElements.forEach(function(element) {
  observer.observe(element);
});

/* =====================================================================
  
   --------------------------------------------------------------------- */
const PRODUCT_EXTRA_INFO = {
  "Wide Sleeve Dress": { sizes: ["XS", "S", "M", "L", "XL"], colors: ["Cream", "Black", "Terracotta"], material: "Cotton-linen blend" },
  "Wrap Robe Dress": { sizes: ["XS", "S", "M", "L"], colors: ["Beige", "Olive"], material: "Viscose blend" },
  "Mini Blazer Dress": { sizes: ["XS", "S", "M", "L", "XL"], colors: ["Black", "Camel"], material: "Structured twill" },
  "Open Back Dress": { sizes: ["S", "M", "L"], colors: ["Cream", "Rust"], material: "Satin blend" },
  "Wide Sleeve Wrap Dress": { sizes: ["XS", "S", "M", "L"], colors: ["Beige", "Chocolate"], material: "Soft crepe" },
  "Wide Sleeve Cape": { sizes: ["One Size"], colors: ["Cream", "Grey"], material: "Wool blend" },
  "Wrap Jacket Dress": { sizes: ["S", "M", "L", "XL"], colors: ["Camel", "Black"], material: "Cotton twill" },
  "Linen Blend Blazer": { sizes: ["XS", "S", "M", "L"], colors: ["Beige", "Navy"], material: "Linen blend" },
  "Ribbed Knit Top": { sizes: ["XS", "S", "M", "L", "XL"], colors: ["Cream", "Sage"], material: "Ribbed cotton knit" },
  "Wide Leg Trouser": { sizes: ["XS", "S", "M", "L"], colors: ["Black", "Beige"], material: "Tailored twill" },
  "Leather Shoulder Bag": { sizes: ["One Size"], colors: ["Tan", "Black"], material: "Genuine leather" },
  "Minimal Strappy Heels": { sizes: ["36", "37", "38", "39", "40"], colors: ["Nude", "Black"], material: "Faux leather" },
  "Oversized Sunglasses": { sizes: ["One Size"], colors: ["Tortoise", "Black"], material: "Acetate frame" },
};
const DEFAULT_EXTRA_INFO = { sizes: ["S", "M", "L"], colors: ["Beige", "Black"], material: "Premium blend fabric" };

function getProductExtraInfo(name) {
  return PRODUCT_EXTRA_INFO[name] || DEFAULT_EXTRA_INFO;
}

/* --------------------------------------------------------------- */
const CATALOG_CATEGORIES = [
  { label: "Women's Collection", href: "women-collection.html" },
  { label: "Men's Collection", href: "men-collection.html" },
  { label: "Dresses", href: "dress-collection.html" },
  { label: "Accessories", href: "accessory.html" },
];
const COLLECTION_PRODUCT_NAMES = [
  { name: "Wide Sleeve Dress", price: 98 },
  { name: "Wrap Robe Dress", price: 79 },
  { name: "Mini Blazer Dress", price: 85 },
  { name: "Open Back Dress", price: 88 },
  { name: "Wide Sleeve Wrap Dress", price: 72 },
  { name: "Wide Sleeve Cape", price: 55 },
  { name: "Wrap Jacket Dress", price: 69 },
];
const BEST_SELLERS = [
  { name: "Linen Blend Blazer", price: 89.99 },
  { name: "Ribbed Knit Top", price: 29.99 },
  { name: "Wide Leg Trouser", price: 59.99 },
  { name: "Leather Shoulder Bag", price: 79.99 },
  { name: "Minimal Strappy Heels", price: 49.99 },
  { name: "Oversized Sunglasses", price: 19.99 },
];

const SEARCH_CATALOG = [];
CATALOG_CATEGORIES.forEach(function (cat) {
  COLLECTION_PRODUCT_NAMES.forEach(function (p) {
    SEARCH_CATALOG.push({ name: p.name, price: p.price, category: cat.label, href: cat.href });
  });
});
BEST_SELLERS.forEach(function (p) {
  SEARCH_CATALOG.push({ name: p.name, price: p.price, category: "Best Sellers", href: "index (1).html#shop" });
});

/* ---------------------------------------------------------------------*/
const CART_KEY = "lunoraCart";

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}
function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(function (item) { return item.name === product.name; });
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name: product.name, price: product.price, image: product.image || "", qty: 1 });
  }
  saveCart(cart);
  showToast(product.name + " added to cart");
}
function removeFromCart(name) {
  saveCart(getCart().filter(function (item) { return item.name !== name; }));
  renderCart();
}
function changeCartQty(name, delta) {
  const cart = getCart();
  const item = cart.find(function (i) { return i.name === name; });
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(name); return; }
  saveCart(cart);
  renderCart();
}
function cartTotal(cart) {
  return cart.reduce(function (sum, item) { return sum + item.price * item.qty; }, 0);
}
function updateCartBadge() {
  const badge = document.getElementById("cart-count");
  if (!badge) return;
  const count = getCart().reduce(function (sum, item) { return sum + item.qty; }, 0);
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}
function renderCart() {
  const cart = getCart();
  const listEl = document.getElementById("cart-items-list");
  const totalEl = document.getElementById("cart-total-amount");
  if (!listEl || !totalEl) return;

  if (cart.length === 0) {
    listEl.innerHTML = '<p class="cart-empty-message">Your cart is empty.</p>';
  } else {
    listEl.innerHTML = cart.map(function (item) {
      const safeName = item.name.replace(/'/g, "\\'");
      return (
        '<div class="cart-item">' +
          '<div class="cart-item-info">' +
            '<p class="cart-item-name">' + item.name + '</p>' +
            '<p class="cart-item-price">$' + item.price.toFixed(2) + ' &times; ' + item.qty + '</p>' +
          '</div>' +
          '<div class="cart-item-controls">' +
            '<button class="qty-btn" onclick="changeCartQty(\'' + safeName + '\', -1)">&minus;</button>' +
            '<span>' + item.qty + '</span>' +
            '<button class="qty-btn" onclick="changeCartQty(\'' + safeName + '\', 1)">+</button>' +
            '<button class="cart-remove-btn" onclick="removeFromCart(\'' + safeName + '\')">Remove</button>' +
          '</div>' +
        '</div>'
      );
    }).join("");
  }
  totalEl.textContent = "$" + cartTotal(cart).toFixed(2);
}

/* small "added to cart" style confirmation message */
function showToast(message) {
  let toast = document.getElementById("lunora-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "lunora-toast";
    toast.className = "lunora-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(function () { toast.classList.remove("show"); }, 2200);
}

/* ---------------------------------------------------------------------
   3. ACCOUNT / LOGIN 
   --------------------------------------------------------------------- */
const USERS_KEY = "lunoraUsers";
const CURRENT_USER_KEY = "lunoraCurrentUser";

function getUsers() { return JSON.parse(localStorage.getItem(USERS_KEY) || "[]"); }
function saveUsers(users) { localStorage.setItem(USERS_KEY, JSON.stringify(users)); }
function getCurrentUser() { return JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || "null"); }
function setCurrentUser(user) {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  renderProfileModal();
}
function logoutUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
  renderProfileModal();
}
function signUpUser(name, email, password) {
  const users = getUsers();
  if (users.some(function (u) { return u.email === email; })) {
    return { ok: false, message: "An account with this email already exists." };
  }
  users.push({ name: name, email: email, password: password });
  saveUsers(users);
  setCurrentUser({ name: name, email: email });
  return { ok: true };
}
function loginUser(email, password) {
  const user = getUsers().find(function (u) { return u.email === email && u.password === password; });
  if (!user) return { ok: false, message: "Incorrect email or password." };
  setCurrentUser({ name: user.name, email: user.email });
  return { ok: true };
}
function renderProfileModal() {
  const container = document.getElementById("profile-modal-content");
  if (!container) return;
  const user = getCurrentUser();

  if (user) {
    container.innerHTML =
      '<h3>Welcome back, ' + user.name + '!</h3>' +
      '<p class="profile-email">' + user.email + '</p>' +
      '<button class="lunora-btn" id="logout-btn">Log Out</button>';
    document.getElementById("logout-btn").addEventListener("click", logoutUser);
    return;
  }

  container.innerHTML =
    '<div class="auth-tabs">' +
      '<button type="button" class="auth-tab active" id="tab-login">Log In</button>' +
      '<button type="button" class="auth-tab" id="tab-signup">Sign Up</button>' +
    '</div>' +
    '<form id="login-form" class="auth-form">' +
      '<input type="email" id="login-email" placeholder="Email Address" required />' +
      '<input type="password" id="login-password" placeholder="Password" required />' +
      '<p class="auth-error" id="login-error"></p>' +
      '<button type="submit" class="lunora-btn">Log In</button>' +
    '</form>' +
    '<form id="signup-form" class="auth-form" style="display:none;">' +
      '<input type="text" id="signup-name" placeholder="Full Name" required />' +
      '<input type="email" id="signup-email" placeholder="Email Address" required />' +
      '<input type="password" id="signup-password" placeholder="Password (min 6 characters)" minlength="6" required />' +
      '<p class="auth-error" id="signup-error"></p>' +
      '<button type="submit" class="lunora-btn">Create Account</button>' +
    '</form>';

  const tabLogin = document.getElementById("tab-login");
  const tabSignup = document.getElementById("tab-signup");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  tabLogin.addEventListener("click", function () {
    tabLogin.classList.add("active");
    tabSignup.classList.remove("active");
    loginForm.style.display = "flex";
    signupForm.style.display = "none";
  });
  tabSignup.addEventListener("click", function () {
    tabSignup.classList.add("active");
    tabLogin.classList.remove("active");
    signupForm.style.display = "flex";
    loginForm.style.display = "none";
  });
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const result = loginUser(
      document.getElementById("login-email").value.trim(),
      document.getElementById("login-password").value
    );
    if (!result.ok) document.getElementById("login-error").textContent = result.message;
  });
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const result = signUpUser(
      document.getElementById("signup-name").value.trim(),
      document.getElementById("signup-email").value.trim(),
      document.getElementById("signup-password").value
    );
    if (!result.ok) document.getElementById("signup-error").textContent = result.message;
  });
}

/* ---------------------------------------------------------------------
   4. PRODUCT DETAIL MODAL (opens when a product card is clicked)
   --------------------------------------------------------------------- */
function renderProductModal(product) {
  const info = getProductExtraInfo(product.name);
  const container = document.getElementById("product-modal-content");
  container.innerHTML =
    (product.image ? '<img class="product-modal-img" src="' + product.image + '" alt="' + product.name + '" />' : '') +
    '<div class="product-modal-info">' +
      '<h3>' + product.name + '</h3>' +
      '<p class="product-modal-price">$' + product.price.toFixed(2) + '</p>' +
      '<p class="product-modal-detail"><strong>Material:</strong> ' + info.material + '</p>' +
      '<p class="product-modal-detail"><strong>Available Sizes:</strong> ' + info.sizes.join(", ") + '</p>' +
      '<p class="product-modal-detail"><strong>Available Colors:</strong> ' + info.colors.join(", ") + '</p>' +
      '<button class="lunora-btn add-to-cart-btn" id="modal-add-to-cart">Add to Cart</button>' +
    '</div>';
  document.getElementById("modal-add-to-cart").addEventListener("click", function () {
    addToCart(product);
  });
}

/* Wire up clicks on every product card already on the page.
   Works for the collection-page grid (.card) and the home page
   "Best Sellers" row (.wish). Info is read straight from the card's
   own text, so it always matches what the visitor sees. */
function setupProductCardClicks() {
  document.querySelectorAll(".card").forEach(function (card) {
    card.addEventListener("click", function () {
      const nameEl = card.querySelector(".card-name");
      const priceEl = card.querySelector(".card-price");
      const imgEl = card.querySelector(".card-img img");
      if (!nameEl || !priceEl) return;
      openProductModal({
        name: nameEl.textContent.trim(),
        price: parseFloat(priceEl.textContent.replace("$", "")),
        image: imgEl ? imgEl.getAttribute("src") : "",
      });
    });
  });

  document.querySelectorAll(".wish").forEach(function (card) {
    card.addEventListener("click", function () {
      const nameEl = card.querySelector(".product-name");
      const imgEl = card.querySelector(".third-imgs");
      if (!nameEl) return;
      const fullText = nameEl.textContent.trim();
      const priceMatch = fullText.match(/\$([\d.]+)/);
      openProductModal({
        name: fullText.replace(/\$[\d.]+/, "").trim(),
        price: priceMatch ? parseFloat(priceMatch[1]) : 0,
        image: imgEl ? imgEl.getAttribute("src") : "",
      });
    });
  });
}

/* ---------------------------------------------------------------------
   5. CHECKOUT
   --------------------------------------------------------------------- */
function renderCheckoutModal() {
  const cart = getCart();
  const container = document.getElementById("checkout-modal-content");
  const subtotal = cartTotal(cart);
  const total = subtotal + DELIVERY_FEE;

  const itemsHtml = cart.map(function (item) {
    return (
      '<div class="checkout-summary-item">' +
        '<span class="checkout-summary-item-name">' + item.name +
          ' <span class="checkout-summary-item-qty">x' + item.qty + '</span></span>' +
        '<span>$' + (item.price * item.qty).toFixed(2) + '</span>' +
      '</div>'
    );
  }).join("");

  container.innerHTML =
    '<h3 class="checkout-title">Checkout</h3>' +
    '<div class="checkout-grid">' +

      '<form id="checkout-form" class="checkout-form" novalidate>' +
        '<h4 class="checkout-section-title">Contact Information</h4>' +
        '<div class="checkout-row">' +
          '<input type="text" id="checkout-first-name" placeholder="First Name" required />' +
          '<input type="text" id="checkout-last-name" placeholder="Last Name" required />' +
        '</div>' +
        '<input type="email" id="checkout-email" placeholder="Email Address" required />' +
        '<input type="tel" id="checkout-phone" placeholder="Phone Number" required />' +

        '<h4 class="checkout-section-title">Delivery Information</h4>' +
        '<textarea id="checkout-address" placeholder="Full delivery address (street, apartment/unit...)" required></textarea>' +
        '<input type="text" id="checkout-city-country" placeholder="City / Country" required />' +
        '<textarea id="checkout-notes" placeholder="Delivery notes (optional) — landmark, preferred time, etc."></textarea>' +

        '<p class="checkout-error" id="checkout-error"></p>' +
        '<button type="submit" class="cart-checkout-btn checkout-submit-btn" id="checkout-submit-btn">Place Order</button>' +
      '</form>' +

      '<div class="checkout-summary">' +
        '<h4 class="checkout-section-title">Your Order</h4>' +
        '<div class="checkout-summary-items">' + itemsHtml + '</div>' +
        '<div class="checkout-summary-row"><span>Subtotal</span><span>$' + subtotal.toFixed(2) + '</span></div>' +
        '<div class="checkout-summary-row"><span>Delivery Fee</span><span>$' + DELIVERY_FEE.toFixed(2) + '</span></div>' +
        '<div class="checkout-summary-row checkout-summary-total"><span>Total</span><span>$' + total.toFixed(2) + '</span></div>' +
        '<p class="checkout-cod-note">The order payment will be collected in cash when your order is delivered.</p>' +
      '</div>' +

    '</div>';

  document.getElementById("checkout-form").addEventListener("submit", handleCheckoutSubmit);
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const cart = getCart();
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  const errorEl = document.getElementById("checkout-error");
  const firstName = document.getElementById("checkout-first-name").value.trim();
  const lastName = document.getElementById("checkout-last-name").value.trim();
  const email = document.getElementById("checkout-email").value.trim();
  const phone = document.getElementById("checkout-phone").value.trim();
  const address = document.getElementById("checkout-address").value.trim();
  const cityCountry = document.getElementById("checkout-city-country").value.trim();
  const notes = document.getElementById("checkout-notes").value.trim();

  if (!firstName || !lastName || !email || !phone || !address || !cityCountry) {
    errorEl.textContent = "Please fill in all required fields.";
    return;
  }
  errorEl.textContent = "";

  const subtotal = cartTotal(cart);
  const total = subtotal + DELIVERY_FEE;

  const orderItemsText = cart.map(function (item) {
    return item.name + "  x" + item.qty + "  \u2014  $" + (item.price * item.qty).toFixed(2);
  }).join("\n");

  const fullSummary =
    "New order from " + firstName + " " + lastName + "\n" +
    "Email: " + email + "\n" +
    "Phone: " + phone + "\n" +
    "Address: " + address + ", " + cityCountry + "\n" +
    "Delivery notes: " + (notes || "\u2014") + "\n\n" +
    "Order:\n" + orderItemsText + "\n\n" +
    "Subtotal: $" + subtotal.toFixed(2) + "\n" +
    "Delivery Fee: $" + DELIVERY_FEE.toFixed(2) + "\n" +
    "Total: $" + total.toFixed(2) + "\n\n" +
    "Payment: Cash on delivery";

  /* ----------------------------------------------------*/
  const templateParams = {
    customer_name: firstName + " " + lastName,
    customer_email: email,
    customer_phone: phone,
    delivery_address: address,
    city_country: cityCountry,
    order_notes: notes || "\u2014",
    order_items: orderItemsText,
    subtotal: "$" + subtotal.toFixed(2),
    delivery_fee: "$" + DELIVERY_FEE.toFixed(2),
    order_total: "$" + total.toFixed(2),
    message: fullSummary
  };

  const submitBtn = document.getElementById("checkout-submit-btn");
  submitBtn.disabled = true;
  submitBtn.textContent = "Placing your order...";

  emailjs.send(EMAILJS_SERVICE_ID, CHECKOUT_TEMPLATE_ID, templateParams).then(function () {
    saveCart([]);
    renderCheckoutSuccess();
  }, function (error) {
    submitBtn.disabled = false;
    submitBtn.textContent = "Place Order";
    errorEl.textContent = "Something went wrong sending your order. Please try again.";
    console.error(error);
  });
}

function renderCheckoutSuccess() {
  const container = document.getElementById("checkout-modal-content");
  container.innerHTML =
    '<div class="checkout-success">' +
      '<h3>Thank you! Your order has been received.</h3>' +
      '<p>We will contact you shortly to confirm your order.</p>' +
      '<button class="lunora-btn" id="checkout-success-close">Continue Shopping</button>' +
    '</div>';
  document.getElementById("checkout-success-close").addEventListener("click", closeAllPopups);
}

/* ---------------------------------------------------------------------
   6. SEARCH
   --------------------------------------------------------------------- */
function setupSearch() {
  const input = document.getElementById("search-input");
  if (!input) return;
  input.addEventListener("input", function () {
    const query = input.value.trim().toLowerCase();
    const resultsEl = document.getElementById("search-results");
    if (query.length === 0) { resultsEl.innerHTML = ""; return; }

    const matches = SEARCH_CATALOG.filter(function (p) {
      return p.name.toLowerCase().includes(query);
    });

    if (matches.length === 0) {
      resultsEl.innerHTML = '<p class="search-no-results">No products found.</p>';
      return;
    }
    resultsEl.innerHTML = matches.slice(0, 8).map(function (p) {
      return (
        '<a class="search-result-item" href="' + p.href + '">' +
          '<span class="search-result-name">' + p.name + '</span>' +
          '<span class="search-result-meta">' + p.category + ' &middot; $' + p.price.toFixed(2) + '</span>' +
        '</a>'
      );
    }).join("");
  });
}

/* ---------------------------------------------------------------------
   7. BUILDING & OPENING THE POPUPS
   
   --------------------------------------------------------------------- */
function injectLunoraUI() {
  const wrapper = document.createElement("div");
  wrapper.innerHTML =
    '<div id="lunora-overlay" class="lunora-overlay"></div>' +

    '<aside id="cart-panel" class="cart-panel">' +
      '<div class="cart-panel-header">' +
        '<h3>Your Cart</h3>' +
        '<button class="close-btn" id="cart-close-btn">&times;</button>' +
      '</div>' +
      '<div id="cart-items-list" class="cart-items-list"></div>' +
      '<div class="cart-panel-footer">' +
        '<div class="cart-total-row"><span>Total</span><span id="cart-total-amount">$0.00</span></div>' +
        '<button class="cart-checkout-btn" id="cart-checkout-btn">Proceed to Checkout</button>' +
      '</div>' +
    '</aside>' +

    '<div id="profile-modal" class="lunora-modal">' +
      '<div class="lunora-modal-box">' +
        '<button class="close-btn" id="profile-close-btn">&times;</button>' +
        '<div id="profile-modal-content"></div>' +
      '</div>' +
    '</div>' +

    '<div id="search-overlay" class="search-overlay">' +
      '<div class="search-box">' +
        '<button class="close-btn" id="search-close-btn">&times;</button>' +
        '<input type="text" id="search-input" placeholder="Search for products..." autocomplete="off" />' +
        '<div id="search-results" class="search-results"></div>' +
      '</div>' +
    '</div>' +

    '<div id="product-modal" class="lunora-modal">' +
      '<div class="lunora-modal-box product-modal-box">' +
        '<button class="close-btn" id="product-close-btn">&times;</button>' +
        '<div id="product-modal-content"></div>' +
      '</div>' +
    '</div>' +

    '<div id="checkout-modal" class="lunora-modal">' +
      '<div class="lunora-modal-box checkout-modal-box">' +
        '<button class="close-btn" id="checkout-close-btn">&times;</button>' +
        '<div id="checkout-modal-content"></div>' +
      '</div>' +
    '</div>';

  document.body.appendChild(wrapper);
}

function closeAllPopups() {
  const ids = ["cart-panel", "profile-modal", "search-overlay", "product-modal", "checkout-modal"];
  ids.forEach(function (id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove("open");
  });
  const overlay = document.getElementById("lunora-overlay");
  if (overlay) overlay.classList.remove("show");
}
function openCart() {
  closeAllPopups();
  renderCart();
  document.getElementById("cart-panel").classList.add("open");
  document.getElementById("lunora-overlay").classList.add("show");
}
function openProfile() {
  closeAllPopups();
  renderProfileModal();
  document.getElementById("profile-modal").classList.add("open");
  document.getElementById("lunora-overlay").classList.add("show");
}
function openSearch() {
  closeAllPopups();
  document.getElementById("search-overlay").classList.add("open");
  document.getElementById("lunora-overlay").classList.add("show");
  const input = document.getElementById("search-input");
  input.value = "";
  document.getElementById("search-results").innerHTML = "";
  setTimeout(function () { input.focus(); }, 150);
}
function openProductModal(product) {
  closeAllPopups();
  renderProductModal(product);
  document.getElementById("product-modal").classList.add("open");
  document.getElementById("lunora-overlay").classList.add("show");
}
function openCheckout() {
  closeAllPopups();
  renderCheckoutModal();
  document.getElementById("checkout-modal").classList.add("open");
  document.getElementById("lunora-overlay").classList.add("show");
}

function setupIconHandlers() {
  const cartIcon = document.getElementById("cart-icon");
  const profileIcon = document.getElementById("profile-icon");
  const searchIcon = document.getElementById("search-icon");
  if (cartIcon) cartIcon.addEventListener("click", openCart);
  if (profileIcon) profileIcon.addEventListener("click", openProfile);
  if (searchIcon) searchIcon.addEventListener("click", openSearch);

  document.getElementById("cart-close-btn").addEventListener("click", closeAllPopups);
  document.getElementById("profile-close-btn").addEventListener("click", closeAllPopups);
  document.getElementById("search-close-btn").addEventListener("click", closeAllPopups);
  document.getElementById("product-close-btn").addEventListener("click", closeAllPopups);
  document.getElementById("checkout-close-btn").addEventListener("click", closeAllPopups);
  document.getElementById("lunora-overlay").addEventListener("click", closeAllPopups);

  document.getElementById("cart-checkout-btn").addEventListener("click", function () {
    if (getCart().length === 0) { alert("Your cart is empty."); return; }
    openCheckout();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAllPopups();
  });
}

/* Adds the little number badge next to the cart icon */
function setupCartBadge() {
  const cartIcon = document.getElementById("cart-icon");
  if (!cartIcon || document.getElementById("cart-count")) return;
  const iconWrapper = document.createElement("span");
  iconWrapper.className = "cart-icon-wrapper";
  cartIcon.parentNode.insertBefore(iconWrapper, cartIcon);
  iconWrapper.appendChild(cartIcon);
  const badge = document.createElement("span");
  badge.id = "cart-count";
  badge.className = "cart-count-badge";
  badge.textContent = "0";
  iconWrapper.appendChild(badge);
}

/* ---------------------------------------------------------------------
   8. INITIALIZE EVERYTHING ONCE THE PAGE HAS LOADED
   --------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  injectLunoraUI();
  setupCartBadge();
  setupIconHandlers();
  setupSearch();
  setupProductCardClicks();
  updateCartBadge();
});



  