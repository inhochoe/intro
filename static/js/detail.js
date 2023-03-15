// 상세보기 
// 로딩되면 DB에서 모든 데이터 가져와서 보여주기
function show_detail() {
    fetch('/profiles')
        .then((res) => res.json())
        .then((data) => {
            let rows = data['all_data']
            rows.forEach((row) => {
                let real_name = row["name"];
                let nick_name = row["nick_name"];
                let img = row["img"];
                let sns = row["sns"];
                let lang = row["lang"];
                let want= row["want"];
                let strength = row["strength"];
                let dog = row["dog"];
                let cat = row["cat"];
                let mind = row["mind"];

                // id명 통일되면 다시 적기
                // 데이터 보여주는 방식은 추후 검토가 필요

                let temp_html = `<div class="detail-top">
                                    <span>${real_name}</span>
                                </div>
                        
                                <!-- Middle -->
                                <div class="detail-middle">
                                    <div>
                                    <img
                                        class="detail-profile-img"
                                        src="https://placehold.co/180x180?text=img"
                                        alt="profile image"
                                    />
                                    </div>
                                    <div class="detail-profile-info">
                                    <div class="mb-3">
                                        <label for="" class="form-label">닉네임${real_name} </label>
                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="form-label"> SNS 계정${sns} </label>
                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="form-label"> 깃허브 주소${real_name} </label>
                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="form-label">사용할 줄 아는 언어${lang} </label>
                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="form-label">배우고 싶은 언어${real_name} </label>
                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="form-label">장점${strength} </label>
                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="form-label">강아지? 고양이?${real_name} </label>
                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="form-label">{마음가짐}${minde} </label>
                                    </div>
                                    </div>
                                </div>`
            $("#detail-main").append(temp_html);   
            })
        })
}