import Link from "next/link";
import {
  RiLinkedinLine,
  RiFacebookLine,
  RiInstagramLine,
  RiGithubLine,
  RiTwitterLine,
  RiMailLine,
  RiWhatsappLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center xl:gap-x-5 gap-x-3 text-lg ">
      <Link
        target="_blank"
        href={"https://www.linkedin.com/company/supermegavendas"}
        className="hover:text-accent transition-all duration-300"
        aria-label={"linkedin"}
      >
        SOBRE
      </Link>
      <Link
        target="_blank"
        href={"https://www.instagram.com/supermegavendas/"}
        className="hover:text-accent transition-all duration-300"
        aria-label={"instagram"}
      >
        FORMAÇÕES
      </Link>
      <Link
        target="_blank"
        href="https://wa.me/5511917735588?text=Ol%C3%A1%2C+gostaria+de+saber+sobre+o+SMV+Zap"
        className="hover:text-accent transition-all duration-300"
        aria-label={"whatsapp"}
      >
        UNIDADES
      </Link>
      <Link
        target="_blank"
        href="mailto:contato@supermegavendas.com"
        className="hover:text-accent transition-all duration-300"
        aria-label={"email"}
      >
        CONTATO
      </Link>
    </div>
  );
};

export default Socials;
