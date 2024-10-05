import { ApplyPositionContainer } from "@/components/ApplyPosition/Container";
import { ApplyPositionItem } from "@/components/ApplyPosition/Item";
import { SubmitButton } from "@/components/Button/SubmitButton";
import { Input } from "@/components/Form/Input";
import { Text } from "@/components/Text/Text";
import { SectionTitle } from "@/components/Title/SectionTitle";

import { useApply } from "@/hooks/useApply";
import { useApplySectionAnimation } from "@/hooks/useApplySectionAnimation";

import envelopBack from "@/assets/images/envelop-behind.svg";
import envelopFront from "@/assets/images/envelop-front.svg";
import logo from "@/assets/images/logoBlue.svg";

import * as ApplySectionStyles from "./ApplySection.style";
import { ApplyPositionContextProvider } from "@/context/ApplyPositionContext";

export const ApplySection = () => {
    useApplySectionAnimation();

    const {
        nameRef,
        studentIdRef,
        majorRef,
        phoneNumberRef,
        githubIdRef,
        teamNameRef,
        emailRef,
        position,
        setPosition,
        handleSubmit,
    } = useApply();

    return (
        <>
            <SectionTitle
                subtitle="APPLY"
                title={
                    <>
                        <span>미래를 향한 도전 속으로, </span>
                        <span>여러분을 초대합니다!</span>
                    </>
                }
            />

            <ApplySectionStyles.EnvelopWrapper id="apply-section">
                <ApplySectionStyles.EnvelopContainer className="envelop-container">
                    <ApplySectionStyles.Form>
                        <ApplySectionStyles.Logo src={logo} alt="apply-logo" />

                        <ApplySectionStyles.FormContainer>
                            <Input ref={nameRef} label="이름" type="text" />
                            <Input ref={studentIdRef} label="학번" type="number" />
                            <Input ref={majorRef} label="전공" type="text" />
                            <Input ref={phoneNumberRef} label="전화번호" type="text" />
                            <Input ref={emailRef} label="이메일" type="email" />
                        </ApplySectionStyles.FormContainer>

                        <ApplySectionStyles.Line />

                        <ApplySectionStyles.FormContainer>
                            <ApplySectionStyles.ApplyLabel>
                                <Text size="s" color="var(--color-blue)" weight="bold">
                                    직렬 선택
                                </Text>
                            </ApplySectionStyles.ApplyLabel>

                            <ApplyPositionContextProvider onChange={setPosition}>
                                <ApplyPositionContainer>
                                    <ApplyPositionItem value="FRONTEND">프론트엔드</ApplyPositionItem>
                                    <ApplyPositionItem value="BACKEND">백엔드</ApplyPositionItem>
                                    <ApplyPositionItem value="ANDROID">안드로이드</ApplyPositionItem>
                                    <ApplyPositionItem value="DESIGN">디자인</ApplyPositionItem>
                                    <ApplyPositionItem value="PM">기획</ApplyPositionItem>
                                </ApplyPositionContainer>
                            </ApplyPositionContextProvider>
                        </ApplySectionStyles.FormContainer>

                        <ApplySectionStyles.Line />

                        <ApplySectionStyles.FormContainer>
                            <Input ref={githubIdRef} label="깃허브 ID" type="text" disabled={position === "DESIGN"} />
                            <Input ref={teamNameRef} label="팀이름" type="text" />
                        </ApplySectionStyles.FormContainer>

                        <SubmitButton onClick={handleSubmit}>신청하기</SubmitButton>
                    </ApplySectionStyles.Form>
                </ApplySectionStyles.EnvelopContainer>

                <ApplySectionStyles.Envelop>
                    <ApplySectionStyles.EnvelopFront className="envelop" src={envelopFront} alt="envelop-cover" />
                    <ApplySectionStyles.EnvelopBack className="envelop" src={envelopBack} alt="envelop-cover" />
                </ApplySectionStyles.Envelop>
            </ApplySectionStyles.EnvelopWrapper>
        </>
    );
};
