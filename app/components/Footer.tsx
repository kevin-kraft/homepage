export default function Footer() {
    return (

        <footer className="bg-gray-800 text-center py-4 mt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Kevin Kraft. Alle Rechte vorbehalten.
            </p>
        </footer>
    ); 
}
