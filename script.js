const inputpassword = document.getElementById("password")
const btnshowpassword = document.getElementById("show-password")
const btnhidepassword = document.getElementById("hide-password")

btnshowpassword?.addEventListener("click", () => {
    inputpassword.setAttribute("type", "text");
    btnshowpassword.style.display = "none";
    btnhidepassword.style.display = "block";
})

btnhidepassword?.addEventListener("click", () => {
    inputpassword.setAttribute("type", "password");
    btnhidepassword.style.display("none");
    btnshowpassword.style.display("block");
})


//Dashboard//
const toggleMenuBotton = document.querySelector('.toggle-menu');
const menuList = document.querySelector(".menu-dashboard ul");
const icon = toggleMenuBotton;

let isNotClicked = false;

/* acima foi declarado as variáveis*/

toggleMenuBotton?.addEventListener("click", () => {
    if(isNotClicked) {
        menuList.style.display = "none";
        icon.style.transform = "rotate(0deg)";
    } else {
        menuList.style.display = "block";
        icon.style.transform = "rotate(90deg)";
    }
    isNotClicked = !isNotClicked;
})

        //aqui vou referenciar os modules//

const itemModules = document.querySelectorAll(".menu-module ul li");

itemModules.forEach((item) => {
    item.addEventListener("click", () => {
        if(!item.classList.contains("item-module-active")){
            itemModules.forEach((el) => {
                el.classList.remove("item-module-active");
            });
            item.classList.add("item-module-active");
        }
    })
})

        //Função para reutilizar o expense passando para o incomes//

        function setupModal(btnOpenSelector, modalSelector, btnCloseSelector, btnCancelSelector) {
            const openBtns = document.querySelectorAll(btnOpenSelector);
            const modalElement = document.querySelector(modalSelector);
            const closeBtn = document.querySelector(btnCloseSelector);
            const cancelBtn = btnCancelSelector ? document.querySelector(btnCancelSelector) : null;
        
            openBtns.forEach((openBtn) => {
                openBtn.addEventListener("click", () => {
                    modalElement.style.display = "flex";
                });
            });
        
            closeBtn?.addEventListener("click", () => {
                modalElement.style.display = "none";
            });
        
            cancelBtn?.addEventListener("click", () => {
                modalElement.style.display = "none";
            });
        }
        

        //Aqui começa o expenses que é o campo para adicionar despesas e fechar o modal
        // Expenses//

// Expenses
setupModal("#add-new-expense", ".modal-add-expenses", ".close-modal-add-expenses");
setupModal(".btn-delete-expenses", ".modal-delete-expenses", ".close-modal-delete-expenses", ".cancel-delete-expenses");

// Incomes
setupModal("#add-new-incomes", ".modal-add-incomes", ".close-modal-add-incomes");
setupModal(".btn-delete-incomes", ".modal-delete-incomes", ".close-modal-delete-incomes", ".cancel-delete-incomes");

// User

setupModal("#add-new-user", ".modal-add-user", ".close-modal-add-user");
setupModal(".btn-delete-user", ".modal-delete-user", ".close-modal-delete-user", ".cancel-delete-user");