const Video = () => {
  return (
    <div className="video-container">
      <video className="full-screen-video bg-red-500 " controls autoPlay>
        <source src="/public/kkn24.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Video