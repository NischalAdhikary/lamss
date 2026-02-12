export interface Service {
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  image: string
  languages?: string[]
  features?: string[]
  pricing?: {
    standard: string
    note?: string
  }
  process?: {
    title: string
    description: string
  }[]
  specialNotes?: string[]
  turnaround?: string
  minRequirement?: string
}

export const services: Service[] = [
  {
    slug: 'translation-editing',
    title: 'Translation & Editing',
    shortDescription: 'Professional translation services in Nepali, English, and Hindi with transparent pricing.',
    fullDescription: 'Our translation and editing services provide accurate, culturally appropriate translations across multiple languages. We ensure your message is conveyed precisely while maintaining the original intent and context.',
    image: '/images/services/translation.jpg',
    languages: ['Nepali', 'English', 'Hindi'],
    features: [
      'Certified professional translators',
      'Subject matter expertise across industries',
      'Quality assurance and proofreading',
      'Fast turnaround times',
      'Confidentiality guaranteed',
      'Cultural adaptation and localization'
    ],
    pricing: {
      standard: 'LAMSS standard is based on 350 words per source document as equivalent to one page.',
      note: 'You pay only for the words you want translated. The word count is usually more in the end product, ensuring you avoid being charged on a physical per-page basis.'
    },
    turnaround: '24-72 hours typical',
    minRequirement: '350 words minimum'
  },
  {
    slug: 'interpretation',
    title: 'Interpretation Services',
    shortDescription: 'Simultaneous and consecutive interpretation in multiple languages for all your events.',
    fullDescription: 'Whether you need simultaneous interpretation for conferences or consecutive interpretation for meetings, our experienced interpreters ensure seamless communication across language barriers.',
    image: '/images/services/interpretation.jpg',
    languages: ['Nepali', 'English', 'Hindi', 'Urdu', 'Newari', 'Local Terai languages'],
    features: [
      'Simultaneous interpretation',
      'Consecutive interpretation',
      'Professional equipment available',
      'International conference experience',
      'Official UN language support (upon request)',
      'Specialized industry interpreters'
    ],
    specialNotes: [
      'Official UN Language support available on demand with 15-days advance notice',
      'Subject to availability for specialized language pairs',
      'International assignment interpreters have prior international experience'
    ],
    turnaround: '15 days advance notice for UN languages',
    minRequirement: '2 hours minimum booking'
  },
  {
    slug: 'transcription-subtitling',
    title: 'Transcription & Subtitling',
    shortDescription: 'Accurate transcription and professional subtitling services in Nepali and English.',
    fullDescription: 'Convert your audio and video content into accurate written transcripts or add professional subtitles to make your content accessible to wider audiences.',
    image: '/images/services/transcription.jpg',
    languages: ['Nepali', 'English'],
    features: [
      'Verbatim transcription',
      'Time-coded subtitles',
      'Multiple subtitle formats (SRT, VTT, etc.)',
      'Quality checked by native speakers',
      'Quick turnaround available',
      'Confidential handling of sensitive content'
    ],
    process: [
      {
        title: 'Upload Content',
        description: 'Share your audio or video files securely through our platform'
      },
      {
        title: 'Professional Processing',
        description: 'Our team transcribes or creates subtitles with attention to detail'
      },
      {
        title: 'Quality Review',
        description: 'Multiple quality checks ensure accuracy and timing'
      },
      {
        title: 'Delivery',
        description: 'Receive your transcripts or subtitled videos in your preferred format'
      }
    ],
    turnaround: '3-5 business days',
    minRequirement: '10 minutes minimum'
  },
  {
    slug: 'content-writing',
    title: 'Content Writing & Documentation',
    shortDescription: 'Professional content creation for websites, publications, reports, and press releases.',
    fullDescription: 'From website content to comprehensive reports, our experienced writers deliver engaging, accurate, and professionally crafted content tailored to your needs.',
    image: '/images/services/content-writing.jpg',
    features: [
      'Website content development',
      'Report writing and documentation',
      'Press releases and media content',
      'Publication-ready articles',
      'SEO-optimized content',
      'Research-backed writing',
      'Multiple revision rounds',
      'Industry-specific expertise'
    ],
    process: [
      {
        title: 'Consultation',
        description: 'Discuss your content needs, target audience, and objectives'
      },
      {
        title: 'Research & Planning',
        description: 'Our team conducts thorough research and creates content outlines'
      },
      {
        title: 'Writing & Editing',
        description: 'Professional writers create compelling content with editorial oversight'
      },
      {
        title: 'Review & Refinement',
        description: 'Incorporate your feedback and polish the final deliverable'
      }
    ]
  }
]