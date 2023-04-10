import { MainLayout } from "@/components/MainLayout";

export default function Settings() {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];

  function handleThemeChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newTheme = e.target.value;
    document.querySelector("html")?.setAttribute("data-theme", newTheme);
  }

  return (
    <MainLayout
      title="Settings"
      breadcrumbs={[
        {
          link: "/",
          name: "Home",
        },
        {
          link: "/profile",
          name: "Profile",
        },
        {
          link: null,
          name: "Settings",
        },
      ]}
    >
      <label className="input-group">
        <span>Theme</span>
        <select
          className="select select-primary w-full max-w-xs"
          onChange={handleThemeChange}
        >
          {themes.map((theme, index) => (
            <option
              key={index}
              defaultValue={theme}
              selected={theme === "garden"}
            >
              {theme}
            </option>
          ))}
        </select>
      </label>
    </MainLayout>
  );
}
