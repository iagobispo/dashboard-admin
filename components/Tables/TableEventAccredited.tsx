"use client";
import { useRouter } from "next/navigation";
import { EventStatus, Package } from "@/types/package";
type Person = {
  id: string;
  name: string;
  cpf: string;
  role: "Visitante" | "Expositor" | "Colaborador";
};

const TableEventAccredited = () => {
  const router = useRouter();
  const handleNavigation = (promoterId: string) => {
    router.push(`/accredited/${promoterId}`);
  };

  const accredited: Person[] = [
    { id: "1", name: "John Smith", cpf: "123.456.789-00", role: "Visitante" },
    { id: "2", name: "Mary Santos", cpf: "987.654.321-00", role: "Expositor" },
    {
      id: "3",
      name: "Ana Pereira",
      cpf: "456.789.123-00",
      role: "Colaborador",
    },
    { id: "4", name: "Peter Souza", cpf: "789.123.456-00", role: "Visitante" },
    {
      id: "5",
      name: "Laura Oliveira",
      cpf: "234.567.890-00",
      role: "Expositor",
    },
    {
      id: "6",
      name: "Lucas Rodrigues",
      cpf: "654.321.987-00",
      role: "Colaborador",
    },
    {
      id: "7",
      name: "Carla Fonseca",
      cpf: "345.678.901-00",
      role: "Visitante",
    },
    {
      id: "8",
      name: "Rafaela Costa",
      cpf: "876.543.210-00",
      role: "Expositor",
    },
    {
      id: "9",
      name: "Mariano Alves",
      cpf: "567.890.123-00",
      role: "Colaborador",
    },
    {
      id: "10",
      name: "Fernando Gomes",
      cpf: "321.987.654-00",
      role: "Visitante",
    },
  ];

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark ">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <tbody>
            {accredited.map((accreditedItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {accreditedItem.name}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium `}
                  >
                    {accreditedItem.role}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button
                      onClick={() => handleNavigation(accreditedItem.id)}
                      className="hover:text-primary"
                    >
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                          fill=""
                        />
                        <path
                          d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                          fill=""
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableEventAccredited;
