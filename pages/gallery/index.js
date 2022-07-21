import classes from './gallery.module.css';
import { galleryData } from './data';
import Card from './card';

export default function Gallery() {
    return (
        <div className='section'>
            <h1>GALLERY</h1>
            <div className={classes.cardsContainer}>
                {galleryData.map((card, index) => (
                    <Card key={index} card={card} />
                ))}
            </div>
        </div>
    );
}
