function solution1(n, plan) {
    let [x, y] = [1, 1]

    for (let i = 0; i < plan.length + 1; i++) {
        let check = directionCheck(`${x}${y}`, n)
        console.log(x, y)
        if (check.includes('R') && plan[i] === 'R') y = y + 1
        if (check.includes('L') && plan[i] === 'L') y = y - 1
        if (check.includes('U') && plan[i] === 'U') x = x - 1
        if (check.includes('D') && plan[i] === 'D') x = x + 1
    }

    return `${x} ${y}`
}

function directionCheck(nowxy, n) {
    if (nowxy === '11') return 'RD'
    if (nowxy === `1${n}`) return 'LD'
    if (nowxy === `${n}1`) return 'UR'
    if (nowxy === `${n}${n}`) return 'UL'

    for (let i = 2; i < n; i++) {
        if (nowxy === `1${i}`) return 'RDL'
        if (nowxy === `${i}1`) return 'ULD'
        if (nowxy === `${n}${i}`) return 'LUR'
        if (nowxy === `${i}${n}`) return 'ULD'
    }

    return 'RULD'
}


describe('상하좌우', () => {
    it('solution1을 실행한다', () => {
        expect(solution1(5, ['R', 'R', 'R', 'U', 'D', 'D'])).toBe('3 4')
        expect(solution1(5, ['D', 'D', 'D', 'L', 'R', 'R'])).toBe('4 3')
    })
})