'use strict';

const pIf = (condition, doIf, doElse) => async value => {
	const chooseFn = boolean => boolean === true ? doIf(value) : doElse ? doElse(value) : value;

	if (typeof condition === 'function') {
		const conditionResult = await condition(value);
		return chooseFn(conditionResult);
	}

	return chooseFn(condition);
};

module.exports = pIf;
module.exports.default = pIf;
