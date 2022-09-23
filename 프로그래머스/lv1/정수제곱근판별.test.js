/*

미지의값 : 정수 n이 어떤 양의정수 x의 제곱인지 판단하려한다
    자료
        n ( 양의정수 )
        n / x = x 를했을대 x === x 가 같으면 x의 제곱인지 알수있을거같다

    조건
        n이 x의 제곱이라면 x+1의 제곱을 return
        n이 x의 제곱이 아니라면 -1을 return 
계획
    반복문을 돌리는데 몇번 확인해야할지 모르니 재귀나 while로 풀어봐야할거같다
    재귀함수로 가정한다
    재귀함수의 매개변수에 +1씩 해서 1부터 x를 찾을때까지 반복을해준다
    n / x 를했을대 답이 x 일경우 x의 제곱이므로 (x+1) * (x+1) return하고 
    n만큼 반복을 했는대도 없는경우엔 -1을 return한다

반성    
    처음에 재귀로 풀었는데 정확성테스트에서 런타임오류가나서 for문으로 풀었더니 되었다
        재귀함수는 stack 메모리를 사용하는데 반복적으로 자기자신을 부르며 stack에 쌓여가기때문에 성능이 좋지않다고한다
            이러한 문제를 위해서 꼬리재귀 최적화를 제공한다고해서 찾아봤는데 아직 잘이해가안된다 메모해놓자

*/


function solution(n) {
    // 처음풀이
    // const check = n / x

    // if (check === x) {
    //     return (x + 1) * (x + 1)
    // }

    // if (n === x) {
    //     return - 1
    // }

    // return solution(n, x + 1)


    for (let i = 1; i < n + 1; i++) {
        const check = n / i

        if (check === i) {
            return (i + 1) * (i + 1)
        }

        if (n === i) {
            console.log(n, i)
            return - 1
        }
    }
}

describe('', () => {
    it('solution 실행', () => {
        expect(solution(121)).toBe(144)
        expect(solution(3)).toBe(-1)
    })
})