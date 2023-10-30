"use client";
import { VectorMap } from "@react-jvectormap/core";
import React from "react";
import { brMill } from "@react-jvectormap/brazil";

const MapOne = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Eventos por Região Geográfica
      </h4>
      <div id="mapOne" className="mapOne map-btn h-90">
        <VectorMap
          // @ts-ignore
          map={brMill}
          backgroundColor="white"
          regionStyle={{
            initial: {
              fill: "#D1D5DB",
            },
            hover: {
              fillOpacity: 1,
              fill: "blue",
            },
            selected: {
              fill: "#FFFB00",
            },
          }}
          onRegionTipShow={function reginalTip(event, label, code) {
            //@ts-ignore
            return label.html(`
                  <div style="background-color: #F8FAFC; color: black; padding: 2px 8px"; >
                    ${
                      //@ts-ignore
                      label.html()
                    }
                  </div>`);
          }}
        />
      </div>
    </div>
  );
};

export default MapOne;

// import { VectorMap } from "@react-jvectormap/core";
// import React from "react";
// import { brMill } from "@react-jvectormap/brazil";

// const MapOne = () => {
//   // Dados das marcações (lat, long, nome)
//   const markers = [
//     { latLng: [-15.7801, -47.9292], name: "Brasília" },
//     { latLng: [-23.5505, -46.6333], name: "São Paulo" },
//     { latLng: [-22.9083, -43.1964], name: "Rio de Janeiro" },
//     // Adicione mais marcadores conforme necessário
//   ];

//   // Estilos personalizados para os marcadores
//   const markerStyle = {
//     initial: {
//       fill: "red", // Cor de preenchimento inicial
//       stroke: "white", // Cor da borda inicial
//       "fill-opacity": 1, // Opacidade de preenchimento inicial
//       "stroke-width": 2, // Largura da borda inicial
//       r: 8, // Raio do marcador
//     },
//     hover: {
//       fill: "blue", // Cor de preenchimento durante a interação
//       "stroke-opacity": 1, // Opacidade da borda durante a interação
//     },
//   };

//   return (
//     <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
//       <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
//         Eventos por Região Geográfica
//       </h4>
//       <div id="mapOne" className="mapOne map-btn h-90">
//         <VectorMap
//           map={brMill}
//           backgroundColor="white"
//           regionStyle={{
//             initial: {
//               fill: "#D1D5DB",
//             },
//             hover: {
//               fillOpacity: 1,
//               fill: "red",
//             },
//             selected: {
//               fill: "#FFFB00",
//             },
//           }}
//           // markers={markers} // Passar os dados das marcações
//           markerStyle={markerStyle} // Estilos personalizados para os marcadores
//           containerStyle={{
//             width: "100%",
//             height: "100%",
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default MapOne;
