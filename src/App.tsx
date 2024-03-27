import { useTags } from "./hooks/use-tags";
import { Table } from "./components/Table";
import { useState } from "react";
import { Box, Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const defaultVisibleRows = 30;

function App() {
	const [page, setPage] = useState(1);
	const { tags, isLoading, isValidating, error, mutate } = useTags(page);
	const [visibleRows, setVisibleRows] = useState("");

	return (
		<main>
			<Container maxWidth="md">
				<Box sx={{ justifyContent: "space-between", padding: 2 }}>
					<Typography>StackOverflow tags browser</Typography>
					<Box sx={{ gap: 2 }}>
						<TextField
							label="Visible rows"
							id="visible-rows-amount"
							className="visible-rows-amount"
							type="number"
							placeholder="Visible rows"
							value={visibleRows}
							onChange={(e) => setVisibleRows(e.target.value)}
						/>
						<FormControl>
							<InputLabel id="sorting_mode-label">Age</InputLabel>
							<Select
								labelId="sorting_mode-label"
								id="sorting_mode"
								label="Sort by"
							>
								<MenuItem value="most_popular">most popular</MenuItem>
								<MenuItem value="alphabetically">{"A -> Z"}</MenuItem>
								<MenuItem value="alphabetically_reverse">{"Z -> A"}</MenuItem>
							</Select>
						</FormControl>
					</Box>
				</Box>

				<Table tags={tags ?? []} max={+visibleRows === 0 ? defaultVisibleRows : +visibleRows} />
				<TextField label="Page" value={page} onChange={(e) => setPage(+e.target.value)} placeholder="Page"/>
			</Container>
		</main>
	);
}

export default App;
