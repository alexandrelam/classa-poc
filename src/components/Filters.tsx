export function Filters() {
  return (
    <div className="card-bordered card prose w-[26rem] p-8">
      <div className="flex items-center justify-between">
        <h2 className="m-0">Filtres</h2>
        <button className="btn-ghost btn-xs btn flex gap-2">
          <span>Effacer</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      <h4>Disponibilité</h4>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="checkbox-primary checkbox checkbox-sm"
        />
        <span>Freelance / Contrat</span>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="checkbox-primary checkbox checkbox-sm"
        />
        <span>CDI</span>
      </div>
      <h4>Ce qui pourrait vous intéresser</h4>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="match"
            defaultChecked
            className="radio-primary radio"
          />
          <span>Meilleur matchs</span>
          <span className="ml-auto mr-4 text-sm font-bold">4</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <input type="radio" name="match" className="radio-primary radio" />
          <span>Récents</span>
          <span className="ml-auto mr-4 font-bold">4</span>
        </div>
        <div className="flex items-center gap-2">
          <input type="radio" name="match" className="radio-primary radio" />
          <span>Sauvegardé</span>
          <span className="ml-auto mr-4 text-sm font-bold">1</span>
        </div>
      </div>
      <h4>Rémunération</h4>
      <label className="label">
        <span className="label-text">Minimum ?</span>
      </label>
      <input
        type="number"
        placeholder="70 000€"
        className="input-bordered input input-sm w-full max-w-xs"
      />
    </div>
  );
}
