const bfs = (exit, graph, startNode) => {
    let visited = []
    let queue = []

    // let [startX, startY] = startNode
    let [exitX, exitY] = exit

    // 상하좌우
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    // queue 시작노드 추가
    queue.push(startNode)

    // queue가 남아있다면?
    while (queue.length) {
        // queue 첫번째 원소 제거
        const [x, y] = queue.shift()

        // 4방향 검사
        for (let i = 0; i < 4; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]]

            // 영역밖으로 나가면 넘어가기
            if (nx < 0 || ny < 0 || nx > exitX || ny > exitY) {
                continue;
            }

            // 괴물있으면 넘어가기
            if (graph[nx][ny] === 0) {
                continue;
            }

            const firstVisitCheck = visited.filter((s) => s[0] === nx && s[1] === ny).length === 0

            // 방문하지않은곳이라면
            if (firstVisitCheck) {
                // visited에 queue첫번째 원소 넣기
                visited.push([nx, ny]);
                // queue에 추가
                queue.push([nx, ny])
            }
        }

    }
    console.log(queue)
    // return visited
}

function solution1(exit, map) {
    bfs(exit, map, [0, 0])
}

describe('', () => {
    it('solution1 실행', () => {
        expect(solution1([3, 3], [[1, 1, 0], [0, 1, 0], [0, 1, 1]])).toBe(5)
    })
})