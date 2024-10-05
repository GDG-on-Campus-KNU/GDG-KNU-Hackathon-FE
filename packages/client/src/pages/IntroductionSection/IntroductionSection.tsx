import { SectionTitle } from "@/components/Title/SectionTitle";
import { TopicCard } from "@/components/TopicCard/TopicCard";
import { TopicCardContainer } from "@/components/TopicCard/TopicCardContainer";

import data from "@/__data__/index.json";

export const IntroductionSection = () => {
    return (
        <>
            <SectionTitle
                subtitle="MAKE PUBLIC"
                title={
                    <>
                        <span>VISION CHALLENGETHON 의</span> <br />
                        <span>주제를 공개합니다</span>
                    </>
                }
            />

            <TopicCardContainer
                title={
                    <>
                        <span>UN의 17가지 지속가능한 발전목표 중</span>
                        <br />
                        <span>하나 이상을 해결하는 것</span>
                    </>
                }
            >
                {data.introductionSection.topics.map((topic, index) => {
                    return <TopicCard key={index} index={index} content={topic} />;
                })}
            </TopicCardContainer>
        </>
    );
};
