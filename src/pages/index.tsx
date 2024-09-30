import Image from "next/image";
import localFont from "next/font/local";
import ProgressBar from "@/components/atoms/progressBars/index";
import { IconSocial, IconCard } from "@/components/atoms/icons/index";
import {
  TitlePrincipal,
  TitleSecondary,
  TextPrincipal,
} from "@/components/atoms/texts";
import DurationLabel from "@/components/atoms/durationLabel/index";
import KnowledgeCard from "@/components/molecules/knowledgeCard";

import EducationCard from "@/components/molecules/educationCard";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <h1>Hola desde Next</h1>
      <button className="bg-primary rounded w-40 h-12">Hire me</button>
      <TitlePrincipal title="Title Principal"/>
      <TitleSecondary title="Title Secondary"/>
      <TitleSecondary title="Title Secondary" />
      <TextPrincipal text="Text Principal"/>

      <ProgressBar percentage={80} label="HTML" />
      <IconSocial icon="mdi:github" url="https://github.com/jonaleal" />
      <IconCard icon="tabler:device-desktop-code" />
      <DurationLabel initial="2022-01-01" final="2022-12-31" />

      <KnowledgeCard icon="mdi:github" title="Title" text="This is a text" />

      <EducationCard
        title1="Title1"
        initial="2022-01-01"
        final="2022-12-31"
        title2="Title2"
        description="This is a text"
      />
    </div>
  );
}
