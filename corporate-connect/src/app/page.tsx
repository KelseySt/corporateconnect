import Image from "next/image";
import { roboto_flex } from './fonts'

export default function Home() {
  return (
    <div className="text-3xl">
      <p>Test2</p>
      <br></br>
      <p className={`${roboto_flex.className} text-3xl`}>Test3</p>
    </div>
  );
}
