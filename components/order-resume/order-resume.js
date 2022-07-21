import CartItem from '../cart/cart-item';
import classes from './order-resume.module.css';
import Button from '../ui/button';
import { generateCode } from '../../utils/utils';
import { useEffect } from 'react';
import closeIcon from '../../public/icons/close-popup.png';
import Image from 'next/image';

function OrderResume({
    order,
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
        <div className={classes.orderResume}>
            <div className='closeIcon'>
                <Image src={closeIcon} alt='close' onClick={closeModal} />
            </div>
            <h1>CONFIRM YOUR ORDER</h1>
            <h3>
                Once your order is confirmed, you'll be soon contacted about
                shipment and payment methods
            </h3>
            <div className={classes.orderContainer}>
                <h2>Order Code: {generateCode(6)}</h2>
                <div className={classes.itemsContainer}>
                    {order.map((item, index) => (
                        <CartItem item={item} key={index} />
                    ))}
                </div>
                <div className={classes.checkoutContainer}>
                    <Button onClick={handleSubmit}>CONFIRM</Button>
                    <p className={classes.cartTotal}>Total: {total}€</p>
                </div>
                <div className={classes.address}>
                    <h2>SHIP TO:</h2>
                    <p className='address'>
                        {user.firstname + ' ' + user.lastname}
                    </p>
                    <p className='address'>{user.address}</p>
                    <p className='address'>
                        {user.zip}, {user.city}
                    </p>
                    <p className='address'>{user.country}</p>
                </div>
            </div>
            <Button onClick={editAddress}>EDIT</Button>
        </div>
    );
}

export default OrderResume;
