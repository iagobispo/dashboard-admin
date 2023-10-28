import { EventStatus } from "@/types/package";
import React, { ReactNode } from "react";

interface CardDataEventsProps {
  title: string;
  total: string;
  eventStatus?: EventStatus;
  children: ReactNode;
}

const CardDataEvents: React.FC<CardDataEventsProps> = ({
  title,
  total,
  eventStatus,
  children,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="row flex-1 flex justify-between items-center">
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
          {children}
        </div>
        <span className="text-title-sm font-bold text-black dark:text-white ">
          {title}
        </span>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div className="flex-1 flex justify-between items-end">
          <span className="text-sm font-medium">Total de Eventos</span>
          <p
            className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-md font-medium ${
              eventStatus === EventStatus.completed
                ? "text-success bg-success"
                : eventStatus === EventStatus.running
                ? "text-warning bg-warning"
                : "text-white"
            }`}
          >
            {total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDataEvents;
