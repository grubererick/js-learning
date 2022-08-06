class Product {
  title = 'A pilow';
  imageUrl;
  description;
  price;

  constructor(title, image, desc, price) {

  }
}



const productList = {
  products: [
    new Product(),
    {
      title: 'A pilow',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR99U9PtKUMBjkdgEDvBBrnhlLDn0466iO8sA&usqp=CAU',
      price: -2.99,
      description: 'Bulshit',
    },
    {
      title: 'A moron',
      imageUrl:
        'https://mediaproxy.salon.com/width/1200/https://media.salon.com/2021/08/donald-trump-0805211.jpg',
      price: -5.99,
      description: 'Bulshit Bulshit',
    },
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}">
          <div class="product-item__content">
             <h2>${prod.title}</h2>
             <h3>\$${prod.price}</h3>
             <p>${prod.description}</p>
             <button>Add to Cart </button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};
productList.render();
