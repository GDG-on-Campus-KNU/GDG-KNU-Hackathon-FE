import { NavBar } from "../layouts/NavBar/NavBar";
import { ApplySection } from "./ApplySection/ApplySection";
import { HeroSection } from "./HeroSection/HeroSection";
import { IntroductionSection } from "./IntroductionSection/IntroductionSection";
import * as PageStyles from "./Page.style";
import { SponsorSection } from "./SponsorSection/SponsorSection";
import { TimeLineSection } from "./TimeLineSection/TimeLineSection";
import data from "@/__data__/index.json";

export default function Page() {
    return (
        <PageStyles.Main>
            <NavBar location={data.navTop.location} locationDetail={data.navTop.locationDetail} />
            <HeroSection
                title={data.heroSection.title}
                date={data.heroSection.date}
                location={data.heroSection.location}
            />
            <IntroductionSection />
            <TimeLineSection />
            <SponsorSection imgLists={data.sponsorSection.imgLists} />
            <ApplySection />
        </PageStyles.Main>
    );
}
