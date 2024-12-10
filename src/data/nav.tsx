import {
  RiHome2Line,
  RiUser3Line,
  RiLayout4Line,
  RiTableLine,
  RiChatQuoteLine,
  RiQuestionAnswerLine,
  RiFileHistoryFill,
} from "react-icons/ri";
import { FaQuestion,FaYoutube } from "react-icons/fa";

export const navData = [
  {
    id: "nav1",
    name: "Home",
    sectionId: "home",
    icon: <RiHome2Line className="xl:w-5 w-5" key="home" />,
  },
  {
    id: "nav2",
    name: "Serviços",
    sectionId: "services",
    icon: <RiLayout4Line className="xl:w-5 w-5" key="services" />,
  },
  {
    id: "nav3",
    name: "Sobre",
    sectionId: "about",
    icon: <RiUser3Line className="xl:w-5 w-5" key="about" />,
  },
  {
    id: "nav4",
    name: "Por que escolher?",
    sectionId: "chooser",
    icon: <RiQuestionAnswerLine className="xl:w-5 w-5" key="chooser" />,
  },
  {
    id: "nav5",
    name: "Instruções",
    sectionId: "instructions",
    icon: <FaYoutube className="xl:w-5 w-5" key="instructions" />,
  },
  {
    id: "nav6",
    name: "Indicações",
    sectionId: "indications",
    icon: <RiChatQuoteLine className="xl:w-5 w-5" key="indications" />,
  },
  {
    id: "nav7",
    name: "Planos",
    sectionId: "projects",
    icon: <RiTableLine className="xl:w-5 w-5" key="projects" />,
  },
  {
    id: "nav8",
    name: "Dúvidas frequentes",
    sectionId: "accordion-flush",
    icon: <FaQuestion className="xl:w-5 w-5" key="accordion-flush" />,
  },
  // {
  //   id: "",
  //   name: "História",
  //   sectionId: "history",
  //   icon: <RiFileHistoryFill className="xl:w-5 w-5" key="history" />,
  // },
  // {
  //   id: "",
  //   name: "Contato",
  //   sectionId: "contact",
  //   icon: <RiMailSendLine className="xl:w-5 w-5" key="RiMailSendLine" />,
  // },
];
