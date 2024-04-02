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

export type StackExchangeWrapperFiltered<T> = Pick<
	StackExchangeWrapper<T>,
	"error_id" | "error_message" | "error_name" | "items"
>;

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
