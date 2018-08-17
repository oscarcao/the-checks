import React, { Component } from 'react';
import AppHeader from '../Components/AppHeader';
import IconText from "../Components/IconText";
import {QuestionWithOption} from '../Components/QuestionOption';



export default class PageLayout extends Component {
    render() {
        return (
            <div className="au-app container">
                <div>
                    <p>progress bar component will come here</p>
                </div>
                <header>
                    <AppHeader></AppHeader>
                </header>
                <main>
                    <QuestionWithOption
                    question="Who depends on you?"
                    option="Pick as many as you like"
                    >
                    </QuestionWithOption>
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-12">
                                <div>
                                    <IconText tagId="partner1" iconLabel="Partner" defaultIconClass="partner-icon" selectedIconClass="partner-icon-selected"></IconText>
                                    <IconText tagId="partner2" iconLabel="Children" defaultIconClass="children-icon" selectedIconClass="children-icon-selected"></IconText>
                                    <IconText tagId="partner3" iconLabel="Grandkids" defaultIconClass="grandkids-icon" selectedIconClass="grandkids-icon-selected"></IconText>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <IconText tagId="partner4" iconLabel="Close friends" defaultIconClass="close-friends-icon" selectedIconClass="close-friends-icon-selected"></IconText>
                                <IconText tagId="partner5" iconLabel="Family members" defaultIconClass="siblings-icon" selectedIconClass="siblings-icon-selected"></IconText>
                                <IconText tagId="partner6" iconLabel="Parents" defaultIconClass="parents-icon" selectedIconClass="parents-icon-selected"></IconText>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <IconText tagId="partner7" iconLabel="Pets" defaultIconClass="pets-icon" selectedIconClass="pets-icon-selected"></IconText>
                                <IconText tagId="partner8" iconLabel="Community" defaultIconClass="community-icon" selectedIconClass="community-icon-selected"></IconText>
                                <IconText tagId="partner9" iconLabel="None of these" defaultIconClass="none-icon" selectedIconClass="none-icon-selected"></IconText>
                            </div>
                        </div>
                            
                        </div>
                    </div>
                    
                </main>
                <footer>
                    <p>footer component will come here</p>
                </footer>
            </div>
        );
    }
}