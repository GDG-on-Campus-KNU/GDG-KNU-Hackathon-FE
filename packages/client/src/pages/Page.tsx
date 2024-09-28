import { NavBar } from "../layouts/NavBar/NavBar";
import { HeroSection } from "./HeroSection/HeroSection";
import { IntroductionSection } from "./IntroductionSection/IntroductionSection";
import * as PageStyles from "./Page.style";
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
        </PageStyles.Main>
    );
}
