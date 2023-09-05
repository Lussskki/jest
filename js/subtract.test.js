const subtract = require('./subtract')

test('subracting two numbers',()=>{
    expect(
        subtract(3,2).toBe(1)
    )
})