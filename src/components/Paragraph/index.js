import React from 'react';
import './paragraph.css'

const Paragraph = ({children, className, ...props}) => {
    return <div className={`paragraphText ${className}`}>
            {children}
        </div>
}

export default Paragraph