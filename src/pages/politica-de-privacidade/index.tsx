import Seo from "@/components/Other/Seo";
import ToastBuy from "@/components/Other/Toast/BuyToast";
import Footer from "@/components/Template/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Toaster } from "react-hot-toast";

const HomePage = () => {
	return (
		<>
			{!process.env.NEXT_PUBLIC_DEVELOPMENT && (
				<Toaster position="bottom-left" reverseOrder={false} />
			)}
			<ToastBuy />
			<Analytics />
			<Seo
				title={"Homepage"}
				description="Se sente frustrado pois chega no final do dia e algumas conversas ficaram sem resposta? O SMVZAP traz a simplicidade que você precisa para transformar seu atendimento no WhatsApp."
			/>
			<FloatingWhatsApp
				notificationDelay={5}
				notificationSound
				statusMessage="Respondo em menos de 15 minutos"
				notification
				accountName="SMV Suporte"
				phoneNumber="+55 11 91773-5588"
				avatar="/smv/logo-light.png"
				chatMessage="Olá, tudo bem?! 🤝
        Como posso te ajudar?!"
				placeholder="Quero assinar..."
				darkMode
				buttonClassName="mb-[90px] lg:mb-0"
			/>
			<div className="flex flex-col py-28 container gap-6 mx-auto">
				<h1 className="h1">Política Privacidade</h1>
				<p>
					A sua privacidade é importante para nós. É política do
					smvzap respeitar a sua privacidade em relação a qualquer
					informação sua que possamos coletar no site smvzap, e outros
					sites que possuímos e operamos.
				</p>
				<p>
					Solicitamos informações pessoais apenas quando realmente
					precisamos delas para lhe fornecer um serviço. Fazemo-lo por
					meios justos e legais, com o seu conhecimento e
					consentimento. Também informamos por que estamos coletando e
					como será usado.
				</p>
				<p>
					Apenas retemos as informações coletadas pelo tempo
					necessário para fornecer o serviço solicitado. Quando
					armazenamos dados, protegemos dentro de meios comercialmente
					aceitáveis ​​para evitar perdas e roubos, bem como acesso,
					divulgação, cópia, uso ou modificação não autorizados.
				</p>
				<p>
					Não compartilhamos informações de identificação pessoal
					publicamente ou com terceiros, exceto quando exigido por
					lei.
				</p>
				<p>
					O nosso site pode ter links para sites externos que não são
					operados por nós. Esteja ciente de que não temos controle
					sobre o conteúdo e práticas desses sites e não podemos
					aceitar responsabilidade por suas respectivas políticas de
					privacidade.
				</p>
				<p>
					Você é livre para recusar a nossa solicitação de informações
					pessoais, entendendo que talvez não possamos fornecer alguns
					dos serviços desejados.
				</p>
				<p>
					O uso continuado de nosso site será considerado como
					aceitação de nossas práticas em torno de privacidade e
					informações pessoais. Se você tiver alguma dúvida sobre como
					lidamos com dados do usuário e informações pessoais, entre
					em contato conosco.
				</p>
				<ul className="pl-6 gap-3 flex flex-col list-disc">
					<li>
						O serviço Google AdSense que usamos para veicular
						publicidade usa um cookie DoubleClick para veicular
						anúncios mais relevantes em toda a Web e limitar o
						número de vezes que um determinado anúncio é exibido
						para você.
					</li>
					<li>
						Para mais informações sobre o Google AdSense, consulte
						as FAQs oficiais sobre privacidade do Google AdSense.
					</li>
					<li>
						Utilizamos anúncios para compensar os custos de
						funcionamento deste site e fornecer financiamento para
						futuros desenvolvimentos. Os cookies de publicidade
						comportamental usados ​​por este site foram projetados
						para garantir que você forneça os anúncios mais
						relevantes sempre que possível, rastreando anonimamente
						seus interesses e apresentando coisas semelhantes que
						possam ser do seu interesse.
					</li>
					<li>
						Vários parceiros anunciam em nosso nome e os cookies de
						rastreamento de afiliados simplesmente nos permitem ver
						se nossos clientes acessaram o site através de um dos
						sites de nossos parceiros, para que possamos creditá-los
						adequadamente e, quando aplicável, permitir que nossos
						parceiros afiliados ofereçam qualquer promoção que pode
						fornecê-lo para fazer uma compra.
					</li>
				</ul>
				<h2 className="h2">Compromisso do Usuário</h2>
				<p>
					O usuário se compromete a fazer uso adequado dos conteúdos e
					da informação que o smvzap oferece no site e com caráter
					enunciativo, mas não limitativo:
				</p>
				<ul className="pl-6 gap-3 flex flex-col list-disc">
					<li>
						Não se envolver em atividades que sejam ilegais ou
						contrárias à boa fé a à ordem pública
					</li>
					<li>
						Não difundir propaganda ou conteúdo de natureza racista,
						xenofóbica, bbebbet ou azar, qualquer tipo de
						pornografia ilegal, de apologia ao terrorismo ou contra
						os direitos humanos;
					</li>
					<li>
						Não causar danos aos sistemas físicos (hardwares) e
						lógicos (softwares) do smvzap, de seus fornecedores ou
						terceiros, para introduzir ou disseminar vírus
						informáticos ou quaisquer outros sistemas de hardware ou
						software que sejam capazes de causar danos anteriormente
						mencionados.
					</li>
				</ul>
				<h2 className="h2">Compromisso do Usuário</h2>
				<p>
					Esperemos que esteja esclarecido e, como mencionado
					anteriormente, se houver algo que você não tem certeza se
					precisa ou não, geralmente é mais seguro deixar os cookies
					ativados, caso interaja com um dos recursos que você usa em
					nosso site.
				</p>
				<p>Esta política é efetiva a partir de 8 April 2024 14:24</p>
			</div>

			<Footer />
		</>
	);
};

export default HomePage;
