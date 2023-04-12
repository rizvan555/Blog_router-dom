import Button from "../components/Button";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="bottom-box">
        <h1>Welcome to my simple Blog</h1>
        <Button text={"Go to articles"} />
      </div>
    </div>
  );
};

export default Home;
