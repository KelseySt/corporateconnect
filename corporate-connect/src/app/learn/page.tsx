"use client"
import { roboto_flex } from '../fonts'
import {Card, CardHeader, CardBody, CardFooter, Image} from "@heroui/react";
import { BookOpenText, HandCoins } from "@phosphor-icons/react";
import { useRouter } from 'next/navigation';

const chapterList = [
    {
        chapterNum: "1",
        topic: "Balance Sheets",
        desc: "Learn how to breakdown a Balance Sheet into key metrics for analysis",
        img: '/images/balance-sheet-icon.png'
    },
    {
        chapterNum: "2",
        topic: "EPITDA Calculator",
        desc: "Examine a tool to calculate key metrics to gauge company health",
        img: '/images/ebitda-icon.png'
    }
];

export default function Learn() {
    const router = useRouter();
  return (
    <div className="">
      <h1 className='text-7xl my-10 ml-10'>Learn</h1>
      <div className='block justify-center sm:flex sm:justify-around lg:justify-start lg:gap-14 lg:ml-10'>
      {chapterList.map((e) => {
        return(   
        <Card key={e.chapterNum} isPressable className="bg-lpurple p-3 rounded-2xl" onPress={() => router.push(`/learn/${e.chapterNum}/`)}>
        <CardHeader className=" py-2 px-4 flex-col items-start">
            <p className="text-3xl font-bold">{e.topic}</p>
            <p className={`${roboto_flex.className} text-default-500 max-w-[270px]`}>{e.desc}</p>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
            <Image
            alt="Card background"
            className="object-cover rounded-xl mt-4"
            src={e.img}
            width={270}
            />
        </CardBody>
        </Card>
        );
      })}
      </div>

    </div>
  );
}
