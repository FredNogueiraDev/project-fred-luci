import { Table, Tooltip } from "@radix-ui/themes";

import active from "../../../../assets/icons/active.svg"
import inactive from "../../../../assets/icons/inactive.svg"

interface MenuItem {
  id: number;
  title: string;
  category: string;
  price: string;
  availability: boolean;
  rating: number;
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
            <Table.ColumnHeaderCell className="boxShadowNone w-8"></Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="boxShadowNone w-3/5">Nome</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="boxShadowNone">Categoria</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="boxShadowNone">Preço</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="boxShadowNone">Avaliação</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((item) => (
            <Table.Row key={item.id} className="hover:bg-gray-0 border-t border-gray-0 cursor-pointer">
              <Table.Cell className="boxShadowNone w-11">
                <Tooltip content={item.availability ? "Ativo" : "Inativo"} >
                  <img src={item.availability ? active : inactive} alt="Status" className="w-6 mx-auto" />
                </Tooltip>
              </Table.Cell>
              <Table.RowHeaderCell className="boxShadowNone w-3/5">{item.title}</Table.RowHeaderCell>
              <Table.Cell className="boxShadowNone">{item.category}</Table.Cell>
              <Table.Cell className="boxShadowNone">{item.price}</Table.Cell>
              <Table.Cell className="boxShadowNone">{item.rating.toFixed(1)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
