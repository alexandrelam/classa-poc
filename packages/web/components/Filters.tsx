export function Filters() {
  return (
    <div className="prose card card-bordered w-[26rem] p-8">
      <div className="flex justify-between items-center">
        <h2 className="m-0">Filtres</h2>
        <button className="btn btn-ghost btn-xs flex gap-2">
          <span>Effacer</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
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
          className="checkbox checkbox-sm checkbox-primary"
        />
        <span>Freelance / Contrat</span>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="checkbox checkbox-sm checkbox-primary"
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
            className="radio radio-primary"
          />
          <span>Meilleur matchs</span>
          <span className="ml-auto mr-4 font-bold text-sm">4</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <input type="radio" name="match" className="radio radio-primary" />
          <span>Récents</span>
          <span className="ml-auto mr-4 font-bold">4</span>
        </div>
        <div className="flex items-center gap-2">
          <input type="radio" name="match" className="radio radio-primary" />
          <span>Sauvegardé</span>
          <span className="ml-auto mr-4 font-bold text-sm">1</span>
        </div>
      </div>
      <h4>Rémunération</h4>
      <label className="label">
        <span className="label-text">Minimum ?</span>
      </label>
      <input
        type="number"
        placeholder="70 000€"
        className="input input-bordered input-sm w-full max-w-xs"
      />
    </div>
  );
}
