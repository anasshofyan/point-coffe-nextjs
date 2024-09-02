import { z } from "zod"

const emailRegex = /^[a-z]+@[a-z]+\.[a-z]{2,}$/
const loginSchema = z.object({
    email: z.string().regex(emailRegex, {
        message:
            "Alamat email tidak valid, harus menggunakan huruf kecil, tanpa karakter khusus, dan diakhiri dengan domain yang valid",
    }),
    password: z.string().min(6, {
        message: "Kata sandi harus terdiri dari minimal 6 karakter",
    }),
})

export default loginSchema
