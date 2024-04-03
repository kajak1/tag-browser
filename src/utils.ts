export function wait(delay: number) {
	return new Promise((res) => {
		setTimeout(res, delay);
	});
}

export const SWR_KEYS = {
	TAGS: "tags",
} as const;

export const stackExchangeMaxPage_unauthenticated = 25;
