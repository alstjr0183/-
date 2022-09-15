// for문 sort 사용
function solution(Matrix, array) {
    const [row, column] = Matrix;

    let card = []

    for (let i = 0; i < row; i++) {
        if (i === 0) {
            card.push(array.slice(0, column))
        } else {
            card.push(array.slice(column * i, column * (i + 1)))
        }
    }

    const result = card.map((item) => {
        return item.sort((a, b) => a - b)
    }).map((s) => s[0])

    minNum = result.sort((a, b) => b - a)

    return minNum[0]
}

// 재귀함수 Math() 사용
function solution2(Matrix, array, count = 0, card = []) {
    const [row, column] = Matrix;

    if (count === row) {
        const result = card.map((item) => Math.min(...item))
        minNum = Math.max(...result)
        return minNum
    }

    if (count === 0) {
        card.push(array.slice(0, column))
        return solution(Matrix, array, count + 1, card)
    } else {
        card.push(array.slice(column * count, column * (count + 1)))
        return solution(Matrix, array, count + 1, card)
    }
}

describe('숫자 카드게임', () => {
    it('solution1 실행', () => {
        expect(solution([3, 3], [3, 1, 2, 4, 1, 4, 2, 2, 2])).toBe(2)
        expect(solution([2, 4], [7, 3, 1, 8, 3, 3, 3, 4])).toBe(3)
    })

    it('solution2 실행', () => {
        expect(solution([3, 3], [3, 1, 2, 4, 1, 4, 2, 2, 2])).toBe(2)
        expect(solution([2, 4], [7, 3, 1, 8, 3, 3, 3, 4])).toBe(3)
    })
})