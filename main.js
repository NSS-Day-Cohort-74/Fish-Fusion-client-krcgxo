const { fishMenu } = require("./restaurant.js")
const {getInventory} = require("./fishingBoat.js")
const {mongerInventory} = require("./fishMonger.js")

const dailyPriceLimit = 3.49

const boatInventory = getInventory()
const mongerPurchase = mongerInventory(boatInventory, dailyPriceLimit)


const menu = fishMenu(mongerPurchase)

const menuMap = menu.map(menuItem =>  `
   <h2>${menuItem.species}</h2>
   <section class="menu__item"> ${menuItem.species} Soup</section>
   <section class="menu__item"> ${menuItem.species} Sandwich</section>
   <section class="menu__item">Grilled ${menuItem.species}</section>
`);

console.log("<h1>menu</h1>" + "\n\n<article class='menu'" + menuMap.join( '') + "</article>") 