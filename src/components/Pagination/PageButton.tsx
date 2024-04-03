import { Button } from "@radix-ui/themes";
import { ReactNode } from "react";

interface ButtonPageProps {
	type: "page";
	page: number;
	isActive: boolean;
	onClick: (page: number) => void;
}

interface ControlPageProps {
	type: "control";
	icon: ReactNode;
	onClick: () => void;
	disabled?: boolean;
}

type PageButtonProps = ButtonPageProps | ControlPageProps;

export function PageButton(props: PageButtonProps) {
	if (props.type === "control") {
		return (
			<Button variant="soft" onClick={props.onClick} disabled={props.disabled} style={{ minWidth: "2rem" }}>
				{props.icon}
			</Button>
		);
	}

	if (props.page <= 0) {
		return null;
	}

	return (
		<Button
			onClick={() => props.onClick(props.page)}
			variant={props.isActive ? "solid" : "outline"}
			style={{ minWidth: "2rem" }}
		>
			{props.page}
		</Button>
	);
}
