import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import CategoryClient from "./components/client";
import { CategoryColumn } from "./components/columns";

type CategoriesPageProps = {
  params: { storeId: string };
};

export default async function CategoriesPage({ params }: CategoriesPageProps) {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true, // populate the relation category-billboard.
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: format(item.createdAt, "MMMM do, yyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <CategoryClient data={formattedCategories} />
      </div>
    </div>
  );
}
