/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: process.env.NEXT_PUBLIC_APP_ENV === 'development',
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ik.imagekit.io",
            },
            {
                protocol: "https",
                hostname: "iili.io",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
            {
                protocol: "https",
                hostname: "pmp.eraspace.com",
            }
        ],
    },
}

export default nextConfig
