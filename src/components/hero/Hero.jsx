import HeroImg from "../../images/andy-kelly-0E_vhMVqL9g-unsplash 2.png";

const Hero = () => {
  return (
    <section className="mt-[100px] md:mt-[68px]">
      <div className="relative overflow-hidden">
        <img src={HeroImg} alt="Hero" className="object-cover w-full h-full" />
        <div className="md:absolute md:bottom-10 md:left-10 bg-gradient-to-r from-[rgba(77,202,121,1)] to-[rgba(28,189,221,1)] p-6  shadow-md md:w-[622px] lg:w-[630px] ">
          <p className="font-bold text-4xl sm:text-5px 5xl  text-white ml-2 mr-2 leading-11 ">
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </p>
          <button
            type="button"
            class="focus:outline-none text-sm px-4 py-1 me-2 mt-5 ml-2 mb-5 p-4 btn-primary"
          >
            GET FREE CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
