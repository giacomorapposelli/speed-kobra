import classes from './gallery.module.css';
import galleryData from '../../data/gallery-data';
import Card from '../../components/gallery-card/card';

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
