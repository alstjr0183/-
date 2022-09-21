/*
    컴퓨터의개수는 7대 연결되어있는쌍의 수는 6쌍이다
    미지의것 : 1번컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수를 출력하는 프로그램을 작성하시오
        자료
            
            연결되어있는지 확인할수있는 이중배열
            1과 연결되어있는원소는 2 ,5이다
            2,5와 연결되어있는 원소는 3,6이다
            4,6은 아무랑도 연결되어있지않다

        조건

    계획
        저 순서를 그대로 큐에 넣고
            let queue = [
            [1, 2],
            [2, 3],
            [1, 5],
            [5, 2],
            [5, 6],
            [4, 7]
        ]

        쌍을 연결되었는지 확인하는 변수를 만들어준다
            let connect = []

        connect변수에 queue의 초기값을 넣어준다
            connect.push(queue[0][0])

        queue의 length만큼 반복을 해준다
            while(queue.length)

        queue배열에있는 첫번째원소를 꺼내어준다
            const [first,second] = queue.shift()

        첫번째 원소를 둘다 connect에 넣어주는데 만약 connect배열중 이미 있는 값의 배열이라면 있지않는값을 배열에 넣어주고 connect에없다면 새로운 배열로 그2개의 값을 넣어줌
            for(let i =0; i<connect.length; i++){
                if(connect[i].includes(first)){
                    connect[i].push(second)
                }else {
                    connect.push([first,second])
                }
            }
    반성
*/

function solution1(data) {
    let queue = [...data]

    let connect = []

    connect.push(queue[0])

    while (queue.length) {
        const [first, second] = queue.shift();

        for (let i = 0; i < connect.length; i++) {
            if (connect[i].includes(first)) {
                if (!connect[i].includes(second)) {
                    connect[i].push(second)
                }
            } else {
                connect.push([first, second])
            }
        }
    }

    for (let i = 0; i < connect.length; i++) {
        if (connect[i].includes(1)) {
            return connect[i].length - 1
        }
    }

}

describe('', () => {
    it('solution1 실행', () => {
        expect(solution1([
            [1, 2],
            [2, 3],
            [1, 5],
            [5, 2],
            [5, 6],
            [4, 7]
        ])).toBe(4)
    })
})