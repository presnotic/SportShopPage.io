//MENU
const menu = document.querySelector('nav')
const open_menu = document.querySelector('.fa-bars')
const close_menu = document.querySelector('.fa-arrow-up')

if(open_menu){
  open_menu.addEventListener('click', ()=>{
    menu.classList.add('active')
  })
}
if (close_menu) {
	close_menu.addEventListener('click', () => {
		menu.classList.remove('active')
	})
}

//HOME/SHOP CARDS
let listHOME = document.querySelector('.cards-home')
let listSHOP = document.querySelector('.shop-container')

function initDataHome(){
  productsHome.forEach((value,key)=>{
    let newDivHome = document.createElement('div')
    newDivHome.classList.add('home-card')
    newDivHome.innerHTML = `
      <img onclick="openInfo(${value.id})" src="images/${value.image}"/>
      <h1 onclick="openInfo(${value.id})"> ${
			value.name
		} <br> <span>$${value.price.toLocaleString()}</span></h1>
      <button onclick="addToCard(${key})" class="addCart">Add To Cart</button>
    `
    listHOME.appendChild(newDivHome)
  })
}
initDataHome()


function initDataShop() {
	productsShop.forEach((value, key) => {
		let newDivShop = document.createElement('div')
		let star = "<i class='fa-solid fa-star checked'></i> \n"
		newDivShop.classList.add('item')
		newDivShop.innerHTML = `
        <div class="image">
          <img onclick="openInfo(${value.id})" src="images/${value.image}"/>
        </div>
        <div class="name" onclick="openInfo(${value.id})">
          ${value.name}
        </div>
        <div class="price">
          $${value.price.toLocaleString()}
        </div>
                <div class="stars">
                    ${star.repeat(value.stars)}
                </div>
        <button onclick="addToCardShop(${key})" class="addCart">Add To Cart</button>
    `
		listSHOP.appendChild(newDivShop)
	})
}
initDataShop()

function openInfo(id) {
  const product = productsShop.find(p => p.id === id);

  if (product) {
    let newWindow = document.createElement('div');
    newWindow.classList.add('modal-window');
    newWindow.innerHTML = `
      <div class="window">
        <div class="image">
          <img src="images/${product.image}" alt="">
        </div>
        <div class="info-modal">
          <i class="fa-solid fa-xmark close-modal"></i>
          <div class="name">
            ${product.name}
          </div>
          <div class="info">
            ${product.text}
          </div>
          <div class="price">
            $${product.price.toLocaleString()}
          </div>
          <div class="stars">
            ${'<i class="fa-solid fa-star checked"></i>'.repeat(product.stars)}
          </div>
          <button>Buy</button>
        </div>
      </div>
    `;

    document.body.appendChild(newWindow);

    const closeButton = newWindow.querySelector('.close-modal');
    closeButton.addEventListener('click', () => {
      document.body.removeChild(newWindow);
    });
	}
}

//SCROLL-BUTTON-UP

const btn_up = document.querySelector('.button-up')

window.addEventListener('scroll', ()=>{
	if(window.pageYOffset > 100)
		btn_up.classList.add('active')
	else
		btn_up.classList.remove('active')
})

//NEWS

let listNews = document.querySelector('.news-container')

function initNews(){
  news.forEach((value)=>{
    let newNews = document.createElement('div')
    newNews.classList.add('news-box')
    newNews.innerHTML = `
      <div onclick="openNews(${value.id})" class="image">
          <img src="images/${value.image}" alt="#">
        </div>
        <div onclick="openNews(${value.id})" class="name">
          ${value.name}
        </div>
    `

    listNews.appendChild(newNews)
  })
}
initNews()

function openNews(id){
  const newsData = news.find(p => p.id === id)
  if(newsData){
    let newsModalWindow = document.createElement('div')
    newsModalWindow.classList.add('newsWindow')
    newsModalWindow.innerHTML = `
      <div class="newsModal">
        <div class="image">
          <img src="images/${newsData.image}" alt="#">
        </div>
        <div class="newsInfo">
          <i class="fa-solid fa-xmark close-news"></i>
          <div class="news-header">
          <h2>${newsData.name}</h2>
        </div>
        <div class="news-info">
          ${newsData.info}
        </div>
        </div>
      </div>
    `
    document.body.appendChild(newsModalWindow)

    const closeButton = newsModalWindow.querySelector('.close-news')
		closeButton.addEventListener('click', () => {
			document.body.removeChild(newsModalWindow)
		})
  }
} 


//SEND EMAIL

const label = document.querySelector('.email-label label')
const email_input = document.querySelector('.email-input')
const email_btn = document.querySelector('.email-btn')

  email_btn.addEventListener('click', () => {
		if (email_input.value.length <= 4) {
			label.classList.add('active')
			email_input.classList.remove('active')
		} else {
			label.classList.remove('active')
			email_input.classList.add('active')
		}
		if (email_input.value == '') {
			label.classList.remove('active')
			email_input.classList.remove('active')
		}
	})
