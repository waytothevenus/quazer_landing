import { FunctionComponent } from "react";

export type FooterComponentType = {
  className?: string;
};

const FooterComponent: FunctionComponent<FooterComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch bg-surface-primary box-border overflow-auto flex flex-col items-center justify-start pt-6 md:pt-8 lg:pt-10 px-4 md:px-8 lg:px-16 pb-8 md:pb-12 lg:pb-16 gap-4 md:gap-8 lg:gap-12 shrink-0 max-w-full text-left text-base text-text-primary font-inter border-t-1 border-solid border-border-primary md:gap-6 md:pt-10 md:pb-14 lg:gap-8 lg:pt-12 lg:pb-18 lg:box-border ${className}`}
    >
      <div className="self-stretch shadow-[0px_1px_1px_rgba(255,_255,_255,_0.2)_inset,_0px_6px_12px_rgba(255,_255,_255,_0.04)_inset,_0px_12px_32px_-12px_rgba(0,_0,_0,_0.1),_0px_4px_4px_rgba(0,_0,_0,_0.1)] rounded-radius-block-large [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.12),_rgba(0,_0,_0,_0)),_#212a2b] flex flex-row items-start justify-start py-20 px-10 box-border gap-[80px] max-w-full lg:flex-wrap mq750:gap-[40px] mq450:gap-[20px] mq450:pt-[52px] mq450:pb-[52px] mq450:box-border">
        <div className="flex-1 flex flex-row items-start justify-between min-w-[502px] max-w-full gap-[20px] mq750:flex-wrap mq750:min-w-full">
          <div className="flex flex-col items-start justify-start text-lg-8">
            <div className="flex flex-col items-center justify-center gap-[6.4px]">
              <img
                className="w-16 h-16 relative rounded-[15.36px] overflow-auto shrink-0"
                alt=""
                src="/logoicon-1.svg"
              />
              <b className="w-[68px] relative leading-[100%] auto">Elevate</b>
            </div>
          </div>
          <div className="w-[156px] overflow-auto shrink-0 flex flex-col items-start justify-start gap-[24px]">
            <b className="self-stretch h-6 relative leading-[150%] font-semibold inline-block">
              Product
            </b>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[16px] text-sm text-text-tertiary">
              <div className="w-[58px] h-[21px] relative leading-[150%] inline-block">
                Features
              </div>
              <div className="w-[85px] h-[21px] relative leading-[150%] inline-block">
                For agencies
              </div>
              <div className="w-[100px] h-[21px] relative leading-[150%] inline-block">
                For freelancers
              </div>
              <div className="w-[65px] h-[21px] relative leading-[150%] inline-block">
                Feedback
              </div>
              <div className="w-[46px] h-[21px] relative leading-[150%] inline-block">
                Pricing
              </div>
            </div>
          </div>
          <div className="w-[156px] overflow-auto shrink-0 flex flex-col items-start justify-start gap-[24px]">
            <b className="self-stretch h-6 relative leading-[150%] font-semibold inline-block">
              Learn
            </b>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[16px] text-sm text-text-tertiary">
              <div className="w-[57px] h-[21px] relative leading-[150%] inline-block">
                Tutorials
              </div>
              <div className="w-[70px] h-[21px] relative leading-[150%] inline-block">
                Resources
              </div>
              <div className="w-[37px] h-[21px] relative leading-[150%] inline-block">
                Posts
              </div>
              <div className="w-[34px] h-[21px] relative leading-[150%] inline-block">
                FAQs
              </div>
            </div>
          </div>
          <div className="w-[156px] overflow-auto shrink-0 flex flex-col items-start justify-start gap-[24px]">
            <b className="self-stretch h-6 relative leading-[150%] font-semibold inline-block">
              Company
            </b>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[16px] text-sm text-text-tertiary">
              <div className="w-10 h-[21px] relative leading-[150%] inline-block">
                About
              </div>
              <div className="w-[86px] h-[21px] relative leading-[150%] inline-block">
                Case studies
              </div>
              <div className="w-[52px] h-[21px] relative leading-[150%] inline-block">
                Careers
              </div>
              <div className="w-[63px] h-[21px] relative leading-[150%] inline-block">
                Roadmap
              </div>
              <div className="w-[82px] h-[21px] relative leading-[150%] inline-block">
                For Partners
              </div>
              <div className="w-[53px] h-[21px] relative leading-[150%] inline-block">
                Contact
              </div>
            </div>
          </div>
        </div>
        <div className="w-[380px] flex flex-col items-start justify-start gap-[24px] min-w-[380px] max-w-full lg:flex-1 mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch h-6 relative leading-[150%] font-semibold inline-block">
              Webflow News Weekly in Your Mailbox
            </div>
            <div className="self-stretch h-[63px] relative text-sm leading-[150%] font-medium text-text-tertiary inline-block">
              Stay up to date on releases and business tips by joining our
              newsletter. By subscribing, you agree to our Privacy Policy.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center [row-gap:20px] text-mini text-text-secondary pt-5 mq450:flex-wrap">
            <input
              type="text"
              className="flex-1 shadow-[0px_6px_12px_rgba(255,_255,_255,_0.02)_inset,_0px_1px_1px_rgba(255,_255,_255,_0.05)_inset] rounded-tl-radius-input rounded-bl-radius-input bg-surface-tertiary box-border flex flex-col items-start justify-center py-3.5 pr-5 pl-4 min-w-[170px] whitespace-nowrap border-[1px] border-solid border-surface-tertiary"
              placeholder="Your email"
              // Add any additional attributes for email validation, e.g., pattern and required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
            />
            <button className="cursor-pointer [border:none] py-4 px-[31px] bg-primary-strong shadow-[0px_6px_12px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_1px_rgba(255,_255,_255,_0.32)_inset] rounded-81xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue">
              <div className="relative text-base tracking-[0.02em] leading-[150%] font-medium font-inter text-transparent !bg-clip-text [background:linear-gradient(#fff,_#fff),_#f9fafb] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[78px]">
                Subscribe
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] text-sm text-text-tertiary mq1050:flex-wrap">
        <div className="w-[623px] flex flex-row items-center justify-start gap-[24px] max-w-full mq750:flex-wrap">
          <div className="h-[21px] w-[242px] relative leading-[150%] inline-block">
            © 2023 Envision. All rights reserved.
          </div>
          <div className="flex-1 flex flex-row items-start justify-start gap-[24px] min-w-[232px] max-w-full mq450:flex-wrap">
            <div className="h-[21px] w-[92px] relative leading-[150%] inline-block">
              Privacy Policy
            </div>
            <div className="h-[21px] flex-1 relative leading-[150%] inline-block min-w-[73px]">
              Terms of Service
            </div>
            <div className="h-[21px] flex-1 relative leading-[150%] inline-block min-w-[68px]">
              Cookie Settings
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
          <img
            className="h-7 w-7 relative overflow-auto shrink-0 min-h-[24px]"
            alt=""
            src="/icon--facebook.svg"
          />
          <img
            className="h-7 w-7 relative overflow-auto shrink-0 min-h-[24px]"
            alt=""
            src="/icon--instagram.svg"
          />
          <img
            className="h-7 w-7 relative overflow-auto shrink-0 min-h-[24px]"
            alt=""
            src="/icon--x.svg"
          />
          <img
            className="h-7 w-7 relative overflow-auto shrink-0 min-h-[24px]"
            alt=""
            src="/icon--linkedin.svg"
          />
          <img
            className="h-7 w-7 relative overflow-auto shrink-0 min-h-[24px]"
            alt=""
            src="/icon--youtube.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
