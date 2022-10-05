import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestion(videoId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestion] = useState([]);

  useEffect(() => {
    async function fetchQuiz() {
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoId + "/questions");
      const quizQuary = query(quizRef, orderByKey());
      try {
        setLoading(true);
        setError(false);
        const snapShort = await get(quizQuary);
        setLoading(false);
        if (snapShort.exists()) {
          setQuestion((prevQuestion) => {
            return [...Object.values(snapShort.val())];
          });
        }
      } catch (err) {
        console.dir(err.message);
        setLoading(false);
        setError(true);
      }
    }
    fetchQuiz();
  }, [videoId]);
  return {
    loading,
    questions,
    error,
  };
}
