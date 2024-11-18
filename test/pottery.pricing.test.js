import { makePottery } from "../src/scripts/PotteryWheel.js"
import { firePottery } from "../src/scripts/Kiln.js"
import { usePottery, toSellOrNotToSell } from "../src/scripts/PotteryCatalog.js"


describe("Sell uncracked pottery", () => {
    let piece = makePottery("Snowflake", 10, 8)
    piece = toSellOrNotToSell(firePottery(piece, 2000))
    const catalog = usePottery()

    test("Piece is priced when not cracked", () => {
        expect("price" in piece).toBe(true)
        expect(piece.price).toBe(40)
    })

    test("In array of items to sell when uncracked", () => {
        expect(catalog.find(p => p.shape === "Snowflake")).not.toBeUndefined()
    })

    test("Piece has correct price", () => {
        expect(piece.price).toBe(40.00)
    })
})

describe("Do not sell cracked pottery", () => {
    let vase = makePottery("Vase", 4, 9)
    vase = toSellOrNotToSell(firePottery(vase, 3000))
    const catalog = usePottery()

    test("Piece is not priced when cracked", () => {
        expect("price" in vase).toBe(false)
    })

    test("Not in array of items to sell when cracked", () => {
        expect(catalog.find(p => p.shape === "Vase")).toBeUndefined()
    })
})

