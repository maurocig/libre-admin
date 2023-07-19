import prismadb from "@/lib/prismadb";
import SizeForm from "./components/SizeForm";

type SizePageProps = { params: { sizeId: string } };

export default async function SizePage({ params }: SizePageProps) {
  // if there is no size, it means it looked for 'new' id in database.
  const size = await prismadb.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <SizeForm initialData={size} />
      </div>
    </div>
  );
}
