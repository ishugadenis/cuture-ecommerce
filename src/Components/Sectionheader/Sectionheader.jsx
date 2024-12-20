import './Sectionheader.css';

const Sectionheader = ({title, subTitle}) => {
  return (
    <div className='section-header'>
      <div className="title">
          <div className="title-container"></div>
          <p>{title}</p>
       </div>
       <div className="subtitle">
        <h3>{subTitle}</h3>
       </div>
    </div>
  )
}

export default Sectionheader