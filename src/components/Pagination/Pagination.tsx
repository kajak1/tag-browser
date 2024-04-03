import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { Flex } from "@radix-ui/themes";
import { generatePages } from ".";
import { PageButton } from "./PageButton";

interface PaginationProps {
	currentPage: number;
	onPageClick: (newPage: number) => void;
	displayedButtons?: number;
	total?: number;
}

export function Pagination({ currentPage, onPageClick, displayedButtons = 3, total }: PaginationProps) {
	const areDisplayedButtonsValid = displayedButtons !== undefined && displayedButtons > 0;
	const isPageOutOfBounds = total ? currentPage > total || currentPage <= 0 : false;

	if (!areDisplayedButtonsValid || isPageOutOfBounds) {
		return <PaginationDisabled />;
	}

	const pages = generatePages(currentPage, displayedButtons, total);

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
				disabled={currentPage === total}
			/>
			{total && total > 0 ? (
				<PageButton
					type="control"
					icon={<DoubleArrowRightIcon />}
					onClick={() => onPageClick(total)}
					disabled={currentPage === total}
				/>
			) : null}
		</Flex>
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
