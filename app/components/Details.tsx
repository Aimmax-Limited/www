import { Mail, MapPin, Phone } from 'lucide-react'
import SpotlightCard from './reactbits/spotlight-card'

export default function Details() {
    return(
        <div className='flex  p-2 lg:min-h-full rounded-lg lg:pb-18 w-full'>
        <div className='w-full'>
          <h2 className="text-2xl font-semibold mb-4 p-2 w-full text-center">Reach out to us via:</h2>
        
        <div className="flex flex-col gap-3 lg:flex-row text-amber-50 justify-between mr-8 w-full">
          
            <SpotlightCard className="flex gap-3 p-2 w-[530px] items-center pl-2.5">
              <img src="destination.svg" alt=" Destination" width={200} height={240} />
              <div className='text-xl'>
                <p className='p-3'>Imenti house</p>
                <p className='p-3'>Tom Mboya street</p>
                <p className='p-3'>Room B12</p>
                <p className='p-3'>Nairobi, Kenya</p>
                </div>
             </SpotlightCard>
      
            <SpotlightCard className="flex gap-2 p-2 items-center w-[530px]">
              <img src="talking-on-the-phone.svg" alt=" Destination" width={200} height={200} />
              <div className='text-xl mr-4'>
                <p className='p-3'>0721 376 993</p>
                <p className='p-3'>0733 796 154</p>
                <p className='p-3'>0705 863 394</p>
                </div>
              </SpotlightCard>
            
            <SpotlightCard className="flex p-2 gap-2 items-center w-[530px]">
              <img src="mail.svg" alt=" Destination" width={200} height={240} />
              <div className='text-xl'>
                <p className='p-3'>omemcompany@gmail.com</p>
                <p className='p-3'>aimmaxcom@gmail.com</p>
              </div>
            </SpotlightCard>
          </div>
        <div>
        
        </div>
    </div>
    </div>

        
    )
}