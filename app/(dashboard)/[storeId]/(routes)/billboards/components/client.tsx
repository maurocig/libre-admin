"use client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import ApiList from "@/components/ui/apiList";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/dataTable";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { BillboardColumn, columns } from "./columns";

type BillboardClientProps = {
  data: BillboardColumn[];
};

export default function BillboardClient({ data }: BillboardClientProps) {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage the billboards for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
          <Plus className="w-4 h-4 mr-2" />
          Add new
        </Button>
      </div>
      <Separator />

      <DataTable searchKey="label" columns={columns} data={data} />
      <Heading title="API" description="API calls for Billboards" />
      <Separator />

      <ApiList entityName="billboards" entityIdName="billboardId" />
    </>
  );
}
