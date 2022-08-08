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
        id: 2,
        title: 'Монитор',
        price: 15000,
        img: 'images/monitor.webp'
    },

    {
        id: 3,
        title: 'Наушники',
        price: 1500,
        img: 'images/headphones.webp'
    }
];


// Как сделать второе задание я не понял :(
const renderProduct = (img, title, price) => `
    <div class="productItem">
        <img src="${img}" alt="img">
        <hr>
        <h3>${title}</h3>
        <p>${price} ₽</p>
        <button class="addBtn">Добавить</button>
    </div>
`

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.img, item.title, item.price));
    document.querySelector('.products').innerHTML = productsList.join(' ');
    // Метод join() используется для того чтобы убрать запятые, т.к. map() возвращает массив
}

renderPage(Products);