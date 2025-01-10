import { Table } from "@radix-ui/themes";

interface MenuItem {
  id: number;
  icon: string;
  title: string;
}

interface CategorieTableProps {
  data: MenuItem[];
}

export function CategorieTable({ data }: CategorieTableProps) {
  return (
    <div className="my-2 mx-auto w-full">
      <Table.Root className="border border-gray-0 rounded-lg max-w-3/4">
        <Table.Header className="bg-gray-0">
          <Table.Row>
            <Table.ColumnHeaderCell className="boxShadowNone w-20">Ícone</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="boxShadowNone w-3/4">Nome</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="boxShadowNone w-32">Ações</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((item) => (
            <Table.Row key={item.id} className="hover:bg-gray-0 border-t border-gray-0">
              <Table.RowHeaderCell className="boxShadowNone w-20">{item.icon}</Table.RowHeaderCell>
              <Table.Cell className="boxShadowNone w-3/4">{item.title}</Table.Cell>
              <Table.Cell className="boxShadowNone w-32">{}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
