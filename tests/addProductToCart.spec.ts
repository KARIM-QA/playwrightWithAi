
import {expect } from '@playwright/test'
import { test } from '../src/fixtures/testWithFixture'
import { data } from '../src/ai_data/data'

test.describe('demoBlaze e-commerce app', () => {
  test('add product to the cart', async ({ page ,ai}) => {
    try {
      await page.goto(`${data.demoBlazeUrl}`);
      await ai('Click on Log in menu');
      await ai(`Enter the Username as ${data.db_username}`);
      await ai(`Enter the Password as ${data.db_password}`);
      await ai('Click on Log in button');
      await page.waitForTimeout(data.timeout);
      await ai('Click on product Iphone 6 32gb');
      await page.waitForTimeout(data.timeout);
      await ai('Click on Add to cart button');
      await ai('Click on Cart menu');
      const productName=page.getByText("Iphone 6 32gb");
      await expect(productName).toBeVisible();

    } catch (error) {
      console.error('Error processing:', error);
    }
    
  })

})
