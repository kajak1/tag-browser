import { SortingOptions, TagRawFiltered, TagRaw, Tag, StackExchangeWrapperFiltered } from "../shared.types";

export interface GetAllOptions extends SortingOptions {
	pageSize: number;
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

	constructor(
		public readonly url: string,
		private params?: URLSearchParams
	) {
		this.url = url;
		this.params = params ?? new URLSearchParams();
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

		const responseRaw = await fetch(`${this.url}?${this.params}&${urlParams}`);

		if (!responseRaw.ok) {
			const error = new Error("Fetching data failed");
			error.message = await responseRaw.json();
			throw error;
		}

		const response = (await responseRaw.json()) as StackExchangeWrapperFiltered<TagRawFiltered>;
		if ("items" in response) {
			return mapper(response.items);
		}

		return [];
	};
}

export const tagsService = new TagsService(
	"https://api.stackexchange.com/2.3/tags",
	new URLSearchParams({ site: "stackoverflow", filter: "!)RaDD.4RNgOBtXX9fkV41th_" })
);
