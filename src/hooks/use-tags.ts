import { useMemo } from "react";
import { defaultVisibleRows } from "../components/TagBrowser";
import { GetAllOptions, Tag } from "../services/tags.service";
import { SWR_KEYS } from "../swr-keys";
import useSWR from "swr";
import { useTagService } from "../contexts/TagServiceContext";

export function useTags(page?: number, options?: GetAllOptions) {
	const service = useTagService();
		
	const { data, isLoading, isValidating, error, mutate } = useSWR([SWR_KEYS.TAGS, page, options], ([, page, options]) =>
		service.getAll(page, options)
	);

	const paginatedTags = useMemo(() => {
		return data?.map((tag): Tag => {
			const displayedPageNumber = page ?? 1;

			return {
				...tag,
				index: tag.index + (displayedPageNumber - 1) * (options?.pageSize ?? defaultVisibleRows),
			};
		});
	}, [page, data, options?.pageSize]);

	return {
		tags: paginatedTags,
		isLoading,
		isValidating,
		error,
		mutate,
	};
}
