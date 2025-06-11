
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Details() {
    return(
        <div className='w-[480px] flex  p-2 bg-[#0A192F] lg:min-h-full rounded-lg lg:pb-18'>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-amber-50  p-2">Contact Information</h2>
          <hr className='w-fit h-[2px] bg-white'/>
        <div className=" relative space-y-4 text-amber-50 ml-8">
            <div className="absolute top-0 bottom-0 left-0 border-l-2 border-white">
              <div className="w-2 h-2 bg-white rounded-full absolute -translate-x-1/2 top-5"></div>
              <div className="w-2 h-2 bg-white rounded-full absolute -translate-x-1/2 top-51"></div>
              <div className="w-2 h-2 bg-white rounded-full absolute -translate-x-1/2 top-87"></div>
            </div>
            <div className="flex flex-col gap-3 p-2">
              <MapPin className="w-6 h-6 m-2 text-primary"  color='white'/>
              <div>
                <p>Imenti house</p>
                <p>Tom Mboya street</p>
                <p>Room B12</p>
                <p>Nairobi, Kenya</p>
              </div>
            </div>
            <div className="flex  flex-col gap-2 p-2">
              <Phone className="w-6 h-6 text-primary m-2" color='white' />
              <div>
                <p>0721 376 993</p>
                <p>0733 796 154</p>
                <p>0705 863 394</p>
              </div>
            </div>
            <div className="flex flex-col m-2 gap-2">
              <Mail className="w-6 h-6 text-primary m-2" color='white' />
              <div>
                <p>omemcompany@gmail.com</p>
                <p>aimmaxcom@gmail.com</p>
              </div>
            </div>
          </div>
        <div>
        
        </div>
    </div>
    </div>
        
    )
}