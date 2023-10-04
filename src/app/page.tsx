import { Sidebar } from '@/components/sidebar'
import { Button } from '@/components/ui/button'
import { faker } from '@faker-js/faker'
import Image from 'next/image'
import Link from 'next/link'

type MusicRecommendation = {
  name: string
  artist: string
  image: string
}

export function createRandomMusicRecommendation(): MusicRecommendation {
  return {
    name: faker.music.songName(),
    artist: faker.person.fullName(),
    image: faker.image.url()
  }
}

export default function Home() {
  return (
    <div className="flex flex-col gap-y-8">
      <h1 className="text-2xl font-bold w-full border-b pb-4">Listen Now</h1>
      <div className="flex flex-col gap-y-4">
        <h2 className="text-xl font-bold">For you</h2>
        <div className="flex flex-row flex-nowrap overflow-x-auto gap-x-6">
          {
            faker.helpers.multiple(createRandomMusicRecommendation, { count: 4 }).map(x => (
              <Link href='/' key={x.name} className="flex flex-shrink-0 flex-col rounded-md hover:underline hover:cursor-pointer max-w-[226px]">
                <div className='relative'>
                  <img className='w-72 h-60 rounded-sm' src={x.image} alt="" />
                  <div className="absolute bottom-2 w-full px-4">
                    <div className="flex flex-row justify-between text-xs">
                      <Button variant='secondary' className='rounded-full px-3 py-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>
                      </Button>
                      <Button variant='secondary' className='rounded-full px-3 py-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                      </Button>
                    </div>

                  </div>
                </div>
                <div className='flex flex-col'>
                  <span className='text-xs'>{x.name}</span>
                  <span className="text-xs text-gray-500">{x.artist}</span>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <h2 className="text-xl font-bold">New music</h2>
        <div className="flex flex-row flex-nowrap overflow-x-auto gap-x-6">
          {
            faker.helpers.multiple(createRandomMusicRecommendation, { count: 4 }).map(x => (
              <Link href='/' key={x.name} className="flex flex-shrink-0 flex-col rounded-md hover:underline hover:cursor-pointer max-w-[226px]">
                <div className='relative'>
                  <img className='w-72 h-60 rounded-sm' src={x.image} alt="" />
                  <div className="absolute bottom-2 w-full px-4">
                    <div className="flex flex-row justify-between text-xs">
                      <Button variant='secondary' className='rounded-full px-3 py-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>
                      </Button>
                      <Button variant='secondary' className='rounded-full px-3 py-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                      </Button>
                    </div>

                  </div>
                </div>
                <div className='flex flex-col'>
                  <span className='text-xs'>{x.name}</span>
                  <span className="text-xs text-gray-500">{x.artist}</span>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}
