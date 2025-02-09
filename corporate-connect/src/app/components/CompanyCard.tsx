"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";

interface InputProps {
  title: string;
  img: string;
}

export default function CompanyCard({ title, img }: InputProps) {
  return (
    <Card className="py-4 bg-lgrey mx-2 @apply shadow-[0_6px_10px_0_rgba(0,0,0,0.75)] ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large mx-auto text-brightpurple">
          <a href="/company">{title}</a>
        </h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={img}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
