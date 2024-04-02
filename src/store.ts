import { create } from "zustand";
import { SortingOptions } from "./services/tags.service";

export const defaultVisibleRows = 30;

interface TableBrowserActions {
	changeVisibleRows: (newVisibleRows: number | string) => void;
	changeCurrentPage: (newPage: number) => void;
	changeSortingOptions: (newSortingOptions: SortingOptions) => void;
}

interface TableBrowserState {
	visibleRows: number | undefined;
	currentPage: number;
	sortingOptions: SortingOptions;
}

export const useTableBrowserStore = create<TableBrowserState & TableBrowserActions>()((set) => ({
	visibleRows: defaultVisibleRows,
	changeVisibleRows: (newVisibleRows) => {
		switch (typeof newVisibleRows) {
			case "number": {
				set(() => {
					return {
						visibleRows: newVisibleRows,
					};
				});

				break;
			}

			case "string": {
				if (newVisibleRows === "" || Number(newVisibleRows) < 0) {
					set(() => {
						return {
							visibleRows: undefined,
						};
					});

					break;
				}

				set(() => {
					return {
						visibleRows: Number(newVisibleRows),
					};
				});

				break;
			}
		}
	},
	currentPage: 1,
	changeCurrentPage: (newPage) => set(() => ({ currentPage: newPage })),

	sortingOptions: {
		order: "desc",
		field: "count",
	},
	changeSortingOptions: (newSortingOptions) => set(() => ({ sortingOptions: newSortingOptions })),
}));
