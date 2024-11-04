import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

const changeBasedOnENV = (env: any) => {
  if (process.env.NODE_ENV === 'development') {
    return `http://${env}`
  }
  if (process.env.NODE_ENV === 'production') return `https://${env}`

  return `http://${env}`
}

export const env = createEnv({
  server: {
    DATABASE_URI: z.string().min(1),
    PAYLOAD_SECRET: z.string().min(1),
    PAYLOAD_URL: z.string().url(),
    S3_ENDPOINT: z.string().min(1),
    S3_ACCESS_KEY_ID: z.string().min(1),
    S3_SECRET_ACCESS_KEY: z.string().min(1),
    S3_BUCKET: z.string().min(1),
    S3_REGION: z.string().min(1),
    RESEND_API_KEY: z.string().min(1),
    RESEND_SENDER_EMAIL: z.string().email(),
    RESEND_SENDER_NAME: z.string().min(1),
    SUBSCRIPTION_PLAN: z.string(),
  },
  client: {
    NEXT_PUBLIC_PUBLIC_URL: z.string().url(),
  },
  runtimeEnv: {
    DATABASE_URI: process.env.DATABASE_URI,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    NEXT_PUBLIC_PUBLIC_URL: changeBasedOnENV(
      process.env.NEXT_PUBLIC_PUBLIC_URL ||
        process.env.VERCEL_PROJECT_PRODUCTION_URL,
    ),
    PAYLOAD_URL: changeBasedOnENV(
      process.env.PAYLOAD_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL,
    ),
    S3_ENDPOINT: process.env.S3_ENDPOINT,
    S3_ACCESS_KEY_ID: process.env.S3_ACCESS_KEY_ID,
    S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
    S3_BUCKET: process.env.S3_BUCKET,
    S3_REGION: process.env.S3_REGION,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_SENDER_EMAIL: process.env.RESEND_SENDER_EMAIL,
    RESEND_SENDER_NAME: process.env.RESEND_SENDER_NAME,
    SUBSCRIPTION_PLAN: process.env.SUBSCRIPTION_PLAN,
  },
})
