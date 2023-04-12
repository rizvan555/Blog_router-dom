import Header from "../components/Header";
import { blogData } from "../data/blogData";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const idParams = useParams();

  const myCardDetails = blogData.find((data) => {
    return data.id.toString() === idParams.id;
  });

  return (
    <div>
      <Header />
      <div className="cardDetails" key={myCardDetails.id}>
        <ul className="contentDetails">
          <li>
            <img src={myCardDetails.img_url} alt="img" />
          </li>
          <li>{myCardDetails.title}</li>
          <li>{myCardDetails.description}</li>
          <li>{myCardDetails.author}</li>
          <li>{myCardDetails.published_date}</li>
        </ul>
      </div>
    </div>
  );
};

export default CardDetails;
