import { useSWRConfig } from "swr";
import { GetAllOptions } from "../services/tags.service";
import { SWR_KEYS } from "../swr-keys";

interface ParsedCacheKey {
	name: string;
	page: number;
	pageSize: number;
	order: string;
	field: string;
}

function parseCacheKey(key: string): ParsedCacheKey {
	const parsed: ParsedCacheKey = {
		field: "",
		name: "",
		order: "",
		page: -1,
		pageSize: -1,
	};

	const [cachedKey, cachedPageNumber, cachedPageSize, cachedOrder, cachedField] = key.split(",");

	parsed.pageSize = Number(cachedPageSize.split(":")[1]);
	parsed.name = cachedKey;
	parsed.page = Number(cachedPageNumber);
	parsed.order = cachedOrder.split(":")[1];
	parsed.field = cachedField.split(":")[1];

	return parsed;
}

export function useTagsInCache(page: number, options: GetAllOptions): string | undefined {
	const { cache } = useSWRConfig();

	for (const key of cache.keys()) {
		const parsedKey = parseCacheKey(key);
		if (
			parsedKey.name === `@"${SWR_KEYS.TAGS}"` &&
			parsedKey.page === page &&
			parsedKey.pageSize >= (options.pageSize ?? -1) &&
			parsedKey.order === `"${options.order}"` &&
			parsedKey.field === `"${options.field}"`
		) {
			return key;
		}
		// if (
		// 	cachedKey === `@"${SWR_KEYS.TAGS}"` &&
		// 	Number(cachedPageNumberKey) === page &&
		// 	(options.pageSize ?? -1) <= Number(cachedPageSize) &&
		// 	cachedOrder.split(":")[1] === `"${options.order}"` &&
		// 	cachedField.split(":")[1] === `"${options.field}"`
		// ) {
		// 	console.log("found key!!");
		// 	return key;
		// }
	}

	return undefined;
}
