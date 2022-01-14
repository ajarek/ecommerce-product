const main = document.querySelector('main')
const states = document.querySelector('.active-states')
const productImg = document.querySelector('.product img')
const productClose = document.querySelector('.product .close')
const previous = document.querySelector('.previous')
const next = document.querySelector('.next')
const newImg = document.querySelector('#new-img');
const thumbnail = document.querySelectorAll('.thumbnail img');
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const score = document.querySelector('.score')
const addToCart = document.querySelector('.add-to-cart')
const amount = document.querySelector('.amount')
const cart = document.querySelector('.cart')
const cartImg = document.querySelector('.cart-img')
const myCart = document.querySelector('.my-cart')
const closeCart = document.querySelector('.close-cart')
const burger = document.querySelector('.burger')
const productThumb = document.querySelectorAll('.prth')
const closeBr = document.querySelector('.close-br')
const products = [{
        name: 'Product 1',
        img: '/images/image-product-1.jpg',
        thumb: '/images/image-product-1-thumbnail.jpg',
        id: 'prth1'
    },
    {
        name: 'Product 2',
        img: '/images/image-product-2.jpg',
        thumb: '/images/image-product-2-thumbnail.jpg',
        id: 'prth2'
    },
    {
        name: 'Product 3',
        img: '/images/image-product-3.jpg',
        thumb: '/images/image-product-3-thumbnail.jpg',
        id: 'prth3'
    },
    {
        name: 'Product 4',
        img: '/images/image-product-4.jpg',
        thumb: '/images/image-product-4-thumbnail.jpg',
        id: 'prth4'
    }
]
let x = 0

const displayProduct = () => {
    main.style.opacity = 0.3
    states.style.display = 'flex'
}

const closeProduct = () => {
    main.style.opacity = 1
    states.style.display = 'none'
}

const nextProduct = () => {
    newImg.src = products[x + 1].img
    thumbnail.forEach(thumb => {
        thumb.classList.remove('active')
        if (thumb.src == 'http://127.0.0.1:5500' + products[x + 1].thumb) {
            thumb.classList.add('active')
        }
    })
    x++
    if (x == products.length - 1) {
        next.style.display = 'none'
    }
    if (x >= 0) {
        previous.style.display = 'block'
    }
}

const previousProduct = () => {
    newImg.src = products[x - 1].img
    thumbnail.forEach(thumb => {
        thumb.classList.remove('active')
        if (thumb.src == 'http://127.0.0.1:5500' + products[x - 1].thumb) {
            thumb.classList.add('active')
        }
    })
    if (x <= 1) {
        previous.style.display = 'none'
    }
    if (x <= products.length - 1) {
        next.style.display = 'block'
    }
    x--
}
const removeClass = () => {
    productThumb.forEach(thumb => {
        thumb.classList.remove('active')
    })
}

const selectProduct = (e) => {
    removeClass()
    products.forEach(product => {
        if (e.target.id == product.id) {
            productImg.src = product.img
            e.target.classList.add('active')
        }
    })
}
const addScore = () => {
    score.innerHTML = parseInt(score.innerHTML) + 1
}
const subtractScore = () => {
    score.innerHTML = parseInt(score.innerHTML) - 1
    if(score.innerHTML < 0){
        score.innerHTML = 0
    }
}

const addProduct = () => {
 let y=   document.querySelector('.amount').innerHTML
 let z=   document.querySelector('.score').innerHTML
amount.innerHTML = parseInt(y) +parseInt(z)
}
const displayCart = () => {
    myCart.style.display = 'flex'
    if(amount.innerHTML >0){
        cartImg.innerHTML=''
    const cartItem = document.createElement('div')
    cartItem.classList.add('cart-item')
    cartItem.innerHTML = `<div class="row">
    <div class="img-item">
    <img src="${products[0].thumb}" alt="">
    </div>
    <div class="info-item">
    <span>Fall Limited Edition Sneakers</span>
    <p>125.00 x ${amount.innerHTML}  <b>$${(amount.innerHTML*125).toFixed(2)}</b></p>
    </div>
    </div>
    <div class="check-item">
    <button class="check">Checkout</button>
    </div>`
    cartImg.appendChild(cartItem)
}
}
const closeMyCart=()=>{
    myCart.style.display = 'none'
    amount.innerHTML = 0
    score.innerHTML = 0
    document.querySelector('.cart-img').innerHTML='You cart is empty'
}
const displayMenu = () => {
    document.querySelector('.menu').classList.toggle('active')
    closeBr.style.display = 'block'
    main.style.opacity = 0.4
}
const closeBurger = () => { 
    document.querySelector('.menu').classList.remove('active')
    main.style.opacity = 1
}

productImg.addEventListener('click', displayProduct)
productClose.addEventListener('click', closeProduct)
next.addEventListener('click', nextProduct)
previous.addEventListener('click', previousProduct)
productThumb.forEach(thumb => {
    thumb.addEventListener('click', selectProduct)
})
plus.addEventListener('click', addScore)
minus.addEventListener('click', subtractScore)
addToCart.addEventListener('click', addProduct)
cart.addEventListener('click', displayCart)
closeCart.addEventListener('click',closeMyCart)
burger.addEventListener('click',displayMenu)
closeBr.addEventListener('click',closeBurger)
