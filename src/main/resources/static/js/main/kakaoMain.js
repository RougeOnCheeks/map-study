var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표. 지도를 생성하는데 반드시 필요
    level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

displayLevel();

/**
 * 지도 중심 이동
 */
function setCenter(){
    //이동할 위도 경도 위치 생성
    var moveLatLon = new kakao.maps.LatLng(37.4783447, 127.0374924);
    map.setCenter(moveLatLon);
}

/**
 * 지도 중심 부드럽게 이동: 지도가 표시되고 있는 영역크기를 벗어나지 않는 거리라면 애니메이션 효과처럼 지도를 부드럽게 이동
 */
function panTo(){
    var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);
    map.panTo(moveLatLon);
}

/**
 * 지도 레벨 내리기
 */
function zoomIn(){
    //현재지도 레벨 get
    var level = map.getLevel();
    //지도를 1레벨 내리기(지도가 확대됨)
    map.setLevel(level - 1);
    displayLevel();
}

/**
 * 지도 레벨 올리기
 */
function zoomOut(){
    var level = map.getLevel();
    map.setLevel(level + 1);
    displayLevel();
}

/**
 * 지도 레벨 표시
 */
function displayLevel(){
    var levelEl = document.getElementById('maplevel');
    levelEl.innerHTML = '현재 지도레벨은 ' + map.getLevel() + ' 레벨 입니다.';
}