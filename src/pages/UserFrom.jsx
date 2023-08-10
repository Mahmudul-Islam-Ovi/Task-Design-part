const UserFrom = () => {
    return (
        <div className="p-5">
            <div className="grid lg:grid-cols-2 gap-10">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold text-gray-500">Name</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold text-gray-500">Full Name</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold text-gray-500">Email</span>
                    </label>
                    <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold text-gray-500">Phone Number</span>
                    </label>
                    <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold text-gray-500">Location</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold text-gray-500">Postal Code</span>
                    </label>
                    <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                </div>
            </div>

            <div className="mt-10 text-center">
                <button className="btn  text-white btn-error btn-wide">Save Changes</button>
            </div>
        </div>
    );
};

export default UserFrom;