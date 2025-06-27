import React from 'react'
import MainHeading from './MainHeading'
import Paragraph from './Paragraph'
import { Accordion, AccordionPanel, AccordionTitle, AccordionContent } from 'flowbite-react'
import SecondaryButton from './SecondaryButton'
import { questions } from '../data'

const FAQ = () => {
  return (
    <div className='bg-blue-primary w-full flex justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-2 bg-blue-primary px-5 lg:px-0 max-w-7xl gap-10 py-40'>
            <div className='flex flex-col gap-10'>
                <div>
                    <MainHeading className='uppercase text-white'>Have any questions?</MainHeading>
                    <Paragraph className='text-white'>
                        We’re here to help. If you have any questions about lessons, packages, or anything else, feel free to check out our FAQ’s or reach out. We’ll get back to you as soon as we can.
                    </Paragraph>
                </div>

                <div>
                    <SecondaryButton href='/contact' className='border-white text-white'>Contact Us</SecondaryButton>
                </div>
            </div>

            <div>
                <Accordion className='flex flex-col gap-5 border-0'>
                    {
                    questions.map((question, index) => (
                        <AccordionPanel key={index} className=''>
                            <AccordionTitle  className='bg-white rounded-lg !text-blue-primary font-primary'>{question.question}</AccordionTitle>
                            <AccordionContent className='rounded-lg !bg-white-primary'>
                                <Paragraph>{question.answer}</Paragraph>
                            </AccordionContent>
                        </AccordionPanel>
                    ))
                    }
                </Accordion>
            </div>
        </div>
    </div>
  )
}

export default FAQ