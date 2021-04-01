import '../css/pageHeader.css'
const PageHeader = ({ displayText="Pentazon" }) => {
    return (
        <div className='page-head'>
            <div className='page-head-content'>
                <h1> {displayText}</h1>
            </div>
        </div>
    )
}

export default PageHeader;