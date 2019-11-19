package com.mengyunzhi.springBootStudy;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("teacher")
public class TeacherController {

    private static final Logger logger = LoggerFactory.getLogger(TeacherController.class);

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping
    public List<Teacher> getAll() {
        List<Teacher> teachers = new ArrayList<>();
        RowCallbackHandler handler = (resultSet) -> {
            Teacher teacher = new Teacher();
            /*获取字段id，并转换为Long类型返回*/
            teacher.setId(resultSet.getLong("id"));
            /*获取字段name，并转换为String类型返回*/
            teacher.setName(resultSet.getString("name"));
            /*获取字段sex，并转换为布尔类型返回*/
            teacher.setSex(resultSet.getBoolean("sex"));
            teacher.setUsername(resultSet.getString("username"));
            teacher.setEmail(resultSet.getString("email"));
            teacher.setCreateTime(resultSet.getLong("create_time"));
            teacher.setUpdateTime(resultSet.getLong("update_time"));

            /*将得到的teacher添加到要返回的数组中*/
            teachers.add(teacher);
        };

        String query = "select id, name, sex, username, email, create_time, update_time from teacher";

        jdbcTemplate.query(query, handler);

        return teachers;
    }
}
