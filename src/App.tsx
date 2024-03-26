import "./App.css";
import { useTags } from "./hooks/use-tags";

function App() {
	const { tags, isLoading, isValidating, error, mutate } = useTags();

	return (
		<main>
			<h1>tag browser</h1>
			<button onClick={mutate}>{isLoading || isValidating ? "fetching..." : "fetch tags"}</button>
		</main>
	);
}

export default App;

