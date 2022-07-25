var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표. 지도를 생성하는데 반드시 필요
    level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

//지도, 스카이뷰
var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

//확대 축소 제어하는 줌 컨트롤 생성
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.CENTERRIGHT);
//TOPRIGHT, BOTTOMRIGHT 등으로 표시될 위치 정의

//교통정보 표시하기
//map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
//교통정보 제거하기
map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

//로드뷰 도로 표시
map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);

//지형도 표시
//map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);

displayLevel();

getInfo();
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

function getInfo(){
    var center = map.getCenter();

    var level = map.getLevel();

    var mapTypeId = map.getMapTypeId();

    var bounds = map.getBounds();

    var swLatLng = bounds.getSouthWest();

    var neLatLng = bounds.getNorthEast();

    var boundsStr = bounds.toString();

    var message = `지도 중심좌표: 위도 ${center.getLat()}, 경도 ${center.getLng()}\n`;
        message += `지도 레벨: ${level}\n`;
        message += `지도 타입: ${mapTypeId}\n`;
        message += `지도의 남서쪽 좌표: ${swLatLng.getLat()}, ${swLatLng.getLng()}\n`;
        message += `지도의 북동쪽 좌표: ${neLatLng.getLat()}, ${neLatLng.getLng()}\n`;
        message += `영역 정보 ((남, 서), (북, 동)): ${boundsStr}`;

    var messageEl = document.getElementById("getInfo");
    messageEl.innerText = message;
}

/**
 * 지도 이동(드래그) 막기
 * @param draggable
 */
function setDraggable(draggable){
    map.setDraggable(draggable);
}

/**
 * 지도 확대 축소 막기
 * @param zoomable
 */
function setZoomable(zoomable){
    map.setZoomable(zoomable);
}