import { Table } from "@radix-ui/themes";
import { CategoriesModal } from "../Modals/categoriesModal";
import { useModalController } from "../Modals/useModalController";

interface MenuItem {
  id: number;
  title: string;
}

interface CategorieTableProps {
  data: MenuItem[];
}

export function CategorieTable({ data }: CategorieTableProps) {
  const {
    handleOpenCategoriesModal,
    handleCloseCategoriesModal,
    isCategoriesModalOpen,
    selectedCategory,
  } = useModalController();

  return (
    <div className="my-2 mx-auto w-full">
      <Table.Root className="border border-gray-0 rounded-lg max-w-3/4">
        <Table.Header className="bg-gray-0">
          <Table.Row>
            <Table.ColumnHeaderCell className="boxShadowNone"></Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="boxShadowNone w-full">Nome</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((item) => (
            <Table.Row
              key={item.id}
              className="hover:bg-gray-0 border-t border-gray-0 cursor-pointer"
              onClick={() => handleOpenCategoriesModal(item.id, item.title)}
              >
              <Table.RowHeaderCell className="boxShadowNone">{item.id}</Table.RowHeaderCell>
              <Table.Cell className="boxShadowNone w-full">{item.title}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <CategoriesModal
        open={isCategoriesModalOpen}
        onClose={handleCloseCategoriesModal}
        categoryId={selectedCategory.id}
        categoryTitle={selectedCategory.title}
      />
    </div>
  );
}
