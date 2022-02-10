import { setTextFilter, sortByTitle, sortByDate } from "../../actions/filters";

test('should setup setTextFilter with value', () => {
    const text = 'good morning'
    const action = setTextFilter(text)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test('should setup setTextFilter with defaults value', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should setup sortByTitle', () => {
    expect(sortByTitle()).toEqual({type: 'SORT_BY_TITLE'})
})

test('should setup sortByDate', () => {
    expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'})
})