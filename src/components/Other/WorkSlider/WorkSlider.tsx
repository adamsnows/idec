// import React, { useState } from "react";
// import { RiArrowRightLine } from "react-icons/ri";
// import { licencas } from "@/data/optimal-plans";
// import { FaCheck } from "react-icons/fa";
// import { Fire } from "../TestButton/TestButton";
// import { Modal } from "rizzui";
// import LeadsCaptureModal from "../Modals/Leads";

// const benefits = [
//   "Agendamento de mensagens recorrentes ou não",
//   "Exportação de contatos",
//   "Criação de abas personalizadas",
//   "Envio de mensagens para números que não estejam na sua agenda",
//   "Criação de notas para cada contato",
//   "Criação de lembrete",
//   "Funil de respostas rápidas de texto, áudio, foto, etc com 1 clique",
//   "Integração com o Google agenda",
//   "Uso em seu idioma nativo (português, espanhol, inglês)",
// ];

// const OptimalPlan = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState(null);

//   const openModal = (plan: any) => {
//     setSelectedPlan(plan);
//     setIsOpen(true);
//   };

//   return (
//     <div className="flex gap-4 lg:flex-row-reverse flex-col">
//       <div className=" bg-white p-4 mx-auto w-full">
//         <div className="flex flex-col gap-4 text-sm lg:text-base leading-6">
//           {benefits?.map((beneficio, index, array) => (
//             <div key={index}>
//               <span className="flex gap-2 h-full items-center text-black">
//                 <FaCheck className="text-[#32CD32] shrink-0 " />
//                 {beneficio}
//               </span>
//               {index !== array.length - 1 && (
//                 <div className="border-b border-gray-700 border-opacity-20 my-2 border-dashed" />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="flex flex-col justify-between lg:w-[350px]">
//         {licencas.map((item, index) => (
//           <div
//             className={`bg-white backdrop-blur-sm p-1 flex flex-col gap-x-6 sm:gap-x-0 group cursor-pointer transition-all duration-300 text-gray-900   ${
//               item.usuarios == 1 &&
//               "animate__animated animate__wobble animate__delay-4s animate__repeat-3 animate__slower"
//             }`}
//             key={index}
//           >
//             <div className="flex flex-col">
//               <div className="text-lg text-black font-semibold text-center text-nowrap">
//                 {item.nome}
//               </div>
//               <div className="text-center text-gray-400">
//                 {item.parcelamento && (
//                   <>
//                     de <span className="line-through">{item.parcelamento}</span>
//                   </>
//                 )}
//               </div>

//               {item.condicaoEspecial && (
//                 <div className="flex items-center justify-center text-nowrap bg-primary hover:bg-accent mb-2">
//                   <span className="text-accent hover:text-primary p-3 animate-pulse">
//                     CONDIÇÃO ESPECIAL
//                   </span>
//                   {item.condicaoEspecial && <Fire />}
//                 </div>
//               )}

//               <div className="text-center">{item.valorAVista}</div>

//               {/*  */}
//             </div>
//             <div className="text-lg mt-auto flex items-center justify-center gap-2 text-nowrap w-full  bg-[#32CD32] hover:bg-[##32CD32] transition duration-500">
//               <button
//                 className="flex mx-auto items-center justify-center gap-2 p-2"
//                 onClick={() => openModal(item)} // Passa o plano selecionado para a função openModal
//               >
//                 <>
//                   <span>ASSINAR AGORA</span>
//                   <RiArrowRightLine className="group-hover:-rotate-45 group-hover:text-white transition-all duration-300 text-2xl " />
//                 </>
//               </button>
//             </div>
//           </div>
//         ))}

//         {/* Modal */}
//         <Modal
//           isOpen={isOpen}
//           onClose={() => setIsOpen(false)}
//           overlayClassName="dark:bg-opacity-20 bg-[#1e1e1d] dark:backdrop-blur-sm"
//           containerClassName="bg-[#1e1e1d] overflow-hidden dark:backdrop-blur-xl border border-accent"
//           className="z-[9999]"
//           size="sm"
//         >
//           {selectedPlan && (
//             <LeadsCaptureModal
//               onClose={() => setIsOpen(false)}
//               license={selectedPlan}
//             />
//           )}
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default OptimalPlan;
const test = () => {
  return <></>;
};

export default test;
<></>;
