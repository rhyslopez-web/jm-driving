


const services = [
    {
        id: 1,
        title: "Class 7",
        description: "Preparing for your Class 7 road test? These lessons focus on real world scenarios, defensive driving, and mastering the skills needed to pass and drive independently.",
        image: 'class7.jpg',
        long_description: 'Learn the fundamentals of safe driving and build confidence as you work toward your Class 7 Novice (N) license. This option is perfect for new drivers who are just starting out.',
        price: '$73.50/hr (GST included)',
        perks: ['5 minutes of planning', '50 minutes of in car instruction', '5 minutes of summary']
    },
    {
        id: 2,
        title: "Class 5",
        description: "Ready for full licensing? Class 5 lessons are ideal for experienced drivers looking to refine their skills and meet all requirements for a full BC driver’s license.",
        image: "class5.jpg",
        long_description: 'Designed for drivers with their Class 7 (N) license, these lessons focus on advanced skills and test preparation to help you upgrade to your full Class 5 license.',
        price: '$73.50/hr (GST included)',
        perks: ['5 minutes of planning', '50 minutes of in car instruction', '5 minutes of summary']
    },
    {
        id: 3,
        title: '10 Package (Class 5 or 7)',
        description: '',
        image:'/',
        long_description: 'A great option for consistent progress, this 10-lesson package helps learners build strong driving habits and prepare for their road test through structured, in-depth training.',
        price: '$945 total for 10 lessons (1.5 hrs each, GST included)',
        perks: ['5 minutes of assessment before and after each lesson']
    },
    {
        id: 4,
        title: "Car Rental",
        description: "Need a reliable car for your road test? Rent a clean, test ready vehicle with insurance included perfect for stress free exam day.",
        image: "carrental.jpg",
        long_description: 'Don’t have a car for your test? Rent one of ours! Choose between just the vehicle or a vehicle plus a warm-up session to get comfortable before the exam.',
        price: '$115/hr or $173 (GST included)',
        perks: ['Car + 45 mins of pre-road test driving.','Car rental only']

    },
]

export default services

export const reviews = [
    {
        name: 'Wella Medillo',
        review: 'Another achievement unlocked! Thank You, Lord, for guiding me in passing my Class 5 road test here in BC. Thanks to kuya John Montero of JM Driving School for your patience in teaching me, and for your prayers too.',
        status: "Class 5 Student",
        image: "willapfp.jpg"
    },
    {
        name: 'Laurenz',
        review: "John was super patient and really helped me feel at ease behind the wheel. He broke everything down in a way that made sense and gave me tons of tips specific to Burnaby's test routes. I passed my Class 7 road test on the first try couldn't have done it without him!",
        status: 'Class 7 Student',
        image: 'laurenzpfp.jpg'
    },
    {
        name: "Rhys Paulino",
        review: "I was super nervous before starting lessons, but John’s calm energy made a huge difference. He taught me exactly what examiners look for and helped me correct small habits I didn’t even notice. Passed my N test last week highly recommend!",
        status: 'Class 7 Student',
        image: 'rhyspfp.jpg'
    }
]

export const gallery = [
    {
        image:"gallery 1.jpg"
    },
    {
        image:"gallery 2.jpg"
    },
    {
        image:"gallery 3.jpg"
    },
    {
        image:"gallery 4.jpg"
    },
    {
        image:"gallery 5.jpg"
    },
    {
        image:"gallery 6.jpg"
    },
]


export const whyus = [
    {
        title: "Patient and Friendly Instruction",
        description: "We create a calm, supportive environment so you can learn at your own pace without feeling rushed or overwhelmed.",
        icon: "/CarbonCalendar.svg" // you can replace this with your actual icon component or class
    },
    {
        title: "Flexible Scheduling",
        description: "We offer lesson times that fit your busy schedule, making it easier to balance learning with your daily life.",
        icon: '/CarbonFaceSatisfied.svg'
    },
    {
        title: "Clear Lesson Plans",
        description: "Every lesson has a clear structure, so you always know what you’re learning and what to focus on next.",
        icon: '/CarbonPartnership.svg'
    },
    {
        title: "Road Test Preparation",
        description: "We’ll make sure you feel fully prepared and confident for your road test with targeted practice and helpful tips.",
        icon: '/CarbonCar.svg'
    }
];

export const questions = [
  {
    question: "What do I need to bring to my lesson?",
    answer: "You must bring your valid driver’s license (L, N, or approved international). Without it, we won’t be able to begin your lesson."
  },
  {
    question: "How do I pay for lessons?",
    answer: "We accept cash or debit only. For the 10-lesson package, 50% is due on the first lesson and the rest by the 5th lesson."
  },
  {
    question: "Can someone else ride along during the lesson?",
    answer: "Only the student and instructor are allowed in the vehicle, unless agreed upon by both parties ahead of time."
  },
  {
    question: "What happens if I forget my license or run late?",
    answer: "If you need to pick up your license during your lesson time, that time will be deducted from the lesson. Please be on time and prepared."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer refunds on unused package lessons only if you cancel within 48 hours of notifying us. Unfortunately, we can’t refund lessons that have already taken place."
  }
];

      









