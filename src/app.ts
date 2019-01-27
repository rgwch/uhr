import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import { Letters } from "./letters";
import { autoinject } from "aurelia-framework";
import { I18N } from "aurelia-i18n";

@autoinject
export class App {
  tiles = [
    { token: "bald", display: "inactive" },
    { token: "fuenf", display: "inactive" },
    { token: "zehn", display: "inactive" },
    { token: "viertel", display: "inactive" },
    { token: "zwanzig", display: "inactive" },
    { token: "vor", display: "inactive" },
    { token: "nach", display: "inactive" },
    { token: "halb", display: "inactive" },
    { token: "uhr", display: "inactive" },
    { token: "1", display: "inactive" },
    { token: "2", display: "inactive" },
    { token: "3", display: "inactive" },
    { token: "4", display: "inactive" },
    { token: "5", display: "inactive" },
    { token: "6", display: "inactive" },
    { token: "7", display: "inactive" },
    { token: "8", display: "inactive" },
    { token: "9", display: "inactive" },
    { token: "10", display: "inactive" },
    { token: "11", display: "inactive" },
    { token: "12", display: "inactive" },
    { token: "vorbei", display: "inactive" }
  ];

  constructor(protected i18: I18N) {}
  public attached() {
    const l = new Letters();
    setInterval(() => {
      const tokens = l.getTokensForTime(new Date());
      this.tiles.forEach(tile => {
        tile.display = "inactive";
      });
      tokens.forEach(token => {
        const tile = this.tiles.find(t => t.token == token);
        tile.display = "active";
      });
    }, 30);
  }

  protected lang(l: string) {
    switch (l) {
      case "ch":
        this.i18.setLocale("de-CH");
        break;
      case "de":
        this.i18.setLocale("de-DE");
        break;
      default:
        this.i18.setLocale("de-CH")  
    }
  }
}
