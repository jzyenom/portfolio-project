import PortfolioPage from "@/components/portfolio/PortfolioPage";
import type { PortfolioContent } from "@/types/portfolio";
import { defaultPortfolioContent } from "@/lib/portfolioData";

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  return "http://localhost:3000";
};

export default async function Portfolio() {
  let content: PortfolioContent = defaultPortfolioContent;

  try {
    const res = await fetch(`${getBaseUrl()}/api/portfolio`, {
      cache: "no-store",
    });
    if (res.ok) {
      content = (await res.json()) as PortfolioContent;
    }
  } catch {
    // fall back to defaults
  }

  return <PortfolioPage content={content} />;
}
