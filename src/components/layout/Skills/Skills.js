import React from 'react';
import { useEffect, useState } from 'react';

import styles from './Skills.module.scss';

import SkillsCard from '../../features/SkillsCard/SkillsCard';


const Skills = (props) => {
  const { title } = props;

  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch('db/app.json')
      .then(response => response.json())
      .then(data => {
        return (
          setItems(data.skills),
          setLoaded(true)
        );
      });
  }, []);


  let visible = '';

  const handleLoaded = () => {
    if (loaded) {
      visible = styles.visible;
    }
    return visible;
  };

  const visibleStyle = handleLoaded();


  return (
    <div className={styles.root}>
      <h3 className={styles.title}>{title.toUpperCase()}</h3>

      <div className={styles.elementsContainer + ' ' + visibleStyle}>
        {
          items &&
          items.map(item => {
            return <SkillsCard key={item.id} {...item} />;
          })
        }
      </div>
    </div>
  );
};


export default Skills;
