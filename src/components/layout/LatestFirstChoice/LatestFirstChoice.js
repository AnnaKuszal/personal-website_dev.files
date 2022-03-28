import React from 'react';
import { useEffect, useState } from 'react';

import styles from './LatestFirstChoice.module.scss';


const LatestFirstChoice = (props) => {
  const { title } = props;

  const [items, setItems] = useState([]);

  let links;

  useEffect(() => {
    fetch('db/app.json')
      .then(response => response.json())
      .then(data => {
        return (
          setItems(data.latest)
        );
      });
  }, []);


  return (
    <div className={styles.root}>
      <h3 className={styles.title}>{title.toUpperCase()}</h3>
      <div className={styles.elementsContainer}>
        {
          items &&
          items.map((item, index) => {
            links = item.links;

            return (
              <div key={index} className={styles.element}>
                <h4 className={styles.subtitle}>{item.subtitle}</h4>
                <p>{item.description}</p>
                <a href={item.url} className={styles.link} target="_blank"  rel="noopener noreferrer">{item.name}</a>
                <ul className={styles.list}>
                  {
                    links && links.length > 0 &&
                    links.map((link, index) => (
                      <li key={index}><a href={link} className={styles.link} target="_blank" rel="noopener noreferrer">{link}</a></li>
                    ))
                  }
                </ul>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};


export default LatestFirstChoice;
