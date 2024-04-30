import Mock from 'mockjs'

Mock.mock('/api/login','post',{
    code: 0,
    message: "ok",
    data: ""
})

// Mock.mock('/api/dataorigin/select','post',{
//     "code": 0,
//     "message": "empty",
//     "data": [
//         {
//             "connectionType": "jdbc",
//             "connectionName": "holo-211",
//             "connectionData": "{\"connectionId\":null,\"database\":\"postgresql\",\"connectionName\":null,\"driver\":\"org.postgresql.Driver\",\"url\":\"jdbc:postgresql://hgprecn-cn-zvp29cpg9005-cn-shanghai-vpc.hologres.aliyuncs.com:80/bestv_ads\",\"user\":\"LTAI5tLjZjL7XHfZw68GvgSv\",\"password\":\"********\",\"newCharsetName\":\"\",\"originalCharsetName\":\"\",\"schema\":\"public\",\"options\":null,\"port\":0,\"authType\":\"\",\"creator\":\"admin\",\"principal\":\"\",\"keyPath\":\"\",\"connectionPoolAttr\":{\"initialSize\":0,\"maxActive\":50,\"maxIdle\":10,\"minIdle\":0,\"maxWait\":10000,\"validationQuery\":\"\",\"testOnBorrow\":true,\"testOnReturn\":false,\"testWhileIdle\":false,\"timeBetweenEvictionRunsMillis\":-1,\"numTestsPerEvictionRun\":3,\"minEvictableIdleTimeMillis\":1800},\"useJaas\":false,\"fetchSize\":10000,\"identity\":\"3e0b7cf1-9f39-d67d-64a6-1fd49f18a2c3\",\"privilegeDetailBeanList\":null}",
//             "connectionId": null,
//             "creator": "admin",
//             "createTime": "2024-04-04 23:05:00"
//         },
//         {
//             "connectionType": "jdbc",
//             "connectionName": "trino",
//             "connectionData": "{\"connectionId\":null,\"database\":\"presto\",\"connectionName\":null,\"driver\":\"io.trino.jdbc.TrinoDriver\",\"url\":\"jdbc:trino://trino.bbtv.cn:8444/hive?SSL=true\",\"user\":\"rdc.data\",\"password\":\"********\",\"newCharsetName\":\"\",\"originalCharsetName\":\"\",\"schema\":\"bestv_ads\",\"options\":null,\"port\":0,\"authType\":\"\",\"creator\":\"dataware\",\"principal\":\"\",\"keyPath\":\"\",\"connectionPoolAttr\":{\"initialSize\":0,\"maxActive\":50,\"maxIdle\":10,\"minIdle\":0,\"maxWait\":10000,\"validationQuery\":\"\",\"testOnBorrow\":true,\"testOnReturn\":false,\"testWhileIdle\":false,\"timeBetweenEvictionRunsMillis\":-1,\"numTestsPerEvictionRun\":3,\"minEvictableIdleTimeMillis\":1800},\"useJaas\":false,\"fetchSize\":-1,\"identity\":\"e978734cd4cdec91\",\"privilegeDetailBeanList\":null}",
//             "connectionId": null,
//             "creator": "dataware",
//             "createTime": "2024-04-04 23:05:00"
//         },
//         {
//             "connectionType": "jdbc",
//             "connectionName": "presto-internal.opg.cn2",
//             "connectionData": "{\"connectionId\":null,\"database\":\"presto\",\"connectionName\":null,\"driver\":\"com.facebook.presto.jdbc.PrestoDriver\",\"url\":\"jdbc:presto://presto-internal.bbtv.cn:8444/hive?SSL=TRUE\",\"user\":\"rdc.data\",\"password\":\"********\",\"newCharsetName\":\"\",\"originalCharsetName\":\"\",\"schema\":\"bestv_ads\",\"options\":null,\"port\":0,\"authType\":\"\",\"creator\":\"admin\",\"principal\":\"\",\"keyPath\":\"\",\"connectionPoolAttr\":{\"initialSize\":0,\"maxActive\":50,\"maxIdle\":10,\"minIdle\":0,\"maxWait\":10000,\"validationQuery\":\"\",\"testOnBorrow\":true,\"testOnReturn\":false,\"testWhileIdle\":false,\"timeBetweenEvictionRunsMillis\":-1,\"numTestsPerEvictionRun\":3,\"minEvictableIdleTimeMillis\":1800},\"useJaas\":false,\"fetchSize\":-1,\"identity\":\"e978734cd4cdec91\",\"privilegeDetailBeanList\":null}",
//             "connectionId": null,
//             "creator": "admin",
//             "createTime": "2024-04-04 23:05:00"
//         },
//         {
//             "connectionType": "jdbc",
//             "connectionName": "ds_datalake",
//             "connectionData": "{\"connectionId\":null,\"database\":\"mysql\",\"connectionName\":null,\"driver\":\"com.mysql.jdbc.Driver\",\"url\":\"jdbc:mysql://pc-uf67691kzia1cgqay.mysql.polardb.rds.aliyuncs.com/ds_datalake\",\"user\":\"dl_readonly\",\"password\":\"********\",\"newCharsetName\":\"\",\"originalCharsetName\":\"\",\"schema\":\"\",\"options\":null,\"port\":0,\"authType\":\"\",\"creator\":\"admin\",\"principal\":\"\",\"keyPath\":\"\",\"connectionPoolAttr\":{\"initialSize\":0,\"maxActive\":50,\"maxIdle\":10,\"minIdle\":0,\"maxWait\":10000,\"validationQuery\":\"\",\"testOnBorrow\":true,\"testOnReturn\":false,\"testWhileIdle\":false,\"timeBetweenEvictionRunsMillis\":-1,\"numTestsPerEvictionRun\":3,\"minEvictableIdleTimeMillis\":1800},\"useJaas\":false,\"fetchSize\":-1,\"identity\":\"0ca60dc633e0e878\",\"privilegeDetailBeanList\":null}",
//             "connectionId": null,
//             "creator": "admin",
//             "createTime": "2024-04-04 23:05:00"
//         },
//         {
//             "connectionType": "jdbc",
//             "connectionName": "mysql_ucs",
//             "connectionData": "{\"connectionId\":null,\"database\":\"mysql\",\"connectionName\":null,\"driver\":\"com.mysql.jdbc.Driver\",\"url\":\"jdbc:mysql://opg211-prod-fr-default.rwlb.rds.aliyuncs.com:3306/ucs?useUnicode=true&characterEncoding=UTF-8\",\"user\":\"ucs\",\"password\":\"********\",\"newCharsetName\":\"\",\"originalCharsetName\":\"\",\"schema\":\"\",\"options\":null,\"port\":0,\"authType\":\"\",\"creator\":\"admin\",\"principal\":\"\",\"keyPath\":\"\",\"connectionPoolAttr\":{\"initialSize\":0,\"maxActive\":50,\"maxIdle\":10,\"minIdle\":0,\"maxWait\":10000,\"validationQuery\":\"\",\"testOnBorrow\":true,\"testOnReturn\":false,\"testWhileIdle\":false,\"timeBetweenEvictionRunsMillis\":-1,\"numTestsPerEvictionRun\":3,\"minEvictableIdleTimeMillis\":1800},\"useJaas\":false,\"fetchSize\":-1,\"identity\":\"d0ff3535068a34a2\",\"privilegeDetailBeanList\":null}",
//             "connectionId": null,
//             "creator": "admin",
//             "createTime": "2024-04-04 23:05:00"
//         },
//         {
//             "connectionType": "jdbc",
//             "connectionName": "fr_finedb",
//             "connectionData": "{\"connectionId\":null,\"database\":\"mysql\",\"connectionName\":null,\"driver\":\"com.mysql.jdbc.Driver\",\"url\":\"jdbc:mysql://opg211-prod-fr-default.rwlb.rds.aliyuncs.com:3306/fr_finedb?useUnicode=true&characterEncoding=UTF-8\",\"user\":\"root\",\"password\":\"********\",\"newCharsetName\":\"\",\"originalCharsetName\":\"\",\"schema\":\"\",\"options\":null,\"port\":0,\"authType\":\"\",\"creator\":\"admin\",\"principal\":\"\",\"keyPath\":\"\",\"connectionPoolAttr\":{\"initialSize\":0,\"maxActive\":50,\"maxIdle\":10,\"minIdle\":0,\"maxWait\":10000,\"validationQuery\":\"\",\"testOnBorrow\":true,\"testOnReturn\":false,\"testWhileIdle\":false,\"timeBetweenEvictionRunsMillis\":-1,\"numTestsPerEvictionRun\":3,\"minEvictableIdleTimeMillis\":1800},\"useJaas\":false,\"fetchSize\":-1,\"identity\":\"83de666f-4087-6731-760b-5b5bf3e3f507\",\"privilegeDetailBeanList\":null}",
//             "connectionId": null,
//             "creator": "admin",
//             "createTime": "2024-04-04 23:05:00"
//         },
//         {
//             "connectionType": "jdbc",
//             "connectionName": "MaxCompute",
//             "connectionData": "{\"connectionId\":null,\"database\":\"odps\",\"connectionName\":null,\"driver\":\"com.aliyun.odps.jdbc.OdpsDriver\",\"url\":\"jdbc:odps:http://service.cn-shanghai.maxcompute.aliyun.com/api?project=bestv_dw\",\"user\":\"LTAI5tHHeN4YBz4s9aC5KXSs\",\"password\":\"********\",\"newCharsetName\":\"gbk\",\"originalCharsetName\":\"UTF-8\",\"schema\":\"\",\"options\":null,\"port\":0,\"authType\":\"\",\"creator\":\"admin\",\"principal\":\"\",\"keyPath\":\"\",\"connectionPoolAttr\":{\"initialSize\":0,\"maxActive\":50,\"maxIdle\":10,\"minIdle\":0,\"maxWait\":10000,\"validationQuery\":\"\",\"testOnBorrow\":true,\"testOnReturn\":false,\"testWhileIdle\":false,\"timeBetweenEvictionRunsMillis\":-1,\"numTestsPerEvictionRun\":3,\"minEvictableIdleTimeMillis\":1800},\"useJaas\":false,\"fetchSize\":-1,\"identity\":\"18a0420a-dade-80d8-61cc-74d21b0ffb7f\",\"privilegeDetailBeanList\":null}",
//             "connectionId": null,
//             "creator": "admin",
//             "createTime": "2024-04-04 23:05:00"
//         },
//         {
//             "connectionType": "jdbc",
//             "connectionName": "数据连接",
//             "connectionData": "{\"connectionId\":null,\"database\":\"mysql\",\"connectionName\":null,\"driver\":\"com.mysql.jdbc.Driver\",\"url\":\"jdbc:mysql://ucs-prod-fr.czs6eaylfkoa.rds.cn-north-1.amazonaws.com.cn:3306/ucs\",\"user\":\"root\",\"password\":\"********\",\"newCharsetName\":\"\",\"originalCharsetName\":\"\",\"schema\":\"\",\"options\":null,\"port\":0,\"authType\":\"\",\"creator\":\"admin\",\"principal\":\"\",\"keyPath\":\"\",\"connectionPoolAttr\":{\"initialSize\":0,\"maxActive\":50,\"maxIdle\":10,\"minIdle\":0,\"maxWait\":10000,\"validationQuery\":\"\",\"testOnBorrow\":true,\"testOnReturn\":false,\"testWhileIdle\":false,\"timeBetweenEvictionRunsMillis\":-1,\"numTestsPerEvictionRun\":3,\"minEvictableIdleTimeMillis\":1800},\"useJaas\":false,\"fetchSize\":-1,\"identity\":\"6c44272b-4db9-489b-b945-0a630f3a6e2c\",\"privilegeDetailBeanList\":null}",
//             "connectionId": null,
//             "creator": "admin",
//             "createTime": "2024-04-04 23:05:00"
//         },
//         {
//             "connectionType": "jdbc",
//             "connectionName": "hologres_test",
//             "connectionData": "{\"connectionId\":null,\"database\":\"postgresql\",\"connectionName\":null,\"driver\":\"org.postgresql.Driver\",\"url\":\"jdbc:postgresql://hgprecn-cn-n6w24rqzv019-cn-shanghai.hologres.aliyuncs.com:80/opg_dws\",\"user\":\"LTAI4Fgb6jHjHuEALEkh3CwT\",\"password\":\"********\",\"newCharsetName\":\"\",\"originalCharsetName\":\"\",\"schema\":\"public\",\"options\":null,\"port\":0,\"authType\":\"\",\"creator\":\"admin\",\"principal\":\"\",\"keyPath\":\"\",\"connectionPoolAttr\":{\"initialSize\":0,\"maxActive\":50,\"maxIdle\":10,\"minIdle\":0,\"maxWait\":10000,\"validationQuery\":\"\",\"testOnBorrow\":true,\"testOnReturn\":false,\"testWhileIdle\":false,\"timeBetweenEvictionRunsMillis\":-1,\"numTestsPerEvictionRun\":3,\"minEvictableIdleTimeMillis\":1800},\"useJaas\":false,\"fetchSize\":-1,\"identity\":\"a5184d12-5e00-492e-6982-2dd548971705\",\"privilegeDetailBeanList\":null}",
//             "connectionId": null,
//             "creator": "admin",
//             "createTime": "2024-04-04 23:05:00"
//         },
//         {
//             "connectionType": "jdbc",
//             "connectionName": "redshift",
//             "connectionData": "{\"connectionId\":null,\"database\":\"amazon-redshift\",\"connectionName\":null,\"driver\":\"com.amazon.redshift.jdbc41.Driver\",\"url\":\"jdbc:postgresql://10.205.86.112:5439/bestvwh\",\"user\":\"iptv_readonly\",\"password\":\"********\",\"newCharsetName\":\"\",\"originalCharsetName\":\"\",\"schema\":\"iptv\",\"options\":null,\"port\":0,\"authType\":\"\",\"creator\":\"admin\",\"principal\":\"\",\"keyPath\":\"\",\"connectionPoolAttr\":{\"initialSize\":0,\"maxActive\":50,\"maxIdle\":10,\"minIdle\":0,\"maxWait\":10000,\"validationQuery\":\"\",\"testOnBorrow\":true,\"testOnReturn\":false,\"testWhileIdle\":false,\"timeBetweenEvictionRunsMillis\":-1,\"numTestsPerEvictionRun\":3,\"minEvictableIdleTimeMillis\":1800},\"useJaas\":false,\"fetchSize\":-1,\"identity\":\"be3047d0-2111-9796-930a-080180f16f1c\",\"privilegeDetailBeanList\":null}",
//             "connectionId": null,
//             "creator": "admin",
//             "createTime": "2024-04-04 23:05:00"
//         },
//         {
//             "connectionType": "jdbc",
//             "connectionName": "presto-internal.opg.cn1",
//             "connectionData": "{\"connectionId\":null,\"database\":\"presto\",\"connectionName\":null,\"driver\":\"com.facebook.presto.jdbc.PrestoDriver\",\"url\":\"jdbc:presto://presto-internal.opg.cn:8443/hive?SSL=TRUE\",\"user\":\"rdc.data\",\"password\":\"********\",\"newCharsetName\":\"\",\"originalCharsetName\":\"\",\"schema\":\"bestv_dim\",\"options\":null,\"port\":0,\"authType\":\"\",\"creator\":\"admin\",\"principal\":\"\",\"keyPath\":\"\",\"connectionPoolAttr\":{\"initialSize\":0,\"maxActive\":50,\"maxIdle\":10,\"minIdle\":0,\"maxWait\":10000,\"validationQuery\":\"\",\"testOnBorrow\":true,\"testOnReturn\":false,\"testWhileIdle\":false,\"timeBetweenEvictionRunsMillis\":-1,\"numTestsPerEvictionRun\":3,\"minEvictableIdleTimeMillis\":1800},\"useJaas\":false,\"fetchSize\":-1,\"identity\":\"6738ef6c-33cc-edbc-9166-8cdd2d98a095\",\"privilegeDetailBeanList\":null}",
//             "connectionId": null,
//             "creator": "admin",
//             "createTime": "2024-04-04 23:05:00"
//         },
//         {
//             "connectionType": "jdbc",
//             "connectionName": "presto-internal.opg.cn",
//             "connectionData": "{\"connectionId\":null,\"database\":\"presto\",\"connectionName\":null,\"driver\":\"com.facebook.presto.jdbc.PrestoDriver\",\"url\":\"jdbc:presto://presto-internal.opg.cn:8443/hive?SSL=TRUE\",\"user\":\"rdc.data\",\"password\":\"********\",\"newCharsetName\":\"\",\"originalCharsetName\":\"\",\"schema\":\"bestv_dwd\",\"options\":null,\"port\":0,\"authType\":\"\",\"creator\":\"admin\",\"principal\":\"\",\"keyPath\":\"\",\"connectionPoolAttr\":{\"initialSize\":0,\"maxActive\":50,\"maxIdle\":10,\"minIdle\":0,\"maxWait\":10000,\"validationQuery\":\"\",\"testOnBorrow\":true,\"testOnReturn\":false,\"testWhileIdle\":false,\"timeBetweenEvictionRunsMillis\":-1,\"numTestsPerEvictionRun\":3,\"minEvictableIdleTimeMillis\":1800},\"useJaas\":false,\"fetchSize\":-1,\"identity\":\"1244f411-54ae-f616-63df-0ac1278a0b24\",\"privilegeDetailBeanList\":null}",
//             "connectionId": null,
//             "creator": "admin",
//             "createTime": "2024-04-04 23:05:00"
//         },
//         {
//             "connectionType": "jdbc",
//             "connectionName": "FRDemo",
//             "connectionData": "{\"connectionId\":null,\"database\":\"sqlite\",\"connectionName\":null,\"driver\":\"org.sqlite.JDBC\",\"url\":\"jdbc:sqlite://${ENV_HOME}/demo/FRDemo.db\",\"user\":\"\",\"password\":\"********\",\"newCharsetName\":\"\",\"originalCharsetName\":\"\",\"schema\":\"\",\"options\":null,\"port\":0,\"authType\":\"\",\"creator\":\"admin\",\"principal\":\"\",\"keyPath\":\"\",\"connectionPoolAttr\":{\"initialSize\":0,\"maxActive\":50,\"maxIdle\":10,\"minIdle\":0,\"maxWait\":10000,\"validationQuery\":\"\",\"testOnBorrow\":false,\"testOnReturn\":false,\"testWhileIdle\":false,\"timeBetweenEvictionRunsMillis\":-1,\"numTestsPerEvictionRun\":3,\"minEvictableIdleTimeMillis\":1800},\"useJaas\":false,\"fetchSize\":-1,\"identity\":\"94c4c4ba-980c-7009-fb37-b13508179239\",\"privilegeDetailBeanList\":null}",
//             "connectionId": null,
//             "creator": "admin",
//             "createTime": "2024-04-04 23:05:00"
//         },
//         {
//             "connectionType": "jdbc",
//             "connectionName": "BI Demo",
//             "connectionData": "{\"connectionId\":null,\"database\":\"h2\",\"connectionName\":null,\"driver\":\"org.h2.Driver\",\"url\":\"jdbc:h2://${ENV_HOME}/demo/test\",\"user\":\"sa\",\"password\":\"********\",\"newCharsetName\":\"\",\"originalCharsetName\":\"\",\"schema\":\"PUBLIC\",\"options\":null,\"port\":0,\"authType\":\"\",\"creator\":\"admin\",\"principal\":\"\",\"keyPath\":\"\",\"connectionPoolAttr\":{\"initialSize\":0,\"maxActive\":50,\"maxIdle\":10,\"minIdle\":0,\"maxWait\":10000,\"validationQuery\":\"\",\"testOnBorrow\":false,\"testOnReturn\":false,\"testWhileIdle\":false,\"timeBetweenEvictionRunsMillis\":-1,\"numTestsPerEvictionRun\":3,\"minEvictableIdleTimeMillis\":1800},\"useJaas\":false,\"fetchSize\":-1,\"identity\":\"1eef199f-cc14-a35f-4f49-d17f8b18cbd4\",\"privilegeDetailBeanList\":null}",
//             "connectionId": null,
//             "creator": "admin",
//             "createTime": "2024-04-04 23:05:00"
//         }
//     ]
// })

Mock.mock('/api/dataorigin/charset/select','post',{
    "code": 0,
    "message": "ok",
    "data": [
        {
            'name': '自动',
            'value': ''
        },
        {
            'name': 'gbk',
            'value': 'gbk'
        },
        {
            'name': 'utf8',
            'value': 'utf8'
        }
    ]
})

Mock.mock('/api/dataorigin/schema/select','post',{
    "code": 0,
    "message": "ok",
    "data": [
        {
            'name': 'public',
            'value': 'public'
        },
        {
            'name': 'bestv_ads',
            'value': 'bestv_ads'
        },
        {
            'name': 'bestv_dwd',
            'value': 'bestv_dwd'
        }
    ]
})