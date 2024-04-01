import type { Meta, StoryObj } from "@storybook/react";

import { TagTable } from ".";
import { Container, Theme } from "@radix-ui/themes";

const meta: Meta<typeof TagTable> = {
	component: TagTable,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	render: ({ loading, visibleRows }) => (
		<Container maxWidth="50rem">
			<TagTable loading={loading} tags={[]} visibleRows={visibleRows} />,
		</Container>
	),
	argTypes: {
		visibleRows: {
			defaultValue: 30,
			description: "Number of visible rows",
			control: {
				type: "number",
				min: 1,
			},
			table: {
				type: { summary: "number" },
				defaultValue: { summary: 1 },
			},
		},
		loading: {
			defaultValue: false,
			description: "Is data loading?",
			control: {
				type: "boolean",
			},
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: false },
			},
		},
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

type Story = StoryObj<typeof TagTable>;

export const Default: Story = {
	args: {
		loading: false,
		visibleRows: 30,
		tags: [],
	},
	render: ({ loading, visibleRows, tags }) => (
		<TagTable loading={loading} tags={[{ index: 1, count: 10, name: "javascript" }]} visibleRows={visibleRows} />
	),
};
