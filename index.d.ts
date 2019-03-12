/**
 * Conditional promise chains. It's just a passthrough if `condition` is `false` and `doElse` is not provided.
 *
 * @param condition - Decides whether `doIf` or `doElse` is executed.
 * @param doIf - Executed if `condition` is `true`. Expected to return a `Promise` or value.
 * @param doElse - Executed if `condition` is `false`. Expected to return a `Promise` or value.
 * @returns A [thunk](https://en.m.wikipedia.org/wiki/Thunk) that returns a `Promise`.
 */
export default function pIf<
	ValueType,
	DoIfReturnType,
	DoElseReturnType = ValueType
>(
	condition: boolean | ((value: ValueType) => boolean | PromiseLike<boolean>),
	doIf: (value: ValueType) => DoIfReturnType | PromiseLike<DoIfReturnType>,
	doElse?: (value: ValueType) => DoElseReturnType | PromiseLike<DoElseReturnType>
): (value: ValueType) => Promise<DoIfReturnType | DoElseReturnType>;
