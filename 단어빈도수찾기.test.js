const solution1 = (str) => {
    // map
    let map = new Map()

    for (let i = 0; i < str.length; i++) {
        map.set(str[i], (map.get(str[i]) || 0) + 1)
    }

    let answer = Object.fromEntries(map.entries())

    // entries , for 사용해 정렬
    answer = Object.entries(answer).sort(([, a], [, b]) => b - a);

    let result = []

    for (let i = 0; i < answer.length; i++) {
        result.push(answer[i][0])
    }
    return result
};

function solution2(str) {
    // object
    const answer = {}

    for (let i = 0; i < str.length; i++) {
        answer[str[i]] = (answer[str[i]] || 0) + 1
    }

    // entries , reduce 사용해 정렬
    const arr = []

    Object.entries(answer).sort(([, a], [, b]) => b - a).reduce((a, b) => arr.push(b[0]), answer)

    return arr
}

function solution3(str) {
    // 1. 의미없는 변수사용
    // let splitStr = str.split('') 

    // 1. 변수이름도 answer랑 맞지않고 
    // 2. reduce의 인자로가져오는값들을 의미가명확한 표현으로 변경
    // 3. ()를 이용해 return 제거가능
    // const answer = splitStr.reduce((a, b) => {
    //     return {
    //         ...a,
    //         [b]: (a[b] || 0) + 1
    //     }
    // }, {})

    // 1. 굳이 result라는 변수명으로 안빼내고 바로 return 가능
    // 2. 함수사용시 좀더 명확하게 줄바꿈처리를 해주면 가독성이 좋을거같다
    // const result = Object.entries(answer).sort((([, a], [, b]) => b - a)).map((s) => {
    //     return s[0]
    // })

    // 정리
    const obj = str.split('')
        .reduce((acc, cur) => ({
            ...acc,
            [cur]: (acc[cur] || 0) + 1
        }), {})

    return Object.entries(obj)
        .sort((([, a], [, b]) => b - a))
        .map(([s]) => s)
}



function solution4(str) {
    // map
    let answer = {}
    let splitStr = str.split('')

    splitStr.map((i) => {
        answer = {
            ...answer,
            [i]: (answer[i] || 0) + 1
        }
    })

    // entries사용, 정렬 for문으로 직접구현
    const arr = Object.entries(answer)
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            result.push(arr[i - 1][0])
        }
        for (let ii = i + 1; ii < arr.length; ii++) {
            if (arr[i][1] < arr[ii][1]) {
                const save = arr[i]
                arr[i] = arr[ii]
                arr[ii] = save
            }
        }

        if (i === arr.length - 1) {
            result.push(arr[arr.length - 1][0])
        }
    }

    return result
}

// function solution5(str, answer = {}, count = 0) {
//     // 재귀
//     let splitStr = str.split('')

//     if (count === splitStr.length) {
//         const keys = Object.keys(answer)
//         const values = Object.values(answer)

//         let entries = []

//         for (let i = 0; i < keys.length; i++) {
//             entries.push([keys[i], values[i]])
//         }

//         let sort = entries.sort(([, a], [, b]) => b - a)
//         let count2 = 0

//         let result = []

//         while (true) {
//             if (count2 === keys.value) {
//                 return result
//             }

//             return

//         }

//     }

//     answer = {
//         ...answer,
//         [splitStr[count]]: (answer[splitStr[count]] || 0) + 1
//     }

//     return solution5(str, answer, count + 1)
// }

// function solution6(str) {
//     // while
//     let answer = {}
//     let count = 0

//     let splitStr = str.split('')

//     while (true) {
//         if (count === splitStr.length) {
//             return answer
//         }

//         answer = {
//             ...answer,
//             [splitStr[count]]: (answer[splitStr[count]] || 0) + 1
//         }

//         count++
//     }
// }

describe('', () => {
    it('solution1 실행', () => {
        expect(solution1('aaabbcccccdeee')).toEqual(['c', 'a', 'e', 'b', 'd']);
    })
    it('solution2 실행', () => {
        expect(solution2('aaabbcccccdeee')).toEqual(['c', 'a', 'e', 'b', 'd']);
    })
    it('solution3 실행', () => {
        expect(solution3('aaabbcccccdeee')).toEqual(['c', 'a', 'e', 'b', 'd']);
    })
    it('solution4 실행', () => {
        expect(solution4('aaabbcccccdeee')).toEqual(['c', 'a', 'e', 'b', 'd']);
    })
    // it('solution5 실행', () => {
    //     expect(solution5('aaabbcccccdeee')).toEqual(['c', 'a', 'e', 'b', 'd']);
    // })
    // it('solution6 실행', () => {
    //     expect(solution6('aaabbcccccdeee')).toEqual(['c', 'a', 'e', 'b', 'd']);
    // })
})

