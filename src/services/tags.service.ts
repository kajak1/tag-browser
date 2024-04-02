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
	order: "desc" | "asc";
	field: "count" | "name";
}

export function isOrder(order: string): order is SortingOptions["order"] {
	if (order === "desc" || order === "asc") return true;

	return false;
}

export function isField(field: string): field is SortingOptions["field"] {
	if (field === "count" || field === "name") return true;

	return false;
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
	readonly urlParamsMap: Record<SortingOptions["field"], string> = {
		count: "popular",
		name: "name",
	};

	constructor(public readonly url: string) {
		this.url = url;
	}

	protected createSearchParams = (page: number, options?: GetAllOptions): URLSearchParams => {
		const urlParams = new URLSearchParams("");
		urlParams.append("page", `${page}`);

		if (options?.order) {
			urlParams.append("order", options.order);
		}

		if (options?.field) {
			urlParams.append("sort", this.urlParamsMap[options.field]);
		} else {
			urlParams.append("sort", "popular");
		}

		if (options?.pageSize) {
			urlParams.append("pagesize", `${options.pageSize}`);
		}

		return urlParams;
	};

	getAll = async (page: number, options?: GetAllOptions): Promise<Tag[]> => {
		if (options?.pageSize === 0) return [];

		const urlParams = this.createSearchParams(page, options);

		const responseRaw = await fetch(`${this.url}&${urlParams}`);

		if (!responseRaw.ok) {
			const error = new Error("Fetching data failed");
			error.message = await responseRaw.json();
			throw error;
		}

		const response = (await responseRaw.json()) as StackExchangeWrapper<TagRawFiltered>;
		if ("items" in response) {
			return mapper(response.items);
		}

		return [];
	};
}

export const tagsService = new TagsService(
	"https://api.stackexchange.com/2.3/tags?site=stackoverflow&filter=!bMsg5CXICdlFSp"
);
