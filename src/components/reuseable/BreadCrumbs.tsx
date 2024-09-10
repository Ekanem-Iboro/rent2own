import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbComp({
  item,
  color,
}: {
  item: string | undefined;
  color: string;
}) {
  return (
    <Breadcrumb className="py-[2%] my-3">
      <BreadcrumbList>
        <BreadcrumbItem className="text-primary text-[14px] leading-[16.8px] font-[400]">
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage
            className={`text-[${color}] text-[14px] leading-[16.8px] font-[600]`}
          >
            {item}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
