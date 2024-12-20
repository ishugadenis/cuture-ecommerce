import './Iconcontainer.css';

const Iconcontainer = ({outerBackground, borderType, title, content, icon}) => {

    const outerCircleStyles ={
        backgroundColor:`${outerBackground}`,
    
    
    }

    const wholeContainer ={
        border:`${borderType}`,
        // padding:'20px 10px'
    }

  return (
      <div className="whole-container" style={wholeContainer}>
        <div className="outer-circle" style= {outerCircleStyles}>
          <div className="inner-circle">
            <i className={icon}></i>
          </div>
        </div>
        <h5>{title}</h5>
        <p className='p-small'>{content}</p>
      </div>
  )
}

export default Iconcontainer