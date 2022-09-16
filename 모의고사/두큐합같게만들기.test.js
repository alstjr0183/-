// 미지의것 : 길이가 같은 queue1, queue2 가있다 각큐의 원소합을 같게만들기위한 필요한작업의 최소횟수를 구하라
//     자료
//         2큐의 길이는 같다
//         shift: 0index 제거 , push : 배열 마지막 추가
//         모든큐합 / 2 = 각큐의합

//     조건
//         어떤방법으로도 각 큐의 원소합을 같게만들수없으면 -1 return한다
//         1번의 pop , insert를 합친것이 작업 1회이다

// 계획
//     이런 형식으로 할예정이다
//     1회
//     2 7 2 = 11
//     4 6 5 1 3 == 18

//     2회
//     2 7 2 4 = 15
//     6 5 1 3 = 15

//     몇번실행될지 모르니 재귀함수를 써볼까

//      2큐에 담긴 합을 구한다
//      2큐합 / 2 = 목표합설정 
//      원소들중 목표합이랑 같은 값이 있다면 방법1실행 - includes 사용

//      방법1
//          q1, q2 중 어디쪽에 있는지 확인
//              같은쪽의 배열에서 동일값의 인덱스를 찾는다
//              있는쪽의 반대인 q의 index===0 인부분이 될때가지 반복한다
//          
//      방법2 
//          1회실행시마다 각큐의 shift , push의 순서를 바꿔준다
//              count = 0 일땐 q1 shift , q2 push 
//              count = 1 일때 q2 shift , q1 push
//              ~~
//          처음엔 큐1을 Pop 큐2 insert 한다
//          큐1 === 큐2 비교한다
//          맞다면 return 횟수 맞지않다면 return 횟수+1
//      
//      못구한다면 
//           return -1

// 풀이

// 반성

function solution(queue1, queue2) {
    // 각배열의 합
    let sumQ1 = sum(queue1),
        sumQ2 = sum(queue2);

    // 포인터1: 0 , 포인터2 = queue1의 길이
    let pointer1 = 0,
        pointer2 = queue1.length;

    // 목표값
    const target = (sumQ1 + sumQ2) / 2;
    // queue1 , queue2 합침
    const queue = [...queue1, ...queue2];

    // 배열에서 할수있는 모든 경우의 수
    const end = queue.length * 2;

    // 모든경우의수를 반복
    for (let count = 0; count < end; count++) {
        // q1의 합과 target이 같으면 return count
        if (sumQ1 === target) {
            return count;
        }

        // q1 이 target보다 크다면 
        if (sumQ1 > target) {
            // q1 sumq1 = sumq1 - queue[index]
            sumQ1 -= queue[pointer1++];
        } else {
            // q1 sumq1 = sumq1 - 0 
            sumQ1 += queue[pointer2++];
        }
    }

    return -1;
}
const sum = (arr) => arr.reduce((acc, v) => acc + v, 0);

describe('', () => {
    it('solution 실행', () => {
        expect(solution([3, 2, 7, 2], [4, 6, 5, 1])).toBe(2)
        expect(solution([1, 2, 1, 2], [1, 10, 1, 2])).toBe(7)
        expect(solution([1, 1], [1, 5])).toBe(-1)
    })
})
