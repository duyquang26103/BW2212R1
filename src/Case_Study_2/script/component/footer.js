class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="container">
        <div class="row pt-5">
            <div class="col-lg-3 col-md-3 col-sm-6">
                <h6 class="fw-bold">Về chúng tôi</h6>
                <p>Giới thiệu</p>
                <p>Điều khoản sử dụng</p>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
                <h6 class="fw-bold">Hỗ trợ khách hàng</h6>
                <p>Chính sách đổi / hoàn trả</p>
                <p>Chính sách bảo hành</p>
                <p>Chính sách bảo mật</p>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
                <h6 class="fw-bold">Phương thức thanh toán</h6>
                <p>COD</p>
                <p>ATM</p>
                <p>VISA/MASTERCARD</p>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
                <h6 class="fw-bold">Dịch vụ khách hàng</h6>
                <p><u>Mua hàng online: 08 77 74 7777</u></p>
                <p><u>Góp ý, khiếu nại: 0376 201 735</u></p>
            </div>
        </div>
        <div class="d-flex py-5">
            <img class="fontawesome pe-4" src="./lib/fontawesome/svgs/brands/facebook-f.svg" alt="facebook">
            <img class="fontawesome pe-4" src="./lib/fontawesome/svgs/brands/instagram.svg" alt="instagram">
            <img class="fontawesome pe-4" src="./lib/fontawesome/svgs/brands/youtube.svg" alt="youtube">
            <img class="fontawesome pe-4" src="./lib/fontawesome/svgs/brands/tiktok.svg" alt="tiktok">
        </div>
        <div class="d-flex justify-content-between">
            <p>© 2023, Polomanor. Do Shopify cung cấp</p>
            <img class="checked-logo" src="./img/logoSaleNoti.png" alt="">
        </div>
    </div>
        `;
    }
}

customElements.define('footer-component', Footer);