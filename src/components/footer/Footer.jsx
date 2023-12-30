import Logo from "../../images/Logo.png";

const Footer = () => {
  return (
    <section className="bg-primary md:p-10 py-4 px-1 w-full">
      <div className="flex flex-col md:flex-row items justify-between md:gap-8 gap-10 text-white mx-5 mb-4 ">
        <div className="flex flex-col md:w-1/2">
          <div className="mb-4">
            <img src={Logo} alt="" />
          </div>
          <div className="md:w-2/3">
            <p>
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row md:w-1/2 justify-between items-start gap-10">
          <div className="w-1/2">
            <h4 className="text-xl mb-2">Our Technologies</h4>
            <ul>
              <li className="text-base mb-2">ReactJS</li>
              <li className="text-base mb-2">Gatsby</li>
              <li className="text-base mb-2">NextJS</li>
              <li className="text-base mb-2">NodeJS</li>
              <li className="text-base mb-2">GraphQL</li>
              <li className="text-base mb-2">Laravel</li>
            </ul>
          </div>

          <div className="w-1/2">
            <h4 className="text-xl mb-2">Our Services</h4>
            <ul>
              <li className="text-base mb-2">Social media Marketing</li>
              <li className="text-base mb-2">Web & Mobile App Development</li>
              <li className="text-base mb-2">Data & Analytics</li>
              <li className="text-base mb-2">Google Marketing solutions</li>
              <li className="text-base mb-2">Search Engine Optimization</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-white w-full mx-auto text-center">
        <hr className="md:w-2/3 mx-auto max-w-screen-lg mb-1" />
        <span>Privacy Policy | Terms & Conditions</span>
      </div>
    </section>
  );
};

export default Footer;
