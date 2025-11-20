import { useTranslation } from "react-i18next";
import { Form } from "react-router";


export function LanguageSelector() {
    const { i18n } = useTranslation();
    const local = i18n.language; 
  return (
    local == "de" ? 
    <Form className="">
    <button type="submit" name="lng" value="de" className="px-2 py-1 border rounded cursor-pointer hover:bg-blue-400 bg-blue-600">
          Deutsch
    </button>
    <button type="submit" name="lng" value="en" className="px-2 py-1 border rounded cursor-pointer hover:bg-blue-400">
        English
    </button>
    </Form> : 
       <Form className="">
    <button type="submit" name="lng" value="de" className="px-2 py-1 border rounded cursor-pointer hover:bg-blue-400">
          Deutsch
    </button>
    <button type="submit" name="lng" value="en" className="px-2 py-1 border rounded cursor-pointer hover:bg-blue-400 bg-blue-600">
        English
    </button>
    </Form> 
  );
}
