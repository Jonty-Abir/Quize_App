import { nanoid } from "nanoid";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../Hooks/useVideoList";
import Video from "./Video";


export default function Videoes() {
  const [page, setPage] = useState(1);
  const { error, loading, videos, hasMore } = useVideoList(page);
  //
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader="Loading..."
          next={() => setPage(page + 6)}
        >
          {videos.map((video, index) =>
            video.noq > 0 ? (
              <Link
                to={{
                  pathname: `/quiz/${video.youtubeID}`,
                  state: { videoTitle: video.title },
                }}
                key={nanoid()}
                // {console.log(nanoid())}
              >
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video key={nanoid()} title={video.title} id={video.youtubeID} noq={video.noq} />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No Data Found!</div>}
      {error && <div>Error was Occur!</div>}
      {loading && (
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            fontWeight: "bolder",
          }}
        >
          Loading...
        </div>
      )}
    </div>
  );
}
