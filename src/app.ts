import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import './styles.scss'
import {Letters} from './letters'

export class App {
  message = 'Hello World!';
  tiles=[
    {token: "fuenf", text: "fünf"},
    {token: "zehn", text: "zehn"},
    {token: "viertel", text: "1/4"},
    {token: "zwanzig", text: "zwanzig"},
    {token: "halb", text: "halb"},
    {token: "vor", text: "vor"},
    {token: "nach", text: "nach"},
    {token: "1", text: "eins"},
    {token: "2", text: "2"},
    {token: "3", text: "drei"},
    {token: "4", text: "4"},
    {token: "5", text: "fünf"},
    {token: "6", text: "sechs"},
    {token: "7", text: "sieben"},
    {token: "8", text: "8"},
    {token: "9", text: "neun"},
    {token: "10", text: "10"},
    {token: "11", text: "elf"},
    {token: "12", text: "zwölf"},
  ]
 
  attached(){
    const l= new Letters()
    setInterval(()=>{
      const tokens=l.getTokensForTime(new Date())
    },30)
  }
}
