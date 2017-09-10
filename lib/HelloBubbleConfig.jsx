/*
*  Name :   HelloBubbleConfig.js
*  Location : /imports/UI/Bubbles
*  Author: Emanuele Crespan
*  Creation Data: 2017-09-05
*  Description: {class HelloBubbleConfig}
*/

import React, { Component } from 'react';
import MonolithUI from 'meteor/monolith-sdk';

let CheckBoxList = MonolithUI.MonolithUI.CheckBoxList;
let CheckButton = MonolithUI.MonolithUI.CheckButton;
let ComboBox = MonolithUI.MonolithUI.ComboBox;
let Image = MonolithUI.MonolithUI.Image;
let ImageButton = MonolithUI.MonolithUI.ImageButton;
let LineEdit = MonolithUI.MonolithUI.LineEdit;
let LineEditComboBox = MonolithUI.MonolithUI.LineEditComboBox;
let PushButton = MonolithUI.MonolithUI.PushButton;
let RadioButtonGroup = MonolithUI.MonolithUI.RadioButtonGroup;
let TextAreaButton = MonolithUI.MonolithUI.TextAreaButton;
let TextAreaComboBox = MonolithUI.MonolithUI.TextAreaComboBox;
let VerticalLayout = MonolithUI.MonolithUI.VerticalLayout;
let HorizontalLayout = MonolithUI.MonolithUI.HorizontalLayout;
let AbsBubble = MonolithUI.MonolithUI.AbsBubble;
let AbsButton = MonolithUI.MonolithUI.AbsButton;
let AbsBubbleConfig = MonolithUI.MonolithUI.AbsBubbleConfig;
let BubbleCreator = MonolithUI.MonolithUI.BubbleCreator;
let BubbleDiscriminator = MonolithUI.MonolithUI.BubbleDiscriminator;

import {HelloDb} from "./HelloDb";


export default class HelloBubbleConfig extends AbsBubbleConfig{
    constructor(props){
        super(props);
        this.state={
            value:""
        };
        this.getValue=this.getValue.bind(this);
        this.send=this.send.bind(this);
    }
    getValue(val){
        this.setState({value:val});
    }

    send(){
        let insProm = HelloDb.insert({value: this.state.value});
        insProm.then(
            (result) => {this.props.closeMenu();},
            (error) => {console.log(error);}
        );
    }

    render(){
        return(
            <VerticalLayout>
                <LineEdit
                    updateState={this.getValue}
                />
                <PushButton buttonName='Send' handleClick={this.send}/>
            </VerticalLayout>);
    }

}

/*
how to use:
<RandBubbleConfig send={this.'function name'}/>
*/
