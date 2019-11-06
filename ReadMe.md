# Pig Latin
#### Practice of BDD process for Epicodus, 11/4/2019
#### By _David Boedigheimer_

### Description
This website will translate any sentence into pig latin for the user. This website is created with _HTML, CSS, JavaScript, Bootstrap, jQuery,_ and _GitHub._

### BDD process
* The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
  * **Input Example**: 3
  * **Output Example**: 3
* The program adds "way" to single-letter words beginning with a vowel.
  * **Input Example**: i
  * **Output Example**: iway
* The program adds "way" to the end of words beginning with a vowel.
  * **Input Example**: Apple
  * **Output Example**: Appleway
* The program adds "ay" to words with one or more starting consonants to the end of the word.
  * **Input Example**: North
  * **Output Example**: orthNay
* The program will treat the letter 'y' as a consonant, when the word is beginning with the letter 'y'.
  * **Input Example**: You
  * **Output Example**: ouYay
* The programs will move 'qu' if 'qu' is the first two consonants, except with words like 'squeal' since 'qu' don't come first.
  * **Input Example**: Quite
  * **Output Example**: iteQuay

### Setup/Installation Requirements
* Copy the repository.
* Open the HTML file in a browser of your choosing.
* Enter your sentence.
* Hit Translate and enjoy!

### Known Bugs
There are no known bugs in this website.

### Contact/Support Information
If you have any concerns or questions, you may contact me at stealth259@gmail.com

#### License
This website is licensed under the MIT license.

Copyright (c) 2019 **_David Boedigheimer_**
