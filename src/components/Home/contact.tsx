'use client';

import { motion } from 'framer-motion';

import ContactInformation from '../general/ContactInformation';
import ContactForm from '../forms/ContactForm';
import Cal from '../general/Cal';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out to me.
          </p>
        </motion.div>

        <div className='w-full mb-4 mx-auto flex items-center justify-center'>
          <Cal className="mx-auto w-fit rounded-full border-primary text-lg md:mx-0 md:w-auto md:max-w-fit" />
        </div>

        <div className="flex flex-col md:flex-row  justify-evenly gap-10">
          <div className="grow max-w-lg">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='mt-4 md:mt-auto'
          >
            <ContactInformation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
