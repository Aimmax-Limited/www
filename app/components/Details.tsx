import { Mail, MapPin, Phone } from 'lucide-react'
import SpotlightCard from './reactbits/spotlight-card'

export default function Details() {
    return(
        <div className='p-2 lg:min-h-fit rounded-lg lg:pb-18 max-w-[500px]'>
        <div className='w-full'>
          <h2 className="text-3xl  mb-4 p-2 w-full">Get In Touch</h2>
        
        <div className="flex flex-col gap-3  text-amber-50 justify-between mr-8 w-full items-start">
          
            <div className="flex gap-3 p-2 w-[530px] pl-2.5">
              <img src="destination.svg" alt=" Destination" width={40} height={44} />
              <div className='text-xl'>
                <p className='p-3'>Imenti house</p>
                <p className='p-3'>Tom Mboya street</p>
                <p className='p-3'>Room B12</p>
                <p className='p-3'>Nairobi, Kenya</p>
                </div>
             </div>
      
            <div className="flex gap-2 p-2 items-center w-[530px]">
              <img src="talking-on-the-phone.svg" alt=" Destination" width={40} height={44} />
              <div className='text-xl mr-4'>
                <p className='p-3'>0721 376 993</p>
                <p className='p-3'>0733 796 154</p>
                <p className='p-3'>0705 863 394</p>
                </div>
              </div>
            
            <div className="flex p-2 gap-2 items-center w-[530px]">
              <img src="mail.svg" alt=" Destination" width={40} height={44} />
              <div className='text-xl'>
                <p className='p-3'>omemcompany@gmail.com</p>
                <p className='p-3'>aimmaxcom@gmail.com</p>
              </div>
            </div>

          </div>
        <div>
      </div>  
      </div>
      </div>  
    )
  };