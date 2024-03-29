import { Box } from "@radix-ui/themes";
import { useState } from "react";
import { useTags } from "../../hooks/use-tags";
import { Pagination } from "../Pagination";
import { TagTable } from "../TagTable";
import { SortingOptions } from "../../services/tags.service";
import { SortingMenu } from "../SortingMenu";

export const defaultVisibleRows = 30;

interface TagBrowserProps {
	visibleRows: number;
}

export function TagBrowser({ visibleRows }: TagBrowserProps) {
	const [currentPage, setCurrentPage] = useState(1);
	const [sortingOptions, setSortingOptions] = useState<SortingOptions>({
		order: "desc",
		sort: "popular",
		pageSize: visibleRows,
	});
	const { tags, isLoading, isValidating, error, mutate } = useTags(currentPage, sortingOptions);

	function handlePageClick(newPage: number) {
		setCurrentPage(newPage);
	}

	return (
		<Box>
			<SortingMenu
				sortingOptions={sortingOptions}
				onChange={(options) => setSortingOptions({ ...sortingOptions, order: options.order, sort: options.sort })}
			/>
			<TagTable
				loading={isLoading}
				tags={tags ?? []}
				visibleRows={visibleRows === 0 ? defaultVisibleRows : visibleRows}
			/>
			<Box pt="3" pr="3">
				<Pagination size={3} currentPage={currentPage} onPageClick={handlePageClick} />
			</Box>
		</Box>
	);
}
