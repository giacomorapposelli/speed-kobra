import Cart from '../../components/cart/cart';
import Items from '../../components/items/items';
import classes from './store.module.css';
import CartProvider from '../../contexts/cart-context';

function Store() {
    return (
        <div className='section'>
            <h1>STORE</h1>
            <div className={classes.storeContainer}>
                <CartProvider>
                    <Items />
                    <Cart />
                </CartProvider>
            </div>
        </div>
    );
}

export default Store;
