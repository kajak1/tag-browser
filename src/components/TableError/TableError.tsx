import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Callout, Flex } from "@radix-ui/themes";
import { ReactNode } from "react";

export function TableError({ button }: { button?: ReactNode }) {
	return (
		<Callout.Root color="red" role="alert">
			<Flex gap="3">
				<Callout.Icon>
					<ExclamationTriangleIcon />
				</Callout.Icon>
				<Callout.Text>Error occured while fetching tags</Callout.Text>
				{button}
			</Flex>
		</Callout.Root>
	);
}
