import { ReloadIcon } from "@radix-ui/react-icons";
import { Container, IconButton, Theme } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { TagTable } from ".";
import { getFakePage } from "../../data/sample-tags";
import { mapper } from "../../services/tags.service";
import { defaultVisibleRows } from "../../store";
import { TableError } from "../TableError";

const meta: Meta<typeof TagTable> = {
	component: TagTable,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
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
		callout: {
			description: "Optional custom Component. Rendered only if passed",
			control: false,
		},
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

type Story = StoryObj<typeof TagTable>;

type DefaultStory = StoryObj<React.ComponentProps<typeof TagTable> & { renderCallout: boolean }>;

export const Default: DefaultStory = {
	args: {
		loading: false,
		visibleRows: 30,
		tags: mapper(getFakePage(1)?.items ?? []),
		renderCallout: true,
	},
	render: ({ loading, tags, visibleRows, renderCallout }) => {
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

		const callout = (
			<TableError
				button={
					<IconButton loading={calloutLoading} variant="soft" size="1" onClick={handleClick}>
						<ReloadIcon />
					</IconButton>
				}
			/>
		);

		return (
			<TagTable
				loading={loading}
				tags={tags ?? []}
				visibleRows={visibleRows}
				callout={renderCallout ? callout : undefined}
			/>
		);
	},
};

export const Empty: Story = {
	render: () => <TagTable loading={false} tags={[]} visibleRows={defaultVisibleRows} />,
};

export const Loading: Story = {
	render: () => <TagTable loading={true} tags={[]} visibleRows={defaultVisibleRows} />,
};

export const Error: Story = {
	render: () => {
		return (
			<TagTable
				loading={false}
				tags={[]}
				visibleRows={30}
				callout={
					<TableError
						button={
							<IconButton loading={false} variant="soft" size="1" onClick={() => {}}>
								<ReloadIcon />
							</IconButton>
						}
					/>
				}
			/>
		);
	},
};

export const ErrorAndPopulated: Story = {
	args: {
		visibleRows: Default.args?.visibleRows,
		tags: Default.args?.tags,
	},

	render: ({ visibleRows, tags }) => {
		return (
			<TagTable
				loading={false}
				tags={tags ?? []}
				visibleRows={visibleRows}
				callout={
					<TableError
						button={
							<IconButton loading={false} variant="soft" size="1" onClick={() => {}}>
								<ReloadIcon />
							</IconButton>
						}
					/>
				}
			/>
		);
	},
};
