import Link from 'next/link'
import { GridPattern } from '../components/ui/GridPattern'

export default function NotFound() {
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center">
      <GridPattern className="opacity-20 mask-fade-b" />

      <div className="relative text-center px-6">
        <p className="font-serif text-[8rem] font-semibold leading-none text-white/[0.04] sm:text-[12rem]">
          404
        </p>
        <div className="-mt-16 sm:-mt-20">
          <h1 className="font-serif text-heading-1 font-semibold text-white">
            Page introuvable
          </h1>
          <p className="mt-4 text-body text-neutral-400">
            Cette page n&apos;existe pas ou a &eacute;t&eacute; d&eacute;plac&eacute;e.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-light shadow-glow"
            >
              Retour &agrave; l&apos;accueil
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
