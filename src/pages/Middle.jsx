import UserProfile from "./UserProfile";
import UserDetails from './UserDetails';

const Middle = () => {
    return (
        <div className="lg:flex">
            <UserProfile></UserProfile>
            <UserDetails></UserDetails>
        </div>
    );
};

export default Middle;