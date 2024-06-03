import { FunctionComponent } from "react";

export type NavComponentType = {
  className?: string;
};

const NavComponent: FunctionComponent<NavComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start top-[0] z-[99] sticky max-w-full ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center py-4 px-16 box-border max-w-full mq750:pl-8 mq750:pr-8 mq750:box-border">
        <header className="self-stretch shadow-[0px_1px_1px_rgba(255,_255,_255,_0.2)_inset,_0px_6px_12px_rgba(255,_255,_255,_0.04)_inset,_0px_12px_32px_-12px_rgba(0,_0,_0,_0.1),_0px_4px_4px_rgba(0,_0,_0,_0.1)] rounded-81xl bg-border-primary flex flex-row items-center justify-between py-4 pr-4 pl-[22px] box-border gap-[20px] max-w-full text-left text-4xl-8 text-text-primary font-inter">
          <div className="flex flex-row items-center justify-center gap-[5.6px]">
            <img
              className="h-7 w-7 relative rounded-[6.72px] overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/logoicon.svg"
            />
            <b className="relative leading-[24px] font-bold inline-block min-w-[85px] whitespace-nowrap">
              Quazer
            </b>
          </div>
          <div className="w-[534px] flex flex-row items-center justify-start gap-[48px] max-w-full text-sm mq750:hidden mq750:gap-[24px]">
            <div className="flex flex-row items-center justify-start">
              <div
                className="relative leading-[150%] font-medium inline-block min-w-[59px]"
              >
                Features
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="relative leading-[150%] font-medium inline-block min-w-[63px]">
                Solutions
              </div>
              <div className="flex flex-col items-center justify-center pt-2.5 px-[3px] pb-2">
                <img
                  className="w-1.5 h-[3px] relative"
                  alt=""
                  src="/union1.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="relative leading-[150%] font-medium inline-block min-w-[55px]">
                Projects
              </div>
              <div className="flex flex-col items-center justify-center pt-2.5 px-[3px] pb-2">
                <img
                  className="w-1.5 h-[3px] relative"
                  alt=""
                  src="/union1.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="relative leading-[150%] font-medium inline-block min-w-[64px]">
                Company
              </div>
              <div className="flex flex-col items-center justify-center pt-2.5 px-[3px] pb-2">
                <img
                  className="w-1.5 h-[3px] relative"
                  alt=""
                  src="/union1.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[150%] font-medium inline-block min-w-[47px]">
                Pricing
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[13.5px] px-6 bg-primary-strong shadow-[0px_6px_12px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_1px_rgba(255,_255,_255,_0.32)_inset] rounded-81xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue">
            <div className="relative text-sm tracking-[0.02em] leading-[150%] font-medium font-inter text-transparent !bg-clip-text [background:linear-gradient(#fff,_#fff),_#f9fafb] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[78px]">
              Contact Us
            </div>
          </button>
        </header>
      </div>
    </div>
  );
};

export default NavComponent;
