export interface TagRaw {
	last_activity_date?: number;
	collectives?: object[];
	has_synonyms: boolean;
	is_moderator_only: boolean;
	is_required: boolean;
	count: number;
	name: string;
}

export interface StackExchangeWrapper<T> {
	backoff?: number;
	error_id?: number;
	error_message?: string;
	error_name?: string;
	has_more: boolean;
	items: T[];
	quota_max: number;
	quota_remaining: number;
}

export interface Tag {
	index: number;
	name: string;
	count: number;
}

export interface SortingOptions {
	pageSize?: number;
	order?: "desc" | "asc";
	sort?: "popular" | "name";
}

export function mapper(data: TagRaw[]): Tag[] {
	return data.map(({ count, name }, index) => {
		return { index: index + 1, name: name, count: count };
	});
}

export class TagsService {
	constructor(private url: string) {
		this.url = url;
	}

	getAll = async (page?: number, sortingOptions?: SortingOptions) => {
		try {
			const urlParams = new URLSearchParams("");
			urlParams.append("page", `${page}`);

			if (sortingOptions?.order) {
				urlParams.append("order", sortingOptions.order);
			}

			if (sortingOptions?.sort) {
				urlParams.append("sort", sortingOptions.sort);
			} else {
				urlParams.append("sort", "popular");
			}

			if (sortingOptions?.pageSize) {
				urlParams.append("pagesize", `${sortingOptions.pageSize}`);
			}

			const responseRaw = await fetch(`${this.url}&${urlParams}`);

			if (!responseRaw.ok) {
				console.error("respone not ok", responseRaw);
				return;
			}

			const response = (await responseRaw.json()) as StackExchangeWrapper<TagRaw>;
			if ("items" in response) {
				return mapper(response.items);
			}
		} catch (e) {
			console.error("failed to fetch", e);
		}
	};
}

export const tagsService = new TagsService("https://api.stackexchange.com/2.3/tags?site=stackoverflow&filter=!bMsg5CXICdlFSp");
