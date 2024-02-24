import { useState } from 'react'
import '../styles/DropDownButton.css'

export function DropDownButton({ text, children }) {
  const [open, setOpen] = useState(false);

  let childContainerClasses = "dropDown__Container";
  if (open) {
    childContainerClasses += " open";
  }

  return (
    <div className='dropDown'>
      <button onClick={() => setOpen(!open)} className='dropDown__Button'>
        {text}
        <i className='fa-solid fa-angle-down'></i>
      </button>
      <div className={childContainerClasses}>
        {children}
      </div>
    </div>
  )
}
