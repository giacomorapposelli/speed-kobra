import { useState, useContext } from 'react';
import { OverlayContext } from '../../contexts/overlay-context';
import ImageSlider from '../../components/slider/slider';
import Image from 'next/image';
import { galleryImages } from './data';
import classes from './gallery.module.css';

export default function Card({ card }) {
    const [popUp, setPopUp] = useState(false);
    const { overlay, setOverlay } = useContext(OverlayContext);

    const togglePopUp = () => {
        setOverlay(!overlay);
        setPopUp(!popUp);
    };

    return (
        <div className={classes.card}>
            <div className={classes.previewImg} onClick={togglePopUp}>
                <Image src={card.src} alt='live' />
            </div>
            <h3 onClick={togglePopUp}>{card.name}</h3>
            {popUp && (
                <ImageSlider
                    slides={galleryImages[card.id]}
                    togglePopUp={togglePopUp}
                />
            )}
        </div>
    );
}
