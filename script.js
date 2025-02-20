let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "？你认真的吗…", 
    "要不再想想？", 
    "不许选这个！ ", 
    "我会很伤心…", 
    "不行:("
];

// 获取当前 URL 的 hash 部分（#user1，#user2）
const hash = window.location.hash.substring(1);  // 去掉 # 符号
console.log(hash);
if (hash == 'bib') mainImage.src = "images2/heart.png";
else if (hash === "luozhixue") mainImage.src = "images1/0.png";
else mainImage.src = "images/heart.png";
// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }
    
    // 图片变化（前 5 次变化）
    if (clickCount === 1) {
        if (hash === 'bib') mainImage.src = "images2/shocked.png";
        else if (hash === "luozhixue") mainImage.src = "images1/2.png";
        else mainImage.src = "images/shocked.png";
    } 
    if (clickCount === 2) {
        if (hash === 'bib') mainImage.src = "images2/think.png";
        else if (hash === "luozhixue") mainImage.src = "images1/3.png";
        else mainImage.src = "images/think.png";
    } 
    if (clickCount === 3) {
        if (hash === 'bib') mainImage.src = "images2/angry.png";
        else if (hash === "luozhixue") mainImage.src = "images1/4.png";
        else mainImage.src = "images/angry.png";
    }
    if (clickCount === 4) {
        if (hash === 'bib') mainImage.src = "images2/crying.png";
        else if (hash === "luozhixue") mainImage.src = "images1/5.png";
        else mainImage.src = "images/crying.png";
    } 
    if (clickCount >= 5) {
        if (hash === 'bib') mainImage.src = "images2/crying.png";
        else if (hash === "luozhixue") mainImage.src = "images1/5.png";
        else mainImage.src = "images/crying.png";
    } 
});

if (hash === 'bib')  imgSrc = "images2/hug.png"
else if (hash === 'luozhixue')  imgSrc = "images1/6.png"
else imgSrc = "images/hug.png"
   
// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!喜欢你!! ( >᎑<)♡︎ᐝ</h1>
            <img src=${imgSrc} alt="拥抱" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});
