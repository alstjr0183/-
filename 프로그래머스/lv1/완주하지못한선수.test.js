/*
    미지의것: 마라톤을 완주하지 못한 선수의 이름을 return 하는 solution 함수를 작성해주세요
        자료
            participant ( 마라톤선수들의 이름이 담긴배열 )
            completion ( 완주한 선수들의 이름이 담긴 배열 )
            완주못한 사람은 한명이다

        조건
            참가자 중에는 동명이인이 있을수잇다
            completion - 1 === participant
    
    계획
        participant 반복문을 작성한다
        participant에서 completion에있는 원소를 제거한다
        남은 배열의 원소를 return한다

    반성
        participant에서 completion에 들어있는 원소들을 제거한후 최종적으로 1개만남아서 그값을 return했는데 
        프로그래머스 효율성 검사에서 탈락했다 고민을 하다 답지를 봤는데 
        sort후 participant와 completion의 index마다 값이 같아지는데
        거기서 같지 않은값일때 participant[i]를 return하는부분을 보고 생각지도 못했었다..
        내가 왜 이런생각을 못했는지에 대해서 생각을해봤지만 처음엔 문제를 많이 안풀어봐서일까 싶었지만
        나는 sort를 알고있고 sort를 했을경우 두배열 모두 똑같은 기준으로 정렬된다는것도 알고있었다
        결과적으론 내가 알고있는부분을 좀더 끄집어내지않아서 이런생각은 못한거같았다
        앞으론 계획단계에서 내가 아는지식을 좀더 끄집어 내보려는 노력을 하자

*/

function solution1(participant, completion) {
    // 초기 풀이
    // for (let i = 0; i < participant.length; i++) {
    //     for (let ii = 0; ii < completion.length; ii++) {
    //         if (participant[i] === completion[ii]) {
    //             delete participant[i]
    //             delete completion[ii]
    //         }
    //     }
    // }
    // return participant.filter((s) => s)[0]

    // 수정 풀이
    participant.sort()
    completion.sort()

    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i]
        }
    }
}

describe('', () => {
    it('solution1 실행', () => {
        expect(solution1(["leo", "kiki", "eden"], ["eden", "kiki"])).toBe("leo")
        expect(solution1(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])).toBe("vinko")
        expect(solution1(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])).toBe("mislav")
    })
})