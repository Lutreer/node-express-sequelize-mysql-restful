# 开发者必读
这是一个使用了node,express,sequelize,mysql的后端服务，对外提供restful接口。开发前请仔细阅读本文，这样你即会对本项目的结构有个很快的大体了解，更主要的是了解本项目的开发规范。


## 约定
我们做这些约定是为了开发人员养成良好的开发习惯，也便于代码的维护和可持续的开发。


#### 路由规则
`routes` 文件下除了index.js其他文件的文件名都是该路由模块的一级路由，比如：user.js里面的路由都是在 `/user/` 下的二级路由 `/user/create` `/user/delete/234s3334f4f4`
#### model与表
`models`下除了index.js其他文件必须对应数据库中的一张表，且文件名必须与表名一致，表明也必须与文件中的model define 的名字一样，文件名一律小写，一下划线连接！虽然做了这些限制，但是我们约定每个model定义是仍旧必须添加tableName，例如：tableName:'admin_user'，这样，tableName应该与文件名保持一致。(文件名必须以admin开头，为将数据库中的后台管系统的表与普通表做区分)
### middleware 顺序
`middleware` 每个middleware的顺序只需要在middlewares文件下的index.js文件中定义。