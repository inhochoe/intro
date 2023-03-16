//프로필추가 클릭하면 포스팅
function profile_post() {
  let realname = $("#realName").val();
  let nickname = $("#nickName").val();
  let img = $("#img").val();
  let sns = $("#sns").val();
  let lang = $("#lang").val();
  let want = $("#want").val();
  let strength = $("#strength").val();
  let mind = $("#mind").val();
  let animal ="";

  
  if($('input[id="dog"]').is(":checked") == true){
    animal = '🐶';
  }
  if($('input[id="cat"]').is(":checked") == true){
    animal = '🐱';
  }




  if ((realname !== "") && (want !== "") && (mind !== "")) {
    if(img!== ""){
        let formData = new FormData();
        formData.append("real_name_give", realname);
        formData.append("nick_name_give", nickname);
        formData.append("img_give", img);
        formData.append("sns_give", sns);
        formData.append("lang_give", lang);
        formData.append("want_give", want);
        formData.append("strength_give", strength);
        // formData.append("dog_give", dog);
        // formData.append("cat_give", cat);
        formData.append("animal_give", animal);
        formData.append("mind_give", mind);

        fetch("/profiles", { method: "POST", body: formData })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            // alert(data['msg'])
            //window.location.reload();
            // 메인페이지로 이동
            // window.location.reload('index.html');
        });
    } 
    else{
        img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR51b10ldicG0uJmY_D1NtBif0RAHmCvMWMbmHn2kjM&s"
        let formData = new FormData();
        formData.append("real_name_give", realname);
        formData.append("nick_name_give", nickname);
        formData.append("img_give", img);
        formData.append("sns_give", sns);
        formData.append("lang_give", lang);
        formData.append("want_give", want);
        formData.append("strength_give", strength);
        // formData.append("dog_give", dog);
        // formData.append("cat_give", cat);
        formData.append("animal_give", animal);
        formData.append("mind_give", mind);

        fetch("/profiles", { method: "POST", body: formData })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            // alert(data['msg'])
            //window.location.reload();
            // 메인페이지로 이동
            // window.location.reload('index.html');
        });
    }
  }
}


