import { create } from "zustand";
import { SortingOptions } from "./shared.types";

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
		if (typeof newVisibleRows === "number") {
			set(() => ({ visibleRows: newVisibleRows }));
			return;
		}

		if (typeof newVisibleRows === "string") {
			if (newVisibleRows === "" || Number(newVisibleRows) < 0) {
				set(() => ({ visibleRows: undefined }));
				return;
			}

			set(() => ({ visibleRows: Number(newVisibleRows) }));
			return;
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
