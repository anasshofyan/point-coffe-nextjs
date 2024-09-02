import { z } from "zod"

const emailRegex = /^[a-z]+@[a-z]+\.[a-z]{2,}$/
const registerSchema = z.object({
    name: z.string().min(3, {
        message: "Nama harus terdiri dari minimal 3 karakter",
    }),
    email: z.string().regex(emailRegex, {
        message:
            "Alamat email tidak valid, harus menggunakan huruf kecil, tanpa karakter khusus, dan diakhiri dengan domain yang valid",
    }),
    password: z.string().min(6, {
        message: "Kata sandi harus terdiri dari minimal 6 karakter",
    }),
})

export default registerSchema
