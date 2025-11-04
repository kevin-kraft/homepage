import Gallery from "~/components/Gallery";
import ThreeViewer from "~/components/ThreeViewer";

export default function Projekte() {
    return (
        <div className="pt-16 p-8 container mx-auto w-full flex flex-col justify-center ">
            <h1 className="text-4xl  text-center "><strong>Meine Projekte</strong></h1>
            <div className="mt-8 w-full bg-[#DEDEDE] p-4 rounded-sm shadow-md ">
                <h2 className="text-1xl mb-4 border-b-2 border-blue-900"><strong>Pluginentwicklung: gg-Persistent-Vehicles</strong></h2>
                <p className="cursor-default">Dieses Projekt ist Teil des gg-scripts-Projekts, in dessen Rahmen ich Plugins für die Spieleplattform FiveM entwickle und vertreibe.
                Das Plugin dient der Fahrzeugverwaltung und bietet unter anderem die Möglichkeit, Fahrzeuge persistent zwischen Serverneustarts zu speichern.
                Eine C#-basierte Erweiterung des Projekts ist aktuell in Entwicklung und steht kurz vor der Fertigstellung (ca. 90 % abgeschlossen).
                </p>
                <br></br>
                <p><strong>Programmiersprachen:</strong> Lua, Javascript, SQL, C#</p>
                

            </div>
             <div className="mt-8 w-full bg-[#DEDEDE] p-4 rounded-sm shadow-md ">
                <h2 className="text-1xl mb-4 border-b-2 border-blue-900"><strong>Pluginentwicklung: gg-computers [In Entwicklung]</strong></h2>
                <p className="cursor-default">Dieses Plugin stellt ein virtuelles Computersystem dar, das dank umfangreicher Konfigurationsmöglichkeiten in verschiedene Betriebsmodi versetzt werden kann.
Es verfügt über ein gruppenbasiertes Rechtesystem, einen Datei-Explorer, einen Texteditor, eine Benutzerverwaltung sowie eine Einstellungsseite.
Das Projekt wurde mit JavaScript unter Verwendung von jQuery und HTML/CSS entwickelt.
Derzeit befindet sich das Script noch in Entwicklung, da einige Funktionen – etwa der Texteditor – noch nicht vollständig implementiert sind.
                </p>
                <br></br>
                <p><strong>Programmiersprachen:</strong> Lua, Javascript, SQL</p>

                <Gallery></Gallery>
            </div>

              <div className="mt-8 w-full bg-[#DEDEDE] p-4 rounded-sm shadow-md ">
                <h2 className="text-1xl mb-4 border-b-2 border-blue-900"><strong>Blender Projekte</strong></h2>
                <ThreeViewer></ThreeViewer>
            </div>
        </div>
        
    );
}
