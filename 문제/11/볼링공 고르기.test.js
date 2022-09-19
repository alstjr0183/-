// for
function solution1(array) {
    const N = array.length

    array.sort()

    let result = 0

    for (let i = 0; i < N - 1; i++) {
        for (let d = i + 1; d < N; d++) {
            if (array[i] !== array[d]) {
                result = result + 1
            }
        }
    }

    return result;
}

describe('', () => {
    it('solution1 실행', () => {
        expect(solution1([1, 3, 2, 3, 2])).toBe(8)
        expect(solution1([1, 5, 4, 3, 2, 4, 5, 2])).toBe(25)
    })
})