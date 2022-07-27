import classes from './button.module.css'

function Button({ children, className, onClick }) {
  return (
    <button className={`${classes.btn} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
