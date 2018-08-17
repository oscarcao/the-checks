import React from 'react';
import IconText from "../Components/IconText";
import {QuestionWithOption} from '../Components/QuestionOption';

export default function WhoDependsPage () {
    return (
        <div>
            <QuestionWithOption
            question="Who depends on you?"
            option="Pick as many as you like"
            >
            </QuestionWithOption>
            <div className="row">
                <div className="col-lg-12">
                    <div className="center-text">
                        <IconText tagId="partner" iconLabel="Partner" defaultIconClass="partner-icon" selectedIconClass="partner-icon-selected"></IconText>
                        <IconText tagId="children" iconLabel="Children" defaultIconClass="children-icon" selectedIconClass="children-icon-selected"></IconText>
                        <IconText tagId="grandkids" iconLabel="Grandkids" defaultIconClass="grandkids-icon" selectedIconClass="grandkids-icon-selected"></IconText>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="center-text">
                        <IconText tagId="closefriends" iconLabel="Close friends" defaultIconClass="close-friends-icon" selectedIconClass="close-friends-icon-selected"></IconText>
                        <IconText tagId="siblings" iconLabel="Family members" defaultIconClass="siblings-icon" selectedIconClass="siblings-icon-selected"></IconText>
                        <IconText tagId="parents" iconLabel="Parents" defaultIconClass="parents-icon" selectedIconClass="parents-icon-selected"></IconText>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="center-text">
                        <IconText tagId="pets" iconLabel="Pets" defaultIconClass="pets-icon" selectedIconClass="pets-icon-selected"></IconText>
                        <IconText tagId="partncommunityer8" iconLabel="Community" defaultIconClass="community-icon" selectedIconClass="community-icon-selected"></IconText>
                        <IconText tagId="none" iconLabel="None of these" defaultIconClass="none-icon" selectedIconClass="none-icon-selected"></IconText>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
