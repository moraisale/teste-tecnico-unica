import { AdversitingBanner } from "@/components/Sessions/AdversitingBanner";
import { BuildYourFutureSession } from "@/components/Sessions/BuildYourFutureSession";
import { CreatingTomorrowBanner } from "@/components/Sessions/CreatingTomorrowBanner";
import { DepositionsSession } from "@/components/Sessions/DepositionsSession.";
import { MissionVisionSession } from "@/components/Sessions/MissionVisionSession";
import { StatisticsSession } from "@/components/Sessions/StatisticsSession";
import { UniqueJourneySession } from "@/components/Sessions/UniqueJourneySession";

export default function Home() {
  return (
    <div className="flex flex-col">
      <AdversitingBanner />
      <CreatingTomorrowBanner />
      <StatisticsSession />
      <BuildYourFutureSession />
      <MissionVisionSession />
      <UniqueJourneySession />
      <DepositionsSession />
    </div>
  );
}
