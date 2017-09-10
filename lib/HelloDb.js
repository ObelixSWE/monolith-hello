/*
*  Name :  RandDb.js
*  Location : /imports/UI/Bubbles
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: {HelloDb}
*/

import Monolith from 'meteor/monolith-sdk';


let BubbleDatabase = Monolith.Monolith.BubbleDatabase;
let aBubbleCollection = Monolith.Monolith.aBubbleCollection;

export const HelloDb = new BubbleDatabase('hello');
