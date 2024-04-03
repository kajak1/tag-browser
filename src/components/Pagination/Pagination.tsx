import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import { ReactNode } from "react";
import { generatePages } from ".";

interface PaginationProps {
	currentPage: number;
	onPageClick: (newPage: number) => void;
	size?: number;
	max?: number;
}

export function Pagination({ currentPage, onPageClick, size = 3, max }: PaginationProps) {
	const isSizeValid = size !== undefined && size <= 0;
	const isPageOutOfBounds = max && currentPage > max;

	if (isSizeValid || isPageOutOfBounds) {
		return <PaginationDisabled />;
	}

	const pages = generatePages(currentPage, size, max);

	return (
		<Flex align="center" gap="3">
			<PageButton
				type="control"
				icon={<DoubleArrowLeftIcon />}
				onClick={() => onPageClick(1)}
				disabled={currentPage === 1}
			/>
			<PageButton
				type="control"
				icon={<ChevronLeftIcon />}
				onClick={() => onPageClick(currentPage - 1)}
				disabled={currentPage === 1}
			/>
			{pages.map((page) => {
				return <PageButton key={page} type="page" page={page} isActive={page === currentPage} onClick={onPageClick} />;
			})}
			<PageButton
				type="control"
				icon={<ChevronRightIcon />}
				onClick={() => onPageClick(currentPage + 1)}
				disabled={currentPage === max}
			/>
			{max && max > 0 ? (
				<PageButton
					type="control"
					icon={<DoubleArrowRightIcon />}
					onClick={() => onPageClick(max)}
					disabled={currentPage === max}
				/>
			) : null}
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

function PaginationDisabled() {
	return (
		<Flex align="center" gap="3">
			<PageButton type="control" icon={<DoubleArrowLeftIcon />} onClick={() => {}} disabled />
			<PageButton type="control" icon={<ChevronLeftIcon />} onClick={() => {}} disabled />
			<PageButton type="control" icon={<ChevronRightIcon />} onClick={() => {}} disabled />
			<PageButton type="control" icon={<DoubleArrowRightIcon />} onClick={() => {}} disabled />
		</Flex>
	);
}
