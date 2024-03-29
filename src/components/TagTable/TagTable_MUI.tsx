import { Tag } from "../../services/tags.service";
import {
	TableBody,
	Table as MuiTable,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Box,
	Typography,
	CircularProgress,
} from "@mui/material";


const tableHeight = "30rem";
const defaultRadixTableBorderWidth = "1px";

interface TagTableProps {
	loading: boolean;
	tags: Tag[];
	visibleRows: number;
}

export function TagTable({ loading, visibleRows, tags }: TagTableProps) {
	return (
		<TableContainer sx={{ maxHeight: tableHeight, scrollbarWidth: "thin" }}>
			<MuiTable sx={{ tableLayout: "fixed" }}>
				<TableHead>
					<TableRow>
						<TableCell sx={{ width: "3rem" }}>#</TableCell>
						<TableCell>Tag name</TableCell>
						<TableCell>Posts count</TableCell>
					</TableRow>
				</TableHead>
				<TableBody className="table-body">
					<TagTableContent loading={loading} visibleRows={visibleRows} tags={tags} />
				</TableBody>
			</MuiTable>
		</TableContainer>
	);
}

function TagTableContent({ loading, tags, visibleRows: maxRows }: TagTableProps) {
	if (loading) return <LoadingRow />;

	if (tags.length === 0) return <NoTagsFoundRow />;

	return tags.map((tag, index) => {
		const rowIndex = index + 1;
		if (rowIndex > maxRows) return;

		if (loading) return <LoadingRow key={tag.name} />;

		return (
			<TableRow key={tag.name}>
				<TableCell>{tag.index}</TableCell>
				<TableCell>{tag.name}</TableCell>
				<TableCell>{tag.count}</TableCell>
			</TableRow>
		);
	});
}

function LoadingRow() {
	return (
		<TableRow>
			<TableCell colSpan={3}>
				<Box
					sx={{
						minHeight: `calc(${tableHeight} - 2 * var(--table-cell-padding) - var(--table-cell-min-height) - 2 * ${defaultRadixTableBorderWidth})`,
						alignItems: "center",
						justifyContent: "center",
						gap: 3,
					}}
				>
					<CircularProgress /> loading data...
				</Box>
			</TableCell>
		</TableRow>
	);
}

function NoTagsFoundRow() {
	return (
		<TableRow>
			<TableCell colSpan={3}>
				<Box
					sx={{
						minHeight: `calc(${tableHeight} - 2 * var(--table-cell-padding) - var(--table-cell-min-height) - 2 * ${defaultRadixTableBorderWidth})`,
						alignItems: "center",
						justifyContent: "center",
						gap: 3,
					}}
				>
					<Typography>no tags</Typography>
				</Box>
			</TableCell>
		</TableRow>
	);
}
