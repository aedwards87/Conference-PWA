

const programmeDayOne = [
  {
    id: 1,
    title: 'Breakfast',
    time: '08.35',
    description: '',
    sponsoredBy: '',
    room: '1',
    stream: '',
    moderator: [],
    speakers: [],
  },
  {
    id: 2,
    title: 'Welcome and introduction',
    time: '09.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.',
    sponsoredBy: 'Diligent',
    room: 'Main Auditorium',
    stream: 'Blue',
    moderator: ['Sue Edwards'],
    speakers: ['John Patterson', 'Natalie Watts'],
  },
  {
    id: 3,
    title: 'Keynotes address',
    time: '09.10',
    description: '',
    sponsoredBy: '',
    room: '4-5',
    stream: 'Main Auditorium',
    moderator: [],
    speakers: ['Joe Smith'],
  },
  {
    id: 4,
    title: 'Breakfast2',
    time: '08.35',
    description: '',
    sponsoredBy: '',
    room: '2',
    stream: '',
    moderator: ['Tom Wilson'],
    speakers: ['Keith Anderson', 'Sue Edwards', 'Anthony Friggs','Keith Anderson', 'Sue Edwards', 'Anthony Friggs' ],
  },
  {
    id: 5,
    title: 'Welcome and introduction2',
    time: '09.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.',
    sponsoredBy: '',
    room: '4-5',
    stream: '',
    moderator: ['Natalie Watts'],
    speakers: ['Katherine Paddington', 'Debbie Cockbill', 'Tom Wilson'],
  },
  {
    id: 6,
    title: 'Keynotes address2',
    time: '09.10',
    description: '',
    sponsoredBy: '',
    room: '3',
    stream: '',
    moderator: [],
    speakers: ['John Patterson'],
  },
  {
    id: 7,
    title: 'Break',
    time: '08.35',
    description: '',
    sponsoredBy: '',
    room: '',
    stream: '',
    moderator: [],
    speakers: [],
  },
  {
    id: 8,
    title: 'Welcome and introduction3',
    time: '09.00',
    description: '',
    sponsoredBy: '',
    room: '6',
    stream: '',
    moderator: ['Kelly Hermes'],
    speakers: ['Natalie Watts', 'Keith Anderson', 'Tom Wilson', 'Sue Edwards'],
  },
  {
    id: 9,
    title: 'Keynotes address3',
    time: '09.10',
    date: '10.07.2019',
    description: '',
    sponsoredBy: '',
    room: '3',
    stream: true,
    moderator: [],
    speakers: ['Joe Smith'],
  },
  {
    id: 10,
    title: 'Break',
    time: '08.35',
    description: '',
    sponsoredBy: '',
    room: '',
    stream: '',
    moderator: [],
    speakers: [],
  },
  {
    id: 11,
    title: 'Welcome and introduction3',
    time: '09.00',
    description: '',
    sponsoredBy: '',
    room: '2',
    stream: '',
    moderator: [],
    speakers: ['Anthony Friggs'],
  },
  {
    id: 12,
    title: 'Day one close and drinks',
    time: '09.10',
    description: '',
    sponsoredBy: '',
    room: 'Main Auditorium',
    stream: '',
    moderator: [],
    speakers: ['Keith Anderson', 'Sue Edwards'],
  },
]

const programmeDayTwo = [
  {
    id: 1,
    title: 'Breakfast Day 2',
    time: '08.35',
    description: '',
    sponsoredBy: '',
    stream: '',
    moderator: [],
    speakers: [],
  },
  {
    id: 2,
    title: 'Welcome and introduction Day 2',
    time: '09.00',
    description: '',
    sponsoredBy: '',
    stream: '',
    moderator: [],
    speakers: [],
  },
  {
    id: 3,
    title: 'Keynotes address Day 2',
    time: '09.10',
    description: '',
    sponsoredBy: '',
    stream: '',
    moderator: [],
    speakers: [],
  },
  {
    id: 4,
    title: 'Breakfast2',
    time: '08.35',
    description: '',
    sponsoredBy: '',
    room: '2',
    stream: '',
    moderator: ['Tom Wilson'],
    speakers: ['Keith Anderson', 'Joe Smith'],
  },
  {
    id: 5,
    title: 'Welcome and introduction2 Day 2',
    time: '09.00',
    description: '',
    sponsoredBy: '',
    stream: '',
    moderator: [],
    speakers: [],
  },
  {
    id: 6,
    title: 'Keynotes address2 Day 2',
    time: '09.10',
    description: '',
    sponsoredBy: '',
    stream: '',
    moderator: [],
    speakers: [],
  },
  {
    id: 7,
    title: 'Breakfast3 Day 2',
    time: '08.35',
    description: '',
    sponsoredBy: '',
    stream: '',
    moderator: [],
    speakers: [],
  },
  {
    id: 8,
    title: 'Welcome and introduction3 Day 2',
    time: '09.00',
    description: '',
    sponsoredBy: '',
    stream: '',
    moderator: [],
    speakers: [],
  },
  {
    id: 9,
    title: 'Keynotes address3 Day 2',
    time: '09.10',
    description: '',
    sponsoredBy: '',
    stream: '',
    moderator: [],
    speakers: [],
  },
  {
    id: 10,
    title: 'Breakfast3 Day 2',
    time: '08.35',
    description: '',
    sponsoredBy: '',
    stream: '',
    moderator: [],
    speakers: [],
  },
  {
    id: 11,
    title: 'Welcome and introduction3 Day 2',
    time: '09.00',
    description: '',
    sponsoredBy: '',
    stream: '',
    moderator: [],
    speakers: [],
  },
  {
    id: 12,
    title: 'Keynotes address3 Day 2',
    time: '09.10',
    description: '',
    sponsoredBy: '',
    stream: '',
    moderator: [],
    speakers: [
      {
        speakerId: 1,
        name: 'Tom Wilson',
      },
      {
        speakerId: 2,
        name: 'Tom Wilson',
      },
    ],
  },
]

const speakers = [
  {
    id: 1,
    name: 'Tom Wilson',
    title: 'Author/Writer',
    keynote: 'true',
    company: 'Google'
  },
  {
    id: 2,
    name: 'Natalie Watts',
    title: 'Sale Director',
    keynote: 'false',
    company: 'Apple'
  },
  {
    id: 3,
    name: 'John Patterson',
    title: 'Marketing Director',
    keynote: 'false',
    company: 'Microsoft'
  },
  {
    id: 4,
    name: 'Joe Smith',
    title: 'CEO',
    keynote: 'false',
    company: 'BT'
  },
  {
    id: 5,
    name: 'Kelly Hermes',
    title: 'Sales Marketing Manager',
    keynote: 'true',
    company: 'Coke Cola'
  },
  {
    id: 6,
    name: 'Keith Anderson',
    title: 'UX Manager',
    keynote: 'true',
    company: 'Biffa'
  },
  {
    id: 7,
    name: 'Sue Edwards',
    title: 'Digital Manager',
    keynote: 'true',
    company: 'Computershare'
  },
  {
    id: 8,
    name: 'Anthony Friggs',
    title: 'Executive Producer',
    keynote: 'false',
    company: 'TMF'
  },
  {
    id: 9,
    name: 'Katherine Paddington',
    title: 'Video Editor',
    keynote: 'false',
    company: 'Tesco'
  },
  {
    id: 10,
    name: 'Debbie Cockbill',
    title: 'Events Manager',
    keynote: 'false',
    company: 'EE'
  },
]



const exhibitors = [
  {
    id: 1,
    name: 'Diligent',
    level: 'Headline',
    stand: '1',
    bio: 'blah blah blah'
  },
  {
    id: 2,
    name: 'Computershare',
    level: 'Gold',
    stand: '2',
    bio: 'blah blah blah'
  },
  {
    id: 3,
    name: 'TMF',
    level: 'Gold',
    stand: '5',
    bio: 'blah blah blah'
  },
  {
    id: 4,
    name: 'Nasdaq: Board Dynamic',
    level: 'Silver',
    stand: '6',
    bio: 'blah blah blah'
  },
  {
    id: 5,
    name: 'Jordan',
    level: 'Silver',
    stand: '7',
    bio: 'blah blah blah'
  },
  {
    id: 6,
    name: 'DMJ',
    level: 'Silver',
    stand: '8',
    bio: 'blah blah blah'
  },
  {
    id: 7,
    name: 'ICGN: The Governance Institute',
    level: 'Silver',
    stand: '7',
    bio: 'blah blah blah'
  },
  
]


export { programmeDayOne, programmeDayTwo, speakers, exhibitors }