import Link from "next/link"; 

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white text-sm font-medium hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
