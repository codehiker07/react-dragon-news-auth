import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, details } = news;
  return (
    <div>
      <div className="card bg-base-100">
        <figure>
          <img className="w-11/12" src={image_url} alt="news" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}{" "}
              <Link className="text-green-600 font-semibold">Read more...</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NewsCard;
