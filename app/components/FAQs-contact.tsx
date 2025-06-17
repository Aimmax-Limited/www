
import { motion } from 'framer-motion';
import React from 'react';

function FAQscontact() {
  return (
    <div className="my-2 w-fit text-slate-100">
            <h2 className="text-2xl font-semibold p-4 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4 justify-around">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 border border-gray-300 rounded-lg"
              >
                <h3 className="font-semibold">What services do you offer?</h3>
                <p className="text-slate-50">
                  We provide asset management solutions, including tagging, valuation, and accrual accounting transitions.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 border border-gray-300 rounded-lg"
              >
                <h3 className="font-semibold">How can I schedule a consultation?</h3>
                <p className="text-slate-50">
                  Use the contact form above or call us directly to book an appointment.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 border border-gray-300 rounded-lg"
              >
                <h3 className="font-semibold">What are your support hours?</h3>
                <p className="text-slate-50">
                  Our team is available Monday-Friday, 9AM-6PM EST.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 border border-gray-300 rounded-lg"
              >
                <h3 className="font-semibold">How quickly can I expect a response?</h3>
                <p className="text-slate-50">
                  Use the contact form above or call us directly to book an appointment.
                </p>
              </motion.div>
            </div>
          </div>
  );
}

export default FAQscontact;
