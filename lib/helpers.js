var _ = require('underscore');
var format = require('hot-cocoa').format;

module.exports = {
	joiner: function(delimeter) {
		return function(args) {
			return args.join(delimeter);
		};
	},
	and_chainer: function(delimeter) {
		return function(args) {
			
			return _.map(
				_.zip(args.slice(0, -1), args.slice(1)),
				function(pair) {
					return format('(~~ ~~ ~~)', [pair[0], delimeter, pair[1]]);
				}
			).join(' && ');
		}
	},
	brackets: function(open, close) {
		return function(string) {
			return format('~~~~~~', [open, string, close]);
		};
	},
	parens: function(string) {
		return format('(~~)', [string]);
	}
};