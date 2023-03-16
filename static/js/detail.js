// 상세보기 
// 로딩되면 DB에서 모든 데이터 가져와서 보여주기
// $(document).ready(function () {
//     show_detail();
// });

// function show_detail() {
//     fetch('/profiles').then((res) => res.json()).then((data) => {
//         let rows = data['result']
        
//         $('#profile-image').empty();
//         $('.detail-profile-info').empty();
//         $('.detail-top').empty();
            
//         rows.forEach((row) => {
//             let real_name = row["name"];
//             let nick_name = row["nick_name"];
//             let img = row["img"];
//             let sns = row["sns"];
//             let lang = row["lang"];
//             let want= row["want"];
//             let strength = row["strength"]
//             let dog = row["dog"];
//             let cat = row["cat"];
//             let mind = row["mind"];

                // id명 통일되면 다시 적기
                // 데이터 보여주는 방식은 추후 검토가 필요
//             let temp_html0 = `<img class="detail-profile-img" src="${img}" alt="profile image"/>`
//             let temp_html1 = `<span>${real_name}</span>`
//             let temp_html = `<div class="mb-3">
//                                 <label for="" class="form-label">${nick_name}</label>
//                             </div>
//                             <div class="mb-3">
//                               <label for="" class="form-label">${sns}</label>
//                             </div>
//                             <div class="mb-3">
//                               <label for="" class="form-label">${lang}</label>
//                             </div>
//                             <div class="mb-3">
//                               <label for="" class="form-label">${want}</label>
//                             </div>
//                             <div class="mb-3">
//                               <label for="" class="form-label">${strength}</label>
//                             </div>
//                             <div class="mb-3">
//                               <label for="" class="form-label">${mind}</label>
//                             </div>`
//             $("#profile-image").append(temp_html0);
//             $(".detail-top").append(temp_html1);
//             $("#detail-main").append(temp_html);   
//         })
//     })
// }