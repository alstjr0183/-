function solution1(hour) {
    let count = 0

    for (let i = 0; i < hour + 1; i++) {
        for (let ii = 0; ii < 60; ii++) {
            for (iii = 0; iii < 60; iii++) {
                if (`${i} ${ii} ${iii}`.includes('3')) {
                    count++
                }
            }
        }
    }

    return count
}

describe('', () => {
    it('solution1 실행', () => {
        expect(solution1(5)).toBe(11475)
    })
})