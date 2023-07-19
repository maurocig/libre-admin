"use client"; // we add this so we can use ApiAlert component inside server components.

import { Copy, Server } from "lucide-react";
import { toast } from "react-hot-toast";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ApiAlertProps = {
  title: string;
  description: string;
  variant: "public" | "admin";
};

const textMap: Record<ApiAlertProps["variant"], string> = {
  public: "Public",
  admin: "Admin",
};

const variantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
  //	   						^ public or admin			 ^ destructive, outline, etc
  public: "secondary",
  admin: "destructive",
};

export default function ApiAlert({
  title,
  description,
  variant = "public",
}: ApiAlertProps) {
  const onCopy = () => {
    navigator.clipboard.writeText(description);
    toast.success("API Route copied to the clipboard.");
  };

  return (
    <Alert>
      <div className="flex">
        <Server className="w-4 h-4 mr-4" />
        <AlertTitle className="flex items-center gap-x-2">
          {title}
          <Badge className="relative" variant={variantMap[variant]}>
            {textMap[variant]}
          </Badge>
        </AlertTitle>
      </div>
      <AlertDescription className="flex items-center justify-between mt-4 space-x-3">
        <code className="relative truncate rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {description}
        </code>
        <Button className="p-2" variant="outline" size="icon" onClick={onCopy}>
          <Copy className="w-4 h-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
}
