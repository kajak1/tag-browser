import "@radix-ui/themes/styles.css";
import type { Preview } from "@storybook/react";
import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize();

const preview: Preview = {
	decorators: [mswDecorator],
	parameters: {
		controls: {
			expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;

