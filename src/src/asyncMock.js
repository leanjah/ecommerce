const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: '1000',
        category: 'celular',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        description: 'Descripcion del Iphone 12',
        width: 50
    },
    {id: '2', name: 'Samsung S21', price: 800, category: 'celular', img: 'https://www.oscarbarbieri.com/pub/media/catalog/product/cache/7baadf0dec41407c7702efdbff940ecb/s/2/s21aa.png', stock: 10, description: 'Descripcion del Samsung S21', width: 50},
    {id: '3', name: 'Ipad 8va Generacion', price: 1200, category: 'tablet', img: 'https://www.eagletechnology.com.ar/wp-content/uploads/2021/09/6162WMQWhVL._SL1500_.jpg', stock: 12, description: 'Descripcion del IPAD', width: 50},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve(products.find(prod=> prod.id ===productId))
        }, 500)
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve(products.find(prod=> prod.category ===productCategory))
        }, 500)
    })
}