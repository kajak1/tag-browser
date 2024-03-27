import { useTags } from "./hooks/use-tags";
import { Box, Button, Container, Flex, Grid, Heading, Select, Skeleton, Text, TextField } from "@radix-ui/themes";
import { Table } from "./components/Table";
import { useState } from "react";
import "./App.css";

type Sorting_mode = "popular" | "alphabetically" | "alphabetically_reverse";

const defaultVisibleRows = 30;

function App() {
	const [page, setPage] = useState(1);
	const { tags, isLoading, isValidating, error, mutate } = useTags(page);
	const [visibleRows, setVisibleRows] = useState("");

	// const tags: Tag[] = [];
	// const isLoading = true;
	// const isValidating = false;

	function handlePageClick(page: number) {
		setPage(page);
	}

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

						<Select.Root defaultValue="most_popular">
							<Select.Trigger />
							<Select.Content position="popper">
								<Select.Item value="most_popular">most popular</Select.Item>
								<Select.Item value="alphabetically">{"A -> Z"}</Select.Item>
								<Select.Item value="alphabetically_reverse">{"Z -> A"}</Select.Item>
							</Select.Content>
						</Select.Root>
					</Flex>
				</Flex>

				<Skeleton loading={isLoading} height={"30rem"}>
					<div>
						<Table tags={tags ?? []} max={+visibleRows === 0 ? defaultVisibleRows : +visibleRows} />
					</div>
				</Skeleton>
				<Text as="label">Page</Text>
				<TextField.Root value={page} type="number" onChange={(e) => setPage(+e.target.value)} placeholder="Page" />
				<Flex align="center" gap="3">
					<PageButton page={1} isActive={1 === page} onClick={handlePageClick} />
					<PageButton page={2} isActive={2 === page} onClick={handlePageClick} />
					<PageButton page={3} isActive={3 === page} onClick={handlePageClick} />
				</Flex>
			</Container>
		</main>
	);
}

interface PageButtonProps {
	page: number;
	isActive: boolean;
	onClick: (page: number) => void;
}

function PageButton({ page, isActive, onClick }: PageButtonProps) {
	if (page <= 0) {
		return null;
	}
	return (
		<Button onClick={() => onClick(page)} variant={isActive ? "solid" : "outline"}>
			{page}
		</Button>
	);
}

export default App;

