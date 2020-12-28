import * as Data from './data';

const getValidatePathnameParams = (onlyRight = false) => {
    return !!onlyRight
		? [...Data.headerListRight.map((e) => e.name)]
		: [...Data.headerList, ...Data.headerListRight.map((e) => e.name)];
};

export const getValidateQueryParams = (onlyRight = false) => {
	let page = getValidatePathnameParams(onlyRight);
	let { type, option } = Data.headerListRight.reduce(
		(acc1, menu) =>
			menu.subMenu.reduce(
				(acc2, subMenu) =>
					subMenu.type == 'subMenu'
						? {
								type: [...acc2.type, subMenu.name],
								option: [...acc2.option, ...subMenu.subMenu],
						  }
						: acc2,
				acc1,
			),
		{ type: [], option: [] },
	);
	return {
		page,
		type,
		option,
	};
};

export const checkQuery = (query, onlyRight = false) => {
	const allQueryValidation = getValidateQueryParams(onlyRight);
	// console.log(query);
	let params = Object.keys(query).filter((e) => e);
	for (let p in params) {
		if (!allQueryValidation[params[p]].includes(query[params[p]])) {
			return false;
		}
	}
	return true;
};
