import type { Meta, StoryObj } from "@storybook/react";

import { TableError } from ".";
import { Container, IconButton, Theme } from "@radix-ui/themes";
import { ReloadIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof TableError> = {
	component: TableError,
	argTypes: {
		button: {
			description: "Optional custom Component to display",
		},
	},
	tags: ["autodocs"],
	parameters: {
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

type Story = StoryObj<typeof TableError>;

export const Default: Story = {
	render: () => <TableError />,
};

export const WithButton: Story = {
	render: () => (
		<TableError
			button={
				<IconButton loading={false} variant="soft" size="1" onClick={() => {}}>
					<ReloadIcon />
				</IconButton>
			}
		/>
	),
};

export const WithLoadingButton: Story = {
	render: () => (
		<TableError
			button={
				<IconButton loading={true} variant="soft" size="1" onClick={() => {}}>
					<ReloadIcon />
				</IconButton>
			}
		/>
	),
};
