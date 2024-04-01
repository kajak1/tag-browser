import { Box, FormControl, InputLabel, MenuItem, Pagination, PaginationItem, Select } from "@mui/material";
import { useState } from "react";
import { useTags } from "../../hooks/use-tags";
import { GetAllOptions } from "../../services/tags.service";
import { TagTable } from "../TagTable";

import { Pagination as OwnPagination, Pagination } from "../Pagination";

export const defaultVisibleRows = 30;

interface TagBrowserProps {
	visibleRows: number;
}

export function TagBrowser({ visibleRows }: TagBrowserProps) {
	const [selectedPage, setSelectedPage] = useState(1);
	const [sortingOptions, setSortingOptions] = useState<GetAllOptions>({
		order: "desc",
		sort: "popular",
		pageSize: visibleRows,
	});
	// const { tags, isLoading, isValidating, error, mutate } = useTags(selectedPage, sortingOptions);

	function handlePageClick(newPage: number) {
		setSelectedPage(newPage);
	}

	const paginationSiblings = 3;

	const [tmpPage, setTmpPage] = useState(1);

	return (
		<Box>
			<Pagination
				currentPage={tmpPage}
				onPageClick={(newPage) => {
					if (newPage >= 1) {
						setTmpPage(newPage);
					}
				}}
				size={3}
			/>
			{/* <OwnPagination currentPage={tmpPage} onPageClick={(newPage) => setTmpPage(newPage)} size={3} /> */}
			<Box sx={{ width: "10rem" }}>
				<FormControl fullWidth>
					<InputLabel id="sorting_mode-label">Sort by</InputLabel>
					<Select labelId="sorting_mode-label" id="sorting_mode" label="Sort by">
						<MenuItem value="most_popular">most popular</MenuItem>
						<MenuItem value="alphabetically">{"A -> Z"}</MenuItem>
						<MenuItem value="alphabetically_reverse">{"Z -> A"}</MenuItem>
					</Select>
				</FormControl>
			</Box>

			{/* <TagTable
				loading={isLoading}
				tags={tags ?? []}
				visibleRows={visibleRows === 0 ? defaultVisibleRows : visibleRows}
			/> */}

			{/* <Box pt={2} pr={2} display="flex" justifyContent="flex-end">
				<Pagination
					shape="rounded"
					variant="outlined"
					renderItem={(params) => {
						if (selectedPage === paginationSiblings + 1 && params.page > selectedPage + paginationSiblings) return null;
						if (selectedPage < paginationSiblings + 1 && params.page > paginationSiblings * 2 + 1) return null;

						if (selectedPage - 1 - paginationSiblings - 1 === 0 && params.page === 1) return null;

						if (params.type === "start-ellipsis") return null;
						if (params.type === "end-ellipsis") return null;
						return <PaginationItem {...params} />;
					}}
					boundaryCount={0}
					siblingCount={paginationSiblings}
					count={1000}
					page={selectedPage}
					onChange={(e, newPage) => handlePageClick(newPage)}
				/>
			</Box> */}
		</Box>
	);
}
