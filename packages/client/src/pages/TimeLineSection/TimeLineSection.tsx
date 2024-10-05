import { TimeLineCard } from "@/components/TimeLine/Card";
import { TimeLineContainer } from "@/components/TimeLine/Container";
import { SectionTitle } from "@/components/Title/SectionTitle";

import data from "@/__data__/index.json";

export const TimeLineSection = () => {
    return (
        <>
            <SectionTitle
                subtitle="TIMELINE"
                title={
                    <>
                        <span>VISION CHALLENGETHON의</span> <br />
                        <span>타임라인을 알려드립니다</span>
                    </>
                }
            />
            {data.timelineSection.map((timeline) => {
                return (
                    <TimeLineContainer>
                        {timeline.map((schedule) => {
                            return (
                                <TimeLineCard
                                    date={schedule.date}
                                    time={schedule.time}
                                    title={schedule.title}
                                    description={schedule.description}
                                />
                            );
                        })}
                    </TimeLineContainer>
                );
            })}
        </>
    );
};
