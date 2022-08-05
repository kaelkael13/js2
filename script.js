const Products = [
    {
        id: 0,
        title: 'Ноутбук',
        price: 40000,
        img: 'images/notebook.webp'
    },

    {
        id: 1,
        title: 'Смартфон',
        price: 30000,
        img: 'images/smartphone.webp'
    },

    {
        id: 0,
        title: 'Телевизор',
        price: 35000,
        img: 'images/tv.webp'
    },

    {
        id: 0,
        title: 'Монитор',
        price: 15000,
        img: 'images/monitor.webp'
    },

    {
        id: 0,
        title: 'Клавиатура',
        price: 2000,
        img: 'images/keyboard.webp'
    },

    {
        id: 0,
        title: 'Наушники',
        price: 1500,
        img: 'images/headphones.webp'
    }
];

const renderProduct = (img, title, price) => `
    <div class="productItem">
        <img src="${img}" alt="img">
        <p>${title}</p>
        <p>${price}</p>
    </div>
`

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.img, item.title, item.price));
    document.querySelector('.products').innerHTML = productsList;
}

renderPage(Products);