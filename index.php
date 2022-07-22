<!doctype html>
<html dir="rtl" lang="fa">
<head>
    <title>
        &#x202E;
        سالن زیبایی شادان
    </title>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php include('links.php') ?>

</head>
<body>

<?php include('nav.php') ?>
<div class="wave">
</div>
<section id="join">
    <div class="img">
        <img src="assets/img/join.jpg" alt="Join">
    </div>
    <div class="form">
        <form action="">
            <h2>
                پیوستن به خانواده شادان بیوتی
            </h2>
            <p>
                برای پیوستن به خانواده شادان بیوتی،اطلاعاتتان را وارد کنید و بعد از ان دریافت کد تخفیف،از مزایای شادان
                بودن لذت ببرید
            </p>
            <label>
                <input type="text" placeholder="نام و نام خانوادگی"/>
            </label>
            <label>
                <input type="number" placeholder="شماره موبایل"/>
            </label>
            <label for="input1"></label><input type="text" id="input1" placeholder="تاریخ تولد"/>
            <span id="span1"></span>
        </form>
    </div>
</section>
<section id="services">
    <div id="smarttab">

        <ul class="nav">
            <li>
                <a class="nav-link" href="#tab-1">
                    Tab 1
                </a>
            </li>
            <li>
                <a class="nav-link" href="#tab-2">
                    Tab 2
                </a>
            </li>
            <li>
                <a class="nav-link" href="#tab-3">
                    Tab 3
                </a>
            </li>
            <li>
                <a class="nav-link" href="#tab-4">
                    Tab 4
                </a>
            </li>
        </ul>

        <div class="tab-content">
            <div id="tab-1" class="tab-pane" role="tabpanel">
                <div id="easy-filter-wrap">
                    <button type="button "data-easyfilter="*"> All </button>
                    <button type="button "data-easyfilter="item01"> Item 01 </button>
                    <button type="button "data-easyfilter="item02"> Item 02 </button>
                    <button type="button "data-easyfilter="item03"> Item 03 </button>
                    <br /> <br />
                    <div data-easyitem="item01"> Item 01 </div>
                    <div data-easyitem="item02"> Item 02 </div>
                    <div data-easyitem="item03"> Item 03 </div>
                </div>

            </div>
            <div id="tab-2" class="tab-pane" role="tabpanel">
                Tab content 2
            </div>
            <div id="tab-3" class="tab-pane" role="tabpanel">
                Tab content 3
            </div>
            <div id="tab-4" class="tab-pane" role="tabpanel">
                Tab content 4
            </div>
        </div>
    </div>
</section>
</body>
</html>