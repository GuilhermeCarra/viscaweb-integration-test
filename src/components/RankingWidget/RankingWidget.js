import { useState } from 'react';
import Card from '../Card/Card'
import './RankingWidget.scss';

function RankingWidget({items}) {
  const [cardView, setCardView] = useState(false);
  const [itemsArray, setItemsArray] = useState(items);
  const [alphaSort, setAlphaSort] = useState(false);
  const [transition, setTransition] = useState(false);

  const order = () => {
    setTransition(true);
    setTimeout(() => {
      let sortedItems = [...itemsArray]
      if (alphaSort) {
        sortedItems.sort((a, b) => a.rank < b.rank ? - 1 : Number(a.rank > b.rank))
      } else {
        sortedItems.sort((a, b) => a.name < b.name ? - 1 : Number(a.name > b.name))
      }
      setItemsArray(sortedItems);
      setAlphaSort(!alphaSort);
      setTransition(false);
    },350)
  }

  const changeView = () => {
    setTransition(true);
    setTimeout(() => {
      setCardView(!cardView);
      setTransition(false);
    },350)
  }

  return (
    <div>
      <div className="widget-header">
        <h2 className="title">
          best sports betting sites
        </h2>
        <div
          className="filter"
          onClick={order}
        >
          Sort Alphabetically
        </div>
        <div className="filter view">
          Change View
          <label className="switch">
            <input
              type="checkbox"
              onChange={changeView}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div
        className={`widget-body ${cardView ? "cardView" : ""} ${transition ? "transition" : ""}`}
      >
        {itemsArray.map((item) =>
          <Card
            key={item.id}
            item={item}
            cardView={cardView}
            alphaSort={alphaSort}
          />
        )}
      </div>
      <div className="widget-footer">
        <div>view all sports betting sites</div>
      </div>
    </div>
  );
}

export default RankingWidget;
