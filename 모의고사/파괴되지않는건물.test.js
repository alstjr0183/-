// 차근차근 진행

function solution1(board, skill) {
    let count = 0


    for (let i = 0; i < skill.length; i++) {
        const [, x1, x2, , , dmg] = skill[i]

        board[x1][x2] = board[x1][x2] - dmg
    }



    for (let i = 0; i < board.length; i++) {
        for (let ii = 0; ii < board[i].length; ii++) {
            if (board[i][ii] > 0) {
                count++
            }
        }
    }

    return count
}

describe('', () => {
    it('solution1 실행', () => {
        // expect(solution1([[10]], [[1, 0, 0, 0, 0, 5]])).toBe(1)
        // expect(solution1([[7, 3]], [[1, 0, 1, 0, 1, 2]])).toBe(2)
        expect(solution1([[1, 2], [3, 4]], [[1, 0, 0, 0, 0, 2], [1, 1, 1, 1, 1, 3], [1, 1, 1, 1, 1, 2],])).toBe(2)
    })
})