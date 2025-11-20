// --- NEW PORTFOLIO HOMEPAGE (v2) ---
// CTA = "Zu meinen Projekten"
// Placeholder cat image kept intentionally, replace when ready.

import type { Route } from "./+types/home";
import profile from "~/assets/profile.jpeg"; 
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { ProjectCard } from "~/components/ProjectCard";
import pvImg from "~/assets/gg_persistent_vehicles_script.jpg"; 
import { getInstance } from "~/middleware/i18next";
import { data } from "react-router";
import { useTranslation } from "react-i18next";
import { Form } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kevin Kraft – Portfolio" },
    { name: "description", content: "Entdecke Projekte, Skills und berufliche Infos von Kevin Kraft." },
  ];
}

export async function loader({ context }: Route.LoaderArgs) {
  const i18n = getInstance(context);
  return data({ locale: i18n.language });
}

export default function Home({loaderData}: Route.ComponentProps) {
  let { t } = useTranslation();
  return (
    <div className="w-full">
      <main className="pt-20 px-6 max-w-6xl mx-auto">

        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <img
            src={profile}
            alt="Profilbild"
            className="w-60 h-60 rounded-full object-cover border-2 border-gray-300 shadow-lg"
          />

          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold">Kevin Kraft</h1>
            <p className="text-lg mt-3 max-w-xl">
             {t("description")}
            </p>

            <div className="flex items-center gap-4 mt-6 text-xl">
              <a href="mailto:k.krafti@web.de" className="hover:text-blue-400"><FaEnvelope /></a>
              <a href="https://www.linkedin.com/in/kevin-kraft-b86206395/" target="_blank" className="hover:text-blue-400"><FaLinkedin /></a>
              <a href="https://github.com/GlobalGurke" target="_blank" className="hover:text-blue-400"><FaGithub /></a>
            </div>

            <a href="#projekte">
              <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all cursor-pointer">
                {t("toProjects")}
              </button>
            </a>
          </div>
        </section>

        {/* ÜBER MICH */}
        <section className="bg-gray-200 dark:bg-gray-800/60 p-6 rounded-xl shadow-lg mb-10 ">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-1">{t("about_me.title")}</h2>
          <p className="mt-4 leading-7">
            {t("about_me.description")}
          </p>
        </section>

        {/* SKILLS */}
        <section className="bg-gray-200 dark:bg-gray-800/60 p-6 rounded-xl shadow-lg mb-10">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-1">{t("skills.title")}</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold mb-1">{t("skills.languages")}</p>
              <p>Java, JavaScript, TypeScript, C#, SQL, React, Node.js</p>
            </div>
            <div>
              <p className="font-semibold mb-1">{t("skills.tools")}</p>
              <p>Git, Docker, Maven, Linux, PostgreSQL, MySQL</p>
            </div>
          </div>
        </section>

        {/* PROJEKT-SECTION – PLACEHOLDER */}
        <section id="projekte" className="mb-20">
          <h2 className="text-3xl font-bold mb-6">{t("projects.title")}</h2>
          
          {/* TODO: Replace placeholders with real project components */}
          <ProjectCard title={t("projects.persistent_vehicles.title")} description={t("projects.persistent_vehicles.description")} tech={["Lua", "Javascript", "SQL"]} images={[pvImg]}></ProjectCard>
          
        </section>

      </main>

    </div>
  );
}
