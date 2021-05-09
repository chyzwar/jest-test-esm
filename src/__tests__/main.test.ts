import { main } from "../main.js"


describe('main', () => {
    it("concat a and b", () => {
      expect(main()).toEqual('ab')
    })
})