import { CampusInfo } from '../types';

export const campusData: CampusInfo[] = [
  // Schedule Information
  {
    id: 'academic-calendar',
    category: 'schedule',
    title: 'Academic Calendar 2024-2025',
    content: 'Fall Semester: Aug 26 - Dec 15, 2024. Spring Semester: Jan 13 - May 10, 2025. Summer Sessions: May 26 - Aug 15, 2025.',
    details: {
      fallBreaks: ['Labor Day: Sept 2', 'Thanksgiving: Nov 25-29'],
      springBreaks: ['Spring Break: Mar 10-14', 'Memorial Day: May 26'],
      finals: {
        fall: 'Dec 9-15, 2024',
        spring: 'May 5-10, 2025'
      }
    },
    keywords: ['calendar', 'semester', 'dates', 'academic', 'schedule', 'fall', 'spring', 'summer']
  },
  {
    id: 'class-schedules',
    category: 'schedule',
    title: 'Class Schedule Information',
    content: 'Classes run Monday-Friday from 8:00 AM to 10:00 PM. Most classes are 50 minutes with 10-minute breaks. Labs are typically 2-3 hours.',
    details: {
      timeSlots: ['8:00-8:50 AM', '9:00-9:50 AM', '10:00-10:50 AM', '11:00-11:50 AM', '12:00-12:50 PM', '1:00-1:50 PM', '2:00-2:50 PM', '3:00-3:50 PM', '4:00-4:50 PM', '5:00-5:50 PM', '6:00-6:50 PM', '7:00-7:50 PM', '8:00-8:50 PM', '9:00-9:50 PM'],
      weekendSchedule: 'Limited Saturday classes available for continuing education programs'
    },
    keywords: ['class', 'schedule', 'time', 'hours', 'monday', 'friday', 'lab', 'timing']
  },

  // Facilities
  {
    id: 'library-hours',
    category: 'facility',
    title: 'Main Library Operating Hours',
    content: 'Monday-Thursday: 7:00 AM - 12:00 AM, Friday: 7:00 AM - 8:00 PM, Saturday: 9:00 AM - 6:00 PM, Sunday: 12:00 PM - 12:00 AM',
    details: {
      specialHours: {
        finals: '24/7 during finals week',
        holidays: 'Closed on major holidays',
        summer: 'Reduced hours during summer break'
      },
      floors: {
        ground: 'Information desk, computers, group study rooms',
        second: 'Quiet study areas, research collections',
        third: 'Silent study, graduate research areas'
      }
    },
    keywords: ['library', 'hours', 'open', 'closed', 'study', 'books', 'research']
  },
  {
    id: 'gym-facilities',
    category: 'facility',
    title: 'Recreation Center & Gym',
    content: 'State-of-the-art fitness center with cardio equipment, weight training, group fitness classes, pool, and indoor track.',
    details: {
      hours: 'Mon-Fri: 5:30 AM - 11:00 PM, Weekends: 8:00 AM - 10:00 PM',
      facilities: ['Cardio machines', 'Free weights', 'Basketball courts', '25-meter pool', 'Group fitness studios', 'Indoor track', 'Locker rooms'],
      classes: ['Yoga', 'Pilates', 'Spin', 'HIIT', 'Water aerobics', 'Zumba']
    },
    keywords: ['gym', 'fitness', 'recreation', 'pool', 'exercise', 'workout', 'basketball', 'track']
  },
  {
    id: 'parking',
    category: 'facility',
    title: 'Campus Parking Information',
    content: 'Multiple parking zones available: Student parking ($150/semester), Faculty/Staff parking ($300/semester), Visitor parking ($3/hour).',
    details: {
      zones: {
        red: 'Faculty/Staff only',
        blue: 'Student commuter parking',
        green: 'Resident student parking',
        yellow: 'Visitor parking'
      },
      locations: ['North Campus Garage (1,200 spots)', 'South Lot (800 spots)', 'East Commuter Lot (600 spots)', 'West Residential Parking (400 spots)'],
      permits: 'Available online at parking.campus.edu or at Campus Safety office'
    },
    keywords: ['parking', 'permit', 'cost', 'zones', 'visitor', 'student', 'faculty', 'garage']
  },

  // Dining
  {
    id: 'dining-halls',
    category: 'dining',
    title: 'Campus Dining Locations',
    content: 'Four dining halls serve fresh, diverse meals daily. All-you-care-to-eat options available with meal plans.',
    details: {
      locations: {
        'Commons Dining Hall': {
          hours: 'Mon-Fri: 7:00 AM - 9:00 PM, Weekends: 8:00 AM - 8:00 PM',
          features: ['All-you-care-to-eat', 'International cuisine', 'Salad bar', 'Grill station']
        },
        'Student Union Food Court': {
          hours: 'Mon-Fri: 11:00 AM - 8:00 PM, Weekends: Closed',
          features: ['Pizza', 'Sandwiches', 'Asian cuisine', 'Coffee shop']
        },
        'Library Café': {
          hours: 'Mon-Thu: 8:00 AM - 10:00 PM, Fri: 8:00 AM - 6:00 PM, Weekends: 10:00 AM - 4:00 PM',
          features: ['Coffee', 'Light meals', 'Snacks', 'Study-friendly']
        },
        'Residential Dining': {
          hours: 'Mon-Sun: 7:00 AM - 10:00 PM',
          features: ['Comfort food', 'Healthy options', 'Late night dining']
        }
      },
      mealPlans: ['Unlimited', '14 meals/week', '10 meals/week', 'Commuter 5 meals/week']
    },
    keywords: ['dining', 'food', 'meals', 'cafeteria', 'restaurant', 'lunch', 'dinner', 'breakfast', 'meal plan']
  },
  {
    id: 'food-allergies',
    category: 'dining',
    title: 'Dietary Accommodations',
    content: 'All dining locations accommodate dietary restrictions including vegetarian, vegan, gluten-free, and allergen-free options.',
    details: {
      accommodations: ['Vegetarian/Vegan stations', 'Gluten-free menu items', 'Allergen-free preparation areas', 'Halal options', 'Kosher meals (by request)'],
      contact: 'Contact dining services at dining@campus.edu for special dietary needs'
    },
    keywords: ['dietary', 'allergies', 'vegetarian', 'vegan', 'gluten-free', 'halal', 'kosher', 'restrictions']
  },

  // Library Services
  {
    id: 'library-services',
    category: 'library',
    title: 'Library Services & Resources',
    content: 'Comprehensive library services including research assistance, study spaces, computer labs, and extensive digital collections.',
    details: {
      services: [
        'Reference and research assistance',
        'Interlibrary loan services',
        'Study room reservations',
        'Computer and printing services',
        'Course reserves',
        'Digital archive access',
        'Citation and writing support'
      ],
      collections: {
        books: '500,000+ physical books',
        digital: '200,000+ e-books and journals',
        databases: '150+ research databases',
        archives: 'Local history and university archives'
      },
      contact: 'Reference desk: (555) 123-4567, Email: library@campus.edu'
    },
    keywords: ['library', 'research', 'books', 'study rooms', 'printing', 'databases', 'archives', 'reference']
  },
  {
    id: 'study-spaces',
    category: 'library',
    title: 'Study Spaces & Reservations',
    content: 'Various study environments available: quiet study areas, collaborative spaces, group study rooms, and 24/7 study lounges.',
    details: {
      types: {
        'Silent Study Areas': 'Individual desks, no talking, floors 2-3',
        'Collaborative Zones': 'Group work encouraged, ground floor',
        'Study Rooms': 'Reservable rooms for 2-8 people, whiteboards included',
        '24/7 Study Lounge': 'Always accessible with student ID card'
      },
      reservations: 'Book study rooms online at library.campus.edu/rooms or at the front desk',
      policies: 'Maximum 4-hour reservations, quiet hours after 10 PM'
    },
    keywords: ['study', 'rooms', 'quiet', 'group', 'collaborative', 'reservations', 'space', 'lounge']
  },

  // Administrative Procedures
  {
    id: 'registration',
    category: 'admin',
    title: 'Course Registration Process',
    content: 'Online registration opens based on class standing. Priority given to seniors, then juniors, sophomores, and freshmen.',
    details: {
      schedule: {
        'Graduate Students': 'April 1st for Fall, November 1st for Spring',
        'Seniors': 'April 3rd for Fall, November 3rd for Spring',
        'Juniors': 'April 5th for Fall, November 5th for Spring',
        'Sophomores': 'April 7th for Fall, November 7th for Spring',
        'Freshmen': 'April 10th for Fall, November 10th for Spring'
      },
      process: [
        'Meet with academic advisor',
        'Check prerequisites',
        'Log into student portal',
        'Add courses to shopping cart',
        'Register during assigned time',
        'Pay tuition and fees'
      ],
      deadlines: {
        'Add/Drop': 'First week of semester',
        'Withdrawal': '60% point of semester',
        'Grade Change': 'One year from course completion'
      }
    },
    keywords: ['registration', 'courses', 'classes', 'enroll', 'add', 'drop', 'schedule', 'advisor', 'prerequisites']
  },
  {
    id: 'financial-aid',
    category: 'admin',
    title: 'Financial Aid Services',
    content: 'Comprehensive financial aid including grants, scholarships, work-study, and student loans. FAFSA required for federal aid.',
    details: {
      types: ['Federal Pell Grants', 'State grants', 'Merit scholarships', 'Need-based aid', 'Work-study programs', 'Federal student loans'],
      deadlines: {
        'FAFSA Priority': 'March 1st',
        'Scholarship Applications': 'February 15th',
        'Work-Study': 'Rolling basis'
      },
      office: {
        location: 'Student Services Building, Room 120',
        hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
        contact: 'finaid@campus.edu, (555) 123-4500'
      }
    },
    keywords: ['financial aid', 'fafsa', 'scholarships', 'grants', 'loans', 'work-study', 'tuition', 'money']
  },
  {
    id: 'transcripts',
    category: 'admin',
    title: 'Transcript Requests',
    content: 'Official transcripts available through National Student Clearinghouse. Unofficial transcripts viewable online through student portal.',
    details: {
      official: {
        cost: '$10 per transcript',
        delivery: '3-5 business days electronic, 7-10 days mail',
        method: 'Order online at credentials-inc.com/campus'
      },
      unofficial: {
        cost: 'Free',
        access: 'Student portal under Academic Records',
        usage: 'For personal use only, not accepted by other institutions'
      },
      holds: 'Financial or academic holds will prevent transcript release'
    },
    keywords: ['transcript', 'grades', 'official', 'unofficial', 'records', 'diploma', 'graduation']
  }
];

export const quickActions = [
  { id: '1', label: 'Library Hours', query: 'What are the library hours?', icon: 'Clock' },
  { id: '2', label: 'Dining Options', query: 'Where can I eat on campus?', icon: 'Utensils' },
  { id: '3', label: 'Parking Info', query: 'How do I get a parking permit?', icon: 'Car' },
  { id: '4', label: 'Class Schedule', query: 'When do classes start?', icon: 'Calendar' },
  { id: '5', label: 'Financial Aid', query: 'How do I apply for financial aid?', icon: 'DollarSign' },
  { id: '6', label: 'Study Rooms', query: 'How do I reserve a study room?', icon: 'BookOpen' }
];