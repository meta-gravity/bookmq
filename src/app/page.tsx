import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import { Theme, Button, Text } from '@radix-ui/themes'


export default function Home() {
  return (
    <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
      <div className='space-x-5'>
        {/* text-center cursor-grab -[102px]  */}
        <h1 className="text-zinc-800 text-[114px] dark:text-[#2F2F2F] font-semibold">Bookmq</h1>
        <p className='text-center text-small font-mono'>welcome to{ " " }
          <span className='justify center items-center'>
              <Text className='text-[#E83D22]'>Bookmq</Text>
          </span>
          { " " } - save, organise and reflect
        </p>
        <div className='text-xs text-center item-center py-5 px-5'>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 dark:bg-[#222222] dark:border-[#535353] 
            ring-[1px] dark:ring-[#2B2B2B] dark:text-[#959595] rounded-sm text-sm 
            dark:placeholder-[#3F3F3F] bg-[] ring-[#C3C3C3] placeholder-[#2B2B2B]
            text-[#B5B5B5] "
          />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
