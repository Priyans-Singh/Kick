import Image from "next/image";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-stone-200 w-full items-center flex-col bg-muted/40">
      <Header />
      <main className="mx-auto flex flex-col items-center gap-4 sm:px-6 sm:py-0 md:gap-8">
        {/* Hero section */}
        <div className="flex w-ful flex-col items-center">
          <div className="text-cente">
            <h1 className="text-[225px] font-bold">
              <span className="text-black">DO IT</span>{" "}
              <span className="text-red-600">RIGHT</span>
            </h1>
          </div>
          <div className="relative mt-5">
            <Image
              src="/heroShoe.svg"
              height={800}
              width={1350}
              alt="Nike Air Max shoe on a yellow fabric background"
              className="rounded-lg"
            />
            <div className="absolute -rotate-90 top-40 -left-28 bg-black text-white text-[20px] font-normal px-2 py-3 text-xs rounded-br-lg">
              Nike product of the year
            </div>
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-[74px] font-semibold">NIKE AIR MAX</h2>
              <p className="text-[24px] font-normal w-3/4">
                Nike introducing the new air max for everyone&apos;s comfort
              </p>
              <Button className="mt-4 bg-red-600 text-white text-[14px] font-normal px-4 py-2 rounded">
                SHOP NOW
              </Button>
            </div>
            <div className="absolute bottom-10 right-10 flex flex-col space-y-2">
              <Image
                src="/Rectangle 2.png"
                height={160}
                width={160}
                alt="Side view of Nike Air Max shoe"
                className="rounded-lg"
              />
              <Image
                src="/Rectangle 1.png"
                height={160}
                width={160}
                alt="Back view of Nike Air Max shoe"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Shop section */}
        <div className="p-8 flex flex-col gap-3 items-center">
          <div className="flex w-full px-4 justify-between items-end">
            <h1 className="text-6xl w-2/4 font-bold mb-4">
              DON&apos;T MISS OUT NEW DROPS
            </h1>
            <div className="flex justify-end mb-8">
              <button className="bg-red-500 text-white py-2 px-4 rounded">
                SHOP NEW DROPS
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="max-w-sm items-center flex flex-col gap-3 px-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#" className="bg-white p-3 rounded-3xl">
                <Image
                  className="bg-white"
                  height={350}
                  width={318}
                  src="/ShopShoe1.png"
                  alt="1st page"
                />
              </a>
              <a href="#">
                <h5 className="my-2 text-2xl font-semibold text-wrap text-gray-900 dark:text-white">
                  ADIDAS 4DFWD X PARLEY RUNNING SHOES
                </h5>
              </a>
              <Button className="inline-flex w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                VIEW PRODUCT
              </Button>
            </div>
            <div className="max-w-sm items-center flex flex-col gap-3 px-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#" className="bg-white p-3 rounded-3xl">
                <Image
                  className="bg-white"
                  height={350}
                  width={318}
                  src="/ShopShoe2.png"
                  alt="1st page"
                />
              </a>
              <a href="#">
                <h5 className="my-2 text-2xl font-semibold text-wrap text-gray-900 dark:text-white">
                  ADIDAS 4DFWD X PARLEY RUNNING SHOES
                </h5>
              </a>
              <Button className="inline-flex w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                VIEW PRODUCT
              </Button>
            </div>
            <div className="max-w-sm items-center flex flex-col gap-3 px-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#" className="bg-white p-3 rounded-3xl">
                <Image
                  className="bg-white"
                  height={350}
                  width={318}
                  src="/ShopShoe3.png"
                  alt="1st page"
                />
              </a>
              <a href="#">
                <h5 className="my-2 text-2xl font-semibold text-wrap text-gray-900 dark:text-white">
                  ADIDAS 4DFWD X PARLEY RUNNING SHOES
                </h5>
              </a>
              <Button className="inline-flex w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                VIEW PRODUCT
              </Button>
            </div>
            <div className="max-w-sm items-center flex flex-col gap-3 px-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#" className="bg-white p-3 rounded-3xl">
                <Image
                  className="bg-white"
                  height={350}
                  width={318}
                  src="/ShopShoe4.png"
                  alt="1st page"
                />
              </a>
              <a href="#">
                <h5 className="my-2 text-2xl font-semibold text-wrap text-gray-900 dark:text-white">
                  ADIDAS 4DFWD X PARLEY RUNNING SHOES
                </h5>
              </a>
              <Button className="inline-flex w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                VIEW PRODUCT
              </Button>
            </div>
          </div>
        </div>

        {/* Categories section */}
        <div className="bg-gray-900 w-full min-h-screen flex flex-col items-end">
          <div className="flex justify-between  w-full items-end px-[28px]">
            <div className="text-[74px] text-white font-semibold ">
              CATEGORIES
            </div>
            <div className=" flex gap-2 items-center">
              <Button className="p-5 rounded-md bg-slate-400 text-black ">
                <i className="fas fa-chevron-left"></i>
              </Button>
              <Button className="p-5 rounded-md bg-white ">
                <i className="fas fa-chevron-right"></i>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
