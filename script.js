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
  {id:12,name:"Kitchen Container Set",price:650,category:"Home",icon:"🍱"}
  const products = [

  // 🍚 Rice & Grains
  {id:1,name:"Jeera Masino Rice 25 KG",price:2250,category:"Rice & Grains",icon:"🍚"},
  {id:2,name:"Mansuli Rice 25 KG",price:1400,category:"Rice & Grains",icon:"🍚"},
  {id:3,name:"Basmati Rice 5 KG",price:900,category:"Rice & Grains",icon:"🍚"},
  {id:4,name:"Chiura 1 KG",price:80,category:"Rice & Grains",icon:"🍚"},
  {id:5,name:"Maida 1 KG",price:80,category:"Rice & Grains",icon:"🌾"},
  {id:6,name:"Aata 2 KG",price:150,category:"Rice & Grains",icon:"🌾"},
  {id:7,name:"Suji 500 GM",price:60,category:"Rice & Grains",icon:"🌾"},
  {id:8,name:"Corn Flour 500 GM",price:90,category:"Rice & Grains",icon:"🌽"},

  // 🫘 Dal & Pulses
  {id:9,name:"Masoor Dal 1 KG",price:150,category:"Dal & Pulses",icon:"🫘"},
  {id:10,name:"Moong Dal 1 KG",price:200,category:"Dal & Pulses",icon:"🫘"},
  {id:11,name:"Chana Dal 1 KG",price:150,category:"Dal & Pulses",icon:"🫘"},
  {id:12,name:"Rahaar Dal 1 KG",price:190,category:"Dal & Pulses",icon:"🫘"},
  {id:13,name:"Black Dal 1 KG",price:180,category:"Dal & Pulses",icon:"🫘"},
  {id:14,name:"Green Peas 1 KG",price:150,category:"Dal & Pulses",icon:"🫛"},
  {id:15,name:"Chana 1 KG",price:150,category:"Dal & Pulses",icon:"🫘"},

  // 🛢️ Oil & Ghee
  {id:16,name:"Sunflower Oil 1 L",price:300,category:"Oil & Ghee",icon:"🛢️"},
  {id:17,name:"Mustard Oil 1 L",price:390,category:"Oil & Ghee",icon:"🛢️"},
  {id:18,name:"Soybean Oil 1 L",price:290,category:"Oil & Ghee",icon:"🛢️"},
  {id:19,name:"Sunflower Oil 5 L",price:1450,category:"Oil & Ghee",icon:"🛢️"},
  {id:20,name:"Mustard Oil 5 L",price:1500,category:"Oil & Ghee",icon:"🛢️"},
  {id:21,name:"Ghee 500 GM",price:550,category:"Oil & Ghee",icon:"🧈"},

  // 🧂 Salt & Spices
  {id:22,name:"Salt 1 KG",price:26,category:"Spices",icon:"🧂"},
  {id:23,name:"Turmeric Powder 100 GM",price:35,category:"Spices",icon:"🌶️"},
  {id:24,name:"Chilli Powder 100 GM",price:45,category:"Spices",icon:"🌶️"},
  {id:25,name:"Coriander Powder 100 GM",price:35,category:"Spices",icon:"🌿"},
  {id:26,name:"Cumin 100 GM",price:70,category:"Spices",icon:"🌿"},
  {id:27,name:"Garam Masala 50 GM",price:45,category:"Spices",icon:"🌿"},
  {id:28,name:"Black Pepper 50 GM",price:80,category:"Spices",icon:"⚫"},
  {id:29,name:"Ginger-Garlic Paste 200 GM",price:100,category:"Spices",icon:"🧄"},

  // 🍜 Noodles & Snacks
  {id:30,name:"Wai Wai Noodles 60 GM",price:20,category:"Snacks",icon:"🍜"},
  {id:31,name:"Current Noodles 70 GM",price:20,category:"Snacks",icon:"🍜"},
  {id:32,name:"2PM Noodles",price:25,category:"Snacks",icon:"🍜"},
  {id:33,name:"Biscuits Small Pack",price:20,category:"Snacks",icon:"🍪"},
  {id:34,name:"Cream Biscuits",price:40,category:"Snacks",icon:"🍪"},
  {id:35,name:"Marie Biscuits",price:40,category:"Snacks",icon:"🍪"},
  {id:36,name:"Potato Chips",price:50,category:"Snacks",icon:"🥔"},
  {id:37,name:"Namkeen 200 GM",price:70,category:"Snacks",icon:"🥨"},
  {id:38,name:"Popcorn",price:50,category:"Snacks",icon:"🍿"},

  // ☕ Tea & Drinks
  {id:39,name:"Milk Tea 250 GM",price:140,category:"Tea & Drinks",icon:"☕"},
  {id:40,name:"Black Tea 500 GM",price:280,category:"Tea & Drinks",icon:"☕"},
  {id:41,name:"Coffee 100 GM",price:180,category:"Tea & Drinks",icon:"☕"},
  {id:42,name:"Horlicks 500 GM",price:440,category:"Tea & Drinks",icon:"🥛"},
  {id:43,name:"Glucose 500 GM",price:180,category:"Tea & Drinks",icon:"🥤"},
  {id:44,name:"Real Juice 1 L",price:275,category:"Tea & Drinks",icon:"🧃"},
  {id:45,name:"Coca-Cola 1.5 L",price:150,category:"Tea & Drinks",icon:"🥤"},
  {id:46,name:"Sprite 1.5 L",price:150,category:"Tea & Drinks",icon:"🥤"},

  // 🧼 Personal Care
  {id:47,name:"Lifebuoy Soap",price:45,category:"Personal Care",icon:"🧼"},
  {id:48,name:"Lux Soap",price:50,category:"Personal Care",icon:"🧼"},
  {id:49,name:"Dove Soap",price:80,category:"Personal Care",icon:"🧼"},
  {id:50,name:"Dettol Soap",price:60,category:"Personal Care",icon:"🧼"},
  {id:51,name:"Shampoo Small",price:50,category:"Personal Care",icon:"🧴"},
  {id:52,name:"Shampoo 180 ML",price:180,category:"Personal Care",icon:"🧴"},
  {id:53,name:"Toothpaste 100 GM",price:120,category:"Personal Care",icon:"🪥"},
  {id:54,name:"Toothbrush",price:60,category:"Personal Care",icon:"🪥"},
  {id:55,name:"Hair Oil 100 ML",price:100,category:"Personal Care",icon:"🧴"},
  {id:56,name:"Face Wash",price:180,category:"Personal Care",icon:"🧴"},

  // 🧹 Cleaning & Home
  {id:57,name:"Washing Powder 1 KG",price:180,category:"Home Care",icon:"🧺"},
  {id:58,name:"Detergent Powder 500 GM",price:100,category:"Home Care",icon:"🧺"},
  {id:59,name:"Dishwash Bar",price:40,category:"Home Care",icon:"🧽"},
  {id:60,name:"Dishwash Liquid 500 ML",price:120,category:"Home Care",icon:"🧴"},
  {id:61,name:"Floor Cleaner 1 L",price:150,category:"Home Care",icon:"🧹"},
  {id:62,name:"Toilet Cleaner 500 ML",price:100,category:"Home Care",icon:"🧴"},
  {id:63,name:"Phenyl 1 L",price:100,category:"Home Care",icon:"🧴"},
  {id:64,name:"Scrubber",price:30,category:"Home Care",icon:"🧽"},
  {id:65,name:"Tissue Paper",price:80,category:"Home Care",icon:"🧻"},
  {id:66,name:"Garbage Bag",price:100,category:"Home Care",icon:"🗑️"},

  // 🥔 Vegetables
  {id:67,name:"Potato 1 KG",price:60,category:"Vegetables",icon:"🥔"},
  {id:68,name:"Onion 1 KG",price:100,category:"Vegetables",icon:"🧅"},
  {id:69,name:"Tomato 1 KG",price:70,category:"Vegetables",icon:"🍅"},
  {id:70,name:"Carrot 1 KG",price:100,category:"Vegetables",icon:"🥕"},
  {id:71,name:"Cabbage 1 KG",price:40,category:"Vegetables",icon:"🥬"},
  {id:72,name:"Cauliflower 1 KG",price:110,category:"Vegetables",icon:"🥦"},
  {id:73,name:"Radish 1 KG",price:50,category:"Vegetables",icon:"🥕"},
  {id:74,name:"Brinjal 1 KG",price:40,category:"Vegetables",icon:"🍆"},
  {id:75,name:"Green Beans 1 KG",price:60,category:"Vegetables",icon:"🫛"},
  {id:76,name:"Ginger 1 KG",price:220,category:"Vegetables",icon:"🫚"},
  {id:77,name:"Garlic 1 KG",price:250,category:"Vegetables",icon:"🧄"},
  {id:78,name:"Green Chilli 250 GM",price:30,category:"Vegetables",icon:"🌶️"},

  // 🍎 Fruits
  {id:79,name:"Apple 1 KG",price:380,category:"Fruits",icon:"🍎"},
  {id:80,name:"Banana 1 Dozen",price:180,category:"Fruits",icon:"🍌"},
  {id:81,name:"Papaya 1 KG",price:80,category:"Fruits",icon:"🍈"},
  {id:82,name:"Guava 1 KG",price:130,category:"Fruits",icon:"🍐"},
  {id:83,name:"Pear 1 KG",price:220,category:"Fruits",icon:"🍐"},
  {id:84,name:"Coconut 1 PC",price:80,category:"Fruits",icon:"🥥"},

  // 🥛 Dairy & Eggs
  {id:85,name:"Milk 1 L",price:100,category:"Dairy & Eggs",icon:"🥛"},
  {id:86,name:"Curd 500 GM",price:80,category:"Dairy & Eggs",icon:"🥛"},
  {id:87,name:"Paneer 250 GM",price:180,category:"Dairy & Eggs",icon:"🧀"},
  {id:88,name:"Eggs 1 Dozen",price:180,category:"Dairy & Eggs",icon:"🥚"},

  // 🧴 Daily Essentials
  {id:89,name:"Match Box",price:10,category:"Daily Essentials",icon:"🔥"},
  {id:90,name:"Candle Pack",price:50,category:"Daily Essentials",icon:"🕯️"},
  {id:91,name:"Mosquito Coil",price:60,category:"Daily Essentials",icon:"🦟"},
  {id:92,name:"Battery AA Pair",price:80,category:"Daily Essentials",icon:"🔋"},
  {id:93,name:"Aluminium Foil",price:120,category:"Daily Essentials",icon:"🧻"},
  {id:94,name:"Plastic Garbage Bag",price:100,category:"Daily Essentials",icon:"🗑️"},

  // 👗 Fashion
  {id:95,name:"Premium Saree",price:2500,category:"Fashion",icon:"🥻"},
  {id:96,name:"Ladies Kurti",price:1200,category:"Fashion",icon:"👗"},
  {id:97,name:"Ladies Leggings",price:400,category:"Fashion",icon:"👖"},
  {id:98,name:"Ladies Scarf",price:250,category:"Fashion",icon:"🧣"},
  {id:99,name:"Men's T-Shirt",price:500,category:"Fashion",icon:"👕"},
  {id:100,name:"Men's Lower",price:600,category:"Fashion",icon:"👖"}
];
];

let cart = JSON.parse(localStorage.getItem("ds_cart") || "[]");
let activeCategory = "All";

const grid = document.getElementById("productGrid");
const categories = document.getElementById("categories");
const searchInput = document.getElementById("searchInput");

function money(n){return "Rs. " + n.toLocaleString("en-IN");}

function renderCategories(){
  const cats = ["All", ...new Set(products.map(p=>p.category))];
  categories.innerHTML = cats.map(c=>`<button class="category ${c===activeCategory?"active":""}" onclick="setCategory('${c}')">${c}</button>`).join("");
}

function setCategory(cat){
  activeCategory = cat;
  renderCategories();
  renderProducts();
}

function renderProducts(){
  const q = searchInput.value.toLowerCase().trim();
  const list = products.filter(p =>
    (activeCategory==="All" || p.category===activeCategory) &&
    (p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
  );
  grid.innerHTML = list.length ? list.map(p=>`
    <article class="product">
      <div class="product-img">${p.icon}</div>
      <div class="product-body">
        <div class="product-cat">${p.category}</div>
        <h3>${p.name}</h3>
        <div class="price">${money(p.price)}</div>
        <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    </article>`).join("") : `<p>No products found.</p>`;
}

function addToCart(id){
  const item = cart.find(x=>x.id===id);
  if(item) item.qty++;
  else cart.push({id,qty:1});
  saveCart();
  showToast("Added to cart");
}

function changeQty(id,delta){
  const item=cart.find(x=>x.id===id);
  if(!item)return;
  item.qty += delta;
  if(item.qty<=0) cart=cart.filter(x=>x.id!==id);
  saveCart();
}

function saveCart(){
  localStorage.setItem("ds_cart",JSON.stringify(cart));
  renderCart();
}

function renderCart(){
  const items = document.getElementById("cartItems");
  const count = cart.reduce((s,x)=>s+x.qty,0);
  document.getElementById("cartCount").textContent=count;
  if(!cart.length){
    items.innerHTML='<p class="muted">Your cart is empty.</p>';
    document.getElementById("cartTotal").textContent=money(0);
    return;
  }
  let total=0;
  items.innerHTML=cart.map(x=>{
    const p=products.find(a=>a.id===x.id);
    const sub=p.price*x.qty; total+=sub;
    return `<div class="cart-item">
      <div><h4>${p.icon} ${p.name}</h4><small>${money(p.price)} each</small></div>
      <div><strong>${money(sub)}</strong><div class="qty"><button onclick="changeQty(${p.id},-1)">−</button><span>${x.qty}</span><button onclick="changeQty(${p.id},1)">+</button></div></div>
    </div>`;
  }).join("");
  document.getElementById("cartTotal").textContent=money(total);
}

function openCart(){document.getElementById("cartDrawer").style.display="block"}
function closeCart(){document.getElementById("cartDrawer").style.display="none"}
function openModal(){document.getElementById("orderModal").style.display="grid"}
function closeModal(){document.getElementById("orderModal").style.display="none"}

function checkout(){
  if(!cart.length){showToast("Your cart is empty");return;}
  closeCart(); openModal();
}

document.getElementById("orderForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("customerName").value.trim();
  const phone=document.getElementById("customerPhone").value.trim();
  const address=document.getElementById("customerAddress").value.trim();
  const note=document.getElementById("customerNote").value.trim();
  let total=0;
  let lines=cart.map((x,i)=>{
    const p=products.find(a=>a.id===x.id);
    const sub=p.price*x.qty; total+=sub;
    return `${i+1}. ${p.name} x ${x.qty} = ${money(sub)}`;
  });
  const msg = `🛍️ *NEW ORDER - DS COLLECTION*%0A%0A${lines.join("%0A")}%0A%0A*Total: ${money(total)}*%0A%0A👤 Name: ${encodeURIComponent(name)}%0A📱 Mobile: ${encodeURIComponent(phone)}%0A📍 Address: ${encodeURIComponent(address)}%0A🚚 Delivery: Gaur (1–2 days)%0A${note ? "📝 Note: "+encodeURIComponent(note) : ""}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`,"_blank");
  closeModal();
});

document.getElementById("cartBtn").onclick=openCart;
document.getElementById("closeCart").onclick=closeCart;
document.getElementById("checkoutBtn").onclick=checkout;
document.getElementById("closeModal").onclick=closeModal;
searchInput.addEventListener("input",renderProducts);

function showToast(text){
  const t=document.getElementById("toast");
  t.textContent=text;t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),1800);
}

renderCategories();renderProducts();renderCart();
