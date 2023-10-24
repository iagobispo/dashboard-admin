import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import TablePromoter from "@/components/Tables/TablePromoter";

export const metadata: Metadata = {
  title: "Tables Page | Next.js E-commerce Dashboard Template",
  description: "This is Tables page for TailAdmin Next.js",
  // other metadata
};

const PromotersPage = () => {
  return (
    <>
      <Breadcrumb pageName="Promotoras" />
      <div className="flex flex-col gap-10">
        <TablePromoter />
      </div>
    </>
  );
};

export default PromotersPage;
