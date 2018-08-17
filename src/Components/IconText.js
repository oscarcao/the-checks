import React, { Component } from 'react';

export default class IconText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.defaultIconClass = this.props.defaultIconClass;
        this.selectedIconClass = this.props.selectedIconClass;
        this.tagId = this.props.tagId;
        this.iconLabel = this.props.iconLabel;
        this.groupName = this.props.groupName ? this.props.groupName : "icon-group"
    }

    handleChange () {
        this.setState(prevState => ({
            isSelected: !prevState.isSelected
        }));
    }

    render() {
        return (
            <div className="icon">
                <div className="icon-circle">
                    <input id={this.tagId} type="radio" onChange={this.handleChange} name={this.groupName} value={this.iconLabel} />
                    <label className={"icon-circle-cover " + (this.state.isSelected ?  this.selectedIconClass : this.defaultIconClass) } htmlFor={this.tagId}></label>
                </div>
                <div className="icon-text">
                    <p>{this.iconLabel}</p>
                </div>
            </div>
        );
    }
}
