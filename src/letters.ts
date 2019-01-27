import * as moment from "moment";

export class Letters {
  public words = {
    bald: "bald",
    "1": "eins",
    "2": "zwei",
    "3": "drei",
    "4": "vier",
    "5": "fünf",
    "6": "sechs",
    "7": "sieben",
    "8": "acht",
    "9": "neun",
    "10": " zehn",
    "11": " elf",
    "12": " zwölf",
    uhr: " Uhr.",
    fuenf: "fünf",
    zehn: "zehn",
    viertel: "viertel",
    halb: "halb ",
    zwanzig: "zwanzig ",
    nach: " nach ",
    vor: " vor ",
    vorbei: " vorbei."
  };

  public getTokensForTime(date) {
    const m = moment(date);
    const w = this.words;
    const hr = m.hours() > 12 ? m.hours() - 12 : m.hours();
    const n = (hr == 12 ? 1 : hr + 1).toString();
    const h = hr.toString();
    const min = m.minute();
    const rounded = Math.round(min / 5) * 5;
    let ret = [];
    switch (rounded) {
      case 0:
      case 60:
        ret = [h, "uhr"];
        break;
      case 5:
        ret = ["fuenf", "nach", h];
        break;
      case 10:
        ret = ["zehn", "nach", h];
        break;
      case 15:
        ret = ["viertel", "nach", h];
        break;
      case 20:
        ret = ["zwanzig", "nach", h];
        break;
      case 25:
        ret = ["fuenf", "vor", "halb", n];
        break;
      case 30:
        ret = ["halb", n];
        break;
      case 35:
        ret = ["fuenf", "nach", "halb", n];
        break;
      case 40:
        ret = ["zwanzig", "vor", n];
        break;
      case 45:
        ret = ["viertel", "vor", n];
        break;
      case 50:
        ret = ["zehn", "vor", n];
        break;
      case 55:
        ret = ["fuenf", "vor", n];
        break;
      default:
        return ["Error"];
    }
    
    if (rounded - min < 0) {
      ret.push("vorbei");
    } else if (rounded - min > 0) {
      ret.unshift("bald");
    }
    
    return ret;
  }

  public getWordsForTime(date) {
    const tokens = this.getTokensForTime(date);
    let r = "";
    for (const t of tokens) {
      r += this.words[t];
    }
    return r;
  }
}
