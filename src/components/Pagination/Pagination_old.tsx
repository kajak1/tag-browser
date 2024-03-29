import { Button, Flex } from "@radix-ui/themes";
import { ReactNode, useState } from "react";

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

interface PaginationProps {
	currentPage: number;
	size: number;
	onPageClick: (page: number) => void;
}

export function RefacoredPagination({ currentPage, onPageClick, size }: PaginationProps) {
	const y = currentPage - 1;
	const mult = Math.floor(y / size);
	const start = mult * size;
	const pages = [...Array(size).fill(0)].map((_, index) => start + index + 1);

	console.log(pages, currentPage);

	return (
		<Flex justify="end" align="center" gap="3">
			<PageButton type="control" icon="<<" onClick={() => onPageClick(1)} disabled={currentPage === 1} />
			<PageButton type="control" icon="<" onClick={() => onPageClick(currentPage - 1)} disabled={currentPage === 1} />
			{pages.map((page) => {
				return <PageButton key={page} type="page" page={page} isActive={page === currentPage} onClick={onPageClick} />;
			})}
			<PageButton type="control" icon=">" onClick={() => onPageClick(currentPage + 1)} />
		</Flex>
	);
}
export function Pagination({ currentPage, onPageClick, size }: PaginationProps) {
	const [displayedPages, setDisplayedPages] = useState([1, 2, 3, 4]);

	// const lastPage = displayedPages.at(-1);
	// if (lastPage !== undefined) {
	// 	if (currentPage === lastPage) {
	// 		const newDisplayedPages = displayedPages.map((page) => page + displayedPages.length - 1);
	// 		setDisplayedPages(newDisplayedPages);
	// 	}
	// }

	// const firstPage = displayedPages.at(0);
	// if (firstPage !== undefined && firstPage !== 1) {
	// 	if (currentPage === firstPage) {
	// 		const newDisplayedPages = displayedPages.map((page) => page - displayedPages.length + 1);
	// 		setDisplayedPages(newDisplayedPages);
	// 	}
	// }
	// console.log(displayedPages);

	function handleClick(newPage: number) {
		if (newPage <= 0) return;

		const lastPage = displayedPages.at(-1);
		if (!lastPage) return;
		if (newPage === lastPage + 1) {
			const newDisplayedPages = displayedPages.map((page) => page + displayedPages.length);
			setDisplayedPages(newDisplayedPages);
		}

		const firstPage = displayedPages.at(0);
		if (!firstPage) return;
		if (newPage === firstPage - 1) {
			const newDisplayedPages = displayedPages.map((page) => page - displayedPages.length);
			setDisplayedPages(newDisplayedPages);
		}

		onPageClick(newPage);
	}

	return (
		<Flex justify="end" align="center" gap="3">
			<Button variant="ghost" onClick={() => handleClick(currentPage - 1)}>
				{"< previous"}
			</Button>
			{displayedPages.map((pageIndex) => {
				return (
					<PageButton key={pageIndex} page={pageIndex} isActive={pageIndex === currentPage} onClick={handleClick} />
				);
			})}
			<Button variant="ghost" onClick={() => handleClick(currentPage + 1)}>
				{"next >"}
			</Button>
		</Flex>
	);
}
