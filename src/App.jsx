import React from 'react';
import './App.css';
import styled from '@emotion/styled';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from "shards-react";

const meals = [
  { name: 'Жареное', items: ['Жареная картошка', 'Поджареный хлеб', 'Блинчики с мясной начинкой', 'Шаурма'] },
  { name: 'Тушеное', items: ['Тушеные овощи', 'Тушеная картошка', 'Тушёное мясо'] },
  { name: 'Супы', items: ['Борщ', 'Крем-суп', 'Чечевичный суп', 'Луковый суп', 'Куриный бульон'] },
  { name: 'Гарниры', items: ['Гречка', 'Рис', 'Макароны', 'Пюрешка', 'Пельмени', 'Вареники'] },
  { name: 'Мясо', items: ['Стейк', 'Котлеты', 'Фрикадельки'] },
  { name: 'Печёное', items: ['Печеная рыба', 'Печёная картошка', 'Печёные овощи', 'Печёное мясо'] },
  { name: 'Выпечка', items: ['Пицца', 'Пирог', 'Лазанья'] },
  { name: 'Салаты', items: ['Тёплый салат с курицей', 'Цезарь', 'Винегрет', 'Салат с помидорами и базиликом'] },
  { name: 'Десерты', items: ['Панкейки'] }
]

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