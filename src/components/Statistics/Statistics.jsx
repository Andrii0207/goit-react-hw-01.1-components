import css from './Statistics.module.css';

export const Statistics = ({ data }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.statList}>
        {data.map(({ id, label, percentage }) => (
          <li className={css.item} key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <span className={css.label}>{label}: </span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
