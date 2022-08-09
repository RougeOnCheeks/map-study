package com.example.mapstudy.vo;

import lombok.Data;

@Data
public class IntersectionVO {
    String areaName;
    double areaLat;
    double areaLon;
    long traffic;
    double delay;
}
