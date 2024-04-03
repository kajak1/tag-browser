import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button, DropdownMenu } from "@radix-ui/themes";
import { GetAllOptions } from "../../services/tags.service";
import { SortingOptions } from "../../shared.types";

const { Root, Trigger, Content, Sub, SubContent, SubTrigger, CheckboxItem, TriggerIcon } = DropdownMenu;

interface SortingMenuProps {
	sortingOptions: SortingOptions;
	onChange: (options: SortingOptions) => void;
}

export function SortingMenu({ sortingOptions, onChange }: SortingMenuProps) {
	function isChecked(field: GetAllOptions["field"], order: GetAllOptions["order"]) {
		return sortingOptions.field === field && sortingOptions.order === order;
	}

	return (
		<Root>
			<Trigger>
				<Button variant="soft">
					Sort by
					<TriggerIcon />
				</Button>
			</Trigger>
			<Content>
				<Sub>
					<SubTrigger>Tag name</SubTrigger>
					<SubContent>
						<CheckboxItem
							checked={isChecked("name", "asc")}
							onClick={() =>
								onChange({
									order: "asc",
									field: "name",
								})
							}
						>
							A <ArrowRightIcon /> Z
						</CheckboxItem>
						<CheckboxItem
							checked={isChecked("name", "desc")}
							onClick={() =>
								onChange({
									order: "desc",
									field: "name",
								})
							}
						>
							Z <ArrowRightIcon /> A
						</CheckboxItem>
					</SubContent>
				</Sub>
				<Sub>
					<SubTrigger>Posts count</SubTrigger>
					<SubContent>
						<CheckboxItem
							checked={isChecked("count", "asc")}
							onClick={() =>
								onChange({
									order: "asc",
									field: "count",
								})
							}
						>
							Ascending
						</CheckboxItem>
						<CheckboxItem
							checked={isChecked("count", "desc")}
							onClick={() =>
								onChange({
									order: "desc",
									field: "count",
								})
							}
						>
							Descending
						</CheckboxItem>
					</SubContent>
				</Sub>
			</Content>
		</Root>
	);
}
