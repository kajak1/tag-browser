export interface TagRaw {
	last_activity_date?: number;
	collectives?: object[];
	has_synonyms: boolean;
	is_moderator_only: boolean;
	is_required: boolean;
	count: number;
	name: string;
}

export type TagRawFiltered = Pick<TagRaw, "name" | "count">;

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
	order?: "desc" | "asc";
	sort?: "popular" | "name";
}

export interface GetAllOptions extends SortingOptions {
	pageSize?: number;
}

export function mapper(data: TagRawFiltered[] | TagRaw[]): Tag[] {
	return data.map(({ count, name }, index) => {
		return { index: index + 1, name: name, count: count };
	});
}

export class TagsService {
	constructor(public readonly url: string) {
		this.url = url;
	}

	getAll = async (page?: number, options?: GetAllOptions): Promise<Tag[]> => {
		try {
			const urlParams = new URLSearchParams("");
			urlParams.append("page", `${page}`);

			if (options?.order) {
				urlParams.append("order", options.order);
			}

			if (options?.sort) {
				urlParams.append("sort", options.sort);
			} else {
				urlParams.append("sort", "popular");
			}

			if (options?.pageSize) {
				if (options.pageSize === 0) return [];
				urlParams.append("pagesize", `${options.pageSize}`);
			}

			const responseRaw = await fetch(`${this.url}&${urlParams}`);

			if (!responseRaw.ok) {
				console.error("respone not ok", responseRaw);
				return [];
			}

			const response = (await responseRaw.json()) as StackExchangeWrapper<TagRawFiltered>;
			if ("items" in response) {
				return mapper(response.items);
			}

			return [];
		} catch (e) {
			console.error("failed to fetch", e);
			return [];
		}
	};
}

export const tagsService = new TagsService(
	"https://api.stackexchange.com/2.3/tags?site=stackoverflow&filter=!bMsg5CXICdlFSp"
);
