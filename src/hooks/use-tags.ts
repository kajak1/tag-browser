import { tagsService } from "../services/tags.service";
import { SWR_KEYS } from "../swr-keys";
import useSWR from "swr";

export function useTags(page?: number) {
	const { data, isLoading, isValidating, error, mutate } = useSWR(
		[SWR_KEYS.TAGS, page],
		([, page]) => tagsService.getAll(page),
		{ revalidateIfStale: false, revalidateOnFocus: false, revalidateOnMount: false }
	);

	return {
		tags: data,
		isLoading,
		isValidating,
		error,
		mutate,
	};
}
