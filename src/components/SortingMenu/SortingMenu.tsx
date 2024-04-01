import { Button, DropdownMenu } from "@radix-ui/themes";
import { GetAllOptions } from "../../services/tags.service";

const { Root, Trigger, Content, Sub, SubContent, SubTrigger, CheckboxItem, TriggerIcon } = DropdownMenu;

interface SortingMenuProps {
	sortingOptions: Pick<GetAllOptions, "order" | "sort">;
	onChange: (options: Pick<GetAllOptions, "order" | "sort">) => void;
}

export function SortingMenu({ sortingOptions, onChange }: SortingMenuProps) {
	function isChecked(field: GetAllOptions["sort"], order: GetAllOptions["order"]) {
		return sortingOptions.sort === field && sortingOptions.order === order;
	}

	return (
		<Root>
			<Trigger>
				<Button variant="outline">
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
									sort: "name",
								})
							}
						>
							{"A -> Z"}
						</CheckboxItem>
						<CheckboxItem
							checked={isChecked("name", "desc")}
							onClick={() =>
								onChange({
									order: "desc",
									sort: "name",
								})
							}
						>
							{"Z -> A"}
						</CheckboxItem>
					</SubContent>
				</Sub>
				<Sub>
					<SubTrigger>Posts count</SubTrigger>
					<SubContent>
						<CheckboxItem
							checked={isChecked("popular", "asc")}
							onClick={() =>
								onChange({
									order: "asc",
									sort: "popular",
								})
							}
						>
							Ascending
						</CheckboxItem>
						<CheckboxItem
							checked={isChecked("popular", "desc")}
							onClick={() =>
								onChange({
									order: "desc",
									sort: "popular",
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
