import HeroImageDesk from "./../assets/images/heroImageDesktop.png";
// import HeroImagePhone from "./../assets/images/heroImagePhone.png";

const Hero = () => {
  return (
    <section className="container-left w-full h-screen bg-hero-bg bg-center bg-cover flex py-[164px] justify-between">
      <div className="flex flex-col gap-[50px] items-start">
        <div className="flex flex-col gap-[15px]">
          <h1 className="text-[50px] font-bold w-[550px] text-textThirdColor">
            Monitor your business on real-time dashboard
          </h1>
          <p className="text-lg text-textSecondaryColor md:w-[550px] w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
            pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis
            imperdiet sed nullam.
          </p>
        </div>
        <button className="px-20 py-[15.5px] rounded-full text-textThirdColor bg-primaryColor hover:opacity-90">
          Try for free
        </button>
      </div>
      <div className="w-[700px] h-[500px]">
        <img
          src={HeroImageDesk}
          width={700}
          height={500}
          alt="hero image desktop"
          className="object-fit"
        />
      </div>
    </section>
  );
};

export default Hero;
