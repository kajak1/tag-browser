import { Box, Container, Heading } from "@radix-ui/themes";
import "./App.css";
import { TagBrowser } from "./components/TagBrowser";

function App() {
	return (
		<main>
			<Container maxWidth="50rem" px="3">
				<Box mb="3">
					<Heading>StackOverflow tags browser</Heading>
				</Box>
				<TagBrowser />
			</Container>
		</main>
	);
}

export default App;
