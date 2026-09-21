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
  {id:13,name:"Sugar",price:110,category:"Grocery",icon:"🍚"}
  const WHATSAPP_NUMBER = "9779765894505";
];

const products = [

  // ===== GROCERY =====
  {id:1,name:"Rice 5kg",price:550,category:"Grocery",image:"rice-5kg.jpg"},
  {id:2,name:"Rice 10kg",price:1050,category:"Grocery",image:"rice-10kg.jpg"},
  {id:3,name:"Rice 25kg",price:1400,category:"Grocery",image:"rice-25kg.jpg"},
  {id:4,name:"Basmati Rice 1kg",price:180,category:"Grocery",image:"basmati-rice.jpg"},
  {id:5,name:"Masoor Dal 1kg",price:140,category:"Grocery",image:"masoor-dal.jpg"},
  {id:6,name:"Moong Dal 1kg",price:185,category:"Grocery",image:"moong-dal.jpg"},
  {id:7,name:"Chana Dal 1kg",price:150,category:"Grocery",image:"chana-dal.jpg"},
  {id:8,name:"Arhar Dal 1kg",price:190,category:"Grocery",image:"arhar-dal.jpg"},
  {id:9,name:"Sugar 1kg",price:110,category:"Grocery",image:"sugar-1kg.jpg"},
  {id:10,name:"Salt 1kg",price:30,category:"Grocery",image:"salt-1kg.jpg"},
  {id:11,name:"Atta 1kg",price:70,category:"Grocery",image:"atta-1kg.jpg"},
  {id:12,name:"Maida 1kg",price:65,category:"Grocery",image:"maida-1kg.jpg"},
  {id:13,name:"Suji 500g",price:55,category:"Grocery",image:"suji-500g.jpg"},
  {id:14,name:"Cooking Oil 1L",price:270,category:"Grocery",image:"cooking-oil-1l.jpg"},
  {id:15,name:"Mustard Oil 1L",price:280,category:"Grocery",image:"mustard-oil-1l.jpg"},
  {id:16,name:"Ghee 500ml",price:500,category:"Grocery",image:"ghee-500ml.jpg"},
  {id:17,name:"Tea 250g",price:130,category:"Grocery",image:"tea-250g.jpg"},
  {id:18,name:"Coffee 100g",price:250,category:"Grocery",image:"coffee-100g.jpg"},
  {id:19,name:"Noodles",price:20,category:"Grocery",image:"noodles.jpg"},
  {id:20,name:"Pasta 500g",price:100,category:"Grocery",image:"pasta-500g.jpg"},

  // ===== SNACKS & DRINKS =====
  {id:21,name:"Biscuits",price:30,category:"Snacks",image:"biscuits.jpg"},
  {id:22,name:"Cornflakes",price:250,category:"Snacks",image:"cornflakes.jpg"},
  {id:23,name:"Chiura 1kg",price:85,category:"Snacks",image:"chiura-1kg.jpg"},
  {id:24,name:"Potato Chips",price:50,category:"Snacks",image:"potato-chips.jpg"},
  {id:25,name:"Bhujia",price:50,category:"Snacks",image:"bhujia.jpg"},
  {id:26,name:"Dalmoth",price:60,category:"Snacks",image:"dalmoth.jpg"},
  {id:27,name:"Namkeen",price:50,category:"Snacks",image:"namkeen.jpg"},
  {id:28,name:"Chocolate",price:50,category:"Snacks",image:"chocolate.jpg"},
  {id:29,name:"Candy",price:20,category:"Snacks",image:"candy.jpg"},
  {id:30,name:"Juice 1L",price:275,category:"Drinks",image:"juice-1l.jpg"},
  {id:31,name:"Soft Drink 1.5L",price:180,category:"Drinks",image:"soft-drink-1-5l.jpg"},
  {id:32,name:"Mineral Water 1L",price:25,category:"Drinks",image:"mineral-water.jpg"},
  {id:33,name:"Milk 1L",price:100,category:"Drinks",image:"milk-1l.jpg"},
  {id:34,name:"Curd",price:80,category:"Drinks",image:"curd.jpg"},
  {id:35,name:"Bread",price:60,category:"Drinks",image:"bread.jpg"},

  // ===== MASALA =====
  {id:36,name:"Turmeric Powder 100g",price:35,category:"Masala",image:"turmeric-powder.jpg"},
  {id:37,name:"Chilli Powder 100g",price:45,category:"Masala",image:"chilli-powder.jpg"},
  {id:38,name:"Coriander Powder 100g",price:35,category:"Masala",image:"coriander-powder.jpg"},
  {id:39,name:"Cumin 100g",price:60,category:"Masala",image:"cumin.jpg"},
  {id:40,name:"Black Pepper 50g",price:70,category:"Masala",image:"black-pepper.jpg"},
  {id:41,name:"Garam Masala",price:60,category:"Masala",image:"garam-masala.jpg"},
  {id:42,name:"Meat Masala",price:60,category:"Masala",image:"meat-masala.jpg"},
  {id:43,name:"Ginger Garlic Paste",price:100,category:"Masala",image:"ginger-garlic-paste.jpg"},
  {id:44,name:"Tomato Sauce",price:90,category:"Masala",image:"tomato-sauce.jpg"},
  {id:45,name:"Chilli Sauce",price:90,category:"Masala",image:"chilli-sauce.jpg"},

  // ===== PERSONAL CARE =====
  {id:46,name:"Bath Soap",price:50,category:"Personal Care",image:"bath-soap.jpg"},
  {id:47,name:"Hand Wash",price:120,category:"Personal Care",image:"hand-wash.jpg"},
  {id:48,name:"Shampoo",price:180,category:"Personal Care",image:"shampoo.jpg"},
  {id:49,name:"Conditioner",price:220,category:"Personal Care",image:"conditioner.jpg"},
  {id:50,name:"Toothpaste",price:120,category:"Personal Care",image:"toothpaste.jpg"},
  {id:51,name:"Toothbrush",price:50,category:"Personal Care",image:"toothbrush.jpg"},
  {id:52,name:"Face Wash",price:180,category:"Personal Care",image:"face-wash.jpg"},
  {id:53,name:"Hair Oil",price:120,category:"Personal Care",image:"hair-oil.jpg"},
  {id:54,name:"Comb",price:30,category:"Personal Care",image:"comb.jpg"},
  {id:55,name:"Body Lotion",price:180,category:"Personal Care",image:"body-lotion.jpg"},
  {id:56,name:"Talcum Powder",price:120,category:"Personal Care",image:"talcum-powder.jpg"},
  {id:57,name:"Deodorant",price:200,category:"Personal Care",image:"deodorant.jpg"},
  {id:58,name:"Lip Balm",price:80,category:"Personal Care",image:"lip-balm.jpg"},
  {id:59,name:"Nail Cutter",price:50,category:"Personal Care",image:"nail-cutter.jpg"},
  {id:60,name:"Tongue Cleaner",price:40,category:"Personal Care",image:"tongue-cleaner.jpg"},

  // ===== HOME & CLEANING =====
  {id:61,name:"Dishwash Liquid",price:150,category:"Home",image:"dishwash-liquid.jpg"},
  {id:62,name:"Dishwash Bar",price:30,category:"Home",image:"dishwash-bar.jpg"},
  {id:63,name:"Detergent Powder",price:120,category:"Home",image:"detergent-powder.jpg"},
  {id:64,name:"Laundry Soap",price:35,category:"Home",image:"laundry-soap.jpg"},
  {id:65,name:"Floor Cleaner",price:150,category:"Home",image:"floor-cleaner.jpg"},
  {id:66,name:"Toilet Cleaner",price:170,category:"Home",image:"toilet-cleaner.jpg"},
  {id:67,name:"Glass Cleaner",price:150,category:"Home",image:"glass-cleaner.jpg"},
  {id:68,name:"Bleaching Powder",price:60,category:"Home",image:"bleaching-powder.jpg"},
  {id:69,name:"Scrub Pad",price:30,category:"Home",image:"scrub-pad.jpg"},
  {id:70,name:"Sponge",price:40,category:"Home",image:"sponge.jpg"},
  {id:71,name:"Broom",price:150,category:"Home",image:"broom.jpg"},
  {id:72,name:"Dustpan",price:80,category:"Home",image:"dustpan.jpg"},
  {id:73,name:"Mop",price:250,category:"Home",image:"mop.jpg"},
  {id:74,name:"Garbage Bag",price:100,category:"Home",image:"garbage-bag.jpg"},
  {id:75,name:"Tissue Paper",price:80,category:"Home",image:"tissue-paper.jpg"},
  {id:76,name:"Kitchen Roll",price:100,category:"Home",image:"kitchen-roll.jpg"},
  {id:77,name:"Aluminium Foil",price:150,category:"Home",image:"aluminium-foil.jpg"},
  {id:78,name:"Plastic Container Set",price:350,category:"Home",image:"plastic-container.jpg"},
  {id:79,name:"Water Bottle",price:150,category:"Home",image:"water-bottle.jpg"},
  {id:80,name:"Bucket",price:250,category:"Home",image:"bucket.jpg"},

  // ===== HOUSEHOLD / ACCESSORIES =====
  {id:81,name:"LED Bulb",price:120,category:"Accessories",image:"led-bulb.jpg"},
  {id:82,name:"Mobile Charger",price:450,category:"Accessories",image:"mobile-charger.jpg"},
  {id:83,name:"USB Cable",price:150,category:"Accessories",image:"usb-cable.jpg"},
  {id:84,name:"Battery",price:30,category:"Accessories",image:"battery.jpg"},
  {id:85,name:"Match Box",price:10,category:"Accessories",image:"match-box.jpg"},
  {id:86,name:"Candle",price:30,category:"Accessories",image:"candle.jpg"},
  {id:87,name:"Notebook",price:60,category:"Accessories",image:"notebook.jpg"},
  {id:88,name:"Pen",price:20,category:"Accessories",image:"pen
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
    cart.push({id, qty: 1});
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
            <button onclick="changeQty(${p.id}, -1)">−</button>
            <span>${x.qty}</span>
            <button onclick="changeQty(${p.id}, 1)">+</button>
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
    alert("Please fill in Name, Mobile Number and Delivery Address.");
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

  let message =
`🛍️ *NEW ORDER - DS COLLECTION*

${lines.join("\n")}

*Total: ${money(total)}*

👤 Name: ${name}
📱 Mobile: ${phone}
📍 Address: ${address}
🚚 Delivery: Gaur (1–2 days)`;

  if (note) {
    message += `\n📝 Note: ${note}`;
  }

  message += `

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
