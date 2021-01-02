import { UserOutlined, DatabaseOutlined, CrownOutlined } from '@ant-design/icons';
// icon={<TeamOutlined />}
const headerList = ['home', 'about', 'projects', 'blogs', 'contact'];

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
					pathname: '/',
				},
			},
		],
	},
];

const headerTabException = ['home'];

const sideMenuOptions = [
	{
		name: 'about',
		menu: [
			{
				name: 'user details',
				subMenu: [],
				displaycontent: true,
				content: {
					'user details': [
						{
							header: 'first name',
							type: 'text',
						},
						{
							header: 'last name',
							type: 'text',
						},
						{
							header: 'age',
							type: 'number',
						},
						{
							header: 'about me',
							type: 'paragraph',
						},
					],
				},
				contentType: 'input form',
			},
			{
				name: 'experience',
				subMenu: ['professional', 'interships', 'training'],
				content: {},
			},
			{
				name: 'skills',
				subMenu: [],
				content: {},
			},
			{
				name: 'achievements',
				subMenu: [],
				content: {},
			},
		],
	},
];

const menuOptions = [
	{
		name: 'about',
		menu: [
			{
				name: 'user details',
				icon: <UserOutlined />,
				subMenu: [],
				displayContent: true,
				content: {
					'user details': [
						{
							label: 'First name',
							header: 'firstname',
							type: 'text',
							rules: [
								{
									required: true,
								},
							],
						},
						{
							label: 'Last name',
							header: 'lastname',
							type: 'text',
							rules: [
								{
									required: true,
								},
							],
						},
						{
							label: 'Email',
							header: 'email',
							type: 'text',
							rules: [
								{
									type: 'email',
								},
							],
						},
						{
							label: 'Age',
							header: 'age',
							type: 'number',
							rules: [
								{
									type: 'number',
									min: 0,
									max: 99,
								},
							],
						},
						{
							label: 'About me',
							header: 'description',
							type: 'paragraph',
						},
					],
					validationMessages: {
						required: '${label} is required!',
						types: {
							email: '${label} is not a valid email!',
							number: '${label} is not a valid number!',
						},
						number: {
							range: '${label} must be between ${min} and ${max}',
						},
					},
				},
				contentType: 'input form',
			},
			{
				name: 'experience',
				icon: <DatabaseOutlined />,
				subMenu: ['professional', 'interships', 'training'],
				content: {},
			},
			{
				name: 'skills',
				icon: (
					<svg
						t='1609409232807'
						class='icon'
						viewBox='0 0 1024 1024'
						version='1.1'
						xmlns='http://www.w3.org/2000/svg'
						p-id='2450'
						style={{
							height: '1.5rem',
							display: 'inline-block',
							position: 'relative',
							right: '0.2rem',
							top: '0.4rem',
						}}
						// className='hover-icon'
						// fill='#a6adb4'
						fill='currentColor'>
						<path
							d='M791.552 570.368L716.8 459.776V450.56c0-135.168-110.592-245.76-245.76-245.76-19.456 0-38.912 2.048-58.368 7.168C304.128 236.544 225.28 336.896 225.28 450.56c0 50.176 12.288 95.232 36.864 130.048 43.008 61.44 71.68 110.592 54.272 177.152-4.096 15.36-1.024 30.72 9.216 43.008 9.216 12.288 22.528 18.432 37.888 18.432h201.728c23.552 0 44.032-16.384 48.128-38.912 1.024-4.096 2.048-8.192 2.048-12.288 2.048-12.288 12.288-20.48 24.576-20.48h14.336c22.528 0 41.984-13.312 48.128-34.816 6.144-23.552 14.336-57.344 15.36-98.304h53.248c9.216 0 18.432-8.192 22.528-16.384 4.096-8.192 3.072-21.504-2.048-27.648zM628.736 430.08c-8.192 13.312-24.576 20.48-48.128 20.48-125.952 0-135.168 92.16-135.168 136.192 0 20.48-16.384 37.888-36.864 37.888h-3.072c-17.408 0-31.744-12.288-35.84-29.696-4.096-18.432-16.384-28.672-28.672-37.888-8.192-6.144-16.384-12.288-20.48-21.504-11.264-23.552-22.528-51.2-22.528-86.016 0-79.872 55.296-149.504 130.048-166.912 14.336-3.072 27.648-5.12 41.984-5.12 69.632 0 132.096 41.984 158.72 105.472 1.024 3.072 12.288 27.648 0 47.104z'
							p-id='2451'
						/>
					</svg>
				),
				subMenu: [],
				content: {},
			},
			{
				name: 'achievements',
				icon: <CrownOutlined />,
				subMenu: [],
				content: {},
			},
		],
	},
];
export { menuOptions, headerList, headerTabException, headerListRight };
