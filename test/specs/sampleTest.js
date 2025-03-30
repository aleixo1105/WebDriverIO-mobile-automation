// test/specs/sampleTest.js

describe('Teste de Aplicativo Android no Sauce Labs', () => {
    it('Deve abrir a tela inicial corretamente', async () => {
      const el = await $('~elementIdentifier'); // Selecione um elemento na tela inicial
      await el.waitForExist({ timeout: 5000 });
      await el.click();
      // Adicione mais interações aqui para o seu teste
    });
  });
  