import { Tag } from "../../services/tags.service";
import { TableContainer, Table as MuiTable, TableHead, TableRow, TableCell, TableBody, Tab } from "@mui/material";

interface TableProps {
	tags: Tag[];
	max: number;
}

export function Table({ tags, max }: TableProps) {
	return (
		<TableContainer sx={{ maxHeight: "30rem" }}>
			<MuiTable>
				<TableHead>
					<TableRow>
						<TableCell>#</TableCell>
						<TableCell>Tag name</TableCell>
						<TableCell>Posts count</TableCell>
					</TableRow>
				</TableHead>
				<TableBody className="table-body">
					{tags.length !== 0 ? (
						tags.map((tag, index) => {
							const rowIndex = index + 1;
							if (rowIndex > max) return;

							return (
								<TableRow key={tag.name}>
									<TableCell>{rowIndex}</TableCell>
									<TableCell>{tag.name}</TableCell>
									<TableCell>{tag.count}</TableCell>
								</TableRow>
							);
						})
					) : (
						<TableRow aria-rowspan={2}>
							<td>no tags</td>
						</TableRow>
					)}
				</TableBody>
			</MuiTable>
		</TableContainer>
	);
}
