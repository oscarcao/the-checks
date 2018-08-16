import React, { Component } from 'react';


export default class PageLayout extends Component {
    render() {
        return (
            <div className="au-app container">
                <div>
                    <p>progress bar component will come here</p>
                </div>
                <header>
                    <p>header component will come here</p>
                </header>
                <main>
                    <p>page content will be injected here</p>
                </main>
                <footer>
                    <p>footer component will come here</p>
                </footer>
            </div>
        );
    }
}