import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

const UserDetailContent = ({ page, sideBar }) => {
	if (page == 'about' &&  sideBar.includes('user details')) {
		return <div>this is the user content</div>;
	}
    return<></>;
};

const mapStateToProps = (state) => ({
	...state,
});

const mapDispatch = null;

export default connect(mapStateToProps, mapDispatch)(UserDetailContent);
