//object to store cart items
const cart = {};

//function to add a product to the cart
function addToCart(productName, productPrice){
//if the product is already in the cart, increase quantity and update total price
if(cart[productName]){
    cart[productName].quantity +=1;
    cart[productName].totalPrice += productPrice;
}else{
    //if the product is not in the cart, add it with an initial quantity of 1
    cart[productName]={
        quantity:1,
        totalPrice:productPrice
    };
}
//update the cart display after adding an item 
updateCartDisplay();
}

//function to remove a product from the cart 
function removeFromCart(productName, productPrice){
    //check if the product exists in the cart and has at least one quantity
    if(cart[productName]&&cart[productName].quantity>0){
        cart[productName].quantity-=1;//decrease the quantity
        cart[productName].totalPrice-=productPrice//adjust the total price

        //if the quantity reaches zero, remove the product from the cart
        if(cart[productName].quantity==0){
            delete cart[productName];
        }
    }else{
        //alert the user if they try to remove an item not in the cart
        alert('The item is not in the cart!');
    }
    //update the cart display after removing an item
    updateCartDisplay();
}
function calculateTotalPrice(){
    let total=0;
    for(let product in cart){
        total += cart[product].totalPrice;
    }
    return total;
}

//function to update the cart display on the webpage
function updateCartDisplay(){
    const cartList = document.getElementById('products');
    cartList.innerHTML =''; //clear the current cart list

    //loop through the cart object and display each producy
    for (let product in cart){
        const listItem = document.createElement('li');
        listItem.innerText = `${product} -Quantity:${cart[product].quantity} -Total Product Price:Php ${cart[product].totalPrice.toFixed(2)}`;
        cartList.appendChild(listItem); // add the item to the cart list
    }
    //calculate and display the total price
}
function updateCartDisplay(){
    const cartList=document.getElementById('products');
    cartList.innerHTML=''; //clear current cart list

    //loop through the cart object and display each product
    for(let product in cart){
        const listItem = document.createElement('li');
        listItem.innerText = `${product} Quantity: ${cart[product].quantity} Total Price:Php ${cart[product].totalPrice.toFixed(2)}`;
        listItem.classList.add("list_of_items");
        cartList.appendChild(listItem); //add the item to the cart list
    }
    const totalPrice = calculateTotalPrice();
    const totalPriceElement = document.createElement('div');
    totalPriceElement.innerText = `Total Price: Php ${totalPrice.toFixed(2)}`;
    totalPriceElement.classList.add("total-cart-price");
    cartList.appendChild(totalPriceElement);
}