import VideoCard from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/AppBar";
export default function Home() {
    return (
        <>
            {/* Hi there
            <VideoCard
                title={"abc"}
                author={"Zaid Akhter"}
                timing={"78mn | 13 days ago"}
            /> */}
            <AppBar />
            <VideoGrid />
        </>
    );
}
