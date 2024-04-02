import { useMemo } from "react";
import useSWR from "swr";
import { useTagService } from "../contexts/TagServiceContext";
import { GetAllOptions } from "../services/tags.service";
import { defaultVisibleRows } from "../store";
import { useTagsInCache } from "./use-tags-in-cache";
import { SWR_KEYS } from "../utils";
import { Tag } from "../shared.types";

export function useTags(page: number, options: GetAllOptions) {
	const service = useTagService();
	// const cacheKey = useTagsInCache(page, options);

	const { data, isLoading, isValidating, error, mutate } = useSWR([SWR_KEYS.TAGS, page, options], ([, page, options]) =>
		service.getAll(page, options)
	);
	// const { data, isLoading, isValidating, error, mutate } = useSWR(
	// 	cacheKey ? null : [SWR_KEYS.TAGS, page, options],
	// 	([, page, options]) => service.getAll(page, options)
	// );

	// console.log("error", error);
	// console.log("cacheKey", cacheKey);

	// const cachedData = useSWR(cacheKey ?? null);

	const paginatedTags = useMemo(() => {
		return data?.map((tag): Tag => {
			const displayedPageNumber = page ?? 1;

			return {
				...tag,
				index: tag.index + (displayedPageNumber - 1) * (options?.pageSize ?? defaultVisibleRows),
			};
		});
	}, [page, data, options?.pageSize]);

	// return {
	// 	response: data,
	// 	isLoading,
	// 	isValidating: isValidating,
	// 	error: error,
	// 	mutate: mutate,
	// };

	return {
		tags: paginatedTags,
		isLoading,
		isValidating: isValidating,
		error: error,
		mutate: mutate,
	};

	// return {
	// 	tags: paginatedTags ?? cachedData.data,
	// 	isLoading,
	// 	isValidating: isValidating ?? cachedData.isValidating,
	// 	error: error ?? cachedData.error,
	// 	mutate: mutate ?? cachedData.mutate,
	// };
}
