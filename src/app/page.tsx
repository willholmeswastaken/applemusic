import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className="grid lg:grid-cols-5">
        <div className="pb-12">hi</div>
        <div className="col-span-3 lg:col-span-4 lg:border-l">
          <div className="h-full px-4 py-6 lg:px-8">
            hellor
          </div>
        </div>
      </div>
    </main>
  )
}
