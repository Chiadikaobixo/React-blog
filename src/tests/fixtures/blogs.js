import moment from 'moment'

export default [{
    id: '1',
    description: 'car',
    note: '',
    createdAt: 0
},{
    id: '2',
    description: 'rent',
    note: '',
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    description: 'credit card',
    note: '',
    createdAt: moment(0).add(4, 'days').valueOf()
}]

