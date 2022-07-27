import classes from './error-alert.module.css'

function ErrorAlert({ children }) {
  return <div className={classes.alert}>{children}</div>
}

export default ErrorAlert
