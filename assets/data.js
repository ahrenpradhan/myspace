const headerList = ['home','about', 'projects', 'blogs', 'contact'];
const headerTabException = ['home'];

const menuOptions = [
	{
		name: 'about',
		menu: [
			{
				name: 'user details',
				subMenu: [],
			},
			{
				name: 'experience',
				subMenu: ['professional', 'interships', 'training'],
			},
			{
				name: 'skills',
				subMenu: [],
			},
			{
				name: 'achievements',
				subMenu: [],
			},
		],
	},
];

export { menuOptions, headerList, headerTabException };