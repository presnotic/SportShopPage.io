let listProducts = []

//CART
const cart = document.querySelector('.cart')
const open_cart = document.querySelector('.fa-cart-shopping')
const close_cart = document.querySelector('.close_cart')
const body = document.querySelector('body')
let quantity = document.querySelector('.quantity--')

if(open_cart){
  open_cart.addEventListener('click', ()=>{
    body.classList.add('active')
  })
}
if (close_cart) {
	close_cart.addEventListener('click', () => {
    body.classList.remove('active')
	})
}

function addToCard(key) {
	if (listProducts[key] == null) {
		listProducts[key] = productsHome[key]
		listProducts[key].quantity = 1
	}
	reloadCard()
}

function addToCardShop(key) {
	if (listProducts[key] == null) {
		listProducts[key] = productsShop[key]
		listProducts[key].quantity = 1
	}
	reloadCard()
}

//CARTTAB
const list = document.querySelector('.listCart')
let total = document.querySelector('.total')

function reloadCard() {
	list.innerHTML = ''
	let count = 0
	let totalCount = 0
  let totalPrice = 0
	listProducts.forEach((value, key) => {
		totalPrice = totalPrice + value.price
    count = count + value.quantity
		if(value != null){
			let newDiv = document.createElement('div')
			newDiv.classList.add('card-box')
			newDiv.innerHTML = `
      <div class="image">
        <img src="../images/${value.image}"/>
      </div>
      <div class="name">
        ${value.name}
      </div>
      <div class="price">
        $${value.price.toLocaleString()}
      </div>
      <div class="quantity">
        <span onclick="changeQuantity(${key}, ${
				value.quantity - 1
			})" class="minus"><</span>
        <span class="quantity--">${value.quantity}</span>
        <span onclick="changeQuantity(${key}, ${value.quantity + 1})">></span>
      </div>
    `
			list.appendChild(newDiv)
    
		}
	})
  total.innerText = count
	quantity.innerText = count
}

function changeQuantity(key, quantity) {
	if (quantity == 0) delete listProducts[key]
	else {
		listProducts[key].quantity = quantity
	}
	reloadCard()
}

