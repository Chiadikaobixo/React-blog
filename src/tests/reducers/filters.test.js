import filtersReducers from '../../reducers/filters'

test('should set up default filter value', () => {
    const result = filtersReducers(undefined, {type: '@@INIT'})
    expect(result).toEqual({
        text: '',
        sortBy: 'date'
    })
})

test('should set setTextFilter', () => {
    const text = 'my new home'
    const action = { type: 'SET_TEXT_FILTER', text}
    const result = filtersReducers(undefined, action)
    expect(result.text).toEqual(text)
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'date'
    }
    const action = { type: 'SORT_BY_DATE'}
    const result = filtersReducers(currentState, action)
    expect(result.sortBy).toBe('date')
})