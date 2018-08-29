import React from 'react';

import SamplePage from './Containers/SamplePage'
import HowConfidentYouFeelPage from './Containers/HowConfidentYouFeelPage'
import HowAreYouFeelingPage from './Containers/HowAreYouFeelingPage'
import DoYouDrinkPage from './Containers/DoYouDrinkPage'
import WhoDependsPage from './Containers/WhoDependsPage'
import VegetablesPage from './Containers/VegetablesPage'
import SampleNarrativePage from './Containers/SampleNarrativePage'
import SortOfExercisePage from './Containers/SortOfExercisePage'
import DrinksPage from './Containers/DrinksPage'
import FinancialPrioritiesPage from './Containers/FinancialPrioritiesPage'

export default function App() {
  return (
    <div>
      <SamplePage />
      <hr />
      <HowConfidentYouFeelPage />
      <hr />
      <HowAreYouFeelingPage />
      <hr />
      <WhoDependsPage />
      <hr />
      <VegetablesPage />
      <hr />
      <SampleNarrativePage />
      <hr />
      <SortOfExercisePage />
      <hr />
      <DoYouDrinkPage />
      <hr />
      <DrinksPage />
      <hr />
      <FinancialPrioritiesPage />
    </div>
  );
}

