import { FunctionComponent } from "react";
import NavComponent from "../components/NavComponent";
import FooterComponent from "../components/FooterComponent";

const DesignVariant: FunctionComponent = () => {
  return (
    <div className="w-full  relative bg-surface-primary overflow-auto flex flex-col items-start justify-start pt-0 px-0 pb-9 box-border gap-[337px] leading-[normal] tracking-[normal] mq750:gap-[168px] mq450:h-auto mq450:gap-[84px]">
      <main className="self-stretch flex flex-col items-start justify-start gap-[55px] shrink-0 [debug_commit:bf4bc93] max-w-full mq750:gap-[27px]">
        <NavComponent />
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-16 box-border max-w-full text-center text-[90px] text-primary-strong font-zekton mq750:pl-8 mq750:pr-8 mq750:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[23px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
              <div className="w-[973px] flex flex-col items-center justify-start py-0 px-0 box-border relative gap-[32px] max-w-full mq750:gap-[16px]">
                <div className="w-[1065px] flex flex-col items-center justify-start py-0 px-[13px] box-border gap-[24px] max-w-[110%] shrink-0">
                  <h1 className="m-0 self-stretch relative text-inherit leading-[110%] font-normal font-inherit mq450:text-[27px] mq450:leading-[40px] mq1050:text-[45px] mq1050:leading-[59px]">
                    <span>{`Discover `}</span>
                    <span className="text-text-primary">
                      the Future of Business with Quazer Tech's SaaS Solutions
                    </span>
                  </h1>
                  <h2 className="m-0 w-[748px] relative text-[24px] leading-[150%] font-medium font-inter text-text-secondary inline-block max-w-full mq450:text-[19px] mq450:leading-[29px]">
                    Welcome to Quazer Tech, where innovation meets efficiency.
                    Our cutting-edge SaaS solutions are designed to
                    revolutionize the way you do business, offering unparalleled
                    capabilities to streamline operations, boost productivity,
                    and drive growth.
                  </h2>
                </div>
                <div className="flex flex-row items-center justify-start gap-[10px] mq450:flex-wrap">
                  <button className="cursor-pointer [border:none] py-4 px-[31px] bg-primary-strong shadow-[0px_6px_12px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_1px_rgba(255,_255,_255,_0.32)_inset] rounded-81xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue">
                    <div className="relative text-base tracking-[0.02em] leading-[150%] font-medium font-inter text-transparent !bg-clip-text [background:linear-gradient(#fff,_#fff),_#f9fafb] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[78px]">
                      Start now
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-4 pr-8 pl-5 bg-surface-tertiary shadow-[0px_6px_12px_rgba(255,_255,_255,_0.06)_inset,_0px_1px_1px_rgba(255,_255,_255,_0.16)_inset] rounded-81xl flex flex-row items-center justify-center gap-[8px] hover:bg-dimgray">
                    <img
                      className="h-6 w-6 relative overflow-auto shrink-0 min-h-[24px]"
                      alt=""
                      src="/play.svg"
                    />
                    <div className="relative text-base tracking-[0.02em] leading-[150%] font-medium font-inter text-text-primary text-left inline-block min-w-[46px]">
                      Demo
                    </div>
                  </button>
                </div>
                <img
                  className="w-[514px] h-[19px] absolute !m-[0] top-[196px] right-[0px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group.svg"
                />
              </div>
            </div>
            <img
              className="self-stretch relative rounded-xl max-w-full overflow-auto max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-31@2x.png"
            />
            <footer className="self-stretch full-width overflow-auto flex flex-row items-start justify-start py-0 px-[49px] box-border max-w-full lg:pl-6 lg:pr-6 lg:box-border">
              <div className="ml-[-113px] h-[184px]  flex flex-row items-start justify-start py-0 pr-0 pl-[54px] box-border shrink-0 [debug_commit:bf4bc93] mq450:pl-5 mq450:box-border">
                <div className="ml-[-64px] self-stretch w-16 relative bg-primary-strong shrink-0 [debug_commit:bf4bc93]" />
                <div className="self-stretch w-[200px] relative [background:linear-gradient(90deg,_#090b0c,_rgba(9,_11,_12,_0))] shrink-0 [debug_commit:bf4bc93] z-[1]" />
              </div>
              <div className="self-stretch full-width flex flex-col items-start justify-start pt-20 px-0 pb-0 box-border max-w-full shrink-0 ml-[-140.7px]">
                <div className="self-stretch full-width flex flex-row flex-wrap items-start justify-between shrink-0 [debug_commit:bf4bc93] gap-[5vw]">
                  <img
                    className="self-stretch w-[143.2px] relative max-h-full overflow-auto shrink-0 min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/webflow.svg"
                  />
                  <img
                    className="self-stretch w-[112.5px] relative max-h-full overflow-auto shrink-0 min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/microsoft.svg"
                  />
                  <img
                    className="self-stretch w-[88.5px] relative max-h-full overflow-auto shrink-0 min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/openai.svg"
                  />
                  <img
                    className="self-stretch w-[79.5px] relative max-h-full overflow-auto shrink-0 min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/amazon.svg"
                  />
                  <img
                    className="self-stretch w-[107.5px] relative max-h-full overflow-auto shrink-0 object-cover min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/youtube@2x.png"
                  />
                  <img
                    className="self-stretch w-[71px] relative max-h-full overflow-auto shrink-0 min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/google.svg"
                  />
                  <img
                    className="self-stretch w-[128.4px] relative max-h-full overflow-auto shrink-0 min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/nvidia.svg"
                  />
                  <img
                    className="self-stretch w-[100.6px] relative max-h-full overflow-auto shrink-0 min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/amd.svg"
                  />
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
      <FooterComponent />
    </div>
  );
};

export default DesignVariant;
