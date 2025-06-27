import MainHeading from '../components/MainHeading';
import Paragraph from '../components/Paragraph';
import MainButton from '../components/MainButton';
import SecondaryButton from '../components/SecondaryButton';
import BentoCardWithIcon from '../components/BentoCardWithIcon';
import { whyus } from '../data';
import { Smile, Calendar, FileText, Car } from "lucide-react";
import HomeReviews from '../components/HomeReviews';
import FAQ from '../components/FAQ';

export default function page() { 

  return (
    <div className='flex flex-col items-center lg:px-0'>
        {/* First Section */}
        <div className='max-w-7xl px-5 lg:px-0 my-20'>
          <div className='grid grid-cols-1 lg:grid-cols-2 bg-[#F4F5FE] p-10 rounded-4xl gap-10'>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-5'>
                <MainHeading>About JM</MainHeading>
                <Paragraph>
                  John Montero has been guiding learners through the streets of Burnaby, BC, for over 3 years — and he’s just getting started. With a growing list of successful students and a calm, supportive teaching style, John is the go-to instructor for first-time drivers looking to build real-world driving skills.
                  <br /><br />
                  Whether you’re prepping for your road test or just getting started, John’s personalized lessons are designed to make you feel safe, confident, and in control behind the wheel.
                </Paragraph>
              </div>

              <div className='flex flex-col gap-3'>
                <MainButton>Book A Lesson Now</MainButton>
                <SecondaryButton>View Pricing</SecondaryButton>
              </div>
            </div>

            <div className='aspect-square bg-gray-700 rounded-3xl'></div>
          </div>
        </div>

        {/* Second Section */}
        <div className='w-full bg-blue-primary flex justify-center'>
          <div className='max-w-7xl px-5 grid grid-cols-1 lg:grid-cols-2 py-20 lg:py-40 gap-10'>
            <MainHeading className={'text-white-primary'}>Lorem Ipsum</MainHeading>

            <Paragraph className={'text-white-primary'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className='flex flex-col max-w-7xl px-5 py-20 lg:py-40 gap-10 items-center'>
          <MainHeading>Why Choose Us</MainHeading>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
            {whyus.map((why, index) => (
              <BentoCardWithIcon key={index} title={why.title} description={why.description} index={index} icon={why.icon} />
            ))}
          </div>
        </div>

        <div className='w-full'>
          <HomeReviews/>
        </div>

        <div className='w-full'>
          <FAQ/>
        </div>
        
    </div>
  );
}
