export function generatePages(currentPage: number, displayedButtons: number = 3, total?: number): number[] {
	const pageIndex = currentPage - 1;

	const rangeBeginningIndex = Math.floor(pageIndex / displayedButtons) * displayedButtons;

	let pageNumbers = [...Array(displayedButtons).fill(0)].map((_, index) => rangeBeginningIndex + index + 1);

	if (!total || total <= 0) return pageNumbers;

	pageNumbers = pageNumbers.filter((page) => page <= total);

	if (pageNumbers.length === 1) {
		return fillMissingPages(pageNumbers, displayedButtons, total);
	}

	return pageNumbers;
}

function fillMissingPages(pageNumbers: number[], size: number, max: number) {
	const pageNumbersCopy = [...pageNumbers];
	for (let i = 1; i < size; i++) {
		pageNumbersCopy.push(max - i);
	}

	return pageNumbersCopy.reverse();
}
