import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";
import { Letters } from "./letters";

export class App {
  message = "Hello World!";
  tiles = [
    { token: "fuenf", text: "fünf", display: "inactive" },
    { token: "zehn", text: "zehn", display: "inactive" },
    { token: "viertel", text: "1/4", display: "inactive" },
    { token: "zwanzig", text: "zwanzig", display: "inactive" },
    { token: "vor", text: "vor", display: "inactive" },
    { token: "nach", text: "nach", display: "inactive" },
    { token: "halb", text: "halb", display: "inactive" },
    { token: "1", text: "eins", display: "inactive" },
    { token: "2", text: "2", display: "inactive" },
    { token: "3", text: "drei", display: "inactive" },
    { token: "4", text: "4", display: "inactive" },
    { token: "5", text: "fünf", display: "inactive" },
    { token: "6", text: "sechs", display: "inactive" },
    { token: "7", text: "7", display: "inactive" },
    { token: "8", text: "acht", display: "inactive" },
    { token: "9", text: "neun", display: "inactive" },
    { token: "10", text: "10", display: "inactive" },
    { token: "11", text: "elf", display: "inactive" },
    { token: "12", text: "zwölf", display: "inactive" }
  ];

  attached() {
    const l = new Letters();
    setInterval(() => {
      const tokens = l.getTokensForTime(new Date());
      this.tiles.forEach(tile=>{tile.display="inactive"})
      tokens.forEach(token=>{
        const tile=this.tiles.find((t=>t.token==token))
        tile.display="active"
      })
    }, 30);
  }
}
