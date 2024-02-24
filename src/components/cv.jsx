import '../styles/cv.css'

export function MakeCV({ personalInfo, educationInfo, experienceInfo}) {
    return (
        <div className="cv__Container">
            <header className='header__Container'>
                <div className='header__Name'>{personalInfo.name}</div>
                <div className='header__DetailsContainer'>
                    <div className='header__Email'>{personalInfo.email}</div>
                    <div className='header__Phone'>{personalInfo.phone}</div>
                    <div className='header__Location'>{personalInfo.location}</div>
                </div>
            </header>

            <div className='divider__Text'>Education</div>
            <div className='divider'></div>

            <section className='education__Container'>
                <div className='entry__Container'></div>
                <div className='entry__Left'>
                    <div className='entry__Date'>
                        <div className='entry__StartDate'>{educationInfo.startDate}</div>
                        <div className='entry__DateSeparator'> - </div>
                        <div className='entry__EndDate'>{educationInfo.endDate}</div>
                    </div>
                    <div className='entry__Location'>{educationInfo.location}</div>
                </div>
                <div className='entry__Right'>
                    <div className='entry__Header'>{educationInfo.school}</div>
                    <div className='entry__SubHeader'>{educationInfo.degree}</div>
                </div>
            </section>

            <div className='divider__Text'>Experience</div>
            <div className='divider'></div>

            <section className='experience__Container'>
            <div className='entry__Container'></div>
            <div className='entry__Left'>
                <div className='entry__Date'>
                    <div className='entry__StartDate'>{experienceInfo.startDate}</div>
                    <div className='entry__DateSeparator'> - </div>
                    <div className='entry__EndDate'>{experienceInfo.endDate}</div>
                </div>
                    <div className='entry__Location'>{experienceInfo.location}</div>
                </div>
                <div className='entry__Right'>
                    <div className='entry__Header'>{experienceInfo.company}</div>
                    <div className='entry__SubHeader'>{experienceInfo.position}</div>
                    <div className='entry__Description'>{experienceInfo.description}</div>
                </div>
        </section>
        </div>
    )
}
export default MakeCV