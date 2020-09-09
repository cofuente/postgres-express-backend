
const questionData = [
  { 
    questionUUID: '50e1ee43-03f6-4231-affc-195ee76c7e12',
    required: true,
    questionType: 'input',
    questionPrompt: 'Please tell us how you learned about NEXT. Be specific.',
  },
  {
    questionUUID: '842c7508-b000-4fc7-9c9f-4e934d0b8ed0',
    required: true,
    questionType: 'input',
    questionPrompt: 'First Name',
  },
  { 
    questionUUID: '26464b66-7afb-443d-bc69-e6b3cb16ecfa',
    required: true,
    questionType: 'input',
    questionPrompt: 'Last Name',
  },
  {
    questionUUID: 'b1a3c65a-1ddd-4666-a1b0-4d2842577094',
    required: true,
    questionType: 'input',
    questionPrompt: 'Address (this is the location where you want supplies sent in your name)',
  },
  { 
    questionUUID: '9c8f020c-9ca9-4abc-90b2-817c6f49b1fa',
    questionType: 'input',
    questionPrompt: 'Address (Apartment or Unit No.)',
  },
  {
    questionUUID: '65809857-da07-4a65-8656-d158a5bb0b75',
    required: true,
    questionType: 'input',
    questionPrompt: 'City',
  },
  { 
    questionUUID: '31a4dec2-6587-4232-9925-2c106fb50494',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'State',
    possibleAnswers: [
      ['AK','Alabama'],
      ['AL','Alaska'],
      ['AR','Arizona'],
      ['AZ','Arkansas'],
      ['CA','California'],
      ['CO','Colorado'],
      ['CT','Connecticut'],
      ['DE','Delaware'],
      ['FL','Florida'],
      ['GA','Georgia'],
      ['HI','Hawaii'],
      ['IA','Iowa'],
      ['ID','Idaho'],
      ['IL','Illinois'],
      ['IN','Illinois'],
      ['KS','Kansas'],
      ['KY','Kentucky'],
      ['LA','Louisiana'],
      ['MA','Massachusetts'],
      ['MD','Maryland'],
      ['ME','Maine'],
      ['MI','Michigan'],
      ['MN','Minnesota'],
      ['MO','Missouri'],
      ['MS','Mississippi'],
      ['MT','Montana'],
      ['NC','North Carolina'],
      ['ND','North Dakota'],
      ['NE','Nebraska'],
      ['NH','New Hampshire'],
      ['NJ','New Jersey'],
      ['NM','New Mexico'],
      ['NV','Nevada'],
      ['NY','New York'],
      ['OH','Ohio'],
      ['OK','Oklahoma'],
      ['OR','Oregon'],
      ['PA','Pennsylvania'],
      ['RI','Rhode Island'],
      ['SC','South Carolina'],
      ['SD','South Dakota'],
      ['TN','Tennessee'],
      ['TX','Texas'],
      ['UT','Utah'],
      ['VA','Virginia'],
      ['VT','Vermont'],
      ['WA','Washington'],
      ['WI','Wisconsin'],
      ['WV','West Virginia'],
      ['WY','Wyoming']
    ]
  },
  {
    questionUUID: 'c0e71e1b-c7d0-47dd-8b7b-17ebc37a7b95',
    required: true,
    questionType: 'number',
    questionPrompt: 'Zip Code',
  },
  { 
    questionUUID: '98e8fa30-9792-4081-830f-96a236fac83d',
    required: true,
    questionType: 'date',
    questionPrompt: 'Date of Birth',
  },
  {
    questionUUID: 'b9dc6102-502b-4ab6-b4f3-2b3ee161b5ce',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'Gender',
    possibleAnswers: [
      ['Woman','Woman'],
      ['Man','Man'],
      ['Nonbinary','Nonbinary'],
      ['Other','Other'],
      ['Prefer not to say','Prefer not to say']
    ]
  },
  { 
    questionUUID: '43aea536-e644-4d67-8881-11873f4c10f6',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'Would you describe yourself as transgender?',
    possibleAnswers: [
      ['Yes','Yes'],
      ['No','No'],
      ['Nonbinary','Nonbinary'],
      ['Other','Other'],
      ['Prefer not to say','Prefer not to say']
    ]
  },
  {
    questionUUID: '440af351-63d2-454b-a3af-a18d40d9d8f5',
    required: true,
    questionType: 'input',
    questionPrompt: 'How would you describe your sexual orientation (some answers may include gay, straight, bisexual, queer, lesbian, etc)',
  },
  { 
    questionUUID: '872af9f8-d99c-46e0-b222-a1cbdc6490d4',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'I am a US veteran or in active duty',
    possibleAnswers: [
      ['Yes','Yes'],
      ['No','No']
      ]
  },
  {
    questionUUID: '01fffdfa-a893-47e2-8ee0-60809cd57726',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'I am pregnant or may be pregnant:',
    possibleAnswers: [
      ['Yes','Yes'],
      ['No','No'],
      ['Other','I\'m not sure'],
      ['N/A','N/A']
    ]
  },
  { 
    questionUUID: 'ed716db9-9a0d-4054-866e-37e0725fd8a3',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'I am a parent, or parenting',
    possibleAnswers: [
      ['Yes','Yes'],
      ['No','No']
    ]
  },
  {
    questionUUID: 'e7581915-b0a9-464f-a9b1-5f6fd293cec6',
    questionType: 'checkbox',
    questionPrompt: 'My ethnicity could be described as: (check all that apply)',
    possibleAnswers: [
      ['Ethnicity - Asian','Asian'],
      ['Ethnicity - Black/African American','Black/African Americano'],
      ['Ethnicity - Hispanic/Latinx','Hispanic/Latinx'],
      ['Ethnicity - Native American or Alaskan Native','Native American or Alaskan Native'],
      ['Ethnicity - White/Caucasian','White/Caucasian'],
      ['Ethnicity - Other','Other'],
      ['Prefer not to answer','Prefer not to answer']
    ]
  },
  { 
    questionUUID: 'ac6ce973-3a36-41e3-9369-8f2033ef5022',
    questionType: 'input',
    questionPrompt: 'Is there anything else you would like us to know to describe your identity?',
  },
  {
    questionUUID: 'cd6e3ccf-279b-4fa3-bbd3-e566a3d99773',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'What is your preferred language?',
    possibleAnswers: [
      ['English','English'],
      ['Spanish','Spanish'],
      ['Russian','Russian'],
      ['Chinese (Cantonese or Mandarin)','Chinese (Cantonese or Mandarin)'],
      ['Other','Other'],
    ]
  },
  { 
    questionUUID: '2994a592-f148-4e91-8d4b-85fb85b0eb30',
    questionType: 'heading',
    questionPrompt: 'AS A REMINDER, THIS FORM IS ENCRYPTED AND WILL NOT BE ACCESSED BY A THIRD PARTY.',
  },
  {
    questionUUID: 'c2c0d01f-4187-4f51-9b3b-8ad246aa11cc',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'Do you have health insurance?',
    possibleAnswers: [
      ['Yes','Yes'],
      ['No','No'],
      ['Not sure','I\'m not sure']
    ]
  },
  {
    questionUUID: 'aa28ef3c-d32b-40ea-9ca8-3b4e911a7d3a',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'Do you currently have a Primary Care Provider? That is, a doctor, nurse or physician assistant you see when it is not an emergency.',
    possibleAnswers: [
      ['Yes','Yes'],
      ['No','No'],
      ['Not sure','I\'m not sure']
    ]
  },
  { 
    questionUUID: '07136a3c-5439-4f70-bc4b-3788578e99dd',
    required: true,
    questionType: 'input',
    questionPrompt: 'If you have been hospitalized within the past six months, how many times?',
  },
  {
    questionUUID: '1d546604-8e0c-442b-b9c6-b10082de8b27',
    questionType: 'input',
    questionPrompt: 'Have you had issues related to abscesses, cellulitis, endocarditis? Please explain.',
  },
  { 
    questionUUID: '0dd4fd38-3969-4d2d-a1da-48093a762c66',
    questionType: 'checkbox',
    questionPrompt: 'Have you been diagnosed with any of the following (check all that apply)',
    possibleAnswers: [
      ['Diagnosed - HIV/AIDS', 'HIV/AIDS'],
      ['Diagnosed - Hepatitis C', 'Hepatitis C'],
      ['Diagnosed - Diabetes', 'Diabetes'],
      ['Diagnosed - Mental Health Disorder (Bi-Polar Disorder, Depressive Disorder, Major Personality Disorder, Schizophrenia, etc)', 'Mental Health Disorder (Bi-Polar Disorder, Depressive Disorder, Major Personality Disorder, Schizophrenia, etc)'],
      ['Diagnosed - Respiratory Disease (Asthma, Chronic Obstructive Pulmonary Disease)', 'Respiratory Disease (Asthma, Chronic Obstructive Pulmonary Disease)'],
      ['Diagnosed - Other', 'Other']
    ]
  },
  {
    questionUUID: 'd54adbba-1524-4568-93d7-dc5c1cffaf31',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'What is your housing status?',
    possibleAnswers: [
      ['I rent or own my own home/apartment- Stable Situation', 'I rent or own my own home/apartment- Stable Situation'],
      ['I rent or own my own home/apartment- Unstable Situation', 'I rent or own my own home/apartment- Unstable Situation'],
      ['I live with family or friends - Stable Situation', 'I live with family or friends - Stable Situation'],
      ['I live with family or friends- Unstable Situation', 'I live with family or friends- Unstable Situation'],
      ['Homeless in the Shelter System', 'Homeless in the Shelter System'],
      ['Homeless not in the Shelter System', 'Homeless not in the Shelter System'],
      ['Other', 'My housing status is not described here']
    ]
  },
  { 
    questionUUID: '2691ed4e-3256-4c3f-95eb-92050cd12ed6',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'Have you been arrested or incarcerated in the past year?',
    possibleAnswers: [
      ['No', 'No'],
      ['Yes, on probation', 'Yes, on probation'],
      ['Yes, on parole', 'Yes, on parole'],
      ['Yes, on probation and parole', 'Yes, on probation and parole'],
      ['Yes, awaiting trial/judge', 'Yes, awaiting trial/judge'],
      ['Yes, outstanding warrant', 'Yes, outstanding warrant'],
      ['Yes, case pending', 'Yes, case pending'],
      ['Yes, none of the above', 'Yes, none of the above'],
    ]
  },
  {
    questionUUID: '7f4a3588-3926-4132-a325-c7f33a1fbf25',
    questionType: 'heading',
    questionPrompt: 'THE NEXT FEW QUESTIONS ARE ABOUT DRUGS AND DRUG USE',
  },
  { 
    questionUUID: '364f1742-6ba2-4f10-a396-3f1a7d1ee7c7',
    questionType: 'paragraph',
    questionPrompt: 'As a reminder this form is secure, your information will be kept confidential.',

  },
  {
    questionUUID: '2ae2c762-2373-4034-b2af-959304a39b19',
    required: true,
    questionType: 'input',
    questionPrompt: 'How old were you when you started injecting drugs?',
  },
  { 
    questionUUID: 'f766957a-e5b0-4e90-a239-8071102e96f8',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'About how many times per day do you inject?',
    possibleAnswers: [
      ['Less than once per day', 'Less than once per day'],
      ['Once per day', '2 - 5 Times per day'],
      ['6 - 10 Times per day', '6 - 10 Times per day'],
      ['11+ Times per day', '11+ Times per day']
    ]
  },
  {
    questionUUID: '8575fc03-b4fe-4f5d-9353-0b502baac1ac',
    required: true,
    questionType: 'input',
    questionPrompt: 'How do you currently dispose of your used syringes? Please be specific.',
  },
  { 
    questionUUID: 'a6ba3467-cd78-4e1c-9f3c-567edf5651d0',
    required: true,
    questionType: 'checkbox',
    questionPrompt: 'What drugs have you used in the past 30 days?',
    possibleAnswers: [
      ['Heroin','Heroin'],
      ['Cocaine','Cocaine'],
      ['Methamphetamine','Methamphetamine'],
      ['Crack-cocaine','Crack-cocaine'],
      ['Marijuana','Marijuana'],
      ['Alcohol','Alcohol'],
      ['Methadone (prescribed/from a doctor)','Methadone (prescribed/from a doctor)'],
      ['Methadone (not prescribed)','Methadone (not prescribed)'],
      ['Buprenorphine (prescribed/from a doctor)','Buprenorphine (prescribed/from a doctor)'],
      ['Buprenorphine (not prescribed)','Buprenorphine (not prescribed)'],
      ['Other opiates such as Oxycontin, Vicodin, Percocet, etc.','Other opiates such as Oxycontin, Vicodin, Percocet, etc.'],
      ['Benzos such as Valium, Ativan, Xanax','Benzos such as Valium, Ativan, Xanax'],
      ['Synthetic marijuana/ K2','Synthetic marijuana/ K2'],
      ['Other','Other']
    ]
  },
  {
    questionUUID: '34936d25-314a-4664-abc1-693dbd2068e0',
    required: true,
    questionType: 'radio',
    questionPrompt: 'Do you inject pills?',
    possibleAnswers: [
      ['Yes', 'Yes'],
      ['No', 'No'],
      ['Yes, rarely', 'Yes, rarely'],
    ]
  },
  { 
    questionUUID: '53eea840-5a58-4758-a19a-597af757fd8f',
    questionType: 'heading',
    questionPrompt: 'THE FOLLOWING QUESTIONS ARE ABOUT OPIOID OVERDOSE',
  },
  { 
    questionUUID: '394376d2-a161-4bbe-b0b4-b4dd400b99b6',
    questionType: 'paragraph',
    questionPrompt: 'One of the most important things we do is look for ways to reach more people with injection supplies and naloxone-- we are looking to partner with people in the community who can help distribute naloxone to keep others safe.',
  },
  {
    questionUUID: '33ef7055-5edf-4edf-baf9-83d6ef9b076b',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'Do you currently have naloxone (or Narcan)?',
    possibleAnswers: [
      ['Yes', 'Yes'],
      ['No', 'No'],
      ['Unsure', 'I don\'t know / I don\'t remember']
    ]
  },
  {
    questionUUID: '21d865c3-1d3c-4e99-9968-8405b90f9c5f',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'Have you overdosed in the past year?',
    possibleAnswers: [
      ['Yes', 'Yes'],
      ['No', 'No'],
      ['Unsure', 'I don\'t know / I don\'t remember']
    ]
  },
  {
    questionUUID: '3e53d554-f50a-4866-85ec-aeab31af2c64',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'Have you witnessed someone overdose in the past year?',
    possibleAnswers: [
      ['Yes', 'Yes'],
      ['No', 'No'],
      ['Unsure', 'I don\'t know / I don\'t remember']
    ]
  },
  {
    questionUUID: 'e496c927-bb34-4c43-9115-83e43889ed05',
    required: true,
    questionType: 'input',
    questionPrompt: 'Where do you currently obtain injection related supplies?',
  },
  {
    questionUUID: '753eda43-a227-4651-a3b2-b6538ce6f54c',
    required: true,
    questionType: 'input',
    questionPrompt: 'Can you explain why you have difficulty accessing syringes in your own community? Please be as specific as possible.',
  },
  {
    questionUUID: '932aa8f6-9e56-4944-9485-778d5650ccf1',
    questionType: 'input',
    questionPrompt: 'Is there anything else we should know about you, your history, or situation?',
  },
  {
    questionUUID: '0f506b40-0d2a-41a4-a094-77ede62ba327',
    questionType: 'input',
    questionPrompt: 'Can you explain why you have difficulty accessing syringes in your own community? Please be as specific as possible.',
  },
  {
    questionUUID: 'f77af752-cf87-48ec-86cc-eccc800be9f5',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'We understand that in some circumstances, you may support other people in need with the supplies we send. If this is likely, about how many people do you expect will receive supplies that we send to you for their own use?',
    possibleAnswers: [
      ['1 - 10 people', '1 - 10 people'],
      ['20 - 30 people', '20 - 30 people'],
      ['30 - 40 people', '30 - 40 people'],
      ['40 - 50 people', '40 - 50 people'],
      ['More than 50 people', 'More than 50 people']
    ]
  },
  {
    questionUUID: 'f04b3676-1999-47c5-9394-3c36421aa40c',
    required: true,
    questionType: 'dropdown',
    questionPrompt: 'NEXT usually uses USPS, and we can send your package one of two ways. Please take a minute to think about which option works best for you:',
    possibleAnswers: [
      ['Tracked', 'NEXT will send me a tracking number so I will know when to expect my package'],
      ['Untracked', 'NEXT will send me a tracking number so I will know when to expect my package']
    ]
  },
  {
    questionUUID: '149deff5-7886-401d-a456-9fd480eb912b',
    required: true,
    questionType: 'input',
    questionPrompt: 'Please provide a user handle, we will use this handle to communicate with you. Ensure the handle is one you\'ll remember. Please do not use any spaces. Examples are: Panda223, JoeShmo, Liz_Star, 777Ryder',
  },
  {
    questionUUID: '149deff5-7886-401d-a456-9fd480eb912c',
    required: true,
    questionType: 'input',
    questionPrompt: 'Please provide your user handle again. (Must be matching.)',
  },
  {
    questionUUID: '96ec1ef1-0767-41f6-9f19-8b538b7a09d6',
    questionType: 'paragraph',
    questionPrompt: 'Thank you for filling out this enrollment form. Text the handle you created above to 917-828-0293, email it to jamie@nextdistro.org, or message /u/nextdistro on Reddit. We\'ll respond about getting you supplies within 48 hours.',
  }
]


module.exports = questionData
