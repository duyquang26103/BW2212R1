class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="container-fluid">
        <div class="container-xl pt-4 pb-4">
            <ul class="nav d-flex justify-content-between pt-1">
                <li class="col-lg-5 col-sm-2 col-2">
                    <div
                        class="d-block navbar navbar-expand-lg navbar-light p-0 col-lg-12 col-md-2 col-sm-2 order-md-cus2 nav-proudcts">
                        <div class="container-fluid">
                            <button onclick="removeBackDrop()" class="navbar-toggler" type="button"
                                data-bs-toggle="collapse" data-bs-target="#navbarCenteredExample"
                                aria-controls="navbarCenteredExample" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasWithBackdrop"
                                    aria-controls="offcanvasWithBackdrop"></span>
                            </button>

                            <div class="offcanvas offcanvas-start" data-bs-scroll="true"
                                data-bs-backdrop="false" tabindex="-1" id="offcanvasWithBackdrop"
                                aria-labelledby="offcanvasWithBackdrop">
                                <div class="offcanvas-header">
                                    <button type="button" onclick="addBackDrop()" class="btn-close"
                                        data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <div class="collapse navbar-collapse justify-content-start"
                                        id="navbarCenteredExample">
                                        <ul class="navbar-nav mb-2 mb-lg-0">
                                            <li class="nav-item dropdown">
                                                <a class="nav-link" href="newProduct.html">
                                                    New in
                                                </a>

                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                                    role="button" data-mdb-toggle="dropdown"
                                                    aria-expanded="false">
                                                    Tất cả sản phẩm
                                                </a>
                                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><a class="dropdown-item" href="collections.html">Bộ sưu
                                                            tập</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="allProduct.html">Tất cả
                                                            sản
                                                            phẩm</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                                    role="button" data-mdb-toggle="dropdown"
                                                    aria-expanded="false">
                                                    Chính sách
                                                </a>
                                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><a class="dropdown-item" href="checkProduct.html">Chính
                                                            sách
                                                            kiểm
                                                            hàng</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">Chính sách đổi
                                                            / hoàn
                                                            trả</a></li>
                                                    <li><a class="dropdown-item" href="#">Chính sách bảo
                                                            hành</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">Chính sách bảo
                                                            mật</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">Điều khoản sử
                                                            dụng
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li
                    class="col-lg-4 col-sm-7 col-8 d-flex justify-content-lg-start justify-content-center align-items-center">
                    <h1 class="header-logo">
                        <a href="index.html">
                            <img class="header-logo-img h-50" src="./img/Polomanor_logo.png" alt="logo">
                        </a>
                    </h1>
                </li>
                <li class="col-lg-3 col-sm-3 col-2 d-flex justify-content-end align-items-center">
                    <div class="search">
                        <a onclick="removeBackDrop()" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasSearch" aria-controls="offcanvasRight">
                            <img class="fontawesome pe-3" src="./lib/fontawesome/svgs/solid/search.svg"
                                alt="search">
                        </a>

                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasSearch"
                            aria-labelledby="offcanvasRightSearchLabel">
                            <div class="offcanvas-header">
                                <input class="px-3 form-control border-top-0 border-end-0 border-start-0"
                                    placeholder="Tìm kiếm cho..." id="offcanvasRightSearchLabel"></input>
                                <button type="button" onclick="addBackDrop()" class="btn-close text-reset"
                                    data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                        </div>
                    </div>

                    <div class="user">
                        <a class="d-none d-lg-block" href="./login.html">
                            <img class="fontawesome pe-3" src="./lib/fontawesome/svgs/regular/user.svg"
                                alt="user">
                        </a>
                    </div>

                    <div class="cart">
                        <a onclick="removeBackDrop()" href="#" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <img class="fontawesome pe-3" src="./lib/fontawesome/svgs/solid/cart-plus.svg"
                                alt="search">
                        </a>

                        <div class="container-fluid offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                            aria-labelledby="offcanvasRightLabel">
                            <div class="row">
                                <div class="offcanvas-header">
                                    <h5 class="pe-2" id="offcanvasRightLabel">Giỏ Hàng <span
                                            class="badge rounded-circle bg-black p-1">
                                            1
                                        </span></h5>
                                    <button type="button" class="btn-close text-reset" onclick="addBackDrop()"
                                        data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                            </div>

                            <div class="offcanvas-body position-relative">
                                <div class="row">
                                    <div class="col-3">
                                        <img class="img-responsive card-img-top"
                                            src="./img/Polomanor_ao-polo_Agati.png" alt="polo">
                                    </div>
                                    <div class="col-7">
                                        <div>Áo Polo Nam Jay vải CMC phom Regular Fit</div>
                                        <div>320.000₫</div>
                                        <div>M</div>
                                    </div>
                                    <div class="col-2">
                                        <button class="btn bg-light border-dark">1</button>
                                        <div><u>Xoá</u></div>
                                    </div>
                                </div>

                                <div class="d-flex justify-content-between">
                                    <div class="fw-bold">Bạn có thể thích:</div>
                                    <div class="scroll-btn">
                                        <img class="fontawesome"
                                            src="./lib/fontawesome/svgs/regular/arrow-alt-circle-left.svg"
                                            alt="left"><img class="fontawesome"
                                            src="./lib/fontawesome/svgs/regular/arrow-alt-circle-right.svg"
                                            alt="right">
                                    </div>
                                </div>

                                <div class="d-flex flex-nowrap mt-4">
                                    <div class="row">
                                        <div class="col-3">
                                            <img class="img-responsive card-img-top"
                                                src="./img/Polomanor_ao-polo_Arlo.png" alt="polo">
                                        </div>

                                        <div class="content col-5">
                                            <div class="">Áo Polo Nam Jay vải CMC phom Regular Fit</div>
                                            <div>320.000₫</div>
                                        </div>
                                        <div class="col-4 d-flex align-items-center">
                                            <button class="btn rounded-pill bg-secondary-subtle">+ Thêm</button>
                                        </div>

                                    </div>
                                </div>

                                <div class="row position-absolute bottom-0">
                                    <hr>
                                    <div class="d-flex justify-content-between">
                                        <div class="fw-bold">Tổng cộng</div>
                                        <div>320.000₫</div>
                                    </div>
                                    <div class="my-2">Phí vận chuyển (nếu có) sẽ được tính toán trong trang
                                        thanh
                                        toán.</div>
                                    <div><u>Ghi chú đơn hàng</u></div>
                                    <div class="d-flex justify-content-around my-3">
                                        <button class="btn btn-success rounded-pill px-3">Xem giỏ hàng</button>
                                        <button class="btn btn-secondary rounded-pill px-4">Thanh toán</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </li>
            </ul>
        </div>
    </div>
        `;
    }
}

customElements.define('header-component', Header);