import { Tag, StackExchangeWrapper, TagRawFiltered } from "../shared.types";
import { wait } from "../utils";
import { TagsService, GetAllOptions, mapper } from "./tags.service";

class TagsServiceMock extends TagsService {
	constructor(public readonly url: string) {
		super(url);
	}

	override getAll = async (page: number, options?: GetAllOptions): Promise<Tag[]> => {
		if (options?.pageSize === 0) return [];
		await wait(1000);

		const urlParams = this.createSearchParams(page, options);

		const responseRaw = await fetch(`${this.url}?${urlParams}`);

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

export const tagsServiceMock = new TagsServiceMock("/tags");
