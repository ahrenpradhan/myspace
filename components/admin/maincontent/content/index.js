import AboutContent from './about';
import ProjectsContent from './projects';

const AllContent = ({ page, sideBar }) => {
	switch (page) {
		case 'about':
			return <AboutContent sideBar={sideBar}/>;
		case 'projects':
			return <ProjectsContent sideBar={sideBar}/>;
		default:
			return <>content not found</>;
	}
};

export default AllContent;
