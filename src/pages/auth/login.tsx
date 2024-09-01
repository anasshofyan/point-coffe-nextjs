import React from "react"
import loginSchema from "@/schemas/loginSchema"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import TextField from "@/components/common/TextField"
import Button from "@/components/common/Button"

type LoginFormInputs = z.infer<typeof loginSchema>

function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = (data: LoginFormInputs) => {
        console.log(data)
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
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
            </div>
        </div>
    )
}

export default LoginPage
