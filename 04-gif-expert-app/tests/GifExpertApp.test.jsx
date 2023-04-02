const { screen, render } = require("@testing-library/react")
const { GifExpertApp } = require("../src/GifExpertApp")

describe('first', () => { 
    test('should first', () => { 
        render (<GifExpertApp />)
        screen.debug()
     })
 })