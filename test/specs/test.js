describe('debug_test', () => {
    it('debug_test', () => {
      browser.url("https://google.com");
      browser.pause(3000);
      browser.$("//*[@name='q']").setValue("Experitest");
    });
  });
