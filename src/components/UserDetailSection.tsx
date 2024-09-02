import { FC } from "react"
import Image from "next/image"
import { UserDetailsProps } from "@/types/userTypes"

const UserDetailSection: FC<UserDetailsProps> = ({ user }) => {
    if (!user) return null
    return (
        <div className="flex items-center mb-6">
            {user.image && (
                <Image
                    src={user.image}
                    alt={user.name as string}
                    width={35}
                    height={35}
                    className="rounded-full mr-4"
                />
            )}
            <div>
                <h2 className="text-md font-semibold">{user.name}</h2>
            </div>
        </div>
    )
}

export default UserDetailSection
