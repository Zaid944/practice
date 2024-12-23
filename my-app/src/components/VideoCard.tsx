export default function VideoCard(props: any) {
    return (
        <div className="p-4 cursor-pointer">
            <img
                src="/photo.jpg"
                alt="alternate photo"
                className="rounded-xl"
            />
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-2">
                    <img
                        className={"rounded-full w-20 h-20"}
                        src="/photo.jpg"
                        alt="alternate photo"
                    />
                </div>
                <div className="col-span-10 pl-2">
                    <div>{props.title}</div>
                    <div>{props.author}</div>
                    <div>{props.timing}</div>
                </div>
            </div>
        </div>
    );
}
