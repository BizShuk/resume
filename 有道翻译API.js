有道翻译API申请成功
API key： 1968023498
keyfrom： ArticleBreaker
创建时间： 2015-06-03
网站名称： ArticleBreaker
网站地址： http://stat.shuk.info
使用API key 时，请求频率限制为每小时1000次，超过限制会被封禁。
如果您的应用确实需要超过每小时1000次请求，请与 translate-service@corp.youdao.com 联系。 并提供您的应用的详细信息（名称、功能、网站地址、使用API的方式、API key、预计访问频率、是否商业行为、截屏等等） 以及该应用访问有道翻译API时所使用的服务器IP，审核通过后可放宽访问限制。


数据接口
http://fanyi.youdao.com/openapi.do?keyfrom=ArticleBreaker&key=1968023498&type=data&doctype=<doctype>&version=1.1&q=要翻译的文本
版本：1.1，请求方式：get，编码方式：utf-8
主要功能：中英互译，同时获得有道翻译结果和有道词典结果（可能没有）
参数说明：
　type - 返回结果的类型，固定为data
　doctype - 返回结果的数据格式，xml或json或jsonp
　version - 版本，当前最新版本为1.1
　q - 要翻译的文本，必须是UTF-8编码，字符长度不能超过200个字符，需要进行urlencode编码
　only - 可选参数，dict表示只获取词典数据，translate表示只获取翻译数据，默认为都获取
　注： 词典结果只支持中英互译，翻译结果支持英日韩法俄西到中文的翻译以及中文到英语的翻译
errorCode：
　0 - 正常
　20 - 要翻译的文本过长
　30 - 无法进行有效的翻译
　40 - 不支持的语言类型
　50 - 无效的key
　60 - 无词典结果，仅在获取词典结果生效

xml数据格式举例
	http://fanyi.youdao.com/openapi.do?keyfrom=ArticleBreaker&key=1968023498&type=data&doctype=xml&version=1.1&q=这里是有道翻译API

	<?xml version="1.0" encoding="UTF-8"?>
	<youdao-fanyi>
	    <errorCode>0</errorCode>
	    <!-- 有道翻译 -->
	    <query><![CDATA[这里是有道翻译API]]></query>
	    <translation>
	        <paragraph><![CDATA[Here is the youdao translation API]]></paragraph>
	    </translation>
	</youdao-fanyi>

json数据格式举例
http://fanyi.youdao.com/openapi.do?keyfrom=ArticleBreaker&key=1968023498&type=data&doctype=json&version=1.1&q=good

	{
	    "errorCode":0
	    "query":"good",
	    "translation":["好"], // 有道翻译
	    "basic":{ // 有道词典-基本词典
	        "phonetic":"gʊd"
	        "uk-phonetic":"gʊd" //英式发音
	        "us-phonetic":"ɡʊd" //美式发音
	        "explains":[
	            "好处",
	            "好的"
	            "好"
	        ]
	    },
	    "web":[ // 有道词典-网络释义
	        {
	            "key":"good",
	            "value":["良好","善","美好"]
	        },
	        {...}
	    ]
	}

jsonp数据格式举例
	http://fanyi.youdao.com/openapi.do?keyfrom=ArticleBreaker&key=1968023498&type=data&doctype=jsonp&callback=show&version=1.1&q=API
	
	show({
	    "errorCode":0
	    "query":"API",
	    "translation":["API"], // 有道翻译
	    "basic":{ // 有道词典-基本词典
	        "explains":[
	            "abbr. 应用程序界面（Application Program Interface）；..."
	        ]
	    },
	    "web":[ // 有道词典-网络释义
	        {
	            "key":"API",
	            "value":["应用程序接口(Application Programming Interface)","应用编程接口","应用程序编程接口","美国石油协会"]
	        },
	        {...}
	    ]
	});