import handleScore from './util/HandleScore.js'

const init = {
    marks: [],
    credits:[],
    creditFours: [],
    mark: undefined,
    credit: undefined,
    isCheck: false,
}

const {fourScore} = handleScore()

const actions = {
    handleChangeMark(state, mark){
        state.mark = mark
    },
    handleChangeCredit(state, credit){
        state.credit = credit
    },
    add(state) {
        state.marks = [...state.marks, Number(state.mark)]
        state.credits = [...state.credits, Number(state.credit)]
        state.creditFours = [...state.creditFours, fourScore(Number(state.mark))]
        state.isCheck = true
        state.mark = ''
        state.credit = ''
    }, 
    destroy({marks, credits, creditFours}, index){
        marks.splice(index, 1)
        credits.splice(index, 1)
        creditFours.splice(index, 1)
    },
}


export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}