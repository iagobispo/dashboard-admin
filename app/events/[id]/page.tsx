import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tables Page | Next.js E-commerce Dashboard Template",
  description: "This is Tables page for TailAdmin Next.js",
};

const EventPage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Breadcrumb pageName="Evento" />
      <div className="flex flex-col gap-10">
        <p>ID: {params.id}</p>
      </div>
    </>
  );
};

export default EventPage;
