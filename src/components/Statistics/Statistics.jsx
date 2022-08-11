import PropTypes from 'prop-types';

import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  const statListItem = stats.map(el => (
    <li
      key={el.id}
      className={s.item}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={s.label}>{el.label}</span>
      <span className={s.percentage}>{el.percentage}%</span>
    </li>
  ));
  return (
    <section className={s.statistics}>
      <div className="container">
        <div className={s.statisticCard}>
          {title && <h2 className={s.title}>{title}</h2>}
          <ul className={s.statList}>{statListItem}</ul>
        </div>
      </div>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default Statistics;
