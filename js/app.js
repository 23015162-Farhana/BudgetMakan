// Budget Makan interactive behavior (simple demo)
const sampleData = [
    {
        id: 'main-ctn',
        campus: 'main',
        name: 'Central Canteen',
        img: 'https://via.placeholder.com/120?text=Canteen',
        stalls: [
            { id: 's1', name: 'Nasi Goreng Pak Ali', price: 3.5, halal: true },
            { id: 's2', name: 'Chicken Rice Corner', price: 4.0, halal: true },
            { id: 's3', name: 'Western Grill', price: 6.5, halal: false }
        ]
    },
    {
        id: 'north-ctn',
        campus: 'north',
        name: 'North Campus Food Hall',
        img: 'https://via.placeholder.com/120?text=Food+Hall',
        stalls: [
            { id: 's4', name: 'Vegan Bites', price: 5.0, halal: true },
            { id: 's5', name: 'Budget Burgers', price: 4.5, halal: false }
        ]
    }
];

let cart = JSON.parse(localStorage.getItem('bm_cart') || '[]');

function formatPrice(v){
    return `S$${v.toFixed(2)}`;
}

function renderCanteens(filterText = '', campus = 'all'){
    const container = document.getElementById('canteen-list');
    container.innerHTML = '';
    const filtered = sampleData.filter(c=> campus==='all' || c.campus===campus);
    filtered.forEach(c => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-header">
                <img src="${c.img}" alt="${c.name}" loading="lazy" />
                <div>
                    <h3>${c.name}</h3>
                    <div class="muted">${c.stalls.length} stalls • ${c.campus} campus</div>
                </div>
            </div>
            <div class="badges" aria-hidden="true"></div>
            <div class="stalls-list"></div>
            <div class="price-row">
                <div class="muted">Lowest from <span class="price">${formatPrice(Math.min(...c.stalls.map(s=>s.price)))}</span></div>
                <button class="btn" data-canteen="${c.id}">View stalls</button>
            </div>
        `;

        // render stalls (filter by text)
        const stallsList = card.querySelector('.stalls-list');
        c.stalls.forEach(s => {
            const textMatch = (s.name+" "+s.price).toLowerCase().includes(filterText.toLowerCase());
            if(filterText && !textMatch) return;
            const li = document.createElement('div');
            li.className = 'stall-row';
            li.style.display = 'flex';
            li.style.justifyContent = 'space-between';
            li.style.alignItems = 'center';
            li.style.padding = '0.45rem 0';
            li.innerHTML = `<div>
                    <div><strong>${s.name}</strong></div>
                    <div class="muted" style="font-size:0.85rem">${s.halal?'<span class="badge halal">Halal</span>':'<span class="badge">Non-halal</span>'}</div>
                </div>
                <div style="display:flex;gap:0.5rem;align-items:center">
                    <div class="price">${formatPrice(s.price)}</div>
                    <button class="btn add" data-id="${s.id}" data-name="${s.name}" data-price="${s.price}" data-halal="${s.halal}">Add</button>
                </div>`;
            stallsList.appendChild(li);
        });

        container.appendChild(card);
    });

    attachAddButtons();
    updateCartCount();
}

function attachAddButtons(){
    document.querySelectorAll('.btn.add').forEach(b => {
        b.addEventListener('click', e=>{
            const id = b.dataset.id;
            const name = b.dataset.name;
            const price = parseFloat(b.dataset.price);
            const halal = b.dataset.halal === 'true';
            addToCart({id,name,price,halal,qty:1});
            
            // Visual feedback: darken button
            b.classList.add('clicked');
            setTimeout(() => b.classList.remove('clicked'), 300);
        });
    });
}

function addToCart(item){
    const existing = cart.find(i=>i.id===item.id);
    if(existing){ existing.qty += 1; }
    else cart.push(item);
    localStorage.setItem('bm_cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount(){
    const count = cart.reduce((s,i)=>s+i.qty,0);
    document.querySelectorAll('.cart-count').forEach(el=>el.textContent = count);
}

function removeFromCart(itemId){
    cart = cart.filter(i => i.id !== itemId);
    localStorage.setItem('bm_cart', JSON.stringify(cart));
    updateCartCount();
    renderCartModal();
}

function renderCartModal(){
    const modal = document.getElementById('cart-modal');
    const list = document.getElementById('cart-items');
    list.innerHTML = '';
    if(cart.length===0){ list.innerHTML = '<li class="muted">Cart is empty</li>'; return; }
    cart.forEach(i=>{
        const li = document.createElement('li');
        li.style.display='flex';li.style.justifyContent='space-between';li.style.alignItems='center';li.style.padding='0.5rem 0';li.style.borderBottom='1px solid #eee';
        li.innerHTML = `<div>
            <div><strong>${i.name}</strong></div>
            <div style="font-size:0.75rem;margin-top:0.25rem">${i.halal?'<span class="badge halal">Halal</span>':'<span class="badge">Non-halal</span>'}</div>
            <small class="muted">Qty: ${i.qty} × ${formatPrice(i.price)} = ${formatPrice(i.price*i.qty)}</small>
        </div>
        <button class="btn-remove" data-id="${i.id}" style="background:#ff6b6b;border:none;color:#fff;padding:0.35rem 0.6rem;border-radius:6px;cursor:pointer;font-size:0.85rem">Remove</button>`;
        list.appendChild(li);
    });
    attachRemoveButtons();
}

function attachRemoveButtons(){
    document.querySelectorAll('.btn-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            removeFromCart(btn.dataset.id);
        });
    });
}

document.addEventListener('DOMContentLoaded', ()=>{
    const search = document.getElementById('search');
    const campusSelect = document.getElementById('campus-select');
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const closeCart = document.getElementById('close-cart');
    const checkout = document.getElementById('checkout');

    renderCanteens();

    search.addEventListener('input', e=>{
        renderCanteens(e.target.value, campusSelect.value);
    });

    campusSelect.addEventListener('change', e=>{
        document.getElementById('campus-btn').textContent = e.target.options[e.target.selectedIndex].text + ' ▾';
        renderCanteens(search.value, e.target.value);
    });

    cartBtn.addEventListener('click', ()=>{
        cartModal.setAttribute('aria-hidden','false');
        renderCartModal();
    });

    closeCart.addEventListener('click', ()=>{
        cartModal.setAttribute('aria-hidden','true');
    });

    checkout.addEventListener('click', ()=>{
        if(cart.length===0) { alert('Your cart is empty'); return; }
        // Simulate checkout
        alert('Order placed! (demo)');
        cart = [];
        localStorage.removeItem('bm_cart');
        updateCartCount();
        cartModal.setAttribute('aria-hidden','true');
    });

});
