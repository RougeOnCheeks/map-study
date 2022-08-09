$(function (){

});

const mapContainer = document.getElementById('map'),
    mapOption = {
        center: new kakao.maps.LatLng(36.374627, 127.379577),
        level: 4
    };

const map = new kakao.maps.Map(mapContainer, mapOption);

var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지 크기
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

//마커 이미지
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
//마커 표시 위치
var markerPosition = new kakao.maps.LatLng(36.374627, 127.379577);

//마커 생성
var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage,
    clickable: true //마커 클릭 시 지도의 클릭 이벤트 발생하지 않도록 설정
});

marker.setMap(map);