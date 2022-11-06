import React from 'react';

import classes from './MealsSummary.module.css';

function MealsSummary() {
  return (
    <React.Fragment>
        <section className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>Choose your favourite meal from our broad selection of meals and enjoy a delicious <br /> lunch or dinner at home</p>
        <p>All our meals are cooked with high-quality ingredients, just in time and ofcourse by experienced chefs!</p>
        </section>
    </React.Fragment>
  );
};

export default MealsSummary;