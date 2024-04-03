import { ReloadIcon } from "@radix-ui/react-icons";
import { Box, Flex, IconButton } from "@radix-ui/themes";
import useDebounce from "../../hooks/use-debounce";
import { useTags } from "../../hooks/use-tags";
import { defaultVisibleRows, useTableBrowserStore } from "../../store";
import { stackExchangeMaxPage_unauthenticated } from "../../utils";
import { Pagination } from "../Pagination";
import { TableError } from "../TableError";
import { TagBrowserFilters } from "../TagBrowserFilters";
import { TagTable } from "../TagTable";
import "./TagBrowser.css";

export function TagBrowser() {
	const currentPage = useTableBrowserStore((state) => state.currentPage);
	const changeCurrentPage = useTableBrowserStore((state) => state.changeCurrentPage);
	const sortingOptions = useTableBrowserStore((state) => state.sortingOptions);
	const visibleRows = useTableBrowserStore((state) => state.visibleRows);

	const debouncedVisibleRows = useDebounce(visibleRows, 900);

	const { tags, isLoading, error, mutate, isValidating } = useTags(currentPage, {
		...sortingOptions,
		pageSize: debouncedVisibleRows ?? defaultVisibleRows,
	});

	const tableCallout = (
		<TableError text="Error occured while fetching tags">
			<IconButton loading={isValidating} variant="soft" size="1" onClick={() => mutate()}>
				<ReloadIcon />
			</IconButton>
		</TableError>
	);

	return (
		<Box>
			<TagBrowserFilters />
			<TagTable
				loading={isLoading}
				tags={tags ?? []}
				visibleRows={visibleRows ?? defaultVisibleRows}
				callout={error ? tableCallout : null}
			/>
			<Flex mt="3" justify={{ initial: "center", xs: "end" }}>
				<Pagination
					displayedButtons={3}
					currentPage={currentPage}
					onPageClick={changeCurrentPage}
					total={stackExchangeMaxPage_unauthenticated}
				/>
			</Flex>
		</Box>
	);
}
