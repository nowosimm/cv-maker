import '../styles/Button.css'

export function Button({ text}) {
  return (
    <div className='buttons'>
        <button className='button' >{text}</button>
    </div>
    
  )
}
