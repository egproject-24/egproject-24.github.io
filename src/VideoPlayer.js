const VideoPlayer = (props) => {
    const video_width = props.width;
    const video_height = props.height;
    const video_src = props.source;
    return (
        <div>
            <iframe width={video_width} height={video_height} src={video_src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}

export default VideoPlayer;