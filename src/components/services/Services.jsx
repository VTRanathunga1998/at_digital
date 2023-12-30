import Pc from "../../images/image 2.png";
import Search from "../../images/image 1.png";

const Services = () => {
  return (
    <section className="mb-6">
      <div className="flex flex-col items-center mx-auto max-w-screen-lg gap-0">
        <div className="flex items-center md:justify-between  flex-col md:flex-row my-2 mx-4">
          <div className="flex items-center justify-center md:my-4 md:w-1/3">
            <img src={Pc} alt="" />
          </div>
          <div className="flex flex-col items-center md:items-start gap-5  md:my-4 md:w-2/3">
            <h4 className="text-3xl text-primary text-center md:text-left font-semibold">
              Web & Mobile App Development
            </h4>
            <p className="md:text-left font-inter text-base font-semibold leading-5 text-center text-textColor">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <button className="btn-primary p-2">Learn More</button>
          </div>
        </div>
        <div className="flex items-center md:justify-between  flex-col md:flex-row-reverse  my-2 mx-4">
          <div className="flex items-center justify-center  md:my-4 md:w-1/3">
            <img src={Search} alt="" />
          </div>
          <div className="flex flex-col items-center md:items-start gap-5 md:my-4 md:w-2/3">
            <h4 className="text-3xl text-primary text-center md:text-left font-semibold">
              Digital Strategy Consulting
            </h4>
            <p className="md:text-left font-inter text-base font-semibold leading-5 text-center text-textColor">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <button className="btn-primary p-2">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
