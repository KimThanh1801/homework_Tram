

const imagesCount = 5; 
const sliderTrack = document.getElementById('sliderTrack');
let currentIndex = 0;

function moveSlider() {
    currentIndex = (currentIndex + 1) % imagesCount;
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}
setInterval(moveSlider, 1000);



const dang_ki = document.getElementById("dang_ki");
const hien_thi_form = document.getElementById("container1");
const overlay = document.getElementById("overlay");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const passworld = document.getElementById("mat_khau");
const confirm = document.getElementById("xac_nhan");
const save = document.getElementById("save");
const closeForm = document.getElementById("closeForm");

// Function to show the form
dang_ki.onclick = function () {
    hien_thi_form.style.display = "block";
};

// Close the form when clicking the "X" button
closeForm.onclick = function () {
    hien_thi_form.style.display = "none";
    overlay.style.display = "none";
};

// Handle form submission
save.onclick = function () {
    const fullName = name.value.trim();
    const emails = email.value.trim();
    const phones = phone.value.trim();
    const passworlds = passworld.value;
    const confirms = confirm.value;

    if (!fullName || !emails || !phones || !passworlds || !confirms) {
        alert("Vui lòng điền đầy đủ thông tin vào tất cả các trường!");
        return;
    }
    if (passworlds !== confirms) {
        alert("Mật khẩu không trùng nhau vui lòng nhập lại!");
        return;
    }

    const bien_luu_local = {
        fullName: fullName,
        emails: emails,
        phones: phones,
        passworlds: passworlds
    };
    localStorage.setItem("bien_luu_local", JSON.stringify(bien_luu_local));

    alert("Bạn đã lưu dữ liệu thành công!");

    
    hien_thi_form.style.display = "none";
    overlay.style.display = "none";
};
