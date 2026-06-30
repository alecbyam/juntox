import Link from 'next/link'
import { Badge } from '../../components/ui/Badge'
import { GridPattern } from '../../components/ui/GridPattern'

export default function AuthRootPage() {
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center">
      <GridPattern className="opacity-20 mask-fade-b" />

      <div className="container-content relative px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="primary">Authentification</Badge>
          <h1 className="mt-6 font-serif text-heading-1 font-semibold text-white">
            Accédez à votre espace JuntoX
          </h1>
          <p className="mt-4 text-body text-neutral-400">
            Connectez-vous pour piloter vos projets, accéder à l&apos;assistant IA et gérer votre
            collaboration avec JuntoX.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-2">
          <Link
            href="/auth/login"
            className="card-interactive group text-center"
          >
            <h2 className="font-serif text-heading-3 font-semibold text-white">Connexion</h2>
            <p className="mt-3 text-sm text-neutral-400">
              Accédez à votre espace avec votre email et mot de passe.
            </p>
          </Link>
          <Link
            href="/auth/register"
            className="card-interactive group text-center"
          >
            <h2 className="font-serif text-heading-3 font-semibold text-white">Inscription</h2>
            <p className="mt-3 text-sm text-neutral-400">
              Créez un compte et rejoignez la plateforme JuntoX.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
