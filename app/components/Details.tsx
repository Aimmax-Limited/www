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
        <div className='w-full flex  justify-start flex-row gap-5 p-4'>
            <div className='w-full flex flex-col'>
                <div color='red' className=" font-semibold text-white w-full">
                    <h1>Reach us at</h1>
                <div className='font-satoshi font-medium text-lg gap-10 flex  flex-col items-start p-5 lg:flex-row justify-start bg-red-200'>
            {
               details.map((detail,index) => (
                <div key={index} className='self-start w-full h-[250px] flex flex-col items-center justify-center border-0 backdrop-blur-lg'>
                    <div className='flex w-full p-2 bg-gray-400'>
                        <detail.icon/>
                        </div>
                    <div className='w-full  flex flex-col justify-center items-center'>
                        {detail.numbers.map((number) => (
                        <p className='w-full p-1'>{number}</p>
                    ))}
                    </div>
                    
                </div>
               )) 
            }
            
        </div>
        
        </div>
        </div>
            
        </div>
        
    )
}