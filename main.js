/**
 * 課題1: h1要素でid属性値が `title` のテキスト内容を変更する
 *   - textContentを使う
 *     - 「JSで変更した後のタイトル」というテキストをセットする
 */
const elements1 = document.getElementById('title');
console.log(elements1.textContent);
elements1.textContent = 'JSで変更した後のタイトル';
console.log(elements1.textContent);


/**
 * 課題2: p要素でid属性値が `description` のテキスト内容を変更する
 *   - innerHTMLを使う
 *     - 「JSで変更した後の説明文」というテキストをセットする
 *   - strong要素を使って「説明文」を強調する
 */
const elements2 = document.getElementById('description');
console.log(elements2.innerHTML);
elements2.innerHTML = 'JSで変更した後の<strong>説明文</strong>';
console.log(elements2.innerHTML);



 /**
  * 課題3: img要素でid属性値が 'profile' のsrc属性値を変更する
  *   - セットする画像は以下のいずれかで対応する
  *     - 自分で用意する
  *     - 「https://www.pakutaso.com/shared/img/thumb/TOMnemuiDSC01757_TP_V1.jpg」を使う
  */
 const imgElement1 = document.getElementById('profile');
 imgElement1.setAttribute('src', 'https://www.pakutaso.com/shared/img/thumb/TOMnemuiDSC01757_TP_V1.jpg');
 console.log(imgElement1.setAttribute);


/**
 * 課題4: 課題1で作成したh1要素のDOMにクラス属性値をセットする
 *   - セットするクラス属性値はstyle.cssの中身を参考にする
 *     - 背景色がh1要素の背景色が黄色になればOKです
 */
const classElement1 = document.getElementById('title');
classElement1.className = 'bg-yellow';
console.log(classElement1.className);

