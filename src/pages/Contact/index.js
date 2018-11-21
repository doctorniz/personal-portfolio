import React from 'react';
import HeroBackground from '../../components/HeroBackground'

const MERLION_MBS = 'https://upload.wikimedia.org/wikipedia/commons/2/20/Rear_view_of_the_Merlion_statue_at_Merlion_Park%2C_Singapore%2C_with_Marina_Bay_Sands_in_the_distance_-_20140307.jpg'

const Contact = (props) => {

    return (<div id="Contact" className="contactPage">
            <HeroBackground backgroundURL={MERLION_MBS} />
        </div>)
}

export default Contact