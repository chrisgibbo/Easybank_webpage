import "./App.css";
import Currency from "./images/image-currency.jpg";
import Restaurant from "./images/image-restaurant.jpg";
import Plane from "./images/image-plane.jpg";
import Confetti from "./images/image-confetti.jpg";
import ArticleCard from "./components/ArticleCard";

function ArticleSection() {
  return (
    <section className="h-screen whitewhite flex flex-col justify-center px-32 py-20 max-lg:h-fit max-lg:px-20 max-sm:px-8">
      <div className="">
        <h1 className="text-4xl mb-8 max-sm:text-center">Latest Articles</h1>
      </div>
      <div className="lg:flex justify-center gap-6 max-lg:space-y-10">
        <ArticleCard
          image={Currency}
          name="By Claire Robinson"
          heading="Receive money in any currency with no fees"
          content="The world is getting smaller and we're becoming more mobile. So why
        should you be forced to only receive money in a single ..."
        />
        <ArticleCard
          image={Restaurant}
          name="By Wilson Hutton"
          heading="Treat yourself without worrying about money"
          content="Our simple budgeting feature allows you to separate out your
          spending and set realistic limitseach month. That means you ..."
        />
        <ArticleCard
          image={Plane}
          name="By Wilson Hutton"
          heading="Take your Easybank card whereever you go"
          content="We want you to enjoy your travels. This is why we don't charge any
          fees on purchases while you're abroad. We'll even show you ..."
        />
        <ArticleCard
          image={Confetti}
          name="By Claire Robinson"
          heading="Our invite-only Beta accounts are now live!"
          content="After a lot of hard work by the while team, we're excited to launch
          our closed beta. It's easy to request an invite through the site ..."
        />
      </div>
    </section>
  );
}

export default ArticleSection;
