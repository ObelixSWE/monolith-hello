/*
*  Name :  HelloCreator.jsx
*  Location : /imports/UI/Bubbles
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: {class HelloCreator }
*/

import MonolithUI from 'meteor/monolith-sdk';
/*

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
*/

import React from 'react';
import HelloBubble from './HelloBubble';
import HelloBubbleConfig from './HelloBubbleConfig';
import HelloBubbleCreationButton from './HelloBubbleCreationButton';

class HelloCreator extends MonolithUI.MonolithUI.BubbleCreator {
	constructor(bubbleName) {
		super(bubbleName);
	}
	doMakeBubbleSender(props) {
		return React.createElement(HelloBubble, props);
	}
	doMakeBubbleReceiver(props) {
		return React.createElement(HelloBubble, props);
	}
	doMakeConfigurationMenu(closeMenufun) {
		return React.createElement(HelloBubbleConfig, {closeMenu: closeMenufun});
	}
	doMakeButton(createConfigArea) {
		return React.createElement(HelloBubbleCreationButton, { onClick: createConfigArea });
	}
}

console.log(MonolithUI.MonolithUI);

const rc = new HelloCreator('hello');
MonolithUI.MonolithUI.BubbleDiscriminator.BubbleDiscriminator.registerBubbleCreator(rc);
