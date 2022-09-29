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

const addBreakTime = time =>{
    let breakTime;

    const storedTime = localStorage.getItem('break-time')
    if(storedTime){
        breakTime = JSON.parse(storedTime);
    }
    else{
        breakTime = {}
    }
    
    breakTime = time;

    localStorage.setItem('break-time', JSON.stringify(breakTime))
}

const getStoredCart =()=>{
    let cart = {};

    const storedCart = localStorage.getItem('cart')
    if(storedCart){
        cart = JSON.parse(storedCart);
    }

    return cart;
}
const getStoredTime =()=>{
    let breakTime={};
    const storedTime = localStorage.getItem('break-time')
    if(storedTime){
        breakTime = {storedTime}
        return breakTime;
    }
    else{
        return breakTime={};
    }
}

const deleteCart =()=>{
    localStorage.removeItem('cart');
    localStorage.removeItem('break-time');
}

export {addToLocalStorage, getStoredCart, getStoredTime, addBreakTime, deleteCart}