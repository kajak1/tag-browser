import { useMemo } from "react";
import { defaultVisibleRows } from "../components/TagBrowser";
import { SortingOptions as Options, Tag, tagsService } from "../services/tags.service";
import { SWR_KEYS } from "../swr-keys";
import useSWR from "swr";
import { useTagService } from "../contexts/TagServiceContext";

export function useTags(page?: number, options?: Options) {
	const tagsService = useTagService();

	const { data, isLoading, isValidating, error, mutate } = useSWR(
		[SWR_KEYS.TAGS, page, options],
		([, page]) => tagsService.getAll(page, options),
		{
			revalidateIfStale: false,
			revalidateOnFocus: false,
			revalidateOnReconnect: false,
		}
	);

	const pageinatedTags = useMemo(() => {
		return data?.map((tag): Tag => {
			const displayedPageNumber = page ?? 1;

			return {
				...tag,
				index: tag.index + (displayedPageNumber - 1) * (options?.pageSize ?? defaultVisibleRows),
			};
		});
	}, [page, data, options?.pageSize]);

	return {
		tags: pageinatedTags,
		isLoading,
		isValidating,
		error,
		mutate,
	};
}
