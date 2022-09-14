function solution1(numbers) {
    let result = numbers.reduce((a, b) => {
        if (a > 1) {
            return a * b
        } else {
            return a + b
        }
    })

    return result
}

// function solution2(numbers) {
//     let result = numbers.reduce((a, b) => {
//         if (a > 1) {
//             return a * b
//         } else {
//             return a + b
//         }
//     })

//     return result
// }




describe('', () => {
    it('reduce로 풀이', () => {
        expect(solution1([0, 2, 9, 8, 4])).toBe(576)
        expect(solution1([5, 6, 7])).toBe(210)
    })

    it('for문 풀이', () => {
        // expect(solution2([0, 2, 9, 8, 4])).toBe(576)
    })

    it('while로 풀이', () => {
    })
})

