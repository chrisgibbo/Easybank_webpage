const InfoCard = (props) => {
  return (
    <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
      <img src={props.img} alt="credit card" className="mb-8 "></img>
      <h1 className="text-xl mb-5 max-sm:text-2xl">{props.title}</h1>
      <p className="greyText text-sm max-lg:text-center max-sm:text-lg">
        {props.paragraph}
      </p>
    </div>
  );
};

export default InfoCard;
