export const en = {
  siteName: 'Arelys Borgia Insurance Agent',
  keywords: 'health, life, insurance, ObamaCare, coverage',
  header: {
    nav1: 'Primary navigation',
    nav2: 'Languages and Contact links',
    lang: 'Select your language',
    follow: 'Follow me on Istagram',
    aboutMe: 'About Me',
    services: 'Insurance',
    quote: 'Request Free Quote',
    blog: 'News & Updates',
  },
  hero: {
    title: 'Medical coverage at your fingertips',
    tagline: 'WE GUIDE YOU IN EVERY STEP',
  },
  values: {
    '1': 'Integrity',
    '2': 'Passion',
    '3': 'Service Excellence',
    '4': 'Inclusion',
    '5': 'Satisfaction',
    '6': 'Collaboration',
  },
  coverages: {
    title: 'Get the best health coverage at the best price!',
    '1': {
      name: 'ObamaCare',
      description:
        'It is a health reform in the US that expands and improves access to medical care and reduces spending through regulations and taxes.',
    },
    '2': {
      name: 'Mortgage Protection',
      description:
        "It's a type of insurance policy that helps your family make your monthly mortgage payments if you die before your mortgage is fully paid off. Some policies will also offer coverage for a limited time if you lose your job or become disabled after an accident.",
    },
    '3': {
      name: 'Life Insurance',
      description:
        'How much does peace of mind cost? Did you know that your money can grow with our Life policies Save for the University of your children, Save for retirement. At the same time they protect you with benefits like: Terminal Illness Pay, Chronic Illness Pay, Critical Illness Pay, Critical Injury Pay, Pay in Case of Death.',
    },
    '4': {
      name: 'Final Expenses',
      description:
        'Final expense insurance is a type of whole life insurance designed to cover medical expenses and funeral expenses when you pass away A final expense policy is also known as funeral or burial insurance and is popular with seniors.',
    },
  },
  other: 'Other',
  quote: {
    name: {
      label: 'Name',
      required: 'Name is required.',
      min: 'Name is too short.',
    },
    email: {
      label: 'Email',
      invalid: 'Enter a valid email.',
      required: 'Email is required.',
    },
    phone: {
      label: 'Phone Number',
      required: 'Phone number is required.',
      invalid: 'Enter a valid phone number.',
    },
    additionalInfo: {
      label: 'Additional Information',
      max: 'Additional Information should not exceed 500 characters.',
    },
    insurance: {
      label: 'Insurance coverage',
      placeholder: 'Select Insurance',
      required: 'Select an insurance coverage.',
    },
    acknowledgement: {
      label:
        'I acknowledge that by clicking submit, I am agreeing with the Terms and Privacy Notice.',
      required:
        'To use our services, you need to agree to our Terms and Privacy Notice. Please check the box to confirm.',
    },
    recaptcha: {
      required: 'reCAPTCHA verification is required.',
    },
    success:
      "Thanks! We've received your information and will get back to you as soon as possible with a personalized quote.",
    error:
      "We're sorry, our server encountered an issue while processing your request. Please try again later.",
    uniqueError:
      "It appears you've previously submitted a quote request. We're working on it and will get back to you as soon as possible.",
    submit: 'Submit',
  },
  footer: 'Take care of your present looking towards the future.',
};

export type Dict = typeof en;
