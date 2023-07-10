import { auth } from "@clerk/nextjs";
import { redirect, useParams } from "next/navigation";

import prismadb from "@/lib/prismadb";
import SettingsForm from "./components/SettingsForm";

type SettingsPageProps = {
  params: {
    storeId: string;
  };
};

export default async function SettingsPage({ params }: SettingsPageProps) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <SettingsForm initialData={store} />
      </div>
    </div>
  );
}
