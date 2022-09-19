function solution1(n, plan) {
    let x = 1,
        y = 1

    for (let i = 0; i < plan.length; i++) {
        let saveX = x
        let saveY = y

        if (plan[i] === 'R') x = x + 1
        if (plan[i] === 'L') x = x - 1
        if (plan[i] === 'U') y = y - 1
        if (plan[i] === 'D') y = y + 1

        if (y <= 0 || y > n) {
            y = saveY
        }
        if (x <= 0 || x > n) {
            x = saveX
        }
    }

    return `${y} ${x}`
}




describe('상하좌우', () => {
    it('solution1을 실행한다', () => {
        expect(solution1(5, ['R', 'R', 'R', 'U', 'D', 'D'])).toBe('3 4')
        expect(solution1(5, ['D', 'D', 'D', 'L', 'R', 'R'])).toBe('4 3')
        expect(solution1(5, ['L', 'L', 'D', 'U', 'D', 'D'])).toBe('3 1')
    })
})