import { fontStyles } from "@/styles/fonts";
import { globalStyle } from "@/styles/global";

import { NavBar } from "../layouts/NavBar/NavBar";
import { ApplySection } from "./ApplySection/ApplySection";
import { HeroSection } from "./HeroSection/HeroSection";
import { IntroductionSection } from "./IntroductionSection/IntroductionSection";
import * as PageStyles from "./Page.style";
import { SponsorSection } from "./SponsorSection/SponsorSection";
import { TimeLineSection } from "./TimeLineSection/TimeLineSection";
import data from "@/__data__/index.json";
import { ApplyModalContextProvider } from "@/context/ModalContext";
import { Global } from "@emotion/react";

export default function Page() {
    return (
        <>
            <ApplyModalContextProvider>
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
            </ApplyModalContextProvider>

            <Global styles={[globalStyle, fontStyles]} />
        </>
    );
}
