import { authOptions } from "@/lib/authOptions"
import NextAuth from "next-auth"

const handler = NextAuth(authOptions)

export default handler
