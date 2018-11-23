import React from 'react';
import PageHeader from '../../components/PageHeader'
import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'


import './aboutpage.scss'

const About = (props) => {
    return (<div id="About" className="aboutPage">
            <PageHeader title="About" />
            <Avatar avatar={"./images/avatar.jpg"}
                    style={{"grid-column": "v1 / span 2", "grid-row": "h2 / span 1"}} />
            <Paragraph className="aboutText">
                I have always been eager to combine two interests of mine, the human body and technology. 
            </Paragraph>
        </div>)
}

export default About