var Marital = prompt('سلام خیلی خوش اومدی اول از هر چیزی اعلام کن ببینم مجردی یا متاهل 😉 .(با نوشتن متاهل و مجرد)');
if (Marital == 'مجرد') {
    var Sex = prompt('خب خیلی ام عالی حالا جنسیتت رو هم وارد کن.(آقا یا خانم)');
    if (Sex == 'خانم') {
        var FAge = prompt('خب چقدرم عالی حالا بگو ببینم چند سالته؟ 😊😋');
        if (Number(FAge) <= 30) {
            var PhoneNumber1 = prompt('جدیییییییییییییی؟؟؟!!!! اصلا بهت نمیاد، تازه من ندید میگم که بهت نمیاد ، حیف تو نیست مجردی!؟  شمارتو بزن برای مشاوره رایگان! تا ببینم چیکار میتونم کنم برات');
            if (PhoneNumber1 == '') {
                var PhoneNumber1 = prompt('چرا شمارتو نزدی؟؟؟؟؟ من مشاوره ام شمارتو بزن یکم بهت مشاوره بدم حیفی تو این سن');
                if (PhoneNumber1 == '') {
                    alert('نه، مثل اینکه تو نمیخوای موفق باشی پس همینجوری مجرد بمون تا بعدا بیان گولت بزن دست به ... بزنن . والااااااا');
                }
                else {
                    alert('آفرین این شد ی چیزی ، ده دیقه دیگه باهات تماس میگیرم دردسترس باشیااااااا')
                }
            }
            else {
                alert('ده دیقه دیگه باهات تماس میگیرم در دسترس باشیاااا😗');
            }
        }
    }
    else if (Number(FAge) > 30) {
        var FMarital = prompt('بیخیاللللللللللللل تا الان مجرد موندی؟ یا مجرد شدی؟(بودم یا شدم رو تایپ کن)');
        if (FMarital == 'بودم') {
            var PhoneNumber1 = prompt('ای جونم شمارتو بده تا دلیلشو قشنگ برام بگی دوس دارم صداتو بشنوم 😉😎');
            if (PhoneNumber1 == '') {
                var PhoneNumber1 = prompt('مارو نپیچون دیگه شماره رو بزن بعد برو😊');
                if (PhoneNumber1 == '') {
                    alert('مثل اینکه تو شماره بده نیستی برای همینه تا این سن مجرد موندی دیگه . 😑😒');
                }
                else {
                    alert('مرسی بشی ده دیقه دیگه بهت زنگ میزنم در دسترس باشیاااااااااا😙')
                }
            }
            else {
                alert('ده دیقه دیگه باهات تماس میگیرم در دسترس باشیاااا😗');
            }

        }
        else if (FMarital == 'شدم') {
            var PhoneNumber2 = prompt('چه بهتر، چرا خودتونو محدود کنید؟ شما باید آزاد باشین و هر کاری دوس دارین انجام بدین. حالا شمارتو بزار بیشتر باهات حرف بزنم و ببینم وضعیت روحیت چطوره.')
            if (PhoneNumber2 == '') {
                var PhoneNumber2 = prompt('من روانپزشکم و میخوام ببینم در حالت کلی در چه وضعیتی هستی اگه دوس داشتی بزار شمارتو اگر هم نه نزار 😔 چی بگم والا')
                if (PhoneNumber2 == '') {
                    alert('انشالا که همیشه موفق باشین')
                }
                else {
                    alert(' خیلی زود باهات تماس میگیرم در دسترس باش. 😉')
                }
            }
            else {
                alert('   خیلی زود باهات تماس میگیرم در دسترس باش. عزیزم 😉')

            }
        }
    }
    else if (Sex == 'آقا' || Sex == 'اقا') {
        var MAge = prompt('خب چقدرم عالی حالا بگو ببینم چند سالته؟');
        if (Number(MAge)<=18){
            alert('توروووووووو خدا؟؟؟؟؟ خب بایدم مجرد باشی برو فکر متاهل بودنو اینارو نکن برو بازیتو کن درستو بخون')
        }
        else if(Number(MAge)>=29 && Number(MAge)<=35 ){
            alert('واقعا؟ حالا اینکه متاهل نشدی مشکلی نیست ولی سعی کن سینگل نباشی لذت زندگی به همین چیزاشه هاااااا از ما گفتن، برو بگرد ی کیس خوبی یا ی شوگر مامی حرفه ای بزن که تباه شده زندگیت تا الان')
        }
        else if (Number(MAge) >= 35) {
            alert('اصلا میدونستی که' + MAge + ' ' + 'ساله شدی؟؟؟؟ بجنب داری پیر میشی، پیر هم بشی خشک میشیااااا');
        }
        else {
            alert('خب توی این ' + MAge + ' ' + 'سن مشکلی نیست که مجردی فقط بیشتر بگرد پیداش میکنی ');
        }
    }
}
else if (Marital == 'متاهل') {
    var Sex2 = prompt('جدی میگی؟ خانم هستی یا آقا(بنویس خانم یا آقا؟');
    if (Sex2 == 'خانم') {
        var Age = prompt('چه جالب چند سالته؟');
        if ((Number(Age)) <= 23) {
            var MAge2 = prompt('جدی میگی 😲!!؟؟ همسرت چند سالشه؟');
            if (Number(MAge2) <= 33) {
                alert('جدی؟؟؟ خودت' + Age + 'سالته همسرتم' + MAge2 + 'سالشه؟؟؟ ایشالا که خوشبخت بشین خیلی هم خوبه توی سن پایین ازدواج کردین');
            }
            else if (Number(MAge2) >= 35 && (Number(MAge2) <= 44)) {
                alert('جدی؟؟!! خودت ' + Age + 'سالته، همسترم ' + MAge2 + ' سالشه، تفاوت سنیتون خوبه ، ایشالا که خوش بخت بشین');
            }
            else if (Number(MAge2) >= 45) {
                alert('جدی؟؟!! خودت ' + Age + 'سالته، همسرتم ' + MAge2 + ' سالشه ، ببخشیدا شوگر زدی؟؟؟😂');
            }
        }
        else if (Number(Age) >= 24 && Number(Age) <= 35) {
            var MAge2 = prompt('جدی؟ به موقع ازدواج کردی پس ، همسرت چند سالشه؟');
            if (Number(MAge2) >= 24 && Number(MAge2) <= 35) {
                alert('جدی؟؟؟ خودت' + Age + 'سالته همسرتم' + MAge2 + 'سالشه؟؟؟ ایشالا که خوشبخت بشین خیلی هم خوبه توی خوب سنی ازدواج کردین');
            }
            else if (Number(MAge2) > 35 && (Number(MAge2) <= 59)) {
                alert('جدی؟؟!! خودت ' + Age + 'سالته، همسترم ' + MAge2 + ' سالشه، تفاوت سنیتون خوبه ، ایشالا که خوش بخت بشین');
            }
            else if (Number(MAge2) >= 60) {
                alert('جدی؟؟!! خودت ' + Age + 'سالته، همسرتم ' + MAge2 + ' سالشه ، ببخشیدا شوگر زدی؟؟؟😂');
            }
        }
        else if (Number(Age) > 35 && Number(Age) <= 50) {
            var MAge2 = prompt('جدی؟ به موقع ازدواج کردی پس ، همسرت چند سالشه؟');
            if (Number(MAge2) > 35 && Number(MAge2) <= 50) {
                var Child = prompt('جدی؟؟؟ خودت' + Age + 'سالته همسرتم' + MAge2 + 'سالشه؟؟؟ ایشالا که خوشبخت بشین معلومه خیلی ساله باهم ازدواج کردین بچه هم دارین؟');
                alert(Child + 'تا بچه دارین! خدانگهداره براتون، سایه شماهم همیشه بالا سرشون باشه');
                if (Child == ' ') {
                    alert('پس زندگی آرومی دارین😂😁')
                }
            }
            else if (Number(MAge2) >= 51) {
                alert('خیلی هن عالی خودت ' + Age + 'سالته ،شوهرتم' + MAge2 + 'به پای هم پیر شین');
            }
        }
        else if (Number(Age) >= 51) {
            var MAge2 = prompt('مادرجان همسرتون چند سالشه؟');
            if (Number(MAge2) >= 51) {
                alert('شما ' + Age + 'سالتونه و همسرتونم' + MAge2 + 'سالشه، باقی عمرتونو خوشو خرم کنار هم باشین');
            }
        }
    }
    else if (Sex2 == 'آقا' || Sex2 == 'اقا') {
        var Age = prompt('خب چند سالته؟')
        if ((Number(Age)) <= 23) {
            var FAge2 = prompt('جدی!!؟؟ زن گرفتی توی این سن؟ همسرت چند سالشه؟');
            if (Number(FAge2) <= 33) {
                alert('جدی؟؟؟ خودت' + Age + 'سالته همسرتم' + FAge2 + 'سالشه؟؟؟ ایشالا که خوشبخت بشین خیلی هم خوبه توی سن پایین ازدواج کردین');
            }
            else if (Number(FAge2) >= 45) {
                alert('جدی؟؟!! خودت ' + Age + 'سالته، همسرتم ' + FAge2 + ' سالشه ، ببخشیدا شوگرمامی زدیاااا؟؟؟😂');
            }
            else {
                alert('جدی؟؟!! خودت ' + Age + 'سالته، همسترم ' + FAge2 + ' سالشه ، ایشالا که خوش بخت بشین');
            }
            
        }
        else if (Number(Age) >= 24 && Number(Age) <= 35) {
            var FAge2 = prompt('جدی؟ به موقع ازدواج کردی پس ، همسرت چند سالشه؟');
            if (Number(FAge2) >= 24 && Number(FAge2) <= 35) {
                alert('جدی؟؟؟ خودت' + Age + 'سالته همسرتم' + FAge2 + 'سالشه؟؟؟ ایشالا که خوشبخت بشین خیلی هم خوبه توی خوب سنی ازدواج کردین');
            }
            else if (Number(FAge2) > 35 && (Number(FAge2) <= 59)) {
                alert('جدی؟؟!! خودت ' + Age + 'سالته، همسترم ' + FAge2 + ' سالشه، تفاوت سنیتون خوبه ، ایشالا که خوش بخت بشین');
            }
            else if (Number(FAge2) >= 60) {
                alert('جدی؟؟!! خودت ' + Age + 'سالته، همسرتم ' + FAge2 + ' سالشه ، ببخشیدا شوگرمامی زدیاااا؟؟؟😂');
            }
        }
        else if (Number(Age) > 35 && Number(Age) <= 50) {
            var FAge2 = prompt('جدی؟ به موقع ازدواج کردی پس ، همسرت چند سالشه؟');
            if (Number(FAge2) > 35 && Number(FAge2) <= 50) {
                var Child = prompt('جدی؟؟؟ خودت' + Age + 'سالته همسرتم' + FAge2 + 'سالشه؟؟؟ ایشالا که خوشبخت بشین معلومه خیلی ساله باهم ازدواج کردین بچه هم دارین؟');
                alert(Child + 'تا بچه دارین! خدانگهداره براتون، سایه شماهم همیشه بالا سرشون باشه');
                if (Child == ' ') {
                    alert('پس زندگی آرومی دارین😂😁')
                }
            }
            else if (Number(FAge2) >= 51) {
                alert('خیلی هن عالی خودت ' + Age + 'سالته خانومتم' + FAge2 + 'به پای هم پیر شین');
            }
        }
        else if (Number(Age) >= 51) {
            var FAge2 = prompt('پدرجان همسرتون چند سالشه؟');
            if (Number(FAge2) >= 51) {
                alert('شما ' + Age + 'سالتونه و همسرتونم' + FAge2 + 'سالشه، باقی عمرتونو خوشو خرم کنار هم باشین');
            }
        }
    }
}