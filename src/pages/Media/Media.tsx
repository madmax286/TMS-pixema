import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ModalMedia, PageTemplate } from "../../components";
import { ReactComponent as PlayButton } from "../../assets/play-button.svg";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { GET_GAME_SCREENSHOTS, GET_GAME_TRAILER } from "../../actions/actions";
import "./media.css";

const Media = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const { slug, id } = useParams<{ slug: string; id: string }>();
  const screenshots = useSelector(({ screenshots }) => screenshots);
  const trailer = useSelector(({ trailer }) => trailer);
  const [modal, setModal] = useState(false);
  const [slideId, setSlideID] = useState(null);

  useEffect(() => {
    if (!screenshots.length) dispatch(GET_GAME_SCREENSHOTS(id));
    if (!trailer.length) dispatch(GET_GAME_TRAILER(id));
  }, []);

  const modalOn = () => {
    setModal(true);
  };
  const modalOff = () => {
    setModal(false);
  };

  return (
    <>
      {slug && id && (
        <PageTemplate>
          <div className="media-wrapper">
            <div className="media-header">
              <div
                onClick={() => navigate(`/game/${id}/${slug}`)}
                className="arrow-1"
              >
                <div></div>
              </div>
            </div>
            {screenshots.length && (
              <div className="screenshots-wrapper">
                <div className="screenshots-container">
                  {screenshots[0].map((e: any, id: number) => (
                    <div
                      onClick={() => {
                        modalOn();
                        setSlideID(e.id);
                      }}
                      key={id}
                      className="game__screenshots-img"
                    >
                      <img
                        className="media-content"
                        src={e.image}
                        alt={e.image}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {trailer.length && (
              <div className="trailer-wrapper">
                <div className="trailer-container">
                  {trailer[0].map((e: any, id: number) => (
                    <div
                      className="trailer-content"
                      onClick={() => {
                        modalOn();
                        setSlideID(e.id);
                      }}
                      key={id}
                    >
                      <img src={e.preview} alt={e.preview} />
                      <div className="icon-play">
                        <PlayButton />
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </PageTemplate>
      )}
      {modal && <ModalMedia slideId={slideId} modalOff={modalOff}/>}
    </>
  );
};

export default Media;
