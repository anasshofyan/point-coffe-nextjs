import React from "react"
import loginSchema from "@/schemas/loginSchema"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import TextField from "@/components/common/TextField"
import Button from "@/components/common/Button"
import { EnumIcons } from "@/constants/EnumIcons"
import Image from "next/image"
import Link from "next/link"

type LoginFormInputs = z.infer<typeof loginSchema>

function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = async (data: LoginFormInputs) => {
        const response = await fetch("/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (response?.status !== 200) return alert("Login failed")
        alert("Login success")
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
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                        Login
                    </Button>
                </form>
                <p className="text-center text-xs">Login with</p>
                <div className="flex justify-center space-x-4">
                    <Button
                        icon={EnumIcons.GOOGLE_ICON}
                        variant="tertiary"
                        onClick={() => alert("Login with Google")}
                    >
                        Google
                    </Button>
                    <Button
                        icon={EnumIcons.GITHUB_ICON}
                        variant="tertiary"
                        onClick={() => alert("Login with GitHub")}
                    >
                        GitHub
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
