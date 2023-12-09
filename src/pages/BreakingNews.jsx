import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex py-6">
      <button className="btn btn-error">Breaking News</button>
      <Marquee pauseOnHover={true} speed={40}>
        <Link className="mr-12" to={"/"}>
          Warning: Vertical marquees are currently experimental...
        </Link>
        <Link className="mr-12" to={"/"}>
          Warning: Vertical marquees are currently experimental...
        </Link>
        <Link className="mr-12" to={"/"}>
          Warning: Vertical marquees are currently experimental...
        </Link>
        <Link className="mr-12" to={"/"}>
          Warning: Vertical marquees are currently experimental...
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
