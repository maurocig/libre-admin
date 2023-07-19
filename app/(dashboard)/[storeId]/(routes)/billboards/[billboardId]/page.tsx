import prismadb from "@/lib/prismadb";
import BillboardForm from "./components/BillboardForm";

type BillboardPageProps = { params: { billboardId: string } };

export default async function BillboardPage({ params }: BillboardPageProps) {
  // if there is no billboard, it means it looked for 'new' id in database.
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
}
