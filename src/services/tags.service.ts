export interface Tag {
	last_activity_rate: number;
	has_synonyms: boolean;
	is_moderator_only: boolean;
	is_required: boolean;
	count: number;
	name: string;
}

class TagsService {
	private url = "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow";

	constructor() {}

	// getAll = async (page?: number) => {
	getAll = async () => {
		try {
			const responseRaw = await fetch(this.url);

			if (!responseRaw.ok) {
				console.error("respone not ok", responseRaw);
				return;
			}

			const response = await responseRaw.json();

			return response;
		} catch (e) {
			console.error("failed to fetch", e);
		}
	};
}

export const tagsService = new TagsService();
