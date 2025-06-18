import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-slate-900 text-white px-4">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-2xl mb-6">Oops! Page not found.</p>
            <p className="text-slate-400 mb-8 max-w-md">
                The page you’re looking for doesn’t exist or has been moved.
            </p>
            <Link
                to="/"
                className="flex items-center gap-2 border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition"
            >
                <FaArrowLeft />
                Back to Home
            </Link>
        </div>
    );
}

export default NotFound;
