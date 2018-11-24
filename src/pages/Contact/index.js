import React from 'react';
import Background from '../../components/Background';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import SocialGrid from '../../components/SocialGrid';
import './contact.css';

const MERLION_MBS =
	'https://upload.wikimedia.org/wikipedia/commons/2/20/Rear_view_of_the_Merlion_statue_at_Merlion_Park%2C_Singapore%2C_with_Marina_Bay_Sands_in_the_distance_-_20140307.jpg';

const socialLinks = [
	'http://twitter.com/realdoctorniz',
	'https://www.instagram.com/doctorniz',
	'https://scholar.google.co.uk/citations?user=mAwUylMAAAAJ&hl=en',
	'https://github.com/doctorniz',
	'https://medium.com/@doctorniz'
];

const Contact = props => {
	return (
		<Background backgroundUrl={MERLION_MBS}>
			<div id="Contact" className="contactPage">
				<PageHeader title={'Contact'} />
				<ContactForm />
				<SocialGrid socialLinks={socialLinks} />
			</div>
		</Background>
	);
};

export default Contact;
