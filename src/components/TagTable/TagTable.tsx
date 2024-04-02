import { Flex, Table as RadixTable, ScrollArea, Spinner, Text } from "@radix-ui/themes";
import { ReactNode } from "react";
import { Tag } from "../../shared.types";

const { Root, Header, Row, Body, ColumnHeaderCell, RowHeaderCell, Cell } = RadixTable;

const tableHeight = "30rem";
const defaultRadixTableBorderWidth = "1px";

interface TagTableProps {
	loading: boolean;
	visibleRows: number;
	tags: Tag[];
	callout?: ReactNode;
}

export function TagTable({ loading, visibleRows, tags, callout }: TagTableProps) {
	return (
		<ScrollArea type="auto" scrollbars="vertical" style={{ maxHeight: tableHeight }}>
			<Root variant="surface" layout="fixed">
				<Header>
					<Row>
						<ColumnHeaderCell width="4rem">#</ColumnHeaderCell>
						<ColumnHeaderCell>Tag name </ColumnHeaderCell>
						<ColumnHeaderCell>Posts count</ColumnHeaderCell>
					</Row>
				</Header>
				<Body>
					{!loading && callout ? (
						<Row>
							<Cell colSpan={3}>{callout}</Cell>
						</Row>
					) : null}
					<TagTableContent loading={loading} visibleRows={visibleRows} tags={tags} />
				</Body>
			</Root>
		</ScrollArea>
	);
}

function TagTableContent({ loading, tags, visibleRows }: TagTableProps) {
	if (loading) return <LoadingRow />;

	if (tags.length === 0) return <NoTagsFoundRow />;

	return tags.map((tag, index) => {
		const rowIndex = index + 1;
		if (rowIndex > visibleRows) return;

		return (
			<Row key={tag.name}>
				<Cell>{tag.index}</Cell>
				<RowHeaderCell>{tag.name}</RowHeaderCell>
				<Cell>{tag.count}</Cell>
			</Row>
		);
	});
}

function LoadingRow() {
	return (
		<Row>
			<Cell colSpan={3}>
				<Flex
					minHeight={`calc(${tableHeight} - 2 * var(--table-cell-padding) - var(--table-cell-min-height) - 2 * ${defaultRadixTableBorderWidth})`}
					align="center"
					justify="center"
					gap="3"
				>
					<Spinner /> loading data...
				</Flex>
			</Cell>
		</Row>
	);
}

function NoTagsFoundRow() {
	return (
		<Row>
			<Cell colSpan={3} align="center" justify="center">
				<Flex
					minHeight={`calc(${tableHeight} - 2 * var(--table-cell-padding) - var(--table-cell-min-height) - 2 * ${defaultRadixTableBorderWidth})`}
					align="center"
					justify="center"
				>
					<Text>no tags found</Text>
				</Flex>
			</Cell>
		</Row>
	);
}
