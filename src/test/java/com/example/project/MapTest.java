package com.example.project;

import com.example.mapstudy.MapStudyApplication;
import com.example.mapstudy.mapper.ProjectMapper;
import com.example.mapstudy.vo.IntersectionVO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest(classes = MapStudyApplication.class)
public class MapTest {

    @Autowired
    private ProjectMapper projectMapper;

    @Test
    public void selectArea(){
        List<IntersectionVO> list = projectMapper.selectArea();
        System.out.println(list);
    }


}
