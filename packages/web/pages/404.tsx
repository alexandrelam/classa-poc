import Link from "next/link";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  const query = router.query;

  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <h1 className="text-5xl font-bold text-error mb-2">
          404 - Cette page n&apos;existe pas
        </h1>
        <Link href="/" className="text-lg text-ghost">
          Retourner sur la page principale
        </Link>
      </div>
    </div>
  );
}
