import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex items-center xl:gap-x-5 gap-x-3 text-lg font-thin ">
      <Link
        target="_blank"
        href={""}
        className="hover:text-accent transition-all duration-300"
        aria-label={"linkedin"}
      >
        SOBRE
      </Link>
      <Link
        target="_blank"
        href={""}
        className="hover:text-accent transition-all duration-300"
        aria-label={"instagram"}
      >
        FORMAÇÕES
      </Link>
      <Link
        target="_blank"
        href=""
        className="hover:text-accent transition-all duration-300"
        aria-label={"whatsapp"}
      >
        UNIDADES
      </Link>
      <Link
        target="_blank"
        href="mailto:"
        className="hover:text-accent transition-all duration-300"
        aria-label={"email"}
      >
        CONTATO
      </Link>
    </div>
  );
};

export default Socials;
