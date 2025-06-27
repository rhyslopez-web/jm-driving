import React from 'react'
import MainHeading from '../components/MainHeading'
import Paragraph from '../components/Paragraph'
import { contact } from '../data'
import BentoCardWithIcon from '../components/BentoCardWithIcon'
import MainButton from '../components/MainButton'
import SecondaryButton from '../components/SecondaryButton'

const page = () => {
  return (
    <div className='max-w-7xl mx-auto py-20 px-5'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 '>
        <div className='flex flex-col gap-5'>
          <MainHeading>
            Contact Us
          </MainHeading>

          <Paragraph>
            Have questions or ready to book your driving lessons? Feel free to reach out! Whether you're looking for more information or want to schedule your first session, we're here to help. You can send us a message or give us a call—we’ll be happy to chat and get you on the road with confidence.
          </Paragraph>

          <div className='flex gap-3'>
            <MainButton href={'/services'}>View Services</MainButton>
            <SecondaryButton href={'/about'}>Read About Us</SecondaryButton>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {contact.map((contact, index) => (
            <BentoCardWithIcon key={index} title={contact.title} description={contact.contact} index={index} icon={contact.icon}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page