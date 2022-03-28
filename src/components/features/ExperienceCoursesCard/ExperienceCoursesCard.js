import React from 'react';

import styles from './ExperienceCoursesCard.module.scss';


const ExperienceCoursesCard = (props) => {
  const { date, title, details } = props;    //subtitle

  return (
    <div className={styles.root}>
      <p className={styles.elementTitle}>
        {date}<br />
        {title}<br />
        {/* {subtitle} */}
      </p>
      <p>Details:</p>
      <ul className={styles.list}>
        {
          details && details.length > 0 &&
          details.map((detail, index) =>
            <li key={index}>{detail}</li>
          )
        }
      </ul>
    </div>
  );
};


export default ExperienceCoursesCard;
