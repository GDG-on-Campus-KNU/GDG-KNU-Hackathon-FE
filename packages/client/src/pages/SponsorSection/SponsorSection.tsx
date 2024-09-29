import { SponsorCard } from "@/components/Card/Sponsor";
import { SectionTitle } from "@/components/Title/SectionTitle";

export interface SponsorSectionProps {
    imgLists: string[];
}

export const SponsorSection = (props: SponsorSectionProps) => {
    return (
        <>
            <SectionTitle
                subtitle="SPONSOR"
                title={
                    <>
                        <span>VISION CHALLENGETHON 을</span> <br />
                        <span>빛내는 후원사를 소개합니다</span>
                    </>
                }
            />
            {props.imgLists.map((img, index) => {
                return <SponsorCard key={index} imgSrc={img} />;
            })}
        </>
    );
};
