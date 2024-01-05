import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'

export default function Home() {
  return (
    <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
      <div className=''>
        <h1 className="text-center cursor-grab font-semibold text-[128px]">Bookmq</h1>
        <p className='text-center text-small font-mono'>welcome to { " " }
        <span className='text-underline text-orange-600 text-de'>
           Bookmq
        </span>
        { " " } - save, organise and reflect</p>
      </div>
    </MaxWidthWrapper>
  )
}
