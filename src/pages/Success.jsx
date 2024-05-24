import { useLocation } from 'react-router-dom';

const Success = () => {
    const location = useLocation();
    const { formData } = location.state || {};

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-md">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">Submitted Data</h2>
                <div className="mt-8 space-y-4">
                    {Object.entries(formData).map(([key, value]) => (
                        <div key={key} className="text-gray-700">
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Success;
