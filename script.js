let submit = document.getElementById("submit");
let resutl = document.getElementById("result");

submit.addEventListener("click", () => {
    let birth = new Date(document.getElementById("birth").value);
    let dateNow = new Date();

    if(birth.getTime()){
        let difference = dateNow.getTime() - birth.getTime();
        let newAge = new Date(difference);
        let x = Math.abs(newAge.getFullYear() - 1970)

        let inDays = (Math.floor(difference / (1000 * 3600 * 24)));
        result.style.display = "block";
        result.innerHTML = `Você tem <span>${x}</span> anos ou <span>${inDays}</span> dias de vida`;
    }
})