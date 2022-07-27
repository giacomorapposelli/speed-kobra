import classes from './thanks-popup.module.css'
import Button from '../ui/button'
import Image from 'next/image'
import closeIcon from '../../public/icons/close-popup.png'

export default function ThanksPopup({
  setThanksPopUp,
  setOverlay,
  setPurchased,
}) {
  const closeModal = () => {
    setThanksPopUp(false)
    setOverlay(false)
    setPurchased(false)
  }
  return (
    <div className={`popUp ${classes.thanksPopUp}`}>
      <div className="closeIcon">
        <Image src={closeIcon} alt="close" onClick={closeModal} />
      </div>
      <h1>THANK YOU!</h1>
      <h2>
        Your order has been placed, we've just sent you a confirmation email
      </h2>
      <Button onClick={closeModal}>Close</Button>
    </div>
  )
}
