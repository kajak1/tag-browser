import { CaretLeftIcon, CaretRightIcon, DoubleArrowLeftIcon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import { ReactNode } from "react";

interface PaginationProps {
	currentPage: number;
	size: number;
	onPageClick: (page: number) => void;
}

function generatePages(currentPage: number, size: number): number[] {
	const pageIndex = currentPage - 1;

	const rangeBeginningIndex = Math.floor(pageIndex / size) * size;

	const pages = [...Array(size).fill(0)].map((_, index) => rangeBeginningIndex + index + 1);

	return pages;
}

export function Pagination({ currentPage, onPageClick, size }: PaginationProps) {
	const pages = generatePages(currentPage, size);

	return (
		<Flex justify="end" align="center" gap="3">
			<PageButton
				type="control"
				icon={<DoubleArrowLeftIcon />}
				onClick={() => onPageClick(1)}
				disabled={currentPage === 1}
			/>
			<PageButton
				type="control"
				icon={<CaretLeftIcon />}
				onClick={() => onPageClick(currentPage - 1)}
				disabled={currentPage === 1}
			/>
			{pages.map((page) => {
				return <PageButton key={page} type="page" page={page} isActive={page === currentPage} onClick={onPageClick} />;
			})}
			<PageButton type="control" icon={<CaretRightIcon />} onClick={() => onPageClick(currentPage + 1)} />
		</Flex>
	);
}

type PageButtonProps =
	| {
			type: "page";
			page: number;
			isActive: boolean;
			onClick: (page: number) => void;
	  }
	| { type: "control"; icon: ReactNode; onClick: () => void; disabled?: boolean };

function PageButton(props: PageButtonProps) {
	if (props.type === "control") {
		return (
			<Button variant="soft" onClick={props.onClick} style={{ minWidth: "2rem" }} disabled={props.disabled}>
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
