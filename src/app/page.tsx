import { AdversitingBanner } from "@/components/Sessions/AdversitingBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <AdversitingBanner />
    </div>
  );
}
