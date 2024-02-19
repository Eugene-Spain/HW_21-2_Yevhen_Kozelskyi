let requestPrice
let requestDiscountCode
let requestQuantity
let provideAdditionalDiscount
let total

let requestPriceCorrect
let requestQuantityCorrect

let newYearCode = "NEWYEAR"
let blackFridayCode = "BLACKFRIDAY"
let summerSaleCode = "SUMMERSALE"

const NEWYEAR = 0.2
const BLACKFRIDAY = 0.3
const SUMMERSALE = 0.15
const REGULAR_DISCOUNT = 0.05
const QUANTITY_DISCOUNT = 0.05
const AMOUNT_DISCOUNT = 0.1

let newYearDiscountShow = NEWYEAR * 100
let blackFridayDiscountShow = BLACKFRIDAY * 100
let summerSaleDiscountShow = SUMMERSALE * 100
let regularDiscountShow = REGULAR_DISCOUNT * 100
let quantityDiscountShow = QUANTITY_DISCOUNT * 100
let amountDiscountShow = AMOUNT_DISCOUNT * 100


requestPrice = prompt("Welcome to our web store. I am bot-helper and I would like to help you with your final price. Please insert the price of chosen item")
requestPriceCorrect = !isNaN(requestPrice)
if (requestPriceCorrect) {
    
    requestDiscountCode = prompt("Lets check if you have got one of our special discount codes. Please insert it here:")
   
    if (requestDiscountCode === newYearCode) {
        requestDiscountCode = NEWYEAR
        alert(`You have used correct code. Your discount is ${newYearDiscountShow} % `)
    } else if (requestDiscountCode === blackFridayCode) {
        requestDiscountCode = BLACKFRIDAY
        alert(`You have used correct code. Your discount is ${blackFridayDiscountShow} % `)
    } else if (requestDiscountCode === summerSaleCode) {
        requestDiscountCode = SUMMERSALE
        alert(`You have used correct code. Your discount is ${summerSaleDiscountShow} % `)
    } else {
        requestDiscountCode = REGULAR_DISCOUNT
        alert(`Sorry but we don't know that code. However you shouldn't get upset, because we will provide you our special discount for you. Your discount is ${regularDiscountShow} %`)
    }

    requestQuantity = prompt("Please provide how many units of previously selected item you would like to buy?")
    requestQuantityCorrect = !isNaN(requestQuantity)
    
    if (requestQuantityCorrect) {        
        if (+requestQuantity >= 3) {
            requestDiscountCode += QUANTITY_DISCOUNT
            alert(`Congratulations! You have got additional ${quantityDiscountShow} % discount for this items quantity`)
        }
    }
    else{
        alert(`Sorry but "${requestQuantity}" that you provided as items quantity is not a number or incorrect. Check one more time and try again.`)
    }

} else {
    alert("You have inserted incorrect price. Please check if it has got only numbers and use points instead of commas to use cent's")
}

let finalDiscountShow = requestDiscountCode * 100

if (requestPriceCorrect && requestQuantityCorrect){
    total = requestPrice * requestQuantity * (1 - requestDiscountCode)
    if (total > 1000){
        total *= (1 - AMOUNT_DISCOUNT) 
        alert(`What??? You chose an item for ${requestPrice} UAH , decided to take ${requestQuantity} of them and then you've received discounts on ${finalDiscountShow} % ... We can see that you may become our VIP customer so you are lucky one to receive our last discount of ${amountDiscountShow} % and your total now is ${total} UAH. Thank you for choosing our store.`)
    } else{
        alert(`Okay so, you chose an item for ${requestPrice} UAH , decided to take ${requestQuantity} of them and then you've received discounts on ${finalDiscountShow} %. So now your total is ${+total} UAH. Thank you for choosing our store!`)
    }
}



