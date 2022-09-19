function solution1(food_time, K) {
    const length = food_time.length;

    let save = 0
    let now = 0


    for (let i = 0; i < K; i++) {
        if (i === K - 1) {
            break;
        }
        console.log(now)

        if (food_time[now] === 0) {
            now = now + 1
        } else {

            if (now === length - 1) {
                now = 0
                food_time[now] = food_time[now] - 1
            } else {
                food_time[now] = food_time[now] - 1
                now = now + 1
            }
        }
    }

    return now
}

describe('무지 먹방 라이브', () => {
    it('solution1 실행', () => {
        expect(solution1([3, 1, 2], 15)).toBe(1)
    })
})