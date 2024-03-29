import { Container, Flex, Heading, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import "./App.css";
import { TagBrowser } from "./components/TagBrowser";

type Sorting_mode = "popular" | "alphabetically" | "alphabetically_reverse";

const defaultVisibleRows = 30;

function App() {
	const [visibleRows, setVisibleRows] = useState("");

	return (
		<main>
			<Container maxWidth={"50rem"}>
				<Flex justify="between" px={"2"} py={"2"}>
					<Heading>StackOverflow tags browser</Heading>
					<Flex gap={"2"}>
						<Text as="label" size={"2"} htmlFor="visible-rows-amount">
							Visible rows:
						</Text>
						<TextField.Root
							id="visible-rows-amount"
							className="visible-rows-amount"
							type="number"
							placeholder="Visible rows"
							min={0}
							value={visibleRows}
							onChange={(e) => setVisibleRows(e.target.value)}
						/>
					</Flex>
				</Flex>
				<TagBrowser visibleRows={Number(visibleRows)} />
			</Container>
		</main>
	);
}

export default App;
