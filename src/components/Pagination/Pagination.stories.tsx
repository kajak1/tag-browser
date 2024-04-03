import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import { Pagination } from ".";
import { Theme } from "@radix-ui/themes";

const meta: Meta<typeof Pagination> = {
	component: Pagination,
	tags: ["autodocs"],
	argTypes: {
		currentPage: {
			defaultValue: 1,
			description: "Currently selected page",
			control: {
				type: "number",
				min: 1,
			},
			table: {
				type: { summary: "number" },
				defaultValue: { summary: 1 },
			},
		},
		displayedButtons: {
			description: "Amount of pages displayed",
			defaultValue: 3,
			control: {
				type: "number",
				min: 0,
			},
			table: {
				type: { summary: "number" },
				defaultValue: { summary: 3 },
			},
		},
		total: {
			description: "Total amount of pages",
			defaultValue: 90,
			control: {
				type: "number",
			},
		},
	},
	parameters: {
		controls: { exclude: "onPageClick" },
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

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
	render: ({ currentPage, displayedButtons, total }) => {
		const [, setArgs] = useArgs();

		function handleClick(newPage: number) {
			setArgs({ currentPage: newPage });
		}

		return (
			<Pagination
				currentPage={currentPage}
				onPageClick={handleClick}
				displayedButtons={displayedButtons}
				total={total}
			/>
		);
	},
	args: {
		currentPage: 1,
		displayedButtons: 3,
		total: 90,
	},
};
