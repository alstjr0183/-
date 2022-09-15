// reduce
function solution1(string) {
    const array = [...string]

    let alphabets = []
    let plus = 0

    array.reduce((a, b) => {
        // TODO: 변수를 사용하지않고 reduce의 전값이랑 현재값으로 어떤행동을할수있는 특성을 이용해서 할수있지않을까 싶다
        if (isNaN(b)) {
            alphabets.push(b)
        } else {
            plus = plus + Number(b)
        }
    }, array[0])


    return alphabets.sort().join('') + plus
}

// for
function solution2(string) {
    // Array.from() 사용
    const array = Array.from(string)

    let alphabets = []
    let plus = 0

    for (let i = 0; i < array.length; i++) {
        // 삼항연사자를 사용
        isNaN(array[i]) ? alphabets.push(array[i]) : plus = plus + Number(array[i])
    }

    return alphabets.sort().join('') + plus
}

// 재귀함수
function solution3(string, alphabets = [], plus = 0, count = 0) {
    let array = string.split('')

    if (array.length === count) {
        return alphabets.sort().join('') + plus
    }

    if (isNaN(array[count])) {
        alphabets.push(array[count])
    } else {
        plus = plus + Number(array[count])
    }

    return solution3(string, alphabets, plus, count + 1)
}



describe('', () => {
    it('solution1 실행', () => {
        expect(solution1('K1KA5CB7')).toBe('ABCKK13')
        expect(solution1('AJKDLSI412K4JSJ9D')).toBe('ADDIJJJKKLSS20')
    })

    it('solution2 실행', () => {
        expect(solution2('K1KA5CB7')).toBe('ABCKK13')
        expect(solution2('AJKDLSI412K4JSJ9D')).toBe('ADDIJJJKKLSS20')
    })

    it('solution3 실행', () => {
        expect(solution3('K1KA5CB7')).toBe('ABCKK13')
        expect(solution3('AJKDLSI412K4JSJ9D')).toBe('ADDIJJJKKLSS20')
    })
})