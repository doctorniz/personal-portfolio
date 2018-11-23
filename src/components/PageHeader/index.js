import React from 'react';
import './pageheader.css'

const PageHeader = props => {

    return (<div className="pageHeader">
            {props.title}
        </div>)
}

export default PageHeader