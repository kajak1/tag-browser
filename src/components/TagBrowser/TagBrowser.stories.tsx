import { Container, Theme } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";
import { TagBrowser } from ".";
import { handlers } from "../../mock-worker";

const meta: Meta<typeof TagBrowser> = {
	component: TagBrowser,
	parameters: {
		layout: "centered",
		msw: handlers,
	},
	decorators: [
		(Story) => (
			<Theme style={{ minHeight: "auto" }}>
				<Container maxWidth="50rem">
					<Story />
				</Container>
			</Theme>
		),
	],
};

export default meta;

type Story = StoryObj<typeof TagBrowser>;

export const Default: Story = {};
