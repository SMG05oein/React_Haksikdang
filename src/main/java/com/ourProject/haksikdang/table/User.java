package com.ourProject.haksikdang.table;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@Getter
@Setter
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer idx;

    @Column(nullable = false, length = 255)
    String name; //이름

    @Column(nullable = false)
    String passwd; //비번

    Integer class_num; //학번 없으면 공백

    @Column(nullable = false)
    Boolean group; //학생 및 교직원 또는 식당 관계자
}
