import classes from './checkout-form.module.css'
import Button from '../ui/button'

function CheckoutForm({ toggleCheckoutForm, setOrderResume, user, setUser }) {
  const addUser = (e) => {
    e.preventDefault()
    setOrderResume()
    localStorage.setItem('user', JSON.stringify(user))
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const inputFields = [
    'First Name',
    'Last Name',
    'Email',
    'Address',
    'ZIP',
    'City',
    'Country',
  ]

  return (
    <div className={`popUp ${classes.checkOutFormContainer}`}>
      <h2>
        {localStorage.getItem('user')
          ? 'EDIT YOUR ADDRESS'
          : 'CHECKOUT YOUR ORDER'}
      </h2>
      <form method="POST" onSubmit={addUser}>
        {inputFields.map((input, index) => (
          <input
            key={index}
            type={input === 'Email' ? 'email' : 'text'}
            name={input.split(' ').join('').toLowerCase()}
            value={user[input.split(' ').join('').toLowerCase()] || ''}
            placeholder={input}
            onChange={handleChange}
            required></input>
        ))}
        <div className={classes.buttonsContainer}>
          <Button>Confirm</Button>
          <Button onClick={toggleCheckoutForm}>Go Back</Button>
        </div>
      </form>
    </div>
  )
}

export default CheckoutForm
