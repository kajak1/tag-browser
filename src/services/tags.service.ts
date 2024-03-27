interface TagRaw {
	last_activity_rate: number;
	has_synonyms: boolean;
	is_moderator_only: boolean;
	is_required: boolean;
	count: number;
	name: string;
}

interface StackExchangeWrapper<T> {
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
	name: string;
	count: number;
}

function mapper(data: TagRaw[]): Tag[] {
	return data.map(({ count, name }) => {
		return { name: name, count: count };
	});
}

class TagsService {
	private url = "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow";

	constructor() {}

	getAll = async (page?: number) => {
		try {
			const responseRaw = await fetch(`${this.url}&page=${encodeURIComponent(`${page}`)}`);

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

export const tagsService = new TagsService();
