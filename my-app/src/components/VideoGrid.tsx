import VideoCard from "./VideoCard";

const VIDEOS = [
    {
        title: "abc",
        author: "abc",
        timing: "abc",
    },
    {
        title: "def",
        author: "def",
        timing: "def",
    },
    {
        title: "fgi",
        author: "fgi",
        timing: "fgi",
    },
    {
        title: "ghi",
        author: "ghi",
        timing: "ghi",
    },
];

export function VideoGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {VIDEOS.map((video) => (
                <VideoCard
                    title={video.title}
                    author={video.author}
                    timing={video.author}
                />
            ))}
        </div>
    );
}
