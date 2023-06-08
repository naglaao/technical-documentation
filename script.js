let allCodeElem = document.querySelectorAll("code")

// add button in pre before all code
Array.from(allCodeElem).forEach(codeElem => {
    var copyBtn = document.createElement("button")
    copyBtn.className="copyBtn"
    copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i>`
    codeElem.prepend(copyBtn)

})

// add action to button
let allCopyBtns = document.querySelectorAll(".copyBtn")

Array.from(allCopyBtns).forEach((btn) => {
    btn.addEventListener("click", (e) => {
        navigator.clipboard.writeText(e.currentTarget.nextSibling.innerHTML)
        e.currentTarget.innerHTML = `<i class="fa-solid fa-check"></i>`
    })
})



