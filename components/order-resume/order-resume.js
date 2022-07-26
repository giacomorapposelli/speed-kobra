import CartItem from '../cart/cart-item';
import classes from './order-resume.module.css';
import Button from '../ui/button';
import { useEffect } from 'react';
import closeIcon from '../../public/icons/close-popup.png';
import Image from 'next/image';

function OrderResume({
    order,
    code,
    total,
    user,
    setUser,
    setOrderPopup,
    setCheckoutForm,
    setOverlay,
    setThanksPopUp,
    setCurrentCart,
    setPurchased
}) {
    useEffect(() => {
        if (Object.keys(user).length === 0) {
            setUser(JSON.parse(localStorage.getItem('user')));
        }
    });

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const data = await fetch('/api/submit', {
                method: 'POST',
                body: JSON.stringify([...order, user]),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            data.json();
            setThanksPopUp(true);
            setOrderPopup(false);
            setPurchased(true);
            setCurrentCart([]);
            setUser({});
            localStorage.clear();
        } catch (err) {
            console.log(err);
        }
    }

    const editAddress = () => {
        setOrderPopup(false);
        setCheckoutForm(true);
    };

    const closeModal = () => {
        setOrderPopup(false);
        setOverlay(false);
    };

    return (
        <div className={`popUp ' ${classes.orderResume}`}>
            <div className='closeIcon'>
                <Image src={closeIcon} alt='close' onClick={closeModal} />
            </div>
            <h2>CONFIRM YOUR ORDER</h2>
            <p className={classes.headline}>
                Once your order is confirmed, you'll be soon contacted about
                shipment and payment methods
            </p>
            <div className={classes.orderContainer}>
                <p>Order Code: {code}</p>
                <div className={classes.itemsContainer}>
                    {order.map((item, index) => (
                        <CartItem
                            item={item}
                            key={index}
                            className={classes.cartItem}
                        />
                    ))}
                </div>
                <div className={classes.checkoutContainer}>
                    <Button onClick={handleSubmit}>CONFIRM</Button>
                    <p>Total (excl. shipping): {total}€</p>
                </div>
                <div className={classes.address}>
                    <p>SHIP TO:</p>
                    <p className='address'>
                        {user.firstname + ' ' + user.lastname}
                    </p>
                    <p className='address'>{user.address}</p>
                    <p className='address'>
                        {user.zip}, {user.city}
                    </p>
                    <p className='address'>{user.country}</p>
                    <Button onClick={editAddress}>EDIT</Button>
                </div>
            </div>
        </div>
    );
}

export default OrderResume;
