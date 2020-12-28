const headerList = ['home','about', 'projects', 'blogs', 'contact'];

const headerListRight = [
	{
		name: 'account',
		type: 'subMenu',
		subMenu: [
			{
				name: 'cms',
				type: 'subMenu',
				subMenu: ['database', 'server'],
			},
			{
				name: 'user',
				type: 'subMenu',
				subMenu: ['details'],
			},
			{
				name: 'back to menu',
				type: 'link',
				link: {
					pathname: '/'
				},
			},
		],
	},
];

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

export { menuOptions, headerList, headerTabException, headerListRight };