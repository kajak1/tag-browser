import type { Meta, StoryObj } from "@storybook/react";

import { TagBrowser } from ".";
import { Container, Theme } from "@radix-ui/themes";

const meta: Meta<typeof TagBrowser> = {
	component: TagBrowser,
};

export default meta;

type Story = StoryObj<typeof TagBrowser>;

export const Primary: Story = {
	render: () => (
		<Container maxWidth="50rem">
			<TagBrowser visibleRows={30} />,
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
			<TagBrowser visibleRows={30} />,
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

Secondary.storyName = "Populated";
