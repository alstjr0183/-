/*
미지의 것 : 지뢰를 피해서 지뢰 밭의 모든 단추는 여는것
    자료

    조건

계획
풀이
반성

*/
// 큐를 채우고 
// 큐를 기준으로 반복문을 돌리고
// 주변에 폭탄이있는지 확인
const bfs = (graph, start, visited) => {
    let queue = []


}

function solution(board, y, x) {
    const length = board.join('').length

    // board[0] = 'XME'
    // board[0] = 'E1E'
    // console.log(bfs(board, [y, x]))

    return board
}

describe('', () => {
    it('solution1 실행', () => {
        // expect(solution(['MEE', 'EEE', 'EEE'], 0, 0)).toEqual(['XME', 'EEE', 'EEE'])
        // expect(solution(['MEE', 'EEE', 'EEE'], 0, 1)).toEqual(['E1E', 'EEE', 'EEE'])
        expect(solution(['MEE', 'EEE', 'EEE'], 0, 2)).toEqual(['E1B', '11B', 'BBB'])
    })
})