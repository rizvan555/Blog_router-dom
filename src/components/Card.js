import { blogData } from "../data/blogData";
import Button from "./Button";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div>
      <ul>
        {blogData.map((data) => {
          return (
            <div key={data.id}>
              <li>
                <img src={data.img_url} />
              </li>
              <li>{data.title}</li>
              <Link to={`/cardDetails/${data.id}`}>
                <Button text={"Read more"} />
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Card;
