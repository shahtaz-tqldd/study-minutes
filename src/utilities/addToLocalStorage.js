const addToLocalStorage = id =>{
    let cart;

    const storedCart = localStorage.getItem('cart')
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    else{
        cart = {}
    }
    
    const quantity = cart[id]
    if(quantity){
        const newQuantity = quantity + 1;
        cart[id] = newQuantity;
    }
    else{
        cart[id] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

const getStoredCart =()=>{
    let cart = {};

    const storedCart = localStorage.getItem('cart')
    if(storedCart){
        cart = JSON.parse(storedCart);
    }

    return cart;
}

const deleteCart =()=>{
    localStorage.removeItem('cart');
}

export {addToLocalStorage, getStoredCart, deleteCart}