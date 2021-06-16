import React,{useState} from 'react';

const Chat = () => {

  const [courseActive, setCourseActive] = useState(0);
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/tgbNymZ7vqY");
  const activeCourse = ref => {
    setCourseActive(ref)
  }
  const playVideo = (url) => {
    setVideoUrl(url);
  }
  return (
    <div className='curiclum'>
     <div className="overview">
      <div className="courseDetails">
        <div className="course-detail-head">
          <h2>About the Course </h2>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et quod nostrum deserunt?Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, non?</p>
      </div>

      <div className="objectives">
        <h2>Salient features of the course</h2>
        <ol>
          <li>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</li>
        </ol>
      </div>

      <div className="language">
        <h2>FAQs</h2>
        <ol>
          <li>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet</li>
        </ol>
      </div>
    </div>
    </div>
  );
}

export default Chat;
