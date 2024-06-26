import "@radix-ui/themes/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

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
			<App />
		</React.StrictMode>
	);
});
