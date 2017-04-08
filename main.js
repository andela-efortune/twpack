import greetUser from './first-module';
import  playMusic from './second-module';
import './styles/main.scss';

let imgElement = document.createElement('img');
imgElement.src = require('./images/me.jpg');;

greetUser('Iyke', document.querySelector('h1'));
playMusic('Usher', document.querySelector('p'));
document.querySelector('div').appendChild(imgElement);

