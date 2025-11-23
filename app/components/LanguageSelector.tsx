import { useTranslation } from "react-i18next";
import { Form } from "react-router";

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const local = i18n.language;

  return (
    <Form method="post" action="/set-locale">
      <select
        name="lng"
        defaultValue={local}
        onChange={(e) => e.currentTarget.form?.submit()}
        className="px-2 py-1 border rounded cursor-pointer bg-gray-100 dark:bg-gray-800"
      >
        <option value="de">DE</option>
        <option value="en">EN</option>
      </select>
    </Form>
  );
}
