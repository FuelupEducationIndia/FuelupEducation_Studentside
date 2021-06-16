import React,{useState} from 'react';
import '../style/course.css';
import Description from '../components/Overview';
import Curriculum from '../components/Live';
import Reviews from '../components/Take';
import { Data } from './Data';


function Course(props) {
            
    const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/tgbNymZ7vqY");
    
    const [current, setCurrent] = useState('overview');
    
  
    const tabControl = tabs => {
      setCurrent(tabs);
    }
    return (
      <div>
      <main>
           <div className="heading">
                <h2>The Solar System</h2>
                <p>Higher Secondary</p>
              </div>
          <div className="lecture-section">
  
            {/* <!-- Left Section --> */}
             
            <section className="left-section">
             
                {/* <!-- For mobile screen --> */}
              <div className="video">
                <iframe src={videoUrl} ></iframe>
              </div>
              <div className="overview-desktop">
                <div className="d-tabs">
                  <div className="tab overview-tab" 
                    onClick={() => tabControl('overview')}
                    style={{
                        borderBottom: current === 'overview' ? '2px solid red' : '' ,
                        color: current === 'overview' ? 'black' : '' 
                      }}
                  >Description</div>
  
                  <div className="tab chat-tab"
                    onClick={() => tabControl('chat')}
                    style={{
                        borderBottom: current === 'chat' ? '2px solid red' : '' ,
                        color: current === 'chat' ? 'black' : '' 
                      }}
                  >Curriculum</div>
                  <div className="tab attendance-tab" 
                    onClick={() => tabControl('attendance')}
                    style={{ 
                      borderBottom: current === 'attendance' ? '2px solid red' : '', 
                      color: current === 'attendance' ? 'black' : '' 
                    }}
                    >Reviews</div> 
                </div>
                {current === 'overview' ? <Description /> : '' }
                {current === 'chat' ? <Curriculum /> : '' }
                {current === 'attendance' ? <Reviews /> : '' }
              </div>
            </section>
  
            {/*============  Right Section  ============*/}
  
            <section className="right-section">
              <h2>Table of Contents</h2>
              {
                Data.map(item =>{
                  return(
                    <div className='data-container' key={item.id}>
                      <div className='img-container'>
                        <img src={item.image} />
                      </div>
                      <div className='data-content'>
                        <h3>{item.name} </h3>
                        <span>{item.description}</span>
                      </div>
                      <div className='data-time'>{item.Time}</div>
                    </div>
                  );
                })
              }
              <div className='right-section-button'>
                <a href='#' className='right-btn-1'>Share course <span className='share'><i class="far fa-share-square"></i></span></a>
                <a href='#' className='right-btn-2'>Explore more courses <span className='explore'><i class="fas fa-arrow-right"></i></span></a>
              </div>
            </section>
          </div>         
        </main>
      </div>
    );
  }
  export default Course;