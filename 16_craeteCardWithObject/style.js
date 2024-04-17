
const Product = [
    {
        sl:10,
        P_Name:'Laptop',
        P_price: 100000,
        P_quantity: 100,
        P_brand: 'HP',
        p_details:'Lorem ipsum dolod sit amet.',
        p_img: 'https://www.lenovo.com/medias/lenovo-laptop-ideapad-3i-15in-hero.png?context=bWFzdGVyfHJvb3R8MzM3NTg5fGltYWdlL3BuZ3xoM2MvaDExLzE0MTkxNTE3NDAxMTE4LnBuZ3w4OTg2YTg5YzQ0ZmFiZDYzOTdjZTkzNDJjNDY3MTJlODM4YTQ2ODdlMGVmZTFlYjBiODRjYWFmY2JjOTBkODNj'
    },
    {
        sl:11,
        P_Name:'Laptop',
        P_price: 70000,
        P_quantity: 50,
        P_brand: 'Dell',
        p_details:'Lorem ipsum dolod sit amet.',
        p_img: 'https://johnlewis.scene7.com/is/image/JohnLewis/windows-hero-mob-221212'
    },
    {
        sl:12,
        P_Name:'Keyboard',
        P_price: 700,
        P_quantity: 50,
        P_brand: 'HP',
        p_details:'Lorem ipsum dolod sit amet.',
        p_img: 'https://images-cdn.ubuy.co.in/633aed789d2fa22f27259325-hk-gaming-gk61-mechanical-gaming.jpg'
    },
    {
        sl:13,
        P_Name:'Moush',
        P_price: 800,
        P_quantity: 30,
        P_brand: 'HP',
        p_details:'Lorem ipsum dolod sit amet.',
        p_img: 'https://images-eu.ssl-images-amazon.com/images/I/51PxcZxYxBL._AC_UL600_SR600,600_.jpg'
    },
    {
        sl:14,
        P_Name:'Laptop',
        P_price: 50000,
        P_quantity: 10,
        P_brand: 'HP',
        p_details:'Lorem ipsum dolod sit amet.',
        p_img: 'https://static.independent.co.uk/2020/12/22/10/High%20end%20laptops%20copy.jpg?quality=75&width=1200&auto=webp'
    },
    {
        sl:15,
        P_Name:'Laptop',
        P_price: 100000,
        P_quantity: 100,
        P_brand: 'HP',
        p_details:'Lorem ipsum dolod sit amet.',
        p_img: 'https://www.itaf.eu/wp-content/uploads/2020/04/best-laptops-cover.jpg'
    },
    {
        sl:16,
        P_Name:'Laptop',
        P_price: 50000,
        P_quantity: 100,
        P_brand: 'Dell',
        p_details:'Lorem ipsum dolod sit amet.',
        p_img: 'https://images-cdn.ubuy.co.in/633aed789d2fa22f27259325-hk-gaming-gk61-mechanical-gaming.jpg'
    },

];



const pro = document.getElementById('products');
for (const singleProduct of Product) {
   const div= document.createElement('div');
   
   const data = `
   <img src="${singleProduct.p_img}">
   <div class="card-body">
   <h1>${singleProduct.P_Name} </h1>
   <h4> Brand: ${singleProduct.P_brand}</h4>
   <p> Price: ${singleProduct.P_price}</p>
   <p> Quantity: ${singleProduct.P_quantity}</p>
   <p> Detailse:${singleProduct.p_details}</p>  
</div>
`;

div.classList.add('card');
div.innerHTML=data;
pro.appendChild(div)
};


 