import {MdPhone, MdLocationOn, MdEmail} from 'react-icons/md'
import SpotlightCard from './reactbits/spotlight-card'

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
        title: 'Address',
        icon: MdLocationOn,
        numbers: ['Imenti House, Tom Mboya Street', 'Room B12','Nairobi Kenya']
    },
]
export default function ContactUs() {
    return(
        <div className='text-white font-satoshi font-medium text-lg grid grid-cols-3 gap-3'>
            
            
        </div>
    )
}