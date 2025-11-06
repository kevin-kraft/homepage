// --- NEW PORTFOLIO HOMEPAGE (v2) ---
// CTA = "Zu meinen Projekten"
// Placeholder cat image kept intentionally, replace when ready.

import type { Route } from "./+types/home";
import profile from "~/assets/profile.png"; // TODO: replace with real photo later
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Footer from "~/components/Footer";
import { ProjectCard } from "~/components/ProjectCard";
import pvImg from "~/assets/gg_persistent_vehicles_script.jpg"
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kevin Kraft – Portfolio" },
    { name: "description", content: "Entdecke Projekte, Skills und berufliche Infos von Kevin Kraft." },
  ];
}

export default function Home() {
  return (
    <div className="w-full text-gray-200">
      <main className="pt-20 px-6 max-w-6xl mx-auto">

        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <img
            src={profile}
            alt="Profilbild"
            className="w-40 h-40 rounded-full object-cover border-2 border-gray-300 shadow-lg"
          />

          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold">Kevin Kraft</h1>
            <p className="text-lg text-gray-300 mt-3 max-w-xl">
              Full-Stack Entwickler mit Fokus auf skalierbare Web- & Game-Systeme. Aktuell Wirtschaftsingenieurwesen am KIT.
            </p>

            <div className="flex items-center gap-4 mt-6 text-xl">
              <a href="mailto:k.krafti@web.de" className="hover:text-blue-400"><FaEnvelope /></a>
              <a href="https://www.linkedin.com/in/kevin-kraft-b86206395/" target="_blank" className="hover:text-blue-400"><FaLinkedin /></a>
              <a href="https://github.com/GlobalGurke" target="_blank" className="hover:text-blue-400"><FaGithub /></a>
            </div>

            <a href="#projekte">
              <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all">
                Zu meinen Projekten
              </button>
            </a>
          </div>
        </section>

        {/* ÜBER MICH */}
        <section className="bg-gray-800/60 p-6 rounded-xl shadow-lg mb-10">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-1">Über mich</h2>
          <p className="mt-4 leading-7 text-gray-300">
            Ich entwickle Softwarelösungen mit Schwerpunkt auf Web- und Gameserver-Architektur. Neben meinem Studium am Karlsruher
            Institut für Technologie leite ich Projekte, betreue Teams und baue Systeme, die im realen Einsatz genutzt werden.
          </p>
        </section>

        {/* SKILLS */}
        <section className="bg-gray-800/60 p-6 rounded-xl shadow-lg mb-10">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-1">Technische Skills</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold mb-1">Sprachen & Frameworks:</p>
              <p className="text-gray-300">Java, JavaScript, TypeScript, C#, SQL, React, Node.js</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Tools & Infrastruktur:</p>
              <p className="text-gray-300">Git, Docker, Maven, Linux, PostgreSQL, MySQL</p>
            </div>
          </div>
        </section>

        {/* PROJEKT-SECTION – PLACEHOLDER */}
        <section id="projekte" className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Ausgewählte Projekte</h2>
          
          {/* TODO: Replace placeholders with real project components */}
          <ProjectCard title="GG Persistent Vehicles" description="BESCHREIBUNG" tech={["Lua", "Javascript", "SQL"]} images={[pvImg]}></ProjectCard>
          
        </section>

      </main>

    </div>
  );
}
