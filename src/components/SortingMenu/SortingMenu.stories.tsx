import { Theme } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";
import { SortingMenu } from ".";
import { useArgs } from "@storybook/preview-api";
import { SortingOptions } from "../../shared.types";
import { GetAllOptions } from "../../services/tags.service";

type Args = React.ComponentProps<typeof SortingMenu> & {
	["sortingOptions.order"]: SortingOptions["order"];
	["sortingOptions.field"]: SortingOptions["field"];
};

const meta: Meta<Args> = {
	component: SortingMenu,
	tags: ["autodocs"],
	argTypes: {
		"sortingOptions.order": {
			options: ["asc", "desc"],
			control: { type: "select" },
		},
		"sortingOptions.field": {
			options: ["count", "name"],
			control: { type: "select" },
		},
		onChange: {
			description: "Callback to run on change event",
			control: false,
		},
		sortingOptions: {
			control: false,
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

type Story = StoryObj<Args>;

export const Default: Story = {
	render: () => {
		const [args, setArgs] = useArgs();

		function handleChange(options: Pick<GetAllOptions, "order" | "field">) {
			setArgs({
				"sortingOptions.order": options.order,
				"sortingOptions.field": options.field,
			});
		}

		return (
			<SortingMenu
				sortingOptions={{ order: args["sortingOptions.order"], field: args["sortingOptions.field"] }}
				onChange={handleChange}
			/>
		);
	},
	args: {
		"sortingOptions.order": "desc",
		"sortingOptions.field": "count",
	},
};
