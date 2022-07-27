import classes from './tour.module.css'
import { tourDates } from '../../data/tour-data'

function Tour() {
  return (
    <div className="section">
      <h1>UPCOMING TOURDATES</h1>
      <div className={classes.showContainer}>
        <h3 className={classes.columnTitle}>DATE</h3>
        <h3 className={classes.columnTitle}>LOCATION</h3>
        <h3 className={classes.columnTitle}>CITY</h3>
      </div>
      {tourDates.map((show, index) => (
        <div className={classes.showContainer} key={index}>
          <p className={classes.column}>{show.date}</p>
          <p className={classes.column}>{show.location}</p>
          <p className={classes.column}>{show.city}</p>
        </div>
      ))}
    </div>
  )
}

export default Tour
