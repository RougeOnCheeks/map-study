var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.54699, 127.09598), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지 크기
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

//마커 이미지
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
//마커 표시 위치
var markerPosition = new kakao.maps.LatLng(37.54699, 127.09598);

//마커 생성
var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage
});

//마커 표시
marker.setMap(map);

//마커 제거
// marker.setMap(null);

//드래그 가능한 마커 생성
marker.setDraggable(true);

