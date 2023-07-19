"use client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import ApiList from "@/components/ui/apiList";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/dataTable";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ColorColumn, columns } from "./columns";

type ColorClientProps = {
  data: ColorColumn[];
};

export default function ColorClient({ data }: ColorClientProps) {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Colors (${data.length})`}
          description="Manage the colors for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
          <Plus className="w-4 h-4 mr-2" />
          Add new
        </Button>
      </div>
      <Separator />

      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="API calls for Colors" />
      <Separator />

      <ApiList entityName="colors" entityIdName="colorId" />
    </>
  );
}
