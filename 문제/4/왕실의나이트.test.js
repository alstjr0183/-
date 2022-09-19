const findX = (x) => {
    if (x === 'a') return 1
    if (x === 'b') return 2
    if (x === 'c') return 3
    if (x === 'd') return 4
    if (x === 'e') return 5
    if (x === 'f') return 6
    if (x === 'g') return 7
    if (x === 'h') return 8
}

function solution1(value) {
    const [x, y] = value
    const [targetX, targetY] = findX(x) + y

    const NumberX = Number(targetX)
    const NumberY = Number(targetY)

    let count = 0

    if ((NumberX + 2 < 8) && (NumberY + 1 < 8)) count++
    if ((NumberX + 2 < 8) && (NumberY - 1 > 0)) count++

    if ((NumberX - 2 > 0) && (NumberY + 1 < 8)) count++
    if ((NumberX - 2 > 0) && (NumberY - 1 > 0)) count++

    if ((NumberY + 2 < 8) && (NumberX + 1 < 8)) count++
    if ((NumberY + 2 < 8) && (NumberX - 1 > 0)) count++

    if ((NumberY - 2 > 0) && (NumberX + 1 < 8)) count++
    if ((NumberY - 2 > 0) && (NumberX - 1 > 0)) count++

    return count;
}

describe('', () => {
    it('solution1 실행', () => {
        expect(solution1('a1')).toBe(2)
        expect(solution1('e5')).toBe(8)
    })
})