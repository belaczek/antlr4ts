/*!
 * Copyright 2016 Terence Parr, Sam Harwell, and Burt Harris
 * All rights reserved.
 * Licensed under the BSD-3-clause license. See LICENSE file in the project root for license information.
 */

// ConvertTo-TS run at 2016-10-04T11:26:27.4734328-07:00

export const enum ATNStateType {
	INVALID_TYPE = 0,
	BASIC = 1,
	RULE_START = 2,
	BLOCK_START = 3,
	PLUS_BLOCK_START = 4,
	STAR_BLOCK_START = 5,
	TOKEN_START = 6,
	RULE_STOP = 7,
	BLOCK_END = 8,
	STAR_LOOP_BACK = 9,
	STAR_LOOP_ENTRY = 10,
	PLUS_LOOP_BACK = 11,
	LOOP_END = 12,
}
