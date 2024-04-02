import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
import { getFakePage } from "./data/sample-tags";
import { wait } from "./utils";
import { tagsServiceMock } from "./services/tags.service.mock";
import { isOrder, isField, TagRawFiltered, SortingOptions } from "./shared.types";

export const handlers = [
	http.get(`${tagsServiceMock.url}`, async ({ request }) => {
		const url = new URL(request.url);

		await wait(1000);

		const page = url.searchParams.get("page");
		if (Number(page) <= 0) {
			return new Response("invalid page parameter ", {
				status: 400,
			});
		}

		const response = getFakePage(page === null ? 1 : Number(page));
		if (!response) {
			return new Response("invalid page parameter", {
				status: 400,
			});
		}

		const order = url.searchParams.get("order");
		const field = url.searchParams.get("sort");

		if (order && field && isOrder(order) && isField(field)) {
			sortTags(response.items, field, order);
		}

		const pageSize = url.searchParams.get("pagesize");
		if (pageSize) {
			response.items = response.items.filter((tag, index) => index < Number(pageSize));
		}

		return HttpResponse.json(response);
	}),
];

export const worker = setupWorker(...handlers);

function sortTags(array: TagRawFiltered[], field: SortingOptions["field"], order: SortingOptions["order"]) {
	if (field === "name") {
		if (order === "asc") {
			array.sort((a, b) => {
				if (a.name < b.name) return -1;
				if (a.name > b.name) return 1;
				return 0;
			});
		}

		if (order === "desc") {
			array.sort((a, b) => {
				if (a.name > b.name) return -1;
				if (a.name < b.name) return 1;
				return 0;
			});
		}
	}

	if (field === "count") {
		if (order === "asc") {
			array.sort((a, b) => {
				if (a.count < b.count) return -1;
				if (a.count > b.count) return 1;
				return 0;
			});
		}

		if (order === "desc") {
			array.sort((a, b) => {
				if (a.count > b.count) return -1;
				if (a.count < b.count) return 1;
				return 0;
			});
		}
	}
}
