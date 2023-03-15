// 메인페이지
// 로딩되면 기존 프로필 지우고 DB에서 이름, 이미지url가져와서 보여주기
$(document).ready(function () {
  profile_show();
});

function profile_show() {
  fetch("/profiles")
    .then((res) => res.json())
    .then((data) => {
      let rows = data["result"];
      if (rows) {
        rows.forEach((row) => {
          console.log(row);
          let profile_name = row["real_name"];

          // 아이콘과 이름을 누르면(onclick)
          // 상세보기 페이지로 갈 수 있도록
          // -> 이름에 맞는 데이터를 가져올 수 있도록!
          let temp_html = `<li class="profile">
                                  <div>
                                  <a class="profile-link" href="detail/${profile_name}">
                                      <div class="avatar-wrapper">
                                      <div class="profile-icon" data-profile-guid="NO5NOJ4UG5AP7E42OLY6ZAQ64U" style="
                                              background-image: url(http://occ-0-3076-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbV2URr-qEYOrESG0qnP2787XsIxWTMBh7QfJwyqYxMAVFNyiXAqFeu16gI8yTxg3kLwF2mUDKmZGfwBEDd7722xskhYwAMwsBBe.png?r=bd7);
                                          "></div>
                                      </div>
                                      <span class="profile-name">${profile_name}</span>
                                  </a>
                                  </div>
                              </li>`;
          $("#choose-profile").append(temp_html);
        });
      }
      let temp_html = `
                        <li class="profile">
                          <div>
                            <a class="profile-link" href="posting">
                              <div class="avatar-wrapper">
                                <div
                                  class="profile-icon"
                                  data-profile-guid="QVSVX4SP3NBMZME4RRI5BJP2SU"
                                  style="background-image: url()"
                                ></div>
                              </div>
                              <span class="profile-name">프로필 추가</span>
                            </a>
                          </div>
                        </li>
`;
      $("#choose-profile").append(temp_html);
    });
}
