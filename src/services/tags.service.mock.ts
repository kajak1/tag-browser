import { http, HttpResponse } from "msw";
import { wait } from "../utils";
import { mapper, GetAllOptions, StackExchangeWrapper, Tag, TagRawFiltered, TagsService } from "./tags.service";
import { pages } from "../data/sample-tags";

export const handlers = [
	http.get("/tags", async ({ request }) => {
		const url = new URL(request.url);

		const page = url.searchParams.get("page");
		// const order = url.searchParams.get("order");
		// const sort = url.searchParams.get("sort");
		// const pageSize = url.searchParams.get("pageSize");

		await wait(500);

		if (page === null) {
			return new Response(undefined, {
				status: 404,
			});
		}

		const response = pages[Number(page) - 1];

		return HttpResponse.json(response);
	}),
];

class TagsServiceMock implements TagsService {
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

			const responseRaw = await fetch(`${this.url}?${urlParams}`);

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

export const tagsServiceMock = new TagsServiceMock("/tags");
