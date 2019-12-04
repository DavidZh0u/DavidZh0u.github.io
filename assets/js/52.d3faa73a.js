(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{190:function(s,n,a){"use strict";a.r(n);var e=a(0),r=Object(e.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"springmvc案例工程创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springmvc案例工程创建","aria-hidden":"true"}},[s._v("#")]),s._v(" SpringMVC案例工程创建")]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"_1-开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-开发环境","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.开发环境")]),s._v(" "),a("p",[s._v("JDK : 1.8"),a("br"),s._v("\nmaven : 3.3.9"),a("br"),s._v("\ntomcat : 9"),a("br"),s._v("\nIDEA : 2019.1"),a("br"),s._v("\n目标：构建springmvc案例工程，可打war包发布到tomcat中，为后面整合其他框架工具打好基础。")]),s._v(" "),a("h3",{attrs:{id:"_2-构建工程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-构建工程","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.构建工程")]),s._v(" "),a("h4",{attrs:{id:"_2-1-构建一个maven工程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-构建一个maven工程","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.1 构建一个maven工程")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/springmvc/mvc01.png",alt:""}}),s._v("\n后续步骤默认OK就好。"),a("br")]),s._v(" "),a("h4",{attrs:{id:"_2-2-变更为web工程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-变更为web工程","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.2 变更为web工程")]),s._v(" "),a("p",[s._v("右键工程名，点击 [Add Framework Support],然后勾选[Web Application],OK。如下图操作："),a("br"),s._v(" "),a("img",{attrs:{src:"/images/springmvc/mvc03.png",alt:""}}),s._v("\n这一步完成后，看看你的工程目录结构是否如下所示："),a("br"),s._v(" "),a("img",{attrs:{src:"/images/springmvc/mvc01-1.png",alt:""}}),a("br")]),s._v(" "),a("h4",{attrs:{id:"_2-3-pom文件增加依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-pom文件增加依赖","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.3 pom文件增加依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    <dependencies>\n        \x3c!-- spring ioc组件需要的依赖包 --\x3e\n        <dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-beans</artifactId>\n            <version>5.0.7.RELEASE</version>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-core</artifactId>\n            <version>5.0.7.RELEASE</version>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-context</artifactId>\n            <version>5.0.7.RELEASE</version>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-expression</artifactId>\n            <version>5.0.7.RELEASE</version>\n        </dependency>\n\n        \x3c!-- 基于AspectJ的aop依赖 --\x3e\n        <dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-aspects</artifactId>\n            <version>5.0.7.RELEASE</version>\n        </dependency>\n        <dependency>\n            <groupId>aopalliance</groupId>\n            <artifactId>aopalliance</artifactId>\n            <version>1.0</version>\n        </dependency>\n\n        \x3c!-- spring MVC依赖包 --\x3e\n        <dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-webmvc</artifactId>\n            <version>5.0.7.RELEASE</version>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-web</artifactId>\n            <version>5.0.7.RELEASE</version>\n        </dependency>\n\n        \x3c!-- jstl --\x3e\n        <dependency>\n            <groupId>javax.servlet</groupId>\n            <artifactId>jstl</artifactId>\n            <version>1.2</version>\n        </dependency>\n\n        \x3c!-- servlet --\x3e\n        <dependency>\n            <groupId>javax.servlet</groupId>\n            <artifactId>servlet-api</artifactId>\n            <version>2.5</version>\n            <scope>provided</scope>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            \x3c!-- 配置Maven的JDK编译级别 --\x3e\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-compiler-plugin</artifactId>\n                <version>3.2</version>\n                <configuration>\n                    <source>1.8</source>\n                    <target>1.8</target>\n                    <encoding>UTF-8</encoding>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br")])]),a("h4",{attrs:{id:"_2-4-修改web-xml文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-修改web-xml文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.4 修改web.xml文件")]),s._v(" "),a("p",[s._v("配置一个前端控制器，和一个url映射拦截规则")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    <servlet>\n        <servlet-name>springmvc</servlet-name>\n        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>\n        <init-param>\n            <param-name>contextConfigLocation</param-name>\n            <param-value>classpath:springmvc.xml</param-value>\n        </init-param>\n        <load-on-startup>2</load-on-startup>\n    </servlet>\n    <servlet-mapping>\n        <servlet-name>springmvc</servlet-name>\n        <url-pattern>/</url-pattern>\n    </servlet-mapping>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("也许你会看到param-value报错，这是因为我们还没有创建springmvc.xml文件。后面一步我们补上这个文件就正常了。")]),s._v(" "),a("h4",{attrs:{id:"_2-5-在-resources-目录下创建springmvc-xml文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-在-resources-目录下创建springmvc-xml文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.5 在 resources 目录下创建springmvc.xml文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xmlns:mvc="http://www.springframework.org/schema/mvc"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\n        http://www.springframework.org/schema/beans/spring-beans.xsd\n        http://www.springframework.org/schema/context\n        http://www.springframework.org/schema/context/spring-context.xsd\n        http://www.springframework.org/schema/mvc\n        http://www.springframework.org/schema/mvc/spring-mvc.xsd">\n\n    \x3c!-- 处理器类的扫描 --\x3e\n    <context:component-scan base-package="com.zhou.controller" />\n\n</beans>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("也许你会看到base-package报错，没关系，下一步我们创建相关文件和目录，它就正常了。")]),s._v(" "),a("h4",{attrs:{id:"_2-6-创建controller和po"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-创建controller和po","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.6 创建controller和po")]),s._v(" "),a("p",[s._v("先增加两个目录：com.zhou.controller和com.zhou.po"),a("br"),s._v("\n在controller目录下，创建UserController类：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('@Controller\npublic class UserController {\n\n    @RequestMapping("queryUser")\n    public ModelAndView queryItem(){\n        // 静态数据模拟\n        List<User> users = new ArrayList<>();\n\n        User u1 = new User();\n        u1.setName("狂暴战");\n        u1.setAge(28);\n        u1.setSex(true);\n        u1.setEmail("zhanshi@gmail.com");\n        u1.setDescription("好马配好鞍，好武器配狂暴战士。");\n\n        User u2 = new User();\n        u2.setName("兽王猎");\n        u2.setAge(28);\n        u2.setSex(false);\n        u2.setEmail("lieren@gmail.com");\n        u2.setDescription("好马配好鞍，好宠物配狂暴战士。");\n\n        users.add(u1);\n        users.add(u2);\n\n        ModelAndView mvAndView = new ModelAndView();\n        mvAndView.addObject("users", users);\n        mvAndView.setViewName("WEB-INF/jsp/user/user-list.jsp");\n        return mvAndView;\n    }\n    \n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("p",[s._v("在po目录下，创建User类：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("public class User {\n\n    private String name;\n    private int age;\n    private boolean sex;\n    private String email;\n    private String description;\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public int getAge() {\n        return age;\n    }\n\n    public void setAge(int age) {\n        this.age = age;\n    }\n\n    public boolean isSex() {\n        return sex;\n    }\n\n    public void setSex(boolean sex) {\n        this.sex = sex;\n    }\n\n    public String getEmail() {\n        return email;\n    }\n\n    public void setEmail(String email) {\n        this.email = email;\n    }\n\n    public String getDescription() {\n        return description;\n    }\n\n    public void setDescription(String description) {\n        this.description = description;\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br")])]),a("h4",{attrs:{id:"_2-7-创建jsp文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-创建jsp文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.7 创建jsp文件")]),s._v(" "),a("p",[s._v("在web/WEB-INF目录下创建目录jsp/user,然后在user目录下创建文件user-list.jsp文件：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<%@ page language="java" contentType="text/html; charset=UTF-8"\n         pageEncoding="UTF-8"%>\n<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>\n<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"  prefix="fmt"%>\n<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">\n<html>\n<head>\n    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n    <title>查询用户列表</title>\n</head>\n<body>\n<form action="${pageContext.request.contextPath }/userList.do" method="post">\n    查询条件：\n    <table width="100%" border=1>\n        <tr>\n            <td><input type="submit" value="查询"/></td>\n        </tr>\n    </table>\n    用户列表：\n    <table width="100%" border=1>\n        <tr>\n            <td>姓名</td>\n            <td>年龄</td>\n            <td>性别</td>\n            <td>邮箱</td>\n            <td>描述</td>\n        </tr>\n        <c:forEach items="${users}" var="user">\n            <tr>\n                <td>${user.name }</td>\n                <td>${user.age }</td>\n                <c:if test="${user.sex == true}">\n                    <td>男</td>\n                </c:if>\n                <c:if test="${user.sex == false}">\n                    <td>女</td>\n                </c:if>\n                <td>${user.email }</td>\n                <td>${user.description }</td>\n            </tr>\n        </c:forEach>\n\n    </table>\n</form>\n</body>\n\n</html>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br")])]),a("h4",{attrs:{id:"_2-7-设置项目发布方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-设置项目发布方式","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.7 设置项目发布方式")]),s._v(" "),a("p",[s._v("右键项目 -> Open Module Settings"),a("br"),s._v("\n删除maven默认的Artifact，如下操作：\n"),a("img",{attrs:{src:"/images/springmvc/mvc04.png",alt:""}}),a("br"),s._v("\n然后创建新的Artifact，如下从操作：\n"),a("img",{attrs:{src:"/images/springmvc/mvc05.png",alt:""}}),a("br"),s._v("\n用工程单词缩写当成名字，然后注意输出目录，右键工程名字，选择Put Output Root,如下操作：\n"),a("img",{attrs:{src:"/images/springmvc/mvc06.png",alt:""}}),a("br"),s._v("\n然后点击右下角Apply。")]),s._v(" "),a("h4",{attrs:{id:"_2-7-设置tomcat启动方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-设置tomcat启动方式","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.7 设置tomcat启动方式")]),s._v(" "),a("p",[s._v("找到绿色的锤子按钮，点击进入。"),a("br"),s._v(" "),a("img",{attrs:{src:"/images/springmvc/mvc07.png",alt:""}}),a("br"),s._v("\n点击弹出框中，依次操作：+ -> Tomcat Server -> Local"),a("br"),s._v("\n设置name为工程单词缩写，设置访问url,如下所示：\n"),a("img",{attrs:{src:"/images/springmvc/mvc08.png",alt:""}}),a("br"),s._v("\n设置tomcat发布的artifact，如下所示：\n"),a("img",{attrs:{src:"/images/springmvc/mvc09.png",alt:""}}),a("br"),s._v("\n由于我们现在只有一个artifact,所以上面的操作会帮我们默认选择这个artifact。后续点OK就好！")]),s._v(" "),a("h4",{attrs:{id:"_2-8-启动tomcat访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-启动tomcat访问","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.8 启动tomcat访问")]),s._v(" "),a("p",[s._v("用刚刚配置好的tomcat,启动工程，然后在浏览器中访问url:\nhttp://localhost:8080/esm/queryUser\n"),a("img",{attrs:{src:"/images/springmvc/mvc10.png",alt:""}}),a("br")]),s._v(" "),a("h4",{attrs:{id:"_2-9-用war包部署tomcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-用war包部署tomcat","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.9 用war包部署tomcat")]),s._v(" "),a("p",[s._v("构建后，工程多了一个out目录，找到war包"),a("br"),s._v(" "),a("img",{attrs:{src:"/images/springmvc/mvc11.png",alt:""}}),a("br"),s._v("\n然后把这个war,放到tomcat/webapps/目录下：\n"),a("img",{attrs:{src:"/images/springmvc/mvc12.png",alt:""}}),a("br"),s._v("\n启动tomcat,在浏览器中再输入上一步的url,看看效果：\n"),a("img",{attrs:{src:"/images/springmvc/mvc13.png",alt:""}}),a("br")]),s._v(" "),a("h3",{attrs:{id:"_3-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-总结","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.总结")]),s._v(" "),a("p",[s._v("至此，用springmvc构建一个简单的单体web应用已经实现，并且能打包war,发布到tomcat容器中。后续，将以此工程为基础，学习\nSpringMvc其他功能，以及如何整合其他框架。")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("最后修改时间:2019年9月23日19:11:19")])])},[],!1,null,null,null);n.default=r.exports}}]);