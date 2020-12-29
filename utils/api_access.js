async function apiAccess(res) {
	// Run the middleware
	const { accessRight } = res;
	return accessRight == 'admin';
}

export default apiAccess;