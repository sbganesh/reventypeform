const stepsData = [
  {
    id: 1,
    type: 'section',
    content: [
      {
        type: 'text',
        value: 'Welcome to rEVEN.AI',
      },
      {
        type: 'text',
        value: 'Welcome to our mobile appointment request and self registration app',
      }
    ]
  },
  {
    id: 2,
    question_id: 1,
    type: 'question',
    title: 'Please select what you would like to do',
    subtitle: '',
    content: [
      {
        type: 'radio-image',
        values: [
          {
            id: 1,
            image: './business.png',
            label: 'Book Appointment',
          },
          {
            id: 2,
            image: './personal.png',
            label: 'Self Check-in',
          },
        ],
      },
    ]
  },
  {
    id: 3,
    question_id: 2,
    type: 'question',
    title: "Let's start with your first name. *",
    subtitle: '',
    content: [
      {
        type: 'input',
        placeholder: 'first name'
      },
    ]
  },
  {
    id: 4,
    question_id: 3,
    type: 'question',
    title: 'And your last name? *',
    subtitle: '',
    content: [
      {
        type: 'input',
        placeholder: 'last name'
      },
    ]
  },
  {
    id: 5,
    question_id: 4,
    type: 'question',
    title: "Please enter your healthcare number",
    subtitle: 'Healthcard Number',
    content: [
      {
        type: 'input',
        placeholder: 'Healthcard number'
      },
    ]
  },
  {
    id: 6,
    question_id: 4,
    type: 'question',
    title: "What is your mobile phone number?",
    subtitle: 'This is for sending you SMS notifications',
    content: [
      {
        type: 'input',
        placeholder: 'mobile number'
      },
    ]
  },
  {
    id: 7,
    question_id: 4,
    type: 'question',
    title: "Please Edit or Confirm Address",
    subtitle: '',
    content: [
      {
        type: 'input',
        placeholder: 'address'
      },
    ]
  },
  {
    id: 8,
    question_id: 4,
    type: 'question',
    title: "What email address can we reach you at? This is only to get in touch, not to send spam.This question is required. *",
    subtitle: 'We love GDPR, and GDPR loves us.',
    content: [
      {
        type: 'input',
        placeholder: 'name@example.com'
      },
    ]
  },
  {
    id: 8,
    type: 'section',
    should_save: true,
    hide_next_button: true,
    content: [
      {
        type: 'text',
        value: 'Thank you for contacting rEVEN AI',
      },
      {
        type: 'text',
        value: "A member of our team will contact you within 1 business day",
      }
    ]
  },
];

export default stepsData;