import React from 'react'
import MainHeading from '../components/MainHeading'
import Paragraph from '../components/Paragraph'
import MainButton from '../components/MainButton'

const page = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col gap-10 py-20">

      {/* Payment Information */}
      <div className="flex flex-col gap-5">
        <MainHeading>Payment Information</MainHeading>

        <Paragraph><strong>Rates (GST included):</strong></Paragraph>
        <ul className="list-disc pl-6 space-y-2">
          <li><Paragraph>Regular Lesson: $73.50 per hour</Paragraph></li>
          <li><Paragraph>Discounted Lesson: $94.50 for 1.5 hours</Paragraph></li>
          <li><Paragraph>10-Class Package: $945 for 15 total hours</Paragraph></li>
          <li><Paragraph>Vehicle Rental (Road Test): $115.50 per hour</Paragraph></li>
          <li><Paragraph>Vehicle Rental + Pre-Test Drive (45 mins): $173.25</Paragraph></li>
        </ul>

        <Paragraph><strong>Payment Options:</strong></Paragraph>
        <ul className="list-disc pl-6 space-y-2">
          <li><Paragraph>Cash or debit only.</Paragraph></li>
          <li><Paragraph>Full payment is required before the start of each lesson.</Paragraph></li>
        </ul>

        <Paragraph><strong>10-Class Package Payment Plan:</strong></Paragraph>
        <ul className="list-disc pl-6 space-y-2">
          <li><Paragraph>50% due on your first lesson.</Paragraph></li>
          <li><Paragraph>Remaining 50% must be paid by your 5th class.</Paragraph></li>
        </ul>
      </div>

      {/* Lesson Requirements */}
      <div className="flex flex-col gap-5">
        <MainHeading>Lesson Requirements</MainHeading>

        <Paragraph><strong>Before You Drive:</strong></Paragraph>
        <ul className="list-disc pl-6 space-y-2">
          <li><Paragraph>A valid L or N driver’s license, or an approved international license, is required.</Paragraph></li>
          <li><Paragraph><strong>No license = no lesson.</strong></Paragraph></li>
        </ul>

        <Paragraph><strong>If You Forget Your License:</strong></Paragraph>
        <Paragraph>Time spent retrieving your license will be deducted from your scheduled lesson time.</Paragraph>

        <Paragraph><strong>Dress Code:</strong></Paragraph>
        <Paragraph>Wear appropriate, comfortable clothing. Please avoid revealing outfits.</Paragraph>

        <Paragraph><strong>Who Can Be in the Car:</strong></Paragraph>
        <Paragraph>Only the student and instructor (maximum 2 people) are allowed during lessons, unless pre-approved by both parties.</Paragraph>
      </div>

      {/* Lesson Breakdown */}
      <div className="flex flex-col gap-5">
        <MainHeading>Lesson Breakdown</MainHeading>

        <Paragraph><strong>1-Hour Lesson Includes:</strong></Paragraph>
        <ul className="list-disc pl-6 space-y-2">
          <li><Paragraph>5 minutes: planning & preparation</Paragraph></li>
          <li><Paragraph>50 minutes: driving instruction</Paragraph></li>
          <li><Paragraph>5 minutes: recap & feedback</Paragraph></li>
        </ul>

        <Paragraph><strong>10-Class Package:</strong></Paragraph>
        <Paragraph>Each lesson includes a brief assessment before and after your drive.</Paragraph>
      </div>

      {/* Refund Policy */}
      <div className="flex flex-col gap-5">
        <MainHeading>Refund Policy</MainHeading>

        <Paragraph>Refunds are available for unused portions of package deals if cancellation is requested within 48 hours of notice.</Paragraph>
        <Paragraph><strong>No refunds</strong> will be issued for lessons already completed.</Paragraph>
      </div>

      {/* Optional Button */}
      <div className="flex justify-center">
        <MainButton>Contact Us</MainButton>
      </div>

    </div>
  )
}

export default page
