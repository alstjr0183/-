/*

미지의값 : 검사자의 성격유형 검사 결과를 지표번호 순서대로 return하도록 함수를 만드세요
    자료
        survey ( 질문마다 판단하는 지표 )
            "RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA" 중 하나
        choices ( 검사자가 각 질문마다 선택한 선택지 )
            1	매우 비동의
            2	비동의
            3	약간 비동의
            4	모르겠음
            5	약간 동의
            6	동의
            7	매우 동의
        survey, choices의 개수는 같다
        4개 지표로 성격유형을 구분함
            1번 지표	라이언형(R), 튜브형(T)
            2번 지표	콘형(C), 프로도형(F)
            3번 지표	제이지형(J), 무지형(M)
            4번 지표	어피치형(A), 네오형(N)
        점수가 x < 4 survey[i][0]의 점수가 오른다 x > 4 survey[i][1]의 점수가 오른다

    조건
        하나의 지표에서 유형점수가같다면 사전순으로 빠른성격의 유형으로 판단한다
        reulst값은 지표순으로 해야한다

계획
    객체를 사용해 각유형에따른 값을 가지게한다
    반복문으로 survey[i] choices의[i]를 비교를 해준다
    choices[i]의 점수를 알수있는 함수를 만들어준다
    choices[i]의 값이 4보다작다면 survey[i][0]의 값을점수에맞게 더해주고 를 크다면survey[i][1]의 값을 맞게더해준다
    완성된 객체로 조건문을 사용해 비교후 더 큰수를 찾아 지표순서대로 넣어준다

반성
    문제를 이해하고 계획을 세우는게 너무 오래걸렸다
        계획을 세운뒤 코딩을 했을때는 정리가 많이 된상태라 진도가 잘나갔지만 문제이해하고 계획을 세우는데 너무 오래시간이 걸린거같다
    계획을 세울때 큰틀로 쭉세운뒤 세세하게 구현해보려하는데 글로 정리하려니까 for문 들어있고해서 헷갈려서 그런식으로 잘안되는거같다


*/
const find = (num) => {
    if (num === 1) return 3
    if (num === 2) return 2
    if (num === 3) return 1
    if (num === 4) return 0
    if (num === 5) return 1
    if (num === 6) return 2
    if (num === 7) return 3
}

function solution(survey, choices) {
    // 객체를 사용해 각유형에따른 값을 가지게한다
    let answer = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0
    }

    // 반복문으로 survey[i] choices의[i]를 비교를 해준다
    // choices[i]의 값이 4보다작다면 survey[i][0]의 값을점수에맞게 더해주고 를 크다면survey[i][1]의 값을 맞게더해준다
    for (let i = 0; i < survey.length; i++) {
        const [first, second] = survey[i]
        if (choices[i] < 4) {
            answer = {
                ...answer,
                [first]: answer[first] + find(choices[i])
            }
        } else {
            answer = {
                ...answer,
                [second]: answer[second] + find(choices[i])
            }
        }
    }
    let { R, T, C, F, J, M, A, N } = answer;

    // 완성된 객체로 조건문을 사용해 비교후 더 큰수를 찾아 지표순서대로 넣어준다
    let one = R < T ? 'T' : 'R'
    let two = C < F ? 'F' : 'C'
    let three = J < M ? 'M' : 'J'
    let four = A < N ? 'N' : 'A'

    return one + two + three + four
}

describe('', () => {
    it('solution 실행', () => {
        expect(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])).toBe('TCMA')
    })
})