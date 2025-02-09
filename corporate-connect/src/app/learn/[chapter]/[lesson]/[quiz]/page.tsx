"use client"
import { roboto_flex } from '../../../../fonts';
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@heroui/react";
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from "react";

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
                        question: "What does the Current Ratio measure?",
                        answers: ['Amount of cash flow from operations', 
                            'A company\'s ability to cover short-term liabilities with assets', 
                            'Long-term profitability of a company', 
                            'Total revenue generated from investments'],
                        correctAnswer: 1,
                        img: '/images/current-ratio.png'
                    },
                    {
                        qNumber: 2,
                        question: "What does Accounts Payable refer to on a Balance Sheet",
                        answers: ['Long-term debt accumulated in accounts to be paid later', 
                            'The accounts of company employees', 
                            'Total assets compared to total liabilities', 
                            'The amount of short-term debt or money owed to suppliers and creditors by a company'],
                        correctAnswer: 3,
                        img: '/images/balance-sheet-accounts.png'

                    },
                    {
                        qNumber: 3,
                        question: "What category does the inventory of a company belong to?",
                        answers: ['Liabilities', 'Equity', 'Assets', 'Profit'],
                        correctAnswer: 2,
                        img: '/images/inventory.png'
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
                        question: "What does the ",
                        answers: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
                        correctAnswer: 'Answer B',
                        img: '/images/current-ratio.png'

                    },
                    {
                        qNumber: 2,
                        question: "Question 2 here",
                        answers: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
                        correctAnswer: 'Answer D',
                        img: '/images/current-ratio.png'

                    },
                    {
                        qNumber: 3,
                        question: "Question 3 here",
                        answers: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
                        correctAnswer: 'Answer C',
                        img: '/images/current-ratio.png'

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

    const [selected, setSelectedAnswers] = useState({});
    const [score, setScore] = useState(0);

    const handleAnswerClick = (qIndex, aIndex, correctAnswer) => {
        if (selected[qIndex] !== undefined) return;
    
        setSelectedAnswers((prev) => ({ ...prev, [qIndex]: aIndex }));
    
        if (aIndex === correctAnswer) {
          setScore((prevScore) => prevScore + 1);
        }
      };

  return (
    <div className="justify-items-center">
      <div className="flex flex-row gap-5 mr-8">
        <Link href="/learn/1" className="my-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#000000" viewBox="0 0 256 256"><path d="M232,200a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,61.66L51.31,96H128A104.11,104.11,0,0,1,232,200Z"></path></svg>
        </Link>
        <h1 className='text-7xl my-10'>Quiz {quizSelected} </h1>
      </div>

      <div className='block space-y-6 mx-5'>
        
      {quizzes[0].modules[Number(module) - 1].quiz1.map((e, qIndex) => {
        return(
        <Card key={qIndex} className="bg-lpurple p-3 rounded-2xl max-w-2xl">
        <CardHeader className=" py-2 px-4 flex-col items-center">
            <h1 className='mb-4'>Question {e.qNumber}: {e.question}</h1>
            <Image
                alt="Quiz Question Image"
                className="object-cover rounded-xl mx-auto opacity-100"
                src={e.img}
                width={250}
              />
        </CardHeader>
        <CardBody className="overflow-visible py-2">
            {e.answers.map((a, aIndex) => {
                const isSelected = selected[qIndex] !== undefined;
                const isCorrect = e.correctAnswer === aIndex;
                const isUserChoice = selected[qIndex] === aIndex;

                let bgColor = "bg-white";
                if(isSelected) {
                    if(isCorrect) bgColor = "bg-green-500 text white";
                    else if(isUserChoice) bgColor = "bg-red-500 text white";
                }

                return(
                    <div key={aIndex} className={`${roboto_flex} hover:bg-dpurple hover:text-llgrey hover:rounded-md hover:p-1 transition`}
                        onClick={() => handleAnswerClick(qIndex, aIndex, e.correctAnswer)}>
                        <p>{a}</p>
                    </div>
                );
            })}        
        </CardBody>
        </Card>
        );
      })}
      </div>

      {Object.keys(selected).length === quizzes[0].modules[Number(module) - 1].quiz1.length && (
        <div className="text-center text-black my-6">
          <h2 className="text-3xl font-bold">
            Final Score: {score} / {quizzes[0].modules[Number(module) - 1].quiz1.length}
          </h2>
        </div>
      )}
    </div>
   
  );
}
