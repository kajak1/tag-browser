import { QuestionMarkCircledIcon, ReloadIcon } from "@radix-ui/react-icons";
import { Box, Flex, IconButton, Text, TextField, Tooltip } from "@radix-ui/themes";
import useDebounce from "../../hooks/use-debounce";
import { useTags } from "../../hooks/use-tags";
import { defaultVisibleRows, useTableBrowserStore } from "../../store";
import { stackExchangeMaxPage_unauthenticated } from "../../utils";
import { Pagination } from "../Pagination";
import { SortingMenu } from "../SortingMenu";
import { TableError } from "../TableError";
import { TagTable } from "../TagTable";
import "./TagBrowser.css";

export function TagBrowser() {
	const visibleRows = useTableBrowserStore((state) => state.visibleRows);
	const changeVisibleRows = useTableBrowserStore((state) => state.changeVisibleRows);

	const currentPage = useTableBrowserStore((state) => state.currentPage);
	const changeCurrentPage = useTableBrowserStore((state) => state.changeCurrentPage);

	const sortingOptions = useTableBrowserStore((state) => state.sortingOptions);
	const changeSortingOptions = useTableBrowserStore((state) => state.changeSortingOptions);

	const debouncedVisibleRows = useDebounce(visibleRows, 1000);

	const { tags, isLoading, error, mutate, isValidating } = useTags(currentPage, {
		...sortingOptions,
		pageSize: debouncedVisibleRows ?? defaultVisibleRows,
	});

	const tableCallout = (
		<TableError
			button={
				<IconButton loading={isValidating} variant="soft" size="1" onClick={() => mutate()}>
					<ReloadIcon />
				</IconButton>
			}
		/>
	);

	return (
		<Box>
			<Flex justify="between" align="center" gap="2" mb="3">
				<Flex gap="2" align="center">
					<Text as="label" size="2" htmlFor="visible-rows-amount">
						Visible rows:
					</Text>
					<TextField.Root
						id="visible-rows-amount"
						className="visible-rows-amount"
						type="number"
						placeholder={`Default: ${defaultVisibleRows}`}
						min={0}
						value={visibleRows ?? ""}
						onChange={(e) => changeVisibleRows(e.target.value)}
					>
						<TextField.Slot side="right">
							<Tooltip content="Please enter a number">
								<QuestionMarkCircledIcon />
							</Tooltip>
						</TextField.Slot>
					</TextField.Root>
				</Flex>
				<SortingMenu sortingOptions={sortingOptions} onChange={changeSortingOptions} />
			</Flex>
			<TagTable
				loading={isLoading}
				tags={tags ?? []}
				visibleRows={visibleRows ?? defaultVisibleRows}
				callout={error ? tableCallout : null}
			/>
			<Flex mt="3" justify={{ initial: "center", xs: "end" }}>
				<Pagination
					size={3}
					currentPage={currentPage}
					onPageClick={changeCurrentPage}
					max={stackExchangeMaxPage_unauthenticated}
				/>
			</Flex>
		</Box>
	);
}
