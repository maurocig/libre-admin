"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import ApiList from "@/components/ui/apiList";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/dataTable";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { CategoryColumn, columns } from "./columns";

type CategoryClientProps = {
  data: CategoryColumn[];
};

export default function CategoryClient({ data }: CategoryClientProps) {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Categories (${data.length})`}
          description="Manage the categories for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
          <Plus className="w-4 h-4 mr-2" />
          Add new
        </Button>
      </div>
      <Separator />

      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="API calls for categories" />
      <Separator />

      <ApiList entityName="categories" entityIdName="categoryId" />
    </>
  );
}
