import { Input } from "./Input"

export function PersonalDetailForm({personalInfo, setPersonalInfo}) {
    return (
      <div className='input__Container'>
        <label>Name <Input value={personalInfo.name} setData={setPersonalInfo('name')} /></label>
        <label>Email <Input  value={personalInfo.email} setData={setPersonalInfo('email')} /></label>
        <label>Phone Number <Input value={personalInfo.phone} setData={setPersonalInfo('phone')}/></label>
        <label>City <Input value={personalInfo.location} setData={setPersonalInfo('location')}/></label>
      </div>
    )
  };