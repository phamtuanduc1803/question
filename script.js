function main() {
    let listQuestion = ["Em được quyền chọn lại :))", "Em chắc chưa ????", "Suy nghĩ kỹ vào !!!", "Haiz, không còn cách nào khác rồi"]
    let i = 0;
    let yesButton = document.getElementById("yes-button");
    yesButton.onclick = () => {
        window.location.replace('./yes.html');
    }
    let noButton = document.getElementById("no-button");
    noButton.onclick = () => {
        if (i === listQuestion.length) {
            noButton.remove()
        } else {
            noButton.innerText = listQuestion[i++];
        }
        yesButton.style.height = yesButton.offsetHeight * 2 + 'px';
        yesButton.style.width = yesButton.offsetWidth * 2 + 'px';
        yesButton.style.fontSize = (i + 2) * 100 + '%';
    }
}

main()