import { motion } from "framer-motion";

export default function ContactIllustration() {

    return ( 
    <div className="flex flex-row items-center justify-between gap-15">
        <motion.div key={1} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 0 * 0.2}}>
            <div className="illustration email bg-white/5 backdrop-blur-md">
            <svg width="300" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <path d="M22 6l-10 7L2 6"/>
            </svg>
          </div>
        </motion.div>
        <motion.div key={2} initial={{ opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 1 * 0.2}}>
            <div className="illustration phone  bg-white/5 backdrop-blur-md">
            <svg width="300" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </div>
        </motion.div>
    </div>)
   
}
