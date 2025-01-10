"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  getRandomFullName,
  getRandomNumber,
  getRandomPurchaseDescription,
} from "@/data/purchases";
// import { Fire } from "../TestButton/TestButton";
import Image from "next/image";

const ToastBuy = () => {
  const [isToastVisible, setIsToastVisible] = useState(false);

  useEffect(() => {
    const showRandomToast = () => {
      // Verifica se já há um toast visível
      if (!isToastVisible) {
        setIsToastVisible(true); // Define que um toast está sendo exibido

        const fullName = getRandomFullName();
        const purchaseDescription = getRandomPurchaseDescription();

        // Cria o toast
        toast.custom((t) => (
          <div
            key={t.id}
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start flex-nowrap">
                <div className="flex-shrink-0 pt-0.5">
                  <Image
                    className="h-14 w-14 rounded-full"
                    src="/smv/logo-dark.png"
                    alt=""
                    height={100}
                    width={100}
                    quality={100}
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {fullName}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {purchaseDescription}
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto my-auto border-s px-5 flex items-center justify-center">
              {/* <Fire /> */}
            </div>
          </div>
        ));

        // Tempo de exibição do toast
        const nextInterval = getRandomNumber(5000, 60000);
        setTimeout(() => {
          setIsToastVisible(false); // Define que o toast não está mais sendo exibido
          toast.dismiss(); // Dispensa o toast atual
        }, nextInterval);
      }
    };

    showRandomToast();
  }, [isToastVisible]);

  return <></>;
};

export default ToastBuy;
