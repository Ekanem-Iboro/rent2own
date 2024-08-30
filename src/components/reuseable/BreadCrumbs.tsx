import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import useCarStore from "@/store/ProductStore";

export function BreadcrumbComp() {
  const { currentCar } = useCarStore();
  return (
    <Breadcrumb className="md:px-[8%] py-[2%] px-2">
      <BreadcrumbList>
        <BreadcrumbItem className="text-primary text-[14px] leading-[16.8px] font-[400]">
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem className="text-[#2D2D2D] text-[14px] leading-[16.8px] font-[400]">
          <BreadcrumbLink>{currentCar?.make}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-[#191919] text-[14px] leading-[16.8px] font-[600]">
            {currentCar?.model}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
