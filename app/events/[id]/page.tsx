import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableEventAccredited from "@/components/Tables/TableEventAccredited";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Tables Page | Next.js E-commerce Dashboard Template",
  description: "This is Tables page for TailAdmin Next.js",
};

const EventPage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <p>ID: {params.id}</p>
      <Breadcrumb pageName="Evento" />

      <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Pet South America
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Nome
                    </label>
                    <input
                      type="text"
                      disabled
                      placeholder="Nome do evento"
                      value={"Pet South America"}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Status
                    </label>
                    <input
                      type="text"
                      disabled
                      value={""}
                      placeholder="Concluido"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Promotora
                  </label>
                  <input
                    type="text"
                    disabled
                    value={"Track eventos"}
                    placeholder="promotora@contato.com.br"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    CNAE
                  </label>
                  <input
                    type="text"
                    disabled
                    value={"3250706, 3250709"}
                    placeholder="00.000.000/0000-00"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5 flex-1 flex flex-col gap-6 xl:flex-row">
                  <div className="flex-1">
                    <label className="mb-3 block text-black dark:text-white">
                      Data início
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        className="custom-input-date custom-input-date-2 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <label className="mb-3 block text-black dark:text-white">
                      Data fim
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        className="custom-input-date custom-input-date-2 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Cidade
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <input
                      type="text"
                      disabled
                      value={""}
                      placeholder="São Paulo"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    {/* <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                      <option value="">Type your subject</option>
                      <option value="">USA</option>
                      <option value="">UK</option>
                      <option value="">Canada</option>
                    </select>
                    <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill=""
                          ></path>
                        </g>
                      </svg>
                    </span> */}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Observações
                  </label>
                  <textarea
                    disabled
                    rows={6}
                    value={""}
                    placeholder="Adicione uma observação (opcional)"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-9">
          {/* <!-- Sign In Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark row flex items-center justify-between">
              <h3 className="font-medium text-black dark:text-white">
                Credenciados
              </h3>
              <div className="flex row items-center">
                <svg
                  width="22"
                  height="15"
                  viewBox="0 0 22 15"
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.66667 8.55556H18.3333V6.11111H3.66667M0 0V2.44444H22V0M8.55556 14.6667H13.4444V12.2222H8.55556V14.6667Z"
                    className="fill-current"
                  />
                </svg>
                <Link
                  href="#"
                  className=" ml-5 inline-flex items-center justify-center rounded-md bg-meta-3 py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-8"
                >
                  + Adicionar
                </Link>
              </div>
            </div>
            <TableEventAccredited />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
