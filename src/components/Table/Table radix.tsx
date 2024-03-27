import { Tag } from "../../services/tags.service";
import { Table as RadixTable, ScrollArea } from "@radix-ui/themes";
import "./Table.css";

interface TableProps {
	tags: Tag[];
	max: number;
}

const { Root, Header, Row, Body, ColumnHeaderCell, RowHeaderCell, Cell } = RadixTable;

export function Table({ tags, max }: TableProps) {
	return (
			<ScrollArea type="auto" scrollbars="vertical" style={{ maxHeight: "30rem" }}>
				<Root variant="surface">
					<Header>
						<Row>
							<ColumnHeaderCell>#</ColumnHeaderCell>
							<ColumnHeaderCell>Tag name</ColumnHeaderCell>
							<ColumnHeaderCell>Posts count</ColumnHeaderCell>
						</Row>
					</Header>
					<Body className="table-body">
						{tags.length !== 0 ? (
							tags.map((tag, index) => {
								const rowIndex = index + 1;
								if (rowIndex > max) return;

								return (
									<Row key={tag.name}>
										<Cell>{rowIndex}</Cell>
										<RowHeaderCell>{tag.name}</RowHeaderCell>
										<Cell>{tag.count}</Cell>
									</Row>
								);
							})
						) : (
							<Row aria-rowspan={2}>
								<td>no tags</td>
							</Row>
						)}
					</Body>
				</Root>
			</ScrollArea>
	);
}
