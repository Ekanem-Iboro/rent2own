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
  path,
  sepCol,
}: {
  item: string | undefined;
  color: string;
  path: string;
  sepCol: string;
}) {
  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        <BreadcrumbItem className="text-primary text-[14px] leading-[16.8px] font-[400]">
          <BreadcrumbLink href={path}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className={`text-[${sepCol}]`} />
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
