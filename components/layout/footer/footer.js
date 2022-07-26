import classes from './footer.module.css';
import Image from 'next/image';
import socialIcons from './data';

function Footer() {
    return (
        <footer className={classes.footer}>
            <p>© 2022 Speedköbra - All rights reserved</p>
            <div className={classes.iconsContainer}>
                {socialIcons.map((link, index) => (
                    <a
                        key={index}
                        target='_blank'
                        href={link.link}
                        className={classes.icon}
                    >
                        <div className={classes.icon}>
                            <Image src={link.src} alt={link.alt} />
                        </div>
                    </a>
                ))}
            </div>
        </footer>
    );
}

export default Footer;
