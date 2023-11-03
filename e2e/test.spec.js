const { default: test } = require("playwright/test")

test("click on the word firefox", async ({page}) => {
    await page.goto('/')
    await page.waitForTimeout(5_000)
    await page.getByText('firefox').click({ timeout: 2_000})
})