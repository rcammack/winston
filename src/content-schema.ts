import { z } from 'zod'

const commandSchema = z.object({
  name: z.string().min(1),
  details: z.string().min(1),
})

const careCardSchema = z.object({
  image: z.string().min(1).nullable(),
  emoji: z.string().min(1),
  title: z.string().min(1),
  text: z.string().min(1),
})

const contentSchema = z.object({
  site: z.object({
    brand: z.string().min(1),
  }),
  profile: z.array(z.object({
      title: z.string().min(1),
      value: z.string().min(1),
      calculate_age: z.boolean().optional(),
    })).min(1),
  hero: z.object({
    greeting: z.string().min(1),
    name: z.string().min(1),
    intro: z.string().min(1),
    care_button: z.string().min(1),
    contact_button: z.string().min(1),
    image: z.string().min(1),
    image_description: z.string().min(1),
  }),
  about: z.object({
    heading: z.string().min(1),
    description: z.string().min(1),
    traits: z.array(z.string().min(1)).min(1),
  }),
  care: z.object({
    heading: z.string().min(1),
    description: z.string().min(1),
    groups: z.array(z.object({
      heading: z.string().min(1),
      cards: z.array(careCardSchema).min(1),
    })).min(1),
  }),
  commands: z.object({
    heading: z.string().min(1),
    description: z.string().min(1),
    detail_prefix: z.string().min(1),
    useful: z.array(commandSchema).min(1),
    tricks: z.array(commandSchema).min(1),
    other_words: z.string().min(1),
  }),
  photos: z.object({
    heading: z.string().min(1),
    swipe_text: z.string().min(1),
    items: z.array(z.object({
      file: z.string().min(1),
      description: z.string().min(1),
    })).min(1),
  }),
  contact: z.object({
    heading: z.string().min(1),
    description: z.string().min(1),
    veterinarian: z.object({
      label: z.string().min(1),
      name: z.string().min(1),
      address: z.string().min(1),
      phone_display: z.string().min(1),
      phone_link: z.string().min(1),
    }),
  }),
  footer: z.object({
    message: z.string().min(1),
  }),
})

export type SiteContent = z.infer<typeof contentSchema>

export { contentSchema }
