export const workSlider = {
  slides: [
    {
      id: "slide1",
      title: (
        <div className="text-gray-300 fixed z-[999] text-center max-w-[200px] flex flex-col group-hover:hidden w-full delay-500 ">
          <span>
            <span className="text-accent">1 LICENÇA ANUAL</span> <br />
            Até 6x de R$ 65,00 <br />
            Ou à vista por R$297,00
          </span>

          <span className="text-xs text-gray-300 mt-10">
            Passe o mouse por cima
          </span>
        </div>
      ),
      description: (
        <p className="text-gray-300 text-left">
          <strong>Usuário Premium</strong>
          <br />
          Agendamento de mensagens
          <br />
          Exportação de contatos
          <br />
          Criação de abas personalizadas
          <br />
          Envio de mensagens para números que não estejam na sua agenda
          <br />
          Criação de notas para cada contato
          <br />
          Criação de lembrete
          <br />
          Funil de respostas rápidas de texto, áudio, foto, etc com 1 clique
          <br />
          Integração com o Google agenda
          <br />
          Uso em seu idioma nativo (português, espanhol, inglês)
        </p>
      ),
      images: [
        {
          id: "image1",
          title: "Portfolio Open Source",
          path: "/portfolio-purple.webp",
          href: "#",
        },
        {
          id: "image2",
          title: "YRprey",
          path: "/yrprey.webp",
          href: "#",
        },
        {
          id: "image3",
          title: "Portfolio Open Source",
          path: "/portfolio-blue.webp",
          href: "#",
        },
        {
          id: "image4",
          title: "Dogma",
          path: "/dogma.webp",
          href: "#",
        },
      ],
    },
    {
      id: "slide2",
      description:
        "1 LICENÇA ANUAL\nAté 6x de R$ 65,00\nOu à vista por R$297,00\n1 Usuário Premium\nAgendamento de mensagens recorrentes ou não\nExportação de contatos\nCriação de abas personalizadas\nEnvio de mensagens para números que não estejam na sua agenda.\nCriação de notas para cada contato.\nCriação de lembrete.\nFunil de respostas rápidas de texto, áudio, foto, etc com 1 clique\nIntegração com o Google agenda\nUso em seu idioma nativo (português, espanhol,inglês).",
      images: [
        {
          id: "image1",
          title: "Portfolio Open Source",
          path: "/portfolio-green.webp",
          href: "https://developer-green-portfolio-vagnermengali.vercel.app/",
        },
      ],
    },
  ],
};
