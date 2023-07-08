import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

import { redirect } from "next/navigation";

type layoutProps = {
  children: React.ReactNode;
  params: { storeId: string };
};

export default async function DashboardLayout({ children, params }: layoutProps) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId: userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <div>This will be a nav...</div>
      {children}
    </>
  );

  return <div></div>;
}
