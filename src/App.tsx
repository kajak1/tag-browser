import { Box, Container, Heading, Theme } from "@radix-ui/themes";
import "./App.css";
import { TagBrowser } from "./components/TagBrowser";
import { TagServiceContext } from "./contexts/TagServiceContext";
import { tagsService } from "./services/tags.service";

function App() {
	return (
		<Theme>
			<TagServiceContext.Provider value={tagsService}>
				<main>
					<Container maxWidth="50rem" px="3">
						<Box mb="3">
							<Heading>StackOverflow tags browser</Heading>
						</Box>
						<TagBrowser />
					</Container>
				</main>
			</TagServiceContext.Provider>
		</Theme>
	);
}

export default App;
