import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  const query = router.query;

  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <h1 className="text-5xl font-bold text-error mb-2">
          Une erreur est survenue
        </h1>
        <p className="m-0 text-neutral text-lg">
          Envoyez ceci aux développeurs : {query.msg}
        </p>
      </div>
    </div>
  );
}
