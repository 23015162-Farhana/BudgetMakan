// Budget Makan interactive behavior (simple demo)
const sampleData = [
    {
        id: 'main-ctn',
        campus: 'main',
        name: 'Central Canteen',
        img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=200&fit=crop',
        stalls: [
            {
                stallId: 'st1',
                stallName: 'Nasi Goreng Pak Ali',
                halal: true,
                items: [
                    { id: 's1-1', name: 'Nasi Goreng', price: 3.5, img: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=100&h=100&fit=crop' },
                    { id: 's1-2', name: 'Nasi Goreng with Egg', price: 4.0, img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop' },
                    { id: 's1-3', name: 'Nasi Goreng with Chicken', price: 4.5, img: 'https://images.unsplash.com/photo-1626082927389-6cd097cda1ec?w=100&h=100&fit=crop' }
                ]
            },
            {
                stallId: 'st2',
                stallName: 'Western Nice',
                halal: false,
                items: [
                    { id: 's2-1', name: 'Chicken Chop', price: 6.5, img: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=100&h=100&fit=crop' },
                    { id: 's2-2', name: 'Chicken Cutlet', price: 6.0, img: 'https://images.unsplash.com/photo-1562547256-0e1f0a6b69dc?w=100&h=100&fit=crop' },
                    { id: 's2-3', name: 'Fish & Chips', price: 7.0, img: 'https://images.unsplash.com/photo-1573165159223-b80f27b93873?w=100&h=100&fit=crop' }
                ]
            },
            {
                stallId: 'st3',
                stallName: 'Mee Masala',
                halal: true,
                items: [
                    { id: 's3-1', name: 'Mee Siam', price: 4.5, img: 'https://images.unsplash.com/photo-1557872552-c7207ebd0944?w=100&h=100&fit=crop' },
                    { id: 's3-2', name: 'Mee Soto', price: 5.0, img: 'https://images.unsplash.com/photo-1645467081327-ed7ecc5bf08f?w=100&h=100&fit=crop' },
                    { id: 's3-3', name: 'Mee Goreng', price: 4.0, img: 'https://images.unsplash.com/photo-1569718212e3-3a95ffb3fe5d?w=100&h=100&fit=crop' }
                ]
            },
            {
                stallId: 'st3-drinks',
                stallName: 'Fresh Drinks',
                halal: true,
                items: [
                    { id: 's3-d1', name: 'Iced Lemon Tea', price: 2.5, img: 'https://images.unsplash.com/photo-1554866585-ae23d6fa2b61?w=100&h=100&fit=crop' },
                    { id: 's3-d2', name: 'Iced Milo', price: 2.0, img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=100&h=100&fit=crop' },
                    { id: 's3-d3', name: 'Sugarcane Juice', price: 3.0, img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=100&h=100&fit=crop' },
                    { id: 's3-d4', name: 'Thai Iced Tea', price: 3.5, img: 'https://images.unsplash.com/photo-1597318867205-db91f5d7b784?w=100&h=100&fit=crop' }
                ]
            }
        ]
    },
    {
        id: 'north-ctn',
        campus: 'north',
        name: 'North Campus Food Hall',
        img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=200&fit=crop',
        stalls: [
            {
                stallId: 'st4',
                stallName: 'Vegan Bites',
                halal: true,
                items: [
                    { id: 's4-1', name: 'Veggie Bowl', price: 5.0, img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop' },
                    { id: 's4-2', name: 'Tofu Curry', price: 5.5, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop' },
                    { id: 's4-3', name: 'Vegan Pasta', price: 6.0, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=100&h=100&fit=crop' }
                ]
            },
            {
                stallId: 'st5',
                stallName: 'Budget Burgers',
                halal: false,
                items: [
                    { id: 's5-1', name: 'Classic Burger', price: 4.5, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop' },
                    { id: 's5-2', name: 'Double Cheese Burger', price: 5.5, img: 'https://images.unsplash.com/photo-1550547990-25967502a778?w=100&h=100&fit=crop' },
                    { id: 's5-3', name: 'Crispy Chicken Burger', price: 5.0, img: 'https://images.unsplash.com/photo-1562547256-0e1f0a6b69dc?w=100&h=100&fit=crop' }
                ]
            },
            {
                stallId: 'st5-drinks',
                stallName: 'Beverage Corner',
                halal: true,
                items: [
                    { id: 's5-d1', name: 'Iced Coffee', price: 3.0, img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=100&h=100&fit=crop' },
                    { id: 's5-d2', name: 'Bubble Tea', price: 4.0, img: 'https://images.unsplash.com/photo-1618548183384-4f88f7bccb84?w=100&h=100&fit=crop' },
                    { id: 's5-d3', name: 'Fresh Orange Juice', price: 3.5, img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=100&h=100&fit=crop' },
                    { id: 's5-d4', name: 'Iced Chocolate', price: 2.5, img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=100&h=100&fit=crop' }
                ]
            }
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
            <div class="stalls-list"></div>
        `;

        // render stalls with their menu items
        const stallsList = card.querySelector('.stalls-list');
        let minPrice = Infinity;
        
        c.stalls.forEach(stall => {
            // Create stall header
            const stallDiv = document.createElement('div');
            stallDiv.style.marginBottom = '1rem';
            stallDiv.style.borderBottom = '2px solid #f0f0f0';
            stallDiv.style.paddingBottom = '0.75rem';
            
            const stallHeader = document.createElement('div');
            stallHeader.style.display = 'flex';
            stallHeader.style.alignItems = 'center';
            stallHeader.style.justifyContent = 'space-between';
            stallHeader.style.marginBottom = '0.5rem';
            stallHeader.innerHTML = `
                <div>
                    <strong style="font-size:0.95rem">${stall.stallName}</strong>
                    <div class="muted" style="font-size:0.8rem">${stall.halal?'<span class="badge halal">Halal</span>':'<span class="badge">Non-halal</span>'}</div>
                </div>
            `;
            stallDiv.appendChild(stallHeader);
            
            // Create menu items for this stall
            const itemsDiv = document.createElement('div');
            itemsDiv.style.marginLeft = '0.5rem';
            
            stall.items.forEach(item => {
                const textMatch = (item.name+" "+item.price).toLowerCase().includes(filterText.toLowerCase());
                if(filterText && !textMatch) return;
                
                minPrice = Math.min(minPrice, item.price);
                
                const itemRow = document.createElement('div');
                itemRow.style.display = 'flex';
                itemRow.style.justifyContent = 'space-between';
                itemRow.style.alignItems = 'center';
                itemRow.style.padding = '0.5rem 0';
                itemRow.style.borderBottom = '1px solid #f5f5f5';
                itemRow.style.gap = '0.75rem';
                
                itemRow.innerHTML = `
                    <img src="${item.img}" alt="${item.name}" style="width:60px;height:60px;border-radius:8px;object-fit:cover;flex-shrink:0" loading="lazy" />
                    <div style="flex:1">
                        <div style="font-size:0.9rem">${item.name}</div>
                    </div>
                    <div style="display:flex;gap:0.5rem;align-items:center;flex-shrink:0">
                        <div class="price" style="font-weight:700">${formatPrice(item.price)}</div>
                        <button class="btn add" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}" data-halal="${stall.halal}">Add</button>
                    </div>
                `;
                itemsDiv.appendChild(itemRow);
            });
            
            stallDiv.appendChild(itemsDiv);
            stallsList.appendChild(stallDiv);
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
