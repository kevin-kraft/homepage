export default function Footer() {
    return (

        <footer className="bg-gray-200 text-center py-4 mt-8 border-t-2 border-blue-700">
            <p className="text-sm text-gray-600">
                &copy; {new Date().getFullYear()} Kevin Kraft. Alle Rechte vorbehalten.
            </p>
        </footer>
    ); 
}
