import React from "react";
import ReactDOM from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import App from "./App.tsx";
import { TagServiceContext } from "./contexts/TagServiceContext.tsx";
import { tagsService } from "./services/tags.service.ts";

async function enableMocking() {
	if (process.env.NODE_ENV !== "development") {
		return;
	}

	const { worker } = await import("./mock-worker.ts");

	return worker.start();
}

enableMocking().then(() => {
	ReactDOM.createRoot(document.getElementById("root")!).render(
		<React.StrictMode>
			<Theme>
				<TagServiceContext.Provider value={tagsService}>
					<App />
				</TagServiceContext.Provider>
			</Theme>
		</React.StrictMode>
	);
});
