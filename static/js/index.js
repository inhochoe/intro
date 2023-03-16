// 메인페이지
// 로딩되면 기존 프로필 지우고 DB에서 이름, 이미지url가져와서 보여주기

$(document).ready(function () {
    profile_show();
    console.log("Hello!")
});

function profile_show() {
    fetch('/profiles')
    .then((res) => res.json())
    .then((data) => {
        $("#choose-profile").empty();
        let rows = data['result']
        rows.forEach((row) => {
            let real_name = row["real_name"];
            let img_url = row["img"];


                // 아이콘과 이름을 누르면(onclick)
                // 상세보기 페이지로 갈 수 있도록
                // -> 이름에 맞는 데이터를 가져올 수 있도록!
            let temp_html = `<li class="profile">
                                <div>
                                <a class="profile-link" href="detail/${real_name}">
                                    <div class="avatar-wrapper">
                                    <div class="profile-icon" data-profile-guid="NO5NOJ4UG5AP7E42OLY6ZAQ64U" style="
                                            background-image: url('${img_url}');"></div>
                                    </div>
                                    <span class="profile-name">${real_name}</span>
                                </a>
                                </div>
                            </li>`
            $("#choose-profile").append(temp_html);
            console.log(img_url);           
        })  
    }
    )
}
