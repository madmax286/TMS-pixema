import { GameCard, PageTemplate } from '../../components'
import { IGame } from '../../utils/interfaces';
import './favorites.css'

const Favorites = () => {
  let arr: any = [];
  let keys = Object.keys(localStorage);
  for (let key of keys) {
    let item = JSON.parse(localStorage.getItem(key)!)[0];
    if (item) arr.push(item);
  }

  return (
    <PageTemplate>
        <div className="games-layout">
          <div className="games-list">
            {arr.length &&
              arr.map(({background_image, name, id, rating, slug, genres, added, released}: IGame) => (
                <GameCard
                  key={id}
                  id={id}
                  background_image={background_image}
                  name={name}
                  rating={rating}
                  slug={slug}
                  genres={genres}
                  added={added}
                  released={released}
                />
              ))}
          </div>
        </div>
    </PageTemplate>
  )
}

export default Favorites
