import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import SizeClient from "./components/client";
import { SizeColumn } from "./components/columns";

type SizesPageProps = {
  params: { storeId: string };
};

export default async function SizesPage({ params }: SizesPageProps) {
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedSizes: SizeColumn[] = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <SizeClient data={formattedSizes} />
      </div>
    </div>
  );
}
