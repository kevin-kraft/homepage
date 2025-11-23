import Gallery from "./Gallery";
type ProjectCardProps = {
  title: string;
  description: string;
  tech?: string[];
  images?: string[];
  links?: {
    demo?: string;
    github?: string;
  };
  children?: React.ReactNode; // <-- ADD THIS
};
export const ProjectCard = ({ title, description, tech, images, links, children } : ProjectCardProps) => {
return (
<div className="bg-gray-200 dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-200">
<h3 className="text-xl font-bold mb-2">{title}</h3>
<p className="text-sm mb-4">{description}</p>


{/* Tech stack badges */}
<div className="flex flex-wrap gap-2 mb-4">
{tech?.map((t, i) => (
<span key={i} className="px-2 py-1 rounded-md bg-gray-300 dark:bg-gray-800 text-xs border border-gray-700">
{t}
</span>
))}
</div>


{/* Image gallery (uses existing Gallery component) */}
{images && images.length > 0 && (
<   Gallery images={images} />
)}


{/* Footer with buttons */}
<div className="flex gap-3 mt-4">
{links?.demo && (
<a href={links.demo} target="_blank" className="px-3 py-2 bg-blue-600 rounded-md text-sm hover:bg-blue-700 transition">
Live Demo
</a>
)}
{links?.github && (
<a href={links.github} target="_blank" className="px-3 py-2 bg-gray-700 rounded-md text-sm hover:bg-gray-600 transition">
GitHub
</a>
)}
</div>
{children}
</div>
);
};