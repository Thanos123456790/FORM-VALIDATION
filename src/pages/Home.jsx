import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        phoneNo: '',
        country: '',
        city: '',
        panNo: '',
        aadharNo: ''
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required';
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.phoneNo) newErrors.phoneNo = 'Phone Number is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.panNo) newErrors.panNo = 'PAN No. is required';
        if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar No. is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            navigate('/success', { state: { formData } });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Registration Form
                    </h2>
                </div>
                <form className="mt-8 space-y-6 bg-white p-10 rounded-lg shadow-md" onSubmit={handleSubmit}>
                    {/* row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                            {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                            {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
                        </div>
                    </div>
                    {/* row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Username</label>
                            <input type="text" name="username" required value={formData.username} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                            {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input type="tel" name="phoneNo" required value={formData.phoneNo} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                            {errors.phoneNo && <span className="text-red-500 text-sm">{errors.phoneNo}</span>}
                        </div>
                    </div>
                    {/* row 3 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="email" required value={formData.email} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input type={showPassword ? 'text' : 'password'} required name="password" value={formData.password} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="mt-1 text-blue-500 hover:text-blue-700 transition duration-300">Show/Hide</button>
                            {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                        </div>
                    </div>
                    {/* row 4 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Country</label>
                            <select name="country" required value={formData.country} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full">
                                <option value="">Select Country</option>
                                <option value="india">India</option>
                                <option value="usa">USA</option>
                                {/* Add more countries as needed */}
                            </select>
                            {errors.country && <span className="text-red-500 text-sm">{errors.country}</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">City</label>
                            <select name="city" required value={formData.city} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full">
                                <option value="">Select City</option>
                                <option value="mumbai">Mumbai</option>
                                <option value="newyork">New York</option>
                                {/* Add more cities as needed */}
                            </select>
                            {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}
                        </div>
                    </div>
                    {/* row 5 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">PAN No.</label>
                            <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                            {errors.panNo && <span className="text-red-500 text-sm">{errors.panNo}</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Aadhar No.</label>
                            <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                            {errors.aadharNo && <span className="text-red-500 text-sm">{errors.aadharNo}</span>}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <input type="submit" value="Submit" className="mt-6 px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300" disabled={Object.keys(errors).length > 0} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Home;
