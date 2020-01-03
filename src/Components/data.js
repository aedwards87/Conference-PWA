const programmeDayOne = [
  {
    id: 1,
    title: 'Breakfast',
    time: '08.35',
    description: '',
    sponsoredBy: '',
    room: '1',
    stream: [],
    moderator: [],
    speakers: []
  },
  {
    id: 2,
    title: 'Welcome and introduction',
    time: '09.00',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.',
    sponsoredBy: 'Orange Triangle',
    room: 'Main Auditorium',
    stream: [],
    moderator: ['Sue Edwards'],
    speakers: ['John Patterson', 'Natalie Watts']
  },
  {
    id: 3,
    title: 'Streamed sessions',
    time: '09.10',
    description: '',
    sponsoredBy: '',
    room: '',
    stream: [
      {
        id: 's1',
        title: 'Purpose beyond profit: what’s the business case?',
        time: '09.10',
        streamTitle: 'Ethics, culture and purpose',
        description:
          'The idea that profit and purpose in business are mutually exclusive has been challenged in recent years as public, investors and regulators alike look for greater transparency about the social and environmental impact of business. That’s borne out by studies which show that embracing a higher purpose is indeed good for business. Our panellists discuss how and why companies with strong purpose outperform those that don’t.',
        sponsoredBy: '',
        room: '4-5',
        moderator: [],
        speakers: ['Keith Anderson']
      },
      {
        id: 's2',
        title: 'A view at the top: boardroom trends in Britain’s FTSE 100 Companies',
        time: '09.10',
        streamTitle: 'Board leadership',
        description:
          'Boards have never been under as much scrutiny as they are today. Economic and political instability, globalisation, inequality, and a rash of high profile failures have all meant boards are being scrutinised in ways not foreseeable 20 years ago. In this session, we examine the findings from new research which replicates the work of the 1996 report, A View at the Top, a pioneering look at the demography and composition of the UK’s FTSE 100 boards. We consider how boards have evolved and reflect on how, in many areas, there has been significant, even radical, change.',
        sponsoredBy: '',
        room: 'Main Auditorium',
        moderator: [],
        speakers: ['Joe Smith']
      },
      {
        id: 's3',
        title: 'Creating a longer-term view in reporting',
        time: '09.10',
        streamTitle: 'Governance and reporting',
        description:
          'Regulators, investors, governments and the public are calling for companies to take a longer term view and more effectively articulate their purpose, values and culture. In the UK, recent updates to the UK Corporate Governance Code and company law include requirements for companies to report in these areas. We explore how reporting in this area has developed over the past few years, and how companies are facing up to the challenge of communicating these messages to their stakeholders.',
        sponsoredBy: '',
        room: '6',
        moderator: [],
        speakers: []
      },
      {
        id: 's4',
        title: 'Influencing in the boardroom',
        time: '09.10',
        streamTitle: 'Personal development',
        description:
          'Experienced governance professionals develop their roles as trusted advisors, providing expert insights. They position the value they provide in constructively challenging and actively supporting their boards of directors. Their insights inform discussions at an early stage and contribute to the effective governance of their organisations. But what happens when logic and facts fail to influence decisions and actions? This practical and interactive session asks critical questions and provides a framework for you to develop your influence in the boardroom.',
        sponsoredBy: '',
        room: '5',
        moderator: [],
        speakers: []
      },
      {
        id: 's5',
        title: 'Audit 2.0, the end of the Big Four?',
        time: '09.10',
        streamTitle: 'Audit and risk management',
        description: "It is common parlance in the world of the boardroom that the relationship between the CEO and Chairman is critical to a board’s success. What's not so often discussed is how the CEO’s attitude and their relationship with the Board as a whole, can make or break the board’s effectiveness. This session enables the effectiveness of a Board through evaluating the behaviours of the executive, how they engage with the board and how the company secretary can stimulate change for the better.",
        sponsoredBy: '',
        room: '2',
        moderator: [],
        speakers: []
      },
      {
        id: 's6',
        title: 'The five dysfunctions of a healthy CEO-board relationship',
        time: '09.10',
        streamTitle: 'Partner programme',
        description:
          "It is common parlance in the world of the boardroom that the relationship between the CEO and Chairman is critical to a board’s success. What's not so often discussed is how the CEO’s attitude and their relationship with the Board as a whole, can make or break the board’s effectiveness. This session enables the effectiveness of a Board through evaluating the behaviours of the executive, how they engage with the board and how the company secretary can stimulate change for the better.",
        sponsoredBy: '',
        room: '1',
        moderator: [],
        speakers: []
      }
    ],
    moderator: [],
    speakers: []
  },
  {
    id: 4,
    title: 'Breakfast2',
    time: '08.35',
    description: '',
    sponsoredBy: '',
    room: '2',
    stream: [],
    moderator: ['Tom Wilson'],
    speakers: ['Keith Anderson', 'Sue Edwards', 'Anthony Friggs']
  },
  {
    id: 5,
    title: 'Welcome and introduction2',
    time: '09.00',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.',
    sponsoredBy: 'DotCircle',
    room: '4-5',
    stream: [],
    moderator: ['Natalie Watts'],
    speakers: ['Katherine Paddington', 'Debbie Cockbill', 'Tom Wilson']
  },
  {
    id: 6,
    title: 'Keynotes address2',
    time: '09.10',
    description: '',
    sponsoredBy: '',
    room: '3',
    stream: [],
    moderator: [],
    speakers: ['John Patterson']
  },
  {
    id: 7,
    title: 'Break',
    time: '08.35',
    description: '',
    sponsoredBy: '',
    room: '',
    stream: [],
    moderator: [],
    speakers: []
  },
  {
    id: 8,
    title: 'Welcome and introduction3',
    time: '09.00',
    description: '',
    sponsoredBy: 'Squirrel Flame',
    room: '6',
    stream: [],
    moderator: ['Kelly Hermes'],
    speakers: ['Natalie Watts', 'Keith Anderson', 'Tom Wilson', 'Sue Edwards']
  },
  {
    id: 9,
    title: 'Streamed sessions 2',
    time: '10.10',
    date: '10.07.2019',
    description: '',
    sponsoredBy: '',
    room: '',
    stream: [
      {
        id: 's1',
        title: 'Purpose beyond profit: what’s the business case?',
        time: '10.10',
        streamTitle: 'Ethics, culture and purpose',
        description:
          'The idea that profit and purpose in business are mutually exclusive has been challenged in recent years as public, investors and regulators alike look for greater transparency about the social and environmental impact of business. That’s borne out by studies which show that embracing a higher purpose is indeed good for business. Our panellists discuss how and why companies with strong purpose outperform those that don’t.',
        sponsoredBy: 'DotCircle',
        room: '4-5',
        moderator: [],
        speakers: ['Kelly Holmes']
      },
      {
        id: 's2',
        title: 'A view at the top: boardroom trends in Britain’s FTSE 100 Companies',
        time: '10.10',
        streamTitle: 'Board leadership',
        description:
          'Boards have never been under as much scrutiny as they are today. Economic and political instability, globalisation, inequality, and a rash of high profile failures have all meant boards are being scrutinised in ways not foreseeable 20 years ago. In this session, we examine the findings from new research which replicates the work of the 1996 report, A View at the Top, a pioneering look at the demography and composition of the UK’s FTSE 100 boards. We consider how boards have evolved and reflect on how, in many areas, there has been significant, even radical, change.',
        sponsoredBy: 'Orange Triangle',
        room: 'Main Auditorium',
        moderator: [],
        speakers: ['Debbie Cockbill']
      },
      {
        id: 's3',
        title: 'Creating a longer-term view in reporting',
        time: '10.10',
        streamTitle: 'Governance and reporting',
        description:
          'Regulators, investors, governments and the public are calling for companies to take a longer term view and more effectively articulate their purpose, values and culture. In the UK, recent updates to the UK Corporate Governance Code and company law include requirements for companies to report in these areas. We explore how reporting in this area has developed over the past few years, and how companies are facing up to the challenge of communicating these messages to their stakeholders.',
        sponsoredBy: 'Atomic',
        room: '6',
        moderator: [],
        speakers: ['Katherine Paddington']
      },
      {
        id: 's4',
        title: 'Influencing in the boardroom',
        time: '10.10',
        streamTitle: 'Personal development',
        description:
          'Experienced governance professionals develop their roles as trusted advisors, providing expert insights. They position the value they provide in constructively challenging and actively supporting their boards of directors. Their insights inform discussions at an early stage and contribute to the effective governance of their organisations. But what happens when logic and facts fail to influence decisions and actions? This practical and interactive session asks critical questions and provides a framework for you to develop your influence in the boardroom.',
        sponsoredBy: 'Mountain X',
        room: '5',
        moderator: ['Keith Anderson'],
        speakers: ['Debbie Cockbill', 'Kelly Holmes']
      },
      {
        id: 's5',
        title: 'Audit 2.0, the end of the Big Four?',
        time: '10.10',
        streamTitle: 'Audit and risk management',
        description: '',
        sponsoredBy: 'Star Bridge',
        room: '2',
        moderator: ['Natalie Watts'],
        speakers: ['John Patterson', 'Anthony Friggs']
      },
      {
        id: 's6',
        title: 'The five dysfunctions of a healthy CEO-board relationship',
        time: '10.10',
        streamTitle: 'Partner programme',
        description:
          "It is common parlance in the world of the boardroom that the relationship between the CEO and Chairman is critical to a board’s success. What's not so often discussed is how the CEO’s attitude and their relationship with the Board as a whole, can make or break the board’s effectiveness. This session enables the effectiveness of a Board through evaluating the behaviours of the executive, how they engage with the board and how the company secretary can stimulate change for the better.",
        sponsoredBy: 'Squirrel Flame',
        room: '1',
        moderator: [],
        speakers: ['Joe Smith', 'Keith Anderson']
      }
    ],
    moderator: [],
    speakers: []
  },
  {
    id: 10,
    title: 'Break',
    time: '08.35',
    description: '',
    sponsoredBy: 'Mountain X',
    room: '',
    stream: [],
    moderator: [],
    speakers: []
  },
  {
    id: 11,
    title: 'Welcome and introduction3',
    time: '09.00',
    description: '',
    sponsoredBy: 'Droplet',
    room: '2',
    stream: [],
    moderator: [],
    speakers: ['Anthony Friggs']
  },
  {
    id: 12,
    title: 'Day one close and drinks',
    time: '09.10',
    description: '',
    sponsoredBy: 'Atomic',
    room: 'Main Auditorium',
    stream: [],
    moderator: [],
    speakers: ['Keith Anderson', 'Sue Edwards']
  }
];

const programmeDayTwo = [
  {
    id: 1,
    title: 'Breakfast Day 2',
    time: '08.35',
    description: '',
    sponsoredBy: '',
    stream: [],
    moderator: [],
    speakers: []
  },
  {
    id: 2,
    title: 'Welcome and introduction Day 2',
    time: '09.00',
    description: '',
    sponsoredBy: '',
    stream: [],
    moderator: [],
    speakers: []
  },
  {
    id: 3,
    title: 'Keynotes address Day 2',
    time: '09.10',
    description: '',
    sponsoredBy: '',
    stream: [],
    moderator: [],
    speakers: []
  },
  {
    id: 4,
    title: 'Breakfast2',
    time: '08.35',
    description: '',
    sponsoredBy: '',
    room: '2',
    stream: [],
    moderator: ['Tom Wilson'],
    speakers: ['Keith Anderson', 'Joe Smith']
  },
  {
    id: 5,
    title: 'Welcome and introduction2 Day 2',
    time: '09.00',
    description: '',
    sponsoredBy: '',
    stream: [],
    moderator: [],
    speakers: []
  },
  {
    id: 6,
    title: 'Keynotes address2 Day 2',
    time: '09.10',
    description: '',
    sponsoredBy: '',
    stream: [],
    moderator: [],
    speakers: []
  },
  {
    id: 7,
    title: 'Breakfast3 Day 2',
    time: '08.35',
    description: '',
    sponsoredBy: '',
    stream: [],
    moderator: [],
    speakers: []
  },
  {
    id: 8,
    title: 'Welcome and introduction3 Day 2',
    time: '09.00',
    description: '',
    sponsoredBy: '',
    stream: [],
    moderator: [],
    speakers: []
  },
  {
    id: 9,
    title: 'Keynotes address3 Day 2',
    time: '09.10',
    description: '',
    sponsoredBy: '',
    stream: [],
    moderator: [],
    speakers: []
  },
  {
    id: 10,
    title: 'Breakfast3 Day 2',
    time: '08.35',
    description: '',
    sponsoredBy: '',
    stream: [],
    moderator: [],
    speakers: []
  },
  {
    id: 11,
    title: 'Welcome and introduction3 Day 2',
    time: '09.00',
    description: '',
    sponsoredBy: '',
    stream: [],
    moderator: [],
    speakers: []
  },
  {
    id: 12,
    title: 'Keynotes address3 Day 2',
    time: '09.10',
    description: '',
    sponsoredBy: '',
    stream: [],
    moderator: [],
    speakers: [
      {
        speakerId: 1,
        name: 'Tom Wilson'
      },
      {
        speakerId: 2,
        name: 'Tom Wilson'
      }
    ]
  }
];

const speakers = [
  {
    id: 1,
    name: 'Tom Wilson',
    title: 'Author/Writer',
    keynote: 'true',
    company: 'Google',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus,iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus,iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.`
  },
  {
    id: 2,
    name: 'Natalie Watts',
    title: 'Sale Director',
    keynote: 'false',
    company: 'Apple',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus,iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.`
  },
  {
    id: 3,
    name: 'John Patterson',
    title: 'Marketing Director',
    keynote: 'false',
    company: 'Microsoft',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus,iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.`
  },
  {
    id: 4,
    name: 'Joe Smith',
    title: 'CEO',
    keynote: 'false',
    company: 'BT',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus,iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.`
  },
  {
    id: 5,
    name: 'Kelly Hermes',
    title: 'Sales Marketing Manager',
    keynote: 'true',
    company: 'Coke Cola',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus,iaculis sit amet purus maximus`
  },
  {
    id: 6,
    name: 'Keith Anderson',
    title: 'UX Manager',
    keynote: 'true',
    company: 'Biffa',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus,iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci.`
  },
  {
    id: 7,
    name: 'Sue Edwards',
    title: 'Digital Manager',
    keynote: 'true',
    company: 'Computershare',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus,iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus,iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.`
  },
  {
    id: 8,
    name: 'Anthony Friggs',
    title: 'Executive Producer',
    keynote: 'false',
    company: 'TMF',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.`
  },
  {
    id: 9,
    name: 'Katherine Paddington',
    title: 'Video Editor',
    keynote: 'false',
    company: 'Tesco',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus,iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.`
  },
  {
    id: 10,
    name: 'Debbie Cockbill',
    title: 'Events Manager',
    keynote: 'false',
    company: 'EE',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.`
  }
];

const exhibitors = [
  {
    id: 1,
    name: 'Orange Triangle',
    level: 'Headline',
    stand: '1',
    img: '',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus,iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus,iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.`
  },
  {
    id: 2,
    name: 'Atomic',
    level: 'Gold',
    stand: '2',
    img: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus,iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.'
  },
  {
    id: 3,
    name: 'DotCircle',
    level: 'Gold',
    stand: '3',
    img: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.'
  },
  {
    id: 4,
    name: 'Droplet',
    level: 'Silver',
    stand: '4',
    img: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.'
  },
  {
    id: 5,
    name: 'Mountain X',
    level: 'Silver',
    stand: '5',
    img: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.'
  },
  {
    id: 6,
    name: 'Squirrel Flame',
    level: 'Silver',
    stand: '6',
    img: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.'
  },
  {
    id: 7,
    name: 'Star Bridge',
    level: 'Silver',
    stand: '7',
    img: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.'
  }
];

const streamedSessions = [
  {
    id: 1,
    day: 1,
    time: '09.10',
    stream: [
      {
        id: 1,
        title: 'Purpose beyond profit: what’s the business case?',
        streamTitle: 'Ethics, culture and purpose',
        description:
          'The idea that profit and purpose in business are mutually exclusive has been challenged in recent years as public, investors and regulators alike look for greater transparency about the social and environmental impact of business. That’s borne out by studies which show that embracing a higher purpose is indeed good for business. Our panellists discuss how and why companies with strong purpose outperform those that don’t.',
        sponsoredBy: '',
        room: '4-5',
        moderator: [],
        speakers: []
      },
      {
        id: 2,
        title:
          'A view at the top: boardroom trends in Britain’s FTSE 100 Companies',
        streamTitle: 'Board leadership',
        description:
          'Boards have never been under as much scrutiny as they are today. Economic and political instability, globalisation, inequality, and a rash of high profile failures have all meant boards are being scrutinised in ways not foreseeable 20 years ago. In this session, we examine the findings from new research which replicates the work of the 1996 report, A View at the Top, a pioneering look at the demography and composition of the UK’s FTSE 100 boards. We consider how boards have evolved and reflect on how, in many areas, there has been significant, even radical, change.',
        sponsoredBy: '',
        room: 'Main Auditorium',
        moderator: [],
        speakers: []
      },
      {
        id: 3,
        title: 'Creating a longer-term view in reporting',
        streamTitle: 'Governance and reporting',
        description:
          'Regulators, investors, governments and the public are calling for companies to take a longer term view and more effectively articulate their purpose, values and culture. In the UK, recent updates to the UK Corporate Governance Code and company law include requirements for companies to report in these areas. We explore how reporting in this area has developed over the past few years, and how companies are facing up to the challenge of communicating these messages to their stakeholders.',
        sponsoredBy: '',
        room: '6',
        moderator: [],
        speakers: []
      },
      {
        id: 4,
        title: 'Influencing in the boardroom',
        streamTitle: 'Personal development',
        description:
          'Experienced governance professionals develop their roles as trusted advisors, providing expert insights. They position the value they provide in constructively challenging and actively supporting their boards of directors. Their insights inform discussions at an early stage and contribute to the effective governance of their organisations. But what happens when logic and facts fail to influence decisions and actions? This practical and interactive session asks critical questions and provides a framework for you to develop your influence in the boardroom.',
        sponsoredBy: '',
        room: '5',
        moderator: [],
        speakers: []
      },
      {
        id: 5,
        title: 'Audit 2.0, the end of the Big Four?',
        streamTitle: 'Audit and risk management',
        description: '',
        sponsoredBy: '',
        room: '2',
        moderator: [],
        speakers: []
      },
      {
        id: 6,
        title: 'The five dysfunctions of a healthy CEO-board relationship',
        streamTitle: 'Partner programme',
        description:
          "It is common parlance in the world of the boardroom that the relationship between the CEO and Chairman is critical to a board’s success. What's not so often discussed is how the CEO’s attitude and their relationship with the Board as a whole, can make or break the board’s effectiveness. This session enables the effectiveness of a Board through evaluating the behaviours of the executive, how they engage with the board and how the company secretary can stimulate change for the better.",
        sponsoredBy: '',
        room: '1',
        moderator: [],
        speakers: []
      }
    ]
  },
  {
    id: 2,
    day: 1,
    time: '10.00',
    stream: [
      {
        id: 1,
        title: 'Purpose beyond profit: what’s the business case?',
        streamTitle: 'Ethics, culture and purpose',
        description:
          'The idea that profit and purpose in business are mutually exclusive has been challenged in recent years as public, investors and regulators alike look for greater transparency about the social and environmental impact of business. That’s borne out by studies which show that embracing a higher purpose is indeed good for business. Our panellists discuss how and why companies with strong purpose outperform those that don’t.',
        sponsoredBy: '',
        room: '4-5',
        moderator: [],
        speakers: []
      },
      {
        id: 2,
        title:
          'A view at the top: boardroom trends in Britain’s FTSE 100 Companies',
        streamTitle: 'Board leadership',
        description:
          'Boards have never been under as much scrutiny as they are today. Economic and political instability, globalisation, inequality, and a rash of high profile failures have all meant boards are being scrutinised in ways not foreseeable 20 years ago. In this session, we examine the findings from new research which replicates the work of the 1996 report, A View at the Top, a pioneering look at the demography and composition of the UK’s FTSE 100 boards. We consider how boards have evolved and reflect on how, in many areas, there has been significant, even radical, change.',
        sponsoredBy: '',
        room: 'Main Auditorium',
        moderator: [],
        speakers: []
      },
      {
        id: 3,
        title: 'Creating a longer-term view in reporting',
        streamTitle: 'Governance and reporting',
        description:
          'Regulators, investors, governments and the public are calling for companies to take a longer term view and more effectively articulate their purpose, values and culture. In the UK, recent updates to the UK Corporate Governance Code and company law include requirements for companies to report in these areas. We explore how reporting in this area has developed over the past few years, and how companies are facing up to the challenge of communicating these messages to their stakeholders.',
        sponsoredBy: '',
        room: '6',
        moderator: [],
        speakers: []
      },
      {
        id: 4,
        title: 'Influencing in the boardroom',
        streamTitle: 'Personal development',
        description:
          'Experienced governance professionals develop their roles as trusted advisors, providing expert insights. They position the value they provide in constructively challenging and actively supporting their boards of directors. Their insights inform discussions at an early stage and contribute to the effective governance of their organisations. But what happens when logic and facts fail to influence decisions and actions? This practical and interactive session asks critical questions and provides a framework for you to develop your influence in the boardroom.',
        sponsoredBy: '',
        room: '5',
        moderator: [],
        speakers: []
      },
      {
        id: 5,
        title: 'Audit 2.0, the end of the Big Four?',
        streamTitle: 'Audit and risk management',
        description: '',
        sponsoredBy: '',
        room: '2',
        moderator: [],
        speakers: []
      },
      {
        id: 6,
        title: 'The five dysfunctions of a healthy CEO-board relationship',
        streamTitle: 'Partner programme',
        description:
          "It is common parlance in the world of the boardroom that the relationship between the CEO and Chairman is critical to a board’s success. What's not so often discussed is how the CEO’s attitude and their relationship with the Board as a whole, can make or break the board’s effectiveness. This session enables the effectiveness of a Board through evaluating the behaviours of the executive, how they engage with the board and how the company secretary can stimulate change for the better.",
        sponsoredBy: '',
        room: '1',
        moderator: [],
        speakers: []
      }
    ]
  }
];

const themes = [
  {
    id: 1,
    streamTitle: 'Ethics, culture and purpose',
    color: 'lightBlue'
  },
  {
    id: 2,
    streamTitle: 'Board leadership',
    color: 'aqua'
  },
  {
    id: 3,
    streamTitle: 'Governance and reporting',
    color: 'teal'
  },
  {
    id: 4,
    streamTitle: 'Personal development',
    color: 'burgundy'
  },
  {
    id: 5,
    streamTitle: 'Audit and risk management',
    color: 'darkBlue'
  },
  {
    id: 6,
    streamTitle: 'Partner programme',
    color: 'cyan'
  }
];

export {
  programmeDayOne,
  programmeDayTwo,
  speakers,
  exhibitors,
  streamedSessions,
  themes
};
