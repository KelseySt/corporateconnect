"use client";
import { useState } from "react";
import { Image } from "@heroui/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export default function BalanceSheetPage() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const data = [
    {
      id: "totalAssets",
      label: "Total Assets",
      img: "/images/assets.png",
      content:
        "Total Assets represent everything a company owns with value, such as cash, inventories, properties, and equipment.",
      iconPosition: { top: "285px", left: "0px" },
    },
    {
      id: "totalLiabilities",
      label: "Total Liabilities",
      img: "/images/liabilities.png",
      content:
        "Liabilities are debts and obligations the company owes, like loans, accounts payable, and accrued expenses.",
      iconPosition: { top: "450px", left: "20px" },
    },
    {
      id: "accountsPayable",
      label: "Accounts Payable",
      img: "/images/payable.png",
      content:
        "Accounts Payable shows the company’s unpaid bills to suppliers or vendors for goods and services received.",
      iconPosition: { top: "360px", left: "20px" },
    },
    {
      id: "equity",
      label: "Equity",
      img: "/images/equity.png",
      content:
        "Equity is the remaining value for shareholders after all liabilities have been paid off.",
      iconPosition: { top: "725px", left: "20px" },
    },
  ];

  const handleOpen = (id: string) => {
    setActiveCard(id);
    onOpen();
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Understanding a Balance Sheet</h1>

      <div className="relative">
        <Image
          alt="Balance Sheet"
          src="/images/balance-sheet-walmart.png"
          width={900}
        />

        {data.map(({ id, label, img, content, iconPosition }) => (
          <div key={id}>
            
            <div
              className="absolute cursor-pointer text-xl font-bold bg-lpurple text-white rounded-full w-6 h-6 flex justify-center items-center hover:bg-dpurple transition"
              style={iconPosition}
              onClick={() => handleOpen(id)}
              title={label}
            >
              ?
            </div>

            <Modal className="bg-lgrey m-48 p-14 justify-center rounded-2xl" isOpen={isOpen && activeCard === id} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="text-2xl">
                      {label}
                    </ModalHeader>
                    <ModalBody>
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={img}
                    width={260}
                    />
                      <p className="max-w-[260px]">{content}</p>
                    </ModalBody>
                    <ModalFooter>
                      <Button className="bg-lpurple hover:text-white rounded-lg px-4 py-1" onPress={onClose}>
                        Got it!
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
}
