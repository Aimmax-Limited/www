import {MdPhone, MdLocationOn, MdEmail} from 'react-icons/md'
import SpotlightCard from './reactbits/spotlight-card'
import StarBorder from './reactbits/star-border'
import FadeContent from './reactbits/FadeContent'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { title } from 'process'

const details = [
    {
        title: 'Contact',
        icon: MdPhone,
        numbers: ['0721 376 993', '0733 796 154','0705 863 394']
    },
    {
        title: 'Email us',
        icon: MdEmail,
        numbers: ['omemcompany@gmail.com', 'aimmaxcom@gmail.com']
    }
    ,{
        title: 'Visit us at',
        icon: MdLocationOn,
        numbers: ['Imenti house', 'Tom Mboya street', 'Room B12', 'Nairobi, Kenya']
    }

]
export default function Details() {
    return(
        <div className='w-full flex  justify-start flex-row gap-5 p-2 bg-[#0A192F]'>
            <div className="font-semibold text-white w-full flex flex-col items-center">
  <h1 className="text-2xl font-satoshi p-2">Reach out to us via</h1>

  <div className="relative w-4/5 flex flex-col lg:flex-row gap-10 sm:gap-5 items-start justify-between p-5 border-white custom-border">

    {/* Decorative Dots */}
    <span className="custom-border-dot dot-1"></span>
    <span className="custom-border-dot dot-2"></span>
    <span className="custom-border-dot dot-3"></span>

    {details.map((detail) => (
      <div
        key={detail.title}
        className="h-[175px] flex flex-col items-start justify-start w-full lg:w-auto"
      >
        <div className="flex w-full p-2">
          <detail.icon />
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          {detail.numbers.map((number) => (
            <p key={number} className="w-full p-1">
              {number}
            </p>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
</div>
        
    )
}