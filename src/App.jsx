import React from 'react';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from "shards-react";
import meals from './meals'

function MealsCategories({ categories = [], onChoose }) {
  return (
    <ButtonGroup vertical size="lg">
      {
        categories.map(
          cat => <Button key={cat} outline theme="light" onClick={() => onChoose(cat)}>{cat}</Button>
        )
      }
    </ButtonGroup>
  )
}

function MealsList({ meals = [] }) {
  return (
    <ListGroup>
      {meals.map(meal => <ListGroupItem key={meal}>{meal}</ListGroupItem>)}
    </ListGroup>
  )
}

function App() {
  const [category, setCategory] = React.useState(null)

  return (
    <center>
      <span style={{ fontSize: '24px' }}>🍲</span>
      <br />
      {
        category
          ? <>
            <Button outline style={{ marginBottom: '10px' }} theme="light" onClick={() => setCategory(null)}>⬅️</Button>
            <MealsList meals={meals.filter(c => c.name === category)[0]['items']} />
          </>
          : <MealsCategories categories={meals.map(m => m.name)} onChoose={setCategory} />
      }
    </center>
  );
}

export default App;