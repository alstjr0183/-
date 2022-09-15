// reduce
function solution1(string) {
    const array = [...string]

    let alphabet = []
    let plus = 0

    array.reduce((a, b) => {
        if (isNaN(b)) {
            alphabet.push(b)
        } else {
            plus = Number(plus) + Number(b)
        }
    }, array[0])


    return alphabet.sort().join('') + plus
}


// for

describe('', () => {
    it('solution1 실행', () => {
        expect(solution1('K1KA5CB7')).toBe('ABCKK13')
        expect(solution1('AJKDLSI412K4JSJ9D')).toBe('ADDIJJJKKLSS20')
    })
})