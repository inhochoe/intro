// 프로필추가 클릭하면 포스팅
function profile_post() {
    let realname = $('#realName').val()
    let nickname = $('#nickName').val()
    let img = $('#img').val()
    let sns = $('#sns').val()
    let lang = $('#lang').val()
    let want = $('#want').val()
    let strength = $('#strength').val()
    let dog = $('#dog').val()
    let cat = $('#cat').val()
    let mind = $('#mind').val()
    

    let formData = new FormData();
    formData.append("real_name_give", realname);
    formData.append("nick_name_give", nickname);
    formData.append("img_give", img);
    formData.append("sns_give", sns);
    formData.append("lang_give", lang);
    formData.append("want_give", want);
    formData.append("strength_give", strength);
    formData.append("dog_give", dog);
    formData.append("cat_give", cat);
    formData.append("mind_give", mind);

    fetch('/profiles', {method:"POST", body: formData})
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            alert(data['msg'])
            window.location.reload();
            // 메인페이지로 이동
            // let mainPage = 'index.html';
            // window.location.replace(mainPage);
        });
}