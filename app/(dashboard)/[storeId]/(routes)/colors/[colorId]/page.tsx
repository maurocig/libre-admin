import prismadb from "@/lib/prismadb";
import ColorForm from "./components/ColorForm";

type ColorPageProps = { params: { colorId: string } };

export default async function ColorPage({ params }: ColorPageProps) {
  // if there is no color, it means it looked for 'new' id in database.
  const color = await prismadb.color.findUnique({
    where: {
      id: params.colorId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <ColorForm initialData={color} />
      </div>
    </div>
  );
}
