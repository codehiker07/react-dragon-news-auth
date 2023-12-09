import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="space-y-3 w-full pb-10">
        <h2 className="text-2xl font-bold py-4">Login With</h2>
        <div>
          <button className="btn btn-outline">
            <FaGoogle />
            <h3>Login With Google</h3>
          </button>
        </div>
        <div>
          <button className="btn btn-outline">
            <FaGithub />
            <h3>Login With Github</h3>
          </button>
        </div>
      </div>
      <div className="">
        <h2 className="text-2xl font-bold py-4">Find Us On</h2>
        <div>
          <a
            className="p-4 flex text-lg items-center border rounded-t-lg"
            href=""
          >
            <FaFacebookF />
            <span className="pl-2">Facebook</span>
          </a>
        </div>
        <div>
          <a className="p-4 flex text-lg items-center border-x" href="">
            <FaTwitter />
            <span className="pl-2">Twitter</span>
          </a>
        </div>
        <div>
          <a
            className="p-4 flex text-lg items-center border rounded-b-lg"
            href=""
          >
            <FaInstagram />
            <span className="pl-2">Instagram</span>
          </a>
        </div>
      </div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl font-bold pt-6">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
