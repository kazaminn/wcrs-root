import Link from "next/link";
import { ChevronRight } from "react-bootstrap-icons";
import { NAV_ITEMS } from "@/lib/constants";

export function Breadcrumbs({ segments }: { segments: string[] }) {
  return (
    <nav aria-label="現在位置" className="mb-8">
      <ol className="text-mute dark:text-mute-dark flex flex-wrap items-center gap-2 text-sm">
        <li>
          <Link
            href="/"
            className="hover:text-link dark:hover:text-link-dark transition-colors hover:underline"
          >
            {NAV_ITEMS[0].label}
          </Link>
        </li>
        {segments.map((s, i) => (
          <li key={i} className="flex items-center gap-2">
            <ChevronRight
              size={12}
              className="shrink-0 transition-colors"
              aria-hidden="true"
            />
            {i === segments.length - 1 ? (
              <span className="font-medium">{s}</span>
            ) : (
              <Link
                href={NAV_ITEMS[1].href}
                className="hover:text-link dark:hover:text-link-dark capitalize transition-colors hover:underline"
              >
                {NAV_ITEMS[1].label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
export default Breadcrumbs;
