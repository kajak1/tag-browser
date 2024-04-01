import { Container, Flex, Heading, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import "./App.css";
import { TagBrowser, defaultVisibleRows } from "./components/TagBrowser";

function App() {
	const [visibleRows, setVisibleRows] = useState(defaultVisibleRows.toString());

	return (
		<main>
			<Container maxWidth="50rem">
				<Flex justify="between" px="2" py="2">
					<Heading>StackOverflow tags browser</Heading>
					<Flex gap="2">
						<Text as="label" size="2" htmlFor="visible-rows-amount">
							Visible rows:
						</Text>
						<TextField.Root
							id="visible-rows-amount"
							className="visible-rows-amount"
							type="number"
							placeholder={`Default: ${defaultVisibleRows}`}
							min={0}
							value={visibleRows}
							onChange={(e) => setVisibleRows(e.target.value)}
						/>
					</Flex>
				</Flex>
				<TagBrowser
					visibleRows={visibleRows === "" || Number(visibleRows) < 0 ? defaultVisibleRows : Number(visibleRows)}
				/>
				{/* <TagBrowser visibleRows={Number(visibleRows) < 0 ? defaultVisibleRows : Number(visibleRows)} /> */}
			</Container>
		</main>
	);
}

export default App;
