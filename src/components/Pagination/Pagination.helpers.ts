export function generateButtonsNubers(currentPage: number, displayedButtons: number = 3, total?: number): number[] {
	const pageIndex = currentPage - 1;

	const rangeBeginningIndex = Math.floor(pageIndex / displayedButtons) * displayedButtons;

	let buttonsNumbers = [...Array(displayedButtons).fill(0)].map((_, index) => rangeBeginningIndex + index + 1);

	if (!total || total <= 0) return buttonsNumbers;

	buttonsNumbers = buttonsNumbers.filter((page) => page <= total);

	if (buttonsNumbers.length === 1) {
		return fillMissingNumbers(buttonsNumbers, displayedButtons, total);
	}

	return buttonsNumbers;
}

function fillMissingNumbers(buttonsNumbers: number[], size: number, max: number) {
	const buttonsNumbersCopy = [...buttonsNumbers];
	for (let i = 1; i < size; i++) {
		buttonsNumbersCopy.push(max - i);
	}

	return buttonsNumbersCopy.reverse();
}
