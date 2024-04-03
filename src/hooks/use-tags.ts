import { useMemo } from "react";
import useSWR from "swr";
import { useTagService } from "../contexts/TagServiceContext";
import { GetAllOptions } from "../services/tags.service";
import { Tag } from "../shared.types";
import { defaultVisibleRows } from "../store";
import { SWR_KEYS } from "../utils";

export function useTags(page: number, options: GetAllOptions) {
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
		isValidating: isValidating,
		error: error,
		mutate: mutate,
	};
}
