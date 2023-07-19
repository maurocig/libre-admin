"use client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import ApiList from "@/components/ui/apiList";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/dataTable";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { SizeColumn, columns } from "./columns";

type SizeClientProps = {
  data: SizeColumn[];
};

export default function SizeClient({ data }: SizeClientProps) {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage the sizes for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className="w-4 h-4 mr-2" />
          Add new
        </Button>
      </div>
      <Separator />

      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="API calls for Sizes" />
      <Separator />

      <ApiList entityName="sizes" entityIdName="sizeId" />
    </>
  );
}
