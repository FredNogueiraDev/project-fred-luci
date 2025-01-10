import { Table } from "@radix-ui/themes";

interface MenuItem {
  id: number;
  title: string;
  category: string;
  price: string;
}

interface MenuTableProps {
  data: MenuItem[];
}

export function MenuTable({ data }: MenuTableProps) {
  return (
    <div className="my-2 mx-auto w-full">
      <Table.Root className="border border-gray-0 rounded-lg max-w-3/4">
        <Table.Header className="bg-gray-0">
          <Table.Row>
            <Table.ColumnHeaderCell className="boxShadowNone">Nome</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="boxShadowNone">Categoria</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="boxShadowNone">Preço</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="boxShadowNone">Ações</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((item) => (
            <Table.Row key={item.id} className="hover:bg-gray-0 border-t border-gray-0">
              <Table.RowHeaderCell className="boxShadowNone">{item.title}</Table.RowHeaderCell>
              <Table.Cell className="boxShadowNone">{item.category}</Table.Cell>
              <Table.Cell className="boxShadowNone">{item.price}</Table.Cell>
              <Table.Cell className="boxShadowNone">{}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
