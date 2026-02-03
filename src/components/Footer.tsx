import Image from "next/image";
import Link from "next/link";
import { Github } from "react-bootstrap-icons";
import { SITE_METADATA } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="pb-safe border-border bg-bg text-fg dark:border-border-dark dark:bg-bg-dark dark:text-fg-dark border-t">
      <div className="mx-auto max-w-2xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <Image
            src={SITE_METADATA.author.picture}
            alt={SITE_METADATA.author.name}
            className="border-border dark:border-border-dark h-16 w-16 rounded-full border object-cover"
            width="64"
            height="64"
            unoptimized={true}
          />
          <div className="text-center sm:text-left">
            <h2 className="mb-1 text-lg font-bold">
              {SITE_METADATA.author.name}
            </h2>
            <p className="text-sm leading-relaxed">
              {SITE_METADATA.author.description}
            </p>
            <div className="mt-4 flex justify-center gap-4 sm:justify-start">
              <Link
                href={SITE_METADATA.author.github}
                aria-label="Github"
                className="text-mute hover:text-link dark:text-mute-dark dark:hover:text-link-dark transition-colors hover:underline"
              >
                <Github size={20} />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-mute dark:text-mute-dark mt-12 text-center text-xs">
          © 2026 {SITE_METADATA.author.name}.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
