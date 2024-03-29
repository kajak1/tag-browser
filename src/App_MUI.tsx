import { Box, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { TagBrowser } from "./components/TagBrowser";

function App() {
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
							placeholder="Visible rows"
							value={visibleRows}
							onChange={(e) => setVisibleRows(e.target.value)}
						/>
					</Box>
				</Box>
				<TagBrowser visibleRows={Number(visibleRows)} />
			</Container>
		</main>
	);
}

export default App;