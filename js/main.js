/* Start OTP Function */
/* Custom Input Type Number MaxLength */
function customMaxLength(input) {
  if (input.value.length > 1) input.value = input.value.slice(0, 1);
}

(function OTP() {
  const inputs = document.getElementsByTagName("input");
  // console.log(inputs)
  for (let i = 0; i < inputs.length; i++) {
    /* foucs first input */
    if (i === 0) inputs[0].focus();

    /* add keydown Event For All Inputs*/
    inputs[i].addEventListener("keydown", function (e) {
      // console.log(e.keyCode);

      if (e.keyCode > 47 && e.keyCode < 58) {
        /* write Value In Inputs */
        inputs[i].value = e.key;
        /* Foucs Next Input */
        if (i !== inputs.length - 1) inputs[i + 1].focus();
        e.preventDefault();
      } else if (e.keyCode > 95 && e.keyCode < 105) {
        inputs[i].value = e.key;
        if (i !== inputs.length - 1) inputs[i + 1].focus();
        e.preventDefault();
      }
      /* Remove Value From Inputs */
      if (e.key === "Backspace") {
        inputs[i].value = "";
        /* Focus Prev Input */
        if (i !== 0) inputs[i - 1].focus();
      }
    });
  }
})();
/* End OTP Function */

/* Start Expanded Nav btn */
const navExpandedBtn = document.getElementById("nav-expanded-btn");
let navExpandedIcon = document.getElementById("nav-expanded-btn").children[0];
const navPages = document.getElementById("nav-pages");
const allCategoriesHeader = document.getElementById("allCategoriesHeader");
const expandAllCategoriesHeader = document.getElementById(
  "expand-allCategories-header"
);

navExpandedBtn?.addEventListener("click", () => {
  navPages.classList.toggle("opacity-0");
  allCategoriesHeader.classList.toggle("bg-transparent");
  expandAllCategoriesHeader.classList.toggle("start-0");
  navExpandedBtn.getAttribute("aria-expanded") === "true"
    ? (navExpandedIcon.attributes.src.value = "../imgs/close-menu.svg")
    : (navExpandedIcon.attributes.src.value = "../imgs/hamburger.svg");
});
/* End Expanded Nav btn */

/* Strat Cart */
const cart = document.getElementById("cart");
const cartBtn = document.getElementById("cart-btn");
cartBtn?.addEventListener("click", () => {
  cart.classList.toggle("cart");
});
/* End Cart */

/* Strat Filter Price */
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 50;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});
/* End Filter Price */

/* Start Check Out Stepper */
const checkNextBtn = document.getElementById("checkNextBtn");
const checkBackBtn = document.getElementById("checkBackBtn");
const personalInfo = document.getElementById("personalInfo");
const orderReview = document.getElementById("orderReview");
const placeOrderBtn = document.getElementById("placeOrderBtn");
const voucherBtn = document.getElementById("voucherBtn");
const placeOrder = document.getElementById("placeOrder");
const cartBackBtn = document.getElementById("cartBackBtn");

checkNextBtn?.addEventListener("click", () => {
  personalInfo.classList.add("d-none");
  orderReview.classList.toggle("d-none");
  checkNextBtn.classList.add("d-none");
  checkBackBtn.classList.add("d-none");
  placeOrderBtn.classList.toggle("d-none");
  voucherBtn.classList.toggle("d-none");
});

const orderToggleFunction = () => {
  orderReview.classList.toggle("d-none");
  placeOrder.classList.toggle("d-none");
  placeOrderBtn.classList.toggle("d-none");
  voucherBtn.classList.toggle("d-none");
};

placeOrderBtn?.addEventListener("click", () => {
  orderToggleFunction();
});
cartBackBtn?.addEventListener("click", () => {
  orderToggleFunction();
});

/* End Check Out Stepper */

/* Start Input File */
function readUrl(input) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = (e) => {
      let imgData = e.target.result;
      let imgName = input.files[0].name;
      document.getElementById("dragDrop").classList.add("d-none");
      input.setAttribute("data-title", imgName);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
/* End Input File */

/* Start Profile Settings */
/* Security Settings */
const myAccount = document.getElementById("myAccount");
const securitySettings = document.getElementById("securitySettings");
const securitySettingsBtn = document.getElementById("securitySettingsBtn");
const securitySettingsEditSaveBtn = document.getElementById(
  "securitySettingsEditSaveBtn"
);

/* Account Toggle */
const myAccountEdit = document.getElementById("myAccountEdit");
const accoutEditBtn = document.getElementById("accoutEditBtn");
const accountEditSaveBtn = document.getElementById("accountEditSaveBtn");
const backToAccount = document.getElementById("backToAccount");

const accountToggleFunction = () => {
  myAccount.classList.toggle("d-none");
  securitySettings.classList.toggle("d-none");
};
const accountEditToggleFunction = () => {
  myAccount.classList.toggle("d-none");
  myAccountEdit.classList.toggle("d-none");
};
securitySettingsBtn?.addEventListener("click", () => {
  accountToggleFunction();
});
securitySettingsEditSaveBtn?.addEventListener("click", () => {
  accountToggleFunction();
});
accoutEditBtn?.addEventListener("click", () => {
  accountEditToggleFunction();
});
accountEditSaveBtn?.addEventListener("click", () => {
  accountEditToggleFunction();
});
backToAccount?.addEventListener("click", () => {
  accountToggleFunction();
});

/* Wish List Grid */
const verticalGridBtn = document.getElementById("verticalGridBtn");
const horizontalGridBtn = document.getElementById("horizontalGridBtn");
const verticalGrid = document.getElementById("verticalGrid");
const horizontalGrid = document.getElementById("horizontalGrid");

const gridToggleFunction = () => {
  verticalGrid.classList.toggle("d-none");
  horizontalGrid.classList.toggle("d-none");
  verticalGridBtn.classList.toggle("grid-active");
  horizontalGridBtn.classList.toggle("grid-active");
};

verticalGridBtn?.addEventListener("click", () => {
  gridToggleFunction();
});
horizontalGridBtn?.addEventListener("click", () => {
  gridToggleFunction();
});
/* End Profile Settings */
