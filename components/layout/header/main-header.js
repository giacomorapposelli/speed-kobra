import Link from 'next/link';
import classes from './main-header.module.css';
import links from './data';

function MainHeader() {
    return (
        <header className={classes.header}>
            <nav className={classes.navigation}>
                <ul className={classes.linksList}>
                    {links.map((link, index) => (
                        <li key={index} className={classes.link}>
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;
