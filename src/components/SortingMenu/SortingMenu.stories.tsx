import { Theme } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";
import { SortingMenu } from ".";
import { GetAllOptions } from "../../services/tags.service";
import { useArgs } from "@storybook/preview-api";

const meta: Meta<typeof SortingMenu> = {
	component: SortingMenu,
	tags: ["autodocs"],
	argTypes: {
		["sortingOptions.order"]: {
			options: ["asc", "desc"],
			control: { type: "select" },
		},
		["sortingOptions.sort"]: {
			options: ["popular", "name"],
			control: { type: "select" },
		},
	},
	parameters: {
		controls: { exclude: ["onChange"] },
		layout: "centered",
	},
	decorators: [
		(Story) => (
			<Theme style={{ minHeight: "auto" }}>
				<Story />
			</Theme>
		),
	],
};

export default meta;

type Story = StoryObj<typeof SortingMenu>;

export const Default: Story = {
	render: () => {
		const [args, setArgs] = useArgs();

		function handleChange(options: Pick<GetAllOptions, "order" | "sort">) {
			setArgs({
				["sortingOptions.order"]: options.order,
				["sortingOptions.sort"]: options.sort,
			});
		}

		return (
			<SortingMenu
				sortingOptions={{ order: args["sortingOptions.order"], sort: args["sortingOptions.sort"] }}
				onChange={handleChange}
			/>
		);
	},
	args: {
		["sortingOptions.order"]: "desc",
		["sortingOptions.sort"]: "popular",
	},
};
