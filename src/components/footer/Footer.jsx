import Logo from "../../images/Logo.png";

const Footer = () => {
  return (
    <section className="bg-primary md:p-10 py-4 px-1 w-full">
      <div className="flex flex-col md:flex-row items justify-between md:gap-8 gap-10 text-white mx-5 ">
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
              <li className="text-base mb-2">
                <a href="www.google.com">ReactJS </a>
              </li>
              <li className="text-base mb-2">
                <a href="www.google.com">Gatsby </a>
              </li>
              <li className="text-base mb-2">
                <a href="www.google.com">NextJS </a>
              </li>
              <li className="text-base mb-2">
                <a href="www.google.com">NodeJS </a>
              </li>
              <li className="text-base mb-2">
                <a href="www.google.com">GraphQL </a>
              </li>
              <li className="text-base mb-2">
                <a href="www.google.com">Laravel </a>
              </li>
            </ul>
          </div>

          <div className="w-1/2">
            <h4 className="text-xl mb-2">Our Services</h4>
            <ul>
              <li className="text-base mb-2">
                <a href="www.google.com">Social media Marketing </a>
              </li>
              <li className="text-base mb-2">
                <a href="www.google.com">Web & Mobile App Development </a>
              </li>
              <li className="text-base mb-2">
                <a href="www.google.com">Data & Analytics </a>
              </li>
              <li className="text-base mb-2">
                <a href="www.google.com">Google Marketing solutions </a>
              </li>
              <li className="text-base mb-2">
                <a href="www.google.com">Search Engine Optimization </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
