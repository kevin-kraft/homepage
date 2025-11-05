import type { Route } from "./+types/home";
import profile from "~/assets/profile.png";
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa";
import { FaLandmark } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa"; 
import Footer from "~/components/Footer";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Homepage - Kevin Kraft" },
    { name: "description", content: "Willkommen auf der Homepage von Kevin Kraft!" },
  ];
}

export default function Home() {
  const infoItems = [
  { icon: <FaRegCalendarAlt />, text: <p className="cursor-default">Geboren am: 03.01.2005, Baden Baden</p>},
  { icon: <FaMapMarker />, text: <p  className="cursor-default">Gernsbach</p> },
  { icon: <FaEnvelope />, text: <p  className="cursor-default">k.krafti@web.de</p> },
  { icon: <FaLandmark />, text: <p  className="cursor-default">Karlsruher Insititut für Technologie</p> },
  { icon: <FaLinkedin />, text: <a href="https://www.linkedin.com/in/kevin-kraft-b86206395/" target="_blank" rel="noopener noreferrer">Kevin Kraft</a> },
  { icon: <FaGithub />, text: <a href="https://github.com/GlobalGurke" target="_blank" rel="noopener noreferrer">Github</a> },
];
  return (
    <div className="w-full block">
    <main className="pt-16 p-8 container mx-auto">
      <div className="w-full block">
          <div className="w-full flex justify-between items-start">
            <div className="bg-[#DEDEDE]  p-6 rounded-lg shadow-md w-full max-w-md">
              <img
                src={profile}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 mx-auto "
              />
              <h1 className="text-center my-5"><strong>Kevin Kraft</strong></h1>
              {infoItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2 hover:text-blue-900   ">
                  {item.icon} {item.text}
                </div>
              ))}
            </div>
            <div className="w-full bg-[#DEDEDE] p-6 rounded-lg shadow-md  mx-4 ">
              <h1 className="border-b-2 border-blue-900"><strong>Über Mich</strong></h1>
              <p className="my-4">Mein Name ist Kevin Kraft. Ich habe mein Abitur in Baden-Baden abgeschlossen und studiere derzeit Wirtschaftsingenieurwesen (Bachelor) am Karlsruher Institut für Technologie. Aktuell befinde ich mich im 5. Semester und plane, mein Studium im Sommersemester 2027 abzuschließen.
Neben meinem Studium interessiere ich mich leidenschaftlich für Softwareentwicklung und Projektmanagement. In diesem Bereich habe ich bereits mehrere private Projekte umgesetzt, darunter die Entwicklung von Spieleservern sowie Plugins für verschiedene Plattformen. Weitere Informationen zu meinen Projekten finden Sie auf meiner Projektseite. 
              </p>
                <div className="space-y-4">
                  {/* Technische Skills */}
                  <div>
                    <h3 className="font-semibold border-b-2 border-blue-900">Technische Fähigkeiten</h3>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li><strong>Programmiersprachen:</strong> Java, JavaScript, TypeScript, C#, Lua, SQL, teilweise PHP, C++</li>
                      <li><strong>Webentwicklung:</strong> HTML, CSS, React, Node.js</li>
                      <li><strong>Datenbanken:</strong> MySQL, PostgreSQL</li>
                      <li><strong>Tools & Infrastruktur:</strong> Git, Docker, Maven, Linux, Apache</li>
                    </ul>
                  </div>

                  {/* Soft Skills / Projektmanagement */}
                  <div>
                    <h3 className="font-semibold border-b-2 border-blue-900">Soft Skills & Projektmanagement</h3>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Teammanagement & Projektleitung</li>
                      <li>Erfahrung als Tutor</li>
                    </ul>
                  </div>

                  {/* Office / Standard Tools */}
                  <div>
                    <h3 className="font-semibold border-b-2 border-blue-900">Office & Standard-Tools</h3>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Excel, Word, PowerPoint</li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </main>
     <Footer />
    </div>
  );
}
