import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbComp({ item }: { item: string | undefined }) {
  return (
    <Breadcrumb className="md:px-[8%] py-[2%] px-8">
      <BreadcrumbList>
        <BreadcrumbItem className="text-primary text-[14px] leading-[16.8px] font-[400]">
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-[#191919] text-[14px] leading-[16.8px] font-[600]">
            {item}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
