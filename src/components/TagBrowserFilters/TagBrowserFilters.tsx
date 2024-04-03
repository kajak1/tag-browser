import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { Flex, Text, TextField, Tooltip } from "@radix-ui/themes";
import { useId } from "react";
import { defaultVisibleRows, useTableBrowserStore } from "../../store";
import { SortingMenu } from "../SortingMenu";
import "./TagBrowserFilters.css";

export function TagBrowserFilters() {
	const sortingOptions = useTableBrowserStore((state) => state.sortingOptions);
	const changeSortingOptions = useTableBrowserStore((state) => state.changeSortingOptions);

	const visibleRows = useTableBrowserStore((state) => state.visibleRows);
	const changeVisibleRows = useTableBrowserStore((state) => state.changeVisibleRows);
	const visibleRowsInputId = useId();

	return (
		<Flex justify="between" align="center" gap="2" mb="3">
			<Flex gap="2" align="center">
				<Text as="label" size="2" htmlFor={visibleRowsInputId}>
					Visible rows:
				</Text>
				<TextField.Root
					id={visibleRowsInputId}
					className="visible-rows-input"
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
	);
}
