import {test, expect} from '@playwright/test'

test.beforeAll(async()=>{
    console.log('This is before All Hook..........')
})

test.afterAll(async()=>{
    console.log('This is after All Hook..........')
})

test.beforeEach(async()=>{
    console.log('This is before each Hook..........')
})

test.afterEach(async()=>{
    console.log('This is after each Hook..........')
})

test.describe('Group 1', async()=>{

    test('Test1', async({page})=>{
    console.log('This is test1..........')
})

    test('Test2', async({page})=>{
    console.log('This is test2..........')
})
})


test.describe('Group 2', async()=>{

    test('Test3', async({page})=>{
    console.log('This is test3..........')
})

    test('Test4', async({page})=>{
    console.log('This is test4..........')
})
})

