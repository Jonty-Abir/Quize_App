import { useMemo } from "react";
import successImg from "../assets/images/success.png";
import useFetchImg from "../Hooks/useFetchImg";
import Classes from "./styles/Summary.module.css";

export default function Summary({ userScore, naq }) {
  // getKeyWord fun
  const getKeyWord = useMemo(() => {
    if ((userScore / (naq * 5)) * 100 < 50) {
      return "failed";
    } else if ((userScore / (naq * 5)) * 100 < 75) {
      return "good";
    } else if ((userScore / (naq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellente";
    }
  }, [userScore, naq]);
  const { loading, error, result } = useFetchImg(
    `https://api.pexels.com/v1/search?query=${getKeyWord}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );
  const img = result ? result?.photos[0].src.large : successImg;
  return (
    <div className={`${Classes.summary}`}>
      <div className={`${Classes.point}`}>
        <p className={`${Classes.score}`}>
          Your score is <br />
          {userScore} out of {naq * 5}
        </p>
      </div>
      {loading && <div className={`${Classes.badge}`}>Loading...</div>}
      {error && <div className={`${Classes.badge}`}>There was an error!</div>}
      {!loading && !error && (
        <div className={`${Classes.badge}`}>
          <img src={img} alt="Success" />
        </div>
      )}
    </div>
  );
}
