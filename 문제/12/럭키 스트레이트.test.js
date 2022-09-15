// reduce 사용
function solution1(N) {
    const harf = N.length / 2

    let left = N.splice(0, harf).reduce((a, b) => a + b)
    let right = N.splice(-harf).reduce((a, b) => a + b)

    if (left === right) {
        return 'LUCKY'
    } else {
        return 'READY'
    }
}

// for문 사용
function solution2(N) {
    const harf = N.length / 2

    let left = N.splice(0, harf)
    let right = N.splice(-harf)

    let leftValue = 0
    let rightValue = 0

    for (let i = 0; i < left.length; i++) {
        // left = left[i] + left[i + 1] 여기부분을 넣으면 왜 한번만 반복이 되는것일까..
        leftValue = leftValue + left[i]
        rightValue = rightValue + right[i]
    }

    if (leftValue === rightValue) {
        return 'LUCKY'
    } else {
        return 'READY'
    }
}

// 재귀함수 사용
function solution3(N, leftValue = 0, rightValue = 0, count = 0) {
    const harf = N.length / 2

    const copy = N.slice()

    const left = copy.splice(0, harf)
    const right = copy.splice(-harf)


    if (left.length === count) {
        return leftValue === rightValue ? 'LUCKY' : 'READY'
    } else {
        return solution3(N, leftValue + left[count], rightValue + right[count], count + 1)
    }

}

describe('', () => {
    it('solution1 실행', () => {
        expect(solution1([1, 2, 3, 4, 0, 2])).toBe('LUCKY')
        expect(solution1([7, 7, 5, 5])).toBe('READY')
    })

    it('solution2 실행', () => {
        expect(solution2([1, 2, 3, 4, 0, 2])).toBe('LUCKY')
        expect(solution2([7, 7, 5, 5])).toBe('READY')
    })

    it('solution3 실행', () => {
        expect(solution3([1, 2, 3, 4, 0, 2])).toBe('LUCKY')
        expect(solution3([7, 7, 5, 5])).toBe('READY')
    })
})