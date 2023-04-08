import Link from "next/link";

export function Navbar() {
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
    <div className="navbar bg-base-100 border-b border-neutral border-opacity-10 flex justify-between">
      <Link href="/" className="btn btn-ghost normal-case text-xl">
        Classa
      </Link>
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
    </div>
  );
}
