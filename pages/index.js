import classes from './home-page.module.css';
import Image from 'next/image';
import album from '../public/images/album.jpg';

function HomePage() {
    return (
        <div className={classes.home}>
            <div className={classes.message}>
                <h1>Our New EP</h1>
                <h1 className={classes.albumName}>NIGHTRIDER</h1>
                <h1>Is Out Now!</h1>
                <a
                    href='https://speedkobra666.bandcamp.com/album/nightrider'
                    className={classes.listen}
                    target='_blank'
                >
                    Listen Here
                </a>
            </div>
            <div className={classes.albumContainer}>
                <div className={classes.albumImg}>
                    <Image src={album} alt='album' />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
