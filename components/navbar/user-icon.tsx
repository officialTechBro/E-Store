import { LuUser } from "react-icons/lu"
import { currentUser } from "@clerk/nextjs/server"
import Image from "next/image"

const UserIcon = async () => {
  // const {userId} = auth()
  const user = await currentUser()

  const profileImage = user?.imageUrl

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        className="w-6 h-6 rounded-full object-cover"
        alt="User profile image"
        width={38}
        height={38}
      />
    );
  }
 
  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
}
export default UserIcon