import 'package:pointycastle/pointycastle.dart';
import 'package:collection/collection.dart';
import 'dart:typed_data';
import 'dart:convert';
import 'dart:math';

// main(){
//   Digest digest = new Digest("SHA-256");
//   String value = "Hello!";
//   Uint8List data = new Uint8List.fromList(utf8.encode(value));
//   Uint8List hash = digest.process(data);
//   print(base64.encode(hash));
//   print(base64.encode(data));
  
// }

// main() {
//   String password = 'password34534543534534534345';
//   var salt = createUint8ListFromString('saltT');
//   var pkcs = new KeyDerivator("SHA-1/HMAC/PBKDF2");
//   var parmas = new Pbkdf2Parameters(salt, 100, 16);
//   pkcs.init(parmas);
//   Uint8List key = pkcs.process(createUint8ListFromString(password));
//   display('Key value', key);

// }

// Uint8List createUint8ListFromString(String value) {
//   return new Uint8List.fromList(utf8.encode(value));
// }

// void display(String title, Uint8List value){
//   print(title);
//   print(value);
//   print(base64.encode(value));
//   print('');
// }


// AES
main(List<String> arguments) {
  final key = randomBytes(16);
  final params = new KeyParameter(key);

  BlockCipher cipher = new BlockCipher("AES");
  cipher.init(true, params);

  //Encrypt
  String plaintext = 'Hello World!!';
  Uint8List plain_data = createUint8ListFromString(plaintext.padRight(cipher.blockSize)); // PAD - NOT 1000% secure
  Uint8List encrypted_data = cipher.process(plain_data);

  //Decrypt
  cipher.reset();
  cipher.init(false, params);
  Uint8List decrypted_data = cipher.process(encrypted_data);

  displayUint8List('Plain text', plain_data);
  displayUint8List('Encrypted data', encrypted_data);
  displayUint8List('Decrypted data', decrypted_data);

  //Make sure they match
  Function eq = const ListEquality().equals;
  assert(eq(plain_data,decrypted_data));

  print(utf8.decode(decrypted_data).trim());

}

//From tutorial 2
Uint8List createUint8ListFromString(String value) => new Uint8List.fromList(utf8.encode(value));

//From tutorial 2
void displayUint8List(String title, Uint8List value) {
  print(title);
  print(value);
  print(base64.encode(value));
  print('');
}

//From Tutorial 3
Uint8List randomBytes(int length) {
  final rnd = new SecureRandom("AES/CTR/AUTO-SEED-PRNG");

  final key = new Uint8List(16);
  final keyParam = new KeyParameter(key);
  final params = new ParametersWithIV(keyParam, new Uint8List(16));

  rnd.seed(params);
  var random = new Random();
  for(int i = 0; i < random.nextInt(255); i++) {
    rnd.nextUint8();
  }

  var bytes = rnd.nextBytes(length);
  return bytes;
}