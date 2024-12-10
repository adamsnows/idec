interface Licenca {
  nome: string;
  parcelamento?: string;
  valorAVista?: string;
  usuarios?: number | string;
  beneficios?: string[];
  condicaoEspecial?: boolean;
  link: string;
}

export const licencas: Licenca[] = [
  {
    nome: "1 LICENÇA MENSAL",
    parcelamento: "R$ 147,00",
    valorAVista: "R$ 99,00",
    usuarios: 1,
    link: "https://go.smvzap.com/subscribe/mensalidade-smvzap",
  },
  {
    nome: "2 LICENÇAS MENSAIS",
    parcelamento: "R$ 294,00",
    valorAVista: "R$ 198,00",
    usuarios: 2,
    link: "https://go.smvzap.com/subscribe/2-usuarios-smvzap-mensal",
  },
  {
    nome: "3 LICENÇAS MENSAIS",
    parcelamento: "R$ 441,00",
    valorAVista: "R$ 297,00",
    usuarios: 3,
    link: "https://go.smvzap.com/subscribe/3-usuarios-smvzap-mensal",
  },
  {
    nome: "Deseja mais licenças?",
    valorAVista: "Fale conosco!",
    usuarios: 4, //"4 ou mais",
    link: "https://api.whatsapp.com/send/?phone=+55%2011%2091773-5588",
  },
];
