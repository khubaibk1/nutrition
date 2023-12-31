import Image from "next/image";
import box from "../../public/images/pngegg.png";
const Section = () => {
  return (
    <div className="bg-[#D0EAF536] sm:h-[644px] h-[444px] overflow-hidden ">
      <div className="bg-contain sm:w-[200px] w-[155px] h-[644px] absolute inset-0 bg-left-top  bg-[url('/images/kisspng-leaf-green-blog-mint-leaf.png')] bg-no-repeat transform translate-y-[-130px] "></div>

      <div className=" sm:h-[644px] md:h-[444px] lg:w-[100%] sm:w-full md:w-[740px] bg-contain w-[521px]  h-[532px] absolute inset-0 bg-right  bg-[url('/images/green-leaves-organic-png-file-hd.png')] bg-no-repeat  "></div>

      <div className="flex sm:flex-row  flex-col ">
        <div className="text-black sm:pl-[100px] md:pl-[110px] pl-[58px] sm:pt-[175px] pt-[65px] z-10 ">
          <h1 className="sm:text-[64px] text-[28px] font-[740] text-[#146356] leading-[33px] xl:text-[61px] hx:text-[64px]  sm:mb-[45px] mb-[10px] ">
            Unlock Your Health
          </h1>

          <h1 className="text-[#FF7F3F] sm:text-[111px]  text-[52px] font-[800] sm:leading-[68px] leading-[28px]  sm:tracking-[9px] tracking-[4px] sm:mb-[45px] mb-[20px] ">
            Potential
          </h1>

          <p className=" text-[#146356] sm:font-[700] font-[600] sm:text-[24px] text-[12px] leading-[13px] tracking-[4.5%] sm:mb-[45px] mb-[10px] ">
            Personalized nutrition powered by your DNA
          </p>

          <button className="btn bg-[#FF7F3F] text-white border-[#FF7F3F]  active:bg-[#993636]  active:border-[#993636]">
            Get Started
          </button>
        </div>
        <div className="z-10 sm:mt-[120px] md:ml-[235px] lg:ml-[350px] sm:ml-[190px]  mt-[28px] ml-[98px] md:mt-[-24px]  sm:w-[512px] sm:h-[563px] w-[180px] md:w-[230px]">
          <Image src={box} alt="Picture of the author" />
        </div>
      </div>
    </div>
  );
};
export default Section;
