import React from 'react'
import './portfoliogrid.scss'

const isURL = str =>
	/^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(str);

const PortfolioBox = (props)=> {
    let {thumbnail} = props;
	if (!isURL(thumbnail)) {
		thumbnail = `./images/${thumbnail}`;
	}
    return (<div className="portfolioBox"
                index={props.index}
                onClick={props.handleSelect}
                style={{
                    backgroundImage: `url(${thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
    >  
        
        </div>)
}




const PortfolioGrid = props => {
    return <div className="portfolioGrid">
        {
            props.portfolio.map((each, index) => <PortfolioBox
                handleSelect={props.handleSelect} 
                key={index}
                index={index} 
                thumbnail={each.thumbnail} /> )
        }

        <div className="portfolioBox"> a </div>
        <div className="portfolioBox"> b </div>
        <div className="portfolioBox"> c </div>
        <div className="portfolioBox"> d </div>
        <div className="portfolioBox"> e </div>

        


    </div>

}

export default PortfolioGrid