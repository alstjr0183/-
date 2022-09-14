// reduce 사용
function solution1(numbers) {
    // TODO: reduce함수에대해 공부
    let result = numbers.reduce((a, b) => {
        if (a > 1) {
            return a * b
        } else {
            return a + b
        }
    })

    return result
}

// for문 사용
function solution2(numbers) {
    let [result] = numbers

    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > 1) {
            result = result * numbers[i + 1]
        } else {
            result = result + numbers[i + 1]
        }
    }

    return result
}

// 재귀함수 사용
function solution3(numbers, result = numbers[0], count = 0) {
    if (numbers.length - 1 === count) {
        return result
    }

    if (numbers[count] > 1) {
        return solution3(numbers, result * numbers[count + 1], count + 1)
    } else {
        return solution3(numbers, result + numbers[count + 1], count + 1)
    }
}


// while 사용
function solution4(numbers) {
    let [result] = numbers
    let count = 0

    while (true) {
        if (numbers.length - 1 === count) {
            return result;
        }
        console.log(result, count)
        if (numbers[count] > 1) {
            result = result * numbers[count + 1]
        } else {
            result = result + numbers[count + 1]
        }
        count++
    }

}



describe('', () => {
    it('reduce로 풀이', () => {
        expect(solution1([0, 2, 9, 8, 4])).toBe(576)
        expect(solution1([5, 6, 7])).toBe(210)
    })

    it('for문 풀이', () => {
        expect(solution2([0, 2, 9, 8, 4])).toBe(576)
        expect(solution2([5, 6, 7])).toBe(210)
    })

    it('재귀함수로 풀이', () => {
        expect(solution3([0, 2, 9, 8, 4])).toBe(576)
        expect(solution3([5, 6, 7])).toBe(210)
    })

    it('while로 풀이', () => {
        expect(solution4([0, 2, 9, 8, 4])).toBe(576)
        expect(solution4([5, 6, 7])).toBe(210)
    })
})

