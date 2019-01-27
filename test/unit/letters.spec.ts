import {Letters} from '../../src/letters'
import * as moment from 'moment'
import { AssertionError } from 'assert';

describe('letters',()=>{
  it("converts a date in tokens",()=>{
    const l=new Letters()
    const d1=moment("2019-01-01T20:03:00")
    let t1=l.getTokensForTime(d1.toDate())
    expect(t1).toBeInstanceOf(Array)
    expect(t1).toEqual(['bald','fuenf','nach','8'])
    d1.hour(11).minute(59)
    expect(l.getTokensForTime(d1.toDate()).join('')).toEqual('bald12uhr')
    d1.hour(12).minute(1)
    expect(l.getTokensForTime(d1.toDate()).join('')).toEqual('12uhrvorbei') 
    d1.hour(23).minute(58)
    expect(l.getTokensForTime(d1.toDate()).join('')).toEqual('bald12uhr')   
    d1.hour(0).minute(2)
    expect(l.getTokensForTime(d1.toDate()).join('')).toEqual('12uhrvorbei') 
    console.log(d1.format())
  })
})
