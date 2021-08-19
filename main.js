const addStar = () => {
  const starBorderHtml = `<span class="material-icons-outlined"> star_border</span>
                          <span class='value'>4.2 (335)</span>`
  const starHTML = `<span class="material-icons-outlined"> star </span>`
  const divStar = document.querySelector('.stars')
  divStar.innerHTML += starHTML.repeat(3)
  divStar.innerHTML += starBorderHtml
}

const btnAddToCart = document.querySelector('#add-to-cart')
const discontinueAction = event => event.preventDefault()
btnAddToCart.addEventListener('click', discontinueAction)

const hamburguerMenu = document.querySelector('.hamburguer')
const menuNav = document.querySelector('nav.center')
const openAndCloseMenu = () => {
  console.log('feito');
  const CSSClass = 'show'
  menuNav.classList.toggle(CSSClass)
}

hamburguerMenu.addEventListener('click', openAndCloseMenu)
const links =  menuNav.children
for(let item of links){
  item.addEventListener('click', openAndCloseMenu)
}
window.addEventListener('load', addStar)