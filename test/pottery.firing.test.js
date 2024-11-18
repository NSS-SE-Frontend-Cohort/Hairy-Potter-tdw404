import { makePottery } from "../src/scripts/PotteryWheel.js"
import { firePottery } from "../src/scripts/Kiln.js"

describe("Firing the pottery in the kiln that is too hot", () => {
    let piece = makePottery("Mug", 10, 8)
    piece = firePottery(piece, 2300)

    test("Pottery object is cracked when temperature is above 2200", () => {
        expect(piece.cracked).toBe(true)
    })

    test("Pottery marked as fired after going in the kiln", () => {
        expect(piece.fired).toBe(true)
    })
})


describe("Firing the pottery in the kiln with the correct temperate", () => {
    let piece = makePottery("Mug", 10, 8)
    piece = firePottery(piece, 1300)

    test("Pottery object is uncracked when temperature is below 2200", () => {
        expect(piece.cracked).toBe(false)
    })

    test("Pottery marked as fired after going in the kiln", () => {
        expect(piece.fired).toBe(true)
    })
})
