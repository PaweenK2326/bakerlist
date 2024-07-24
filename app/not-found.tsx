import Image from "next/image";
import notFoundImg from "@/public/yuki-not-found.jpg";

export default function NotFound() {
  return (
    <>
      <Image src={notFoundImg} alt="not-found-image" className="w-full" />
      <h1 className="absolute top-1/2 left-1/2 text-5xl">Not found ก้ะ</h1>
    </>
  );
}
