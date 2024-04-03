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
		size: {
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
		max: {
			description: "Total amount of pages",
			defaultValue: 100,
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
	render: ({ currentPage, size, max }) => {
		const [, setArgs] = useArgs();

		function handleClick(newPage: number) {
			setArgs({ currentPage: newPage });
		}

		return <Pagination currentPage={currentPage} onPageClick={handleClick} size={size} max={max} />;
	},
	args: {
		currentPage: 1,
		size: 3,
		max: 100,
	},
};
