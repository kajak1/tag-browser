import { createContext, useContext } from "react";
import { TagsService, tagsService } from "../services/tags.service";

interface TagServiceContext {
	service: TagsService;
}

export const TagServiceContext = createContext<TagsService>(tagsService);

export function useTagService() {
	const service = useContext(TagServiceContext);

	if (!service) {
		throw new Error("Using outside of TagServiceContext!");
	}

	return service;
}
