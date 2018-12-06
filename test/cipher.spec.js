describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLM" para "ABCDEF" con offset 33', () => {
      assert.equal(cipher.encode("ABCDEF", 33), "HIJKLM");
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEF" para "HIJKLM" con offset 33', () => {
      assert.equal(cipher.decode("HIJKLM", 33), "ABCDEF");
    });

  });
  
});
