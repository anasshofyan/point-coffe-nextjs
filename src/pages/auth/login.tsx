import React from "react"
import Button from "@/components/common/Button"
import { EnumIcons } from "@/constants/EnumIcons"
import Image from "next/image"
import { signIn } from "next-auth/react"

function LoginPage() {
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
                <h2 className="text-xl font-bold text-center">Login with</h2>
                <Button
                    icon={EnumIcons.GOOGLE_ICON}
                    variant="tertiary"
                    onClick={() => signIn("google")}
                >
                    Google
                </Button>
                <Button
                    icon={EnumIcons.GITHUB_ICON}
                    variant="tertiary"
                    onClick={() => signIn("github")}
                >
                    GitHub
                </Button>
            </div>
        </div>
    )
}

export default LoginPage
