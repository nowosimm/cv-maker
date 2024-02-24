import '../styles/input.css'

export function Input ({ value, setData }) {
  return (
    <div className='input'>
       <input type='text' value={value} onChange={(e) => setData(e.target.value)} className='input__Field' />
    </div>
  )
}
