import { createContext, useContext } from "react";
import { TagsService, tagsService } from "../services/tags.service";
import { tagsServiceMock } from "../services/tags.service.mock";

interface TagServiceContext {
	service: TagsService;
}

export const TagServiceContext = createContext<TagsService>(tagsServiceMock);

export function useTagService() {
	const service = useContext(TagServiceContext);

	if (!service) {
		throw new Error("Using outside of TagServiceContext!");
	}

	return service;
}
