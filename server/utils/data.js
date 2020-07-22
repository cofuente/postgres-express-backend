
const questionData = [
  { 
    questionType: 'input',
    questionPrompt: 'Please tell us how you learned about NEXT. Be specific.',
  },
  {
    questionType: 'input',
    questionPrompt: 'First Name',
  },
  { 
    questionType: 'input',
    questionPrompt: 'Last Name',
  },
  {
    questionType: 'input',
    questionPrompt: 'Address (this is the location where you want supplies sent in your name)',
  },
  { 
    questionType: 'input',
    questionPrompt: 'Address (Apartment or Unit No.)',
  },
  {
    questionType: 'input',
    questionPrompt: 'City',
  },
  { 
    questionType: 'dropdown',
    questionPrompt: 'State',
    possibleAnswers: [
      ["AK","Alabama"],
      ["AL","Alaska"],
      ["AR","Arizona"],
      ["AZ","Arkansas"],
      ["CA","California"],
      ["CO","Colorado"],
      ["CT","Connecticut"],
      ["DE","Delaware"],
      ["FL","Florida"],
      ["GA","Georgia"],
      ["HI","Hawaii"],
      ["IA","Iowa"],
      ["ID","Idaho"],
      ["IL","Illinois"],
      ["IN","Illinois"],
      ["KS","Kansas"],
      ["KY","Kentucky"],
      ["LA","Louisiana"],
      ["MA","Massachusetts"],
      ["MD","Maryland"],
      ["ME","Maine"],
      ["MI","Michigan"],
      ["MN","Minnesota"],
      ["MO","Missouri"],
      ["MS","Mississippi"],
      ["MT","Montana"],
      ["NC","North Carolina"],
      ["ND","North Dakota"],
      ["NE","Nebraska"],
      ["NH","New Hampshire"],
      ["NJ","New Jersey"],
      ["NM","New Mexico"],
      ["NV","Nevada"],
      ["NY","New York"],
      ["OH","Ohio"],
      ["OK","Oklahoma"],
      ["OR","Oregon"],
      ["PA","Pennsylvania"],
      ["RI","Rhode Island"],
      ["SC","South Carolina"],
      ["SD","South Dakota"],
      ["TN","Tennessee"],
      ["TX","Texas"],
      ["UT","Utah"],
      ["VA","Virginia"],
      ["VT","Vermont"],
      ["WA","Washington"],
      ["WI","Wisconsin"],
      ["WV","West Virginia"],
      ["WY","Wyoming"]
    ]
  },
  {
    questionType: 'input',
    questionPrompt: 'Zip Code',
  },
  { 
    questionType: 'date',
    questionPrompt: 'Date of Birth',
  },
  {
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
    questionType: 'input',
    questionPrompt: 'How would you describe your sexual orientation (some answers may include gay, straight, bisexual, queer, lesbian, etc)',
  },
  { 
    questionType: 'dropdown',
    questionPrompt: 'I am a US veteran or in active duty',
    possibleAnswers: [
      ['Yes','Yes'],
      ['No','No']
      ]
  },
  {
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
    questionType: 'dropdown',
    questionPrompt: 'I am a parent, or parenting',
    possibleAnswers: [
      ['Yes','Yes'],
      ['No','No']
    ]
  },
  {
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
    questionType: 'input',
    questionPrompt: 'Is there anything else you would like us to know to describe your identity?',
  },
  {
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
    questionType: 'heading',
    questionPrompt: 'AS A REMINDER, THIS FORM IS ENCRYPTED AND WILL NOT BE ACCESSED BY A THIRD PARTY.',
  },
  {
    questionType: 'dropdown',
    questionPrompt: 'Do you have health insurance?',
    possibleAnswers: [
      ['Yes','Yes'],
      ['No','No'],
      ['Not sure','I\'m not sure']
    ]
  },
  {
    questionType: 'dropdown',
    questionPrompt: 'Do you currently have a Primary Care Provider? That is, a doctor, nurse or physician assistant you see when it is not an emergency.',
    possibleAnswers: [
      ['Yes','Yes'],
      ['No','No'],
      ['Not sure','I\'m not sure']
    ]
  },
  { 
    questionType: 'input',
    questionPrompt: 'If you have been hospitalized within the past six months, how many times?',
  },
  {
    questionType: 'input',
    questionPrompt: 'Have you had issues related to abscesses, cellulitis, endocarditis? Please explain.',
  },
  { 
    questionType: 'checkbox',
    questionPrompt: 'Have you been diagnosed with any of the following (check all that apply)',
    possibleAnswers: [
      ["Diagnosed - HIV/AIDS", "HIV/AIDS"],
      ["Diagnosed - Hepatitis C", "Hepatitis C"],
      ["Diagnosed - Diabetes", "Diabetes"],
      ["Diagnosed - Mental Health Disorder (Bi-Polar Disorder, Depressive Disorder, Major Personality Disorder, Schizophrenia, etc)", "Mental Health Disorder (Bi-Polar Disorder, Depressive Disorder, Major Personality Disorder, Schizophrenia, etc)"],
      ["Diagnosed - Respiratory Disease (Asthma, Chronic Obstructive Pulmonary Disease)", "Respiratory Disease (Asthma, Chronic Obstructive Pulmonary Disease)"],
      ["Diagnosed - Other", "Other"]
    ]
  },
  {
    questionType: 'dropdown',
    questionPrompt: 'What is your housing status?',
    possibleAnswers: [
      ["I rent or own my own home/apartment- Stable Situation", "I rent or own my own home/apartment- Stable Situation"],
      ["I rent or own my own home/apartment- Unstable Situation", "I rent or own my own home/apartment- Unstable Situation"],
      ["I live with family or friends - Stable Situation", "I live with family or friends - Stable Situation"],
      ["I live with family or friends- Unstable Situation", "I live with family or friends- Unstable Situation"],
      ["Homeless in the Shelter System", "Homeless in the Shelter System"],
      ["Homeless not in the Shelter System", "Homeless not in the Shelter System"],
      ["Other", "My housing status is not described here"]
    ]
  },
  { 
    questionType: 'dropdown',
    questionPrompt: 'Have you been arrested or incarcerated in the past year?',
    possibleAnswers: [
      ["No", "No"],
      ["Yes, on probation", "Yes, on probation"],
      ["Yes, on parole", "Yes, on parole"],
      ["Yes, on probation and parole", "Yes, on probation and parole"],
      ["Yes, awaiting trial/judge", "Yes, awaiting trial/judge"],
      ["Yes, outstanding warrant", "Yes, outstanding warrant"],
      ["Yes, case pending", "Yes, case pending"],
      ["Yes, none of the above", "Yes, none of the above"],
    ]
  },
  {
    questionType: 'heading',
    questionPrompt: 'THE NEXT FEW QUESTIONS ARE ABOUT DRUGS AND DRUG USE',
  },
  { 
    questionType: 'paragraph',
    questionPrompt: 'As a reminder this form is secure, your information will be kept confidential.',

  },
  {
    questionType: 'input',
    questionPrompt: 'How old were you when you started injecting drugs?',
  },
  { 
    questionType: 'dropdown',
    questionPrompt: 'About how many times per day do you inject?',
    possibleAnswers: [
      ["Less than once per day", "Less than once per day"],
      ["Once per day", "2 - 5 Times per day"],
      ["6 - 10 Times per day", "6 - 10 Times per day"],
      ["11+ Times per day", "11+ Times per day"]
    ]
  },
  {
    questionType: 'input',
    questionPrompt: 'How do you currently dispose of your used syringes? Please be specific.',
  },
  { 
    questionType: 'checkbox',
    questionPrompt: 'What drugs have you used in the past 30 days?',
    possibleAnswers: [
      ["Less than once per day", "Less than once per day"],
      ["Once per day", "2 - 5 Times per day"],
      ["6 - 10 Times per day", "6 - 10 Times per day"],
      ["11+ Times per day", "11+ Times per day"],
    ]
  },
  {
    questionType: 'radio',
    questionPrompt: 'Do you inject pills?',
    possibleAnswers: [
      ["Yes", "Yes"],
      ["No", "No"],
      ["Yes, rarely", "Yes, rarely"],
    ]
  },
  { 
    questionType: 'heading',
    questionPrompt: 'THE FOLLOWING QUESTIONS ARE ABOUT OPIOID OVERDOSE',
  },
  {
    questionType: 'input',
    questionPrompt: 'How do you currently dispose of your used syringes? Please be specific.',
  },
  { 
    questionType: 'paragraph',
    questionPrompt: 'One of the most important things we do is look for ways to reach more people with injection supplies and naloxone-- we are looking to partner with people in the community who can help distribute naloxone to keep others safe.',
  },
  {
    questionType: 'dropdown',
    questionPrompt: 'Do you currently have naloxone (or Narcan)?',
    possibleAnswers: [
      ["Yes", "Yes"],
      ["No", "No"],
      ["Unsure", "I don\'t know / I don\'t remember"]
    ]
  },
  {
    questionType: 'dropdown',
    questionPrompt: 'Have you overdosed in the past year?',
    possibleAnswers: [
      ["Yes", "Yes"],
      ["No", "No"],
      ["Unsure", "I don\'t know / I don\'t remember"]
    ]
  },
  {
    questionType: 'dropdown',
    questionPrompt: 'Have you witnessed someone overdose in the past year?',
    possibleAnswers: [
      ["Yes", "Yes"],
      ["No", "No"],
      ["Unsure", "I don\'t know / I don\'t remember"]
    ]
  },
  {
    questionType: 'input',
    questionPrompt: 'Where do you currently obtain injection related supplies?',
  },
  {
    questionType: 'input',
    questionPrompt: 'Can you explain why you have difficulty accessing syringes in your own community? Please be as specific as possible.',
  },
  {
    questionType: 'input',
    questionPrompt: 'Is there anything else we should know about you, your history, or situation?',
  },
  {
    questionType: 'input',
    questionPrompt: 'Can you explain why you have difficulty accessing syringes in your own community? Please be as specific as possible.',
  },
  {
    questionType: 'dropdown',
    questionPrompt: 'We understand that in some circumstances, you may support other people in need with the supplies we send. If this is likely, about how many people do you expect will receive supplies that we send to you for their own use?',
    possibleAnswers: [
      ["1 - 10 people", "1 - 10 people"],
      ["20 - 30 people", "20 - 30 people"],
      ["30 - 40 people", "30 - 40 people"],
      ["40 - 50 people", "40 - 50 people"],
      ["More than 50 people", "More than 50 people"]
    ]
  },
  {
    questionType: 'dropdown',
    questionPrompt: 'NEXT usually uses USPS, and we can send your package one of two ways. Please take a minute to think about which option works best for you:',
    possibleAnswers: [
      ["Tracked", "NEXT will send me a tracking number so I will know when to expect my package"],
      ["Untracked", "NEXT will send me a tracking number so I will know when to expect my package"]
    ]
  },
  {
    questionType: 'input',
    questionPrompt: 'Please provide a user handle, we will use this handle to communicate with you. Ensure the handle is one you\'ll remember. Please do not use any spaces. Examples are: Panda223, JoeShmo, Liz_Star, 777Ryder',
  },
  {
    questionType: 'paragraph',
    questionPrompt: 'Thank you for filling out this enrollment form. Text the handle you created above to 917-828-0293, email it to jamie@nextdistro.org, or message /u/nextdistro on Reddit. We\'ll respond about getting you supplies within 48 hours.',
  }
]


module.exports = questionData
