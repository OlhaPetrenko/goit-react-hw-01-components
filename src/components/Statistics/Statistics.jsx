function Statistics({ id, title, stats }) {
  const statListItem = stats.map(el => (
    <li key={el.id} className="item">
      <span className="label">{el.label}</span>
      <span className="percentage">{el.percentage}%</span>
    </li>
  ));
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">{statListItem}</ul>
    </section>
  );
}

export default Statistics;
