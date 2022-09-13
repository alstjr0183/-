// 재귀함수로 풀이
function solution(value, count) {
    const [n, k] = value

    if (n === 1) {
        return count;
    }

    if (n % k === 0) {
        return solution([n / k, k], count + 1)
    } else {
        return solution([n - 1, k], count + 1)
    }
}

// while문 풀이
function solution2(value) {
    let [n, k] = value

    let count = 0

    while (true) {
        if (n === 1) {
            return count
        }

        if (n % k === 0) {
            n = n / k
            count++
        } else {
            n = n - 1
            count++
        }

    }
}

describe('1이 될때까지', () => {
    it('solution1 실행', () => {
        expect(solution([25, 5], 0)).toBe(2)
    })

    it('solution2 실행', () => {
        expect(solution2([25, 5], 0)).toBe(2)
    })
})