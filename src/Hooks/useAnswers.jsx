import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswers(videoId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswers() {
      const db = getDatabase();
      const answersRef = ref(db, "answers/" + videoId + "/questions");
      const answersQuery = query(answersRef, orderByKey());

      try {
        setLoading(true);
        setError(false);
        // requested to the fireBase dataBase
        const snapShot = await get(answersQuery);
        setLoading(false);
        if (snapShot.exists()) {
          setAnswers((prevAnswers) => {
            return [...Object.values(snapShot.val())];
          });
        }
      } catch (err) {
        console.log(err.message);
        setLoading(false);
        setError(true);
      }
    }
    fetchAnswers();
  }, [videoId]);
  return {
    loading,
    error,
    answers,
  };
}
