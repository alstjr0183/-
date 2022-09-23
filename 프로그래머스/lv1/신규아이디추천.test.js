/*

미지의값 : 네오가 설계한 7단계의 처리과정을 거친후의 추천아이디를 return하도록 함수를 완성해주세요
    자료
        new_id( 알파벳 대문자 ,소문자 ,숫자 ,특수문자로 구성되어있는 1이상1000이하 문자열 )
        알파벳은 string 숫자는 number 특수문자는  -  _  . 
        7단계의 순차적인 처리과정후 맞지않은 경우 규칙에맞는 아이디를 추천해준다
            1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
            2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
            3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
            4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
            5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
            6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
                만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
            7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

    조건
        추천아이디의 길이는 3이상 15이하
        아이디는 알파벳소문자 , 숫자 , 빼기 , 밑줄 , 마침표 문자만 사용가능
        마침표는 처음과 끝에사용못하고 연속으로도 사용못한다
계획
    split('')를 통해서 배열로바꿔 각각의 원소를 나눠준다
    숫자인경우에는 number로 변환해준다
    7단계를 각단계에맞게 함수를 만들어준다
    7단계의 순차적인 조건들을 기준으로 바꿔준다
        1. 문자열인 경우에만 toLowerCase() 를 통해 소문자로 변경해준다
        2. 문자열인경우 toLowerCase을통해 소문자인지확인하고 - _ . 아닌경우엔 모든 문자제거
        3. reduce를 이용해 현재값과 전값이 .이 같은경우 하나로 치환한다
        4. 배열의 [0]과 마지막index에 .이라면  제거한다
        5. new_id가 빈문자열이라면 a를 대입한다
        6. length가 16이상이면 splice를 이용하여 (15, new_id.length ) 제거해준다
        7. new_id length가 2이하면 new_id[2] for(let i = new_id.length ; i<4; i++) {
            new_id.push(new_id[2])
        }  를 해준다

반성
    splice() 함수사용시 찾아보았다
    정규식 표현을 확인한다

*/

const step = (arr, num) => {
    const isString = (s) => {
        return typeof s === 'string'
    }
    const pattern_eng = /[a-zA-Z]/
    const pattern_spc = /[._-]/;

    // 1. 문자열인 경우에만 toLowerCase() 를 통해 소문자로 변경해준다
    if (num === 0) {
        return arr.map((s) => {
            if (isString(s)) {
                return s.toLowerCase()
            }
        })
    }
    //  2. 문자열인경우 toLowerCase을통해 소문자인지확인하고 - _ . 아닌경우엔 모든 문자제거
    if (num === 1) {
        return arr.map((s) => {
            // 문자열인 경우에만
            if (isString(s)) {
                // 소문자이거나 - 
                if (pattern_eng.exec(s) || pattern_spc.exec(s)) {
                    return s
                } else {
                    return ''
                }
            } else {
                return s
            }
        })
    }
    //  3. reduce를 이용해 현재값과 전값이 .이 같은경우 하나로 치환한다
    if (num === 2) {

    }
    // 4. 배열의 [0]과 마지막index에 .이라면  제거한다
    if (num === 3) {

    }
    // 5. new_id가 빈문자열이라면 a를 대입한다
    if (num === 4) {

    }
    // 6. length가 16이상이면 splice를 이용하여 (15, new_id.length ) 제거해준다
    if (num === 5) {

    }
    //  7. new_id length가 2이하면 new_id[2] for(let i = new_id.length ; i<4; i++) { new_id.push(new_id[2]) }  를 해준다
    if (num === 6) {

    }
}


function solution(new_id) {
    // 문자열을 배열로 나눠준다
    let answer = new_id.split('')

    // 숫자인경우에는 number로 변환해준다
    for (let i = 0; i < answer.length; i++) {
        if (!isNaN(Number(answer[i]))) {
            answer[i] = Number(answer[i])
        }
    }

    for (let i = 0; i < 2; i++) {
        answer = step(answer, i)
    }
    console.log(answer)
}

describe('', () => {
    it('solution 실행', () => {
        expect(solution("...!@BaT#*..y.abcdefghijklm")).toBe("bat.y.abcdefghi")
        // expect(solution("123_.def")).toBe("123_.def")
    })
})