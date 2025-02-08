"use client";
import { useState } from "react";
import { Image, Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure, } from "@heroui/react";

import Link from "next/link";


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
      <div className="flex flex-row gap-5">
        <Link href="/learn/1" className="">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M232,200a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,61.66L51.31,96H128A104.11,104.11,0,0,1,232,200Z"></path></svg>
        </Link>
        <h1 className="text-2xl font-bold mb-4">Understanding a Balance Sheet</h1>
      </div>
      <div className="relative">
        <Image
          alt="Balance Sheet"
          src="/images/balance-sheet-walmart.png"
          width={900}
        />

        {data.map(({ id, label, img, content, iconPosition }) => (
            
          <div key={id}>
            <p>Test</p>
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
