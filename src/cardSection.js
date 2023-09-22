import Online from "./images/icon-online.svg";
import Budgeting from "./images/icon-budgeting.svg";
import Onboarding from "./images/icon-onboarding.svg";
import Api from "./images/icon-api.svg";
import "./App.css";
import InfoCard from "./components/InfoCard";

function CardSection() {
  return (
    <section
      className="flex flex-col justify-center h-screen lightGrey px-32 py-20 
                 max-lg:h-fit max-lg:items-center max-lg:px-20 max-sm:px-8 max-sm:text-center"
    >
      <div className="w-3/5 max-sm:w-fit">
        <h1 className="text-4xl mb-5 max-sm:px-4">Why choose Easybank?</h1>
        <p className="text-md mb-14 greyText">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="flex justify-center items-center gap-8 max-lg:flex-wrap">
        <InfoCard
          img={Online}
          title="Online Banking"
          paragraph=" Our modern web and Mobile aplications allow you to keep track of
        your finances wherever you are in the world."
        />
        <InfoCard
          img={Budgeting}
          title="Simple Budgeting"
          paragraph=" See exactly where your money goes each month. Receive notifications
          when you're close to hitting your limits."
        />
        <InfoCard
          img={Onboarding}
          title="Fast Onboarding"
          paragraph="We don't do branches. Open your account in minutes online and start
          taking control of your finances right away."
        />
        <InfoCard
          img={Api}
          title="Open API"
          paragraph="Manage your savings, investments, pension, and much more from one
          account. Tracking your money has never been easier."
        />
      </div>
    </section>
  );
}

export default CardSection;
