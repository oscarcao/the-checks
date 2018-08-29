import React from 'react';

import SamplePage from './Containers/SamplePage'
import WhoDependsPage from './Containers/WhoDependsPage'
import VegetablesPage from './Containers/VegetablesPage'
import SampleNarrativePage from './Containers/SampleNarrativePage'
import SortOfExercisePage from './Containers/SortOfExercisePage'
import DrinksPage from './Containers/DrinksPage'

export default function App() {
  return (
    <div>
      <SamplePage />
      <hr />
      <WhoDependsPage />
      <hr />
      <VegetablesPage />
      <hr />
      <SampleNarrativePage />
      <hr />
      <SortOfExercisePage />
      <hr />
      <DrinksPage />
    </div>
  );
}

