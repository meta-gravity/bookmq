import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import { Theme, Button, Text } from '@radix-ui/themes'


export default function Home() {
  return (
    <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
      <div className='space-x-5'>
        <h1 className="text-center cursor-grab font-semibold text-[102px] dark:text-[#2F2F2F] text-[#B4B4B4]">Bookmq</h1>
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
            ring-[0.3px] dark:ring-[#2B2B2B] dark:text-[#7D7D7D] rounded-sm text-sm 
            dark:placeholder-[#3F3F3F] bg-[] ring-[#C3C3C3] placeholder-[#2B2B2B]
            text-[#B5B5B5]"
          />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
