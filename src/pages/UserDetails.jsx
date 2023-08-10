import UserFrom from "./UserFrom";

const UserDetails = () => {
    return (
        <div className="lg:ml-[100px]">
            <div className="lg:flex items-center">
                <div className="avatar mt-10 sm:p-10">
                    <div className="w-36 rounded-full">
                        <img src="/src/assets/Mahmudul-Islam.jpg" />
                    </div>
                </div>
                <div className="p-2">
                   <div className="text-2xl font-bold ">Md Mahmudul Islam</div>
                   <div className="text-gray-500">Dhaka,Bangladesh</div>
                </div>
            </div>
            <UserFrom></UserFrom>
        </div>
    );
};

export default UserDetails;