import classes from './tour.module.css';

function Tour() {
    return (
        <div className='section'>
            <h1>UPCOMING TOURDATES</h1>
            <div className={classes.showContainer}>
                <p className={classes.columnTitle}>DATE</p>
                <p className={classes.columnTitle}>LOCATION</p>
                <p className={classes.columnTitle}>CITY</p>
            </div>
            <div className={classes.showContainer}>
                <p className={classes.column}>21.11.2020</p>
                <p className={classes.column}>KULTURHAUS KILI</p>
                <p className={classes.column}>BERLIN,DE</p>
            </div>
            <div className={classes.showContainer}>
                <p className={classes.column}>16.11.2019</p>
                <p className={classes.column}>LOBUSCH NO PASARAN</p>
                <p className={classes.column}>HAMBURG,DE</p>
            </div>
            <div className={classes.showContainer}>
                <p className={classes.column}>02.11.2019</p>
                <p className={classes.column}>PALETTENFEST</p>
                <p className={classes.column}>GÖTTINGEN,DE</p>
            </div>
            <div className={classes.showContainer}>
                <p className={classes.column}>01.11.2019</p>
                <p className={classes.column}>VRANKREICH</p>
                <p className={classes.column}>AMSTERDAM,NL</p>
            </div>
            <div className={classes.showContainer}>
                <p className={classes.column}>02.11.2019</p>
                <p className={classes.column}>PALETTENFEST</p>
                <p className={classes.column}>GÖTTINGEN,DE</p>
            </div>
            <div className={classes.showContainer}>
                <p className={classes.column}>01.11.2019</p>
                <p className={classes.column}>VRANKREICH</p>
                <p className={classes.column}>AMSTERDAM,NL</p>
            </div>
        </div>
    );
}

export default Tour;
