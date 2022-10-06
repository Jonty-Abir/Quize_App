import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt
} from "firebase/database";
import { useEffect, useState } from "react";
export default function useVideoList(contentNo) {
  // sate mannage
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore,setHasMore] =useState(true);
  //
  useEffect(() => {
    // data base realated
    async function fetchVideo() {
      // create a dataBase refarence
      const db = getDatabase();
      // create a db node refarence
      const videosRef = ref(db, "videos");
      // crate a quary
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt("" + contentNo),
        limitToFirst(6)
      );
      try {
        setError(false);
        setLoading(true);
        let snapShot = await get(videoQuery);
        setLoading(false);
        // exists return boolean
        if (snapShot.exists()) {
          setVideos((prevState) => {
            return [...prevState, ...Object.values(snapShot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchVideo();
  }, [contentNo]);
  return { loading, error, videos,hasMore };
}
