let bookCart = []
const add_to_cart_action = 'addAction'
const remove_from_cart_action = 'removeAction'
const view_cart_action = 'viewAction'

function viewCart(){
    console.log('Current cart of Books: ', bookCart)
}
function performCartActions(action, newBook){
    switch(action){
        case add_to_cart_action:
            bookCart.push(newBook)
            break;
        case remove_from_cart_action:
            if(bookCart.length===0){
                console.log('Cart is empty. No books to remove.')
            }else{
                const removedBook = bookCart.pop()
                console.log(`Removed book from the cart:  ${removedBook}`)
            }
            break;
        case view_cart_action:
            viewCart()            
            break;
        default:
            console.log('Invalid action.Please choose a valid option')
            break;
    }
}

performCartActions(add_to_cart_action,'Cien años de soledad')
performCartActions(view_cart_action)
performCartActions(add_to_cart_action, 'To Kill a Mockingbird')
performCartActions(view_cart_action)
performCartActions(remove_from_cart_action)