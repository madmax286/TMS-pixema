import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ModalMedia, PageTemplate } from "../../components";
import { Player } from "video-react";
import "./media.css";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { GET_GAME_SCREENSHOTS, GET_GAME_TRAILER } from "../../actions/actions";

const Media = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  
  const { slug, id } = useParams<{ slug: string; id: string }>();
  const screenshots = useSelector(({ screenshots }) => screenshots);
  const trailer = useSelector(({ trailer }) => trailer);
  const [modal, setModal] = useState(false)
  
  // useEffect(() => {
  //   if (!screenshots) dispatch(GET_GAME_SCREENSHOTS(id));
  //   if (!trailer) dispatch(GET_GAME_TRAILER(id));
  // }, []);

  const modalOn = () => {
    setModal(true)
  }
  const modalOff = () => {
    setModal(false)
  }

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
            {trailer[0].length && (
              <div className="trailer-wrapper">
                <h3>Trailers</h3>
                <div className="trailer-container">
                  {trailer[0].map((e: any, id: number) => (
                    <div key={id} className="trailer-content">
                      <Player poster={e.preview}>
                        <source src={e.data.max} />
                      </Player>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {screenshots[0].length && (
              <div className="screenshots-wrapper">
                <h3>Screenshots</h3>
                <div className="screenshots-container">
                  {screenshots[0].map((e: any, id: number) => (
                    <div onClick={modalOn} key={id} className="game__screenshots-img">
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
          </div>
        </PageTemplate>
      )}
      {modal && <div onClick={modalOff} className="cl-btn-7"></div>}
      {modal && <ModalMedia />}
    </>
  );
};

export default Media;
