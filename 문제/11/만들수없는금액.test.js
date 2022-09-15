function solution1(money) {
    let n = money.sort((a, b) => a - b)

    let num = 1

    for (let i = 0; n.length; i++) {
        if (num < n[i]) {
            break
        }
        num += n[i]
    }

    return num
}

describe('만들수없는금액', () => {
    it('solution1 실행', () => {
        expect(solution1([3, 2, 1, 1, 9])).toBe(8)
    })
})