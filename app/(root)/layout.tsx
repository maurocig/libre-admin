import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";

type SetupLayoutProps = {
  children: React.ReactNode;
};

export default async function SetupLayout({ children }: SetupLayoutProps) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      userId,
    },
  });

  if (store) {
    redirect(`/${store.id}`);
  }

  return (
    <div>
      SetupLayout
      {children}
    </div>
  );
}
