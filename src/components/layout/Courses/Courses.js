import React from 'react';
import { useEffect, useState } from 'react';

import styles from './Courses.module.scss';

import ExperienceCoursesCard from '../../features/ExperienceCoursesCard/ExperienceCoursesCard';


const Courses = (props) => {
  const { title } = props;

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('db/app.json')
      .then(response => response.json())
      .then(data => {
        return (
          setItems(data.courses)
        );
      });
  }, []);


  return (
    <div className={styles.root}>
      <h3 className={styles.title}>{title.toUpperCase()}</h3>
      <div className={styles.elementsContainer}>
        {
          items &&
          items.map(item => {
            return <ExperienceCoursesCard key={item.id} {...item} />;
          })
        }
      </div>
    </div>
  );
};


export default Courses;
