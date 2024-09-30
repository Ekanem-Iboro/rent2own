import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export function BreadcrumbComp({
  item,
  color,

  sepCol,
}: {
  item: string | undefined;
  color: string;

  sepCol: string;
}) {
  const session_token = localStorage.getItem("session_token");
  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        <BreadcrumbItem className="text-primary text-[14px] leading-[16.8px] font-[400]">
          <Link to={`${session_token ? "/home" : "/"}`}>
            <BreadcrumbLink>Home</BreadcrumbLink>
          </Link>
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
