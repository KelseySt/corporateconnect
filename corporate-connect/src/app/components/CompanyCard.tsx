"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";

export default function CompanyCard() {
  return (
    <Card className="py-4 bg-lgrey mx-2 @apply shadow-[0_6px_10px_0_rgba(0,0,0,0.75)] ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large mx-auto text-brightpurple">
          <a href="/company">Company Title</a>
        </h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2h8ZW58MHx8MHx8fDI%3D"
          width={270}
        />
      </CardBody>
    </Card>
  );
}
