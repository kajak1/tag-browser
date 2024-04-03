import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Callout, Flex } from "@radix-ui/themes";
import { ReactNode } from "react";

interface TableErrorProps {
	text: string;
	children?: ReactNode;
}

export function TableError({ text, children }: TableErrorProps) {
	return (
		<Callout.Root color="red" role="alert">
			<Flex gap="3">
				<Callout.Icon>
					<ExclamationTriangleIcon />
				</Callout.Icon>
				<Callout.Text>{text}</Callout.Text>
				{children}
			</Flex>
		</Callout.Root>
	);
}
