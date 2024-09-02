import { z } from "zod"

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const usernameRegex = /^[a-zA-Z0-9_]{3,}$/

const loginSchema = z.object({
    input: z.string().refine(
        (value) => {
            return emailRegex.test(value) || usernameRegex.test(value)
        },
        {
            message:
                "Input harus berupa email yang valid atau username yang valid (minimal 3 karakter, hanya huruf, angka, dan underscore)",
        }
    ),
    password: z.string().min(6, {
        message: "Kata sandi harus terdiri dari minimal 6 karakter",
    }),
})

export default loginSchema
