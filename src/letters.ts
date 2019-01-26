import * as moment from 'moment'

export class Letters {
  public words = {
    "1": "eins", "2": "zwei", "3": "drei", "4": "vier", "5": "fünf",
    "6": "sechs", "7": "sieben", "8": "acht", "9": "neun",
    "10": " zehn", "11": " elf", "12": " zwölf", Uhr: " Uhr.",
    viertel: "viertel ", halb: "halb ", "20": "zwanzig ", nach: " nach ", vor: " vor "
  }

  public getWordsForTime(date) {
    const m = moment(date)
    const w = this.words
    const hr = (m.hours() > 12 ? m.hours() - 12 : m.hours())
    const n = (hr==12 ? 1 : hr + 1).toString()
    const h=hr.toString()
    switch (Math.round(m.minute()/5)*5) {
      case 0: return w[h] + w.Uhr
      case 5: return w['5'] + w.nach + w[h]

      case 10: return w['10'] + w.nach + w[h]
      case 15: return w.viertel + w.nach + w[h]
      case 20: return w["20"] + w.nach + w[h]
      case 25: return w["5"] + w.vor + w[h]
      case 30: return w.halb + w[n]
      case 35: return w["5"] + w.nach + w.halb + w[n]
      case 40: return w["20"] + w.vor + w[n]
      case 45: return w.viertel + w.vor + w[n]
      case 50: return w["10"] + w.vor + w[n]
      case 55: return w["5"] + w.vor + w[n]
      default: return "Error "+m.minute()+" "+m.hours()
    }
  }
}
