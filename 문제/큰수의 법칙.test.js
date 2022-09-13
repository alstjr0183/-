function solution1(number) {
    // TODO: 구조분해할당 공부
    const [, n, k] = number.split('\n')[0].split(' ').map((string) => Number(string))

    // TODO: array 함수공부
    const numbers = number.split('\n')[1].split(' ').map((string) => Number(string)).sort((a, b) => b - a)

    const [firstNumber, secondNumber] = numbers;

    let result = 0
    let counting = 0

    // TODO: 재귀로 변경
    for (let i = 0; i < n; i++) {
        if (counting < k) {
            result = result + firstNumber
            counting = counting + 1
        } else {
            result = result + secondNumber
            counting = 0
        }
    }

    return result
}

// 재귀함수 버전
function solution2(number, result = 0, count = 0, maximumCount = 0) {
    const [, n, k] = number.split('\n')[0].split(' ').map((string) => Number(string));

    const numbers = number.split('\n')[1].split(' ').map((string) => Number(string)).sort((a, b) => b - a);

    const [firstNumber, secondNumber] = numbers;

    if (count === n) {
        return result;
    }

    for (let i = 0; i < n; i++) {
        if (maximumCount < k) {
            return solution2(number, result + firstNumber, count + 1, maximumCount + 1);
        } else {
            return solution2(number, result + secondNumber, count + 1, 0);
        }
    }
}



describe('큰수의 법칙', () => {
    it('solution1 실행', () => {
        expect(solution1(`5 8 3
2 4 5 4 6`)).toBe(46)
        expect(solution1(`5 7 2
3 4 3 4 3`)).toBe(28)
    })

    it('solution2 실행', () => {
        expect(solution2(`5 8 3
2 4 5 4 6`)).toBe(46)
        expect(solution2(`5 7 2
3 4 3 4 3`)).toBe(28)
    })
})