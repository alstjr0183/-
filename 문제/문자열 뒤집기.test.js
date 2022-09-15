// for 사용
function solution1(numbers) {
    let S = []
    let temporary = []

    for (let i = 0; i < numbers.length; i++) {
        temporary.push(numbers[i])

        if (numbers[i] === numbers[i + 1]) {
        } else {
            S.push(temporary)
            temporary = []
        }
    }

    let zero = 0
    let one = 0

    for (let i = 0; i < S.length; i++) {
        if (S[i].includes(0)) {
            zero = zero + 1
        } else {
            one = one + 1
        }
    }

    return zero < one ? zero : one
}

// reduce 사용
function solution2(numbers) {
    let [firstNumber] = numbers

    let S = []
    let temporary = []

    numbers.reduce((a, b, c) => {
        temporary.push(b)
        if (numbers[c] === numbers[c + 1]) {
        } else {
            S.push(temporary)
            temporary = []
        }
        // TODO: index로 접근하는데 개선할수있지않을까?!
        //  구조분해할당을 이용해 해결
    }, firstNumber)

    let zero = 0
    let one = 0

    S.reduce((a, b, c) => {
        if (b.includes(0)) {
            zero = zero + 1
        } else {
            one = one + 1
        }
        // TODO: index로 접근하는데 개선할수있지않을까?!
    }, S[0])

    // for문에서 풀때는 삼항연산자로했지만 Math.min() 사용
    return (Math.min(...[zero, one]))
}

// 재귀함수
function solution3(numbers, zero = 0, one = 0, count = 0) {
    let S = []
    let temporary = []

    for (let i = 0; i < numbers.length; i++) {
        temporary.push(numbers[i])

        if (numbers[i] === numbers[i + 1]) {
        } else {
            S.push(temporary)
            temporary = []
        }
    }

    if (count === S.length) {
        // sort를 사용해서 작은수 return
        return [zero, one].sort((a, b) => a - b)[0]
    }

    if (S[count].includes(0)) {
        return solution3(numbers, zero + 1, one, count + 1)
    } else {
        return solution3(numbers, zero, one + 1, count + 1)
    }
}

// while 사용
function solution4(numbers) {
    let S = []
    let temporary = []

    for (let i = 0; i < numbers.length; i++) {
        temporary.push(numbers[i])
        if (numbers[i] !== numbers[i + 1]) {
            S.push(temporary)
            temporary = []
        }
    }

    let zero = 0
    let one = 0
    let count = 0

    while (true) {
        if (S.length === count) {
            return Math.min(...[zero, one])
        }

        if (S[count].includes(0)) zero = zero + 1
        if (S[count].includes(1)) one = one + 1

        count++
    }
}

describe('', () => {
    it('for문 풀이', () => {
        expect(solution1([0, 0, 0, 1, 1, 0, 0])).toBe(1)
    })

    it('reduce 풀이', () => {
        expect(solution2([0, 0, 0, 1, 1, 0, 0])).toBe(1)
    })

    it('재귀함수 풀이', () => {
        expect(solution3([0, 0, 0, 1, 1, 0, 0])).toBe(1)
    })

    it('while 풀이', () => {
        expect(solution4([0, 0, 0, 1, 1, 0, 0])).toBe(1)
    })
})

