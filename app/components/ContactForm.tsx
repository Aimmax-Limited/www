
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export default function ContactUsForm() {
    return(
        <form className='flex flex-col gap-10 items-start w-full  p-4 md:max-w-2xl bg-[#0A192F] h-fit rounded-2xl mb-10 text-amber-50'>
            <div className='flex gap-3 rounded-xl  justify-center items-center p-2 border-amber-50'>
              <Input type='text' placeholder='enter your name' id='name' required/>
              <Input type='phone' placeholder='+254 ....'/>
            </div>
            <div className='flex gap-3 rounded-xl border-amber-50 justify-center items-center p-1 w-full'>
              <Input type='text' placeholder='Company'/>
            </div>
            <div className='flex gap-3 rounded-xl border-amber-50 justify-center items-center p-1 w-full'>
              <Input type='email' placeholder='your email' id='email' required/>
            </div>
            <div className='flex gap-3 rounded-xl border-amber-50 w-full justify-center items-center p-2'>
              <Input type='text' placeholder='subject' id='subject' required/>
            </div>
            <div className='flex rounded-xl  gap-4 w-full border-amber-50'>
                
                <Textarea  rows={5}cols={12} placeholder='message...' color='red'/>
            </div>
            <Button variant={'send'}>Send</Button>
        </form>
    )
}