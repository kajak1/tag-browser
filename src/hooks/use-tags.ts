import { tagsService } from "../services/tags.service";
import { SWR_KEYS } from "../swr-keys";
import useSWR from "swr";

export function useTags() {
	const { data, isLoading, isValidating, error, mutate } = useSWR(SWR_KEYS.TAGS, tagsService.getAll);

	return {
		tags: data,
		isLoading,
		isValidating,
		error,
		mutate,
	};
}
