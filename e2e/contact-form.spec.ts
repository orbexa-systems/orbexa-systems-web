import { test, expect } from "@playwright/test";

test.describe("Contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/es");
    await page.locator("#contacto").scrollIntoViewIfNeeded();
  });

  test("happy path — muestra éxito al enviar datos válidos", async ({ page }) => {
    await page.route("/api/contact", (route) =>
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true }),
      })
    );

    await page.fill("#name", "Juan García");
    await page.fill("#email", "juan@empresa.com");
    await page.fill("#message", "Necesito un sistema de gestión para mi empresa.");
    await page.click('button[type="submit"]');

    await expect(page.getByText("¡Mensaje enviado!")).toBeVisible();
  });

  test("muestra error inline si el email es inválido", async ({ page }) => {
    await page.fill("#name", "Juan García");
    await page.fill("#email", "notanemail");
    await page.fill("#message", "Mensaje de prueba");
    await page.click('button[type="submit"]');

    await expect(page.getByText("Ingresa un correo electrónico válido.")).toBeVisible();
  });

  test("muestra error inline si el teléfono tiene menos de 10 dígitos", async ({ page }) => {
    await page.fill("#name", "Juan García");
    await page.fill("#email", "juan@empresa.com");
    await page.fill("#phone", "12345");
    await page.fill("#message", "Mensaje de prueba");
    await page.click('button[type="submit"]');

    await expect(page.getByText("Ingresa un teléfono válido (mínimo 10 dígitos).")).toBeVisible();
  });

  test("el error de campo desaparece al corregir el input", async ({ page }) => {
    await page.fill("#name", "Juan García");
    await page.fill("#email", "invalido");
    await page.fill("#message", "Mensaje de prueba");
    await page.click('button[type="submit"]');

    await expect(page.getByText("Ingresa un correo electrónico válido.")).toBeVisible();

    await page.fill("#email", "juan@empresa.com");
    await expect(page.getByText("Ingresa un correo electrónico válido.")).not.toBeVisible();
  });

  test("muestra error genérico si el API falla", async ({ page }) => {
    await page.route("/api/contact", (route) =>
      route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({ error: "Error al enviar. Intenta de nuevo." }),
      })
    );

    await page.fill("#name", "Juan García");
    await page.fill("#email", "juan@empresa.com");
    await page.fill("#message", "Mensaje de prueba");
    await page.click('button[type="submit"]');

    await expect(page.getByText("Error al enviar. Intenta de nuevo.")).toBeVisible();
  });
});
