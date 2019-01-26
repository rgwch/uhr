import * as moment from 'moment'

export class Letters {
  public words = {
    "1": "eins", "2": "zwei", "3": "drei", "4": "vier", "5": "fünf",
    "6": "sechs", "7": "sieben", "8": "acht", "9": "neun",
    "10": " zehn", "11": " elf", "12": " zwölf", Uhr: " Uhr.",
    viertel: "viertel", halb: "halb ", "20": "zwanzig ", nach: " nach ", vor: " vor "
  }

  public getTokensForTime(date) {
    const m = moment(date)
    const w = this.words
    const hr = (m.hours() > 12 ? m.hours() - 12 : m.hours())
    const n = (hr == 12 ? 1 : hr + 1).toString()
    const h = hr.toString()
    switch (Math.round(m.minute() / 5) * 5) {
      case 0: return [h, "Uhr"]
      case 5: return ['5', 'nach', h]
      case 10: return ['10', 'nach', h]
      case 15: return ['viertel', 'nach', h]
      case 20: return ["20", 'nach', h]
      case 25: return ["5",'vor','halb', n]
      case 30: return ['halb',n]
      case 35: return ["5",'nach','halb',n]
      case 40: return ["20",'vor',n]
      case 45: return ['viertel','vor',n]
      case 50: return ["10",'vor',n]
      case 55: return ["5",'vor',n]
      default: return ["Error"]
    }
  }

  public getWordsForTime(date) {
    const tokens=this.getTokensForTime(date)
    let r=""
    for(const t of tokens){
      r+=this.words[t]
    }
    return r;
  }
}
