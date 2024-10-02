import { CentralSide, LeftSide, RightSide } from "@/components/templates/index";

/**
 * The root component for the home page.
 *
 * This component renders the main content for the home page, which includes the
 * left, central and right sides of the page. The left side contains the
 * personal information. The central side contains the main information, such as
 * the knowledge and education info. The right side contains the social media
 * links.
 *
 * @returns {React.ReactElement} The rendered Home component.
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-2 lg:flex-row">
      <LeftSide />
      <CentralSide />
      <RightSide />
    </main>
  );
}
