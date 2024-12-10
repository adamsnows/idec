import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "@/validators/sendEmail";
import Swal from "sweetalert2";

import { fadeIn } from "@/components/Animations/FadeIn";
import { SendEmailInterface } from "@/interfaces/SendEmailInterface";
import { useRouter } from "next/router";

const Contact = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SendEmailInterface>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SendEmailInterface> = (data) => {
    const templateParams = {
      name: data.name,
      subject: data.subject,
      message: data.message,
      email: data.email,
      url: window.location.href,
    };

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error(
        "Variáveis de ambiente não estão definidas corretamente."
      );
    }

    emailjs
      .send(
        serviceId.toString(),
        templateId.toString(),
        templateParams,
        publicKey.toString()
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sua mensagem foi enviada com sucesso! Obrigado",
            showConfirmButton: false,
            width: 600,
            padding: "3em",
            color: "#fff",
            background: "#0b0d0e",
            backdrop: "rgba(0,0,0,0.4)",
            timer: 1500,
          });
          router.push("/");
        },
        (err) => {
          console.log("ERROR", err);
        }
      );
  };

  return (
    <div
      id="contact"
      className="flex h-[inherit] text-center xl:text-left mb-20 lg:mb-0 "
    >
      <div className="container mx-auto py-10 xl:pb-10 flex flex-col items-center xl:flex-row gap-x-6 flex-1 mt-14">
        <motion.div
          variants={fadeIn("right", 1)}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          exit="hidden"
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full"
        >
          <div className="flex w-full flex-1 flex-col gap-8">
            <div className="flex flex-col w-full">
              <h2 className="h2 text-center xl:mb-12 mb-6">
                Fale agora com <span className="text-accent">nosso time.</span>
              </h2>
              <motion.form
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                onSubmit={handleSubmit(onSubmit)}
                className="flex-1 flex flex-col gap-6 w-full mx-auto"
              >
                <div className="flex gap-x-6 w-full">
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="text"
                        placeholder="Nome"
                        className={
                          errors.name
                            ? "input border-red/20 rounded-none"
                            : "input rounded-none"
                        }
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="text"
                        placeholder="Email"
                        className={
                          errors.email
                            ? "input border-red/20 rounded-none"
                            : "input rounded-none"
                        }
                        {...field}
                      />
                    )}
                  />
                </div>
                <Controller
                  name="subject"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="text"
                      placeholder="Assunto"
                      className={
                        errors.subject
                          ? "input border-red/20 rounded-none"
                          : "input rounded-none"
                      }
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      className={
                        errors.message
                          ? "textarea border-red/20 rounded-none"
                          : "textarea rounded-none"
                      }
                      placeholder="Mensagem"
                      cols={30}
                      rows={10}
                      {...field}
                    ></textarea>
                  )}
                />
                <button
                  type="submit"
                  className="bg-white/10 backdrop-blur-sm btn  border border-white/20 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mx-auto text-gray-300 "
                >
                  <span className="transition-all duration-300">Enviar</span>
                </button>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
