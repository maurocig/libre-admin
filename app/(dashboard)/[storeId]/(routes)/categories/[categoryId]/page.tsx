import prismadb from "@/lib/prismadb";
import CategoryForm from "./components/CategoryForm";

type CategoryPageProps = {
  params: {
    categoryId: string;
    storeId: string;
  };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  // if there is no category, it means it looked for 'new' id in database.
  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });

  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <CategoryForm billboards={billboards} initialData={category} />
      </div>
    </div>
  );
}
