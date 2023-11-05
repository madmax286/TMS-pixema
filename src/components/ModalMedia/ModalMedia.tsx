import { useState } from "react";
import { useSelector } from "react-redux";
import { Player, ControlBar, LoadingSpinner, ForwardControl } from "video-react";
import { ReactComponent as PlayButton } from "../../assets/play-button.svg";
import { Navigation, Pagination, FreeMode, Thumbs, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import "./modalMedia.css";

const ModalMedia = ({slideId, modalOff}: any) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const screenshots = useSelector(({ screenshots }) => screenshots);
  const trailer = useSelector(({ trailer }) => trailer);
    
  let media = [...screenshots[0], ...trailer[0]]
  let index = media.indexOf(media.find(e => e.id === slideId))
  
  return (
    <>
      <div className="modal-media">
        <div onClick={modalOff} className="cl-btn-7"></div>
        <Swiper
          modules={[
            FreeMode,
            Navigation,
            Thumbs,
            Mousewheel,
            Pagination,
            Keyboard,
          ]}
          loop={true}
          spaceBetween={10}
          initialSlide={index}
          keyboard={{
            enabled: true,
          }}
          mousewheel={true}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
        >
          {screenshots[0].map((e: any, id: number) => (
            <SwiperSlide key={id}>
              <img className="swiper-image" src={e.image} alt={e.image} />
            </SwiperSlide>
          ))}
          {trailer[0].map((e: any, id: number) => (
            <SwiperSlide key={id}>
              {({ isActive }) => (
                <div className="video">
                  {isActive && (
                    <Player autoPlay={isActive} poster={e.preview}>
                      <source src={e.data.max} />
                      <LoadingSpinner />
                      <ControlBar autoHide={true}>
                        <ForwardControl seconds={5} order={3.1} />
                        <ForwardControl seconds={10} order={3.2} />
                        <ForwardControl seconds={30} order={3.3} />
                      </ControlBar>
                    </Player>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          modules={[FreeMode, Navigation, Thumbs, Mousewheel, Pagination]}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={6}
          mousewheel={true}
          freeMode={true}
          grabCursor={true}
          watchSlidesProgress
          className="mySwiper"
        >
          {screenshots[0].map((e: any, id: number) => (
            <SwiperSlide key={id}>
              <img className="" src={e.image} alt={e.image} />
            </SwiperSlide>
          ))}
          {trailer[0].map((e: any, id: number) => (
            <SwiperSlide key={id}>
              <img src={e.preview} alt={e.preview} />
              <div className="icon-play">
                <PlayButton />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ModalMedia;
