import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import {
  Home,
  Trends,
  Favorites,
  Settings,
  SelectedGame,
  SearchResults,
  FilterPage,
  SignIn,
  SignUp,
  ErrorPage,
  Media,
} from "./pages";
import {
  ROUTE_FAVORITES,
  ROUTE_FILTER_PAGE,
  ROUTE_HOME,
  ROUTE_MEDIA,
  ROUTE_SEARCH_RESULT,
  ROUTE_SELECTED_GAME,
  ROUTE_SETTINGS,
  ROUTE_SIGN_IN,
  ROUTE_SIGN_UP,
  ROUTE_TRENDS,
} from "./utils/routes";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <>
        <Routes>
          <Route path={ROUTE_HOME} element={<Home />} />
          <Route path={ROUTE_TRENDS} element={<Trends />} />
          <Route path={ROUTE_FAVORITES} element={<Favorites />} />
          <Route path={ROUTE_SETTINGS} element={<Settings />} />
          <Route path={ROUTE_SELECTED_GAME} element={<SelectedGame />} />
          <Route path={ROUTE_MEDIA} element={<Media />} />
          <Route path={ROUTE_SEARCH_RESULT} element={<SearchResults />} />
          <Route path={ROUTE_FILTER_PAGE} element={<FilterPage />} />
          <Route path={ROUTE_SIGN_IN} element={<SignIn />} />
          <Route path={ROUTE_SIGN_UP} element={<SignUp />} />
          {/* <Route path="/error" element={<ErrorPage />} /> */}
        </Routes>
        {location.pathname === "/" && <Navigate to={ROUTE_HOME}/>}
      </>
    </div>
  );
};

export default App;
