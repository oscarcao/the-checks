import React, { Component } from 'react';
import AppHeader from '../Components/AppHeader';
import WhoDependsPage from './WhoDependsPage';
import ProgressBar from '../Components/ProgressBar';
import NextButton from '../Components/NextButton';


import Page from './Page'

export default class PageLayout extends Component {
    render() {
        return (
            <div className="au-app container">
                <div className="progressbar-container">
                    <ProgressBar currentValue="20" maxValue="20"></ProgressBar>
                </div>
                <header>
                    <AppHeader></AppHeader>
                </header>
                <main>
                    <Page></Page>
                    <WhoDependsPage ></WhoDependsPage>
                </main>
                <footer>
                    <NextButton></NextButton>
                </footer>
            </div>
        );
    }
}