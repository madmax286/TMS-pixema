import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import { GET_GAME_SCREENSHOTS, GET_GAME_TRAILER, GET_SELECTED_GAME } from "../../actions/actions";
import { ReactComponent as TrendsIcon } from "../../assets/Trends.svg";
import { ReactComponent as Bookmark } from "../../assets/Bookmark.svg";
import { ReactComponent as PlayButton } from "../../assets/play-button.svg";
import { convertDate } from "../../utils/helpers";
import { IGame } from "../../utils/interfaces";
import "./selectedGame.css";

const SelectedGame = () => {
  const { slug, id } = useParams<{ slug: string; id: string }>();
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  const ratingTop = useSelector(({ rating }) => rating);
  const game = useSelector(({ game }) => game);
  const screenshots = useSelector(({ screenshots }) => screenshots);
  const trailer = useSelector(({ trailer }) => trailer);

  useEffect(() => {
    if (!game.length) dispatch(GET_SELECTED_GAME(id, slug, navigate));
    dispatch(GET_GAME_SCREENSHOTS(id));
    dispatch(GET_GAME_TRAILER(id));
  }, []);

  const bookmark = () => {
    let arr = [];
    for (let i = 0; i < localStorage.length; i++) arr.push(localStorage.key(i));
    return arr.includes(`${id}`);
  };    
  
  const addBookmark = async () => {    
    if (bookmark()) localStorage.removeItem(`${id}`);
    else localStorage.setItem(`${id}`, JSON.stringify(game));
    window.location.reload();
  };

  return (
    <>
      {slug && id && (
        <PageTemplate>
          {game.length &&
            game.map(
              ({
                background_image,
                name,
                rating,
                slug,
                id,
                genres,
                description_raw,
                platforms,
                released,
                developers,
                publishers,
                esrb_rating,
                updated,
                website,
              }: IGame) => (
                <main key={id} className="game-content">
                  <img
                    className="background_image"
                    src={background_image}
                    alt={slug}
                  />
                  <div className="game__media-container">
                    <img src={background_image} alt={slug} />
                    <div className="game__media">
                      {screenshots.length &&
                        screenshots[0]
                          .map((e: any, id: number) => (
                            <div key={id} className="game__screenshots-img">
                              <img src={e.image} alt={e.image} />
                            </div>
                          ))
                          .slice(0, 4)}
                      {trailer.length &&
                        trailer[0]
                          .map((e: any, id: number) => (
                            <div key={id} className="game__screenshots-img">
                              <img src={e.preview} alt={e.preview} />
                              <div className="icon-play">
                                <PlayButton/>
                              </div>
                            </div>
                          ))
                          .slice(0, 1)}
                      <div
                        onClick={() => navigate(`/game/${id}/${slug}/media`)}
                        className="game__media__view-all"
                      >
                        <span>. . .</span>
                        <span>view all</span>
                      </div>
                    </div>
                  </div>
                  <div className="game__description">
                    <h1>{name}</h1>
                    <div className="rating-and-favorites">
                      <div
                        className={`game__description-rating ${
                          rating > 4 ? ratingTop : ""
                        }`}
                      >
                        {rating > 4 ? (
                          <TrendsIcon className="trends-icon" />
                        ) : (
                          ""
                        )}
                        <h3>{rating}</h3>
                      </div>
                      {token && (
                        <>
                          <button
                            onClick={addBookmark}
                            className={`add-to-favorites ${`${
                              bookmark() ? "bookmark" : ""
                            }`} `}
                            type="button"
                          >
                            <Bookmark />
                          </button>
                        </>
                      )}
                    </div>
                    <h4>{description_raw}</h4>
                    <div className="game__meta">
                      <div className="game__meta-block">
                        <div className="game__meta-title">Platforms</div>
                        <div className="game__meta-text">
                          {platforms.length &&
                            platforms.map((e: any, id: number) => (
                              <h5 key={id}>{e.platform.name}</h5>
                            ))}
                        </div>
                      </div>
                      <div className="game__meta-block">
                        <div className="game__meta-title">Genre</div>
                        <div className="game__meta-text">
                          {genres.length
                            ? genres.map((e: any, id: number) => (
                                <h5 key={id}>{e.name}</h5>
                              ))
                            : ""}
                        </div>
                      </div>
                      <div className="game__meta-block">
                        <div className="game__meta-title">Release date</div>
                        <div className="game__meta-text">
                          {convertDate(`${released}`)}
                        </div>
                      </div>
                      <div className="game__meta-block">
                        <div className="game__meta-title">Last Modified</div>
                        <div className="game__meta-text">
                          {convertDate(`${updated}`)}
                        </div>
                      </div>
                      <div className="game__meta-block">
                        <div className="game__meta-title">Developer</div>
                        <div className="game__meta-text">
                          {developers
                            ? developers.map((e: any, id: number) => (
                                <h5 key={id}>{e.name}</h5>
                              ))
                            : ""}
                        </div>
                      </div>
                      <div className="game__meta-block">
                        <div className="game__meta-title">Publisher</div>
                        <div className="game__meta-text">
                          {publishers
                            ? publishers.map((e: any, id: number) => (
                                <h5 key={id}>{e.name}</h5>
                              ))
                            : ""}
                        </div>
                      </div>
                      <div className="game__meta-block">
                        <div className="game__meta-title">Age rating</div>
                        <div className="game__meta-text">
                          {esrb_rating && esrb_rating.name}
                        </div>
                      </div>
                      <div className="game__meta-block game__meta-block_wide">
                        <div className="game__meta-title">Website</div>
                        <div className="game__meta-text">
                          <a href={website}>{website}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              )
            )}
        </PageTemplate>
      )}
    </>
  );
};

export default SelectedGame;
