const ArticleCard = (props) => {
  return (
    <div className="rounded-md shadow-sm bg-white pb-8">
      <img
        className="rounded-t-md h-1/2 w-full"
        src={props.image}
        alt="currency"
      ></img>
      <p className="px-5 pt-5 pb-2 text-xs greyText max-sm:pt-8 max-sm:pb-4 max-sm:px-9">
        {props.name}
      </p>
      <a href="*" className="hover:text-green-400">
        <h3 className="text-xl px-5 pb-4 leading-5 max-sm:px-9">
          {props.heading}
        </h3>
      </a>
      <p className="text-xs px-5 greyText pb-6 max-sm:text-base max-sm:px-9">
        {props.content}
      </p>
    </div>
  );
};

export default ArticleCard;
