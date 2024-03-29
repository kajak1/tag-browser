import { setupWorker } from "msw/browser";
import { handlers } from "./services/tags.service.mock";

export const worker = setupWorker(...handlers);
