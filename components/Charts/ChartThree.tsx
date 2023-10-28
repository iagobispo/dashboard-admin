"use client";
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface ChartThreeState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    type: "donut",
  },
  colors: ["#10B981", "#259AE6", "#FFA70B"],
  labels: ["Sucesso", "Não registrado", "Acesso negado"],
  legend: {
    show: true,
    position: "bottom",
  },

  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const ChartThree: React.FC = () => {
  const [state, setState] = useState<ChartThreeState>({
    series: [870, 80, 50],
  });

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Estatísticas de Reconhecimento Facial
          </h5>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap">
        <div className="w-full px-8 ">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#10B981]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Bem-sucedido </span>
              <span> 87% </span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 ">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#FFA70B]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Não reconecido </span>
              <span> 8% </span>
            </p>
          </div>
        </div>
        <div className="w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#259AE6]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Credencial fisica </span>
              <span> 5% </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartThree;
