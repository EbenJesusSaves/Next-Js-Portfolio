import Image from 'next/image'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export default function Home() {
  return (
  <div className='text-red-700'>Say my name again </div>
  )
}
