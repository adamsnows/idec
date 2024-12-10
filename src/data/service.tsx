import {
  RiCodeSSlashFill,
  RiVipDiamondFill,
  RiDatabase2Fill,
  RiMessage2Line,
  RiRocket2Line,
  RiCalendar2Line,
  RiFundsLine,
} from "react-icons/ri";

export const serviceData = [
  {
    id: "service1",
    icon: <RiFundsLine key="Funil de Vendas" />,
    title: "Funil de Vendas",
    description:
      "Organize seus contatos e suas conversas como em um CRM profissional estilo Kanban (Trello)",
  },
  {
    id: "service2",
    icon: <RiCalendar2Line key="aspectRatio" />,
    title: "Agende mensagens",
    description:
      "Jamais esqueça de dar retorno. Agende mensagens de lembrete para cada contato e tenha um atendimento de excelência.",
  },
  {
    id: "service3",
    icon: <RiVipDiamondFill key="pen" />,
    title: "Exporte os contatos",
    description:
      "Exporte contatos de grupos ou por etiquetas para planilhas do Excel e crie um banco de Leads personalizado.",
  },
  {
    id: "service4",
    icon: <RiMessage2Line key="pen" />,
    title: "Mensagens prontas",
    description:
      "Crie mensagens rápidas para enviar aos seus clientes com um clique. Pode ser texto, imagem, vídeo, áudio ou doc.",
  },
  {
    id: "service5",
    icon: <RiRocket2Line key="pen" />,
    title: "Disparo em massa",
    description:
      "Faça disparo em massa com mensagens personalizadas para contatos de grupos, etiquetas, planilhas, etc.",
  },
  {
    id: "service6",
    icon: <RiRocket2Line key="pen" />,
    title: "Anotações",
    description:
      "Crie notas importantes de cada contato e surpreenda-os com detalhes importantes de todo o atendimento.",
  },
];
