import React from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import TextField from "@/components/common/TextField"
import Button from "@/components/common/Button"
import { EnumIcons } from "@/constants/EnumIcons"
import Image from "next/image"
import registerSchema from "@/schemas/registerSchema"
import Link from "next/link"

type RegisterFormInputs = z.infer<typeof registerSchema>

function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormInputs>({
        resolver: zodResolver(registerSchema),
    })

    const onSubmit = async (data: RegisterFormInputs) => {
        const response = await fetch("/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (response?.status !== 200) return alert("Register failed")
        alert("Register success")
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-primary">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-xl">
                <Image
                    className="mx-auto"
                    src={EnumIcons.LOGO_DEFAULT}
                    alt="logo"
                    width={100}
                    height={100}
                />
                <h2 className="text-2xl font-bold text-center">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <TextField
                        required
                        id="name"
                        label="Name"
                        error={errors.name?.message}
                        {...register("name")}
                    />
                    <TextField
                        required
                        id="email"
                        label="Email"
                        error={errors.email?.message}
                        {...register("email")}
                    />
                    <TextField
                        required
                        id="password"
                        label="Password"
                        error={errors.password?.message}
                        type="password"
                        {...register("password")}
                    />
                    <Button type="submit" variant="primary">
                        Register
                    </Button>
                </form>
                <p className="text-center text-xs">
                    Sudah punya akun?{" "}
                    <Link href="/auth/login" className="text-primary">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default RegisterPage
