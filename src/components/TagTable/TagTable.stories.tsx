import type { Meta, StoryObj } from "@storybook/react";

import { TagTable } from ".";
import { Container, Theme } from "@radix-ui/themes";

const meta: Meta<typeof TagTable> = {
	component: TagTable,
};

export default meta;

type Story = StoryObj<typeof TagTable>;

export const Primary: Story = {
	render: () => (
		<Container maxWidth="50rem">
			<TagTable loading={true} tags={[]} visibleRows={30} />,
		</Container>
	),
	decorators: [
		(Story) => (
			<Theme>
				<Story />
			</Theme>
		),
	],
};

Primary.storyName = "Loading";

export const Secondary: Story = {
	render: () => (
		<Container maxWidth="50rem">
			<TagTable loading={false} tags={[{ index: 1, count: 10, name: "javascript" }]} visibleRows={30} />,
		</Container>
	),
	decorators: [
		(Story) => (
			<Theme>
				<Story />
			</Theme>
		),
	],
};


Secondary.storyName = "Populated"