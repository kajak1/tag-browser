import type { Meta, StoryObj } from "@storybook/react";

import { ReloadIcon } from "@radix-ui/react-icons";
import { IconButton, Theme } from "@radix-ui/themes";
import { TableError } from ".";
import { useEffect, useState } from "@storybook/preview-api";

type Args = React.ComponentProps<typeof TableError> & {
	renderButton: boolean;
};

const meta: Meta<Args> = {
	component: TableError,
	argTypes: {
		text: {
			description: "Text to be displayed",
			defaultValue: "Error occured while fetching tags",
		},
		children: {
			description: "Optional custom Component to display",
			control: false,
		},
		renderButton: {
			description: "Control whether button should be displayed",
			defaultValue: false,
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

type Story = StoryObj<Args>;

export const Default: Story = {
	render: ({ text, renderButton }) => {
		const [calloutLoading, isCalloutLoading] = useState(false);

		function handleClick() {
			isCalloutLoading(true);
		}

		useEffect(() => {
			const timeoutId = setTimeout(() => {
				if (calloutLoading) {
					isCalloutLoading(false);
				}
			}, 1000);

			return () => clearTimeout(timeoutId);
		}, [calloutLoading]);

		return (
			<TableError text={text}>
				{renderButton && (
					<IconButton loading={calloutLoading} variant="soft" size="1" onClick={handleClick}>
						<ReloadIcon />
					</IconButton>
				)}
			</TableError>
		);
	},
	args: {
		text: "Error occured while fetching tags",
		renderButton: false,
	},
};

export const WithButton: Story = {
	render: () => (
		<TableError text="Error occured while fetching tags">
			<IconButton loading={false} variant="soft" size="1" onClick={() => {}}>
				<ReloadIcon />
			</IconButton>
		</TableError>
	),
};

export const WithLoadingButton: Story = {
	render: () => (
		<TableError text="Error occured while fetching tags">
			<IconButton loading={true} variant="soft" size="1" onClick={() => {}}>
				<ReloadIcon />
			</IconButton>
		</TableError>
	),
};
