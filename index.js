
const groceryItems=[
{ name: 'Apple', category: 'Fruits', price: 1.0, quantity: 6 },
{ name: 'Banana', category: 'Fruits', price: 0.5, quantity: 10 },
{ name: 'Carrot', category: 'Vegetables', price: 0.8, quantity: 8 },
{ name: 'Milk', category: 'Dairy', price: 2.0, quantity: 2 },
{ name: 'Eggs', category: 'Dairy', price: 1.5, quantity: 12 }
]

let groceryList = document.querySelector("#groceryList");
let totalCost = document.querySelector("#totalCost");
let totalQuantity = document.querySelector("#totalQuantity");

function displayGroceryItems (){
 groceryList.innerHTML=""   
 let totalCostElement=0
 let totalQuantityElement=0
 Object.values(groceryItems).forEach(item=>{
    // let item = groceryItems[itemKey]
    let itemDiv= document.createElement("div")
    itemDiv.innerHTML =`<b>${item.name}</b> (${item.category}): $${item.price} - ${item.quantity} units`
  groceryList.append(itemDiv)

  totalCostElement+=item.price*item.quantity
  totalQuantityElement+= item.quantity
})

totalCost.innerHTML = totalCostElement;
totalQuantity.innerHTML = totalQuantityElement;
}
function addItemPrompt(){
    const name= prompt("name of the grocery item")
    const category = prompt("what food category is it in ")
    const price = prompt("How much does it cost per one")
    const quantity = prompt("how many quantity would you like ")
    const priceValue = parseFloat(price)
    const quantityValue = parseInt(quantity)
    if((name== ""||category=="" || price==" " || quantity=="")){
        alert("plese read the prompt instruction carefully so the form can be filled out right ")
        return;

    }
    if (isNaN(priceValue) || isNaN(quantityValue)) {
        alert("Please enter a valid price and quantity");
        return;
      }
      const newItem = {
        name: name,
        category: category,
        price: priceValue,
        quantity: quantityValue,
      };
      
      groceryItems.push(newItem)
      displayGroceryItems()
}  

function isolateCategory(category) {
    groceryList.innerHTML = "";

    let filteredItems = groceryItems.filter(item => item.category === category);

    filteredItems.forEach(item => {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = `<b>${item.name}</b> (${item.category}): $${item.price} - ${item.quantity} units`;
        groceryList.append(itemDiv);
    });
}
function showAllCategories(){
    displayGroceryItems()

}
function orderItemsByCost(){
    groceryItems.sort((a, b)=>{
        return b.price-a.price

    })
    displayGroceryItems()
}

displayGroceryItems()