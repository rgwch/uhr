import {Letters} from '../../src/letters'

describe('letters',()=>{
  it("converts a date in letters",()=>{
    const l=new Letters()
    console.log(l.getWordsForTime(new Date()))
  })
})
