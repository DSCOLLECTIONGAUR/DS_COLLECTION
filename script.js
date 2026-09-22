const WHATSAPP_NUMBER = "9779765894505";

const products = [
  {id:1,name:"Premium Saree",price:2500,category:"Fashion",icon:"🥻"},
  {id:2,name:"Ladies Kurti",price:1200,category:"Fashion",icon:"👗"},
  {id:3,name:"Men's Shirt",price:900,category:"Fashion",icon:"👔"},
  {id:4,name:"T-Shirt",price:650,category:"Fashion",icon:"👕"},
  {id:5,name:"Cooking Oil 1L",price:210,category:"Grocery",icon:"🫗"},
  {id:6,name:"Bath Soap",price:80,category:"Personal Care",icon:"🧼"},
  {id:7,name:"Shampoo",price:180,category:"Personal Care",icon:"🧴"},
  {id:8,name:"Dishwash Liquid",price:150,category:"Home",icon:"🧽"},
  {id:9,name:"Toothpaste",price:120,category:"Personal Care",icon:"🪥"},
  {id:10,name:"Rice 5kg",price:550,category:"Grocery",icon:"🍚"},
  {id:11,name:"Mobile Charger",price:450,category:"Accessories",icon:"🔌"},
  {id:12,name:"Kitchen Container Set",price:650,category:"Home",icon:"🍱"},
  {id:13,name:"Sugar 1kg",price:110,category:"Grocery",icon:"🍚"}
];

let cart = JSON.parse(localStorage.getItem("ds_cart") || "[]");
let activeCategory = "All";

const grid = document.getElementById("productGrid");
const categories = document.getElementById("categories");
const searchInput = document.getElementById("searchInput");

function money(n) {
  return "Rs. " + n.toLocaleString("en-IN");
}

function renderCategories() {
  const cats = ["All", ...new Set(products.map(p => p.category))];

  categories.innerHTML = cats.map(c =>
    `<button class="category ${c === activeCategory ? "active" : ""}"
      onclick="setCategory('${c}')">${c}</button>`
  ).join("");
}

function setCategory(cat) {
  activeCategory = cat;
  renderCategories();
  renderProducts();
}

function renderProducts() {
  const q = searchInput.value.toLowerCase().trim();

  const list = products.filter(p =>
    (activeCategory === "All" || p.category === activeCategory) &&
    (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    )
  );

  grid.innerHTML = list.length
    ? list.map(p => `
      <article class="product">
        <div class="product-img">${p.icon}</div>

        <div class="product-body">
          <div class="product-cat">${p.category}</div>
          <h3>${p.name}</h3>

          <div class="price">${money(p.price)}</div>

          <button class="add-btn" onclick="addToCart(${p.id})">
            Add to Cart
          </button>
        </div>
      </article>
    `).join("")
    : `<p>No products found.</p>`;
}

function addToCart(id) {
  const item = cart.find(x => x.id === id);

  if (item) {
    item.qty++;
  } else {
    cart.push({
      id: id,
      qty: 1
    });
  }

  saveCart();
  showToast("Added to cart");
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);

  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) {
    cart = cart.filter(x => x.id !== id);
  }

  saveCart();
}

function saveCart() {
  localStorage.setItem("ds_cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const items = document.getElementById("cartItems");

  const count = cart.reduce((s, x) => s + x.qty, 0);

  document.getElementById("cartCount").textContent = count;

  if (!cart.length) {
    items.innerHTML = '<p class="muted">Your cart is empty.</p>';
    document.getElementById("cartTotal").textContent = money(0);
    return;
  }

  let total = 0;

  items.innerHTML = cart.map(x => {
    const p = products.find(a => a.id === x.id);

    if (!p) return "";

    const sub = p.price * x.qty;
    total += sub;

    return `
      <div class="cart-item">

        <div>
          <h4>${p.icon} ${p.name}</h4>
          <small>${money(p.price)} each</small>
        </div>

        <div>
          <strong>${money(sub)}</strong>

          <div class="qty">
            <button onclick="changeQty(${p.id},-1)">−</button>
            <span>${x.qty}</span>
            <button onclick="changeQty(${p.id},1)">+</button>
          </div>
        </div>

      </div>
    `;
  }).join("");

  document.getElementById("cartTotal").textContent = money(total);
}

function openCart() {
  document.getElementById("cartDrawer").style.display = "block";
}

function closeCart() {
  document.getElementById("cartDrawer").style.display = "none";
}

function openModal() {
  document.getElementById("orderModal").style.display = "grid";
}

function closeModal() {
  document.getElementById("orderModal").style.display = "none";
}

function checkout() {
  if (!cart.length) {
    showToast("Your cart is empty");
    return;
  }

  closeCart();
  openModal();
}


/* =========================
   WHATSAPP ORDER
========================= */

document.getElementById("orderForm").addEventListener("submit", function(e) {

  e.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const note = document.getElementById("customerNote").value.trim();

  if (!name || !phone || !address) {
    alert("Please fill Name, Mobile Number and Delivery Address.");
    return;
  }

  let total = 0;

  const lines = cart.map((x, i) => {

    const p = products.find(a => a.id === x.id);

    if (!p) return "";

    const sub = p.price * x.qty;

    total += sub;

    return `${i + 1}. ${p.name} x ${x.qty} = ${money(sub)}`;

  }).filter(Boolean);

  const message =
`🛍️ NEW ORDER - DS COLLECTION

${lines.join("\n")}

💰 Total: ${money(total)}

👤 Name: ${name}
📱 Mobile: ${phone}
📍 Address: ${address}
🚚 Delivery: Gaur

${note ? `📝 Note: ${note}` : ""}

Thank you for ordering from DS Collection.`;

  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

  closeModal();

});


/* =========================
   BUTTONS
========================= */

document.getElementById("cartBtn").onclick = openCart;

document.getElementById("closeCart").onclick = closeCart;

document.getElementById("checkoutBtn").onclick = checkout;

document.getElementById("closeModal").onclick = closeModal;

searchInput.addEventListener("input", renderProducts);


/* =========================
   TOAST
========================= */

function showToast(text) {

  const t = document.getElementById("toast");

  t.textContent = text;

  t.classList.add("show");

  setTimeout(() => {
    t.classList.remove("show");
  }, 1800);
}


/* =========================
   START WEBSITE
========================= */

renderCategories();
renderProducts();
renderCart();
