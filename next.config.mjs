import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed experimental features
  experimental: {},
}

export default withPayload(nextConfig)
