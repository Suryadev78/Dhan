import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-black text-white rounded-full">
      <div className="container flex justify-center items-center gap-2   mx-auto px-2">
        <Image
          src="/img/1718366612733.jpg"
          alt="Footer Image"
          width={30}
          height={30}
          // Adjust height as needed
          className="my-2  rounded-full"
        />
        <h2 className="text-center text-sm font-semibold">
          Created By Suryadev Pandey
        </h2>
      </div>
    </footer>
  );
}
