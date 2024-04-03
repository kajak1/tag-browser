export function generatePages(currentPage: number, size: number = 3, max?: number): number[] {
	const pageIndex = currentPage - 1;

	const rangeBeginningIndex = Math.floor(pageIndex / size) * size;

	let pages = [...Array(size).fill(0)].map((_, index) => rangeBeginningIndex + index + 1);

	if (!max || max <= 0) return pages;

	pages = pages.filter((page) => page <= max);

	if (pages.length > 1) return pages;

	fillRemainingPages(pages, size, max);

	return pages;
}

function fillRemainingPages(pages: number[], size: number, max: number) {
	for (let i = 1; i < size; i++) {
		pages.push(max - i);
	}
	
	pages.reverse();
}
