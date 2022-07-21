import classes from './footer.module.css';
import Image from 'next/image';
import socialIcons from './data';

function Footer() {
    return (
        <footer className={classes.footer}>
            <p className={classes.copyright}>
                © 2022 Speedköbra - All rights reserved
            </p>
            <div className={classes.iconsContainer}>
                {socialIcons.map((link, index) => (
                    <a
                        key={index}
                        target='_blank'
                        href={link.link}
                        className={classes.icon}
                    >
                        <Image
                            src={link.src}
                            alt={link.alt}
                            height={25}
                            width={25}
                        />
                    </a>
                ))}
            </div>
        </footer>
    );
}

export default Footer;
