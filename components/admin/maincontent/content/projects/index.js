import UserDetailContent from './userdetailcontent';

const AboutContent = ({ sideBar }) => {
	const [subHeading, option] = sideBar;
	switch (subHeading) {
		default:
			switch (option) {
				case 'user details':
					return <UserDetailContent />;
				default:
					return <></>;
			}
	}
};

export default AboutContent;
