'use strict';

const utils = require('../utils');

module.exports = (start = null, end = null) => ({
	version: 'h004',
	orderDetails: {
		OrderType: 'Z01',
		OrderAttribute: 'DZHNN',
		StandardOrderParams: utils.dateRange(start, end),
	},
	operation: 'download',
});
