"use client"
import { roboto_flex } from '../../../../fonts';
import {Accordion, AccordionItem} from "@heroui/react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@heroui/react";
import { BookOpenText, HandCoins } from "@phosphor-icons/react";
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

/**
 * Contains Ch1 Quiz content
 */
const quizzes = [
    {
        ch: "1",
        modules: [
            {
                key: 1,
                lessonTitle: "Balance Sheet Breakdown",
                img: "/images/balance-sheet2-icon.png",
                quiz1: [
                    {
                        qNumber: 1,
                        question: "Question 1 here",
                        answers: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
                        correctAnswer: 'Answer B',

                    },
                    {
                        qNumber: 2,
                        question: "Question 2 here",
                        answers: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
                        correctAnswer: 'Answer D',

                    },
                    {
                        qNumber: 3,
                        question: "Question 3 here",
                        answers: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
                        correctAnswer: 'Answer C',

                    },

                ],
                quiz2: "Quiz 2 | 10pts",
            },
            {
                key: 2,
                lessonTitle: "Key Metrics",
                img: "/images/key-metrics-icon.png",
                quiz1: [
                    {
                        qNumber: 1,
                        question: "Question 1 here",
                        answers: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
                        correctAnswer: 'Answer B',

                    },
                    {
                        qNumber: 2,
                        question: "Question 2 here",
                        answers: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
                        correctAnswer: 'Answer D',

                    },
                    {
                        qNumber: 3,
                        question: "Question 3 here",
                        answers: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
                        correctAnswer: 'Answer C',

                    },
                ],
                quiz2: "Quiz 1 | 10pts",
            }
        ],
    }
];


/**
 * Page with Quiz
 */
export default function Quiz() {
    const router = useRouter();
    const params = useParams();
    const chapter = params.chapter; // Ex. 1 is Balance 2 is EBITDA
    const module = params.lesson;
    const quizSelected = params.quiz;
  return (
    <div className="">
      <div className="flex flex-row gap-5">
        <Link href="/learn/1" className="my-auto ml-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#000000" viewBox="0 0 256 256"><path d="M232,200a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,61.66L51.31,96H128A104.11,104.11,0,0,1,232,200Z"></path></svg>
        </Link>
        <h1 className='text-7xl my-10'>Quiz {quizSelected} </h1>
      </div>
      <div className='block space-y-6 mx-5'>
        
      {quizzes[0].modules[Number(module) - 1].quiz1.map((e) => {
        return(
        <Card className="bg-lpurple p-3 rounded-2xl">
        <CardHeader className=" py-2 px-4 flex-col items-start">
            <h1>Question {e.qNumber}</h1>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
            {e.answers.map((a) => {
                return(
                    <div className={`${roboto_flex}`}>
                        <p>{a}</p>
                    </div>
                );
            })}        
        </CardBody>
        </Card>
        );
      })}
      </div>

    </div>
  );
}
