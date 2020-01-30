const arr = [
    {
        "id": 1,
        "name": "北京",
        "father": 0,
        "key": "b",
        "abbreviation": "bj",
        "pinyin": "beijing",

        "postfix": "市"
    },
    {
        "id": 2,
        "name": "天津",
        "father": 0,
        "key": "t",
        "abbreviation": "tj",
        "pinyin": "tianjin",

        "postfix": "市"
    },
    {
        "id": 3,
        "name": "上海",
        "father": 0,
        "key": "s",
        "abbreviation": "sh",
        "pinyin": "shanghai",

        "postfix": "市"
    },
    {
        "id": 4,
        "name": "重庆",
        "father": 0,
        "key": "c",
        "abbreviation": "cq",
        "pinyin": "chongqing",

        "postfix": "市"
    },
    {
        "id": 5,
        "name": "河北",
        "father": 0,
        "key": "h",
        "abbreviation": "hb",
        "pinyin": "hebei",

        "postfix": "省"
    },
    {
        "id": 6,
        "name": "山西",
        "father": 0,
        "key": "s",
        "abbreviation": "sx",
        "pinyin": "shanxi",

        "postfix": "省"
    },
    {
        "id": 7,
        "name": "内蒙古",
        "father": 0,
        "key": "n",
        "abbreviation": "nmg",
        "pinyin": "neimenggu",

        "postfix": "自治区"
    },
    {
        "id": 8,
        "name": "辽宁",
        "father": 0,
        "key": "l",
        "abbreviation": "ln",
        "pinyin": "liaoning",

        "postfix": "省"
    },
    {
        "id": 9,
        "name": "吉林",
        "father": 0,
        "key": "j",
        "abbreviation": "jl",
        "pinyin": "jilin",

        "postfix": "省"
    },
    {
        "id": 10,
        "name": "黑龙江",
        "father": 0,
        "key": "h",
        "abbreviation": "hlj",
        "pinyin": "heilongjiang",

        "postfix": "省"
    },
    {
        "id": 11,
        "name": "江苏",
        "father": 0,
        "key": "j",
        "abbreviation": "js",
        "pinyin": "jiangsu",

        "postfix": "省"
    },
    {
        "id": 12,
        "name": "浙江",
        "father": 0,
        "key": "z",
        "abbreviation": "zj",
        "pinyin": "zhejiang",

        "postfix": "省"
    },
    {
        "id": 13,
        "name": "安徽",
        "father": 0,
        "key": "a",
        "abbreviation": "ah",
        "pinyin": "anhui",

        "postfix": "省"
    },
    {
        "id": 14,
        "name": "福建",
        "father": 0,
        "key": "f",
        "abbreviation": "fj",
        "pinyin": "fujian",

        "postfix": "省"
    },
    {
        "id": 15,
        "name": "江西",
        "father": 0,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jiangxi",

        "postfix": "省"
    },
    {
        "id": 16,
        "name": "山东",
        "father": 0,
        "key": "s",
        "abbreviation": "sd",
        "pinyin": "shandong",

        "postfix": "省"
    },
    {
        "id": 17,
        "name": "河南",
        "father": 0,
        "key": "h",
        "abbreviation": "hn",
        "pinyin": "henan",

        "postfix": "省"
    },
    {
        "id": 18,
        "name": "湖北",
        "father": 0,
        "key": "h",
        "abbreviation": "hb",
        "pinyin": "hubei",

        "postfix": "省"
    },
    {
        "id": 19,
        "name": "湖南",
        "father": 0,
        "key": "h",
        "abbreviation": "hn",
        "pinyin": "hunan",

        "postfix": "省"
    },
    {
        "id": 20,
        "name": "广东",
        "father": 0,
        "key": "g",
        "abbreviation": "gd",
        "pinyin": "guangdong",

        "postfix": "省"
    },
    {
        "id": 21,
        "name": "广西",
        "father": 0,
        "key": "g",
        "abbreviation": "gx",
        "pinyin": "guangxi",
        "": "壮族",
        "postfix": "自治区"
    },
    {
        "id": 22,
        "name": "海南",
        "father": 0,
        "key": "h",
        "abbreviation": "hn",
        "pinyin": "hainan",

        "postfix": "省"
    },
    {
        "id": 23,
        "name": "四川",
        "father": 0,
        "key": "s",
        "abbreviation": "sc",
        "pinyin": "sichuan",

        "postfix": "省"
    },
    {
        "id": 24,
        "name": "贵州",
        "father": 0,
        "key": "g",
        "abbreviation": "gz",
        "pinyin": "guizhou",

        "postfix": "省"
    },
    {
        "id": 25,
        "name": "云南",
        "father": 0,
        "key": "y",
        "abbreviation": "yn",
        "pinyin": "yunnan",

        "postfix": "省"
    },
    {
        "id": 26,
        "name": "西藏",
        "father": 0,
        "key": "x",
        "abbreviation": "xz",
        "pinyin": "xizang",

        "postfix": "自治区"
    },
    {
        "id": 27,
        "name": "陕西",
        "father": 0,
        "key": "s",
        "abbreviation": "sx",
        "pinyin": "shanxi",

        "postfix": "省"
    },
    {
        "id": 28,
        "name": "甘肃",
        "father": 0,
        "key": "g",
        "abbreviation": "gs",
        "pinyin": "gansu",

        "postfix": "省"
    },
    {
        "id": 29,
        "name": "青海",
        "father": 0,
        "key": "q",
        "abbreviation": "qh",
        "pinyin": "qinghai",

        "postfix": "省"
    },
    {
        "id": 30,
        "name": "宁夏",
        "father": 0,
        "key": "n",
        "abbreviation": "nx",
        "pinyin": "ningxia",
        "": "回族",
        "postfix": "自治区"
    },
    {
        "id": 31,
        "name": "新疆",
        "father": 0,
        "key": "x",
        "abbreviation": "xj",
        "pinyin": "xinjiang",
        "": "维吾尔",
        "postfix": "自治区"
    },
    {
        "id": 32,
        "name": "台湾",
        "father": 0,
        "key": "t",
        "abbreviation": "tw",
        "pinyin": "taiwan",

        "postfix": "省"
    },
    {
        "id": 33,
        "name": "香港",
        "father": 0,
        "key": "x",
        "abbreviation": "xg",
        "pinyin": "xianggang",

        "postfix": "特别行政区"
    },
    {
        "id": 34,
        "name": "澳门",
        "father": 0,
        "key": "a",
        "abbreviation": "am",
        "pinyin": "aomen",

        "postfix": "特别行政区"
    },
    {
        "id": 35,
        "name": "海外",
        "father": 0,
        "key": "h",
        "abbreviation": "hw",
        "pinyin": "haiwai",

        "postfix": ""
    },
    {
        "id": 36,
        "name": "东城",
        "father": 1,
        "key": "d",
        "abbreviation": "dc",
        "pinyin": "dongcheng",

        "postfix": "区"
    },
    {
        "id": 37,
        "name": "西城",
        "father": 1,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xicheng",

        "postfix": "区"
    },
    {
        "id": 40,
        "name": "朝阳",
        "father": 1,
        "key": "c",
        "abbreviation": "cy",
        "pinyin": "chaoyang",

        "postfix": "区"
    },
    {
        "id": 41,
        "name": "丰台",
        "father": 1,
        "key": "f",
        "abbreviation": "ft",
        "pinyin": "fengtai",

        "postfix": "区"
    },
    {
        "id": 42,
        "name": "石景山",
        "father": 1,
        "key": "s",
        "abbreviation": "sjs",
        "pinyin": "shijingshan",

        "postfix": "区"
    },
    {
        "id": 43,
        "name": "海淀",
        "father": 1,
        "key": "h",
        "abbreviation": "hd",
        "pinyin": "haidian",

        "postfix": "区"
    },
    {
        "id": 44,
        "name": "门头沟",
        "father": 1,
        "key": "m",
        "abbreviation": "mtg",
        "pinyin": "mentougou",

        "postfix": "区"
    },
    {
        "id": 45,
        "name": "房山",
        "father": 1,
        "key": "f",
        "abbreviation": "fs",
        "pinyin": "fangshan",

        "postfix": "区"
    },
    {
        "id": 46,
        "name": "通州",
        "father": 1,
        "key": "t",
        "abbreviation": "tz",
        "pinyin": "tongzhou",

        "postfix": "区"
    },
    {
        "id": 47,
        "name": "顺义",
        "father": 1,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "shunyi",

        "postfix": "区"
    },
    {
        "id": 48,
        "name": "昌平",
        "father": 1,
        "key": "c",
        "abbreviation": "cp",
        "pinyin": "changping",

        "postfix": "区"
    },
    {
        "id": 49,
        "name": "大兴",
        "father": 1,
        "key": "d",
        "abbreviation": "dx",
        "pinyin": "daxing",

        "postfix": "区"
    },
    {
        "id": 50,
        "name": "怀柔",
        "father": 1,
        "key": "h",
        "abbreviation": "hr",
        "pinyin": "huairou",

        "postfix": "区"
    },
    {
        "id": 51,
        "name": "平谷",
        "father": 1,
        "key": "p",
        "abbreviation": "pg",
        "pinyin": "pinggu",

        "postfix": "区"
    },
    {
        "id": 52,
        "name": "密云",
        "father": 1,
        "key": "m",
        "abbreviation": "my",
        "pinyin": "miyun",

        "postfix": "区"
    },
    {
        "id": 53,
        "name": "延庆",
        "father": 1,
        "key": "y",
        "abbreviation": "yq",
        "pinyin": "yanqing",

        "postfix": "区"
    },
    {
        "id": 54,
        "name": "和平",
        "father": 2,
        "key": "h",
        "abbreviation": "hp",
        "pinyin": "heping",

        "postfix": "区"
    },
    {
        "id": 55,
        "name": "河东",
        "father": 2,
        "key": "h",
        "abbreviation": "hd",
        "pinyin": "hedong",

        "postfix": "区"
    },
    {
        "id": 56,
        "name": "河西",
        "father": 2,
        "key": "h",
        "abbreviation": "hx",
        "pinyin": "hexi",

        "postfix": "区"
    },
    {
        "id": 57,
        "name": "南开",
        "father": 2,
        "key": "n",
        "abbreviation": "nk",
        "pinyin": "nankai",

        "postfix": "区"
    },
    {
        "id": 58,
        "name": "河北",
        "father": 2,
        "key": "h",
        "abbreviation": "hb",
        "pinyin": "hebei",

        "postfix": "区"
    },
    {
        "id": 59,
        "name": "红桥",
        "father": 2,
        "key": "h",
        "abbreviation": "hq",
        "pinyin": "hongqiao",

        "postfix": "区"
    },
    {
        "id": 60,
        "name": "东丽",
        "father": 2,
        "key": "d",
        "abbreviation": "dl",
        "pinyin": "dongli",

        "postfix": "区"
    },
    {
        "id": 61,
        "name": "西青",
        "father": 2,
        "key": "x",
        "abbreviation": "xq",
        "pinyin": "xiqing",

        "postfix": "区"
    },
    {
        "id": 62,
        "name": "津南",
        "father": 2,
        "key": "j",
        "abbreviation": "jn",
        "pinyin": "jinnan",

        "postfix": "区"
    },
    {
        "id": 63,
        "name": "北辰",
        "father": 2,
        "key": "b",
        "abbreviation": "bc",
        "pinyin": "beichen",

        "postfix": "区"
    },
    {
        "id": 64,
        "name": "武清",
        "father": 2,
        "key": "w",
        "abbreviation": "wq",
        "pinyin": "wuqing",

        "postfix": "区"
    },
    {
        "id": 65,
        "name": "宝坻",
        "father": 2,
        "key": "b",
        "abbreviation": "bc",
        "pinyin": "baochi",

        "postfix": "区"
    },
    {
        "id": 66,
        "name": "滨海新区",
        "father": 2,
        "key": "b",
        "abbreviation": "bhxq",
        "pinyin": "binhaixinqu",

        "postfix": ""
    },
    {
        "id": 67,
        "name": "宁河",
        "father": 2,
        "key": "n",
        "abbreviation": "nh",
        "pinyin": "ninghe",

        "postfix": "区"
    },
    {
        "id": 68,
        "name": "蓟州",
        "father": 2,
        "key": "j",
        "abbreviation": "jz",
        "pinyin": "jizhou",

        "postfix": "区"
    },
    {
        "id": 69,
        "name": "静海",
        "father": 2,
        "key": "j",
        "abbreviation": "jh",
        "pinyin": "jinghai",

        "postfix": "区"
    },
    {
        "id": 70,
        "name": "黄浦",
        "father": 3,
        "key": "h",
        "abbreviation": "hp",
        "pinyin": "huangpu",

        "postfix": "区"
    },
    {
        "id": 71,
        "name": "徐汇",
        "father": 3,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xuhui",

        "postfix": "区"
    },
    {
        "id": 72,
        "name": "长宁",
        "father": 3,
        "key": "c",
        "abbreviation": "cn",
        "pinyin": "changning",

        "postfix": "区"
    },
    {
        "id": 73,
        "name": "静安",
        "father": 3,
        "key": "j",
        "abbreviation": "ja",
        "pinyin": "jingan",

        "postfix": "区"
    },
    {
        "id": 74,
        "name": "普陀",
        "father": 3,
        "key": "p",
        "abbreviation": "pt",
        "pinyin": "putuo",

        "postfix": "区"
    },
    {
        "id": 76,
        "name": "虹口",
        "father": 3,
        "key": "h",
        "abbreviation": "hk",
        "pinyin": "hongkou",

        "postfix": "区"
    },
    {
        "id": 77,
        "name": "杨浦",
        "father": 3,
        "key": "y",
        "abbreviation": "yp",
        "pinyin": "yangpu",

        "postfix": "区"
    },
    {
        "id": 78,
        "name": "闵行",
        "father": 3,
        "key": "m",
        "abbreviation": "mx",
        "pinyin": "minxing",

        "postfix": "区"
    },
    {
        "id": 79,
        "name": "宝山",
        "father": 3,
        "key": "b",
        "abbreviation": "bs",
        "pinyin": "baoshan",

        "postfix": "区"
    },
    {
        "id": 80,
        "name": "嘉定",
        "father": 3,
        "key": "j",
        "abbreviation": "jd",
        "pinyin": "jiading",

        "postfix": "区"
    },
    {
        "id": 81,
        "name": "浦东新区",
        "father": 3,
        "key": "p",
        "abbreviation": "pdxq",
        "pinyin": "pudongxinqu",

        "postfix": ""
    },
    {
        "id": 82,
        "name": "金山",
        "father": 3,
        "key": "j",
        "abbreviation": "js",
        "pinyin": "jinshan",

        "postfix": "区"
    },
    {
        "id": 83,
        "name": "松江",
        "father": 3,
        "key": "s",
        "abbreviation": "sj",
        "pinyin": "songjiang",

        "postfix": "区"
    },
    {
        "id": 84,
        "name": "青浦",
        "father": 3,
        "key": "q",
        "abbreviation": "qp",
        "pinyin": "qingpu",

        "postfix": "区"
    },
    {
        "id": 85,
        "name": "奉贤",
        "father": 3,
        "key": "f",
        "abbreviation": "fx",
        "pinyin": "fengxian",

        "postfix": "区"
    },
    {
        "id": 86,
        "name": "崇明",
        "father": 3,
        "key": "c",
        "abbreviation": "cm",
        "pinyin": "chongming",

        "postfix": "区"
    },
    {
        "id": 87,
        "name": "万州",
        "father": 4,
        "key": "w",
        "abbreviation": "wz",
        "pinyin": "wanzhou",

        "postfix": "区"
    },
    {
        "id": 88,
        "name": "涪陵",
        "father": 4,
        "key": "f",
        "abbreviation": "fl",
        "pinyin": "fuling",

        "postfix": "区"
    },
    {
        "id": 89,
        "name": "渝中",
        "father": 4,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yuzhong",

        "postfix": "区"
    },
    {
        "id": 90,
        "name": "大渡口",
        "father": 4,
        "key": "d",
        "abbreviation": "ddk",
        "pinyin": "dadukou",

        "postfix": "区"
    },
    {
        "id": 91,
        "name": "江北",
        "father": 4,
        "key": "j",
        "abbreviation": "jb",
        "pinyin": "jiangbei",

        "postfix": "区"
    },
    {
        "id": 92,
        "name": "沙坪坝",
        "father": 4,
        "key": "s",
        "abbreviation": "spb",
        "pinyin": "shapingba",

        "postfix": "区"
    },
    {
        "id": 93,
        "name": "九龙坡",
        "father": 4,
        "key": "j",
        "abbreviation": "jlp",
        "pinyin": "jiulongpo",

        "postfix": "区"
    },
    {
        "id": 94,
        "name": "南岸",
        "father": 4,
        "key": "n",
        "abbreviation": "na",
        "pinyin": "nanan",

        "postfix": "区"
    },
    {
        "id": 95,
        "name": "北碚",
        "father": 4,
        "key": "b",
        "abbreviation": "bb",
        "pinyin": "beibei",

        "postfix": "区"
    },
    {
        "id": 96,
        "name": "綦江",
        "father": 4,
        "key": "q",
        "abbreviation": "qj",
        "pinyin": "qijiang",

        "postfix": "区"
    },
    {
        "id": 97,
        "name": "大足",
        "father": 4,
        "key": "d",
        "abbreviation": "dz",
        "pinyin": "dazu",

        "postfix": "区"
    },
    {
        "id": 98,
        "name": "渝北",
        "father": 4,
        "key": "y",
        "abbreviation": "yb",
        "pinyin": "yubei",

        "postfix": "区"
    },
    {
        "id": 99,
        "name": "巴南",
        "father": 4,
        "key": "b",
        "abbreviation": "bn",
        "pinyin": "banan",

        "postfix": "区"
    },
    {
        "id": 100,
        "name": "黔江",
        "father": 4,
        "key": "q",
        "abbreviation": "qj",
        "pinyin": "qianjiang",

        "postfix": "区"
    },
    {
        "id": 101,
        "name": "长寿",
        "father": 4,
        "key": "c",
        "abbreviation": "cs",
        "pinyin": "changshou",

        "postfix": "区"
    },
    {
        "id": 102,
        "name": "江津",
        "father": 4,
        "key": "j",
        "abbreviation": "jj",
        "pinyin": "jiangjin",

        "postfix": "区"
    },
    {
        "id": 103,
        "name": "合川",
        "father": 4,
        "key": "h",
        "abbreviation": "hc",
        "pinyin": "hechuan",

        "postfix": "区"
    },
    {
        "id": 104,
        "name": "永川",
        "father": 4,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yongchuan",

        "postfix": "区"
    },
    {
        "id": 105,
        "name": "南川",
        "father": 4,
        "key": "n",
        "abbreviation": "nc",
        "pinyin": "nanchuan",

        "postfix": "区"
    },
    {
        "id": 106,
        "name": "潼南",
        "father": 4,
        "key": "t",
        "abbreviation": "tn",
        "pinyin": "tongnan",

        "postfix": "区"
    },
    {
        "id": 107,
        "name": "铜梁",
        "father": 4,
        "key": "t",
        "abbreviation": "tl",
        "pinyin": "tongliang",

        "postfix": "区"
    },
    {
        "id": 108,
        "name": "荣昌",
        "father": 4,
        "key": "r",
        "abbreviation": "rc",
        "pinyin": "rongchang",

        "postfix": "区"
    },
    {
        "id": 109,
        "name": "璧山",
        "father": 4,
        "key": "b",
        "abbreviation": "bs",
        "pinyin": "bishan",

        "postfix": "区"
    },
    {
        "id": 110,
        "name": "梁平",
        "father": 4,
        "key": "l",
        "abbreviation": "lp",
        "pinyin": "liangping",

        "postfix": "区"
    },
    {
        "id": 111,
        "name": "城口",
        "father": 4,
        "key": "c",
        "abbreviation": "ck",
        "pinyin": "chengkou",

        "postfix": "县"
    },
    {
        "id": 112,
        "name": "丰都",
        "father": 4,
        "key": "f",
        "abbreviation": "fd",
        "pinyin": "fengdu",

        "postfix": "县"
    },
    {
        "id": 113,
        "name": "垫江",
        "father": 4,
        "key": "d",
        "abbreviation": "dj",
        "pinyin": "dianjiang",

        "postfix": "县"
    },
    {
        "id": 114,
        "name": "武隆",
        "father": 4,
        "key": "w",
        "abbreviation": "wl",
        "pinyin": "wulong",

        "postfix": "区"
    },
    {
        "id": 115,
        "name": "忠县",
        "father": 4,
        "key": "z",
        "abbreviation": "zx",
        "pinyin": "zhongxian",

        "postfix": ""
    },
    {
        "id": 116,
        "name": "开州",
        "father": 4,
        "key": "k",
        "abbreviation": "kz",
        "pinyin": "kaizhou",

        "postfix": "区"
    },
    {
        "id": 117,
        "name": "云阳",
        "father": 4,
        "key": "y",
        "abbreviation": "yy",
        "pinyin": "yunyang",

        "postfix": "县"
    },
    {
        "id": 118,
        "name": "奉节",
        "father": 4,
        "key": "f",
        "abbreviation": "fj",
        "pinyin": "fengjie",

        "postfix": "县"
    },
    {
        "id": 119,
        "name": "巫山",
        "father": 4,
        "key": "w",
        "abbreviation": "ws",
        "pinyin": "wushan",

        "postfix": "县"
    },
    {
        "id": 120,
        "name": "巫溪",
        "father": 4,
        "key": "w",
        "abbreviation": "wx",
        "pinyin": "wuxi",

        "postfix": "县"
    },
    {
        "id": 121,
        "name": "石柱",
        "father": 4,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "shizhu",
        "": "土家族",
        "postfix": "自治县"
    },
    {
        "id": 122,
        "name": "秀山",
        "father": 4,
        "key": "x",
        "abbreviation": "xs",
        "pinyin": "xiushan",
        "": "土家族苗族",
        "postfix": "自治县"
    },
    {
        "id": 123,
        "name": "酉阳",
        "father": 4,
        "key": "y",
        "abbreviation": "yy",
        "pinyin": "youyang",
        "": "土家族苗族",
        "postfix": "自治县"
    },
    {
        "id": 124,
        "name": "彭水",
        "father": 4,
        "key": "p",
        "abbreviation": "ps",
        "pinyin": "pengshui",
        "": "苗族土家族",
        "postfix": "自治县"
    },
    {
        "id": 125,
        "name": "石家庄",
        "father": 5,
        "key": "s",
        "abbreviation": "sjz",
        "pinyin": "shijiazhuang",

        "postfix": "市"
    },
    {
        "id": 126,
        "name": "唐山",
        "father": 5,
        "key": "t",
        "abbreviation": "ts",
        "pinyin": "tangshan",

        "postfix": "市"
    },
    {
        "id": 127,
        "name": "秦皇岛",
        "father": 5,
        "key": "q",
        "abbreviation": "qhd",
        "pinyin": "qinhuangdao",

        "postfix": "市"
    },
    {
        "id": 128,
        "name": "邯郸",
        "father": 5,
        "key": "h",
        "abbreviation": "hd",
        "pinyin": "handan",

        "postfix": "市"
    },
    {
        "id": 129,
        "name": "邢台",
        "father": 5,
        "key": "x",
        "abbreviation": "xt",
        "pinyin": "xingtai",

        "postfix": "市"
    },
    {
        "id": 130,
        "name": "保定",
        "father": 5,
        "key": "b",
        "abbreviation": "bd",
        "pinyin": "baoding",

        "postfix": "市"
    },
    {
        "id": 131,
        "name": "张家口",
        "father": 5,
        "key": "z",
        "abbreviation": "zjk",
        "pinyin": "zhangjiakou",

        "postfix": "市"
    },
    {
        "id": 132,
        "name": "承德",
        "father": 5,
        "key": "c",
        "abbreviation": "cd",
        "pinyin": "chengde",

        "postfix": "市"
    },
    {
        "id": 133,
        "name": "沧州",
        "father": 5,
        "key": "c",
        "abbreviation": "cz",
        "pinyin": "cangzhou",

        "postfix": "市"
    },
    {
        "id": 134,
        "name": "廊坊",
        "father": 5,
        "key": "l",
        "abbreviation": "lf",
        "pinyin": "langfang",

        "postfix": "市"
    },
    {
        "id": 135,
        "name": "衡水",
        "father": 5,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "hengshui",

        "postfix": "市"
    },
    {
        "id": 136,
        "name": "太原",
        "father": 6,
        "key": "t",
        "abbreviation": "ty",
        "pinyin": "taiyuan",

        "postfix": "市"
    },
    {
        "id": 137,
        "name": "大同",
        "father": 6,
        "key": "d",
        "abbreviation": "dt",
        "pinyin": "datong",

        "postfix": "市"
    },
    {
        "id": 138,
        "name": "阳泉",
        "father": 6,
        "key": "y",
        "abbreviation": "yq",
        "pinyin": "yangquan",

        "postfix": "市"
    },
    {
        "id": 139,
        "name": "长治",
        "father": 6,
        "key": "c",
        "abbreviation": "cz",
        "pinyin": "changzhi",

        "postfix": "市"
    },
    {
        "id": 140,
        "name": "晋城",
        "father": 6,
        "key": "j",
        "abbreviation": "jc",
        "pinyin": "jincheng",

        "postfix": "市"
    },
    {
        "id": 141,
        "name": "朔州",
        "father": 6,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "shuozhou",

        "postfix": "市"
    },
    {
        "id": 142,
        "name": "晋中",
        "father": 6,
        "key": "j",
        "abbreviation": "jz",
        "pinyin": "jinzhong",

        "postfix": "市"
    },
    {
        "id": 143,
        "name": "运城",
        "father": 6,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yuncheng",

        "postfix": "市"
    },
    {
        "id": 144,
        "name": "忻州",
        "father": 6,
        "key": "x",
        "abbreviation": "xz",
        "pinyin": "xinzhou",

        "postfix": "市"
    },
    {
        "id": 145,
        "name": "临汾",
        "father": 6,
        "key": "l",
        "abbreviation": "lf",
        "pinyin": "linfen",

        "postfix": "市"
    },
    {
        "id": 146,
        "name": "吕梁",
        "father": 6,
        "key": "l",
        "abbreviation": "ll",
        "pinyin": "lvliang",

        "postfix": "市"
    },
    {
        "id": 147,
        "name": "呼和浩特",
        "father": 7,
        "key": "h",
        "abbreviation": "hhht",
        "pinyin": "huhehaote",

        "postfix": "市"
    },
    {
        "id": 148,
        "name": "包头",
        "father": 7,
        "key": "b",
        "abbreviation": "bt",
        "pinyin": "baotou",

        "postfix": "市"
    },
    {
        "id": 149,
        "name": "乌海",
        "father": 7,
        "key": "w",
        "abbreviation": "wh",
        "pinyin": "wuhai",

        "postfix": "市"
    },
    {
        "id": 150,
        "name": "赤峰",
        "father": 7,
        "key": "c",
        "abbreviation": "cf",
        "pinyin": "chifeng",

        "postfix": "市"
    },
    {
        "id": 151,
        "name": "通辽",
        "father": 7,
        "key": "t",
        "abbreviation": "tl",
        "pinyin": "tongliao",

        "postfix": "市"
    },
    {
        "id": 152,
        "name": "鄂尔多斯",
        "father": 7,
        "key": "e",
        "abbreviation": "eeds",
        "pinyin": "eerduosi",

        "postfix": "市"
    },
    {
        "id": 153,
        "name": "呼伦贝尔",
        "father": 7,
        "key": "h",
        "abbreviation": "hlbe",
        "pinyin": "hulunbeier",

        "postfix": "市"
    },
    {
        "id": 154,
        "name": "巴彦淖尔",
        "father": 7,
        "key": "b",
        "abbreviation": "byne",
        "pinyin": "bayannaoer",

        "postfix": "市"
    },
    {
        "id": 155,
        "name": "乌兰察布",
        "father": 7,
        "key": "w",
        "abbreviation": "wlcb",
        "pinyin": "wulanchabu",

        "postfix": "市"
    },
    {
        "id": 156,
        "name": "兴安",
        "father": 7,
        "key": "x",
        "abbreviation": "xa",
        "pinyin": "xingan",

        "postfix": "盟"
    },
    {
        "id": 157,
        "name": "锡林郭勒",
        "father": 7,
        "key": "x",
        "abbreviation": "xlgl",
        "pinyin": "xilinguole",

        "postfix": "盟"
    },
    {
        "id": 158,
        "name": "阿拉善",
        "father": 7,
        "key": "a",
        "abbreviation": "als",
        "pinyin": "alashan",

        "postfix": "盟"
    },
    {
        "id": 159,
        "name": "沈阳",
        "father": 8,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "shenyang",

        "postfix": "市"
    },
    {
        "id": 160,
        "name": "大连",
        "father": 8,
        "key": "d",
        "abbreviation": "dl",
        "pinyin": "dalian",

        "postfix": "市"
    },
    {
        "id": 161,
        "name": "鞍山",
        "father": 8,
        "key": "a",
        "abbreviation": "as",
        "pinyin": "anshan",

        "postfix": "市"
    },
    {
        "id": 162,
        "name": "抚顺",
        "father": 8,
        "key": "f",
        "abbreviation": "fs",
        "pinyin": "fushun",

        "postfix": "市"
    },
    {
        "id": 163,
        "name": "本溪",
        "father": 8,
        "key": "b",
        "abbreviation": "bx",
        "pinyin": "benxi",

        "postfix": "市"
    },
    {
        "id": 164,
        "name": "丹东",
        "father": 8,
        "key": "d",
        "abbreviation": "dd",
        "pinyin": "dandong",

        "postfix": "市"
    },
    {
        "id": 165,
        "name": "锦州",
        "father": 8,
        "key": "j",
        "abbreviation": "jz",
        "pinyin": "jinzhou",

        "postfix": "市"
    },
    {
        "id": 166,
        "name": "营口",
        "father": 8,
        "key": "y",
        "abbreviation": "yk",
        "pinyin": "yingkou",

        "postfix": "市"
    },
    {
        "id": 167,
        "name": "阜新",
        "father": 8,
        "key": "f",
        "abbreviation": "fx",
        "pinyin": "fuxin",

        "postfix": "市"
    },
    {
        "id": 168,
        "name": "辽阳",
        "father": 8,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "liaoyang",

        "postfix": "市"
    },
    {
        "id": 169,
        "name": "盘锦",
        "father": 8,
        "key": "p",
        "abbreviation": "pj",
        "pinyin": "panjin",

        "postfix": "市"
    },
    {
        "id": 170,
        "name": "铁岭",
        "father": 8,
        "key": "t",
        "abbreviation": "tl",
        "pinyin": "tieling",

        "postfix": "市"
    },
    {
        "id": 171,
        "name": "朝阳",
        "father": 8,
        "key": "c",
        "abbreviation": "cy",
        "pinyin": "chaoyang",

        "postfix": "市"
    },
    {
        "id": 172,
        "name": "葫芦岛",
        "father": 8,
        "key": "h",
        "abbreviation": "hld",
        "pinyin": "huludao",

        "postfix": "市"
    },
    {
        "id": 173,
        "name": "长春",
        "father": 9,
        "key": "c",
        "abbreviation": "cc",
        "pinyin": "changchun",

        "postfix": "市"
    },
    {
        "id": 174,
        "name": "吉林",
        "father": 9,
        "key": "j",
        "abbreviation": "jl",
        "pinyin": "jilin",

        "postfix": "市"
    },
    {
        "id": 175,
        "name": "四平",
        "father": 9,
        "key": "s",
        "abbreviation": "sp",
        "pinyin": "siping",

        "postfix": "市"
    },
    {
        "id": 176,
        "name": "辽源",
        "father": 9,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "liaoyuan",

        "postfix": "市"
    },
    {
        "id": 177,
        "name": "通化",
        "father": 9,
        "key": "t",
        "abbreviation": "th",
        "pinyin": "tonghua",

        "postfix": "市"
    },
    {
        "id": 178,
        "name": "白山",
        "father": 9,
        "key": "b",
        "abbreviation": "bs",
        "pinyin": "baishan",

        "postfix": "市"
    },
    {
        "id": 179,
        "name": "松原",
        "father": 9,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "songyuan",

        "postfix": "市"
    },
    {
        "id": 180,
        "name": "白城",
        "father": 9,
        "key": "b",
        "abbreviation": "bc",
        "pinyin": "baicheng",

        "postfix": "市"
    },
    {
        "id": 181,
        "name": "延边",
        "father": 9,
        "key": "y",
        "abbreviation": "yb",
        "pinyin": "yanbian",
        "": "朝鲜族",
        "postfix": "自治州"
    },
    {
        "id": 182,
        "name": "哈尔滨",
        "father": 10,
        "key": "h",
        "abbreviation": "heb",
        "pinyin": "haerbin",

        "postfix": "市"
    },
    {
        "id": 183,
        "name": "齐齐哈尔",
        "father": 10,
        "key": "q",
        "abbreviation": "qqhe",
        "pinyin": "qiqihaer",

        "postfix": "市"
    },
    {
        "id": 184,
        "name": "鸡西",
        "father": 10,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jixi",

        "postfix": "市"
    },
    {
        "id": 185,
        "name": "鹤岗",
        "father": 10,
        "key": "h",
        "abbreviation": "hg",
        "pinyin": "hegang",

        "postfix": "市"
    },
    {
        "id": 186,
        "name": "双鸭山",
        "father": 10,
        "key": "s",
        "abbreviation": "sys",
        "pinyin": "shuangyashan",

        "postfix": "市"
    },
    {
        "id": 187,
        "name": "大庆",
        "father": 10,
        "key": "d",
        "abbreviation": "dq",
        "pinyin": "daqing",

        "postfix": "市"
    },
    {
        "id": 188,
        "name": "伊春",
        "father": 10,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yichun",

        "postfix": "市"
    },
    {
        "id": 189,
        "name": "佳木斯",
        "father": 10,
        "key": "j",
        "abbreviation": "jms",
        "pinyin": "jiamusi",

        "postfix": "市"
    },
    {
        "id": 190,
        "name": "七台河",
        "father": 10,
        "key": "q",
        "abbreviation": "qth",
        "pinyin": "qitaihe",

        "postfix": "市"
    },
    {
        "id": 191,
        "name": "牡丹江",
        "father": 10,
        "key": "m",
        "abbreviation": "mdj",
        "pinyin": "mudanjiang",

        "postfix": "市"
    },
    {
        "id": 192,
        "name": "黑河",
        "father": 10,
        "key": "h",
        "abbreviation": "hh",
        "pinyin": "heihe",

        "postfix": "市"
    },
    {
        "id": 193,
        "name": "绥化",
        "father": 10,
        "key": "s",
        "abbreviation": "sh",
        "pinyin": "suihua",

        "postfix": "市"
    },
    {
        "id": 194,
        "name": "大兴安岭",
        "father": 10,
        "key": "d",
        "abbreviation": "dxal",
        "pinyin": "daxinganling",

        "postfix": "地区"
    },
    {
        "id": 195,
        "name": "南京",
        "father": 11,
        "key": "n",
        "abbreviation": "nj",
        "pinyin": "nanjing",

        "postfix": "市"
    },
    {
        "id": 196,
        "name": "无锡",
        "father": 11,
        "key": "w",
        "abbreviation": "wx",
        "pinyin": "wuxi",

        "postfix": "市"
    },
    {
        "id": 197,
        "name": "徐州",
        "father": 11,
        "key": "x",
        "abbreviation": "xz",
        "pinyin": "xuzhou",

        "postfix": "市"
    },
    {
        "id": 198,
        "name": "常州",
        "father": 11,
        "key": "c",
        "abbreviation": "cz",
        "pinyin": "changzhou",

        "postfix": "市"
    },
    {
        "id": 199,
        "name": "苏州",
        "father": 11,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "suzhou",

        "postfix": "市"
    },
    {
        "id": 200,
        "name": "南通",
        "father": 11,
        "key": "n",
        "abbreviation": "nt",
        "pinyin": "nantong",

        "postfix": "市"
    },
    {
        "id": 201,
        "name": "连云港",
        "father": 11,
        "key": "l",
        "abbreviation": "lyg",
        "pinyin": "lianyungang",

        "postfix": "市"
    },
    {
        "id": 202,
        "name": "淮安",
        "father": 11,
        "key": "h",
        "abbreviation": "ha",
        "pinyin": "huaian",

        "postfix": "市"
    },
    {
        "id": 203,
        "name": "盐城",
        "father": 11,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yancheng",

        "postfix": "市"
    },
    {
        "id": 204,
        "name": "扬州",
        "father": 11,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yangzhou",

        "postfix": "市"
    },
    {
        "id": 205,
        "name": "镇江",
        "father": 11,
        "key": "z",
        "abbreviation": "zj",
        "pinyin": "zhenjiang",

        "postfix": "市"
    },
    {
        "id": 206,
        "name": "泰州",
        "father": 11,
        "key": "t",
        "abbreviation": "tz",
        "pinyin": "taizhou",

        "postfix": "市"
    },
    {
        "id": 207,
        "name": "宿迁",
        "father": 11,
        "key": "s",
        "abbreviation": "sq",
        "pinyin": "suqian",

        "postfix": "市"
    },
    {
        "id": 208,
        "name": "杭州",
        "father": 12,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "hangzhou",

        "postfix": "市"
    },
    {
        "id": 209,
        "name": "宁波",
        "father": 12,
        "key": "n",
        "abbreviation": "nb",
        "pinyin": "ningbo",

        "postfix": "市"
    },
    {
        "id": 210,
        "name": "温州",
        "father": 12,
        "key": "w",
        "abbreviation": "wz",
        "pinyin": "wenzhou",

        "postfix": "市"
    },
    {
        "id": 211,
        "name": "嘉兴",
        "father": 12,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jiaxing",

        "postfix": "市"
    },
    {
        "id": 212,
        "name": "湖州",
        "father": 12,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "huzhou",

        "postfix": "市"
    },
    {
        "id": 213,
        "name": "绍兴",
        "father": 12,
        "key": "s",
        "abbreviation": "sx",
        "pinyin": "shaoxing",

        "postfix": "市"
    },
    {
        "id": 214,
        "name": "金华",
        "father": 12,
        "key": "j",
        "abbreviation": "jh",
        "pinyin": "jinhua",

        "postfix": "市"
    },
    {
        "id": 215,
        "name": "衢州",
        "father": 12,
        "key": "q",
        "abbreviation": "qz",
        "pinyin": "quzhou",

        "postfix": "市"
    },
    {
        "id": 216,
        "name": "舟山",
        "father": 12,
        "key": "z",
        "abbreviation": "zs",
        "pinyin": "zhoushan",

        "postfix": "市"
    },
    {
        "id": 217,
        "name": "台州",
        "father": 12,
        "key": "t",
        "abbreviation": "tz",
        "pinyin": "taizhou",

        "postfix": "市"
    },
    {
        "id": 218,
        "name": "丽水",
        "father": 12,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lishui",

        "postfix": "市"
    },
    {
        "id": 219,
        "name": "合肥",
        "father": 13,
        "key": "h",
        "abbreviation": "hf",
        "pinyin": "hefei",

        "postfix": "市"
    },
    {
        "id": 220,
        "name": "芜湖",
        "father": 13,
        "key": "w",
        "abbreviation": "wh",
        "pinyin": "wuhu",

        "postfix": "市"
    },
    {
        "id": 221,
        "name": "蚌埠",
        "father": 13,
        "key": "b",
        "abbreviation": "bb",
        "pinyin": "bengbu",

        "postfix": "市"
    },
    {
        "id": 222,
        "name": "淮南",
        "father": 13,
        "key": "h",
        "abbreviation": "hn",
        "pinyin": "huainan",

        "postfix": "市"
    },
    {
        "id": 223,
        "name": "马鞍山",
        "father": 13,
        "key": "m",
        "abbreviation": "mas",
        "pinyin": "maanshan",

        "postfix": "市"
    },
    {
        "id": 224,
        "name": "淮北",
        "father": 13,
        "key": "h",
        "abbreviation": "hb",
        "pinyin": "huaibei",

        "postfix": "市"
    },
    {
        "id": 225,
        "name": "铜陵",
        "father": 13,
        "key": "t",
        "abbreviation": "tl",
        "pinyin": "tongling",

        "postfix": "市"
    },
    {
        "id": 226,
        "name": "安庆",
        "father": 13,
        "key": "a",
        "abbreviation": "aq",
        "pinyin": "anqing",

        "postfix": "市"
    },
    {
        "id": 227,
        "name": "黄山",
        "father": 13,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "huangshan",

        "postfix": "市"
    },
    {
        "id": 228,
        "name": "滁州",
        "father": 13,
        "key": "c",
        "abbreviation": "cz",
        "pinyin": "chuzhou",

        "postfix": "市"
    },
    {
        "id": 229,
        "name": "阜阳",
        "father": 13,
        "key": "f",
        "abbreviation": "fy",
        "pinyin": "fuyang",

        "postfix": "市"
    },
    {
        "id": 230,
        "name": "宿州",
        "father": 13,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "suzhou",

        "postfix": "市"
    },
    {
        "id": 231,
        "name": "六安",
        "father": 13,
        "key": "l",
        "abbreviation": "la",
        "pinyin": "liuan",

        "postfix": "市"
    },
    {
        "id": 232,
        "name": "亳州",
        "father": 13,
        "key": "b",
        "abbreviation": "bz",
        "pinyin": "bozhou",

        "postfix": "市"
    },
    {
        "id": 233,
        "name": "池州",
        "father": 13,
        "key": "c",
        "abbreviation": "cz",
        "pinyin": "chizhou",

        "postfix": "市"
    },
    {
        "id": 234,
        "name": "宣城",
        "father": 13,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xuancheng",

        "postfix": "市"
    },
    {
        "id": 235,
        "name": "福州",
        "father": 14,
        "key": "f",
        "abbreviation": "fz",
        "pinyin": "fuzhou",

        "postfix": "市"
    },
    {
        "id": 236,
        "name": "厦门",
        "father": 14,
        "key": "x",
        "abbreviation": "xm",
        "pinyin": "xiamen",

        "postfix": "市"
    },
    {
        "id": 237,
        "name": "莆田",
        "father": 14,
        "key": "p",
        "abbreviation": "pt",
        "pinyin": "putian",

        "postfix": "市"
    },
    {
        "id": 238,
        "name": "三明",
        "father": 14,
        "key": "s",
        "abbreviation": "sm",
        "pinyin": "sanming",

        "postfix": "市"
    },
    {
        "id": 239,
        "name": "泉州",
        "father": 14,
        "key": "q",
        "abbreviation": "qz",
        "pinyin": "quanzhou",

        "postfix": "市"
    },
    {
        "id": 240,
        "name": "漳州",
        "father": 14,
        "key": "z",
        "abbreviation": "zz",
        "pinyin": "zhangzhou",

        "postfix": "市"
    },
    {
        "id": 241,
        "name": "南平",
        "father": 14,
        "key": "n",
        "abbreviation": "np",
        "pinyin": "nanping",

        "postfix": "市"
    },
    {
        "id": 242,
        "name": "龙岩",
        "father": 14,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "longyan",

        "postfix": "市"
    },
    {
        "id": 243,
        "name": "宁德",
        "father": 14,
        "key": "n",
        "abbreviation": "nd",
        "pinyin": "ningde",

        "postfix": "市"
    },
    {
        "id": 244,
        "name": "南昌",
        "father": 15,
        "key": "n",
        "abbreviation": "nc",
        "pinyin": "nanchang",

        "postfix": "市"
    },
    {
        "id": 245,
        "name": "景德镇",
        "father": 15,
        "key": "j",
        "abbreviation": "jdz",
        "pinyin": "jingdezhen",

        "postfix": "市"
    },
    {
        "id": 246,
        "name": "萍乡",
        "father": 15,
        "key": "p",
        "abbreviation": "px",
        "pinyin": "pingxiang",

        "postfix": "市"
    },
    {
        "id": 247,
        "name": "九江",
        "father": 15,
        "key": "j",
        "abbreviation": "jj",
        "pinyin": "jiujiang",

        "postfix": "市"
    },
    {
        "id": 248,
        "name": "新余",
        "father": 15,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xinyu",

        "postfix": "市"
    },
    {
        "id": 249,
        "name": "鹰潭",
        "father": 15,
        "key": "y",
        "abbreviation": "yt",
        "pinyin": "yingtan",

        "postfix": "市"
    },
    {
        "id": 250,
        "name": "赣州",
        "father": 15,
        "key": "g",
        "abbreviation": "gz",
        "pinyin": "ganzhou",

        "postfix": "市"
    },
    {
        "id": 251,
        "name": "吉安",
        "father": 15,
        "key": "j",
        "abbreviation": "ja",
        "pinyin": "jian",

        "postfix": "市"
    },
    {
        "id": 252,
        "name": "宜春",
        "father": 15,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yichun",

        "postfix": "市"
    },
    {
        "id": 253,
        "name": "抚州",
        "father": 15,
        "key": "f",
        "abbreviation": "fz",
        "pinyin": "fuzhou",

        "postfix": "市"
    },
    {
        "id": 254,
        "name": "上饶",
        "father": 15,
        "key": "s",
        "abbreviation": "sr",
        "pinyin": "shangrao",

        "postfix": "市"
    },
    {
        "id": 255,
        "name": "济南",
        "father": 16,
        "key": "j",
        "abbreviation": "jn",
        "pinyin": "jinan",

        "postfix": "市"
    },
    {
        "id": 256,
        "name": "青岛",
        "father": 16,
        "key": "q",
        "abbreviation": "qd",
        "pinyin": "qingdao",

        "postfix": "市"
    },
    {
        "id": 257,
        "name": "淄博",
        "father": 16,
        "key": "z",
        "abbreviation": "zb",
        "pinyin": "zibo",

        "postfix": "市"
    },
    {
        "id": 258,
        "name": "枣庄",
        "father": 16,
        "key": "z",
        "abbreviation": "zz",
        "pinyin": "zaozhuang",

        "postfix": "市"
    },
    {
        "id": 259,
        "name": "东营",
        "father": 16,
        "key": "d",
        "abbreviation": "dy",
        "pinyin": "dongying",

        "postfix": "市"
    },
    {
        "id": 260,
        "name": "烟台",
        "father": 16,
        "key": "y",
        "abbreviation": "yt",
        "pinyin": "yantai",

        "postfix": "市"
    },
    {
        "id": 261,
        "name": "潍坊",
        "father": 16,
        "key": "w",
        "abbreviation": "wf",
        "pinyin": "weifang",

        "postfix": "市"
    },
    {
        "id": 262,
        "name": "济宁",
        "father": 16,
        "key": "j",
        "abbreviation": "jn",
        "pinyin": "jining",

        "postfix": "市"
    },
    {
        "id": 263,
        "name": "泰安",
        "father": 16,
        "key": "t",
        "abbreviation": "ta",
        "pinyin": "taian",

        "postfix": "市"
    },
    {
        "id": 264,
        "name": "威海",
        "father": 16,
        "key": "w",
        "abbreviation": "wh",
        "pinyin": "weihai",

        "postfix": "市"
    },
    {
        "id": 265,
        "name": "日照",
        "father": 16,
        "key": "r",
        "abbreviation": "rz",
        "pinyin": "rizhao",

        "postfix": "市"
    },
    {
        "id": 267,
        "name": "临沂",
        "father": 16,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "linyi",

        "postfix": "市"
    },
    {
        "id": 268,
        "name": "德州",
        "father": 16,
        "key": "d",
        "abbreviation": "dz",
        "pinyin": "dezhou",

        "postfix": "市"
    },
    {
        "id": 269,
        "name": "聊城",
        "father": 16,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "liaocheng",

        "postfix": "市"
    },
    {
        "id": 270,
        "name": "滨州",
        "father": 16,
        "key": "b",
        "abbreviation": "bz",
        "pinyin": "binzhou",

        "postfix": "市"
    },
    {
        "id": 271,
        "name": "菏泽",
        "father": 16,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "heze",

        "postfix": "市"
    },
    {
        "id": 272,
        "name": "郑州",
        "father": 17,
        "key": "z",
        "abbreviation": "zz",
        "pinyin": "zhengzhou",

        "postfix": "市"
    },
    {
        "id": 273,
        "name": "开封",
        "father": 17,
        "key": "k",
        "abbreviation": "kf",
        "pinyin": "kaifeng",

        "postfix": "市"
    },
    {
        "id": 274,
        "name": "洛阳",
        "father": 17,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "luoyang",

        "postfix": "市"
    },
    {
        "id": 275,
        "name": "平顶山",
        "father": 17,
        "key": "p",
        "abbreviation": "pds",
        "pinyin": "pingdingshan",

        "postfix": "市"
    },
    {
        "id": 276,
        "name": "安阳",
        "father": 17,
        "key": "a",
        "abbreviation": "ay",
        "pinyin": "anyang",

        "postfix": "市"
    },
    {
        "id": 277,
        "name": "鹤壁",
        "father": 17,
        "key": "h",
        "abbreviation": "hb",
        "pinyin": "hebi",

        "postfix": "市"
    },
    {
        "id": 278,
        "name": "新乡",
        "father": 17,
        "key": "x",
        "abbreviation": "xx",
        "pinyin": "xinxiang",

        "postfix": "市"
    },
    {
        "id": 279,
        "name": "焦作",
        "father": 17,
        "key": "j",
        "abbreviation": "jz",
        "pinyin": "jiaozuo",

        "postfix": "市"
    },
    {
        "id": 280,
        "name": "濮阳",
        "father": 17,
        "key": "p",
        "abbreviation": "py",
        "pinyin": "puyang",

        "postfix": "市"
    },
    {
        "id": 281,
        "name": "许昌",
        "father": 17,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xuchuang",

        "postfix": "市"
    },
    {
        "id": 282,
        "name": "漯河",
        "father": 17,
        "key": "l",
        "abbreviation": "lh",
        "pinyin": "luohe",

        "postfix": "市"
    },
    {
        "id": 283,
        "name": "三门峡",
        "father": 17,
        "key": "s",
        "abbreviation": "smx",
        "pinyin": "sanmenxia",

        "postfix": "市"
    },
    {
        "id": 284,
        "name": "南阳",
        "father": 17,
        "key": "n",
        "abbreviation": "ny",
        "pinyin": "nanyang",

        "postfix": "市"
    },
    {
        "id": 285,
        "name": "商丘",
        "father": 17,
        "key": "s",
        "abbreviation": "sq",
        "pinyin": "shangqiu",

        "postfix": "市"
    },
    {
        "id": 286,
        "name": "信阳",
        "father": 17,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xinyang",

        "postfix": "市"
    },
    {
        "id": 287,
        "name": "周口",
        "father": 17,
        "key": "z",
        "abbreviation": "zk",
        "pinyin": "zhoukou",

        "postfix": "市"
    },
    {
        "id": 288,
        "name": "驻马店",
        "father": 17,
        "key": "z",
        "abbreviation": "zmd",
        "pinyin": "zhumadian",

        "postfix": "市"
    },
    {
        "id": 289,
        "name": "济源",
        "father": 17,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jiyuan",

        "postfix": "市"
    },
    {
        "id": 290,
        "name": "武汉",
        "father": 18,
        "key": "w",
        "abbreviation": "wh",
        "pinyin": "wuhan",

        "postfix": "市"
    },
    {
        "id": 291,
        "name": "黄石",
        "father": 18,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "huangshi",

        "postfix": "市"
    },
    {
        "id": 292,
        "name": "十堰",
        "father": 18,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "shiyan",

        "postfix": "市"
    },
    {
        "id": 293,
        "name": "宜昌",
        "father": 18,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yichang",

        "postfix": "市"
    },
    {
        "id": 294,
        "name": "襄阳",
        "father": 18,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xiangyang",

        "postfix": "市"
    },
    {
        "id": 295,
        "name": "鄂州",
        "father": 18,
        "key": "e",
        "abbreviation": "ez",
        "pinyin": "ezhou",

        "postfix": "市"
    },
    {
        "id": 296,
        "name": "荆门",
        "father": 18,
        "key": "j",
        "abbreviation": "jm",
        "pinyin": "jingmen",

        "postfix": "市"
    },
    {
        "id": 297,
        "name": "孝感",
        "father": 18,
        "key": "x",
        "abbreviation": "xg",
        "pinyin": "xiaogan",

        "postfix": "市"
    },
    {
        "id": 298,
        "name": "荆州",
        "father": 18,
        "key": "j",
        "abbreviation": "jz",
        "pinyin": "jingzhou",

        "postfix": "市"
    },
    {
        "id": 299,
        "name": "黄冈",
        "father": 18,
        "key": "h",
        "abbreviation": "hg",
        "pinyin": "huanggang",

        "postfix": "市"
    },
    {
        "id": 300,
        "name": "咸宁",
        "father": 18,
        "key": "x",
        "abbreviation": "xn",
        "pinyin": "xianning",

        "postfix": "市"
    },
    {
        "id": 301,
        "name": "随州",
        "father": 18,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "suizhou",

        "postfix": "市"
    },
    {
        "id": 302,
        "name": "恩施",
        "father": 18,
        "key": "e",
        "abbreviation": "es",
        "pinyin": "enshi",
        "": "土家族苗族",
        "postfix": "自治州"
    },
    {
        "id": 303,
        "name": "仙桃",
        "father": 18,
        "key": "x",
        "abbreviation": "xt",
        "pinyin": "xiantao",

        "postfix": "市"
    },
    {
        "id": 304,
        "name": "潜江",
        "father": 18,
        "key": "q",
        "abbreviation": "qj",
        "pinyin": "qianjiang",

        "postfix": "市"
    },
    {
        "id": 305,
        "name": "天门",
        "father": 18,
        "key": "t",
        "abbreviation": "tm",
        "pinyin": "tianmen",

        "postfix": "市"
    },
    {
        "id": 306,
        "name": "神农架林区",
        "father": 18,
        "key": "s",
        "abbreviation": "snjlq",
        "pinyin": "shennongjialinqu",

        "postfix": ""
    },
    {
        "id": 307,
        "name": "长沙",
        "father": 19,
        "key": "c",
        "abbreviation": "cs",
        "pinyin": "changsha",

        "postfix": "市"
    },
    {
        "id": 308,
        "name": "株洲",
        "father": 19,
        "key": "z",
        "abbreviation": "zz",
        "pinyin": "zhuzhou",

        "postfix": "市"
    },
    {
        "id": 309,
        "name": "湘潭",
        "father": 19,
        "key": "x",
        "abbreviation": "xt",
        "pinyin": "xiangtan",

        "postfix": "市"
    },
    {
        "id": 310,
        "name": "衡阳",
        "father": 19,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "hengyang",

        "postfix": "市"
    },
    {
        "id": 311,
        "name": "邵阳",
        "father": 19,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "shaoyang",

        "postfix": "市"
    },
    {
        "id": 312,
        "name": "岳阳",
        "father": 19,
        "key": "y",
        "abbreviation": "yy",
        "pinyin": "yueyang",

        "postfix": "市"
    },
    {
        "id": 313,
        "name": "常德",
        "father": 19,
        "key": "c",
        "abbreviation": "cd",
        "pinyin": "changde",

        "postfix": "市"
    },
    {
        "id": 314,
        "name": "张家界",
        "father": 19,
        "key": "z",
        "abbreviation": "zjj",
        "pinyin": "zhangjiajie",

        "postfix": "市"
    },
    {
        "id": 315,
        "name": "益阳",
        "father": 19,
        "key": "y",
        "abbreviation": "yy",
        "pinyin": "yiyang",

        "postfix": "市"
    },
    {
        "id": 316,
        "name": "郴州",
        "father": 19,
        "key": "c",
        "abbreviation": "cz",
        "pinyin": "chenzhou",

        "postfix": "市"
    },
    {
        "id": 317,
        "name": "永州",
        "father": 19,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yongzhou",

        "postfix": "市"
    },
    {
        "id": 318,
        "name": "怀化",
        "father": 19,
        "key": "h",
        "abbreviation": "hh",
        "pinyin": "huaihua",

        "postfix": "市"
    },
    {
        "id": 319,
        "name": "娄底",
        "father": 19,
        "key": "l",
        "abbreviation": "ld",
        "pinyin": "loudi",

        "postfix": "市"
    },
    {
        "id": 320,
        "name": "湘西",
        "father": 19,
        "key": "x",
        "abbreviation": "xx",
        "pinyin": "xiangxi",
        "": "土家族苗族",
        "postfix": "自治州"
    },
    {
        "id": 321,
        "name": "广州",
        "father": 20,
        "key": "g",
        "abbreviation": "gz",
        "pinyin": "guangzhou",

        "postfix": "市"
    },
    {
        "id": 322,
        "name": "韶关",
        "father": 20,
        "key": "s",
        "abbreviation": "sg",
        "pinyin": "shaoguan",

        "postfix": "市"
    },
    {
        "id": 323,
        "name": "深圳",
        "father": 20,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "shenzhen",

        "postfix": "市"
    },
    {
        "id": 324,
        "name": "珠海",
        "father": 20,
        "key": "z",
        "abbreviation": "zh",
        "pinyin": "zhuhai",

        "postfix": "市"
    },
    {
        "id": 325,
        "name": "汕头",
        "father": 20,
        "key": "s",
        "abbreviation": "st",
        "pinyin": "shantou",

        "postfix": "市"
    },
    {
        "id": 326,
        "name": "佛山",
        "father": 20,
        "key": "f",
        "abbreviation": "fs",
        "pinyin": "foshan",

        "postfix": "市"
    },
    {
        "id": 327,
        "name": "江门",
        "father": 20,
        "key": "j",
        "abbreviation": "jm",
        "pinyin": "jiangmen",

        "postfix": "市"
    },
    {
        "id": 328,
        "name": "湛江",
        "father": 20,
        "key": "z",
        "abbreviation": "zj",
        "pinyin": "zhanjiang",

        "postfix": "市"
    },
    {
        "id": 329,
        "name": "茂名",
        "father": 20,
        "key": "m",
        "abbreviation": "mm",
        "pinyin": "maoming",

        "postfix": "市"
    },
    {
        "id": 330,
        "name": "肇庆",
        "father": 20,
        "key": "z",
        "abbreviation": "zq",
        "pinyin": "zhaoqing",

        "postfix": "市"
    },
    {
        "id": 331,
        "name": "惠州",
        "father": 20,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "huizhou",

        "postfix": "市"
    },
    {
        "id": 332,
        "name": "梅州",
        "father": 20,
        "key": "m",
        "abbreviation": "mz",
        "pinyin": "meizhou",

        "postfix": "市"
    },
    {
        "id": 333,
        "name": "汕尾",
        "father": 20,
        "key": "s",
        "abbreviation": "sw",
        "pinyin": "shanwei",

        "postfix": "市"
    },
    {
        "id": 334,
        "name": "河源",
        "father": 20,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "heyuan",

        "postfix": "市"
    },
    {
        "id": 335,
        "name": "阳江",
        "father": 20,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "yangjiang",

        "postfix": "市"
    },
    {
        "id": 336,
        "name": "清远",
        "father": 20,
        "key": "q",
        "abbreviation": "qy",
        "pinyin": "qingyuan",

        "postfix": "市"
    },
    {
        "id": 337,
        "name": "东莞",
        "father": 20,
        "key": "d",
        "abbreviation": "dg",
        "pinyin": "dongguan",

        "postfix": "市"
    },
    {
        "id": 338,
        "name": "中山",
        "father": 20,
        "key": "z",
        "abbreviation": "zs",
        "pinyin": "zhongshan",

        "postfix": "市"
    },
    {
        "id": 339,
        "name": "潮州",
        "father": 20,
        "key": "c",
        "abbreviation": "cz",
        "pinyin": "chaozhou",

        "postfix": "市"
    },
    {
        "id": 340,
        "name": "揭阳",
        "father": 20,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jieyang",

        "postfix": "市"
    },
    {
        "id": 341,
        "name": "云浮",
        "father": 20,
        "key": "y",
        "abbreviation": "yf",
        "pinyin": "yunfu",

        "postfix": "市"
    },
    {
        "id": 342,
        "name": "南宁",
        "father": 21,
        "key": "n",
        "abbreviation": "nn",
        "pinyin": "nanning",

        "postfix": "市"
    },
    {
        "id": 343,
        "name": "柳州",
        "father": 21,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "liuzhou",

        "postfix": "市"
    },
    {
        "id": 344,
        "name": "桂林",
        "father": 21,
        "key": "g",
        "abbreviation": "gl",
        "pinyin": "guilin",

        "postfix": "市"
    },
    {
        "id": 345,
        "name": "梧州",
        "father": 21,
        "key": "w",
        "abbreviation": "wz",
        "pinyin": "wuzhou",

        "postfix": "市"
    },
    {
        "id": 346,
        "name": "北海",
        "father": 21,
        "key": "b",
        "abbreviation": "bh",
        "pinyin": "beihai",

        "postfix": "市"
    },
    {
        "id": 347,
        "name": "防城港",
        "father": 21,
        "key": "f",
        "abbreviation": "fcg",
        "pinyin": "fangchenggang",

        "postfix": "市"
    },
    {
        "id": 348,
        "name": "钦州",
        "father": 21,
        "key": "q",
        "abbreviation": "qz",
        "pinyin": "qinzhou",

        "postfix": "市"
    },
    {
        "id": 349,
        "name": "贵港",
        "father": 21,
        "key": "g",
        "abbreviation": "gg",
        "pinyin": "guigang",

        "postfix": "市"
    },
    {
        "id": 350,
        "name": "玉林",
        "father": 21,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yulin",

        "postfix": "市"
    },
    {
        "id": 351,
        "name": "百色",
        "father": 21,
        "key": "b",
        "abbreviation": "bs",
        "pinyin": "baise",

        "postfix": "市"
    },
    {
        "id": 352,
        "name": "贺州",
        "father": 21,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "hezhou",

        "postfix": "市"
    },
    {
        "id": 353,
        "name": "河池",
        "father": 21,
        "key": "h",
        "abbreviation": "hc",
        "pinyin": "hechi",

        "postfix": "市"
    },
    {
        "id": 354,
        "name": "来宾",
        "father": 21,
        "key": "l",
        "abbreviation": "lb",
        "pinyin": "laibin",

        "postfix": "市"
    },
    {
        "id": 355,
        "name": "崇左",
        "father": 21,
        "key": "c",
        "abbreviation": "cz",
        "pinyin": "chongzuo",

        "postfix": "市"
    },
    {
        "id": 356,
        "name": "海口",
        "father": 22,
        "key": "h",
        "abbreviation": "hk",
        "pinyin": "haikou",

        "postfix": "市"
    },
    {
        "id": 357,
        "name": "三亚",
        "father": 22,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "sanya",

        "postfix": "市"
    },
    {
        "id": 358,
        "name": "三沙",
        "father": 22,
        "key": "s",
        "abbreviation": "ss",
        "pinyin": "sansha",

        "postfix": "市"
    },
    {
        "id": 359,
        "name": "五指山",
        "father": 22,
        "key": "w",
        "abbreviation": "wzs",
        "pinyin": "wuzhishan",

        "postfix": "市"
    },
    {
        "id": 360,
        "name": "琼海",
        "father": 22,
        "key": "q",
        "abbreviation": "qh",
        "pinyin": "qionghai",

        "postfix": "市"
    },
    {
        "id": 361,
        "name": "儋州",
        "father": 22,
        "key": "d",
        "abbreviation": "dz",
        "pinyin": "danzhou",

        "postfix": "市"
    },
    {
        "id": 362,
        "name": "文昌",
        "father": 22,
        "key": "w",
        "abbreviation": "wc",
        "pinyin": "wenchang",

        "postfix": "市"
    },
    {
        "id": 363,
        "name": "万宁",
        "father": 22,
        "key": "w",
        "abbreviation": "wn",
        "pinyin": "wanning",

        "postfix": "市"
    },
    {
        "id": 364,
        "name": "东方",
        "father": 22,
        "key": "d",
        "abbreviation": "df",
        "pinyin": "dongfang",

        "postfix": "市"
    },
    {
        "id": 365,
        "name": "定安",
        "father": 22,
        "key": "d",
        "abbreviation": "da",
        "pinyin": "dingan",

        "postfix": "县"
    },
    {
        "id": 366,
        "name": "屯昌",
        "father": 22,
        "key": "t",
        "abbreviation": "tc",
        "pinyin": "tunchang",

        "postfix": "县"
    },
    {
        "id": 367,
        "name": "澄迈",
        "father": 22,
        "key": "c",
        "abbreviation": "cm",
        "pinyin": "chengmai",

        "postfix": "县"
    },
    {
        "id": 368,
        "name": "临高",
        "father": 22,
        "key": "l",
        "abbreviation": "lg",
        "pinyin": "lingao",

        "postfix": "县"
    },
    {
        "id": 369,
        "name": "白沙",
        "father": 22,
        "key": "b",
        "abbreviation": "bs",
        "pinyin": "baisha",
        "": "黎族",
        "postfix": "自治县"
    },
    {
        "id": 370,
        "name": "昌江",
        "father": 22,
        "key": "c",
        "abbreviation": "cj",
        "pinyin": "changjiang",
        "": "黎族",
        "postfix": "自治县"
    },
    {
        "id": 371,
        "name": "乐东",
        "father": 22,
        "key": "l",
        "abbreviation": "ld",
        "pinyin": "ledong",
        "": "黎族",
        "postfix": "自治县"
    },
    {
        "id": 372,
        "name": "陵水",
        "father": 22,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lingshui",
        "": "黎族",
        "postfix": "自治县"
    },
    {
        "id": 373,
        "name": "保亭",
        "father": 22,
        "key": "b",
        "abbreviation": "bt",
        "pinyin": "baoting",
        "": "黎族苗族",
        "postfix": "自治县"
    },
    {
        "id": 374,
        "name": "琼中",
        "father": 22,
        "key": "q",
        "abbreviation": "qz",
        "pinyin": "qiongzhong",
        "": "黎族苗族",
        "postfix": "自治县"
    },
    {
        "id": 375,
        "name": "成都",
        "father": 23,
        "key": "c",
        "abbreviation": "cd",
        "pinyin": "chengdu",

        "postfix": "市"
    },
    {
        "id": 376,
        "name": "自贡",
        "father": 23,
        "key": "z",
        "abbreviation": "zg",
        "pinyin": "zigong",

        "postfix": "市"
    },
    {
        "id": 377,
        "name": "攀枝花",
        "father": 23,
        "key": "p",
        "abbreviation": "pzh",
        "pinyin": "panzhihua",

        "postfix": "市"
    },
    {
        "id": 378,
        "name": "泸州",
        "father": 23,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "luzhou",

        "postfix": "市"
    },
    {
        "id": 379,
        "name": "德阳",
        "father": 23,
        "key": "d",
        "abbreviation": "dy",
        "pinyin": "deyang",

        "postfix": "市"
    },
    {
        "id": 380,
        "name": "绵阳",
        "father": 23,
        "key": "m",
        "abbreviation": "my",
        "pinyin": "mianyang",

        "postfix": "市"
    },
    {
        "id": 381,
        "name": "广元",
        "father": 23,
        "key": "g",
        "abbreviation": "gy",
        "pinyin": "guangyuan",

        "postfix": "市"
    },
    {
        "id": 382,
        "name": "遂宁",
        "father": 23,
        "key": "s",
        "abbreviation": "sn",
        "pinyin": "suining",

        "postfix": "市"
    },
    {
        "id": 383,
        "name": "内江",
        "father": 23,
        "key": "n",
        "abbreviation": "nj",
        "pinyin": "neijiang",

        "postfix": "市"
    },
    {
        "id": 384,
        "name": "乐山",
        "father": 23,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "leshan",

        "postfix": "市"
    },
    {
        "id": 385,
        "name": "南充",
        "father": 23,
        "key": "n",
        "abbreviation": "nc",
        "pinyin": "nanchong",

        "postfix": "市"
    },
    {
        "id": 386,
        "name": "眉山",
        "father": 23,
        "key": "m",
        "abbreviation": "ms",
        "pinyin": "meishan",

        "postfix": "市"
    },
    {
        "id": 387,
        "name": "宜宾",
        "father": 23,
        "key": "y",
        "abbreviation": "yb",
        "pinyin": "yibin",

        "postfix": "市"
    },
    {
        "id": 388,
        "name": "广安",
        "father": 23,
        "key": "g",
        "abbreviation": "ga",
        "pinyin": "guangan",

        "postfix": "市"
    },
    {
        "id": 389,
        "name": "达州",
        "father": 23,
        "key": "d",
        "abbreviation": "dz",
        "pinyin": "dazhou",

        "postfix": "市"
    },
    {
        "id": 390,
        "name": "雅安",
        "father": 23,
        "key": "y",
        "abbreviation": "ya",
        "pinyin": "yaan",

        "postfix": "市"
    },
    {
        "id": 391,
        "name": "巴中",
        "father": 23,
        "key": "b",
        "abbreviation": "bz",
        "pinyin": "bazhong",

        "postfix": "市"
    },
    {
        "id": 392,
        "name": "资阳",
        "father": 23,
        "key": "z",
        "abbreviation": "zy",
        "pinyin": "ziyang",

        "postfix": "市"
    },
    {
        "id": 393,
        "name": "阿坝",
        "father": 23,
        "key": "a",
        "abbreviation": "ab",
        "pinyin": "aba",
        "": "藏族羌族",
        "postfix": "自治州"
    },
    {
        "id": 394,
        "name": "甘孜",
        "father": 23,
        "key": "g",
        "abbreviation": "gz",
        "pinyin": "ganzi",
        "": "藏族",
        "postfix": "自治州"
    },
    {
        "id": 395,
        "name": "凉山",
        "father": 23,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "liangshan",
        "": "彝族",
        "postfix": "自治州"
    },
    {
        "id": 396,
        "name": "贵阳",
        "father": 24,
        "key": "g",
        "abbreviation": "gy",
        "pinyin": "guiyang",

        "postfix": "市"
    },
    {
        "id": 397,
        "name": "六盘水",
        "father": 24,
        "key": "l",
        "abbreviation": "lps",
        "pinyin": "liupanshui",

        "postfix": "市"
    },
    {
        "id": 398,
        "name": "遵义",
        "father": 24,
        "key": "z",
        "abbreviation": "zy",
        "pinyin": "zunyi",

        "postfix": "市"
    },
    {
        "id": 399,
        "name": "安顺",
        "father": 24,
        "key": "a",
        "abbreviation": "as",
        "pinyin": "anshun",

        "postfix": "市"
    },
    {
        "id": 400,
        "name": "毕节",
        "father": 24,
        "key": "b",
        "abbreviation": "bj",
        "pinyin": "bijie",

        "postfix": "市"
    },
    {
        "id": 401,
        "name": "铜仁",
        "father": 24,
        "key": "t",
        "abbreviation": "tr",
        "pinyin": "tongren",

        "postfix": "市"
    },
    {
        "id": 402,
        "name": "黔西南",
        "father": 24,
        "key": "q",
        "abbreviation": "qxn",
        "pinyin": "qianxinan",
        "": "布依族苗族",
        "postfix": "自治州"
    },
    {
        "id": 403,
        "name": "黔东南",
        "father": 24,
        "key": "q",
        "abbreviation": "qdn",
        "pinyin": "qiandongnan",
        "": "苗族侗族",
        "postfix": "自治州"
    },
    {
        "id": 404,
        "name": "黔南",
        "father": 24,
        "key": "q",
        "abbreviation": "qn",
        "pinyin": "qiannan",
        "": "布依族苗族",
        "postfix": "自治州"
    },
    {
        "id": 405,
        "name": "昆明",
        "father": 25,
        "key": "k",
        "abbreviation": "km",
        "pinyin": "kunming",

        "postfix": "市"
    },
    {
        "id": 406,
        "name": "曲靖",
        "father": 25,
        "key": "q",
        "abbreviation": "qj",
        "pinyin": "qujing",

        "postfix": "市"
    },
    {
        "id": 407,
        "name": "玉溪",
        "father": 25,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yuxi",

        "postfix": "市"
    },
    {
        "id": 408,
        "name": "昭通",
        "father": 25,
        "key": "z",
        "abbreviation": "zt",
        "pinyin": "zhaotong",

        "postfix": "市"
    },
    {
        "id": 409,
        "name": "丽江",
        "father": 25,
        "key": "l",
        "abbreviation": "lj",
        "pinyin": "lijiang",

        "postfix": "市"
    },
    {
        "id": 410,
        "name": "普洱",
        "father": 25,
        "key": "p",
        "abbreviation": "pe",
        "pinyin": "puer",

        "postfix": "市"
    },
    {
        "id": 411,
        "name": "临沧",
        "father": 25,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "lincang",

        "postfix": "市"
    },
    {
        "id": 412,
        "name": "楚雄",
        "father": 25,
        "key": "c",
        "abbreviation": "cx",
        "pinyin": "chuxiong",
        "": "彝族",
        "postfix": "自治州"
    },
    {
        "id": 413,
        "name": "红河",
        "father": 25,
        "key": "h",
        "abbreviation": "hh",
        "pinyin": "honghe",
        "": "哈尼族彝族",
        "postfix": "自治州"
    },
    {
        "id": 414,
        "name": "文山",
        "father": 25,
        "key": "w",
        "abbreviation": "ws",
        "pinyin": "wenshan",
        "": "壮族苗族",
        "postfix": "自治州"
    },
    {
        "id": 415,
        "name": "西双版纳",
        "father": 25,
        "key": "x",
        "abbreviation": "xsbn",
        "pinyin": "xishuangbanna",
        "": "傣族",
        "postfix": "自治州"
    },
    {
        "id": 416,
        "name": "大理",
        "father": 25,
        "key": "d",
        "abbreviation": "dl",
        "pinyin": "dali",
        "": "白族",
        "postfix": "自治州"
    },
    {
        "id": 417,
        "name": "德宏",
        "father": 25,
        "key": "d",
        "abbreviation": "dh",
        "pinyin": "dehong",
        "": "傣族景颇族",
        "postfix": "自治州"
    },
    {
        "id": 418,
        "name": "怒江",
        "father": 25,
        "key": "n",
        "abbreviation": "nj",
        "pinyin": "nujiang",
        "": "傈僳族",
        "postfix": "自治州"
    },
    {
        "id": 419,
        "name": "迪庆",
        "father": 25,
        "key": "d",
        "abbreviation": "dq",
        "pinyin": "diqing",
        "": "藏族",
        "postfix": "自治州"
    },
    {
        "id": 420,
        "name": "保山",
        "father": 25,
        "key": "b",
        "abbreviation": "bs",
        "pinyin": "baoshan",

        "postfix": "市"
    },
    {
        "id": 421,
        "name": "拉萨",
        "father": 26,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lasa",

        "postfix": "市"
    },
    {
        "id": 422,
        "name": "昌都",
        "father": 26,
        "key": "c",
        "abbreviation": "cd",
        "pinyin": "changdu",

        "postfix": "市"
    },
    {
        "id": 423,
        "name": "山南",
        "father": 26,
        "key": "s",
        "abbreviation": "sn",
        "pinyin": "shannan",

        "postfix": "市"
    },
    {
        "id": 424,
        "name": "日喀则",
        "father": 26,
        "key": "r",
        "abbreviation": "rkz",
        "pinyin": "rikaze",

        "postfix": "市"
    },
    {
        "id": 425,
        "name": "那曲",
        "father": 26,
        "key": "n",
        "abbreviation": "nq",
        "pinyin": "neiqu",

        "postfix": "市"
    },
    {
        "id": 426,
        "name": "阿里",
        "father": 26,
        "key": "a",
        "abbreviation": "al",
        "pinyin": "ali",

        "postfix": "地区"
    },
    {
        "id": 427,
        "name": "林芝",
        "father": 26,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "linzhi",

        "postfix": "市"
    },
    {
        "id": 428,
        "name": "西安",
        "father": 27,
        "key": "x",
        "abbreviation": "xa",
        "pinyin": "xian",

        "postfix": "市"
    },
    {
        "id": 429,
        "name": "铜川",
        "father": 27,
        "key": "t",
        "abbreviation": "tc",
        "pinyin": "tongchuan",

        "postfix": "市"
    },
    {
        "id": 430,
        "name": "宝鸡",
        "father": 27,
        "key": "b",
        "abbreviation": "bj",
        "pinyin": "baoji",

        "postfix": "市"
    },
    {
        "id": 431,
        "name": "咸阳",
        "father": 27,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xianyang",

        "postfix": "市"
    },
    {
        "id": 432,
        "name": "渭南",
        "father": 27,
        "key": "w",
        "abbreviation": "wn",
        "pinyin": "weinan",

        "postfix": "市"
    },
    {
        "id": 433,
        "name": "延安",
        "father": 27,
        "key": "y",
        "abbreviation": "ya",
        "pinyin": "yanan",

        "postfix": "市"
    },
    {
        "id": 434,
        "name": "汉中",
        "father": 27,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "hanzhong",

        "postfix": "市"
    },
    {
        "id": 435,
        "name": "榆林",
        "father": 27,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yulin",

        "postfix": "市"
    },
    {
        "id": 436,
        "name": "安康",
        "father": 27,
        "key": "a",
        "abbreviation": "ak",
        "pinyin": "ankang",

        "postfix": "市"
    },
    {
        "id": 437,
        "name": "商洛",
        "father": 27,
        "key": "s",
        "abbreviation": "sl",
        "pinyin": "shangluo",

        "postfix": "市"
    },
    {
        "id": 438,
        "name": "兰州",
        "father": 28,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "lanzhou",

        "postfix": "市"
    },
    {
        "id": 439,
        "name": "嘉峪关",
        "father": 28,
        "key": "j",
        "abbreviation": "jyg",
        "pinyin": "jiayuguan",

        "postfix": "市"
    },
    {
        "id": 440,
        "name": "金昌",
        "father": 28,
        "key": "j",
        "abbreviation": "jc",
        "pinyin": "jinchang",

        "postfix": "市"
    },
    {
        "id": 441,
        "name": "白银",
        "father": 28,
        "key": "b",
        "abbreviation": "by",
        "pinyin": "baiyin",

        "postfix": "市"
    },
    {
        "id": 442,
        "name": "天水",
        "father": 28,
        "key": "t",
        "abbreviation": "ts",
        "pinyin": "tianshui",

        "postfix": "市"
    },
    {
        "id": 443,
        "name": "武威",
        "father": 28,
        "key": "w",
        "abbreviation": "ww",
        "pinyin": "wuwei",

        "postfix": "市"
    },
    {
        "id": 444,
        "name": "张掖",
        "father": 28,
        "key": "z",
        "abbreviation": "zy",
        "pinyin": "zhangye",

        "postfix": "市"
    },
    {
        "id": 445,
        "name": "平凉",
        "father": 28,
        "key": "p",
        "abbreviation": "pl",
        "pinyin": "pingliang",

        "postfix": "市"
    },
    {
        "id": 446,
        "name": "酒泉",
        "father": 28,
        "key": "j",
        "abbreviation": "jq",
        "pinyin": "jiuquan",

        "postfix": "市"
    },
    {
        "id": 447,
        "name": "庆阳",
        "father": 28,
        "key": "q",
        "abbreviation": "qy",
        "pinyin": "qingyang",

        "postfix": "市"
    },
    {
        "id": 448,
        "name": "定西",
        "father": 28,
        "key": "d",
        "abbreviation": "dx",
        "pinyin": "dingxi",

        "postfix": "市"
    },
    {
        "id": 449,
        "name": "陇南",
        "father": 28,
        "key": "l",
        "abbreviation": "ln",
        "pinyin": "longnan",

        "postfix": "市"
    },
    {
        "id": 450,
        "name": "临夏",
        "father": 28,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "linxia",
        "": "回族",
        "postfix": "自治州"
    },
    {
        "id": 451,
        "name": "甘南",
        "father": 28,
        "key": "g",
        "abbreviation": "gn",
        "pinyin": "gannan",
        "": "藏族",
        "postfix": "自治州"
    },
    {
        "id": 452,
        "name": "西宁",
        "father": 29,
        "key": "x",
        "abbreviation": "xn",
        "pinyin": "xining",

        "postfix": "市"
    },
    {
        "id": 453,
        "name": "海东",
        "father": 29,
        "key": "h",
        "abbreviation": "hd",
        "pinyin": "haidong",

        "postfix": "市"
    },
    {
        "id": 454,
        "name": "海北",
        "father": 29,
        "key": "h",
        "abbreviation": "hb",
        "pinyin": "haibei",
        "": "藏族",
        "postfix": "自治州"
    },
    {
        "id": 455,
        "name": "黄南",
        "father": 29,
        "key": "h",
        "abbreviation": "hn",
        "pinyin": "huangnan",
        "": "藏族",
        "postfix": "自治州"
    },
    {
        "id": 456,
        "name": "海南",
        "father": 29,
        "key": "h",
        "abbreviation": "hn",
        "pinyin": "hainan",
        "": "藏族",
        "postfix": "自治州"
    },
    {
        "id": 457,
        "name": "果洛",
        "father": 29,
        "key": "g",
        "abbreviation": "gl",
        "pinyin": "guoluo",
        "": "藏族",
        "postfix": "自治州"
    },
    {
        "id": 458,
        "name": "玉树",
        "father": 29,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yushu",
        "": "藏族",
        "postfix": "自治州"
    },
    {
        "id": 459,
        "name": "海西",
        "father": 29,
        "key": "h",
        "abbreviation": "hx",
        "pinyin": "haixi",
        "": "蒙古族藏族",
        "postfix": "自治州"
    },
    {
        "id": 460,
        "name": "银川",
        "father": 30,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yinchuan",

        "postfix": "市"
    },
    {
        "id": 461,
        "name": "石嘴山",
        "father": 30,
        "key": "s",
        "abbreviation": "szs",
        "pinyin": "shizuishan",

        "postfix": "市"
    },
    {
        "id": 462,
        "name": "吴忠",
        "father": 30,
        "key": "w",
        "abbreviation": "wz",
        "pinyin": "wuzhong",

        "postfix": "市"
    },
    {
        "id": 463,
        "name": "固原",
        "father": 30,
        "key": "g",
        "abbreviation": "gy",
        "pinyin": "guyuan",

        "postfix": "市"
    },
    {
        "id": 464,
        "name": "中卫",
        "father": 30,
        "key": "z",
        "abbreviation": "zw",
        "pinyin": "zhongwei",

        "postfix": "市"
    },
    {
        "id": 465,
        "name": "乌鲁木齐",
        "father": 31,
        "key": "w",
        "abbreviation": "wlmq",
        "pinyin": "wulumuqi",

        "postfix": "市"
    },
    {
        "id": 466,
        "name": "克拉玛依",
        "father": 31,
        "key": "k",
        "abbreviation": "klmy",
        "pinyin": "kelamayi",

        "postfix": "市"
    },
    {
        "id": 467,
        "name": "吐鲁番",
        "father": 31,
        "key": "t",
        "abbreviation": "tlf",
        "pinyin": "tulufan",

        "postfix": "市"
    },
    {
        "id": 468,
        "name": "哈密",
        "father": 31,
        "key": "h",
        "abbreviation": "hm",
        "pinyin": "hami",

        "postfix": "市"
    },
    {
        "id": 469,
        "name": "昌吉",
        "father": 31,
        "key": "c",
        "abbreviation": "cj",
        "pinyin": "changji",

        "postfix": "自治州"
    },
    {
        "id": 470,
        "name": "博尔塔拉",
        "father": 31,
        "key": "b",
        "abbreviation": "betl",
        "pinyin": "boertala",
        "": "蒙古",
        "postfix": "自治州"
    },
    {
        "id": 471,
        "name": "巴音郭楞",
        "father": 31,
        "key": "b",
        "abbreviation": "bygl",
        "pinyin": "bayinguoleng",
        "": "蒙古",
        "postfix": "自治州"
    },
    {
        "id": 472,
        "name": "阿克苏",
        "father": 31,
        "key": "a",
        "abbreviation": "aks",
        "pinyin": "akesu",
        "": "柯尔克孜",
        "postfix": "地区"
    },
    {
        "id": 473,
        "name": "克孜勒苏",
        "father": 31,
        "key": "k",
        "abbreviation": "kzls",
        "pinyin": "kezilesu",

        "postfix": "自治州"
    },
    {
        "id": 474,
        "name": "喀什",
        "father": 31,
        "key": "k",
        "abbreviation": "ks",
        "pinyin": "kashi",

        "postfix": "地区"
    },
    {
        "id": 475,
        "name": "和田",
        "father": 31,
        "key": "h",
        "abbreviation": "ht",
        "pinyin": "hetian",
        "": "哈萨克",
        "postfix": "地区"
    },
    {
        "id": 476,
        "name": "伊犁",
        "father": 31,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yili",

        "postfix": "自治州"
    },
    {
        "id": 477,
        "name": "塔城",
        "father": 31,
        "key": "t",
        "abbreviation": "tc",
        "pinyin": "tacheng",

        "postfix": "地区"
    },
    {
        "id": 478,
        "name": "阿勒泰",
        "father": 31,
        "key": "a",
        "abbreviation": "alt",
        "pinyin": "aletai",

        "postfix": "地区"
    },
    {
        "id": 479,
        "name": "石河子",
        "father": 31,
        "key": "s",
        "abbreviation": "shz",
        "pinyin": "shihezi",

        "postfix": "市"
    },
    {
        "id": 480,
        "name": "阿拉尔",
        "father": 31,
        "key": "a",
        "abbreviation": "ale",
        "pinyin": "alaer",

        "postfix": "市"
    },
    {
        "id": 481,
        "name": "图木舒克",
        "father": 31,
        "key": "t",
        "abbreviation": "tmsk",
        "pinyin": "tumushuke",

        "postfix": "市"
    },
    {
        "id": 482,
        "name": "五家渠",
        "father": 31,
        "key": "w",
        "abbreviation": "wjq",
        "pinyin": "wujiaqu",

        "postfix": "市"
    },
    {
        "id": 483,
        "name": "北屯",
        "father": 31,
        "key": "b",
        "abbreviation": "bt",
        "pinyin": "beitun",

        "postfix": "市"
    },
    {
        "id": 484,
        "name": "铁门关",
        "father": 31,
        "key": "t",
        "abbreviation": "tmg",
        "pinyin": "tiemenguan",

        "postfix": "市"
    },
    {
        "id": 485,
        "name": "台北",
        "father": 32,
        "key": "t",
        "abbreviation": "tb",
        "pinyin": "taibei",

        "postfix": "市"
    },
    {
        "id": 486,
        "name": "高雄",
        "father": 32,
        "key": "g",
        "abbreviation": "gx",
        "pinyin": "gaoxiong",

        "postfix": "市"
    },
    {
        "id": 487,
        "name": "基隆",
        "father": 32,
        "key": "j",
        "abbreviation": "jl",
        "pinyin": "jilong",

        "postfix": "市"
    },
    {
        "id": 488,
        "name": "台中",
        "father": 32,
        "key": "t",
        "abbreviation": "tz",
        "pinyin": "taizhong",

        "postfix": "市"
    },
    {
        "id": 489,
        "name": "台南",
        "father": 32,
        "key": "t",
        "abbreviation": "tn",
        "pinyin": "tainan",

        "postfix": "市"
    },
    {
        "id": 490,
        "name": "新竹",
        "father": 32,
        "key": "x",
        "abbreviation": "xz",
        "pinyin": "xinzhu",

        "postfix": "市"
    },
    {
        "id": 491,
        "name": "嘉义",
        "father": 32,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jiayi",

        "postfix": "市"
    },
    {
        "id": 492,
        "name": "新北",
        "father": 32,
        "key": "x",
        "abbreviation": "xb",
        "pinyin": "xinbei",

        "postfix": "市"
    },
    {
        "id": 493,
        "name": "宜兰",
        "father": 32,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yilan",

        "postfix": "县"
    },
    {
        "id": 494,
        "name": "桃园",
        "father": 32,
        "key": "t",
        "abbreviation": "ty",
        "pinyin": "taoyuan",

        "postfix": "县"
    },
    {
        "id": 495,
        "name": "新竹",
        "father": 32,
        "key": "x",
        "abbreviation": "xz",
        "pinyin": "xinzhu",

        "postfix": "县"
    },
    {
        "id": 496,
        "name": "苗栗",
        "father": 32,
        "key": "m",
        "abbreviation": "ml",
        "pinyin": "miaoli",

        "postfix": "县"
    },
    {
        "id": 497,
        "name": "彰化",
        "father": 32,
        "key": "z",
        "abbreviation": "zh",
        "pinyin": "zhanghua",

        "postfix": "县"
    },
    {
        "id": 498,
        "name": "南投",
        "father": 32,
        "key": "n",
        "abbreviation": "nt",
        "pinyin": "nantou",

        "postfix": "县"
    },
    {
        "id": 499,
        "name": "云林",
        "father": 32,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yunlin",

        "postfix": "县"
    },
    {
        "id": 500,
        "name": "嘉义",
        "father": 32,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jiayi",

        "postfix": "县"
    },
    {
        "id": 501,
        "name": "屏东",
        "father": 32,
        "key": "p",
        "abbreviation": "pd",
        "pinyin": "pingdong",

        "postfix": "县"
    },
    {
        "id": 502,
        "name": "台东",
        "father": 32,
        "key": "t",
        "abbreviation": "td",
        "pinyin": "taidong",

        "postfix": "县"
    },
    {
        "id": 503,
        "name": "花莲",
        "father": 32,
        "key": "h",
        "abbreviation": "hl",
        "pinyin": "hualian",

        "postfix": "县"
    },
    {
        "id": 504,
        "name": "澎湖",
        "father": 32,
        "key": "p",
        "abbreviation": "ph",
        "pinyin": "penghu",

        "postfix": "县"
    },
    {
        "id": 505,
        "name": "连江",
        "father": 32,
        "key": "l",
        "abbreviation": "lj",
        "pinyin": "lianjiang",

        "postfix": "县"
    },
    {
        "id": 506,
        "name": "金门",
        "father": 32,
        "key": "j",
        "abbreviation": "jm",
        "pinyin": "jinmen",

        "postfix": "县"
    },
    {
        "id": 507,
        "name": "中西",
        "father": 33,
        "key": "z",
        "abbreviation": "zx",
        "pinyin": "zhongxi",

        "postfix": "区"
    },
    {
        "id": 508,
        "name": "葵青",
        "father": 33,
        "key": "k",
        "abbreviation": "kq",
        "pinyin": "kuiqing",

        "postfix": "区"
    },
    {
        "id": 509,
        "name": "元朗",
        "father": 33,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yuanlang",

        "postfix": "区"
    },
    {
        "id": 510,
        "name": "屯门",
        "father": 33,
        "key": "t",
        "abbreviation": "tm",
        "pinyin": "tunmen",

        "postfix": "区"
    },
    {
        "id": 511,
        "name": "荃湾",
        "father": 33,
        "key": "q",
        "abbreviation": "qw",
        "pinyin": "quanwan",

        "postfix": "区"
    },
    {
        "id": 512,
        "name": "西贡",
        "father": 33,
        "key": "x",
        "abbreviation": "xg",
        "pinyin": "xigong",

        "postfix": "区"
    },
    {
        "id": 513,
        "name": "沙田",
        "father": 33,
        "key": "s",
        "abbreviation": "st",
        "pinyin": "shatian",

        "postfix": "区"
    },
    {
        "id": 514,
        "name": "大埔",
        "father": 33,
        "key": "d",
        "abbreviation": "dp",
        "pinyin": "dapu",

        "postfix": "区"
    },
    {
        "id": 515,
        "name": "北区",
        "father": 33,
        "key": "b",
        "abbreviation": "bq",
        "pinyin": "beiqu",

        "postfix": ""
    },
    {
        "id": 516,
        "name": "观塘",
        "father": 33,
        "key": "g",
        "abbreviation": "gt",
        "pinyin": "guantang",

        "postfix": "区"
    },
    {
        "id": 517,
        "name": "黄大仙",
        "father": 33,
        "key": "h",
        "abbreviation": "hdx",
        "pinyin": "huangdaxian",

        "postfix": "区"
    },
    {
        "id": 518,
        "name": "深水埗",
        "father": 33,
        "key": "s",
        "abbreviation": "ssb",
        "pinyin": "shenshuibu",

        "postfix": "区"
    },
    {
        "id": 519,
        "name": "油尖旺",
        "father": 33,
        "key": "y",
        "abbreviation": "yjw",
        "pinyin": "youjianwang",

        "postfix": "区"
    },
    {
        "id": 520,
        "name": "九龙城",
        "father": 33,
        "key": "j",
        "abbreviation": "jlc",
        "pinyin": "jiulongcheng",

        "postfix": "区"
    },
    {
        "id": 521,
        "name": "南区",
        "father": 33,
        "key": "n",
        "abbreviation": "nq",
        "pinyin": "nanqu",

        "postfix": ""
    },
    {
        "id": 522,
        "name": "东区",
        "father": 33,
        "key": "d",
        "abbreviation": "dq",
        "pinyin": "dongqu",

        "postfix": ""
    },
    {
        "id": 523,
        "name": "湾仔",
        "father": 33,
        "key": "w",
        "abbreviation": "wz",
        "pinyin": "wanzi",

        "postfix": "区"
    },
    {
        "id": 524,
        "name": "离岛",
        "father": 33,
        "key": "l",
        "abbreviation": "ld",
        "pinyin": "lidao",

        "postfix": "区"
    },
    {
        "id": 525,
        "name": "花地玛",
        "father": 34,
        "key": "h",
        "abbreviation": "hdm",
        "pinyin": "huadima",

        "postfix": "堂区"
    },
    {
        "id": 526,
        "name": "圣安多",
        "father": 34,
        "key": "s",
        "abbreviation": "sad",
        "pinyin": "shenganduo",

        "postfix": "堂区"
    },
    {
        "id": 527,
        "name": "大堂区",
        "father": 34,
        "key": "d",
        "abbreviation": "dtq",
        "pinyin": "datangqu",

        "postfix": "堂区"
    },
    {
        "id": 528,
        "name": "望德",
        "father": 34,
        "key": "w",
        "abbreviation": "wd",
        "pinyin": "wangde",

        "postfix": "堂区"
    },
    {
        "id": 529,
        "name": "风顺",
        "father": 34,
        "key": "f",
        "abbreviation": "fs",
        "pinyin": "fengshun",

        "postfix": "堂区"
    },
    {
        "id": 530,
        "name": "嘉模",
        "father": 34,
        "key": "j",
        "abbreviation": "jm",
        "pinyin": "jiamo",

        "postfix": "堂区"
    },
    {
        "id": 531,
        "name": "圣方济各",
        "father": 34,
        "key": "s",
        "abbreviation": "sfjg",
        "pinyin": "shengfangjige",

        "postfix": "堂区"
    },
    {
        "id": 532,
        "name": "路氹城",
        "father": 34,
        "key": "l",
        "abbreviation": "ldc",
        "pinyin": "ludangcheng",

        "postfix": ""
    },
    {
        "id": 533,
        "name": "长安",
        "father": 125,
        "key": "c",
        "abbreviation": "ca",
        "pinyin": "changan",

        "postfix": "区"
    },
    {
        "id": 535,
        "name": "桥西",
        "father": 125,
        "key": "q",
        "abbreviation": "qx",
        "pinyin": "qiaoxi",

        "postfix": "区"
    },
    {
        "id": 536,
        "name": "新华",
        "father": 125,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xinhua",

        "postfix": "区"
    },
    {
        "id": 537,
        "name": "井陉矿",
        "father": 125,
        "key": "j",
        "abbreviation": "jxk",
        "pinyin": "jingxingkuang",

        "postfix": "区"
    },
    {
        "id": 538,
        "name": "裕华",
        "father": 125,
        "key": "y",
        "abbreviation": "yh",
        "pinyin": "yuhua",

        "postfix": "区"
    },
    {
        "id": 539,
        "name": "井陉",
        "father": 125,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jingxing",

        "postfix": "县"
    },
    {
        "id": 540,
        "name": "正定",
        "father": 125,
        "key": "z",
        "abbreviation": "zd",
        "pinyin": "zhengding",

        "postfix": "县"
    },
    {
        "id": 541,
        "name": "栾城",
        "father": 125,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "luancheng",

        "postfix": "区"
    },
    {
        "id": 542,
        "name": "行唐",
        "father": 125,
        "key": "x",
        "abbreviation": "xt",
        "pinyin": "xingtang",

        "postfix": "县"
    },
    {
        "id": 543,
        "name": "灵寿",
        "father": 125,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lingshou",

        "postfix": "县"
    },
    {
        "id": 544,
        "name": "高邑",
        "father": 125,
        "key": "g",
        "abbreviation": "gy",
        "pinyin": "gaoyi",

        "postfix": "县"
    },
    {
        "id": 545,
        "name": "深泽",
        "father": 125,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "shenze",

        "postfix": "县"
    },
    {
        "id": 546,
        "name": "赞皇",
        "father": 125,
        "key": "z",
        "abbreviation": "zh",
        "pinyin": "zanhuang",

        "postfix": "县"
    },
    {
        "id": 547,
        "name": "无极",
        "father": 125,
        "key": "w",
        "abbreviation": "wj",
        "pinyin": "wuji",

        "postfix": "县"
    },
    {
        "id": 548,
        "name": "平山",
        "father": 125,
        "key": "p",
        "abbreviation": "ps",
        "pinyin": "pingshan",

        "postfix": "县"
    },
    {
        "id": 549,
        "name": "元氏",
        "father": 125,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yuanshi",

        "postfix": "县"
    },
    {
        "id": 550,
        "name": "赵县",
        "father": 125,
        "key": "z",
        "abbreviation": "zx",
        "pinyin": "zhaoxian",

        "postfix": ""
    },
    {
        "id": 551,
        "name": "辛集",
        "father": 125,
        "key": "x",
        "abbreviation": "xj",
        "pinyin": "xinji",

        "postfix": "市"
    },
    {
        "id": 552,
        "name": "藁城",
        "father": 125,
        "key": "g",
        "abbreviation": "gc",
        "pinyin": "gaocheng",

        "postfix": "区"
    },
    {
        "id": 553,
        "name": "晋州",
        "father": 125,
        "key": "j",
        "abbreviation": "jz",
        "pinyin": "jinzhou",

        "postfix": "市"
    },
    {
        "id": 554,
        "name": "新乐",
        "father": 125,
        "key": "x",
        "abbreviation": "xl",
        "pinyin": "xinle",

        "postfix": "市"
    },
    {
        "id": 555,
        "name": "鹿泉",
        "father": 125,
        "key": "l",
        "abbreviation": "lq",
        "pinyin": "luquan",

        "postfix": "区"
    },
    {
        "id": 556,
        "name": "路南",
        "father": 126,
        "key": "l",
        "abbreviation": "ln",
        "pinyin": "lunan",

        "postfix": "区"
    },
    {
        "id": 557,
        "name": "路北",
        "father": 126,
        "key": "l",
        "abbreviation": "lb",
        "pinyin": "lubei",

        "postfix": "区"
    },
    {
        "id": 558,
        "name": "古冶",
        "father": 126,
        "key": "g",
        "abbreviation": "gy",
        "pinyin": "guye",

        "postfix": "区"
    },
    {
        "id": 559,
        "name": "开平",
        "father": 126,
        "key": "k",
        "abbreviation": "kp",
        "pinyin": "kaiping",

        "postfix": "区"
    },
    {
        "id": 560,
        "name": "丰南",
        "father": 126,
        "key": "f",
        "abbreviation": "fn",
        "pinyin": "fengnan",

        "postfix": "区"
    },
    {
        "id": 561,
        "name": "丰润",
        "father": 126,
        "key": "f",
        "abbreviation": "fr",
        "pinyin": "fengrun",

        "postfix": "区"
    },
    {
        "id": 562,
        "name": "滦州",
        "father": 126,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "luanzhou",

        "postfix": "市"
    },
    {
        "id": 563,
        "name": "滦南",
        "father": 126,
        "key": "l",
        "abbreviation": "ln",
        "pinyin": "luannan",

        "postfix": "县"
    },
    {
        "id": 564,
        "name": "乐亭",
        "father": 126,
        "key": "l",
        "abbreviation": "lt",
        "pinyin": "leting",

        "postfix": "县"
    },
    {
        "id": 565,
        "name": "迁西",
        "father": 126,
        "key": "q",
        "abbreviation": "qx",
        "pinyin": "qianxi",

        "postfix": "县"
    },
    {
        "id": 566,
        "name": "玉田",
        "father": 126,
        "key": "y",
        "abbreviation": "yt",
        "pinyin": "yutian",

        "postfix": "县"
    },
    {
        "id": 567,
        "name": "唐海",
        "father": 126,
        "key": "t",
        "abbreviation": "th",
        "pinyin": "tanghai",

        "postfix": "县"
    },
    {
        "id": 568,
        "name": "遵化",
        "father": 126,
        "key": "z",
        "abbreviation": "zh",
        "pinyin": "zunhua",

        "postfix": "市"
    },
    {
        "id": 569,
        "name": "迁安",
        "father": 126,
        "key": "q",
        "abbreviation": "qa",
        "pinyin": "qianan",

        "postfix": "市"
    },
    {
        "id": 570,
        "name": "海港",
        "father": 127,
        "key": "h",
        "abbreviation": "hg",
        "pinyin": "haigang",

        "postfix": "区"
    },
    {
        "id": 571,
        "name": "山海关",
        "father": 127,
        "key": "s",
        "abbreviation": "shg",
        "pinyin": "shanhaiguan",

        "postfix": "区"
    },
    {
        "id": 572,
        "name": "北戴河",
        "father": 127,
        "key": "b",
        "abbreviation": "bdh",
        "pinyin": "beidaihe",

        "postfix": "区"
    },
    {
        "id": 573,
        "name": "青龙",
        "father": 127,
        "key": "q",
        "abbreviation": "ql",
        "pinyin": "qinglong",
        "": "满族",
        "postfix": "自治县"
    },
    {
        "id": 574,
        "name": "昌黎",
        "father": 127,
        "key": "c",
        "abbreviation": "cl",
        "pinyin": "changli",

        "postfix": "县"
    },
    {
        "id": 575,
        "name": "抚宁",
        "father": 127,
        "key": "f",
        "abbreviation": "fn",
        "pinyin": "funing",

        "postfix": "区"
    },
    {
        "id": 576,
        "name": "卢龙",
        "father": 127,
        "key": "l",
        "abbreviation": "ll",
        "pinyin": "lulong",

        "postfix": "县"
    },
    {
        "id": 577,
        "name": "邯山",
        "father": 128,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "hanshan",

        "postfix": "区"
    },
    {
        "id": 578,
        "name": "丛台",
        "father": 128,
        "key": "c",
        "abbreviation": "ct",
        "pinyin": "congtai",

        "postfix": "区"
    },
    {
        "id": 579,
        "name": "复兴",
        "father": 128,
        "key": "f",
        "abbreviation": "fx",
        "pinyin": "fuxing",

        "postfix": "区"
    },
    {
        "id": 580,
        "name": "峰峰矿",
        "father": 128,
        "key": "f",
        "abbreviation": "ffk",
        "pinyin": "fengfengkuang",

        "postfix": "区"
    },
    {
        "id": 582,
        "name": "临漳",
        "father": 128,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "linzhang",

        "postfix": "县"
    },
    {
        "id": 583,
        "name": "成安",
        "father": 128,
        "key": "c",
        "abbreviation": "ca",
        "pinyin": "chengan",

        "postfix": "县"
    },
    {
        "id": 584,
        "name": "大名",
        "father": 128,
        "key": "d",
        "abbreviation": "dm",
        "pinyin": "daming",

        "postfix": "县"
    },
    {
        "id": 585,
        "name": "涉县",
        "father": 128,
        "key": "s",
        "abbreviation": "sx",
        "pinyin": "shexian",

        "postfix": ""
    },
    {
        "id": 586,
        "name": "磁县",
        "father": 128,
        "key": "c",
        "abbreviation": "cx",
        "pinyin": "cixian",

        "postfix": ""
    },
    {
        "id": 587,
        "name": "肥乡",
        "father": 128,
        "key": "f",
        "abbreviation": "fx",
        "pinyin": "feixiang",

        "postfix": "区"
    },
    {
        "id": 588,
        "name": "永年",
        "father": 128,
        "key": "y",
        "abbreviation": "yn",
        "pinyin": "yongnian",

        "postfix": "区"
    },
    {
        "id": 589,
        "name": "邱县",
        "father": 128,
        "key": "q",
        "abbreviation": "qx",
        "pinyin": "qiuxian",

        "postfix": ""
    },
    {
        "id": 590,
        "name": "鸡泽",
        "father": 128,
        "key": "j",
        "abbreviation": "jz",
        "pinyin": "jize",

        "postfix": "县"
    },
    {
        "id": 591,
        "name": "广平",
        "father": 128,
        "key": "g",
        "abbreviation": "gp",
        "pinyin": "guangping",

        "postfix": "县"
    },
    {
        "id": 592,
        "name": "馆陶",
        "father": 128,
        "key": "g",
        "abbreviation": "gt",
        "pinyin": "guantao",

        "postfix": "县"
    },
    {
        "id": 593,
        "name": "魏县",
        "father": 128,
        "key": "w",
        "abbreviation": "wx",
        "pinyin": "weixian",

        "postfix": ""
    },
    {
        "id": 594,
        "name": "曲周",
        "father": 128,
        "key": "q",
        "abbreviation": "qz",
        "pinyin": "quzhou",

        "postfix": "县"
    },
    {
        "id": 595,
        "name": "武安",
        "father": 128,
        "key": "w",
        "abbreviation": "wa",
        "pinyin": "wuan",

        "postfix": "市"
    },
    {
        "id": 596,
        "name": "桥东",
        "father": 129,
        "key": "q",
        "abbreviation": "qd",
        "pinyin": "qiaodong",

        "postfix": "区"
    },
    {
        "id": 597,
        "name": "桥西",
        "father": 129,
        "key": "q",
        "abbreviation": "qx",
        "pinyin": "qiaoxi",

        "postfix": "区"
    },
    {
        "id": 598,
        "name": "邢台",
        "father": 129,
        "key": "x",
        "abbreviation": "xt",
        "pinyin": "xingtai",

        "postfix": "县"
    },
    {
        "id": 599,
        "name": "临城",
        "father": 129,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "lincheng",

        "postfix": "县"
    },
    {
        "id": 600,
        "name": "内丘",
        "father": 129,
        "key": "n",
        "abbreviation": "nq",
        "pinyin": "neiqiu",

        "postfix": "县"
    },
    {
        "id": 601,
        "name": "柏乡",
        "father": 129,
        "key": "b",
        "abbreviation": "bx",
        "pinyin": "boxiang",

        "postfix": "县"
    },
    {
        "id": 602,
        "name": "隆尧",
        "father": 129,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "longyao",

        "postfix": "县"
    },
    {
        "id": 603,
        "name": "任县",
        "father": 129,
        "key": "r",
        "abbreviation": "rx",
        "pinyin": "renxian",

        "postfix": ""
    },
    {
        "id": 604,
        "name": "南和",
        "father": 129,
        "key": "n",
        "abbreviation": "nh",
        "pinyin": "nanhe",

        "postfix": "县"
    },
    {
        "id": 605,
        "name": "宁晋",
        "father": 129,
        "key": "n",
        "abbreviation": "nj",
        "pinyin": "ningjin",

        "postfix": "县"
    },
    {
        "id": 606,
        "name": "巨鹿",
        "father": 129,
        "key": "j",
        "abbreviation": "jl",
        "pinyin": "julu",

        "postfix": "县"
    },
    {
        "id": 607,
        "name": "新河",
        "father": 129,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xinhe",

        "postfix": "县"
    },
    {
        "id": 608,
        "name": "广宗",
        "father": 129,
        "key": "g",
        "abbreviation": "gz",
        "pinyin": "guangzong",

        "postfix": "县"
    },
    {
        "id": 609,
        "name": "平乡",
        "father": 129,
        "key": "p",
        "abbreviation": "px",
        "pinyin": "pingxiang",

        "postfix": "县"
    },
    {
        "id": 610,
        "name": "威县",
        "father": 129,
        "key": "w",
        "abbreviation": "wx",
        "pinyin": "weixian",

        "postfix": ""
    },
    {
        "id": 611,
        "name": "清河",
        "father": 129,
        "key": "q",
        "abbreviation": "qh",
        "pinyin": "qinghe",

        "postfix": "县"
    },
    {
        "id": 612,
        "name": "临西",
        "father": 129,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "linxi",

        "postfix": "县"
    },
    {
        "id": 613,
        "name": "南宫",
        "father": 129,
        "key": "n",
        "abbreviation": "ng",
        "pinyin": "nangong",

        "postfix": "市"
    },
    {
        "id": 614,
        "name": "沙河",
        "father": 129,
        "key": "s",
        "abbreviation": "sh",
        "pinyin": "shahe",

        "postfix": "市"
    },
    {
        "id": 615,
        "name": "竞秀",
        "father": 130,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jingxiu",

        "postfix": "区"
    },
    {
        "id": 616,
        "name": "莲池",
        "father": 130,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "lianchi",

        "postfix": "区"
    },
    {
        "id": 618,
        "name": "满城",
        "father": 130,
        "key": "m",
        "abbreviation": "mc",
        "pinyin": "mancheng",

        "postfix": "区"
    },
    {
        "id": 619,
        "name": "清苑",
        "father": 130,
        "key": "q",
        "abbreviation": "qy",
        "pinyin": "qingyuan",

        "postfix": "区"
    },
    {
        "id": 620,
        "name": "涞水",
        "father": 130,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "laishui",

        "postfix": "县"
    },
    {
        "id": 621,
        "name": "阜平",
        "father": 130,
        "key": "f",
        "abbreviation": "fp",
        "pinyin": "fuping",

        "postfix": "县"
    },
    {
        "id": 622,
        "name": "徐水",
        "father": 130,
        "key": "x",
        "abbreviation": "xs",
        "pinyin": "xushui",

        "postfix": "区"
    },
    {
        "id": 623,
        "name": "定兴",
        "father": 130,
        "key": "d",
        "abbreviation": "dx",
        "pinyin": "dingxing",

        "postfix": "县"
    },
    {
        "id": 624,
        "name": "唐县",
        "father": 130,
        "key": "t",
        "abbreviation": "tx",
        "pinyin": "tangxian",

        "postfix": ""
    },
    {
        "id": 625,
        "name": "高阳",
        "father": 130,
        "key": "g",
        "abbreviation": "gy",
        "pinyin": "gaoyang",

        "postfix": "县"
    },
    {
        "id": 626,
        "name": "容城",
        "father": 130,
        "key": "r",
        "abbreviation": "rc",
        "pinyin": "rongcheng",

        "postfix": "县"
    },
    {
        "id": 627,
        "name": "涞源",
        "father": 130,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "laiyuan",

        "postfix": "县"
    },
    {
        "id": 628,
        "name": "望都",
        "father": 130,
        "key": "w",
        "abbreviation": "wd",
        "pinyin": "wangdu",

        "postfix": "县"
    },
    {
        "id": 629,
        "name": "安新",
        "father": 130,
        "key": "a",
        "abbreviation": "ax",
        "pinyin": "anxin",

        "postfix": "县"
    },
    {
        "id": 630,
        "name": "易县",
        "father": 130,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yixian",

        "postfix": ""
    },
    {
        "id": 631,
        "name": "曲阳",
        "father": 130,
        "key": "q",
        "abbreviation": "qy",
        "pinyin": "quyang",

        "postfix": "县"
    },
    {
        "id": 632,
        "name": "蠡县",
        "father": 130,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "lixian",

        "postfix": ""
    },
    {
        "id": 633,
        "name": "顺平",
        "father": 130,
        "key": "s",
        "abbreviation": "sp",
        "pinyin": "shunping",

        "postfix": "县"
    },
    {
        "id": 634,
        "name": "博野",
        "father": 130,
        "key": "b",
        "abbreviation": "by",
        "pinyin": "boye",

        "postfix": "县"
    },
    {
        "id": 635,
        "name": "雄县",
        "father": 130,
        "key": "x",
        "abbreviation": "xx",
        "pinyin": "xiongxian",

        "postfix": ""
    },
    {
        "id": 636,
        "name": "涿州",
        "father": 130,
        "key": "z",
        "abbreviation": "zz",
        "pinyin": "zhuozhou",

        "postfix": "市"
    },
    {
        "id": 637,
        "name": "定州",
        "father": 130,
        "key": "d",
        "abbreviation": "dz",
        "pinyin": "dingzhou",

        "postfix": "市"
    },
    {
        "id": 638,
        "name": "安国",
        "father": 130,
        "key": "a",
        "abbreviation": "ag",
        "pinyin": "anguo",

        "postfix": "市"
    },
    {
        "id": 639,
        "name": "高碑店",
        "father": 130,
        "key": "g",
        "abbreviation": "gbd",
        "pinyin": "gaobeidian",

        "postfix": "市"
    },
    {
        "id": 640,
        "name": "桥东",
        "father": 131,
        "key": "q",
        "abbreviation": "qd",
        "pinyin": "qiaodong",

        "postfix": "区"
    },
    {
        "id": 641,
        "name": "桥西",
        "father": 131,
        "key": "q",
        "abbreviation": "qx",
        "pinyin": "qiaoxi",

        "postfix": "区"
    },
    {
        "id": 642,
        "name": "宣化",
        "father": 131,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xuanhua",

        "postfix": "区"
    },
    {
        "id": 643,
        "name": "下花园",
        "father": 131,
        "key": "x",
        "abbreviation": "xhy",
        "pinyin": "xiahuayuan",

        "postfix": "区"
    },
    {
        "id": 645,
        "name": "张北",
        "father": 131,
        "key": "z",
        "abbreviation": "zb",
        "pinyin": "zhangbei",

        "postfix": "县"
    },
    {
        "id": 646,
        "name": "康保",
        "father": 131,
        "key": "k",
        "abbreviation": "kb",
        "pinyin": "kangbao",

        "postfix": "县"
    },
    {
        "id": 647,
        "name": "沽源",
        "father": 131,
        "key": "g",
        "abbreviation": "gy",
        "pinyin": "guyuan",

        "postfix": "县"
    },
    {
        "id": 648,
        "name": "尚义",
        "father": 131,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "shangyi",

        "postfix": "县"
    },
    {
        "id": 649,
        "name": "蔚县",
        "father": 131,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yuxian",

        "postfix": ""
    },
    {
        "id": 650,
        "name": "阳原",
        "father": 131,
        "key": "y",
        "abbreviation": "yy",
        "pinyin": "yangyuan",

        "postfix": "县"
    },
    {
        "id": 651,
        "name": "怀安",
        "father": 131,
        "key": "h",
        "abbreviation": "ha",
        "pinyin": "huaian",

        "postfix": "县"
    },
    {
        "id": 652,
        "name": "万全",
        "father": 131,
        "key": "w",
        "abbreviation": "wq",
        "pinyin": "wanquan",

        "postfix": "区"
    },
    {
        "id": 653,
        "name": "怀来",
        "father": 131,
        "key": "h",
        "abbreviation": "hl",
        "pinyin": "huailai",

        "postfix": "县"
    },
    {
        "id": 654,
        "name": "涿鹿",
        "father": 131,
        "key": "z",
        "abbreviation": "zl",
        "pinyin": "zhuolu",

        "postfix": "县"
    },
    {
        "id": 655,
        "name": "赤城",
        "father": 131,
        "key": "c",
        "abbreviation": "cc",
        "pinyin": "chicheng",

        "postfix": "县"
    },
    {
        "id": 656,
        "name": "崇礼",
        "father": 131,
        "key": "c",
        "abbreviation": "cl",
        "pinyin": "chongli",

        "postfix": "区"
    },
    {
        "id": 657,
        "name": "双桥",
        "father": 132,
        "key": "s",
        "abbreviation": "sq",
        "pinyin": "shuangqiao",

        "postfix": "区"
    },
    {
        "id": 658,
        "name": "双滦",
        "father": 132,
        "key": "s",
        "abbreviation": "sl",
        "pinyin": "shuangluan",

        "postfix": "区"
    },
    {
        "id": 659,
        "name": "鹰手营子",
        "father": 132,
        "key": "y",
        "abbreviation": "ysyz",
        "pinyin": "yingshouyingzi",
        "": "矿",
        "postfix": "区"
    },
    {
        "id": 660,
        "name": "承德",
        "father": 132,
        "key": "c",
        "abbreviation": "cd",
        "pinyin": "chengde",

        "postfix": "县"
    },
    {
        "id": 661,
        "name": "兴隆",
        "father": 132,
        "key": "x",
        "abbreviation": "xl",
        "pinyin": "xinglong",

        "postfix": "县"
    },
    {
        "id": 662,
        "name": "平泉",
        "father": 132,
        "key": "p",
        "abbreviation": "pq",
        "pinyin": "pingquan",

        "postfix": "市"
    },
    {
        "id": 663,
        "name": "滦平",
        "father": 132,
        "key": "l",
        "abbreviation": "lp",
        "pinyin": "luanping",

        "postfix": "县"
    },
    {
        "id": 664,
        "name": "隆化",
        "father": 132,
        "key": "l",
        "abbreviation": "lh",
        "pinyin": "longhua",

        "postfix": "县"
    },
    {
        "id": 665,
        "name": "丰宁",
        "father": 132,
        "key": "f",
        "abbreviation": "fn",
        "pinyin": "fengning",
        "": "满族",
        "postfix": "自治县"
    },
    {
        "id": 666,
        "name": "宽城",
        "father": 132,
        "key": "k",
        "abbreviation": "kc",
        "pinyin": "kuancheng",
        "": "满族",
        "postfix": "自治县"
    },
    {
        "id": 667,
        "name": "围场",
        "father": 132,
        "key": "w",
        "abbreviation": "wc",
        "pinyin": "weichang",
        "": "满族蒙古族",
        "postfix": "自治县"
    },
    {
        "id": 668,
        "name": "新华",
        "father": 133,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xinhua",

        "postfix": "区"
    },
    {
        "id": 669,
        "name": "运河",
        "father": 133,
        "key": "y",
        "abbreviation": "yh",
        "pinyin": "yunhe",

        "postfix": "区"
    },
    {
        "id": 670,
        "name": "沧县",
        "father": 133,
        "key": "c",
        "abbreviation": "cx",
        "pinyin": "cangxian",

        "postfix": ""
    },
    {
        "id": 671,
        "name": "青县",
        "father": 133,
        "key": "q",
        "abbreviation": "qx",
        "pinyin": "qingxian",

        "postfix": ""
    },
    {
        "id": 672,
        "name": "东光",
        "father": 133,
        "key": "d",
        "abbreviation": "dg",
        "pinyin": "dongguang",

        "postfix": "县"
    },
    {
        "id": 673,
        "name": "海兴",
        "father": 133,
        "key": "h",
        "abbreviation": "hx",
        "pinyin": "haixing",

        "postfix": "县"
    },
    {
        "id": 674,
        "name": "盐山",
        "father": 133,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yanshan",

        "postfix": "县"
    },
    {
        "id": 675,
        "name": "肃宁",
        "father": 133,
        "key": "s",
        "abbreviation": "sn",
        "pinyin": "suning",

        "postfix": "县"
    },
    {
        "id": 676,
        "name": "南皮",
        "father": 133,
        "key": "n",
        "abbreviation": "np",
        "pinyin": "nanpi",

        "postfix": "县"
    },
    {
        "id": 677,
        "name": "吴桥",
        "father": 133,
        "key": "w",
        "abbreviation": "wq",
        "pinyin": "wuqiao",

        "postfix": "县"
    },
    {
        "id": 678,
        "name": "献县",
        "father": 133,
        "key": "x",
        "abbreviation": "xx",
        "pinyin": "xianxian",

        "postfix": ""
    },
    {
        "id": 679,
        "name": "孟村",
        "father": 133,
        "key": "m",
        "abbreviation": "mc",
        "pinyin": "mengcun",
        "": "回族",
        "postfix": "自治县"
    },
    {
        "id": 680,
        "name": "泊头",
        "father": 133,
        "key": "b",
        "abbreviation": "bt",
        "pinyin": "botou",

        "postfix": "市"
    },
    {
        "id": 681,
        "name": "任丘",
        "father": 133,
        "key": "r",
        "abbreviation": "rq",
        "pinyin": "renqiu",

        "postfix": "市"
    },
    {
        "id": 682,
        "name": "黄骅",
        "father": 133,
        "key": "h",
        "abbreviation": "hh",
        "pinyin": "huanghua",

        "postfix": "市"
    },
    {
        "id": 683,
        "name": "河间",
        "father": 133,
        "key": "h",
        "abbreviation": "hj",
        "pinyin": "hejian",

        "postfix": "市"
    },
    {
        "id": 684,
        "name": "安次",
        "father": 134,
        "key": "a",
        "abbreviation": "ac",
        "pinyin": "anci",

        "postfix": "区"
    },
    {
        "id": 685,
        "name": "广阳",
        "father": 134,
        "key": "g",
        "abbreviation": "gy",
        "pinyin": "guangyang",

        "postfix": "区"
    },
    {
        "id": 686,
        "name": "固安",
        "father": 134,
        "key": "g",
        "abbreviation": "ga",
        "pinyin": "guan",

        "postfix": "县"
    },
    {
        "id": 687,
        "name": "永清",
        "father": 134,
        "key": "y",
        "abbreviation": "yq",
        "pinyin": "yongqing",

        "postfix": "县"
    },
    {
        "id": 688,
        "name": "香河",
        "father": 134,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xianghe",

        "postfix": "县"
    },
    {
        "id": 689,
        "name": "大城",
        "father": 134,
        "key": "d",
        "abbreviation": "dc",
        "pinyin": "dacheng",

        "postfix": "县"
    },
    {
        "id": 690,
        "name": "文安",
        "father": 134,
        "key": "w",
        "abbreviation": "wa",
        "pinyin": "wenan",

        "postfix": "县"
    },
    {
        "id": 691,
        "name": "大厂",
        "father": 134,
        "key": "d",
        "abbreviation": "dc",
        "pinyin": "dachang",
        "": "回族",
        "postfix": "自治县"
    },
    {
        "id": 692,
        "name": "霸州",
        "father": 134,
        "key": "b",
        "abbreviation": "bz",
        "pinyin": "bazhou",

        "postfix": "市"
    },
    {
        "id": 693,
        "name": "三河",
        "father": 134,
        "key": "s",
        "abbreviation": "sh",
        "pinyin": "sanhe",

        "postfix": "市"
    },
    {
        "id": 694,
        "name": "桃城",
        "father": 135,
        "key": "t",
        "abbreviation": "tc",
        "pinyin": "taocheng",

        "postfix": "区"
    },
    {
        "id": 695,
        "name": "枣强",
        "father": 135,
        "key": "z",
        "abbreviation": "zq",
        "pinyin": "zaoqiang",

        "postfix": "县"
    },
    {
        "id": 696,
        "name": "武邑",
        "father": 135,
        "key": "w",
        "abbreviation": "wy",
        "pinyin": "wuyi",

        "postfix": "县"
    },
    {
        "id": 697,
        "name": "武强",
        "father": 135,
        "key": "w",
        "abbreviation": "wq",
        "pinyin": "wuqiang",

        "postfix": "县"
    },
    {
        "id": 698,
        "name": "饶阳",
        "father": 135,
        "key": "r",
        "abbreviation": "ry",
        "pinyin": "raoyang",

        "postfix": "县"
    },
    {
        "id": 699,
        "name": "安平",
        "father": 135,
        "key": "a",
        "abbreviation": "ap",
        "pinyin": "anping",

        "postfix": "县"
    },
    {
        "id": 700,
        "name": "故城",
        "father": 135,
        "key": "g",
        "abbreviation": "gc",
        "pinyin": "gucheng",

        "postfix": "县"
    },
    {
        "id": 701,
        "name": "景县",
        "father": 135,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jingxian",

        "postfix": ""
    },
    {
        "id": 702,
        "name": "阜城",
        "father": 135,
        "key": "f",
        "abbreviation": "fc",
        "pinyin": "fucheng",

        "postfix": "县"
    },
    {
        "id": 703,
        "name": "冀州",
        "father": 135,
        "key": "j",
        "abbreviation": "jz",
        "pinyin": "jizhou",

        "postfix": "区"
    },
    {
        "id": 704,
        "name": "深州",
        "father": 135,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "shenzhou",

        "postfix": "市"
    },
    {
        "id": 705,
        "name": "小店",
        "father": 136,
        "key": "x",
        "abbreviation": "xd",
        "pinyin": "xiaodian",

        "postfix": "区"
    },
    {
        "id": 706,
        "name": "迎泽",
        "father": 136,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yingze",

        "postfix": "区"
    },
    {
        "id": 707,
        "name": "杏花岭",
        "father": 136,
        "key": "x",
        "abbreviation": "xhl",
        "pinyin": "xinghualing",

        "postfix": "区"
    },
    {
        "id": 708,
        "name": "尖草坪",
        "father": 136,
        "key": "j",
        "abbreviation": "jcp",
        "pinyin": "jiancaoping",

        "postfix": "区"
    },
    {
        "id": 709,
        "name": "万柏林",
        "father": 136,
        "key": "w",
        "abbreviation": "wbl",
        "pinyin": "wanbolin",

        "postfix": "区"
    },
    {
        "id": 710,
        "name": "晋源",
        "father": 136,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jinyuan",

        "postfix": "区"
    },
    {
        "id": 711,
        "name": "清徐",
        "father": 136,
        "key": "q",
        "abbreviation": "qx",
        "pinyin": "qingxu",

        "postfix": "县"
    },
    {
        "id": 712,
        "name": "阳曲",
        "father": 136,
        "key": "y",
        "abbreviation": "yq",
        "pinyin": "yangqu",

        "postfix": "县"
    },
    {
        "id": 713,
        "name": "娄烦",
        "father": 136,
        "key": "l",
        "abbreviation": "lf",
        "pinyin": "loufan",

        "postfix": "县"
    },
    {
        "id": 714,
        "name": "古交",
        "father": 136,
        "key": "g",
        "abbreviation": "gj",
        "pinyin": "gujiao",

        "postfix": "市"
    },
    {
        "id": 715,
        "name": "平城",
        "father": 137,
        "key": "p",
        "abbreviation": "pc",
        "pinyin": "pingcheng",

        "postfix": "区"
    },
    {
        "id": 716,
        "name": "云冈",
        "father": 137,
        "key": "y",
        "abbreviation": "yg",
        "pinyin": "yugang",

        "postfix": ""
    },
    {
        "id": 718,
        "name": "新荣",
        "father": 137,
        "key": "x",
        "abbreviation": "xr",
        "pinyin": "xinrong",

        "postfix": "区"
    },
    {
        "id": 719,
        "name": "阳高",
        "father": 137,
        "key": "y",
        "abbreviation": "yg",
        "pinyin": "yanggao",

        "postfix": "县"
    },
    {
        "id": 720,
        "name": "天镇",
        "father": 137,
        "key": "t",
        "abbreviation": "tz",
        "pinyin": "tianzhen",

        "postfix": "县"
    },
    {
        "id": 721,
        "name": "广灵",
        "father": 137,
        "key": "g",
        "abbreviation": "gl",
        "pinyin": "guangling",

        "postfix": "县"
    },
    {
        "id": 722,
        "name": "灵丘",
        "father": 137,
        "key": "l",
        "abbreviation": "lq",
        "pinyin": "lingqiu",

        "postfix": "县"
    },
    {
        "id": 723,
        "name": "浑源",
        "father": 137,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "hunyuan",

        "postfix": "县"
    },
    {
        "id": 724,
        "name": "左云",
        "father": 137,
        "key": "z",
        "abbreviation": "zy",
        "pinyin": "zuoyun",

        "postfix": "县"
    },
    {
        "id": 725,
        "name": "云州",
        "father": 137,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yunzhou",

        "postfix": "区"
    },
    {
        "id": 726,
        "name": "城区",
        "father": 138,
        "key": "c",
        "abbreviation": "cq",
        "pinyin": "chengqu",

        "postfix": ""
    },
    {
        "id": 727,
        "name": "矿区",
        "father": 138,
        "key": "k",
        "abbreviation": "kq",
        "pinyin": "kuangqu",

        "postfix": ""
    },
    {
        "id": 728,
        "name": "郊区",
        "father": 138,
        "key": "j",
        "abbreviation": "jq",
        "pinyin": "jiaoqu",

        "postfix": ""
    },
    {
        "id": 729,
        "name": "平定",
        "father": 138,
        "key": "p",
        "abbreviation": "pd",
        "pinyin": "pingding",

        "postfix": "县"
    },
    {
        "id": 730,
        "name": "盂县",
        "father": 138,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yuxian",

        "postfix": ""
    },
    {
        "id": 731,
        "name": "潞州",
        "father": 139,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "luzhou",

        "postfix": ""
    },
    {
        "id": 733,
        "name": "上党",
        "father": 139,
        "key": "s",
        "abbreviation": "sd",
        "pinyin": "shangdang",

        "postfix": "区"
    },
    {
        "id": 734,
        "name": "襄垣",
        "father": 139,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xiangyuan",

        "postfix": "县"
    },
    {
        "id": 735,
        "name": "屯留",
        "father": 139,
        "key": "t",
        "abbreviation": "tl",
        "pinyin": "tunliu",

        "postfix": "区"
    },
    {
        "id": 736,
        "name": "平顺",
        "father": 139,
        "key": "p",
        "abbreviation": "ps",
        "pinyin": "pingshun",

        "postfix": "县"
    },
    {
        "id": 737,
        "name": "黎城",
        "father": 139,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "licheng",

        "postfix": "县"
    },
    {
        "id": 738,
        "name": "壶关",
        "father": 139,
        "key": "h",
        "abbreviation": "hg",
        "pinyin": "huguan",

        "postfix": "县"
    },
    {
        "id": 739,
        "name": "长子",
        "father": 139,
        "key": "z",
        "abbreviation": "zz",
        "pinyin": "zhangzi",

        "postfix": "县"
    },
    {
        "id": 740,
        "name": "武乡",
        "father": 139,
        "key": "w",
        "abbreviation": "wx",
        "pinyin": "wuxiang",

        "postfix": "县"
    },
    {
        "id": 741,
        "name": "沁县",
        "father": 139,
        "key": "q",
        "abbreviation": "qx",
        "pinyin": "qinxian",

        "postfix": ""
    },
    {
        "id": 742,
        "name": "沁源",
        "father": 139,
        "key": "q",
        "abbreviation": "qy",
        "pinyin": "qinyuan",

        "postfix": "县"
    },
    {
        "id": 743,
        "name": "潞城",
        "father": 139,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "lucheng",

        "postfix": "区"
    },
    {
        "id": 744,
        "name": "城区",
        "father": 140,
        "key": "c",
        "abbreviation": "cq",
        "pinyin": "chengqu",

        "postfix": ""
    },
    {
        "id": 745,
        "name": "沁水",
        "father": 140,
        "key": "q",
        "abbreviation": "qs",
        "pinyin": "qinshui",

        "postfix": "县"
    },
    {
        "id": 746,
        "name": "阳城",
        "father": 140,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yangcheng",

        "postfix": "县"
    },
    {
        "id": 747,
        "name": "陵川",
        "father": 140,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "lingchuan",

        "postfix": "县"
    },
    {
        "id": 748,
        "name": "泽州",
        "father": 140,
        "key": "z",
        "abbreviation": "zz",
        "pinyin": "zezhou",

        "postfix": "县"
    },
    {
        "id": 749,
        "name": "高平",
        "father": 140,
        "key": "g",
        "abbreviation": "gp",
        "pinyin": "gaoping",

        "postfix": "市"
    },
    {
        "id": 750,
        "name": "朔城",
        "father": 141,
        "key": "s",
        "abbreviation": "sc",
        "pinyin": "shuocheng",

        "postfix": "区"
    },
    {
        "id": 751,
        "name": "平鲁",
        "father": 141,
        "key": "p",
        "abbreviation": "pl",
        "pinyin": "pinglu",

        "postfix": "区"
    },
    {
        "id": 752,
        "name": "山阴",
        "father": 141,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "shanyin",

        "postfix": "县"
    },
    {
        "id": 753,
        "name": "应县",
        "father": 141,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yingxian",

        "postfix": ""
    },
    {
        "id": 754,
        "name": "右玉",
        "father": 141,
        "key": "y",
        "abbreviation": "yy",
        "pinyin": "youyu",

        "postfix": "县"
    },
    {
        "id": 755,
        "name": "怀仁",
        "father": 141,
        "key": "h",
        "abbreviation": "hr",
        "pinyin": "huairen",

        "postfix": "市"
    },
    {
        "id": 756,
        "name": "榆次",
        "father": 142,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yuci",

        "postfix": "区"
    },
    {
        "id": 757,
        "name": "榆社",
        "father": 142,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yushe",

        "postfix": "县"
    },
    {
        "id": 758,
        "name": "左权",
        "father": 142,
        "key": "z",
        "abbreviation": "zq",
        "pinyin": "zuoquan",

        "postfix": "县"
    },
    {
        "id": 759,
        "name": "和顺",
        "father": 142,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "heshun",

        "postfix": "县"
    },
    {
        "id": 760,
        "name": "昔阳",
        "father": 142,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xiyang",

        "postfix": "县"
    },
    {
        "id": 761,
        "name": "寿阳",
        "father": 142,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "shouyang",

        "postfix": "县"
    },
    {
        "id": 762,
        "name": "太谷",
        "father": 142,
        "key": "t",
        "abbreviation": "tg",
        "pinyin": "taigu",

        "postfix": "县"
    },
    {
        "id": 763,
        "name": "祁县",
        "father": 142,
        "key": "q",
        "abbreviation": "qx",
        "pinyin": "qixian",

        "postfix": ""
    },
    {
        "id": 764,
        "name": "平遥",
        "father": 142,
        "key": "p",
        "abbreviation": "py",
        "pinyin": "pingyao",

        "postfix": "县"
    },
    {
        "id": 765,
        "name": "灵石",
        "father": 142,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lingshi",

        "postfix": "县"
    },
    {
        "id": 766,
        "name": "介休",
        "father": 142,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jiexiu",

        "postfix": "市"
    },
    {
        "id": 767,
        "name": "盐湖",
        "father": 143,
        "key": "y",
        "abbreviation": "yh",
        "pinyin": "yanhu",

        "postfix": "区"
    },
    {
        "id": 768,
        "name": "临猗",
        "father": 143,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "linyi",

        "postfix": "县"
    },
    {
        "id": 769,
        "name": "万荣",
        "father": 143,
        "key": "w",
        "abbreviation": "wr",
        "pinyin": "wanrong",

        "postfix": "县"
    },
    {
        "id": 770,
        "name": "闻喜",
        "father": 143,
        "key": "w",
        "abbreviation": "wx",
        "pinyin": "wenxi",

        "postfix": "县"
    },
    {
        "id": 771,
        "name": "稷山",
        "father": 143,
        "key": "j",
        "abbreviation": "js",
        "pinyin": "jishan",

        "postfix": "县"
    },
    {
        "id": 772,
        "name": "新绛",
        "father": 143,
        "key": "x",
        "abbreviation": "xj",
        "pinyin": "xinjiang",

        "postfix": "县"
    },
    {
        "id": 773,
        "name": "绛县",
        "father": 143,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jiangxian",

        "postfix": ""
    },
    {
        "id": 774,
        "name": "垣曲",
        "father": 143,
        "key": "y",
        "abbreviation": "yq",
        "pinyin": "yuanqu",

        "postfix": "县"
    },
    {
        "id": 775,
        "name": "夏县",
        "father": 143,
        "key": "x",
        "abbreviation": "xx",
        "pinyin": "xiaxian",

        "postfix": ""
    },
    {
        "id": 776,
        "name": "平陆",
        "father": 143,
        "key": "p",
        "abbreviation": "pl",
        "pinyin": "pinglu",

        "postfix": "县"
    },
    {
        "id": 777,
        "name": "芮城",
        "father": 143,
        "key": "r",
        "abbreviation": "rc",
        "pinyin": "ruicheng",

        "postfix": "县"
    },
    {
        "id": 778,
        "name": "永济",
        "father": 143,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "yongji",

        "postfix": "市"
    },
    {
        "id": 779,
        "name": "河津",
        "father": 143,
        "key": "h",
        "abbreviation": "hj",
        "pinyin": "hejin",

        "postfix": "市"
    },
    {
        "id": 780,
        "name": "忻府",
        "father": 144,
        "key": "x",
        "abbreviation": "xf",
        "pinyin": "xinfu",

        "postfix": "区"
    },
    {
        "id": 781,
        "name": "定襄",
        "father": 144,
        "key": "d",
        "abbreviation": "dx",
        "pinyin": "dingxiang",

        "postfix": "县"
    },
    {
        "id": 782,
        "name": "五台",
        "father": 144,
        "key": "w",
        "abbreviation": "wt",
        "pinyin": "wutai",

        "postfix": "县"
    },
    {
        "id": 783,
        "name": "代县",
        "father": 144,
        "key": "d",
        "abbreviation": "dx",
        "pinyin": "daixian",

        "postfix": ""
    },
    {
        "id": 784,
        "name": "繁峙",
        "father": 144,
        "key": "f",
        "abbreviation": "fz",
        "pinyin": "fanzhi",

        "postfix": "县"
    },
    {
        "id": 785,
        "name": "宁武",
        "father": 144,
        "key": "n",
        "abbreviation": "nw",
        "pinyin": "ningwu",

        "postfix": "县"
    },
    {
        "id": 786,
        "name": "静乐",
        "father": 144,
        "key": "j",
        "abbreviation": "jl",
        "pinyin": "jingle",

        "postfix": "县"
    },
    {
        "id": 787,
        "name": "神池",
        "father": 144,
        "key": "s",
        "abbreviation": "sc",
        "pinyin": "shenchi",

        "postfix": "县"
    },
    {
        "id": 788,
        "name": "五寨",
        "father": 144,
        "key": "w",
        "abbreviation": "wz",
        "pinyin": "wuzhai",

        "postfix": "县"
    },
    {
        "id": 789,
        "name": "岢岚",
        "father": 144,
        "key": "k",
        "abbreviation": "kl",
        "pinyin": "kelan",

        "postfix": "县"
    },
    {
        "id": 790,
        "name": "河曲",
        "father": 144,
        "key": "h",
        "abbreviation": "hq",
        "pinyin": "hequ",

        "postfix": "县"
    },
    {
        "id": 791,
        "name": "保德",
        "father": 144,
        "key": "b",
        "abbreviation": "bd",
        "pinyin": "baode",

        "postfix": "县"
    },
    {
        "id": 792,
        "name": "偏关",
        "father": 144,
        "key": "p",
        "abbreviation": "pg",
        "pinyin": "pianguan",

        "postfix": "县"
    },
    {
        "id": 793,
        "name": "原平",
        "father": 144,
        "key": "y",
        "abbreviation": "yp",
        "pinyin": "yuanping",

        "postfix": "市"
    },
    {
        "id": 794,
        "name": "尧都",
        "father": 145,
        "key": "y",
        "abbreviation": "yd",
        "pinyin": "yaodu",

        "postfix": "区"
    },
    {
        "id": 795,
        "name": "曲沃",
        "father": 145,
        "key": "q",
        "abbreviation": "qw",
        "pinyin": "quwo",

        "postfix": "县"
    },
    {
        "id": 796,
        "name": "翼城",
        "father": 145,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yicheng",

        "postfix": "县"
    },
    {
        "id": 797,
        "name": "襄汾",
        "father": 145,
        "key": "x",
        "abbreviation": "xf",
        "pinyin": "xiangfen",

        "postfix": "县"
    },
    {
        "id": 798,
        "name": "洪洞",
        "father": 145,
        "key": "h",
        "abbreviation": "hd",
        "pinyin": "hongdong",

        "postfix": "县"
    },
    {
        "id": 799,
        "name": "古县",
        "father": 145,
        "key": "g",
        "abbreviation": "gx",
        "pinyin": "guxian",

        "postfix": ""
    },
    {
        "id": 800,
        "name": "安泽",
        "father": 145,
        "key": "a",
        "abbreviation": "az",
        "pinyin": "anze",

        "postfix": "县"
    },
    {
        "id": 801,
        "name": "浮山",
        "father": 145,
        "key": "f",
        "abbreviation": "fs",
        "pinyin": "fushan",

        "postfix": "县"
    },
    {
        "id": 802,
        "name": "吉县",
        "father": 145,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jixian",

        "postfix": ""
    },
    {
        "id": 803,
        "name": "乡宁",
        "father": 145,
        "key": "x",
        "abbreviation": "xn",
        "pinyin": "xiangning",

        "postfix": "县"
    },
    {
        "id": 804,
        "name": "大宁",
        "father": 145,
        "key": "d",
        "abbreviation": "dn",
        "pinyin": "daning",

        "postfix": "县"
    },
    {
        "id": 805,
        "name": "隰县",
        "father": 145,
        "key": "x",
        "abbreviation": "xx",
        "pinyin": "xixian",

        "postfix": ""
    },
    {
        "id": 806,
        "name": "永和",
        "father": 145,
        "key": "y",
        "abbreviation": "yh",
        "pinyin": "yonghe",

        "postfix": "县"
    },
    {
        "id": 807,
        "name": "蒲县",
        "father": 145,
        "key": "p",
        "abbreviation": "px",
        "pinyin": "puxian",

        "postfix": ""
    },
    {
        "id": 808,
        "name": "汾西",
        "father": 145,
        "key": "f",
        "abbreviation": "fx",
        "pinyin": "fenxi",

        "postfix": "县"
    },
    {
        "id": 809,
        "name": "侯马",
        "father": 145,
        "key": "h",
        "abbreviation": "hm",
        "pinyin": "houma",

        "postfix": "市"
    },
    {
        "id": 810,
        "name": "霍州",
        "father": 145,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "huozhou",

        "postfix": "市"
    },
    {
        "id": 811,
        "name": "离石",
        "father": 146,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lishi",

        "postfix": "区"
    },
    {
        "id": 812,
        "name": "文水",
        "father": 146,
        "key": "w",
        "abbreviation": "ws",
        "pinyin": "wenshui",

        "postfix": "县"
    },
    {
        "id": 813,
        "name": "交城",
        "father": 146,
        "key": "j",
        "abbreviation": "jc",
        "pinyin": "jiaocheng",

        "postfix": "县"
    },
    {
        "id": 814,
        "name": "兴县",
        "father": 146,
        "key": "x",
        "abbreviation": "xx",
        "pinyin": "xingxian",

        "postfix": ""
    },
    {
        "id": 815,
        "name": "临县",
        "father": 146,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "linxian",

        "postfix": ""
    },
    {
        "id": 816,
        "name": "柳林",
        "father": 146,
        "key": "l",
        "abbreviation": "ll",
        "pinyin": "liulin",

        "postfix": "县"
    },
    {
        "id": 817,
        "name": "石楼",
        "father": 146,
        "key": "s",
        "abbreviation": "sl",
        "pinyin": "shilou",

        "postfix": "县"
    },
    {
        "id": 818,
        "name": "岚县",
        "father": 146,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "lanxian",

        "postfix": ""
    },
    {
        "id": 819,
        "name": "方山",
        "father": 146,
        "key": "f",
        "abbreviation": "fs",
        "pinyin": "fangshan",

        "postfix": "县"
    },
    {
        "id": 820,
        "name": "中阳",
        "father": 146,
        "key": "z",
        "abbreviation": "zy",
        "pinyin": "zhongyang",

        "postfix": "县"
    },
    {
        "id": 821,
        "name": "交口",
        "father": 146,
        "key": "j",
        "abbreviation": "jk",
        "pinyin": "jiaokou",

        "postfix": "县"
    },
    {
        "id": 822,
        "name": "孝义",
        "father": 146,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xiaoyi",

        "postfix": "市"
    },
    {
        "id": 823,
        "name": "汾阳",
        "father": 146,
        "key": "f",
        "abbreviation": "fy",
        "pinyin": "fenyang",

        "postfix": "市"
    },
    {
        "id": 824,
        "name": "新城",
        "father": 147,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xincheng",

        "postfix": "区"
    },
    {
        "id": 825,
        "name": "回民",
        "father": 147,
        "key": "h",
        "abbreviation": "hm",
        "pinyin": "huimin",

        "postfix": "区"
    },
    {
        "id": 826,
        "name": "玉泉",
        "father": 147,
        "key": "y",
        "abbreviation": "yq",
        "pinyin": "yuquan",

        "postfix": "区"
    },
    {
        "id": 827,
        "name": "赛罕",
        "father": 147,
        "key": "s",
        "abbreviation": "sh",
        "pinyin": "saihan",

        "postfix": "区"
    },
    {
        "id": 828,
        "name": "土默特左",
        "father": 147,
        "key": "t",
        "abbreviation": "tmtz",
        "pinyin": "tumotezuo",

        "postfix": "旗"
    },
    {
        "id": 829,
        "name": "托克托",
        "father": 147,
        "key": "t",
        "abbreviation": "tkt",
        "pinyin": "tuoketuo",

        "postfix": "县"
    },
    {
        "id": 830,
        "name": "和林格尔",
        "father": 147,
        "key": "h",
        "abbreviation": "hlge",
        "pinyin": "helingeer",

        "postfix": "县"
    },
    {
        "id": 831,
        "name": "清水河",
        "father": 147,
        "key": "q",
        "abbreviation": "qsh",
        "pinyin": "qingshuihe",

        "postfix": "县"
    },
    {
        "id": 832,
        "name": "武川",
        "father": 147,
        "key": "w",
        "abbreviation": "wc",
        "pinyin": "wuchuan",

        "postfix": "县"
    },
    {
        "id": 833,
        "name": "东河",
        "father": 148,
        "key": "d",
        "abbreviation": "dh",
        "pinyin": "donghe",

        "postfix": "区"
    },
    {
        "id": 834,
        "name": "昆都仑",
        "father": 148,
        "key": "k",
        "abbreviation": "kdl",
        "pinyin": "kundulun",

        "postfix": "区"
    },
    {
        "id": 835,
        "name": "青山",
        "father": 148,
        "key": "q",
        "abbreviation": "qs",
        "pinyin": "qingshan",

        "postfix": "区"
    },
    {
        "id": 836,
        "name": "石拐",
        "father": 148,
        "key": "s",
        "abbreviation": "sg",
        "pinyin": "shiguai",

        "postfix": "区"
    },
    {
        "id": 837,
        "name": "白云",
        "father": 148,
        "key": "b",
        "abbreviation": "by",
        "pinyin": "baiyun",
        "": "矿",
        "postfix": "区"
    },
    {
        "id": 838,
        "name": "九原",
        "father": 148,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jiuyuan",

        "postfix": "区"
    },
    {
        "id": 839,
        "name": "土默特右",
        "father": 148,
        "key": "t",
        "abbreviation": "tmty",
        "pinyin": "tumoteyou",

        "postfix": "旗"
    },
    {
        "id": 840,
        "name": "固阳",
        "father": 148,
        "key": "g",
        "abbreviation": "gy",
        "pinyin": "guyang",

        "postfix": "县"
    },
    {
        "id": 841,
        "name": "达尔罕茂明安",
        "father": 148,
        "key": "d",
        "abbreviation": "dehmma",
        "pinyin": "daerhanmaomingan",
        "": "联合",
        "postfix": "旗"
    },
    {
        "id": 842,
        "name": "海勃湾",
        "father": 149,
        "key": "h",
        "abbreviation": "hbw",
        "pinyin": "haibowan",

        "postfix": "区"
    },
    {
        "id": 843,
        "name": "海南",
        "father": 149,
        "key": "h",
        "abbreviation": "hn",
        "pinyin": "hainan",

        "postfix": "区"
    },
    {
        "id": 844,
        "name": "乌达",
        "father": 149,
        "key": "w",
        "abbreviation": "wd",
        "pinyin": "wuda",

        "postfix": "区"
    },
    {
        "id": 845,
        "name": "红山",
        "father": 150,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "hongshan",

        "postfix": "区"
    },
    {
        "id": 846,
        "name": "元宝山",
        "father": 150,
        "key": "y",
        "abbreviation": "ybs",
        "pinyin": "yuanbaoshan",

        "postfix": "区"
    },
    {
        "id": 847,
        "name": "松山",
        "father": 150,
        "key": "s",
        "abbreviation": "ss",
        "pinyin": "songshan",

        "postfix": "区"
    },
    {
        "id": 848,
        "name": "阿鲁科尔沁",
        "father": 150,
        "key": "a",
        "abbreviation": "alkeq",
        "pinyin": "alukeerqin",

        "postfix": "旗"
    },
    {
        "id": 849,
        "name": "巴林左",
        "father": 150,
        "key": "b",
        "abbreviation": "blz",
        "pinyin": "balinzuo",

        "postfix": "旗"
    },
    {
        "id": 850,
        "name": "巴林右",
        "father": 150,
        "key": "b",
        "abbreviation": "bly",
        "pinyin": "balinyou",

        "postfix": "旗"
    },
    {
        "id": 851,
        "name": "林西",
        "father": 150,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "linxi",

        "postfix": "县"
    },
    {
        "id": 852,
        "name": "克什克腾",
        "father": 150,
        "key": "k",
        "abbreviation": "kskt",
        "pinyin": "keshenketeng",

        "postfix": "旗"
    },
    {
        "id": 853,
        "name": "翁牛特",
        "father": 150,
        "key": "w",
        "abbreviation": "wnt",
        "pinyin": "wengniute",

        "postfix": "旗"
    },
    {
        "id": 854,
        "name": "喀喇沁",
        "father": 150,
        "key": "k",
        "abbreviation": "klq",
        "pinyin": "kalaqin",

        "postfix": "旗"
    },
    {
        "id": 855,
        "name": "宁城",
        "father": 150,
        "key": "n",
        "abbreviation": "nc",
        "pinyin": "ningcheng",

        "postfix": "县"
    },
    {
        "id": 856,
        "name": "敖汉",
        "father": 150,
        "key": "a",
        "abbreviation": "ah",
        "pinyin": "aohan",

        "postfix": "旗"
    },
    {
        "id": 857,
        "name": "科尔沁",
        "father": 151,
        "key": "k",
        "abbreviation": "keq",
        "pinyin": "keerqin",

        "postfix": "区"
    },
    {
        "id": 858,
        "name": "科尔沁左翼中",
        "father": 151,
        "key": "k",
        "abbreviation": "keqzyz",
        "pinyin": "keerqinzuoyizhong",

        "postfix": "旗"
    },
    {
        "id": 859,
        "name": "科尔沁左翼后",
        "father": 151,
        "key": "k",
        "abbreviation": "keqzyh",
        "pinyin": "keerqinzuoyihou",

        "postfix": "旗"
    },
    {
        "id": 860,
        "name": "开鲁",
        "father": 151,
        "key": "k",
        "abbreviation": "kl",
        "pinyin": "kailu",

        "postfix": "县"
    },
    {
        "id": 861,
        "name": "库伦",
        "father": 151,
        "key": "k",
        "abbreviation": "kl",
        "pinyin": "kulun",

        "postfix": "旗"
    },
    {
        "id": 862,
        "name": "奈曼",
        "father": 151,
        "key": "n",
        "abbreviation": "nm",
        "pinyin": "naiman",

        "postfix": "旗"
    },
    {
        "id": 863,
        "name": "扎鲁特",
        "father": 151,
        "key": "z",
        "abbreviation": "zlt",
        "pinyin": "zhalute",

        "postfix": "旗"
    },
    {
        "id": 864,
        "name": "霍林郭勒",
        "father": 151,
        "key": "h",
        "abbreviation": "hlgl",
        "pinyin": "huolinguole",

        "postfix": "市"
    },
    {
        "id": 865,
        "name": "东胜",
        "father": 152,
        "key": "d",
        "abbreviation": "ds",
        "pinyin": "dongsheng",

        "postfix": "区"
    },
    {
        "id": 866,
        "name": "达拉特",
        "father": 152,
        "key": "d",
        "abbreviation": "dlt",
        "pinyin": "dalate",

        "postfix": "旗"
    },
    {
        "id": 867,
        "name": "准格尔",
        "father": 152,
        "key": "z",
        "abbreviation": "zge",
        "pinyin": "zhungeer",

        "postfix": "旗"
    },
    {
        "id": 868,
        "name": "鄂托克前",
        "father": 152,
        "key": "e",
        "abbreviation": "etkq",
        "pinyin": "etuokeqian",

        "postfix": "旗"
    },
    {
        "id": 869,
        "name": "鄂托克",
        "father": 152,
        "key": "e",
        "abbreviation": "etk",
        "pinyin": "etuoke",

        "postfix": "旗"
    },
    {
        "id": 870,
        "name": "杭锦",
        "father": 152,
        "key": "h",
        "abbreviation": "hj",
        "pinyin": "hangjin",

        "postfix": "旗"
    },
    {
        "id": 871,
        "name": "乌审",
        "father": 152,
        "key": "w",
        "abbreviation": "ws",
        "pinyin": "wushen",

        "postfix": "旗"
    },
    {
        "id": 872,
        "name": "伊金霍洛",
        "father": 152,
        "key": "y",
        "abbreviation": "yjhl",
        "pinyin": "yijinhuoluo",

        "postfix": "旗"
    },
    {
        "id": 873,
        "name": "海拉尔",
        "father": 153,
        "key": "h",
        "abbreviation": "hle",
        "pinyin": "hailaer",

        "postfix": "区"
    },
    {
        "id": 874,
        "name": "阿荣",
        "father": 153,
        "key": "a",
        "abbreviation": "ar",
        "pinyin": "arong",

        "postfix": "旗"
    },
    {
        "id": 875,
        "name": "莫力达瓦",
        "father": 153,
        "key": "m",
        "abbreviation": "mldw",
        "pinyin": "molidawa",
        "": "达斡尔族",
        "postfix": "自治旗"
    },
    {
        "id": 876,
        "name": "鄂伦春",
        "father": 153,
        "key": "e",
        "abbreviation": "elc",
        "pinyin": "elunchun",

        "postfix": "自治旗"
    },
    {
        "id": 877,
        "name": "鄂温克族",
        "father": 153,
        "key": "e",
        "abbreviation": "ewkz",
        "pinyin": "ewenkezu",

        "postfix": "自治旗"
    },
    {
        "id": 878,
        "name": "陈巴尔虎",
        "father": 153,
        "key": "c",
        "abbreviation": "cbeh",
        "pinyin": "chenbaerhu",

        "postfix": "旗"
    },
    {
        "id": 879,
        "name": "新巴尔虎左",
        "father": 153,
        "key": "x",
        "abbreviation": "xbehz",
        "pinyin": "xinbaerhuzuo",

        "postfix": "旗"
    },
    {
        "id": 880,
        "name": "新巴尔虎右",
        "father": 153,
        "key": "x",
        "abbreviation": "xbehy",
        "pinyin": "xinbaerhuyou",

        "postfix": "旗"
    },
    {
        "id": 881,
        "name": "满洲里",
        "father": 153,
        "key": "m",
        "abbreviation": "mzl",
        "pinyin": "manzhouli",

        "postfix": "市"
    },
    {
        "id": 882,
        "name": "牙克石",
        "father": 153,
        "key": "y",
        "abbreviation": "yks",
        "pinyin": "yakeshi",

        "postfix": "市"
    },
    {
        "id": 883,
        "name": "扎兰屯",
        "father": 153,
        "key": "z",
        "abbreviation": "zlt",
        "pinyin": "zhalantun",

        "postfix": "市"
    },
    {
        "id": 884,
        "name": "额尔古纳",
        "father": 153,
        "key": "e",
        "abbreviation": "eegn",
        "pinyin": "eerguna",

        "postfix": "市"
    },
    {
        "id": 885,
        "name": "根河",
        "father": 153,
        "key": "g",
        "abbreviation": "gh",
        "pinyin": "genhe",

        "postfix": "市"
    },
    {
        "id": 886,
        "name": "临河",
        "father": 154,
        "key": "l",
        "abbreviation": "lh",
        "pinyin": "linhe",

        "postfix": "区"
    },
    {
        "id": 887,
        "name": "五原",
        "father": 154,
        "key": "w",
        "abbreviation": "wy",
        "pinyin": "wuyuan",

        "postfix": "县"
    },
    {
        "id": 888,
        "name": "磴口",
        "father": 154,
        "key": "d",
        "abbreviation": "dk",
        "pinyin": "dengkou",

        "postfix": "县"
    },
    {
        "id": 889,
        "name": "乌拉特前",
        "father": 154,
        "key": "w",
        "abbreviation": "wltq",
        "pinyin": "wulateqian",

        "postfix": "旗"
    },
    {
        "id": 890,
        "name": "乌拉特中",
        "father": 154,
        "key": "w",
        "abbreviation": "wltz",
        "pinyin": "wulatezhong",

        "postfix": "旗"
    },
    {
        "id": 891,
        "name": "乌拉特后",
        "father": 154,
        "key": "w",
        "abbreviation": "wlth",
        "pinyin": "wulatehou",

        "postfix": "旗"
    },
    {
        "id": 892,
        "name": "杭锦后",
        "father": 154,
        "key": "h",
        "abbreviation": "hjh",
        "pinyin": "hangjinhou",

        "postfix": "旗"
    },
    {
        "id": 893,
        "name": "集宁",
        "father": 155,
        "key": "j",
        "abbreviation": "jn",
        "pinyin": "jining",

        "postfix": "区"
    },
    {
        "id": 894,
        "name": "卓资",
        "father": 155,
        "key": "z",
        "abbreviation": "zz",
        "pinyin": "zhuozi",

        "postfix": "县"
    },
    {
        "id": 895,
        "name": "化德",
        "father": 155,
        "key": "h",
        "abbreviation": "hd",
        "pinyin": "huade",

        "postfix": "县"
    },
    {
        "id": 896,
        "name": "商都",
        "father": 155,
        "key": "s",
        "abbreviation": "sd",
        "pinyin": "shangdu",

        "postfix": "县"
    },
    {
        "id": 897,
        "name": "兴和",
        "father": 155,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xinghe",

        "postfix": "县"
    },
    {
        "id": 898,
        "name": "凉城",
        "father": 155,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "liangcheng",

        "postfix": "县"
    },
    {
        "id": 899,
        "name": "察哈尔右翼前",
        "father": 155,
        "key": "c",
        "abbreviation": "cheyyq",
        "pinyin": "chahaeryouyiqian",

        "postfix": "旗"
    },
    {
        "id": 900,
        "name": "察哈尔右翼中",
        "father": 155,
        "key": "c",
        "abbreviation": "cheyyz",
        "pinyin": "chahaeryouyizhong",

        "postfix": "旗"
    },
    {
        "id": 901,
        "name": "察哈尔右翼后",
        "father": 155,
        "key": "c",
        "abbreviation": "cheyyh",
        "pinyin": "chahaeryouyihou",

        "postfix": "旗"
    },
    {
        "id": 902,
        "name": "四子王",
        "father": 155,
        "key": "s",
        "abbreviation": "szw",
        "pinyin": "siziwang",

        "postfix": "旗"
    },
    {
        "id": 903,
        "name": "丰镇",
        "father": 155,
        "key": "f",
        "abbreviation": "fz",
        "pinyin": "fengzhen",

        "postfix": "市"
    },
    {
        "id": 904,
        "name": "乌兰浩特",
        "father": 156,
        "key": "w",
        "abbreviation": "wlht",
        "pinyin": "wulanhaote",

        "postfix": "市"
    },
    {
        "id": 905,
        "name": "阿尔山",
        "father": 156,
        "key": "a",
        "abbreviation": "aes",
        "pinyin": "aershan",

        "postfix": "市"
    },
    {
        "id": 906,
        "name": "科尔沁右翼前",
        "father": 156,
        "key": "k",
        "abbreviation": "keqyyq",
        "pinyin": "keerqinyouyiqian",

        "postfix": "旗"
    },
    {
        "id": 907,
        "name": "科尔沁右翼中",
        "father": 156,
        "key": "k",
        "abbreviation": "keqyyz",
        "pinyin": "keerqinyouyizhong",

        "postfix": "旗"
    },
    {
        "id": 908,
        "name": "扎赉特",
        "father": 156,
        "key": "z",
        "abbreviation": "zlt",
        "pinyin": "zhalaite",

        "postfix": "旗"
    },
    {
        "id": 909,
        "name": "突泉",
        "father": 156,
        "key": "t",
        "abbreviation": "tq",
        "pinyin": "tuquan",

        "postfix": "县"
    },
    {
        "id": 910,
        "name": "二连浩特",
        "father": 157,
        "key": "e",
        "abbreviation": "elht",
        "pinyin": "erlianhaote",

        "postfix": "市"
    },
    {
        "id": 911,
        "name": "锡林浩特",
        "father": 157,
        "key": "x",
        "abbreviation": "xlht",
        "pinyin": "xilinhaote",

        "postfix": "市"
    },
    {
        "id": 912,
        "name": "阿巴嘎",
        "father": 157,
        "key": "a",
        "abbreviation": "abg",
        "pinyin": "abaga",

        "postfix": "旗"
    },
    {
        "id": 913,
        "name": "苏尼特左",
        "father": 157,
        "key": "s",
        "abbreviation": "sntz",
        "pinyin": "sunitezuo",

        "postfix": "旗"
    },
    {
        "id": 914,
        "name": "苏尼特右",
        "father": 157,
        "key": "s",
        "abbreviation": "snty",
        "pinyin": "suniteyou",

        "postfix": "旗"
    },
    {
        "id": 915,
        "name": "东乌珠穆沁",
        "father": 157,
        "key": "d",
        "abbreviation": "dwzmq",
        "pinyin": "dongwuzhumuqin",

        "postfix": "旗"
    },
    {
        "id": 916,
        "name": "西乌珠穆沁",
        "father": 157,
        "key": "x",
        "abbreviation": "xwzmq",
        "pinyin": "xiwuzhumuqin",

        "postfix": "旗"
    },
    {
        "id": 917,
        "name": "太仆寺",
        "father": 157,
        "key": "t",
        "abbreviation": "tps",
        "pinyin": "taipusi",

        "postfix": "旗"
    },
    {
        "id": 918,
        "name": "镶黄",
        "father": 157,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xianghuang",

        "postfix": "旗"
    },
    {
        "id": 919,
        "name": "正镶白",
        "father": 157,
        "key": "z",
        "abbreviation": "zxb",
        "pinyin": "zhengxiangbai",

        "postfix": "旗"
    },
    {
        "id": 920,
        "name": "正蓝",
        "father": 157,
        "key": "z",
        "abbreviation": "zl",
        "pinyin": "zhenglan",

        "postfix": "旗"
    },
    {
        "id": 921,
        "name": "多伦",
        "father": 157,
        "key": "d",
        "abbreviation": "dl",
        "pinyin": "duolun",

        "postfix": "县"
    },
    {
        "id": 922,
        "name": "阿拉善左",
        "father": 158,
        "key": "a",
        "abbreviation": "alsz",
        "pinyin": "alashanzuo",

        "postfix": "旗"
    },
    {
        "id": 923,
        "name": "阿拉善右",
        "father": 158,
        "key": "a",
        "abbreviation": "alsy",
        "pinyin": "alashanyou",

        "postfix": "旗"
    },
    {
        "id": 924,
        "name": "额济纳",
        "father": 158,
        "key": "e",
        "abbreviation": "ejn",
        "pinyin": "ejina",

        "postfix": "旗"
    },
    {
        "id": 925,
        "name": "和平",
        "father": 159,
        "key": "h",
        "abbreviation": "hp",
        "pinyin": "heping",

        "postfix": "区"
    },
    {
        "id": 926,
        "name": "沈河",
        "father": 159,
        "key": "s",
        "abbreviation": "sh",
        "pinyin": "shenhe",

        "postfix": "区"
    },
    {
        "id": 927,
        "name": "大东",
        "father": 159,
        "key": "d",
        "abbreviation": "dd",
        "pinyin": "dadong",

        "postfix": "区"
    },
    {
        "id": 928,
        "name": "皇姑",
        "father": 159,
        "key": "h",
        "abbreviation": "hg",
        "pinyin": "huanggu",

        "postfix": "区"
    },
    {
        "id": 929,
        "name": "铁西",
        "father": 159,
        "key": "t",
        "abbreviation": "tx",
        "pinyin": "tiexi",

        "postfix": "区"
    },
    {
        "id": 930,
        "name": "苏家屯",
        "father": 159,
        "key": "s",
        "abbreviation": "sjt",
        "pinyin": "sujiatun",

        "postfix": "区"
    },
    {
        "id": 931,
        "name": "浑南",
        "father": 159,
        "key": "h",
        "abbreviation": "hn",
        "pinyin": "hunnan",

        "postfix": "区"
    },
    {
        "id": 932,
        "name": "沈北新区",
        "father": 159,
        "key": "s",
        "abbreviation": "sbxq",
        "pinyin": "shenbeixinqu",

        "postfix": ""
    },
    {
        "id": 933,
        "name": "于洪",
        "father": 159,
        "key": "y",
        "abbreviation": "yh",
        "pinyin": "yuhong",

        "postfix": "区"
    },
    {
        "id": 934,
        "name": "辽中",
        "father": 159,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "liaozhong",

        "postfix": "区"
    },
    {
        "id": 935,
        "name": "康平",
        "father": 159,
        "key": "k",
        "abbreviation": "kp",
        "pinyin": "kangping",

        "postfix": "县"
    },
    {
        "id": 936,
        "name": "法库",
        "father": 159,
        "key": "f",
        "abbreviation": "fk",
        "pinyin": "faku",

        "postfix": "县"
    },
    {
        "id": 937,
        "name": "新民",
        "father": 159,
        "key": "x",
        "abbreviation": "xm",
        "pinyin": "xinmin",

        "postfix": "市"
    },
    {
        "id": 938,
        "name": "中山",
        "father": 160,
        "key": "z",
        "abbreviation": "zs",
        "pinyin": "zhongshan",

        "postfix": "区"
    },
    {
        "id": 939,
        "name": "西岗",
        "father": 160,
        "key": "x",
        "abbreviation": "xg",
        "pinyin": "xigang",

        "postfix": "区"
    },
    {
        "id": 940,
        "name": "沙河口",
        "father": 160,
        "key": "s",
        "abbreviation": "shk",
        "pinyin": "shahekou",

        "postfix": "区"
    },
    {
        "id": 941,
        "name": "甘井子",
        "father": 160,
        "key": "g",
        "abbreviation": "gjz",
        "pinyin": "ganjingzi",

        "postfix": "区"
    },
    {
        "id": 942,
        "name": "旅顺口",
        "father": 160,
        "key": "l",
        "abbreviation": "lsk",
        "pinyin": "lu:shunkou",

        "postfix": "区"
    },
    {
        "id": 943,
        "name": "金州",
        "father": 160,
        "key": "j",
        "abbreviation": "jz",
        "pinyin": "jinzhou",

        "postfix": "区"
    },
    {
        "id": 944,
        "name": "长海",
        "father": 160,
        "key": "c",
        "abbreviation": "ch",
        "pinyin": "changhai",

        "postfix": "县"
    },
    {
        "id": 945,
        "name": "瓦房店",
        "father": 160,
        "key": "w",
        "abbreviation": "wfd",
        "pinyin": "wafangdian",

        "postfix": "市"
    },
    {
        "id": 946,
        "name": "普兰店",
        "father": 160,
        "key": "p",
        "abbreviation": "pld",
        "pinyin": "pulandian",

        "postfix": "区"
    },
    {
        "id": 947,
        "name": "庄河",
        "father": 160,
        "key": "z",
        "abbreviation": "zh",
        "pinyin": "zhuanghe",

        "postfix": "市"
    },
    {
        "id": 948,
        "name": "铁东",
        "father": 161,
        "key": "t",
        "abbreviation": "td",
        "pinyin": "tiedong",

        "postfix": "区"
    },
    {
        "id": 949,
        "name": "铁西",
        "father": 161,
        "key": "t",
        "abbreviation": "tx",
        "pinyin": "tiexi",

        "postfix": "区"
    },
    {
        "id": 950,
        "name": "立山",
        "father": 161,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lishan",

        "postfix": "区"
    },
    {
        "id": 951,
        "name": "千山",
        "father": 161,
        "key": "q",
        "abbreviation": "qs",
        "pinyin": "qianshan",

        "postfix": "区"
    },
    {
        "id": 952,
        "name": "台安",
        "father": 161,
        "key": "t",
        "abbreviation": "ta",
        "pinyin": "taian",

        "postfix": "县"
    },
    {
        "id": 953,
        "name": "岫岩",
        "father": 161,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xiuyan",
        "": "满族",
        "postfix": "自治县"
    },
    {
        "id": 954,
        "name": "海城",
        "father": 161,
        "key": "h",
        "abbreviation": "hc",
        "pinyin": "haicheng",

        "postfix": "市"
    },
    {
        "id": 955,
        "name": "新抚",
        "father": 162,
        "key": "x",
        "abbreviation": "xf",
        "pinyin": "xinfu",

        "postfix": "区"
    },
    {
        "id": 956,
        "name": "东洲",
        "father": 162,
        "key": "d",
        "abbreviation": "dz",
        "pinyin": "dongzhou",

        "postfix": "区"
    },
    {
        "id": 957,
        "name": "望花",
        "father": 162,
        "key": "w",
        "abbreviation": "wh",
        "pinyin": "wanghua",

        "postfix": "区"
    },
    {
        "id": 958,
        "name": "顺城",
        "father": 162,
        "key": "s",
        "abbreviation": "sc",
        "pinyin": "shuncheng",

        "postfix": "区"
    },
    {
        "id": 959,
        "name": "抚顺",
        "father": 162,
        "key": "f",
        "abbreviation": "fs",
        "pinyin": "fushun",

        "postfix": "县"
    },
    {
        "id": 960,
        "name": "新宾",
        "father": 162,
        "key": "x",
        "abbreviation": "xb",
        "pinyin": "xinbin",
        "": "满族",
        "postfix": "自治县"
    },
    {
        "id": 961,
        "name": "清原",
        "father": 162,
        "key": "q",
        "abbreviation": "qy",
        "pinyin": "qingyuan",
        "": "满族",
        "postfix": "自治县"
    },
    {
        "id": 962,
        "name": "平山",
        "father": 163,
        "key": "p",
        "abbreviation": "ps",
        "pinyin": "pingshan",

        "postfix": "区"
    },
    {
        "id": 963,
        "name": "溪湖",
        "father": 163,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xihu",

        "postfix": "区"
    },
    {
        "id": 964,
        "name": "明山",
        "father": 163,
        "key": "m",
        "abbreviation": "ms",
        "pinyin": "mingshan",

        "postfix": "区"
    },
    {
        "id": 965,
        "name": "南芬",
        "father": 163,
        "key": "n",
        "abbreviation": "nf",
        "pinyin": "nanfen",

        "postfix": "区"
    },
    {
        "id": 966,
        "name": "本溪",
        "father": 163,
        "key": "b",
        "abbreviation": "bx",
        "pinyin": "benxi",
        "": "满族",
        "postfix": "自治县"
    },
    {
        "id": 967,
        "name": "桓仁",
        "father": 163,
        "key": "h",
        "abbreviation": "hr",
        "pinyin": "huanren",
        "": "满族",
        "postfix": "自治县"
    },
    {
        "id": 968,
        "name": "元宝",
        "father": 164,
        "key": "y",
        "abbreviation": "yb",
        "pinyin": "yuanbao",

        "postfix": "区"
    },
    {
        "id": 969,
        "name": "振兴",
        "father": 164,
        "key": "z",
        "abbreviation": "zx",
        "pinyin": "zhenxing",

        "postfix": "区"
    },
    {
        "id": 970,
        "name": "振安",
        "father": 164,
        "key": "z",
        "abbreviation": "za",
        "pinyin": "zhenan",

        "postfix": "区"
    },
    {
        "id": 971,
        "name": "宽甸",
        "father": 164,
        "key": "k",
        "abbreviation": "kd",
        "pinyin": "kuandian",
        "": "满族",
        "postfix": "自治县"
    },
    {
        "id": 972,
        "name": "东港",
        "father": 164,
        "key": "d",
        "abbreviation": "dg",
        "pinyin": "donggang",

        "postfix": "市"
    },
    {
        "id": 973,
        "name": "凤城",
        "father": 164,
        "key": "f",
        "abbreviation": "fc",
        "pinyin": "fengcheng",

        "postfix": "市"
    },
    {
        "id": 974,
        "name": "古塔",
        "father": 165,
        "key": "g",
        "abbreviation": "gt",
        "pinyin": "guta",

        "postfix": "区"
    },
    {
        "id": 975,
        "name": "凌河",
        "father": 165,
        "key": "l",
        "abbreviation": "lh",
        "pinyin": "linghe",

        "postfix": "区"
    },
    {
        "id": 976,
        "name": "太和",
        "father": 165,
        "key": "t",
        "abbreviation": "th",
        "pinyin": "taihe",

        "postfix": "区"
    },
    {
        "id": 977,
        "name": "黑山",
        "father": 165,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "heishan",

        "postfix": "县"
    },
    {
        "id": 978,
        "name": "义县",
        "father": 165,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yixian",

        "postfix": ""
    },
    {
        "id": 979,
        "name": "凌海",
        "father": 165,
        "key": "l",
        "abbreviation": "lh",
        "pinyin": "linghai",

        "postfix": "市"
    },
    {
        "id": 980,
        "name": "北镇",
        "father": 165,
        "key": "b",
        "abbreviation": "bz",
        "pinyin": "beizhen",

        "postfix": "市"
    },
    {
        "id": 981,
        "name": "站前",
        "father": 166,
        "key": "z",
        "abbreviation": "zq",
        "pinyin": "zhanqian",

        "postfix": "区"
    },
    {
        "id": 982,
        "name": "西市",
        "father": 166,
        "key": "x",
        "abbreviation": "xs",
        "pinyin": "xishi",

        "postfix": "区"
    },
    {
        "id": 983,
        "name": "鲅鱼圈",
        "father": 166,
        "key": "b",
        "abbreviation": "byq",
        "pinyin": "bayuquan",

        "postfix": "区"
    },
    {
        "id": 984,
        "name": "老边",
        "father": 166,
        "key": "l",
        "abbreviation": "lb",
        "pinyin": "laobian",

        "postfix": "区"
    },
    {
        "id": 985,
        "name": "盖州",
        "father": 166,
        "key": "g",
        "abbreviation": "gz",
        "pinyin": "gaizhou",

        "postfix": "市"
    },
    {
        "id": 986,
        "name": "大石桥",
        "father": 166,
        "key": "d",
        "abbreviation": "dsq",
        "pinyin": "dashiqiao",

        "postfix": "市"
    },
    {
        "id": 987,
        "name": "海州",
        "father": 167,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "haizhou",

        "postfix": "区"
    },
    {
        "id": 988,
        "name": "新邱",
        "father": 167,
        "key": "x",
        "abbreviation": "xq",
        "pinyin": "xinqiu",

        "postfix": "区"
    },
    {
        "id": 989,
        "name": "太平",
        "father": 167,
        "key": "t",
        "abbreviation": "tp",
        "pinyin": "taiping",

        "postfix": "区"
    },
    {
        "id": 990,
        "name": "清河门",
        "father": 167,
        "key": "q",
        "abbreviation": "qhm",
        "pinyin": "qinghemen",

        "postfix": "区"
    },
    {
        "id": 991,
        "name": "细河",
        "father": 167,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xihe",

        "postfix": "区"
    },
    {
        "id": 992,
        "name": "阜新",
        "father": 167,
        "key": "f",
        "abbreviation": "fx",
        "pinyin": "fuxin",
        "": "蒙古族",
        "postfix": "自治县"
    },
    {
        "id": 993,
        "name": "彰武",
        "father": 167,
        "key": "z",
        "abbreviation": "zw",
        "pinyin": "zhangwu",

        "postfix": "县"
    },
    {
        "id": 994,
        "name": "白塔",
        "father": 168,
        "key": "b",
        "abbreviation": "bt",
        "pinyin": "baita",

        "postfix": "区"
    },
    {
        "id": 995,
        "name": "文圣",
        "father": 168,
        "key": "w",
        "abbreviation": "ws",
        "pinyin": "wensheng",

        "postfix": "区"
    },
    {
        "id": 996,
        "name": "宏伟",
        "father": 168,
        "key": "h",
        "abbreviation": "hw",
        "pinyin": "hongwei",

        "postfix": "区"
    },
    {
        "id": 997,
        "name": "弓长岭",
        "father": 168,
        "key": "g",
        "abbreviation": "gcl",
        "pinyin": "gongchangling",

        "postfix": "区"
    },
    {
        "id": 998,
        "name": "辽阳",
        "father": 168,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "liaoyang",

        "postfix": "县"
    },
    {
        "id": 999,
        "name": "灯塔",
        "father": 168,
        "key": "d",
        "abbreviation": "dt",
        "pinyin": "dengta",

        "postfix": "市"
    },
    {
        "id": 1000,
        "name": "太子河",
        "father": 168,
        "key": "t",
        "abbreviation": "tzh",
        "pinyin": "taizihe",

        "postfix": "区"
    },
    {
        "id": 1001,
        "name": "双台子",
        "father": 169,
        "key": "s",
        "abbreviation": "stz",
        "pinyin": "shuangtaizi",

        "postfix": "区"
    },
    {
        "id": 1002,
        "name": "兴隆台",
        "father": 169,
        "key": "x",
        "abbreviation": "xlt",
        "pinyin": "xinglongtai",

        "postfix": "区"
    },
    {
        "id": 1003,
        "name": "大洼",
        "father": 169,
        "key": "d",
        "abbreviation": "dw",
        "pinyin": "dawa",

        "postfix": "区"
    },
    {
        "id": 1004,
        "name": "盘山",
        "father": 169,
        "key": "p",
        "abbreviation": "ps",
        "pinyin": "panshan",

        "postfix": "县"
    },
    {
        "id": 1005,
        "name": "银州",
        "father": 170,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yinzhou",

        "postfix": "区"
    },
    {
        "id": 1006,
        "name": "清河",
        "father": 170,
        "key": "q",
        "abbreviation": "qh",
        "pinyin": "qinghe",

        "postfix": "区"
    },
    {
        "id": 1007,
        "name": "铁岭",
        "father": 170,
        "key": "t",
        "abbreviation": "tl",
        "pinyin": "tieling",

        "postfix": "县"
    },
    {
        "id": 1008,
        "name": "西丰",
        "father": 170,
        "key": "x",
        "abbreviation": "xf",
        "pinyin": "xifeng",

        "postfix": "县"
    },
    {
        "id": 1009,
        "name": "昌图",
        "father": 170,
        "key": "c",
        "abbreviation": "ct",
        "pinyin": "changtu",

        "postfix": "县"
    },
    {
        "id": 1010,
        "name": "调兵山",
        "father": 170,
        "key": "d",
        "abbreviation": "dbs",
        "pinyin": "diaobingshan",

        "postfix": "市"
    },
    {
        "id": 1011,
        "name": "开原",
        "father": 170,
        "key": "k",
        "abbreviation": "ky",
        "pinyin": "kaiyuan",

        "postfix": "市"
    },
    {
        "id": 1012,
        "name": "双塔",
        "father": 171,
        "key": "s",
        "abbreviation": "st",
        "pinyin": "shuangta",

        "postfix": "区"
    },
    {
        "id": 1013,
        "name": "龙城",
        "father": 171,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "longcheng",

        "postfix": "区"
    },
    {
        "id": 1014,
        "name": "朝阳",
        "father": 171,
        "key": "c",
        "abbreviation": "cy",
        "pinyin": "chaoyang",

        "postfix": "县"
    },
    {
        "id": 1015,
        "name": "建平",
        "father": 171,
        "key": "j",
        "abbreviation": "jp",
        "pinyin": "jianping",

        "postfix": "县"
    },
    {
        "id": 1016,
        "name": "喀喇沁左翼",
        "father": 171,
        "key": "k",
        "abbreviation": "klqzy",
        "pinyin": "kalaqinzuoyi",
        "": "蒙古族",
        "postfix": "自治县"
    },
    {
        "id": 1017,
        "name": "北票",
        "father": 171,
        "key": "b",
        "abbreviation": "bp",
        "pinyin": "beipiao",

        "postfix": "市"
    },
    {
        "id": 1018,
        "name": "凌源",
        "father": 171,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "lingyuan",

        "postfix": "市"
    },
    {
        "id": 1019,
        "name": "连山",
        "father": 172,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lianshan",

        "postfix": "区"
    },
    {
        "id": 1020,
        "name": "龙港",
        "father": 172,
        "key": "l",
        "abbreviation": "lg",
        "pinyin": "longgang",

        "postfix": "区"
    },
    {
        "id": 1021,
        "name": "南票",
        "father": 172,
        "key": "n",
        "abbreviation": "np",
        "pinyin": "nanpiao",

        "postfix": "区"
    },
    {
        "id": 1022,
        "name": "绥中",
        "father": 172,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "suizhong",

        "postfix": "县"
    },
    {
        "id": 1023,
        "name": "建昌",
        "father": 172,
        "key": "j",
        "abbreviation": "jc",
        "pinyin": "jianchang",

        "postfix": "县"
    },
    {
        "id": 1024,
        "name": "兴城",
        "father": 172,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xingcheng",

        "postfix": "市"
    },
    {
        "id": 1025,
        "name": "南关",
        "father": 173,
        "key": "n",
        "abbreviation": "ng",
        "pinyin": "nanguan",

        "postfix": "区"
    },
    {
        "id": 1026,
        "name": "宽城",
        "father": 173,
        "key": "k",
        "abbreviation": "kc",
        "pinyin": "kuancheng",

        "postfix": "区"
    },
    {
        "id": 1027,
        "name": "朝阳",
        "father": 173,
        "key": "c",
        "abbreviation": "cy",
        "pinyin": "chaoyang",

        "postfix": "区"
    },
    {
        "id": 1028,
        "name": "二道",
        "father": 173,
        "key": "e",
        "abbreviation": "ed",
        "pinyin": "erdao",

        "postfix": "区"
    },
    {
        "id": 1029,
        "name": "绿园",
        "father": 173,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "lu:yuan",

        "postfix": "区"
    },
    {
        "id": 1030,
        "name": "双阳",
        "father": 173,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "shuangyang",

        "postfix": "区"
    },
    {
        "id": 1031,
        "name": "农安",
        "father": 173,
        "key": "n",
        "abbreviation": "na",
        "pinyin": "nongan",

        "postfix": "县"
    },
    {
        "id": 1032,
        "name": "九台",
        "father": 173,
        "key": "j",
        "abbreviation": "jt",
        "pinyin": "jiutai",

        "postfix": "区"
    },
    {
        "id": 1033,
        "name": "榆树",
        "father": 173,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yushu",

        "postfix": "市"
    },
    {
        "id": 1034,
        "name": "德惠",
        "father": 173,
        "key": "d",
        "abbreviation": "dh",
        "pinyin": "dehui",

        "postfix": "市"
    },
    {
        "id": 1035,
        "name": "昌邑",
        "father": 174,
        "key": "c",
        "abbreviation": "cy",
        "pinyin": "changyi",

        "postfix": "区"
    },
    {
        "id": 1036,
        "name": "龙潭",
        "father": 174,
        "key": "l",
        "abbreviation": "lt",
        "pinyin": "longtan",

        "postfix": "区"
    },
    {
        "id": 1037,
        "name": "船营",
        "father": 174,
        "key": "c",
        "abbreviation": "cy",
        "pinyin": "chuanying",

        "postfix": "区"
    },
    {
        "id": 1038,
        "name": "丰满",
        "father": 174,
        "key": "f",
        "abbreviation": "fm",
        "pinyin": "fengman",

        "postfix": "区"
    },
    {
        "id": 1039,
        "name": "永吉",
        "father": 174,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "yongji",

        "postfix": "县"
    },
    {
        "id": 1040,
        "name": "桦甸",
        "father": 174,
        "key": "h",
        "abbreviation": "hd",
        "pinyin": "huadian",

        "postfix": "市"
    },
    {
        "id": 1041,
        "name": "蛟河",
        "father": 174,
        "key": "j",
        "abbreviation": "jh",
        "pinyin": "jiaohe",

        "postfix": "市"
    },
    {
        "id": 1042,
        "name": "舒兰",
        "father": 174,
        "key": "s",
        "abbreviation": "sl",
        "pinyin": "shulan",

        "postfix": "市"
    },
    {
        "id": 1043,
        "name": "磐石",
        "father": 174,
        "key": "p",
        "abbreviation": "ps",
        "pinyin": "panshi",

        "postfix": "市"
    },
    {
        "id": 1044,
        "name": "铁西",
        "father": 175,
        "key": "t",
        "abbreviation": "tx",
        "pinyin": "tiexi",

        "postfix": "区"
    },
    {
        "id": 1045,
        "name": "铁东",
        "father": 175,
        "key": "t",
        "abbreviation": "td",
        "pinyin": "tiedong",

        "postfix": "区"
    },
    {
        "id": 1046,
        "name": "梨树",
        "father": 175,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lishu",

        "postfix": "县"
    },
    {
        "id": 1047,
        "name": "伊通",
        "father": 175,
        "key": "y",
        "abbreviation": "yt",
        "pinyin": "yitong",
        "": "满族",
        "postfix": "自治县"
    },
    {
        "id": 1048,
        "name": "公主岭",
        "father": 175,
        "key": "g",
        "abbreviation": "gzl",
        "pinyin": "gongzhuling",

        "postfix": "市"
    },
    {
        "id": 1049,
        "name": "双辽",
        "father": 175,
        "key": "s",
        "abbreviation": "sl",
        "pinyin": "shuangliao",

        "postfix": "市"
    },
    {
        "id": 1050,
        "name": "龙山",
        "father": 176,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "longshan",

        "postfix": "区"
    },
    {
        "id": 1051,
        "name": "西安",
        "father": 176,
        "key": "x",
        "abbreviation": "xa",
        "pinyin": "xian",

        "postfix": "区"
    },
    {
        "id": 1052,
        "name": "东丰",
        "father": 176,
        "key": "d",
        "abbreviation": "df",
        "pinyin": "dongfeng",

        "postfix": "县"
    },
    {
        "id": 1053,
        "name": "东辽",
        "father": 176,
        "key": "d",
        "abbreviation": "dl",
        "pinyin": "dongliao",

        "postfix": "县"
    },
    {
        "id": 1054,
        "name": "东昌",
        "father": 177,
        "key": "d",
        "abbreviation": "dc",
        "pinyin": "dongchang",

        "postfix": "区"
    },
    {
        "id": 1055,
        "name": "二道江",
        "father": 177,
        "key": "e",
        "abbreviation": "edj",
        "pinyin": "erdaojiang",

        "postfix": "区"
    },
    {
        "id": 1056,
        "name": "通化",
        "father": 177,
        "key": "t",
        "abbreviation": "th",
        "pinyin": "tonghua",

        "postfix": "县"
    },
    {
        "id": 1057,
        "name": "辉南",
        "father": 177,
        "key": "h",
        "abbreviation": "hn",
        "pinyin": "huinan",

        "postfix": "县"
    },
    {
        "id": 1058,
        "name": "柳河",
        "father": 177,
        "key": "l",
        "abbreviation": "lh",
        "pinyin": "liuhe",

        "postfix": "县"
    },
    {
        "id": 1059,
        "name": "梅河口",
        "father": 177,
        "key": "m",
        "abbreviation": "mhk",
        "pinyin": "meihekou",

        "postfix": "市"
    },
    {
        "id": 1060,
        "name": "集安",
        "father": 177,
        "key": "j",
        "abbreviation": "ja",
        "pinyin": "jian",

        "postfix": "市"
    },
    {
        "id": 1061,
        "name": "浑江",
        "father": 178,
        "key": "h",
        "abbreviation": "hj",
        "pinyin": "hunjiang",

        "postfix": "区"
    },
    {
        "id": 1062,
        "name": "江源",
        "father": 178,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jiangyuan",

        "postfix": "区"
    },
    {
        "id": 1063,
        "name": "抚松",
        "father": 178,
        "key": "f",
        "abbreviation": "fs",
        "pinyin": "fusong",

        "postfix": "县"
    },
    {
        "id": 1064,
        "name": "靖宇",
        "father": 178,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jingyu",

        "postfix": "县"
    },
    {
        "id": 1065,
        "name": "长白",
        "father": 178,
        "key": "c",
        "abbreviation": "cb",
        "pinyin": "changbai",
        "": "朝鲜族",
        "postfix": "自治县"
    },
    {
        "id": 1066,
        "name": "临江",
        "father": 178,
        "key": "l",
        "abbreviation": "lj",
        "pinyin": "linjiang",

        "postfix": "市"
    },
    {
        "id": 1067,
        "name": "宁江",
        "father": 179,
        "key": "n",
        "abbreviation": "nj",
        "pinyin": "ningjiang",

        "postfix": "区"
    },
    {
        "id": 1068,
        "name": "前郭尔罗斯",
        "father": 179,
        "key": "q",
        "abbreviation": "qgels",
        "pinyin": "qianguoerluosi",
        "": "蒙古族",
        "postfix": "自治县"
    },
    {
        "id": 1069,
        "name": "长岭",
        "father": 179,
        "key": "c",
        "abbreviation": "cl",
        "pinyin": "changling",

        "postfix": "县"
    },
    {
        "id": 1070,
        "name": "乾安",
        "father": 179,
        "key": "q",
        "abbreviation": "qa",
        "pinyin": "qianan",

        "postfix": "县"
    },
    {
        "id": 1071,
        "name": "扶余",
        "father": 179,
        "key": "f",
        "abbreviation": "fy",
        "pinyin": "fuyu",

        "postfix": "市"
    },
    {
        "id": 1072,
        "name": "洮北",
        "father": 180,
        "key": "t",
        "abbreviation": "tb",
        "pinyin": "taobei",

        "postfix": "区"
    },
    {
        "id": 1073,
        "name": "镇赉",
        "father": 180,
        "key": "z",
        "abbreviation": "zl",
        "pinyin": "zhenlai",

        "postfix": "县"
    },
    {
        "id": 1074,
        "name": "洮南",
        "father": 180,
        "key": "t",
        "abbreviation": "tn",
        "pinyin": "taonan",

        "postfix": "市"
    },
    {
        "id": 1075,
        "name": "大安",
        "father": 180,
        "key": "d",
        "abbreviation": "da",
        "pinyin": "daan",

        "postfix": "市"
    },
    {
        "id": 1076,
        "name": "通榆",
        "father": 180,
        "key": "t",
        "abbreviation": "ty",
        "pinyin": "tongyu",

        "postfix": "县"
    },
    {
        "id": 1077,
        "name": "延吉",
        "father": 181,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "yanji",

        "postfix": "市"
    },
    {
        "id": 1078,
        "name": "图们",
        "father": 181,
        "key": "t",
        "abbreviation": "tm",
        "pinyin": "tumen",

        "postfix": "市"
    },
    {
        "id": 1079,
        "name": "敦化",
        "father": 181,
        "key": "d",
        "abbreviation": "dh",
        "pinyin": "dunhua",

        "postfix": "市"
    },
    {
        "id": 1080,
        "name": "珲春",
        "father": 181,
        "key": "h",
        "abbreviation": "hc",
        "pinyin": "hunchun",

        "postfix": "市"
    },
    {
        "id": 1081,
        "name": "龙井",
        "father": 181,
        "key": "l",
        "abbreviation": "lj",
        "pinyin": "longjing",

        "postfix": "市"
    },
    {
        "id": 1082,
        "name": "和龙",
        "father": 181,
        "key": "h",
        "abbreviation": "hl",
        "pinyin": "helong",

        "postfix": "市"
    },
    {
        "id": 1083,
        "name": "汪清",
        "father": 181,
        "key": "w",
        "abbreviation": "wq",
        "pinyin": "wangqing",

        "postfix": "县"
    },
    {
        "id": 1084,
        "name": "安图",
        "father": 181,
        "key": "a",
        "abbreviation": "at",
        "pinyin": "antu",

        "postfix": "县"
    },
    {
        "id": 1085,
        "name": "道里",
        "father": 182,
        "key": "d",
        "abbreviation": "dl",
        "pinyin": "daoli",

        "postfix": "区"
    },
    {
        "id": 1086,
        "name": "南岗",
        "father": 182,
        "key": "n",
        "abbreviation": "ng",
        "pinyin": "nangang",

        "postfix": "区"
    },
    {
        "id": 1087,
        "name": "道外",
        "father": 182,
        "key": "d",
        "abbreviation": "dw",
        "pinyin": "daowai",

        "postfix": "区"
    },
    {
        "id": 1088,
        "name": "平房",
        "father": 182,
        "key": "p",
        "abbreviation": "pf",
        "pinyin": "pingfang",

        "postfix": "区"
    },
    {
        "id": 1089,
        "name": "松北",
        "father": 182,
        "key": "s",
        "abbreviation": "sb",
        "pinyin": "songbei",

        "postfix": "区"
    },
    {
        "id": 1090,
        "name": "香坊",
        "father": 182,
        "key": "x",
        "abbreviation": "xf",
        "pinyin": "xiangfang",

        "postfix": "区"
    },
    {
        "id": 1091,
        "name": "呼兰",
        "father": 182,
        "key": "h",
        "abbreviation": "hl",
        "pinyin": "hulan",

        "postfix": "区"
    },
    {
        "id": 1092,
        "name": "阿城",
        "father": 182,
        "key": "a",
        "abbreviation": "ac",
        "pinyin": "acheng",

        "postfix": "区"
    },
    {
        "id": 1093,
        "name": "依兰",
        "father": 182,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yilan",

        "postfix": "县"
    },
    {
        "id": 1094,
        "name": "方正",
        "father": 182,
        "key": "f",
        "abbreviation": "fz",
        "pinyin": "fangzheng",

        "postfix": "县"
    },
    {
        "id": 1095,
        "name": "宾县",
        "father": 182,
        "key": "b",
        "abbreviation": "bx",
        "pinyin": "binxian",

        "postfix": ""
    },
    {
        "id": 1096,
        "name": "巴彦",
        "father": 182,
        "key": "b",
        "abbreviation": "by",
        "pinyin": "bayan",

        "postfix": "县"
    },
    {
        "id": 1097,
        "name": "木兰",
        "father": 182,
        "key": "m",
        "abbreviation": "ml",
        "pinyin": "mulan",

        "postfix": "县"
    },
    {
        "id": 1098,
        "name": "通河",
        "father": 182,
        "key": "t",
        "abbreviation": "th",
        "pinyin": "tonghe",

        "postfix": "县"
    },
    {
        "id": 1099,
        "name": "延寿",
        "father": 182,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yanshou",

        "postfix": "县"
    },
    {
        "id": 1100,
        "name": "双城",
        "father": 182,
        "key": "s",
        "abbreviation": "sc",
        "pinyin": "shuangcheng",

        "postfix": "区"
    },
    {
        "id": 1101,
        "name": "尚志",
        "father": 182,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "shangzhi",

        "postfix": "市"
    },
    {
        "id": 1102,
        "name": "五常",
        "father": 182,
        "key": "w",
        "abbreviation": "wc",
        "pinyin": "wuchang",

        "postfix": "市"
    },
    {
        "id": 1103,
        "name": "龙沙",
        "father": 183,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "longsha",

        "postfix": "区"
    },
    {
        "id": 1104,
        "name": "建华",
        "father": 183,
        "key": "j",
        "abbreviation": "jh",
        "pinyin": "jianhua",

        "postfix": "区"
    },
    {
        "id": 1105,
        "name": "铁锋",
        "father": 183,
        "key": "t",
        "abbreviation": "tf",
        "pinyin": "tiefeng",

        "postfix": "区"
    },
    {
        "id": 1106,
        "name": "昂昂溪",
        "father": 183,
        "key": "a",
        "abbreviation": "aax",
        "pinyin": "angangxi",

        "postfix": "区"
    },
    {
        "id": 1107,
        "name": "富拉尔基",
        "father": 183,
        "key": "f",
        "abbreviation": "flej",
        "pinyin": "fulaerji",

        "postfix": "区"
    },
    {
        "id": 1108,
        "name": "碾子山",
        "father": 183,
        "key": "n",
        "abbreviation": "nzs",
        "pinyin": "nianzishan",

        "postfix": "区"
    },
    {
        "id": 1109,
        "name": "梅里斯",
        "father": 183,
        "key": "m",
        "abbreviation": "mls",
        "pinyin": "meilisi",
        "": "达斡尔族",
        "postfix": "区"
    },
    {
        "id": 1110,
        "name": "龙江",
        "father": 183,
        "key": "l",
        "abbreviation": "lj",
        "pinyin": "longjiang",

        "postfix": "县"
    },
    {
        "id": 1111,
        "name": "依安",
        "father": 183,
        "key": "y",
        "abbreviation": "ya",
        "pinyin": "yian",

        "postfix": "县"
    },
    {
        "id": 1112,
        "name": "泰来",
        "father": 183,
        "key": "t",
        "abbreviation": "tl",
        "pinyin": "tailai",

        "postfix": "县"
    },
    {
        "id": 1113,
        "name": "甘南",
        "father": 183,
        "key": "g",
        "abbreviation": "gn",
        "pinyin": "gannan",

        "postfix": "县"
    },
    {
        "id": 1114,
        "name": "富裕",
        "father": 183,
        "key": "f",
        "abbreviation": "fy",
        "pinyin": "fuyu",

        "postfix": "县"
    },
    {
        "id": 1115,
        "name": "克山",
        "father": 183,
        "key": "k",
        "abbreviation": "ks",
        "pinyin": "keshan",

        "postfix": "县"
    },
    {
        "id": 1116,
        "name": "克东",
        "father": 183,
        "key": "k",
        "abbreviation": "kd",
        "pinyin": "kedong",

        "postfix": "县"
    },
    {
        "id": 1117,
        "name": "拜泉",
        "father": 183,
        "key": "b",
        "abbreviation": "bq",
        "pinyin": "baiquan",

        "postfix": "县"
    },
    {
        "id": 1118,
        "name": "讷河",
        "father": 183,
        "key": "n",
        "abbreviation": "nh",
        "pinyin": "nehe",

        "postfix": "市"
    },
    {
        "id": 1119,
        "name": "鸡冠",
        "father": 184,
        "key": "j",
        "abbreviation": "jg",
        "pinyin": "jiguan",

        "postfix": "区"
    },
    {
        "id": 1120,
        "name": "恒山",
        "father": 184,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "hengshan",

        "postfix": "区"
    },
    {
        "id": 1121,
        "name": "滴道",
        "father": 184,
        "key": "d",
        "abbreviation": "dd",
        "pinyin": "didao",

        "postfix": "区"
    },
    {
        "id": 1122,
        "name": "梨树",
        "father": 184,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lishu",

        "postfix": "区"
    },
    {
        "id": 1123,
        "name": "城子河",
        "father": 184,
        "key": "c",
        "abbreviation": "czh",
        "pinyin": "chengzihe",

        "postfix": "区"
    },
    {
        "id": 1124,
        "name": "麻山",
        "father": 184,
        "key": "m",
        "abbreviation": "ms",
        "pinyin": "mashan",

        "postfix": "区"
    },
    {
        "id": 1125,
        "name": "鸡东",
        "father": 184,
        "key": "j",
        "abbreviation": "jd",
        "pinyin": "jidong",

        "postfix": "县"
    },
    {
        "id": 1126,
        "name": "虎林",
        "father": 184,
        "key": "h",
        "abbreviation": "hl",
        "pinyin": "hulin",

        "postfix": "市"
    },
    {
        "id": 1127,
        "name": "密山",
        "father": 184,
        "key": "m",
        "abbreviation": "ms",
        "pinyin": "mishan",

        "postfix": "市"
    },
    {
        "id": 1128,
        "name": "向阳",
        "father": 185,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xiangyang",

        "postfix": "区"
    },
    {
        "id": 1129,
        "name": "工农",
        "father": 185,
        "key": "g",
        "abbreviation": "gn",
        "pinyin": "gongnong",

        "postfix": "区"
    },
    {
        "id": 1130,
        "name": "南山",
        "father": 185,
        "key": "n",
        "abbreviation": "ns",
        "pinyin": "nanshan",

        "postfix": "区"
    },
    {
        "id": 1131,
        "name": "兴安",
        "father": 185,
        "key": "x",
        "abbreviation": "xa",
        "pinyin": "xingan",

        "postfix": "区"
    },
    {
        "id": 1132,
        "name": "东山",
        "father": 185,
        "key": "d",
        "abbreviation": "ds",
        "pinyin": "dongshan",

        "postfix": "区"
    },
    {
        "id": 1133,
        "name": "兴山",
        "father": 185,
        "key": "x",
        "abbreviation": "xs",
        "pinyin": "xingshan",

        "postfix": "区"
    },
    {
        "id": 1134,
        "name": "萝北",
        "father": 185,
        "key": "l",
        "abbreviation": "lb",
        "pinyin": "luobei",

        "postfix": "县"
    },
    {
        "id": 1135,
        "name": "绥滨",
        "father": 185,
        "key": "s",
        "abbreviation": "sb",
        "pinyin": "suibin",

        "postfix": "县"
    },
    {
        "id": 1136,
        "name": "尖山",
        "father": 186,
        "key": "j",
        "abbreviation": "js",
        "pinyin": "jianshan",

        "postfix": "区"
    },
    {
        "id": 1137,
        "name": "岭东",
        "father": 186,
        "key": "l",
        "abbreviation": "ld",
        "pinyin": "lingdong",

        "postfix": "区"
    },
    {
        "id": 1138,
        "name": "四方台",
        "father": 186,
        "key": "s",
        "abbreviation": "sft",
        "pinyin": "sifangtai",

        "postfix": "区"
    },
    {
        "id": 1139,
        "name": "宝山",
        "father": 186,
        "key": "b",
        "abbreviation": "bs",
        "pinyin": "baoshan",

        "postfix": "区"
    },
    {
        "id": 1140,
        "name": "集贤",
        "father": 186,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jixian",

        "postfix": "县"
    },
    {
        "id": 1141,
        "name": "友谊",
        "father": 186,
        "key": "y",
        "abbreviation": "yy",
        "pinyin": "youyi",

        "postfix": "县"
    },
    {
        "id": 1142,
        "name": "宝清",
        "father": 186,
        "key": "b",
        "abbreviation": "bq",
        "pinyin": "baoqing",

        "postfix": "县"
    },
    {
        "id": 1143,
        "name": "饶河",
        "father": 186,
        "key": "r",
        "abbreviation": "rh",
        "pinyin": "raohe",

        "postfix": "县"
    },
    {
        "id": 1144,
        "name": "萨尔图",
        "father": 187,
        "key": "s",
        "abbreviation": "set",
        "pinyin": "saertu",

        "postfix": "区"
    },
    {
        "id": 1145,
        "name": "龙凤",
        "father": 187,
        "key": "l",
        "abbreviation": "lf",
        "pinyin": "longfeng",

        "postfix": "区"
    },
    {
        "id": 1146,
        "name": "让胡路",
        "father": 187,
        "key": "r",
        "abbreviation": "rhl",
        "pinyin": "ranghulu",

        "postfix": "区"
    },
    {
        "id": 1147,
        "name": "红岗",
        "father": 187,
        "key": "h",
        "abbreviation": "hg",
        "pinyin": "honggang",

        "postfix": "区"
    },
    {
        "id": 1148,
        "name": "大同",
        "father": 187,
        "key": "d",
        "abbreviation": "dt",
        "pinyin": "datong",

        "postfix": "区"
    },
    {
        "id": 1149,
        "name": "肇州",
        "father": 187,
        "key": "z",
        "abbreviation": "zz",
        "pinyin": "zhaozhou",

        "postfix": "县"
    },
    {
        "id": 1150,
        "name": "肇源",
        "father": 187,
        "key": "z",
        "abbreviation": "zy",
        "pinyin": "zhaoyuan",

        "postfix": "县"
    },
    {
        "id": 1151,
        "name": "林甸",
        "father": 187,
        "key": "l",
        "abbreviation": "ld",
        "pinyin": "lindian",

        "postfix": "县"
    },
    {
        "id": 1152,
        "name": "杜尔伯特",
        "father": 187,
        "key": "d",
        "abbreviation": "debt",
        "pinyin": "duerbote",
        "": "蒙古族",
        "postfix": "自治县"
    },
    {
        "id": 1153,
        "name": "伊春",
        "father": 188,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yichun",

        "postfix": "区"
    },
    {
        "id": 1154,
        "name": "南岔",
        "father": 188,
        "key": "n",
        "abbreviation": "nc",
        "pinyin": "nancha",

        "postfix": "区"
    },
    {
        "id": 1155,
        "name": "友好",
        "father": 188,
        "key": "y",
        "abbreviation": "yh",
        "pinyin": "youhao",

        "postfix": "区"
    },
    {
        "id": 1156,
        "name": "西林",
        "father": 188,
        "key": "x",
        "abbreviation": "xl",
        "pinyin": "xilin",

        "postfix": "区"
    },
    {
        "id": 1157,
        "name": "翠峦",
        "father": 188,
        "key": "c",
        "abbreviation": "cl",
        "pinyin": "cuiluan",

        "postfix": "区"
    },
    {
        "id": 1158,
        "name": "新青",
        "father": 188,
        "key": "x",
        "abbreviation": "xq",
        "pinyin": "xinqing",

        "postfix": "区"
    },
    {
        "id": 1159,
        "name": "美溪",
        "father": 188,
        "key": "m",
        "abbreviation": "mx",
        "pinyin": "meixi",

        "postfix": "区"
    },
    {
        "id": 1160,
        "name": "金山屯",
        "father": 188,
        "key": "j",
        "abbreviation": "jst",
        "pinyin": "jinshantun",

        "postfix": "区"
    },
    {
        "id": 1161,
        "name": "五营",
        "father": 188,
        "key": "w",
        "abbreviation": "wy",
        "pinyin": "wuying",

        "postfix": "区"
    },
    {
        "id": 1162,
        "name": "乌马河",
        "father": 188,
        "key": "w",
        "abbreviation": "wmh",
        "pinyin": "wumahe",

        "postfix": "区"
    },
    {
        "id": 1163,
        "name": "汤旺河",
        "father": 188,
        "key": "t",
        "abbreviation": "twh",
        "pinyin": "tangwanghe",

        "postfix": "区"
    },
    {
        "id": 1164,
        "name": "带岭",
        "father": 188,
        "key": "d",
        "abbreviation": "dl",
        "pinyin": "dailing",

        "postfix": "区"
    },
    {
        "id": 1165,
        "name": "乌伊岭",
        "father": 188,
        "key": "w",
        "abbreviation": "wyl",
        "pinyin": "wuyiling",

        "postfix": "区"
    },
    {
        "id": 1166,
        "name": "红星",
        "father": 188,
        "key": "h",
        "abbreviation": "hx",
        "pinyin": "hongxing",

        "postfix": "区"
    },
    {
        "id": 1167,
        "name": "上甘岭",
        "father": 188,
        "key": "s",
        "abbreviation": "sgl",
        "pinyin": "shangganling",

        "postfix": "区"
    },
    {
        "id": 1168,
        "name": "嘉荫",
        "father": 188,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jiayin",

        "postfix": "县"
    },
    {
        "id": 1169,
        "name": "铁力",
        "father": 188,
        "key": "t",
        "abbreviation": "tl",
        "pinyin": "tieli",

        "postfix": "市"
    },
    {
        "id": 1170,
        "name": "向阳",
        "father": 189,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xiangyang",

        "postfix": "区"
    },
    {
        "id": 1171,
        "name": "前进",
        "father": 189,
        "key": "q",
        "abbreviation": "qj",
        "pinyin": "qianjin",

        "postfix": "区"
    },
    {
        "id": 1172,
        "name": "东风",
        "father": 189,
        "key": "d",
        "abbreviation": "df",
        "pinyin": "dongfeng",

        "postfix": "区"
    },
    {
        "id": 1173,
        "name": "郊区",
        "father": 189,
        "key": "j",
        "abbreviation": "jq",
        "pinyin": "jiaoqu",

        "postfix": ""
    },
    {
        "id": 1174,
        "name": "桦南",
        "father": 189,
        "key": "h",
        "abbreviation": "hn",
        "pinyin": "huanan",

        "postfix": "县"
    },
    {
        "id": 1175,
        "name": "桦川",
        "father": 189,
        "key": "h",
        "abbreviation": "hc",
        "pinyin": "huachuan",

        "postfix": "县"
    },
    {
        "id": 1176,
        "name": "汤原",
        "father": 189,
        "key": "t",
        "abbreviation": "ty",
        "pinyin": "tangyuan",

        "postfix": "县"
    },
    {
        "id": 1177,
        "name": "抚远",
        "father": 189,
        "key": "f",
        "abbreviation": "fy",
        "pinyin": "fuyuan",

        "postfix": "市"
    },
    {
        "id": 1178,
        "name": "同江",
        "father": 189,
        "key": "t",
        "abbreviation": "tj",
        "pinyin": "tongjiang",

        "postfix": "市"
    },
    {
        "id": 1179,
        "name": "富锦",
        "father": 189,
        "key": "f",
        "abbreviation": "fj",
        "pinyin": "fujin",

        "postfix": "市"
    },
    {
        "id": 1180,
        "name": "新兴",
        "father": 190,
        "key": "x",
        "abbreviation": "xx",
        "pinyin": "xinxing",

        "postfix": "区"
    },
    {
        "id": 1181,
        "name": "桃山",
        "father": 190,
        "key": "t",
        "abbreviation": "ts",
        "pinyin": "taoshan",

        "postfix": "区"
    },
    {
        "id": 1182,
        "name": "茄子河",
        "father": 190,
        "key": "q",
        "abbreviation": "qzh",
        "pinyin": "qiezihe",

        "postfix": "区"
    },
    {
        "id": 1183,
        "name": "勃利",
        "father": 190,
        "key": "b",
        "abbreviation": "bl",
        "pinyin": "boli",

        "postfix": "县"
    },
    {
        "id": 1184,
        "name": "东安",
        "father": 191,
        "key": "d",
        "abbreviation": "da",
        "pinyin": "dongan",

        "postfix": "区"
    },
    {
        "id": 1185,
        "name": "阳明",
        "father": 191,
        "key": "y",
        "abbreviation": "ym",
        "pinyin": "yangming",

        "postfix": "区"
    },
    {
        "id": 1186,
        "name": "爱民",
        "father": 191,
        "key": "a",
        "abbreviation": "am",
        "pinyin": "aimin",

        "postfix": "区"
    },
    {
        "id": 1187,
        "name": "西安",
        "father": 191,
        "key": "x",
        "abbreviation": "xa",
        "pinyin": "xian",

        "postfix": "区"
    },
    {
        "id": 1188,
        "name": "东宁",
        "father": 191,
        "key": "d",
        "abbreviation": "dn",
        "pinyin": "dongning",

        "postfix": "市"
    },
    {
        "id": 1189,
        "name": "林口",
        "father": 191,
        "key": "l",
        "abbreviation": "lk",
        "pinyin": "linkou",

        "postfix": "县"
    },
    {
        "id": 1190,
        "name": "绥芬河",
        "father": 191,
        "key": "s",
        "abbreviation": "sfh",
        "pinyin": "suifenhe",

        "postfix": "市"
    },
    {
        "id": 1191,
        "name": "海林",
        "father": 191,
        "key": "h",
        "abbreviation": "hl",
        "pinyin": "hailin",

        "postfix": "市"
    },
    {
        "id": 1192,
        "name": "宁安",
        "father": 191,
        "key": "n",
        "abbreviation": "na",
        "pinyin": "ningan",

        "postfix": "市"
    },
    {
        "id": 1193,
        "name": "穆棱",
        "father": 191,
        "key": "m",
        "abbreviation": "ml",
        "pinyin": "muleng",

        "postfix": "市"
    },
    {
        "id": 1194,
        "name": "爱辉",
        "father": 192,
        "key": "a",
        "abbreviation": "ah",
        "pinyin": "aihui",

        "postfix": "区"
    },
    {
        "id": 1195,
        "name": "嫩江",
        "father": 192,
        "key": "n",
        "abbreviation": "nj",
        "pinyin": "nenjiang",

        "postfix": "县"
    },
    {
        "id": 1196,
        "name": "逊克",
        "father": 192,
        "key": "x",
        "abbreviation": "xk",
        "pinyin": "xunke",

        "postfix": "县"
    },
    {
        "id": 1197,
        "name": "孙吴",
        "father": 192,
        "key": "s",
        "abbreviation": "sw",
        "pinyin": "sunwu",

        "postfix": "县"
    },
    {
        "id": 1198,
        "name": "北安",
        "father": 192,
        "key": "b",
        "abbreviation": "ba",
        "pinyin": "beian",

        "postfix": "市"
    },
    {
        "id": 1199,
        "name": "五大连池",
        "father": 192,
        "key": "w",
        "abbreviation": "wdlc",
        "pinyin": "wudalianchi",

        "postfix": "市"
    },
    {
        "id": 1200,
        "name": "北林",
        "father": 193,
        "key": "b",
        "abbreviation": "bl",
        "pinyin": "beilin",

        "postfix": "区"
    },
    {
        "id": 1201,
        "name": "望奎",
        "father": 193,
        "key": "w",
        "abbreviation": "wk",
        "pinyin": "wangkui",

        "postfix": "县"
    },
    {
        "id": 1202,
        "name": "兰西",
        "father": 193,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "lanxi",

        "postfix": "县"
    },
    {
        "id": 1203,
        "name": "青冈",
        "father": 193,
        "key": "q",
        "abbreviation": "qg",
        "pinyin": "qinggang",

        "postfix": "县"
    },
    {
        "id": 1204,
        "name": "庆安",
        "father": 193,
        "key": "q",
        "abbreviation": "qa",
        "pinyin": "qingan",

        "postfix": "县"
    },
    {
        "id": 1205,
        "name": "明水",
        "father": 193,
        "key": "m",
        "abbreviation": "ms",
        "pinyin": "mingshui",

        "postfix": "县"
    },
    {
        "id": 1206,
        "name": "绥棱",
        "father": 193,
        "key": "s",
        "abbreviation": "sl",
        "pinyin": "suileng",

        "postfix": "县"
    },
    {
        "id": 1207,
        "name": "安达",
        "father": 193,
        "key": "a",
        "abbreviation": "ad",
        "pinyin": "anda",

        "postfix": "市"
    },
    {
        "id": 1208,
        "name": "肇东",
        "father": 193,
        "key": "z",
        "abbreviation": "zd",
        "pinyin": "zhaodong",

        "postfix": "市"
    },
    {
        "id": 1209,
        "name": "海伦",
        "father": 193,
        "key": "h",
        "abbreviation": "hl",
        "pinyin": "hailun",

        "postfix": "市"
    },
    {
        "id": 1210,
        "name": "加格达奇",
        "father": 194,
        "key": "j",
        "abbreviation": "jgdq",
        "pinyin": "jiagedaqi",

        "postfix": "区"
    },
    {
        "id": 1211,
        "name": "松岭",
        "father": 194,
        "key": "s",
        "abbreviation": "sl",
        "pinyin": "songling",

        "postfix": "区"
    },
    {
        "id": 1212,
        "name": "新林",
        "father": 194,
        "key": "x",
        "abbreviation": "xl",
        "pinyin": "xinlin",

        "postfix": "区"
    },
    {
        "id": 1213,
        "name": "呼中",
        "father": 194,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "huzhong",

        "postfix": "区"
    },
    {
        "id": 1214,
        "name": "呼玛",
        "father": 194,
        "key": "h",
        "abbreviation": "hm",
        "pinyin": "huma",

        "postfix": "县"
    },
    {
        "id": 1215,
        "name": "塔河",
        "father": 194,
        "key": "t",
        "abbreviation": "th",
        "pinyin": "tahe",

        "postfix": "县"
    },
    {
        "id": 1216,
        "name": "漠河",
        "father": 194,
        "key": "m",
        "abbreviation": "mh",
        "pinyin": "mohe",

        "postfix": "市"
    },
    {
        "id": 1217,
        "name": "玄武",
        "father": 195,
        "key": "x",
        "abbreviation": "xw",
        "pinyin": "xuanwu",

        "postfix": "区"
    },
    {
        "id": 1218,
        "name": "秦淮",
        "father": 195,
        "key": "q",
        "abbreviation": "qh",
        "pinyin": "qinhuai",

        "postfix": "区"
    },
    {
        "id": 1219,
        "name": "建邺",
        "father": 195,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jianye",

        "postfix": "区"
    },
    {
        "id": 1220,
        "name": "鼓楼",
        "father": 195,
        "key": "g",
        "abbreviation": "gl",
        "pinyin": "gulou",

        "postfix": "区"
    },
    {
        "id": 1221,
        "name": "浦口",
        "father": 195,
        "key": "p",
        "abbreviation": "pk",
        "pinyin": "pukou",

        "postfix": "区"
    },
    {
        "id": 1222,
        "name": "栖霞",
        "father": 195,
        "key": "q",
        "abbreviation": "qx",
        "pinyin": "qixia",

        "postfix": "区"
    },
    {
        "id": 1223,
        "name": "雨花台",
        "father": 195,
        "key": "y",
        "abbreviation": "yht",
        "pinyin": "yuhuatai",

        "postfix": "区"
    },
    {
        "id": 1224,
        "name": "江宁",
        "father": 195,
        "key": "j",
        "abbreviation": "jn",
        "pinyin": "jiangning",

        "postfix": "区"
    },
    {
        "id": 1225,
        "name": "六合",
        "father": 195,
        "key": "l",
        "abbreviation": "lh",
        "pinyin": "liuhe",

        "postfix": "区"
    },
    {
        "id": 1226,
        "name": "溧水",
        "father": 195,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lishui",

        "postfix": "区"
    },
    {
        "id": 1227,
        "name": "高淳",
        "father": 195,
        "key": "g",
        "abbreviation": "gc",
        "pinyin": "gaochun",

        "postfix": "区"
    },
    {
        "id": 1228,
        "name": "梁溪",
        "father": 196,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "liangxi",

        "postfix": "区"
    },
    {
        "id": 1229,
        "name": "新吴",
        "father": 196,
        "key": "x",
        "abbreviation": "xw",
        "pinyin": "xinwu",

        "postfix": "区"
    },
    {
        "id": 1231,
        "name": "锡山",
        "father": 196,
        "key": "x",
        "abbreviation": "xs",
        "pinyin": "xishan",

        "postfix": "区"
    },
    {
        "id": 1232,
        "name": "惠山",
        "father": 196,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "huishan",

        "postfix": "区"
    },
    {
        "id": 1233,
        "name": "滨湖",
        "father": 196,
        "key": "b",
        "abbreviation": "bh",
        "pinyin": "binhu",

        "postfix": "区"
    },
    {
        "id": 1234,
        "name": "江阴",
        "father": 196,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jiangyin",

        "postfix": "市"
    },
    {
        "id": 1235,
        "name": "宜兴",
        "father": 196,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yixing",

        "postfix": "市"
    },
    {
        "id": 1236,
        "name": "鼓楼",
        "father": 197,
        "key": "g",
        "abbreviation": "gl",
        "pinyin": "gulou",

        "postfix": "区"
    },
    {
        "id": 1237,
        "name": "云龙",
        "father": 197,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yunlong",

        "postfix": "区"
    },
    {
        "id": 1238,
        "name": "贾汪",
        "father": 197,
        "key": "j",
        "abbreviation": "jw",
        "pinyin": "jiawang",

        "postfix": "区"
    },
    {
        "id": 1239,
        "name": "泉山",
        "father": 197,
        "key": "q",
        "abbreviation": "qs",
        "pinyin": "quanshan",

        "postfix": "区"
    },
    {
        "id": 1240,
        "name": "铜山",
        "father": 197,
        "key": "t",
        "abbreviation": "ts",
        "pinyin": "tongshan",

        "postfix": "区"
    },
    {
        "id": 1241,
        "name": "丰县",
        "father": 197,
        "key": "f",
        "abbreviation": "fx",
        "pinyin": "fengxian",

        "postfix": ""
    },
    {
        "id": 1242,
        "name": "沛县",
        "father": 197,
        "key": "p",
        "abbreviation": "px",
        "pinyin": "peixian",

        "postfix": ""
    },
    {
        "id": 1243,
        "name": "睢宁",
        "father": 197,
        "key": "s",
        "abbreviation": "sn",
        "pinyin": "suining",

        "postfix": "县"
    },
    {
        "id": 1244,
        "name": "新沂",
        "father": 197,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xinyi",

        "postfix": "市"
    },
    {
        "id": 1245,
        "name": "邳州",
        "father": 197,
        "key": "p",
        "abbreviation": "pz",
        "pinyin": "pizhou",

        "postfix": "市"
    },
    {
        "id": 1246,
        "name": "天宁",
        "father": 198,
        "key": "t",
        "abbreviation": "tn",
        "pinyin": "tianning",

        "postfix": "区"
    },
    {
        "id": 1247,
        "name": "钟楼",
        "father": 198,
        "key": "z",
        "abbreviation": "zl",
        "pinyin": "zhonglou",

        "postfix": "区"
    },
    {
        "id": 1249,
        "name": "新北",
        "father": 198,
        "key": "x",
        "abbreviation": "xb",
        "pinyin": "xinbei",

        "postfix": "区"
    },
    {
        "id": 1250,
        "name": "武进",
        "father": 198,
        "key": "w",
        "abbreviation": "wj",
        "pinyin": "wujin",

        "postfix": "区"
    },
    {
        "id": 1251,
        "name": "溧阳",
        "father": 198,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "liyang",

        "postfix": "市"
    },
    {
        "id": 1252,
        "name": "金坛",
        "father": 198,
        "key": "j",
        "abbreviation": "jt",
        "pinyin": "jintan",

        "postfix": "区"
    },
    {
        "id": 1253,
        "name": "虎丘",
        "father": 199,
        "key": "h",
        "abbreviation": "hq",
        "pinyin": "huqiu",

        "postfix": "区"
    },
    {
        "id": 1254,
        "name": "吴中",
        "father": 199,
        "key": "w",
        "abbreviation": "wz",
        "pinyin": "wuzhong",

        "postfix": "区"
    },
    {
        "id": 1255,
        "name": "相城",
        "father": 199,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xiangcheng",

        "postfix": "区"
    },
    {
        "id": 1256,
        "name": "姑苏",
        "father": 199,
        "key": "g",
        "abbreviation": "gs",
        "pinyin": "gusu",

        "postfix": "区"
    },
    {
        "id": 1257,
        "name": "吴江",
        "father": 199,
        "key": "w",
        "abbreviation": "wj",
        "pinyin": "wujiang",

        "postfix": "市"
    },
    {
        "id": 1258,
        "name": "常熟",
        "father": 199,
        "key": "c",
        "abbreviation": "cs",
        "pinyin": "changshu",

        "postfix": "市"
    },
    {
        "id": 1259,
        "name": "张家港",
        "father": 199,
        "key": "z",
        "abbreviation": "zjg",
        "pinyin": "zhangjiagang",

        "postfix": "市"
    },
    {
        "id": 1260,
        "name": "昆山",
        "father": 199,
        "key": "k",
        "abbreviation": "ks",
        "pinyin": "kunshan",

        "postfix": "市"
    },
    {
        "id": 1261,
        "name": "太仓",
        "father": 199,
        "key": "t",
        "abbreviation": "tc",
        "pinyin": "taicang",

        "postfix": "市"
    },
    {
        "id": 1262,
        "name": "崇川",
        "father": 200,
        "key": "c",
        "abbreviation": "cc",
        "pinyin": "chongchuan",

        "postfix": "区"
    },
    {
        "id": 1263,
        "name": "港闸",
        "father": 200,
        "key": "g",
        "abbreviation": "gz",
        "pinyin": "gangzha",

        "postfix": "区"
    },
    {
        "id": 1264,
        "name": "通州",
        "father": 200,
        "key": "t",
        "abbreviation": "tz",
        "pinyin": "tongzhou",

        "postfix": "区"
    },
    {
        "id": 1265,
        "name": "海安",
        "father": 200,
        "key": "h",
        "abbreviation": "ha",
        "pinyin": "haian",

        "postfix": "市"
    },
    {
        "id": 1266,
        "name": "如东",
        "father": 200,
        "key": "r",
        "abbreviation": "rd",
        "pinyin": "rudong",

        "postfix": "县"
    },
    {
        "id": 1267,
        "name": "启东",
        "father": 200,
        "key": "q",
        "abbreviation": "qd",
        "pinyin": "qidong",

        "postfix": "市"
    },
    {
        "id": 1268,
        "name": "如皋",
        "father": 200,
        "key": "r",
        "abbreviation": "rg",
        "pinyin": "rugao",

        "postfix": "市"
    },
    {
        "id": 1269,
        "name": "海门",
        "father": 200,
        "key": "h",
        "abbreviation": "hm",
        "pinyin": "haimen",

        "postfix": "市"
    },
    {
        "id": 1270,
        "name": "连云",
        "father": 201,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "lianyun",

        "postfix": "区"
    },
    {
        "id": 1272,
        "name": "海州",
        "father": 201,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "haizhou",

        "postfix": "区"
    },
    {
        "id": 1273,
        "name": "赣榆",
        "father": 201,
        "key": "g",
        "abbreviation": "gy",
        "pinyin": "ganyu",

        "postfix": "区"
    },
    {
        "id": 1274,
        "name": "东海",
        "father": 201,
        "key": "d",
        "abbreviation": "dh",
        "pinyin": "donghai",

        "postfix": "县"
    },
    {
        "id": 1275,
        "name": "灌云",
        "father": 201,
        "key": "g",
        "abbreviation": "gy",
        "pinyin": "guanyun",

        "postfix": "县"
    },
    {
        "id": 1276,
        "name": "灌南",
        "father": 201,
        "key": "g",
        "abbreviation": "gn",
        "pinyin": "guannan",

        "postfix": "县"
    },
    {
        "id": 1278,
        "name": "淮安",
        "father": 202,
        "key": "h",
        "abbreviation": "ha",
        "pinyin": "huaian",

        "postfix": "区"
    },
    {
        "id": 1279,
        "name": "淮阴",
        "father": 202,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "huaiyin",

        "postfix": "区"
    },
    {
        "id": 1280,
        "name": "清江浦",
        "father": 202,
        "key": "q",
        "abbreviation": "qjp",
        "pinyin": "qingjiangpu",

        "postfix": "区"
    },
    {
        "id": 1281,
        "name": "涟水",
        "father": 202,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lianshui",

        "postfix": "县"
    },
    {
        "id": 1282,
        "name": "洪泽",
        "father": 202,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "hongze",

        "postfix": "区"
    },
    {
        "id": 1283,
        "name": "盱眙",
        "father": 202,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xuyi",

        "postfix": "县"
    },
    {
        "id": 1284,
        "name": "金湖",
        "father": 202,
        "key": "j",
        "abbreviation": "jh",
        "pinyin": "jinhu",

        "postfix": "县"
    },
    {
        "id": 1285,
        "name": "亭湖",
        "father": 203,
        "key": "t",
        "abbreviation": "th",
        "pinyin": "tinghu",

        "postfix": "区"
    },
    {
        "id": 1286,
        "name": "盐都",
        "father": 203,
        "key": "y",
        "abbreviation": "yd",
        "pinyin": "yandu",

        "postfix": "区"
    },
    {
        "id": 1287,
        "name": "响水",
        "father": 203,
        "key": "x",
        "abbreviation": "xs",
        "pinyin": "xiangshui",

        "postfix": "县"
    },
    {
        "id": 1288,
        "name": "滨海",
        "father": 203,
        "key": "b",
        "abbreviation": "bh",
        "pinyin": "binhai",

        "postfix": "县"
    },
    {
        "id": 1289,
        "name": "阜宁",
        "father": 203,
        "key": "f",
        "abbreviation": "fn",
        "pinyin": "funing",

        "postfix": "县"
    },
    {
        "id": 1290,
        "name": "射阳",
        "father": 203,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "sheyang",

        "postfix": "县"
    },
    {
        "id": 1291,
        "name": "建湖",
        "father": 203,
        "key": "j",
        "abbreviation": "jh",
        "pinyin": "jianhu",

        "postfix": "县"
    },
    {
        "id": 1292,
        "name": "东台",
        "father": 203,
        "key": "d",
        "abbreviation": "dt",
        "pinyin": "dongtai",

        "postfix": "市"
    },
    {
        "id": 1293,
        "name": "大丰",
        "father": 203,
        "key": "d",
        "abbreviation": "df",
        "pinyin": "dafeng",

        "postfix": "区"
    },
    {
        "id": 1294,
        "name": "广陵",
        "father": 204,
        "key": "g",
        "abbreviation": "gl",
        "pinyin": "guangling",

        "postfix": "区"
    },
    {
        "id": 1295,
        "name": "邗江",
        "father": 204,
        "key": "h",
        "abbreviation": "hj",
        "pinyin": "hanjiang",

        "postfix": "区"
    },
    {
        "id": 1296,
        "name": "江都",
        "father": 204,
        "key": "j",
        "abbreviation": "jd",
        "pinyin": "jiangu",

        "postfix": "区"
    },
    {
        "id": 1297,
        "name": "宝应",
        "father": 204,
        "key": "b",
        "abbreviation": "by",
        "pinyin": "baoying",

        "postfix": "县"
    },
    {
        "id": 1298,
        "name": "仪征",
        "father": 204,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yizheng",

        "postfix": "市"
    },
    {
        "id": 1299,
        "name": "高邮",
        "father": 204,
        "key": "g",
        "abbreviation": "gy",
        "pinyin": "gaoyou",

        "postfix": "市"
    },
    {
        "id": 1300,
        "name": "京口",
        "father": 205,
        "key": "j",
        "abbreviation": "jk",
        "pinyin": "jingkou",

        "postfix": "区"
    },
    {
        "id": 1301,
        "name": "润州",
        "father": 205,
        "key": "r",
        "abbreviation": "rz",
        "pinyin": "runzhou",

        "postfix": "区"
    },
    {
        "id": 1302,
        "name": "丹徒",
        "father": 205,
        "key": "d",
        "abbreviation": "dt",
        "pinyin": "dantu",

        "postfix": "区"
    },
    {
        "id": 1303,
        "name": "丹阳",
        "father": 205,
        "key": "d",
        "abbreviation": "dy",
        "pinyin": "danyang",

        "postfix": "市"
    },
    {
        "id": 1304,
        "name": "扬中",
        "father": 205,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yangzhong",

        "postfix": "市"
    },
    {
        "id": 1305,
        "name": "句容",
        "father": 205,
        "key": "j",
        "abbreviation": "jr",
        "pinyin": "jurong",

        "postfix": "市"
    },
    {
        "id": 1306,
        "name": "海陵",
        "father": 206,
        "key": "h",
        "abbreviation": "hl",
        "pinyin": "hailing",

        "postfix": "区"
    },
    {
        "id": 1307,
        "name": "高港",
        "father": 206,
        "key": "g",
        "abbreviation": "gg",
        "pinyin": "gaogang",

        "postfix": "区"
    },
    {
        "id": 1308,
        "name": "兴化",
        "father": 206,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xinghua",

        "postfix": "市"
    },
    {
        "id": 1309,
        "name": "靖江",
        "father": 206,
        "key": "j",
        "abbreviation": "jj",
        "pinyin": "jingjiang",

        "postfix": "市"
    },
    {
        "id": 1310,
        "name": "泰兴",
        "father": 206,
        "key": "t",
        "abbreviation": "tx",
        "pinyin": "taixing",

        "postfix": "市"
    },
    {
        "id": 1311,
        "name": "姜堰",
        "father": 206,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jiangyan",

        "postfix": "区"
    },
    {
        "id": 1312,
        "name": "宿城",
        "father": 207,
        "key": "s",
        "abbreviation": "sc",
        "pinyin": "sucheng",

        "postfix": "区"
    },
    {
        "id": 1313,
        "name": "宿豫",
        "father": 207,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "suyu",

        "postfix": "区"
    },
    {
        "id": 1314,
        "name": "沭阳",
        "father": 207,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "shuyang",

        "postfix": "县"
    },
    {
        "id": 1315,
        "name": "泗阳",
        "father": 207,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "siyang",

        "postfix": "县"
    },
    {
        "id": 1316,
        "name": "泗洪",
        "father": 207,
        "key": "s",
        "abbreviation": "sh",
        "pinyin": "sihong",

        "postfix": "县"
    },
    {
        "id": 1317,
        "name": "上城",
        "father": 208,
        "key": "s",
        "abbreviation": "sc",
        "pinyin": "shangcheng",

        "postfix": "区"
    },
    {
        "id": 1318,
        "name": "下城",
        "father": 208,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xiacheng",

        "postfix": "区"
    },
    {
        "id": 1319,
        "name": "江干",
        "father": 208,
        "key": "j",
        "abbreviation": "jg",
        "pinyin": "jianggan",

        "postfix": "区"
    },
    {
        "id": 1320,
        "name": "拱墅",
        "father": 208,
        "key": "g",
        "abbreviation": "gs",
        "pinyin": "gongshu",

        "postfix": "区"
    },
    {
        "id": 1321,
        "name": "西湖",
        "father": 208,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xihu",

        "postfix": "区"
    },
    {
        "id": 1322,
        "name": "滨江",
        "father": 208,
        "key": "b",
        "abbreviation": "bj",
        "pinyin": "binjiang",

        "postfix": "区"
    },
    {
        "id": 1323,
        "name": "萧山",
        "father": 208,
        "key": "x",
        "abbreviation": "xs",
        "pinyin": "xiaoshan",

        "postfix": "区"
    },
    {
        "id": 1324,
        "name": "余杭",
        "father": 208,
        "key": "y",
        "abbreviation": "yh",
        "pinyin": "yuhang",

        "postfix": "区"
    },
    {
        "id": 1325,
        "name": "桐庐",
        "father": 208,
        "key": "t",
        "abbreviation": "tl",
        "pinyin": "tonglu",

        "postfix": "县"
    },
    {
        "id": 1326,
        "name": "淳安",
        "father": 208,
        "key": "c",
        "abbreviation": "ca",
        "pinyin": "chunan",

        "postfix": "县"
    },
    {
        "id": 1327,
        "name": "建德",
        "father": 208,
        "key": "j",
        "abbreviation": "jd",
        "pinyin": "jiande",

        "postfix": "市"
    },
    {
        "id": 1328,
        "name": "富阳",
        "father": 208,
        "key": "f",
        "abbreviation": "fy",
        "pinyin": "fuyang",

        "postfix": "区"
    },
    {
        "id": 1329,
        "name": "临安",
        "father": 208,
        "key": "l",
        "abbreviation": "la",
        "pinyin": "linan",

        "postfix": "区"
    },
    {
        "id": 1330,
        "name": "海曙",
        "father": 209,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "haishu",

        "postfix": "区"
    },
    {
        "id": 1332,
        "name": "江北",
        "father": 209,
        "key": "j",
        "abbreviation": "jb",
        "pinyin": "jiangbei",

        "postfix": "区"
    },
    {
        "id": 1333,
        "name": "北仑",
        "father": 209,
        "key": "b",
        "abbreviation": "bl",
        "pinyin": "beilun",

        "postfix": "区"
    },
    {
        "id": 1334,
        "name": "镇海",
        "father": 209,
        "key": "z",
        "abbreviation": "zh",
        "pinyin": "zhenhai",

        "postfix": "区"
    },
    {
        "id": 1335,
        "name": "鄞州",
        "father": 209,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yinzhou",

        "postfix": "区"
    },
    {
        "id": 1336,
        "name": "象山",
        "father": 209,
        "key": "x",
        "abbreviation": "xs",
        "pinyin": "xiangshan",

        "postfix": "县"
    },
    {
        "id": 1337,
        "name": "宁海",
        "father": 209,
        "key": "n",
        "abbreviation": "nh",
        "pinyin": "ninghai",

        "postfix": "县"
    },
    {
        "id": 1338,
        "name": "余姚",
        "father": 209,
        "key": "y",
        "abbreviation": "yy",
        "pinyin": "yuyao",

        "postfix": "市"
    },
    {
        "id": 1339,
        "name": "慈溪",
        "father": 209,
        "key": "c",
        "abbreviation": "cx",
        "pinyin": "cixi",

        "postfix": "市"
    },
    {
        "id": 1340,
        "name": "奉化",
        "father": 209,
        "key": "f",
        "abbreviation": "fh",
        "pinyin": "fenghua",

        "postfix": "区"
    },
    {
        "id": 1341,
        "name": "鹿城",
        "father": 210,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "lucheng",

        "postfix": "区"
    },
    {
        "id": 1342,
        "name": "龙湾",
        "father": 210,
        "key": "l",
        "abbreviation": "lw",
        "pinyin": "longwan",

        "postfix": "区"
    },
    {
        "id": 1343,
        "name": "瓯海",
        "father": 210,
        "key": "o",
        "abbreviation": "oh",
        "pinyin": "ouhai",

        "postfix": "区"
    },
    {
        "id": 1344,
        "name": "洞头",
        "father": 210,
        "key": "d",
        "abbreviation": "dt",
        "pinyin": "dongtou",

        "postfix": "区"
    },
    {
        "id": 1345,
        "name": "永嘉",
        "father": 210,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "yongjia",

        "postfix": "县"
    },
    {
        "id": 1346,
        "name": "平阳",
        "father": 210,
        "key": "p",
        "abbreviation": "py",
        "pinyin": "pingyang",

        "postfix": "县"
    },
    {
        "id": 1347,
        "name": "苍南",
        "father": 210,
        "key": "c",
        "abbreviation": "cn",
        "pinyin": "cangnan",

        "postfix": "县"
    },
    {
        "id": 1348,
        "name": "文成",
        "father": 210,
        "key": "w",
        "abbreviation": "wc",
        "pinyin": "wencheng",

        "postfix": "县"
    },
    {
        "id": 1349,
        "name": "泰顺",
        "father": 210,
        "key": "t",
        "abbreviation": "ts",
        "pinyin": "taishun",

        "postfix": "县"
    },
    {
        "id": 1350,
        "name": "瑞安",
        "father": 210,
        "key": "r",
        "abbreviation": "ra",
        "pinyin": "ruian",

        "postfix": "市"
    },
    {
        "id": 1351,
        "name": "乐清",
        "father": 210,
        "key": "l",
        "abbreviation": "lq",
        "pinyin": "leqing",

        "postfix": "市"
    },
    {
        "id": 1352,
        "name": "南湖",
        "father": 211,
        "key": "n",
        "abbreviation": "nh",
        "pinyin": "nanhu",

        "postfix": "区"
    },
    {
        "id": 1353,
        "name": "秀洲",
        "father": 211,
        "key": "x",
        "abbreviation": "xz",
        "pinyin": "xiuzhou",

        "postfix": "区"
    },
    {
        "id": 1354,
        "name": "嘉善",
        "father": 211,
        "key": "j",
        "abbreviation": "js",
        "pinyin": "jiashan",

        "postfix": "县"
    },
    {
        "id": 1355,
        "name": "海盐",
        "father": 211,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "haiyan",

        "postfix": "县"
    },
    {
        "id": 1356,
        "name": "海宁",
        "father": 211,
        "key": "h",
        "abbreviation": "hn",
        "pinyin": "haining",

        "postfix": "市"
    },
    {
        "id": 1357,
        "name": "平湖",
        "father": 211,
        "key": "p",
        "abbreviation": "ph",
        "pinyin": "pinghu",

        "postfix": "市"
    },
    {
        "id": 1358,
        "name": "桐乡",
        "father": 211,
        "key": "t",
        "abbreviation": "tx",
        "pinyin": "tongxiang",

        "postfix": "市"
    },
    {
        "id": 1359,
        "name": "吴兴",
        "father": 212,
        "key": "w",
        "abbreviation": "wx",
        "pinyin": "wuxing",

        "postfix": "区"
    },
    {
        "id": 1360,
        "name": "南浔",
        "father": 212,
        "key": "n",
        "abbreviation": "nx",
        "pinyin": "nanxun",

        "postfix": "区"
    },
    {
        "id": 1361,
        "name": "德清",
        "father": 212,
        "key": "d",
        "abbreviation": "dq",
        "pinyin": "deqing",

        "postfix": "县"
    },
    {
        "id": 1362,
        "name": "长兴",
        "father": 212,
        "key": "c",
        "abbreviation": "cx",
        "pinyin": "changxing",

        "postfix": "县"
    },
    {
        "id": 1363,
        "name": "安吉",
        "father": 212,
        "key": "a",
        "abbreviation": "aj",
        "pinyin": "anji",

        "postfix": "县"
    },
    {
        "id": 1364,
        "name": "越城",
        "father": 213,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yuecheng",

        "postfix": "区"
    },
    {
        "id": 1365,
        "name": "柯桥",
        "father": 213,
        "key": "k",
        "abbreviation": "kq",
        "pinyin": "keqiao",

        "postfix": "区"
    },
    {
        "id": 1366,
        "name": "新昌",
        "father": 213,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xinchang",

        "postfix": "县"
    },
    {
        "id": 1367,
        "name": "诸暨",
        "father": 213,
        "key": "z",
        "abbreviation": "zj",
        "pinyin": "zhuji",

        "postfix": "市"
    },
    {
        "id": 1368,
        "name": "上虞",
        "father": 213,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "shangyu",

        "postfix": "区"
    },
    {
        "id": 1369,
        "name": "嵊州",
        "father": 213,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "shengzhou",

        "postfix": "市"
    },
    {
        "id": 1370,
        "name": "婺城",
        "father": 214,
        "key": "w",
        "abbreviation": "wc",
        "pinyin": "wucheng",

        "postfix": "区"
    },
    {
        "id": 1371,
        "name": "金东",
        "father": 214,
        "key": "j",
        "abbreviation": "jd",
        "pinyin": "jindong",

        "postfix": "区"
    },
    {
        "id": 1372,
        "name": "武义",
        "father": 214,
        "key": "w",
        "abbreviation": "wy",
        "pinyin": "wuyi",

        "postfix": "县"
    },
    {
        "id": 1373,
        "name": "浦江",
        "father": 214,
        "key": "p",
        "abbreviation": "pj",
        "pinyin": "pujiang",

        "postfix": "县"
    },
    {
        "id": 1374,
        "name": "磐安",
        "father": 214,
        "key": "p",
        "abbreviation": "pa",
        "pinyin": "panan",

        "postfix": "县"
    },
    {
        "id": 1375,
        "name": "兰溪",
        "father": 214,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "lanxi",

        "postfix": "市"
    },
    {
        "id": 1376,
        "name": "义乌",
        "father": 214,
        "key": "y",
        "abbreviation": "yw",
        "pinyin": "yiwu",

        "postfix": "市"
    },
    {
        "id": 1377,
        "name": "东阳",
        "father": 214,
        "key": "d",
        "abbreviation": "dy",
        "pinyin": "dongyang",

        "postfix": "市"
    },
    {
        "id": 1378,
        "name": "永康",
        "father": 214,
        "key": "y",
        "abbreviation": "yk",
        "pinyin": "yongkang",

        "postfix": "市"
    },
    {
        "id": 1379,
        "name": "柯城",
        "father": 215,
        "key": "k",
        "abbreviation": "kc",
        "pinyin": "kecheng",

        "postfix": "区"
    },
    {
        "id": 1380,
        "name": "衢江",
        "father": 215,
        "key": "q",
        "abbreviation": "qj",
        "pinyin": "qujiang",

        "postfix": "区"
    },
    {
        "id": 1381,
        "name": "常山",
        "father": 215,
        "key": "c",
        "abbreviation": "cs",
        "pinyin": "changshan",

        "postfix": "县"
    },
    {
        "id": 1382,
        "name": "开化",
        "father": 215,
        "key": "k",
        "abbreviation": "kh",
        "pinyin": "kaihua",

        "postfix": "县"
    },
    {
        "id": 1383,
        "name": "龙游",
        "father": 215,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "longyou",

        "postfix": "县"
    },
    {
        "id": 1384,
        "name": "江山",
        "father": 215,
        "key": "j",
        "abbreviation": "js",
        "pinyin": "jiangshan",

        "postfix": "市"
    },
    {
        "id": 1385,
        "name": "定海",
        "father": 216,
        "key": "d",
        "abbreviation": "dh",
        "pinyin": "dinghai",

        "postfix": "区"
    },
    {
        "id": 1386,
        "name": "普陀",
        "father": 216,
        "key": "p",
        "abbreviation": "pt",
        "pinyin": "putuo",

        "postfix": "区"
    },
    {
        "id": 1387,
        "name": "岱山",
        "father": 216,
        "key": "d",
        "abbreviation": "ds",
        "pinyin": "daishan",

        "postfix": "县"
    },
    {
        "id": 1388,
        "name": "嵊泗",
        "father": 216,
        "key": "s",
        "abbreviation": "ss",
        "pinyin": "shengsi",

        "postfix": "县"
    },
    {
        "id": 1389,
        "name": "椒江",
        "father": 217,
        "key": "j",
        "abbreviation": "jj",
        "pinyin": "jiaojiang",

        "postfix": "区"
    },
    {
        "id": 1390,
        "name": "黄岩",
        "father": 217,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "huangyan",

        "postfix": "区"
    },
    {
        "id": 1391,
        "name": "路桥",
        "father": 217,
        "key": "l",
        "abbreviation": "lq",
        "pinyin": "luqiao",

        "postfix": "区"
    },
    {
        "id": 1392,
        "name": "玉环",
        "father": 217,
        "key": "y",
        "abbreviation": "yh",
        "pinyin": "yuhuan",

        "postfix": "市"
    },
    {
        "id": 1393,
        "name": "三门",
        "father": 217,
        "key": "s",
        "abbreviation": "sm",
        "pinyin": "sanmen",

        "postfix": "县"
    },
    {
        "id": 1394,
        "name": "天台",
        "father": 217,
        "key": "t",
        "abbreviation": "tt",
        "pinyin": "tiantai",

        "postfix": "县"
    },
    {
        "id": 1395,
        "name": "仙居",
        "father": 217,
        "key": "x",
        "abbreviation": "xj",
        "pinyin": "xianju",

        "postfix": "县"
    },
    {
        "id": 1396,
        "name": "温岭",
        "father": 217,
        "key": "w",
        "abbreviation": "wl",
        "pinyin": "wenling",

        "postfix": "市"
    },
    {
        "id": 1397,
        "name": "临海",
        "father": 217,
        "key": "l",
        "abbreviation": "lh",
        "pinyin": "linhai",

        "postfix": "市"
    },
    {
        "id": 1398,
        "name": "莲都",
        "father": 218,
        "key": "l",
        "abbreviation": "ld",
        "pinyin": "liandu",

        "postfix": "区"
    },
    {
        "id": 1399,
        "name": "青田",
        "father": 218,
        "key": "q",
        "abbreviation": "qt",
        "pinyin": "qingtian",

        "postfix": "县"
    },
    {
        "id": 1400,
        "name": "缙云",
        "father": 218,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jinyun",

        "postfix": "县"
    },
    {
        "id": 1401,
        "name": "遂昌",
        "father": 218,
        "key": "s",
        "abbreviation": "sc",
        "pinyin": "suichang",

        "postfix": "县"
    },
    {
        "id": 1402,
        "name": "松阳",
        "father": 218,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "songyang",

        "postfix": "县"
    },
    {
        "id": 1403,
        "name": "云和",
        "father": 218,
        "key": "y",
        "abbreviation": "yh",
        "pinyin": "yunhe",

        "postfix": "县"
    },
    {
        "id": 1404,
        "name": "庆元",
        "father": 218,
        "key": "q",
        "abbreviation": "qy",
        "pinyin": "qingyuan",

        "postfix": "县"
    },
    {
        "id": 1405,
        "name": "景宁",
        "father": 218,
        "key": "j",
        "abbreviation": "jn",
        "pinyin": "jingning",
        "": "畲族",
        "postfix": "自治县"
    },
    {
        "id": 1406,
        "name": "龙泉",
        "father": 218,
        "key": "l",
        "abbreviation": "lq",
        "pinyin": "longquan",

        "postfix": "市"
    },
    {
        "id": 1407,
        "name": "瑶海",
        "father": 219,
        "key": "y",
        "abbreviation": "yh",
        "pinyin": "yaohai",

        "postfix": "区"
    },
    {
        "id": 1408,
        "name": "庐阳",
        "father": 219,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "luyang",

        "postfix": "区"
    },
    {
        "id": 1409,
        "name": "蜀山",
        "father": 219,
        "key": "s",
        "abbreviation": "ss",
        "pinyin": "shushan",

        "postfix": "区"
    },
    {
        "id": 1410,
        "name": "包河",
        "father": 219,
        "key": "b",
        "abbreviation": "bh",
        "pinyin": "baohe",

        "postfix": "区"
    },
    {
        "id": 1411,
        "name": "长丰",
        "father": 219,
        "key": "c",
        "abbreviation": "cf",
        "pinyin": "changfeng",

        "postfix": "县"
    },
    {
        "id": 1412,
        "name": "肥东",
        "father": 219,
        "key": "f",
        "abbreviation": "fd",
        "pinyin": "feidong",

        "postfix": "县"
    },
    {
        "id": 1413,
        "name": "肥西",
        "father": 219,
        "key": "f",
        "abbreviation": "fx",
        "pinyin": "feixi",

        "postfix": "县"
    },
    {
        "id": 1414,
        "name": "庐江",
        "father": 219,
        "key": "l",
        "abbreviation": "lj",
        "pinyin": "lujiang",

        "postfix": "县"
    },
    {
        "id": 1415,
        "name": "巢湖",
        "father": 219,
        "key": "c",
        "abbreviation": "ch",
        "pinyin": "chaohu",

        "postfix": "市"
    },
    {
        "id": 1416,
        "name": "镜湖",
        "father": 220,
        "key": "j",
        "abbreviation": "jh",
        "pinyin": "jinghu",

        "postfix": "区"
    },
    {
        "id": 1417,
        "name": "弋江",
        "father": 220,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "yijiang",

        "postfix": "区"
    },
    {
        "id": 1418,
        "name": "鸠江",
        "father": 220,
        "key": "j",
        "abbreviation": "jj",
        "pinyin": "jiujiang",

        "postfix": "区"
    },
    {
        "id": 1419,
        "name": "三山",
        "father": 220,
        "key": "s",
        "abbreviation": "ss",
        "pinyin": "sanshan",

        "postfix": "区"
    },
    {
        "id": 1420,
        "name": "芜湖",
        "father": 220,
        "key": "w",
        "abbreviation": "wh",
        "pinyin": "wuhu",

        "postfix": "县"
    },
    {
        "id": 1421,
        "name": "繁昌",
        "father": 220,
        "key": "f",
        "abbreviation": "fc",
        "pinyin": "fanchang",

        "postfix": "县"
    },
    {
        "id": 1422,
        "name": "南陵",
        "father": 220,
        "key": "n",
        "abbreviation": "nl",
        "pinyin": "nanling",

        "postfix": "县"
    },
    {
        "id": 1423,
        "name": "无为",
        "father": 220,
        "key": "w",
        "abbreviation": "ww",
        "pinyin": "wuwei",

        "postfix": "县"
    },
    {
        "id": 1424,
        "name": "龙子湖",
        "father": 221,
        "key": "l",
        "abbreviation": "lzh",
        "pinyin": "longzihu",

        "postfix": "区"
    },
    {
        "id": 1425,
        "name": "蚌山",
        "father": 221,
        "key": "b",
        "abbreviation": "bs",
        "pinyin": "bangshan",

        "postfix": "区"
    },
    {
        "id": 1426,
        "name": "禹会",
        "father": 221,
        "key": "y",
        "abbreviation": "yh",
        "pinyin": "yuhui",

        "postfix": "区"
    },
    {
        "id": 1427,
        "name": "淮上",
        "father": 221,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "huaishang",

        "postfix": "区"
    },
    {
        "id": 1428,
        "name": "怀远",
        "father": 221,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "huaiyuan",

        "postfix": "县"
    },
    {
        "id": 1429,
        "name": "五河",
        "father": 221,
        "key": "w",
        "abbreviation": "wh",
        "pinyin": "wuhe",

        "postfix": "县"
    },
    {
        "id": 1430,
        "name": "固镇",
        "father": 221,
        "key": "g",
        "abbreviation": "gz",
        "pinyin": "guzhen",

        "postfix": "县"
    },
    {
        "id": 1431,
        "name": "大通",
        "father": 222,
        "key": "d",
        "abbreviation": "dt",
        "pinyin": "datong",

        "postfix": "区"
    },
    {
        "id": 1432,
        "name": "田家庵",
        "father": 222,
        "key": "t",
        "abbreviation": "tja",
        "pinyin": "tianjiaan",

        "postfix": "区"
    },
    {
        "id": 1433,
        "name": "谢家集",
        "father": 222,
        "key": "x",
        "abbreviation": "xjj",
        "pinyin": "xiejiaji",

        "postfix": "区"
    },
    {
        "id": 1434,
        "name": "八公山",
        "father": 222,
        "key": "b",
        "abbreviation": "bgs",
        "pinyin": "bagongshan",

        "postfix": "区"
    },
    {
        "id": 1435,
        "name": "潘集",
        "father": 222,
        "key": "p",
        "abbreviation": "pj",
        "pinyin": "panji",

        "postfix": "区"
    },
    {
        "id": 1436,
        "name": "凤台",
        "father": 222,
        "key": "f",
        "abbreviation": "ft",
        "pinyin": "fengtai",

        "postfix": "县"
    },
    {
        "id": 1437,
        "name": "花山",
        "father": 223,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "huashan",

        "postfix": "区"
    },
    {
        "id": 1438,
        "name": "雨山",
        "father": 223,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yushan",

        "postfix": "区"
    },
    {
        "id": 1439,
        "name": "博望",
        "father": 223,
        "key": "b",
        "abbreviation": "bw",
        "pinyin": "bowang",

        "postfix": "区"
    },
    {
        "id": 1440,
        "name": "当涂",
        "father": 223,
        "key": "d",
        "abbreviation": "dt",
        "pinyin": "dangtu",

        "postfix": "县"
    },
    {
        "id": 1441,
        "name": "含山",
        "father": 223,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "hanshan",

        "postfix": "县"
    },
    {
        "id": 1442,
        "name": "和县",
        "father": 223,
        "key": "h",
        "abbreviation": "hx",
        "pinyin": "hexian",

        "postfix": ""
    },
    {
        "id": 1443,
        "name": "杜集",
        "father": 224,
        "key": "d",
        "abbreviation": "dj",
        "pinyin": "duji",

        "postfix": "区"
    },
    {
        "id": 1444,
        "name": "相山",
        "father": 224,
        "key": "x",
        "abbreviation": "xs",
        "pinyin": "xiangshan",

        "postfix": "区"
    },
    {
        "id": 1445,
        "name": "烈山",
        "father": 224,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lieshan",

        "postfix": "区"
    },
    {
        "id": 1446,
        "name": "濉溪",
        "father": 224,
        "key": "s",
        "abbreviation": "sx",
        "pinyin": "suixi",

        "postfix": "县"
    },
    {
        "id": 1447,
        "name": "铜官山",
        "father": 225,
        "key": "t",
        "abbreviation": "tgs",
        "pinyin": "tongguanshan",

        "postfix": "区"
    },
    {
        "id": 1449,
        "name": "郊区",
        "father": 225,
        "key": "j",
        "abbreviation": "jq",
        "pinyin": "jiaoqu",

        "postfix": ""
    },
    {
        "id": 1450,
        "name": "义安",
        "father": 225,
        "key": "y",
        "abbreviation": "ya",
        "pinyin": "yian",

        "postfix": "区"
    },
    {
        "id": 1451,
        "name": "迎江",
        "father": 226,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "yingjiang",

        "postfix": "区"
    },
    {
        "id": 1452,
        "name": "大观",
        "father": 226,
        "key": "d",
        "abbreviation": "dg",
        "pinyin": "daguan",

        "postfix": "区"
    },
    {
        "id": 1453,
        "name": "宜秀",
        "father": 226,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yixiu",

        "postfix": "区"
    },
    {
        "id": 1454,
        "name": "怀宁",
        "father": 226,
        "key": "h",
        "abbreviation": "hn",
        "pinyin": "huaining",

        "postfix": "县"
    },
    {
        "id": 1455,
        "name": "枞阳",
        "father": 225,
        "key": "z",
        "abbreviation": "zy",
        "pinyin": "zongyang",

        "postfix": "县"
    },
    {
        "id": 1456,
        "name": "潜山",
        "father": 226,
        "key": "q",
        "abbreviation": "qs",
        "pinyin": "qianshan",

        "postfix": "市"
    },
    {
        "id": 1457,
        "name": "太湖",
        "father": 226,
        "key": "t",
        "abbreviation": "th",
        "pinyin": "taihu",

        "postfix": "县"
    },
    {
        "id": 1458,
        "name": "宿松",
        "father": 226,
        "key": "s",
        "abbreviation": "ss",
        "pinyin": "susong",

        "postfix": "县"
    },
    {
        "id": 1459,
        "name": "望江",
        "father": 226,
        "key": "w",
        "abbreviation": "wj",
        "pinyin": "wangjiang",

        "postfix": "县"
    },
    {
        "id": 1460,
        "name": "岳西",
        "father": 226,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yuexi",

        "postfix": "县"
    },
    {
        "id": 1461,
        "name": "桐城",
        "father": 226,
        "key": "t",
        "abbreviation": "tc",
        "pinyin": "tongcheng",

        "postfix": "市"
    },
    {
        "id": 1462,
        "name": "屯溪",
        "father": 227,
        "key": "t",
        "abbreviation": "tx",
        "pinyin": "tunxi",

        "postfix": "区"
    },
    {
        "id": 1463,
        "name": "黄山",
        "father": 227,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "huangshan",

        "postfix": "区"
    },
    {
        "id": 1464,
        "name": "徽州",
        "father": 227,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "huizhou",

        "postfix": "区"
    },
    {
        "id": 1465,
        "name": "歙县",
        "father": 227,
        "key": "s",
        "abbreviation": "sx",
        "pinyin": "shexian",

        "postfix": ""
    },
    {
        "id": 1466,
        "name": "休宁",
        "father": 227,
        "key": "x",
        "abbreviation": "xn",
        "pinyin": "xiuning",

        "postfix": "县"
    },
    {
        "id": 1467,
        "name": "黟县",
        "father": 227,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yixian",

        "postfix": ""
    },
    {
        "id": 1468,
        "name": "祁门",
        "father": 227,
        "key": "q",
        "abbreviation": "qm",
        "pinyin": "qimen",

        "postfix": "县"
    },
    {
        "id": 1469,
        "name": "琅玡",
        "father": 228,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "langya",

        "postfix": "区"
    },
    {
        "id": 1470,
        "name": "南谯",
        "father": 228,
        "key": "n",
        "abbreviation": "nq",
        "pinyin": "nanqiao",

        "postfix": "区"
    },
    {
        "id": 1471,
        "name": "来安",
        "father": 228,
        "key": "l",
        "abbreviation": "la",
        "pinyin": "laian",

        "postfix": "县"
    },
    {
        "id": 1472,
        "name": "全椒",
        "father": 228,
        "key": "q",
        "abbreviation": "qj",
        "pinyin": "quanjiao",

        "postfix": "县"
    },
    {
        "id": 1473,
        "name": "定远",
        "father": 228,
        "key": "d",
        "abbreviation": "dy",
        "pinyin": "dingyuan",

        "postfix": "县"
    },
    {
        "id": 1474,
        "name": "凤阳",
        "father": 228,
        "key": "f",
        "abbreviation": "fy",
        "pinyin": "fengyang",

        "postfix": "县"
    },
    {
        "id": 1475,
        "name": "天长",
        "father": 228,
        "key": "t",
        "abbreviation": "tc",
        "pinyin": "tianchang",

        "postfix": "市"
    },
    {
        "id": 1476,
        "name": "明光",
        "father": 228,
        "key": "m",
        "abbreviation": "mg",
        "pinyin": "mingguang",

        "postfix": "市"
    },
    {
        "id": 1477,
        "name": "颍州",
        "father": 229,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yingzhou",

        "postfix": "区"
    },
    {
        "id": 1478,
        "name": "颍东",
        "father": 229,
        "key": "y",
        "abbreviation": "yd",
        "pinyin": "yingdong",

        "postfix": "区"
    },
    {
        "id": 1479,
        "name": "颍泉",
        "father": 229,
        "key": "y",
        "abbreviation": "yq",
        "pinyin": "yingquan",

        "postfix": "区"
    },
    {
        "id": 1480,
        "name": "临泉",
        "father": 229,
        "key": "l",
        "abbreviation": "lq",
        "pinyin": "linquan",

        "postfix": "县"
    },
    {
        "id": 1481,
        "name": "太和",
        "father": 229,
        "key": "t",
        "abbreviation": "th",
        "pinyin": "taihe",

        "postfix": "县"
    },
    {
        "id": 1482,
        "name": "阜南",
        "father": 229,
        "key": "f",
        "abbreviation": "fn",
        "pinyin": "funan",

        "postfix": "县"
    },
    {
        "id": 1483,
        "name": "颖上",
        "father": 229,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yingshang",

        "postfix": "县"
    },
    {
        "id": 1484,
        "name": "界首",
        "father": 229,
        "key": "j",
        "abbreviation": "js",
        "pinyin": "jieshou",

        "postfix": "市"
    },
    {
        "id": 1485,
        "name": "埇桥",
        "father": 230,
        "key": "y",
        "abbreviation": "yq",
        "pinyin": "yongqiao",

        "postfix": "区"
    },
    {
        "id": 1486,
        "name": "砀山",
        "father": 230,
        "key": "d",
        "abbreviation": "ds",
        "pinyin": "dangshan",

        "postfix": "县"
    },
    {
        "id": 1487,
        "name": "萧县",
        "father": 230,
        "key": "x",
        "abbreviation": "xx",
        "pinyin": "xiaoxian",

        "postfix": ""
    },
    {
        "id": 1488,
        "name": "灵璧",
        "father": 230,
        "key": "l",
        "abbreviation": "lb",
        "pinyin": "lingbi",

        "postfix": "县"
    },
    {
        "id": 1489,
        "name": "泗县",
        "father": 230,
        "key": "s",
        "abbreviation": "sx",
        "pinyin": "sixian",

        "postfix": ""
    },
    {
        "id": 1490,
        "name": "金安",
        "father": 231,
        "key": "j",
        "abbreviation": "ja",
        "pinyin": "jinan",

        "postfix": "区"
    },
    {
        "id": 1491,
        "name": "裕安",
        "father": 231,
        "key": "y",
        "abbreviation": "ya",
        "pinyin": "yuan",

        "postfix": "区"
    },
    {
        "id": 1492,
        "name": "寿县",
        "father": 222,
        "key": "s",
        "abbreviation": "sx",
        "pinyin": "shouxian",

        "postfix": ""
    },
    {
        "id": 1493,
        "name": "霍邱",
        "father": 231,
        "key": "h",
        "abbreviation": "hq",
        "pinyin": "huoqiu",

        "postfix": "县"
    },
    {
        "id": 1494,
        "name": "舒城",
        "father": 231,
        "key": "s",
        "abbreviation": "sc",
        "pinyin": "shucheng",

        "postfix": "县"
    },
    {
        "id": 1495,
        "name": "金寨",
        "father": 231,
        "key": "j",
        "abbreviation": "jz",
        "pinyin": "jinzhai",

        "postfix": "县"
    },
    {
        "id": 1496,
        "name": "霍山",
        "father": 231,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "huoshan",

        "postfix": "县"
    },
    {
        "id": 1497,
        "name": "谯城",
        "father": 232,
        "key": "q",
        "abbreviation": "qc",
        "pinyin": "qiaocheng",

        "postfix": "区"
    },
    {
        "id": 1498,
        "name": "涡阳",
        "father": 232,
        "key": "w",
        "abbreviation": "wy",
        "pinyin": "woyang",

        "postfix": "县"
    },
    {
        "id": 1499,
        "name": "蒙城",
        "father": 232,
        "key": "m",
        "abbreviation": "mc",
        "pinyin": "mengcheng",

        "postfix": "县"
    },
    {
        "id": 1500,
        "name": "利辛",
        "father": 232,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "lixin",

        "postfix": "县"
    },
    {
        "id": 1501,
        "name": "贵池",
        "father": 233,
        "key": "g",
        "abbreviation": "gc",
        "pinyin": "guichi",

        "postfix": "区"
    },
    {
        "id": 1502,
        "name": "东至",
        "father": 233,
        "key": "d",
        "abbreviation": "dz",
        "pinyin": "dongzhi",

        "postfix": "县"
    },
    {
        "id": 1503,
        "name": "石台",
        "father": 233,
        "key": "s",
        "abbreviation": "st",
        "pinyin": "shitai",

        "postfix": "县"
    },
    {
        "id": 1504,
        "name": "青阳",
        "father": 233,
        "key": "q",
        "abbreviation": "qy",
        "pinyin": "qingyang",

        "postfix": "县"
    },
    {
        "id": 1505,
        "name": "宣州",
        "father": 234,
        "key": "x",
        "abbreviation": "xz",
        "pinyin": "xuanzhou",

        "postfix": "区"
    },
    {
        "id": 1506,
        "name": "郎溪",
        "father": 234,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "langxi",

        "postfix": "县"
    },
    {
        "id": 1507,
        "name": "广德",
        "father": 234,
        "key": "g",
        "abbreviation": "gd",
        "pinyin": "guangde",

        "postfix": "市"
    },
    {
        "id": 1508,
        "name": "泾县",
        "father": 234,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jingxian",

        "postfix": ""
    },
    {
        "id": 1509,
        "name": "绩溪",
        "father": 234,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jixi",

        "postfix": "县"
    },
    {
        "id": 1510,
        "name": "旌德",
        "father": 234,
        "key": "j",
        "abbreviation": "jd",
        "pinyin": "jingde",

        "postfix": "县"
    },
    {
        "id": 1511,
        "name": "宁国",
        "father": 234,
        "key": "n",
        "abbreviation": "ng",
        "pinyin": "ningguo",

        "postfix": "市"
    },
    {
        "id": 1512,
        "name": "鼓楼",
        "father": 235,
        "key": "g",
        "abbreviation": "gl",
        "pinyin": "gulou",

        "postfix": "区"
    },
    {
        "id": 1513,
        "name": "台江",
        "father": 235,
        "key": "t",
        "abbreviation": "tj",
        "pinyin": "taijiang",

        "postfix": "区"
    },
    {
        "id": 1514,
        "name": "仓山",
        "father": 235,
        "key": "c",
        "abbreviation": "cs",
        "pinyin": "cangshan",

        "postfix": "区"
    },
    {
        "id": 1515,
        "name": "马尾",
        "father": 235,
        "key": "m",
        "abbreviation": "mw",
        "pinyin": "mawei",

        "postfix": "区"
    },
    {
        "id": 1516,
        "name": "晋安",
        "father": 235,
        "key": "j",
        "abbreviation": "ja",
        "pinyin": "jinan",

        "postfix": "区"
    },
    {
        "id": 1517,
        "name": "闽侯",
        "father": 235,
        "key": "m",
        "abbreviation": "mh",
        "pinyin": "minhou",

        "postfix": "县"
    },
    {
        "id": 1518,
        "name": "连江",
        "father": 235,
        "key": "l",
        "abbreviation": "lj",
        "pinyin": "lianjiang",

        "postfix": "县"
    },
    {
        "id": 1519,
        "name": "罗源",
        "father": 235,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "luoyuan",

        "postfix": "县"
    },
    {
        "id": 1520,
        "name": "闽清",
        "father": 235,
        "key": "m",
        "abbreviation": "mq",
        "pinyin": "minqing",

        "postfix": "县"
    },
    {
        "id": 1521,
        "name": "永泰",
        "father": 235,
        "key": "y",
        "abbreviation": "yt",
        "pinyin": "yongtai",

        "postfix": "县"
    },
    {
        "id": 1522,
        "name": "平潭",
        "father": 235,
        "key": "p",
        "abbreviation": "pt",
        "pinyin": "pingtan",

        "postfix": "县"
    },
    {
        "id": 1523,
        "name": "福清",
        "father": 235,
        "key": "f",
        "abbreviation": "fq",
        "pinyin": "fuqing",

        "postfix": "市"
    },
    {
        "id": 1524,
        "name": "长乐",
        "father": 235,
        "key": "c",
        "abbreviation": "cl",
        "pinyin": "changle",

        "postfix": "区"
    },
    {
        "id": 1525,
        "name": "思明",
        "father": 236,
        "key": "s",
        "abbreviation": "sm",
        "pinyin": "siming",

        "postfix": "区"
    },
    {
        "id": 1526,
        "name": "海沧",
        "father": 236,
        "key": "h",
        "abbreviation": "hc",
        "pinyin": "haicang",

        "postfix": "区"
    },
    {
        "id": 1527,
        "name": "湖里",
        "father": 236,
        "key": "h",
        "abbreviation": "hl",
        "pinyin": "huli",

        "postfix": "区"
    },
    {
        "id": 1528,
        "name": "集美",
        "father": 236,
        "key": "j",
        "abbreviation": "jm",
        "pinyin": "jimei",

        "postfix": "区"
    },
    {
        "id": 1529,
        "name": "同安",
        "father": 236,
        "key": "t",
        "abbreviation": "ta",
        "pinyin": "tongan",

        "postfix": "区"
    },
    {
        "id": 1530,
        "name": "翔安",
        "father": 236,
        "key": "x",
        "abbreviation": "xa",
        "pinyin": "xiangan",

        "postfix": "区"
    },
    {
        "id": 1531,
        "name": "城厢",
        "father": 237,
        "key": "c",
        "abbreviation": "cx",
        "pinyin": "chengxiang",

        "postfix": "区"
    },
    {
        "id": 1532,
        "name": "涵江",
        "father": 237,
        "key": "h",
        "abbreviation": "hj",
        "pinyin": "hanjiang",

        "postfix": "区"
    },
    {
        "id": 1533,
        "name": "荔城",
        "father": 237,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "licheng",

        "postfix": "区"
    },
    {
        "id": 1534,
        "name": "秀屿",
        "father": 237,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xiuyu",

        "postfix": "区"
    },
    {
        "id": 1535,
        "name": "仙游",
        "father": 237,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xianyou",

        "postfix": "县"
    },
    {
        "id": 1536,
        "name": "梅列",
        "father": 238,
        "key": "m",
        "abbreviation": "ml",
        "pinyin": "meilie",

        "postfix": "区"
    },
    {
        "id": 1537,
        "name": "三元",
        "father": 238,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "sanyuan",

        "postfix": "区"
    },
    {
        "id": 1538,
        "name": "明溪",
        "father": 238,
        "key": "m",
        "abbreviation": "mx",
        "pinyin": "mingxi",

        "postfix": "县"
    },
    {
        "id": 1539,
        "name": "清流",
        "father": 238,
        "key": "q",
        "abbreviation": "ql",
        "pinyin": "qingliu",

        "postfix": "县"
    },
    {
        "id": 1540,
        "name": "宁化",
        "father": 238,
        "key": "n",
        "abbreviation": "nh",
        "pinyin": "ninghua",

        "postfix": "县"
    },
    {
        "id": 1541,
        "name": "大田",
        "father": 238,
        "key": "d",
        "abbreviation": "dt",
        "pinyin": "datian",

        "postfix": "县"
    },
    {
        "id": 1542,
        "name": "尤溪",
        "father": 238,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "youxi",

        "postfix": "县"
    },
    {
        "id": 1543,
        "name": "沙县",
        "father": 238,
        "key": "s",
        "abbreviation": "sx",
        "pinyin": "shaxian",

        "postfix": ""
    },
    {
        "id": 1544,
        "name": "将乐",
        "father": 238,
        "key": "j",
        "abbreviation": "jl",
        "pinyin": "jiangle",

        "postfix": "县"
    },
    {
        "id": 1545,
        "name": "泰宁",
        "father": 238,
        "key": "t",
        "abbreviation": "tn",
        "pinyin": "taining",

        "postfix": "县"
    },
    {
        "id": 1546,
        "name": "建宁",
        "father": 238,
        "key": "j",
        "abbreviation": "jn",
        "pinyin": "jianning",

        "postfix": "县"
    },
    {
        "id": 1547,
        "name": "永安",
        "father": 238,
        "key": "y",
        "abbreviation": "ya",
        "pinyin": "yongan",

        "postfix": "市"
    },
    {
        "id": 1548,
        "name": "鲤城",
        "father": 239,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "licheng",

        "postfix": "区"
    },
    {
        "id": 1549,
        "name": "丰泽",
        "father": 239,
        "key": "f",
        "abbreviation": "fz",
        "pinyin": "fengze",

        "postfix": "区"
    },
    {
        "id": 1550,
        "name": "洛江",
        "father": 239,
        "key": "l",
        "abbreviation": "lj",
        "pinyin": "luojiang",

        "postfix": "区"
    },
    {
        "id": 1551,
        "name": "泉港",
        "father": 239,
        "key": "q",
        "abbreviation": "qg",
        "pinyin": "quangang",

        "postfix": "区"
    },
    {
        "id": 1552,
        "name": "惠安",
        "father": 239,
        "key": "h",
        "abbreviation": "ha",
        "pinyin": "huian",

        "postfix": "县"
    },
    {
        "id": 1553,
        "name": "安溪",
        "father": 239,
        "key": "a",
        "abbreviation": "ax",
        "pinyin": "anxi",

        "postfix": "县"
    },
    {
        "id": 1554,
        "name": "永春",
        "father": 239,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yongchun",

        "postfix": "县"
    },
    {
        "id": 1555,
        "name": "德化",
        "father": 239,
        "key": "d",
        "abbreviation": "dh",
        "pinyin": "dehua",

        "postfix": "县"
    },
    {
        "id": 1556,
        "name": "金门",
        "father": 239,
        "key": "j",
        "abbreviation": "jm",
        "pinyin": "jinmen",

        "postfix": "县"
    },
    {
        "id": 1557,
        "name": "石狮",
        "father": 239,
        "key": "s",
        "abbreviation": "ss",
        "pinyin": "shishi",

        "postfix": "市"
    },
    {
        "id": 1558,
        "name": "晋江",
        "father": 239,
        "key": "j",
        "abbreviation": "jj",
        "pinyin": "jinjiang",

        "postfix": "市"
    },
    {
        "id": 1559,
        "name": "南安",
        "father": 239,
        "key": "n",
        "abbreviation": "na",
        "pinyin": "nanan",

        "postfix": "市"
    },
    {
        "id": 1560,
        "name": "芗城",
        "father": 240,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xiangcheng",

        "postfix": "区"
    },
    {
        "id": 1561,
        "name": "龙文",
        "father": 240,
        "key": "l",
        "abbreviation": "lw",
        "pinyin": "longwen",

        "postfix": "区"
    },
    {
        "id": 1562,
        "name": "云霄",
        "father": 240,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yunxiao",

        "postfix": "县"
    },
    {
        "id": 1563,
        "name": "漳浦",
        "father": 240,
        "key": "z",
        "abbreviation": "zp",
        "pinyin": "zhangpu",

        "postfix": "县"
    },
    {
        "id": 1564,
        "name": "诏安",
        "father": 240,
        "key": "z",
        "abbreviation": "za",
        "pinyin": "zhaoan",

        "postfix": "县"
    },
    {
        "id": 1565,
        "name": "长泰",
        "father": 240,
        "key": "c",
        "abbreviation": "ct",
        "pinyin": "changtai",

        "postfix": "县"
    },
    {
        "id": 1566,
        "name": "东山",
        "father": 240,
        "key": "d",
        "abbreviation": "ds",
        "pinyin": "dongshan",

        "postfix": "县"
    },
    {
        "id": 1567,
        "name": "南靖",
        "father": 240,
        "key": "n",
        "abbreviation": "nj",
        "pinyin": "nanjing",

        "postfix": "县"
    },
    {
        "id": 1568,
        "name": "平和",
        "father": 240,
        "key": "p",
        "abbreviation": "ph",
        "pinyin": "pinghe",

        "postfix": "县"
    },
    {
        "id": 1569,
        "name": "华安",
        "father": 240,
        "key": "h",
        "abbreviation": "ha",
        "pinyin": "huaan",

        "postfix": "县"
    },
    {
        "id": 1570,
        "name": "龙海",
        "father": 240,
        "key": "l",
        "abbreviation": "lh",
        "pinyin": "longhai",

        "postfix": "市"
    },
    {
        "id": 1571,
        "name": "延平",
        "father": 241,
        "key": "y",
        "abbreviation": "yp",
        "pinyin": "yanping",

        "postfix": "区"
    },
    {
        "id": 1572,
        "name": "顺昌",
        "father": 241,
        "key": "s",
        "abbreviation": "sc",
        "pinyin": "shunchang",

        "postfix": "县"
    },
    {
        "id": 1573,
        "name": "浦城",
        "father": 241,
        "key": "p",
        "abbreviation": "pc",
        "pinyin": "pucheng",

        "postfix": "县"
    },
    {
        "id": 1574,
        "name": "光泽",
        "father": 241,
        "key": "g",
        "abbreviation": "gz",
        "pinyin": "guangze",

        "postfix": "县"
    },
    {
        "id": 1575,
        "name": "松溪",
        "father": 241,
        "key": "s",
        "abbreviation": "sx",
        "pinyin": "songxi",

        "postfix": "县"
    },
    {
        "id": 1576,
        "name": "政和",
        "father": 241,
        "key": "z",
        "abbreviation": "zh",
        "pinyin": "zhenghe",

        "postfix": "县"
    },
    {
        "id": 1577,
        "name": "邵武",
        "father": 241,
        "key": "s",
        "abbreviation": "sw",
        "pinyin": "shaowu",

        "postfix": "市"
    },
    {
        "id": 1578,
        "name": "武夷山",
        "father": 241,
        "key": "w",
        "abbreviation": "wys",
        "pinyin": "wuyishan",

        "postfix": "市"
    },
    {
        "id": 1579,
        "name": "建瓯",
        "father": 241,
        "key": "j",
        "abbreviation": "jo",
        "pinyin": "jianou",

        "postfix": "市"
    },
    {
        "id": 1580,
        "name": "建阳",
        "father": 241,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jianyang",

        "postfix": "区"
    },
    {
        "id": 1581,
        "name": "新罗",
        "father": 242,
        "key": "x",
        "abbreviation": "xl",
        "pinyin": "xinluo",

        "postfix": "区"
    },
    {
        "id": 1582,
        "name": "长汀",
        "father": 242,
        "key": "c",
        "abbreviation": "ct",
        "pinyin": "changting",

        "postfix": "县"
    },
    {
        "id": 1583,
        "name": "永定",
        "father": 242,
        "key": "y",
        "abbreviation": "yd",
        "pinyin": "yongding",

        "postfix": "区"
    },
    {
        "id": 1584,
        "name": "上杭",
        "father": 242,
        "key": "s",
        "abbreviation": "sh",
        "pinyin": "shanghang",

        "postfix": "县"
    },
    {
        "id": 1585,
        "name": "武平",
        "father": 242,
        "key": "w",
        "abbreviation": "wp",
        "pinyin": "wuping",

        "postfix": "县"
    },
    {
        "id": 1586,
        "name": "连城",
        "father": 242,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "liancheng",

        "postfix": "县"
    },
    {
        "id": 1587,
        "name": "漳平",
        "father": 242,
        "key": "z",
        "abbreviation": "zp",
        "pinyin": "zhangping",

        "postfix": "市"
    },
    {
        "id": 1588,
        "name": "蕉城",
        "father": 243,
        "key": "j",
        "abbreviation": "jc",
        "pinyin": "jiaocheng",

        "postfix": "区"
    },
    {
        "id": 1589,
        "name": "霞浦",
        "father": 243,
        "key": "x",
        "abbreviation": "xp",
        "pinyin": "xiapu",

        "postfix": "县"
    },
    {
        "id": 1590,
        "name": "古田",
        "father": 243,
        "key": "g",
        "abbreviation": "gt",
        "pinyin": "gutian",

        "postfix": "县"
    },
    {
        "id": 1591,
        "name": "屏南",
        "father": 243,
        "key": "p",
        "abbreviation": "pn",
        "pinyin": "pingnan",

        "postfix": "县"
    },
    {
        "id": 1592,
        "name": "寿宁",
        "father": 243,
        "key": "s",
        "abbreviation": "sn",
        "pinyin": "shouning",

        "postfix": "县"
    },
    {
        "id": 1593,
        "name": "周宁",
        "father": 243,
        "key": "z",
        "abbreviation": "zn",
        "pinyin": "zhouning",

        "postfix": "县"
    },
    {
        "id": 1594,
        "name": "柘荣",
        "father": 243,
        "key": "z",
        "abbreviation": "zr",
        "pinyin": "zherong",

        "postfix": "县"
    },
    {
        "id": 1595,
        "name": "福安",
        "father": 243,
        "key": "f",
        "abbreviation": "fa",
        "pinyin": "fuan",

        "postfix": "市"
    },
    {
        "id": 1596,
        "name": "福鼎",
        "father": 243,
        "key": "f",
        "abbreviation": "fd",
        "pinyin": "fuding",

        "postfix": "市"
    },
    {
        "id": 1597,
        "name": "东湖",
        "father": 244,
        "key": "d",
        "abbreviation": "dh",
        "pinyin": "donghu",

        "postfix": "区"
    },
    {
        "id": 1598,
        "name": "西湖",
        "father": 244,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xihu",

        "postfix": "区"
    },
    {
        "id": 1599,
        "name": "青云谱",
        "father": 244,
        "key": "q",
        "abbreviation": "qyp",
        "pinyin": "qingyunpu",

        "postfix": "区"
    },
    {
        "id": 1600,
        "name": "湾里",
        "father": 244,
        "key": "w",
        "abbreviation": "wl",
        "pinyin": "wanli",

        "postfix": "区"
    },
    {
        "id": 1601,
        "name": "青山湖",
        "father": 244,
        "key": "q",
        "abbreviation": "qsh",
        "pinyin": "qingshanhu",

        "postfix": "区"
    },
    {
        "id": 1602,
        "name": "南昌",
        "father": 244,
        "key": "n",
        "abbreviation": "nc",
        "pinyin": "nanchang",

        "postfix": "县"
    },
    {
        "id": 1603,
        "name": "新建",
        "father": 244,
        "key": "x",
        "abbreviation": "xj",
        "pinyin": "xinjian",

        "postfix": "区"
    },
    {
        "id": 1604,
        "name": "安义",
        "father": 244,
        "key": "a",
        "abbreviation": "ay",
        "pinyin": "anyi",

        "postfix": "县"
    },
    {
        "id": 1605,
        "name": "进贤",
        "father": 244,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jinxian",

        "postfix": "县"
    },
    {
        "id": 1606,
        "name": "昌江",
        "father": 245,
        "key": "c",
        "abbreviation": "cj",
        "pinyin": "changjiang",

        "postfix": "区"
    },
    {
        "id": 1607,
        "name": "珠山",
        "father": 245,
        "key": "z",
        "abbreviation": "zs",
        "pinyin": "zhushan",

        "postfix": "区"
    },
    {
        "id": 1608,
        "name": "浮梁",
        "father": 245,
        "key": "f",
        "abbreviation": "fl",
        "pinyin": "fuliang",

        "postfix": "县"
    },
    {
        "id": 1609,
        "name": "乐平",
        "father": 245,
        "key": "l",
        "abbreviation": "lp",
        "pinyin": "leping",

        "postfix": "市"
    },
    {
        "id": 1610,
        "name": "安源",
        "father": 246,
        "key": "a",
        "abbreviation": "ay",
        "pinyin": "anyuan",

        "postfix": "区"
    },
    {
        "id": 1611,
        "name": "湘东",
        "father": 246,
        "key": "x",
        "abbreviation": "xd",
        "pinyin": "xiangdong",

        "postfix": "区"
    },
    {
        "id": 1612,
        "name": "莲花",
        "father": 246,
        "key": "l",
        "abbreviation": "lh",
        "pinyin": "lianhua",

        "postfix": "县"
    },
    {
        "id": 1613,
        "name": "上栗",
        "father": 246,
        "key": "s",
        "abbreviation": "sl",
        "pinyin": "shangli",

        "postfix": "县"
    },
    {
        "id": 1614,
        "name": "芦溪",
        "father": 246,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "luxi",

        "postfix": "县"
    },
    {
        "id": 1615,
        "name": "濂溪",
        "father": 247,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "lianxi",

        "postfix": "区"
    },
    {
        "id": 1616,
        "name": "浔阳",
        "father": 247,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xunyang",

        "postfix": "区"
    },
    {
        "id": 1617,
        "name": "柴桑",
        "father": 247,
        "key": "c",
        "abbreviation": "cs",
        "pinyin": "chaisang",

        "postfix": "区"
    },
    {
        "id": 1618,
        "name": "武宁",
        "father": 247,
        "key": "w",
        "abbreviation": "wn",
        "pinyin": "wuning",

        "postfix": "县"
    },
    {
        "id": 1619,
        "name": "修水",
        "father": 247,
        "key": "x",
        "abbreviation": "xs",
        "pinyin": "xiushui",

        "postfix": "县"
    },
    {
        "id": 1620,
        "name": "永修",
        "father": 247,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yongxiu",

        "postfix": "县"
    },
    {
        "id": 1621,
        "name": "德安",
        "father": 247,
        "key": "d",
        "abbreviation": "da",
        "pinyin": "dean",

        "postfix": "县"
    },
    {
        "id": 1622,
        "name": "庐山",
        "father": 247,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lushan",

        "postfix": "市"
    },
    {
        "id": 1623,
        "name": "都昌",
        "father": 247,
        "key": "d",
        "abbreviation": "dc",
        "pinyin": "duchang",

        "postfix": "县"
    },
    {
        "id": 1624,
        "name": "湖口",
        "father": 247,
        "key": "h",
        "abbreviation": "hk",
        "pinyin": "hukou",

        "postfix": "县"
    },
    {
        "id": 1625,
        "name": "彭泽",
        "father": 247,
        "key": "p",
        "abbreviation": "pz",
        "pinyin": "pengze",

        "postfix": "县"
    },
    {
        "id": 1626,
        "name": "瑞昌",
        "father": 247,
        "key": "r",
        "abbreviation": "rc",
        "pinyin": "ruichang",

        "postfix": "市"
    },
    {
        "id": 1627,
        "name": "共青城",
        "father": 247,
        "key": "g",
        "abbreviation": "gqc",
        "pinyin": "gongqingcheng",

        "postfix": "市"
    },
    {
        "id": 1628,
        "name": "渝水",
        "father": 248,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yushui",

        "postfix": "区"
    },
    {
        "id": 1629,
        "name": "分宜",
        "father": 248,
        "key": "f",
        "abbreviation": "fy",
        "pinyin": "fenyi",

        "postfix": "县"
    },
    {
        "id": 1630,
        "name": "月湖",
        "father": 249,
        "key": "y",
        "abbreviation": "yh",
        "pinyin": "yuehu",

        "postfix": "区"
    },
    {
        "id": 1631,
        "name": "余江",
        "father": 249,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "yujiang",

        "postfix": "区"
    },
    {
        "id": 1632,
        "name": "贵溪",
        "father": 249,
        "key": "g",
        "abbreviation": "gx",
        "pinyin": "guixi",

        "postfix": "市"
    },
    {
        "id": 1633,
        "name": "章贡",
        "father": 250,
        "key": "z",
        "abbreviation": "zg",
        "pinyin": "zhanggong",

        "postfix": "区"
    },
    {
        "id": 1634,
        "name": "赣县",
        "father": 250,
        "key": "g",
        "abbreviation": "gx",
        "pinyin": "ganxian",

        "postfix": "区"
    },
    {
        "id": 1635,
        "name": "信丰",
        "father": 250,
        "key": "x",
        "abbreviation": "xf",
        "pinyin": "xinfeng",

        "postfix": "县"
    },
    {
        "id": 1636,
        "name": "大余",
        "father": 250,
        "key": "d",
        "abbreviation": "dy",
        "pinyin": "dayu",

        "postfix": "县"
    },
    {
        "id": 1637,
        "name": "上犹",
        "father": 250,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "shangyou",

        "postfix": "县"
    },
    {
        "id": 1638,
        "name": "崇义",
        "father": 250,
        "key": "c",
        "abbreviation": "cy",
        "pinyin": "chongyi",

        "postfix": "县"
    },
    {
        "id": 1639,
        "name": "安远",
        "father": 250,
        "key": "a",
        "abbreviation": "ay",
        "pinyin": "anyuan",

        "postfix": "县"
    },
    {
        "id": 1640,
        "name": "龙南",
        "father": 250,
        "key": "l",
        "abbreviation": "ln",
        "pinyin": "longnan",

        "postfix": "县"
    },
    {
        "id": 1641,
        "name": "定南",
        "father": 250,
        "key": "d",
        "abbreviation": "dn",
        "pinyin": "dingnan",

        "postfix": "县"
    },
    {
        "id": 1642,
        "name": "全南",
        "father": 250,
        "key": "q",
        "abbreviation": "qn",
        "pinyin": "quannan",

        "postfix": "县"
    },
    {
        "id": 1643,
        "name": "宁都",
        "father": 250,
        "key": "n",
        "abbreviation": "nd",
        "pinyin": "ningdu",

        "postfix": "县"
    },
    {
        "id": 1644,
        "name": "于都",
        "father": 250,
        "key": "y",
        "abbreviation": "yd",
        "pinyin": "yudu",

        "postfix": "县"
    },
    {
        "id": 1645,
        "name": "兴国",
        "father": 250,
        "key": "x",
        "abbreviation": "xg",
        "pinyin": "xingguo",

        "postfix": "县"
    },
    {
        "id": 1646,
        "name": "会昌",
        "father": 250,
        "key": "h",
        "abbreviation": "hc",
        "pinyin": "huichang",

        "postfix": "县"
    },
    {
        "id": 1647,
        "name": "寻乌",
        "father": 250,
        "key": "x",
        "abbreviation": "xw",
        "pinyin": "xunwu",

        "postfix": "县"
    },
    {
        "id": 1648,
        "name": "石城",
        "father": 250,
        "key": "s",
        "abbreviation": "sc",
        "pinyin": "shicheng",

        "postfix": "县"
    },
    {
        "id": 1649,
        "name": "瑞金",
        "father": 250,
        "key": "r",
        "abbreviation": "rj",
        "pinyin": "ruijin",

        "postfix": "市"
    },
    {
        "id": 1650,
        "name": "南康",
        "father": 250,
        "key": "n",
        "abbreviation": "nk",
        "pinyin": "nankang",

        "postfix": "区"
    },
    {
        "id": 1651,
        "name": "吉州",
        "father": 251,
        "key": "j",
        "abbreviation": "jz",
        "pinyin": "jizhou",

        "postfix": "区"
    },
    {
        "id": 1652,
        "name": "青原",
        "father": 251,
        "key": "q",
        "abbreviation": "qy",
        "pinyin": "qingyuan",

        "postfix": "区"
    },
    {
        "id": 1653,
        "name": "吉安",
        "father": 251,
        "key": "j",
        "abbreviation": "ja",
        "pinyin": "jian",

        "postfix": "县"
    },
    {
        "id": 1654,
        "name": "吉水",
        "father": 251,
        "key": "j",
        "abbreviation": "js",
        "pinyin": "jishui",

        "postfix": "县"
    },
    {
        "id": 1655,
        "name": "峡江",
        "father": 251,
        "key": "x",
        "abbreviation": "xj",
        "pinyin": "xiajiang",

        "postfix": "县"
    },
    {
        "id": 1656,
        "name": "新干",
        "father": 251,
        "key": "x",
        "abbreviation": "xg",
        "pinyin": "xingan",

        "postfix": "县"
    },
    {
        "id": 1657,
        "name": "永丰",
        "father": 251,
        "key": "y",
        "abbreviation": "yf",
        "pinyin": "yongfeng",

        "postfix": "县"
    },
    {
        "id": 1658,
        "name": "泰和",
        "father": 251,
        "key": "t",
        "abbreviation": "th",
        "pinyin": "taihe",

        "postfix": "县"
    },
    {
        "id": 1659,
        "name": "遂川",
        "father": 251,
        "key": "s",
        "abbreviation": "sc",
        "pinyin": "suichuan",

        "postfix": "县"
    },
    {
        "id": 1660,
        "name": "万安",
        "father": 251,
        "key": "w",
        "abbreviation": "wa",
        "pinyin": "wanan",

        "postfix": "县"
    },
    {
        "id": 1661,
        "name": "安福",
        "father": 251,
        "key": "a",
        "abbreviation": "af",
        "pinyin": "anfu",

        "postfix": "县"
    },
    {
        "id": 1662,
        "name": "永新",
        "father": 251,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yongxin",

        "postfix": "县"
    },
    {
        "id": 1663,
        "name": "井冈山",
        "father": 251,
        "key": "j",
        "abbreviation": "jgs",
        "pinyin": "jinggangshan",

        "postfix": "市"
    },
    {
        "id": 1664,
        "name": "袁州",
        "father": 252,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yuanzhou",

        "postfix": "区"
    },
    {
        "id": 1665,
        "name": "奉新",
        "father": 252,
        "key": "f",
        "abbreviation": "fx",
        "pinyin": "fengxin",

        "postfix": "县"
    },
    {
        "id": 1666,
        "name": "万载",
        "father": 252,
        "key": "w",
        "abbreviation": "wz",
        "pinyin": "wanzai",

        "postfix": "县"
    },
    {
        "id": 1667,
        "name": "上高",
        "father": 252,
        "key": "s",
        "abbreviation": "sg",
        "pinyin": "shanggao",

        "postfix": "县"
    },
    {
        "id": 1668,
        "name": "宜丰",
        "father": 252,
        "key": "y",
        "abbreviation": "yf",
        "pinyin": "yifeng",

        "postfix": "县"
    },
    {
        "id": 1669,
        "name": "靖安",
        "father": 252,
        "key": "j",
        "abbreviation": "ja",
        "pinyin": "jingan",

        "postfix": "县"
    },
    {
        "id": 1670,
        "name": "铜鼓",
        "father": 252,
        "key": "t",
        "abbreviation": "tg",
        "pinyin": "tonggu",

        "postfix": "县"
    },
    {
        "id": 1671,
        "name": "丰城",
        "father": 252,
        "key": "f",
        "abbreviation": "fc",
        "pinyin": "fengcheng",

        "postfix": "市"
    },
    {
        "id": 1672,
        "name": "樟树",
        "father": 252,
        "key": "z",
        "abbreviation": "zs",
        "pinyin": "zhangshu",

        "postfix": "市"
    },
    {
        "id": 1673,
        "name": "高安",
        "father": 252,
        "key": "g",
        "abbreviation": "ga",
        "pinyin": "gaoan",

        "postfix": "市"
    },
    {
        "id": 1674,
        "name": "临川",
        "father": 253,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "linchuan",

        "postfix": "区"
    },
    {
        "id": 1675,
        "name": "南城",
        "father": 253,
        "key": "n",
        "abbreviation": "nc",
        "pinyin": "nancheng",

        "postfix": "县"
    },
    {
        "id": 1676,
        "name": "黎川",
        "father": 253,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "lichuan",

        "postfix": "县"
    },
    {
        "id": 1677,
        "name": "南丰",
        "father": 253,
        "key": "n",
        "abbreviation": "nf",
        "pinyin": "nanfeng",

        "postfix": "县"
    },
    {
        "id": 1678,
        "name": "崇仁",
        "father": 253,
        "key": "c",
        "abbreviation": "cr",
        "pinyin": "chongren",

        "postfix": "县"
    },
    {
        "id": 1679,
        "name": "乐安",
        "father": 253,
        "key": "l",
        "abbreviation": "la",
        "pinyin": "lean",

        "postfix": "县"
    },
    {
        "id": 1680,
        "name": "宜黄",
        "father": 253,
        "key": "y",
        "abbreviation": "yh",
        "pinyin": "yihuang",

        "postfix": "县"
    },
    {
        "id": 1681,
        "name": "金溪",
        "father": 253,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jinxi",

        "postfix": "县"
    },
    {
        "id": 1682,
        "name": "资溪",
        "father": 253,
        "key": "z",
        "abbreviation": "zx",
        "pinyin": "zixi",

        "postfix": "县"
    },
    {
        "id": 1683,
        "name": "东乡",
        "father": 253,
        "key": "d",
        "abbreviation": "dx",
        "pinyin": "dongxiang",

        "postfix": "区"
    },
    {
        "id": 1684,
        "name": "广昌",
        "father": 253,
        "key": "g",
        "abbreviation": "gc",
        "pinyin": "guangchang",

        "postfix": "县"
    },
    {
        "id": 1685,
        "name": "信州",
        "father": 254,
        "key": "x",
        "abbreviation": "xz",
        "pinyin": "xinzhou",

        "postfix": "区"
    },
    {
        "id": 1686,
        "name": "上饶",
        "father": 254,
        "key": "s",
        "abbreviation": "sr",
        "pinyin": "shangrao",

        "postfix": "县"
    },
    {
        "id": 1687,
        "name": "广丰",
        "father": 254,
        "key": "g",
        "abbreviation": "gf",
        "pinyin": "guangfeng",

        "postfix": "区"
    },
    {
        "id": 1688,
        "name": "玉山",
        "father": 254,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yushan",

        "postfix": "县"
    },
    {
        "id": 1689,
        "name": "铅山",
        "father": 254,
        "key": "q",
        "abbreviation": "qs",
        "pinyin": "qianshan",

        "postfix": "县"
    },
    {
        "id": 1690,
        "name": "横峰",
        "father": 254,
        "key": "h",
        "abbreviation": "hf",
        "pinyin": "hengfeng",

        "postfix": "县"
    },
    {
        "id": 1691,
        "name": "弋阳",
        "father": 254,
        "key": "y",
        "abbreviation": "yy",
        "pinyin": "yiyang",

        "postfix": "县"
    },
    {
        "id": 1692,
        "name": "余干",
        "father": 254,
        "key": "y",
        "abbreviation": "yg",
        "pinyin": "yugan",

        "postfix": "县"
    },
    {
        "id": 1693,
        "name": "鄱阳",
        "father": 254,
        "key": "p",
        "abbreviation": "py",
        "pinyin": "poyang",

        "postfix": "县"
    },
    {
        "id": 1694,
        "name": "万年",
        "father": 254,
        "key": "w",
        "abbreviation": "wn",
        "pinyin": "wannian",

        "postfix": "县"
    },
    {
        "id": 1695,
        "name": "婺源",
        "father": 254,
        "key": "w",
        "abbreviation": "wy",
        "pinyin": "wuyuan",

        "postfix": "县"
    },
    {
        "id": 1696,
        "name": "德兴",
        "father": 254,
        "key": "d",
        "abbreviation": "dx",
        "pinyin": "dexing",

        "postfix": "市"
    },
    {
        "id": 1697,
        "name": "历下",
        "father": 255,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "lixia",

        "postfix": "区"
    },
    {
        "id": 1698,
        "name": "市中",
        "father": 255,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "shizhong",

        "postfix": "区"
    },
    {
        "id": 1699,
        "name": "槐荫",
        "father": 255,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "huaiyin",

        "postfix": "区"
    },
    {
        "id": 1700,
        "name": "天桥",
        "father": 255,
        "key": "t",
        "abbreviation": "tq",
        "pinyin": "tianqiao",

        "postfix": "区"
    },
    {
        "id": 1701,
        "name": "历城",
        "father": 255,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "licheng",

        "postfix": "区"
    },
    {
        "id": 1702,
        "name": "长清",
        "father": 255,
        "key": "c",
        "abbreviation": "cq",
        "pinyin": "changqing",

        "postfix": "区"
    },
    {
        "id": 1703,
        "name": "平阴",
        "father": 255,
        "key": "p",
        "abbreviation": "py",
        "pinyin": "pingyin",

        "postfix": "县"
    },
    {
        "id": 1704,
        "name": "济阳",
        "father": 255,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jiyang",

        "postfix": "区"
    },
    {
        "id": 1705,
        "name": "商河",
        "father": 255,
        "key": "s",
        "abbreviation": "sh",
        "pinyin": "shanghe",

        "postfix": "县"
    },
    {
        "id": 1706,
        "name": "章丘",
        "father": 255,
        "key": "z",
        "abbreviation": "zq",
        "pinyin": "zhangqiu",

        "postfix": "区"
    },
    {
        "id": 1707,
        "name": "市南",
        "father": 256,
        "key": "s",
        "abbreviation": "sn",
        "pinyin": "shinan",

        "postfix": "区"
    },
    {
        "id": 1708,
        "name": "市北",
        "father": 256,
        "key": "s",
        "abbreviation": "sb",
        "pinyin": "shibei",

        "postfix": "区"
    },
    {
        "id": 1709,
        "name": "黄岛",
        "father": 256,
        "key": "h",
        "abbreviation": "hd",
        "pinyin": "huangdao",

        "postfix": "区"
    },
    {
        "id": 1710,
        "name": "崂山",
        "father": 256,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "laoshan",

        "postfix": "区"
    },
    {
        "id": 1711,
        "name": "李沧",
        "father": 256,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "licang",

        "postfix": "区"
    },
    {
        "id": 1712,
        "name": "城阳",
        "father": 256,
        "key": "c",
        "abbreviation": "cy",
        "pinyin": "chengyang",

        "postfix": "区"
    },
    {
        "id": 1713,
        "name": "胶州",
        "father": 256,
        "key": "j",
        "abbreviation": "jz",
        "pinyin": "jiaozhou",

        "postfix": "市"
    },
    {
        "id": 1714,
        "name": "即墨",
        "father": 256,
        "key": "j",
        "abbreviation": "jm",
        "pinyin": "jimo",

        "postfix": "区"
    },
    {
        "id": 1715,
        "name": "平度",
        "father": 256,
        "key": "p",
        "abbreviation": "pd",
        "pinyin": "pingdu",

        "postfix": "市"
    },
    {
        "id": 1716,
        "name": "莱西",
        "father": 256,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "laixi",

        "postfix": "市"
    },
    {
        "id": 1717,
        "name": "淄川",
        "father": 257,
        "key": "z",
        "abbreviation": "zc",
        "pinyin": "zichuan",

        "postfix": "区"
    },
    {
        "id": 1718,
        "name": "张店",
        "father": 257,
        "key": "z",
        "abbreviation": "zd",
        "pinyin": "zhangdian",

        "postfix": "区"
    },
    {
        "id": 1719,
        "name": "博山",
        "father": 257,
        "key": "b",
        "abbreviation": "bs",
        "pinyin": "boshan",

        "postfix": "区"
    },
    {
        "id": 1720,
        "name": "临淄",
        "father": 257,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "linzi",

        "postfix": "区"
    },
    {
        "id": 1721,
        "name": "周村",
        "father": 257,
        "key": "z",
        "abbreviation": "zc",
        "pinyin": "zhoucun",

        "postfix": "区"
    },
    {
        "id": 1722,
        "name": "桓台",
        "father": 257,
        "key": "h",
        "abbreviation": "ht",
        "pinyin": "huantai",

        "postfix": "县"
    },
    {
        "id": 1723,
        "name": "高青",
        "father": 257,
        "key": "g",
        "abbreviation": "gq",
        "pinyin": "gaoqing",

        "postfix": "县"
    },
    {
        "id": 1724,
        "name": "沂源",
        "father": 257,
        "key": "y",
        "abbreviation": "yy",
        "pinyin": "yiyuan",

        "postfix": "县"
    },
    {
        "id": 1725,
        "name": "市中",
        "father": 258,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "shizhong",

        "postfix": "区"
    },
    {
        "id": 1726,
        "name": "薛城",
        "father": 258,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xuecheng",

        "postfix": "区"
    },
    {
        "id": 1727,
        "name": "峄城",
        "father": 258,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yicheng",

        "postfix": "区"
    },
    {
        "id": 1728,
        "name": "台儿庄",
        "father": 258,
        "key": "t",
        "abbreviation": "tez",
        "pinyin": "taierzhuang",

        "postfix": "区"
    },
    {
        "id": 1729,
        "name": "山亭",
        "father": 258,
        "key": "s",
        "abbreviation": "st",
        "pinyin": "shanting",

        "postfix": "区"
    },
    {
        "id": 1730,
        "name": "滕州",
        "father": 258,
        "key": "t",
        "abbreviation": "tz",
        "pinyin": "tengzhou",

        "postfix": "市"
    },
    {
        "id": 1731,
        "name": "东营",
        "father": 259,
        "key": "d",
        "abbreviation": "dy",
        "pinyin": "dongying",

        "postfix": "区"
    },
    {
        "id": 1732,
        "name": "河口",
        "father": 259,
        "key": "h",
        "abbreviation": "hk",
        "pinyin": "hekou",

        "postfix": "区"
    },
    {
        "id": 1733,
        "name": "垦利",
        "father": 259,
        "key": "k",
        "abbreviation": "kl",
        "pinyin": "kenli",

        "postfix": "区"
    },
    {
        "id": 1734,
        "name": "利津",
        "father": 259,
        "key": "l",
        "abbreviation": "lj",
        "pinyin": "lijin",

        "postfix": "县"
    },
    {
        "id": 1735,
        "name": "广饶",
        "father": 259,
        "key": "g",
        "abbreviation": "gr",
        "pinyin": "guangrao",

        "postfix": "县"
    },
    {
        "id": 1736,
        "name": "芝罘",
        "father": 260,
        "key": "z",
        "abbreviation": "zf",
        "pinyin": "zhifu",

        "postfix": "区"
    },
    {
        "id": 1737,
        "name": "福山",
        "father": 260,
        "key": "f",
        "abbreviation": "fs",
        "pinyin": "fushan",

        "postfix": "区"
    },
    {
        "id": 1738,
        "name": "牟平",
        "father": 260,
        "key": "m",
        "abbreviation": "mp",
        "pinyin": "mouping",

        "postfix": "区"
    },
    {
        "id": 1739,
        "name": "莱山",
        "father": 260,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "laishan",

        "postfix": "区"
    },
    {
        "id": 1740,
        "name": "长岛",
        "father": 260,
        "key": "c",
        "abbreviation": "cd",
        "pinyin": "changdao",

        "postfix": "县"
    },
    {
        "id": 1741,
        "name": "龙口",
        "father": 260,
        "key": "l",
        "abbreviation": "lk",
        "pinyin": "longkou",

        "postfix": "市"
    },
    {
        "id": 1742,
        "name": "莱阳",
        "father": 260,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "laiyang",

        "postfix": "市"
    },
    {
        "id": 1743,
        "name": "莱州",
        "father": 260,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "laizhou",

        "postfix": "市"
    },
    {
        "id": 1744,
        "name": "蓬莱",
        "father": 260,
        "key": "p",
        "abbreviation": "pl",
        "pinyin": "penglai",

        "postfix": "市"
    },
    {
        "id": 1745,
        "name": "招远",
        "father": 260,
        "key": "z",
        "abbreviation": "zy",
        "pinyin": "zhaoyuan",

        "postfix": "市"
    },
    {
        "id": 1746,
        "name": "栖霞",
        "father": 260,
        "key": "q",
        "abbreviation": "qx",
        "pinyin": "qixia",

        "postfix": "市"
    },
    {
        "id": 1747,
        "name": "海阳",
        "father": 260,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "haiyang",

        "postfix": "市"
    },
    {
        "id": 1748,
        "name": "潍城",
        "father": 261,
        "key": "w",
        "abbreviation": "wc",
        "pinyin": "weicheng",

        "postfix": "区"
    },
    {
        "id": 1749,
        "name": "寒亭",
        "father": 261,
        "key": "h",
        "abbreviation": "ht",
        "pinyin": "hanting",

        "postfix": "区"
    },
    {
        "id": 1750,
        "name": "坊子",
        "father": 261,
        "key": "f",
        "abbreviation": "fz",
        "pinyin": "fangzi",

        "postfix": "区"
    },
    {
        "id": 1751,
        "name": "奎文",
        "father": 261,
        "key": "k",
        "abbreviation": "kw",
        "pinyin": "kuiwen",

        "postfix": "区"
    },
    {
        "id": 1752,
        "name": "临朐",
        "father": 261,
        "key": "l",
        "abbreviation": "lq",
        "pinyin": "linqu",

        "postfix": "县"
    },
    {
        "id": 1753,
        "name": "昌乐",
        "father": 261,
        "key": "c",
        "abbreviation": "cl",
        "pinyin": "changle",

        "postfix": "县"
    },
    {
        "id": 1754,
        "name": "青州",
        "father": 261,
        "key": "q",
        "abbreviation": "qz",
        "pinyin": "qingzhou",

        "postfix": "市"
    },
    {
        "id": 1755,
        "name": "诸城",
        "father": 261,
        "key": "z",
        "abbreviation": "zc",
        "pinyin": "zhucheng",

        "postfix": "市"
    },
    {
        "id": 1756,
        "name": "寿光",
        "father": 261,
        "key": "s",
        "abbreviation": "sg",
        "pinyin": "shouguang",

        "postfix": "市"
    },
    {
        "id": 1757,
        "name": "安丘",
        "father": 261,
        "key": "a",
        "abbreviation": "aq",
        "pinyin": "anqiu",

        "postfix": "市"
    },
    {
        "id": 1758,
        "name": "高密",
        "father": 261,
        "key": "g",
        "abbreviation": "gm",
        "pinyin": "gaomi",

        "postfix": "市"
    },
    {
        "id": 1759,
        "name": "昌邑",
        "father": 261,
        "key": "c",
        "abbreviation": "cy",
        "pinyin": "changyi",

        "postfix": "市"
    },
    {
        "id": 1761,
        "name": "任城",
        "father": 262,
        "key": "r",
        "abbreviation": "rc",
        "pinyin": "rencheng",

        "postfix": "区"
    },
    {
        "id": 1762,
        "name": "微山",
        "father": 262,
        "key": "w",
        "abbreviation": "ws",
        "pinyin": "weishan",

        "postfix": "县"
    },
    {
        "id": 1763,
        "name": "鱼台",
        "father": 262,
        "key": "y",
        "abbreviation": "yt",
        "pinyin": "yutai",

        "postfix": "县"
    },
    {
        "id": 1764,
        "name": "金乡",
        "father": 262,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jinxiang",

        "postfix": "县"
    },
    {
        "id": 1765,
        "name": "嘉祥",
        "father": 262,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jiaxiang",

        "postfix": "县"
    },
    {
        "id": 1766,
        "name": "汶上",
        "father": 262,
        "key": "w",
        "abbreviation": "ws",
        "pinyin": "wenshang",

        "postfix": "县"
    },
    {
        "id": 1767,
        "name": "泗水",
        "father": 262,
        "key": "s",
        "abbreviation": "ss",
        "pinyin": "sishui",

        "postfix": "县"
    },
    {
        "id": 1768,
        "name": "梁山",
        "father": 262,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "liangshan",

        "postfix": "县"
    },
    {
        "id": 1769,
        "name": "曲阜",
        "father": 262,
        "key": "q",
        "abbreviation": "qf",
        "pinyin": "qufu",

        "postfix": "市"
    },
    {
        "id": 1770,
        "name": "兖州",
        "father": 262,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yanzhou",

        "postfix": "区"
    },
    {
        "id": 1771,
        "name": "邹城",
        "father": 262,
        "key": "z",
        "abbreviation": "zc",
        "pinyin": "zoucheng",

        "postfix": "市"
    },
    {
        "id": 1772,
        "name": "泰山",
        "father": 263,
        "key": "t",
        "abbreviation": "ts",
        "pinyin": "taishan",

        "postfix": "区"
    },
    {
        "id": 1773,
        "name": "岱岳",
        "father": 263,
        "key": "d",
        "abbreviation": "dy",
        "pinyin": "daiyue",

        "postfix": "区"
    },
    {
        "id": 1774,
        "name": "宁阳",
        "father": 263,
        "key": "n",
        "abbreviation": "ny",
        "pinyin": "ningyang",

        "postfix": "县"
    },
    {
        "id": 1775,
        "name": "东平",
        "father": 263,
        "key": "d",
        "abbreviation": "dp",
        "pinyin": "dongping",

        "postfix": "县"
    },
    {
        "id": 1776,
        "name": "新泰",
        "father": 263,
        "key": "x",
        "abbreviation": "xt",
        "pinyin": "xintai",

        "postfix": "市"
    },
    {
        "id": 1777,
        "name": "肥城",
        "father": 263,
        "key": "f",
        "abbreviation": "fc",
        "pinyin": "feicheng",

        "postfix": "市"
    },
    {
        "id": 1778,
        "name": "环翠",
        "father": 264,
        "key": "h",
        "abbreviation": "hc",
        "pinyin": "huancui",

        "postfix": "区"
    },
    {
        "id": 1779,
        "name": "文登",
        "father": 264,
        "key": "w",
        "abbreviation": "wd",
        "pinyin": "wendeng",

        "postfix": "区"
    },
    {
        "id": 1780,
        "name": "荣成",
        "father": 264,
        "key": "r",
        "abbreviation": "rc",
        "pinyin": "rongcheng",

        "postfix": "市"
    },
    {
        "id": 1781,
        "name": "乳山",
        "father": 264,
        "key": "r",
        "abbreviation": "rs",
        "pinyin": "rushan",

        "postfix": "市"
    },
    {
        "id": 1782,
        "name": "东港",
        "father": 265,
        "key": "d",
        "abbreviation": "dg",
        "pinyin": "donggang",

        "postfix": "区"
    },
    {
        "id": 1783,
        "name": "岚山",
        "father": 265,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lanshan",

        "postfix": "区"
    },
    {
        "id": 1784,
        "name": "五莲",
        "father": 265,
        "key": "w",
        "abbreviation": "wl",
        "pinyin": "wulian",

        "postfix": "县"
    },
    {
        "id": 1785,
        "name": "莒县",
        "father": 265,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "juxian",

        "postfix": ""
    },
    {
        "id": 1786,
        "name": "莱芜",
        "father": 255,
        "key": "l",
        "abbreviation": "lw",
        "pinyin": "laiwu",

        "postfix": "区"
    },
    {
        "id": 1787,
        "name": "钢城",
        "father": 255,
        "key": "g",
        "abbreviation": "gc",
        "pinyin": "gangcheng",

        "postfix": "区"
    },
    {
        "id": 1788,
        "name": "兰山",
        "father": 267,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lanshan",

        "postfix": "区"
    },
    {
        "id": 1789,
        "name": "罗庄",
        "father": 267,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "luozhuang",

        "postfix": "区"
    },
    {
        "id": 1790,
        "name": "河东",
        "father": 267,
        "key": "h",
        "abbreviation": "hd",
        "pinyin": "hedong",

        "postfix": "区"
    },
    {
        "id": 1791,
        "name": "沂南",
        "father": 267,
        "key": "y",
        "abbreviation": "yn",
        "pinyin": "yinan",

        "postfix": "县"
    },
    {
        "id": 1792,
        "name": "郯城",
        "father": 267,
        "key": "t",
        "abbreviation": "tc",
        "pinyin": "tancheng",

        "postfix": "县"
    },
    {
        "id": 1793,
        "name": "沂水",
        "father": 267,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yishui",

        "postfix": "县"
    },
    {
        "id": 1794,
        "name": "兰陵",
        "father": 267,
        "key": "l",
        "abbreviation": "ll",
        "pinyin": "lanling",

        "postfix": "县"
    },
    {
        "id": 1795,
        "name": "费县",
        "father": 267,
        "key": "f",
        "abbreviation": "fx",
        "pinyin": "feixian",

        "postfix": ""
    },
    {
        "id": 1796,
        "name": "平邑",
        "father": 267,
        "key": "p",
        "abbreviation": "py",
        "pinyin": "pingyi",

        "postfix": "县"
    },
    {
        "id": 1797,
        "name": "莒南",
        "father": 267,
        "key": "j",
        "abbreviation": "jn",
        "pinyin": "junan",

        "postfix": "县"
    },
    {
        "id": 1798,
        "name": "蒙阴",
        "father": 267,
        "key": "m",
        "abbreviation": "my",
        "pinyin": "mengyin",

        "postfix": "县"
    },
    {
        "id": 1799,
        "name": "临沭",
        "father": 267,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "linshu",

        "postfix": "县"
    },
    {
        "id": 1800,
        "name": "德城",
        "father": 268,
        "key": "d",
        "abbreviation": "dc",
        "pinyin": "decheng",

        "postfix": "区"
    },
    {
        "id": 1801,
        "name": "陵城",
        "father": 268,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "lingcheng",

        "postfix": "区"
    },
    {
        "id": 1802,
        "name": "宁津",
        "father": 268,
        "key": "n",
        "abbreviation": "nj",
        "pinyin": "ningjin",

        "postfix": "县"
    },
    {
        "id": 1803,
        "name": "庆云",
        "father": 268,
        "key": "q",
        "abbreviation": "qy",
        "pinyin": "qingyun",

        "postfix": "县"
    },
    {
        "id": 1804,
        "name": "临邑",
        "father": 268,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "linyi",

        "postfix": "县"
    },
    {
        "id": 1805,
        "name": "齐河",
        "father": 268,
        "key": "q",
        "abbreviation": "qh",
        "pinyin": "qihe",

        "postfix": "县"
    },
    {
        "id": 1806,
        "name": "平原",
        "father": 268,
        "key": "p",
        "abbreviation": "py",
        "pinyin": "pingyuan",

        "postfix": "县"
    },
    {
        "id": 1807,
        "name": "夏津",
        "father": 268,
        "key": "x",
        "abbreviation": "xj",
        "pinyin": "xiajin",

        "postfix": "县"
    },
    {
        "id": 1808,
        "name": "武城",
        "father": 268,
        "key": "w",
        "abbreviation": "wc",
        "pinyin": "wucheng",

        "postfix": "县"
    },
    {
        "id": 1809,
        "name": "乐陵",
        "father": 268,
        "key": "l",
        "abbreviation": "ll",
        "pinyin": "leling",

        "postfix": "市"
    },
    {
        "id": 1810,
        "name": "禹城",
        "father": 268,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yucheng",

        "postfix": "市"
    },
    {
        "id": 1811,
        "name": "东昌府",
        "father": 269,
        "key": "d",
        "abbreviation": "dcf",
        "pinyin": "dongchangfu",

        "postfix": "区"
    },
    {
        "id": 1812,
        "name": "阳谷",
        "father": 269,
        "key": "y",
        "abbreviation": "yg",
        "pinyin": "yanggu",

        "postfix": "县"
    },
    {
        "id": 1813,
        "name": "莘县",
        "father": 269,
        "key": "x",
        "abbreviation": "xx",
        "pinyin": "xinxian",

        "postfix": ""
    },
    {
        "id": 1814,
        "name": "茌平",
        "father": 269,
        "key": "c",
        "abbreviation": "cp",
        "pinyin": "chiping",

        "postfix": "县"
    },
    {
        "id": 1815,
        "name": "东阿",
        "father": 269,
        "key": "d",
        "abbreviation": "da",
        "pinyin": "donga",

        "postfix": "县"
    },
    {
        "id": 1816,
        "name": "冠县",
        "father": 269,
        "key": "g",
        "abbreviation": "gx",
        "pinyin": "guanxian",

        "postfix": ""
    },
    {
        "id": 1817,
        "name": "高唐",
        "father": 269,
        "key": "g",
        "abbreviation": "gt",
        "pinyin": "gaotang",

        "postfix": "县"
    },
    {
        "id": 1818,
        "name": "临清",
        "father": 269,
        "key": "l",
        "abbreviation": "lq",
        "pinyin": "linqing",

        "postfix": "市"
    },
    {
        "id": 1819,
        "name": "滨城",
        "father": 270,
        "key": "b",
        "abbreviation": "bc",
        "pinyin": "bincheng",

        "postfix": "区"
    },
    {
        "id": 1820,
        "name": "惠民",
        "father": 270,
        "key": "h",
        "abbreviation": "hm",
        "pinyin": "huimin",

        "postfix": "县"
    },
    {
        "id": 1821,
        "name": "阳信",
        "father": 270,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yangxin",

        "postfix": "县"
    },
    {
        "id": 1822,
        "name": "无棣",
        "father": 270,
        "key": "w",
        "abbreviation": "wd",
        "pinyin": "wudi",

        "postfix": "县"
    },
    {
        "id": 1823,
        "name": "沾化",
        "father": 270,
        "key": "z",
        "abbreviation": "zh",
        "pinyin": "zhanhua",

        "postfix": "区"
    },
    {
        "id": 1824,
        "name": "博兴",
        "father": 270,
        "key": "b",
        "abbreviation": "bx",
        "pinyin": "boxing",

        "postfix": "县"
    },
    {
        "id": 1825,
        "name": "邹平",
        "father": 270,
        "key": "z",
        "abbreviation": "zp",
        "pinyin": "zouping",

        "postfix": "市"
    },
    {
        "id": 1826,
        "name": "牡丹",
        "father": 271,
        "key": "m",
        "abbreviation": "md",
        "pinyin": "mudan",

        "postfix": "区"
    },
    {
        "id": 1827,
        "name": "曹县",
        "father": 271,
        "key": "c",
        "abbreviation": "cx",
        "pinyin": "caoxian",

        "postfix": ""
    },
    {
        "id": 1828,
        "name": "单县",
        "father": 271,
        "key": "d",
        "abbreviation": "dx",
        "pinyin": "danxian",

        "postfix": ""
    },
    {
        "id": 1829,
        "name": "成武",
        "father": 271,
        "key": "c",
        "abbreviation": "cw",
        "pinyin": "chengwu",

        "postfix": "县"
    },
    {
        "id": 1830,
        "name": "巨野",
        "father": 271,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "juye",

        "postfix": "县"
    },
    {
        "id": 1831,
        "name": "郓城",
        "father": 271,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yuncheng",

        "postfix": "县"
    },
    {
        "id": 1832,
        "name": "鄄城",
        "father": 271,
        "key": "j",
        "abbreviation": "jc",
        "pinyin": "juancheng",

        "postfix": "县"
    },
    {
        "id": 1833,
        "name": "定陶",
        "father": 271,
        "key": "d",
        "abbreviation": "dt",
        "pinyin": "dingtao",

        "postfix": "区"
    },
    {
        "id": 1834,
        "name": "东明",
        "father": 271,
        "key": "d",
        "abbreviation": "dm",
        "pinyin": "dongming",

        "postfix": "县"
    },
    {
        "id": 1835,
        "name": "中原",
        "father": 272,
        "key": "z",
        "abbreviation": "zy",
        "pinyin": "zhongyuan",

        "postfix": "区"
    },
    {
        "id": 1836,
        "name": "二七",
        "father": 272,
        "key": "e",
        "abbreviation": "eq",
        "pinyin": "erqi",

        "postfix": "区"
    },
    {
        "id": 1837,
        "name": "管城",
        "father": 272,
        "key": "g",
        "abbreviation": "gc",
        "pinyin": "guancheng",
        "": "回族",
        "postfix": "区"
    },
    {
        "id": 1838,
        "name": "金水",
        "father": 272,
        "key": "j",
        "abbreviation": "js",
        "pinyin": "jinshui",

        "postfix": "区"
    },
    {
        "id": 1839,
        "name": "上街",
        "father": 272,
        "key": "s",
        "abbreviation": "sj",
        "pinyin": "shangjie",

        "postfix": "区"
    },
    {
        "id": 1840,
        "name": "惠济",
        "father": 272,
        "key": "h",
        "abbreviation": "hj",
        "pinyin": "huiji",

        "postfix": "区"
    },
    {
        "id": 1841,
        "name": "中牟",
        "father": 272,
        "key": "z",
        "abbreviation": "zm",
        "pinyin": "zhongmou",

        "postfix": "县"
    },
    {
        "id": 1842,
        "name": "巩义",
        "father": 272,
        "key": "g",
        "abbreviation": "gy",
        "pinyin": "gongyi",

        "postfix": "市"
    },
    {
        "id": 1843,
        "name": "荥阳",
        "father": 272,
        "key": "y",
        "abbreviation": "yy",
        "pinyin": "yingyang",

        "postfix": "市"
    },
    {
        "id": 1844,
        "name": "新密",
        "father": 272,
        "key": "x",
        "abbreviation": "xm",
        "pinyin": "xinmi",

        "postfix": "市"
    },
    {
        "id": 1845,
        "name": "新郑",
        "father": 272,
        "key": "x",
        "abbreviation": "xz",
        "pinyin": "xinzheng",

        "postfix": "市"
    },
    {
        "id": 1846,
        "name": "登封",
        "father": 272,
        "key": "d",
        "abbreviation": "df",
        "pinyin": "dengfeng",

        "postfix": "市"
    },
    {
        "id": 1847,
        "name": "龙亭",
        "father": 273,
        "key": "l",
        "abbreviation": "lt",
        "pinyin": "longting",

        "postfix": "区"
    },
    {
        "id": 1848,
        "name": "顺河",
        "father": 273,
        "key": "s",
        "abbreviation": "sh",
        "pinyin": "shunhe",
        "": "回族",
        "postfix": "区"
    },
    {
        "id": 1849,
        "name": "鼓楼",
        "father": 273,
        "key": "g",
        "abbreviation": "gl",
        "pinyin": "gulou",

        "postfix": "区"
    },
    {
        "id": 1850,
        "name": "禹王台",
        "father": 273,
        "key": "y",
        "abbreviation": "ywt",
        "pinyin": "yuwangtai",

        "postfix": "区"
    },
    {
        "id": 1852,
        "name": "杞县",
        "father": 273,
        "key": "q",
        "abbreviation": "qx",
        "pinyin": "qixian",

        "postfix": ""
    },
    {
        "id": 1853,
        "name": "通许",
        "father": 273,
        "key": "t",
        "abbreviation": "tx",
        "pinyin": "tongxu",

        "postfix": "县"
    },
    {
        "id": 1854,
        "name": "尉氏",
        "father": 273,
        "key": "w",
        "abbreviation": "ws",
        "pinyin": "weishi",

        "postfix": "县"
    },
    {
        "id": 1855,
        "name": "祥符",
        "father": 273,
        "key": "x",
        "abbreviation": "xf",
        "pinyin": "kaifeng",

        "postfix": "区"
    },
    {
        "id": 1856,
        "name": "兰考",
        "father": 273,
        "key": "l",
        "abbreviation": "lk",
        "pinyin": "lankao",

        "postfix": "县"
    },
    {
        "id": 1857,
        "name": "老城",
        "father": 274,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "laocheng",

        "postfix": "区"
    },
    {
        "id": 1858,
        "name": "西工",
        "father": 274,
        "key": "x",
        "abbreviation": "xg",
        "pinyin": "xigong",

        "postfix": "区"
    },
    {
        "id": 1859,
        "name": "瀍河",
        "father": 274,
        "key": "c",
        "abbreviation": "ch",
        "pinyin": "chanhe",
        "": "回族",
        "postfix": "区"
    },
    {
        "id": 1860,
        "name": "涧西",
        "father": 274,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jianxi",

        "postfix": "区"
    },
    {
        "id": 1861,
        "name": "吉利",
        "father": 274,
        "key": "j",
        "abbreviation": "jl",
        "pinyin": "jili",

        "postfix": "区"
    },
    {
        "id": 1862,
        "name": "洛龙",
        "father": 274,
        "key": "l",
        "abbreviation": "ll",
        "pinyin": "luolong",

        "postfix": "区"
    },
    {
        "id": 1863,
        "name": "孟津",
        "father": 274,
        "key": "m",
        "abbreviation": "mj",
        "pinyin": "mengjin",

        "postfix": "县"
    },
    {
        "id": 1864,
        "name": "新安",
        "father": 274,
        "key": "x",
        "abbreviation": "xa",
        "pinyin": "xinan",

        "postfix": "县"
    },
    {
        "id": 1865,
        "name": "栾川",
        "father": 274,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "luanchuan",

        "postfix": "县"
    },
    {
        "id": 1866,
        "name": "嵩县",
        "father": 274,
        "key": "s",
        "abbreviation": "sx",
        "pinyin": "songxian",

        "postfix": ""
    },
    {
        "id": 1867,
        "name": "汝阳",
        "father": 274,
        "key": "r",
        "abbreviation": "ry",
        "pinyin": "ruyang",

        "postfix": "县"
    },
    {
        "id": 1868,
        "name": "宜阳",
        "father": 274,
        "key": "y",
        "abbreviation": "yy",
        "pinyin": "yiyang",

        "postfix": "县"
    },
    {
        "id": 1869,
        "name": "洛宁",
        "father": 274,
        "key": "l",
        "abbreviation": "ln",
        "pinyin": "luoning",

        "postfix": "县"
    },
    {
        "id": 1870,
        "name": "伊川",
        "father": 274,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yichuan",

        "postfix": "县"
    },
    {
        "id": 1871,
        "name": "偃师",
        "father": 274,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yanshi",

        "postfix": "市"
    },
    {
        "id": 1872,
        "name": "新华",
        "father": 275,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xinhua",

        "postfix": "区"
    },
    {
        "id": 1873,
        "name": "卫东",
        "father": 275,
        "key": "w",
        "abbreviation": "wd",
        "pinyin": "weidong",

        "postfix": "区"
    },
    {
        "id": 1874,
        "name": "石龙",
        "father": 275,
        "key": "s",
        "abbreviation": "sl",
        "pinyin": "shilong",

        "postfix": "区"
    },
    {
        "id": 1875,
        "name": "湛河",
        "father": 275,
        "key": "z",
        "abbreviation": "zh",
        "pinyin": "zhanhe",

        "postfix": "区"
    },
    {
        "id": 1876,
        "name": "宝丰",
        "father": 275,
        "key": "b",
        "abbreviation": "bf",
        "pinyin": "baofeng",

        "postfix": "县"
    },
    {
        "id": 1877,
        "name": "叶县",
        "father": 275,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yexian",

        "postfix": ""
    },
    {
        "id": 1878,
        "name": "鲁山",
        "father": 275,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lushan",

        "postfix": "县"
    },
    {
        "id": 1879,
        "name": "郏县",
        "father": 275,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jiaxian",

        "postfix": ""
    },
    {
        "id": 1880,
        "name": "舞钢",
        "father": 275,
        "key": "w",
        "abbreviation": "wg",
        "pinyin": "wugang",

        "postfix": "市"
    },
    {
        "id": 1881,
        "name": "汝州",
        "father": 275,
        "key": "r",
        "abbreviation": "rz",
        "pinyin": "ruzhou",

        "postfix": "市"
    },
    {
        "id": 1882,
        "name": "文峰",
        "father": 276,
        "key": "w",
        "abbreviation": "wf",
        "pinyin": "wenfeng",

        "postfix": "区"
    },
    {
        "id": 1883,
        "name": "北关",
        "father": 276,
        "key": "b",
        "abbreviation": "bg",
        "pinyin": "beiguan",

        "postfix": "区"
    },
    {
        "id": 1884,
        "name": "殷都",
        "father": 276,
        "key": "y",
        "abbreviation": "yd",
        "pinyin": "yindu",

        "postfix": "区"
    },
    {
        "id": 1885,
        "name": "龙安",
        "father": 276,
        "key": "l",
        "abbreviation": "la",
        "pinyin": "longan",

        "postfix": "区"
    },
    {
        "id": 1886,
        "name": "安阳",
        "father": 276,
        "key": "a",
        "abbreviation": "ay",
        "pinyin": "anyang",

        "postfix": "县"
    },
    {
        "id": 1887,
        "name": "汤阴",
        "father": 276,
        "key": "t",
        "abbreviation": "ty",
        "pinyin": "tangyin",

        "postfix": "县"
    },
    {
        "id": 1888,
        "name": "滑县",
        "father": 276,
        "key": "h",
        "abbreviation": "hx",
        "pinyin": "huaxian",

        "postfix": ""
    },
    {
        "id": 1889,
        "name": "内黄",
        "father": 276,
        "key": "n",
        "abbreviation": "nh",
        "pinyin": "neihuang",

        "postfix": "县"
    },
    {
        "id": 1890,
        "name": "林州",
        "father": 276,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "linzhou",

        "postfix": "市"
    },
    {
        "id": 1891,
        "name": "鹤山",
        "father": 277,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "heshan",

        "postfix": "区"
    },
    {
        "id": 1892,
        "name": "山城",
        "father": 277,
        "key": "s",
        "abbreviation": "sc",
        "pinyin": "shancheng",

        "postfix": "区"
    },
    {
        "id": 1893,
        "name": "淇滨",
        "father": 277,
        "key": "q",
        "abbreviation": "qb",
        "pinyin": "qibin",

        "postfix": "区"
    },
    {
        "id": 1894,
        "name": "浚县",
        "father": 277,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "junxian",

        "postfix": ""
    },
    {
        "id": 1895,
        "name": "淇县",
        "father": 277,
        "key": "q",
        "abbreviation": "qx",
        "pinyin": "qixian",

        "postfix": ""
    },
    {
        "id": 1896,
        "name": "红旗",
        "father": 278,
        "key": "h",
        "abbreviation": "hq",
        "pinyin": "hongqi",

        "postfix": "区"
    },
    {
        "id": 1897,
        "name": "卫滨",
        "father": 278,
        "key": "w",
        "abbreviation": "wb",
        "pinyin": "weibin",

        "postfix": "区"
    },
    {
        "id": 1898,
        "name": "凤泉",
        "father": 278,
        "key": "f",
        "abbreviation": "fq",
        "pinyin": "fengquan",

        "postfix": "区"
    },
    {
        "id": 1899,
        "name": "牧野",
        "father": 278,
        "key": "m",
        "abbreviation": "my",
        "pinyin": "muye",

        "postfix": "区"
    },
    {
        "id": 1900,
        "name": "新乡",
        "father": 278,
        "key": "x",
        "abbreviation": "xx",
        "pinyin": "xinxiang",

        "postfix": "县"
    },
    {
        "id": 1901,
        "name": "获嘉",
        "father": 278,
        "key": "h",
        "abbreviation": "hj",
        "pinyin": "huojia",

        "postfix": "县"
    },
    {
        "id": 1902,
        "name": "原阳",
        "father": 278,
        "key": "y",
        "abbreviation": "yy",
        "pinyin": "yuanyang",

        "postfix": "县"
    },
    {
        "id": 1903,
        "name": "延津",
        "father": 278,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "yanjin",

        "postfix": "县"
    },
    {
        "id": 1904,
        "name": "封丘",
        "father": 278,
        "key": "f",
        "abbreviation": "fq",
        "pinyin": "fengqiu",

        "postfix": "县"
    },
    {
        "id": 1905,
        "name": "长垣",
        "father": 278,
        "key": "c",
        "abbreviation": "cy",
        "pinyin": "changyuan",

        "postfix": "县"
    },
    {
        "id": 1906,
        "name": "卫辉",
        "father": 278,
        "key": "w",
        "abbreviation": "wh",
        "pinyin": "weihui",

        "postfix": "市"
    },
    {
        "id": 1907,
        "name": "辉县",
        "father": 278,
        "key": "h",
        "abbreviation": "hx",
        "pinyin": "huixian",

        "postfix": "市"
    },
    {
        "id": 1908,
        "name": "解放",
        "father": 279,
        "key": "j",
        "abbreviation": "jf",
        "pinyin": "jiefang",

        "postfix": "区"
    },
    {
        "id": 1909,
        "name": "中站",
        "father": 279,
        "key": "z",
        "abbreviation": "zz",
        "pinyin": "zhongzhan",

        "postfix": "区"
    },
    {
        "id": 1910,
        "name": "马村",
        "father": 279,
        "key": "m",
        "abbreviation": "mc",
        "pinyin": "macun",

        "postfix": "区"
    },
    {
        "id": 1911,
        "name": "山阳",
        "father": 279,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "shanyang",

        "postfix": "区"
    },
    {
        "id": 1912,
        "name": "修武",
        "father": 279,
        "key": "x",
        "abbreviation": "xw",
        "pinyin": "xiuwu",

        "postfix": "县"
    },
    {
        "id": 1913,
        "name": "博爱",
        "father": 279,
        "key": "b",
        "abbreviation": "ba",
        "pinyin": "boai",

        "postfix": "县"
    },
    {
        "id": 1914,
        "name": "武陟",
        "father": 279,
        "key": "w",
        "abbreviation": "wz",
        "pinyin": "wuzhi",

        "postfix": "县"
    },
    {
        "id": 1915,
        "name": "温县",
        "father": 279,
        "key": "w",
        "abbreviation": "wx",
        "pinyin": "wenxian",

        "postfix": ""
    },
    {
        "id": 1916,
        "name": "沁阳",
        "father": 279,
        "key": "q",
        "abbreviation": "qy",
        "pinyin": "qinyang",

        "postfix": "市"
    },
    {
        "id": 1917,
        "name": "孟州",
        "father": 279,
        "key": "m",
        "abbreviation": "mz",
        "pinyin": "mengzhou",

        "postfix": "市"
    },
    {
        "id": 1918,
        "name": "华龙",
        "father": 280,
        "key": "h",
        "abbreviation": "hl",
        "pinyin": "hualong",

        "postfix": "区"
    },
    {
        "id": 1919,
        "name": "清丰",
        "father": 280,
        "key": "q",
        "abbreviation": "qf",
        "pinyin": "qingfeng",

        "postfix": "县"
    },
    {
        "id": 1920,
        "name": "南乐",
        "father": 280,
        "key": "n",
        "abbreviation": "nl",
        "pinyin": "nanle",

        "postfix": "县"
    },
    {
        "id": 1921,
        "name": "范县",
        "father": 280,
        "key": "f",
        "abbreviation": "fx",
        "pinyin": "fanxian",

        "postfix": ""
    },
    {
        "id": 1922,
        "name": "台前",
        "father": 280,
        "key": "t",
        "abbreviation": "tq",
        "pinyin": "taiqian",

        "postfix": "县"
    },
    {
        "id": 1923,
        "name": "濮阳",
        "father": 280,
        "key": "p",
        "abbreviation": "py",
        "pinyin": "puyang",

        "postfix": "县"
    },
    {
        "id": 1924,
        "name": "魏都",
        "father": 281,
        "key": "w",
        "abbreviation": "wd",
        "pinyin": "weidu",

        "postfix": "区"
    },
    {
        "id": 1925,
        "name": "建安",
        "father": 281,
        "key": "j",
        "abbreviation": "ja",
        "pinyin": "jianan",

        "postfix": "区"
    },
    {
        "id": 1926,
        "name": "鄢陵",
        "father": 281,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yanling",

        "postfix": "县"
    },
    {
        "id": 1927,
        "name": "襄城",
        "father": 281,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xiangcheng",

        "postfix": "县"
    },
    {
        "id": 1928,
        "name": "禹州",
        "father": 281,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yuzhou",

        "postfix": "市"
    },
    {
        "id": 1929,
        "name": "长葛",
        "father": 281,
        "key": "c",
        "abbreviation": "cg",
        "pinyin": "changge",

        "postfix": "市"
    },
    {
        "id": 1930,
        "name": "源汇",
        "father": 282,
        "key": "y",
        "abbreviation": "yh",
        "pinyin": "yuanhui",

        "postfix": "区"
    },
    {
        "id": 1931,
        "name": "郾城",
        "father": 282,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yancheng",

        "postfix": "区"
    },
    {
        "id": 1932,
        "name": "召陵",
        "father": 282,
        "key": "z",
        "abbreviation": "zl",
        "pinyin": "zhaoling",

        "postfix": "区"
    },
    {
        "id": 1933,
        "name": "舞阳",
        "father": 282,
        "key": "w",
        "abbreviation": "wy",
        "pinyin": "wuyang",

        "postfix": "县"
    },
    {
        "id": 1934,
        "name": "临颍",
        "father": 282,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "linying",

        "postfix": "县"
    },
    {
        "id": 1935,
        "name": "湖滨",
        "father": 283,
        "key": "h",
        "abbreviation": "hb",
        "pinyin": "hubin",

        "postfix": "区"
    },
    {
        "id": 1936,
        "name": "渑池",
        "father": 283,
        "key": "m",
        "abbreviation": "mc",
        "pinyin": "mianchi",

        "postfix": "县"
    },
    {
        "id": 1937,
        "name": "陕州",
        "father": 283,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "shanzhou",

        "postfix": "区"
    },
    {
        "id": 1938,
        "name": "卢氏",
        "father": 283,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lushi",

        "postfix": "县"
    },
    {
        "id": 1939,
        "name": "义马",
        "father": 283,
        "key": "y",
        "abbreviation": "ym",
        "pinyin": "yima",

        "postfix": "市"
    },
    {
        "id": 1940,
        "name": "灵宝",
        "father": 283,
        "key": "l",
        "abbreviation": "lb",
        "pinyin": "lingbao",

        "postfix": "市"
    },
    {
        "id": 1941,
        "name": "宛城",
        "father": 284,
        "key": "w",
        "abbreviation": "wc",
        "pinyin": "wancheng",

        "postfix": "区"
    },
    {
        "id": 1942,
        "name": "卧龙",
        "father": 284,
        "key": "w",
        "abbreviation": "wl",
        "pinyin": "wolong",

        "postfix": "区"
    },
    {
        "id": 1943,
        "name": "南召",
        "father": 284,
        "key": "n",
        "abbreviation": "nz",
        "pinyin": "nanzhao",

        "postfix": "县"
    },
    {
        "id": 1944,
        "name": "方城",
        "father": 284,
        "key": "f",
        "abbreviation": "fc",
        "pinyin": "fangcheng",

        "postfix": "县"
    },
    {
        "id": 1945,
        "name": "西峡",
        "father": 284,
        "key": "x",
        "abbreviation": "xx",
        "pinyin": "xixia",

        "postfix": "县"
    },
    {
        "id": 1946,
        "name": "镇平",
        "father": 284,
        "key": "z",
        "abbreviation": "zp",
        "pinyin": "zhenping",

        "postfix": "县"
    },
    {
        "id": 1947,
        "name": "内乡",
        "father": 284,
        "key": "n",
        "abbreviation": "nx",
        "pinyin": "neixiang",

        "postfix": "县"
    },
    {
        "id": 1948,
        "name": "淅川",
        "father": 284,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xichuan",

        "postfix": "县"
    },
    {
        "id": 1949,
        "name": "社旗",
        "father": 284,
        "key": "s",
        "abbreviation": "sq",
        "pinyin": "sheqi",

        "postfix": "县"
    },
    {
        "id": 1950,
        "name": "唐河",
        "father": 284,
        "key": "t",
        "abbreviation": "th",
        "pinyin": "tanghe",

        "postfix": "县"
    },
    {
        "id": 1951,
        "name": "新野",
        "father": 284,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xinye",

        "postfix": "县"
    },
    {
        "id": 1952,
        "name": "桐柏",
        "father": 284,
        "key": "t",
        "abbreviation": "tb",
        "pinyin": "tongbo",

        "postfix": "县"
    },
    {
        "id": 1953,
        "name": "邓州",
        "father": 284,
        "key": "d",
        "abbreviation": "dz",
        "pinyin": "dengzhou",

        "postfix": "市"
    },
    {
        "id": 1954,
        "name": "粱园",
        "father": 285,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "liangyuan",

        "postfix": "区"
    },
    {
        "id": 1955,
        "name": "睢阳",
        "father": 285,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "suiyang",

        "postfix": "区"
    },
    {
        "id": 1956,
        "name": "民权",
        "father": 285,
        "key": "m",
        "abbreviation": "mq",
        "pinyin": "minquan",

        "postfix": "县"
    },
    {
        "id": 1957,
        "name": "睢县",
        "father": 285,
        "key": "s",
        "abbreviation": "sx",
        "pinyin": "suixian",

        "postfix": ""
    },
    {
        "id": 1958,
        "name": "宁陵",
        "father": 285,
        "key": "n",
        "abbreviation": "nl",
        "pinyin": "ningling",

        "postfix": "县"
    },
    {
        "id": 1959,
        "name": "柘城",
        "father": 285,
        "key": "z",
        "abbreviation": "zc",
        "pinyin": "zhecheng",

        "postfix": "县"
    },
    {
        "id": 1960,
        "name": "虞城",
        "father": 285,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yucheng",

        "postfix": "县"
    },
    {
        "id": 1961,
        "name": "夏邑",
        "father": 285,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xiayi",

        "postfix": "县"
    },
    {
        "id": 1962,
        "name": "永城",
        "father": 285,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yongcheng",

        "postfix": "市"
    },
    {
        "id": 1963,
        "name": "浉河",
        "father": 286,
        "key": "s",
        "abbreviation": "sh",
        "pinyin": "shihe",

        "postfix": "区"
    },
    {
        "id": 1964,
        "name": "平桥",
        "father": 286,
        "key": "p",
        "abbreviation": "pq",
        "pinyin": "pingqiao",

        "postfix": "区"
    },
    {
        "id": 1965,
        "name": "罗山",
        "father": 286,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "luoshan",

        "postfix": "县"
    },
    {
        "id": 1966,
        "name": "光山",
        "father": 286,
        "key": "g",
        "abbreviation": "gs",
        "pinyin": "guangshan",

        "postfix": "县"
    },
    {
        "id": 1967,
        "name": "新县",
        "father": 286,
        "key": "x",
        "abbreviation": "xx",
        "pinyin": "xinxian",

        "postfix": ""
    },
    {
        "id": 1968,
        "name": "商城",
        "father": 286,
        "key": "s",
        "abbreviation": "sc",
        "pinyin": "shangcheng",

        "postfix": "县"
    },
    {
        "id": 1969,
        "name": "固始",
        "father": 286,
        "key": "g",
        "abbreviation": "gs",
        "pinyin": "gushi",

        "postfix": "县"
    },
    {
        "id": 1970,
        "name": "潢川",
        "father": 286,
        "key": "h",
        "abbreviation": "hc",
        "pinyin": "huangchuan",

        "postfix": "县"
    },
    {
        "id": 1971,
        "name": "淮滨",
        "father": 286,
        "key": "h",
        "abbreviation": "hb",
        "pinyin": "huaibin",

        "postfix": "县"
    },
    {
        "id": 1972,
        "name": "息县",
        "father": 286,
        "key": "x",
        "abbreviation": "xx",
        "pinyin": "xixian",

        "postfix": ""
    },
    {
        "id": 1973,
        "name": "川汇",
        "father": 287,
        "key": "c",
        "abbreviation": "ch",
        "pinyin": "chuanhui",

        "postfix": "区"
    },
    {
        "id": 1974,
        "name": "扶沟",
        "father": 287,
        "key": "f",
        "abbreviation": "fg",
        "pinyin": "fugou",

        "postfix": "县"
    },
    {
        "id": 1975,
        "name": "西华",
        "father": 287,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xihua",

        "postfix": "县"
    },
    {
        "id": 1976,
        "name": "商水",
        "father": 287,
        "key": "s",
        "abbreviation": "ss",
        "pinyin": "shangshui",

        "postfix": "县"
    },
    {
        "id": 1977,
        "name": "沈丘",
        "father": 287,
        "key": "s",
        "abbreviation": "sq",
        "pinyin": "shenqiu",

        "postfix": "县"
    },
    {
        "id": 1978,
        "name": "郸城",
        "father": 287,
        "key": "d",
        "abbreviation": "dc",
        "pinyin": "dancheng",

        "postfix": "县"
    },
    {
        "id": 1979,
        "name": "淮阳",
        "father": 287,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "huaiyang",

        "postfix": "县"
    },
    {
        "id": 1980,
        "name": "太康",
        "father": 287,
        "key": "t",
        "abbreviation": "tk",
        "pinyin": "taikang",

        "postfix": "县"
    },
    {
        "id": 1981,
        "name": "鹿邑",
        "father": 287,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "luyi",

        "postfix": "县"
    },
    {
        "id": 1982,
        "name": "项城",
        "father": 287,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xiangcheng",

        "postfix": "市"
    },
    {
        "id": 1983,
        "name": "驿城",
        "father": 288,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yicheng",

        "postfix": "区"
    },
    {
        "id": 1984,
        "name": "西平",
        "father": 288,
        "key": "x",
        "abbreviation": "xp",
        "pinyin": "xiping",

        "postfix": "县"
    },
    {
        "id": 1985,
        "name": "上蔡",
        "father": 288,
        "key": "s",
        "abbreviation": "sc",
        "pinyin": "shangcai",

        "postfix": "县"
    },
    {
        "id": 1986,
        "name": "平舆",
        "father": 288,
        "key": "p",
        "abbreviation": "py",
        "pinyin": "pingyu",

        "postfix": "县"
    },
    {
        "id": 1987,
        "name": "正阳",
        "father": 288,
        "key": "z",
        "abbreviation": "zy",
        "pinyin": "zhengyang",

        "postfix": "县"
    },
    {
        "id": 1988,
        "name": "确山",
        "father": 288,
        "key": "q",
        "abbreviation": "qs",
        "pinyin": "queshan",

        "postfix": "县"
    },
    {
        "id": 1989,
        "name": "泌阳",
        "father": 288,
        "key": "m",
        "abbreviation": "my",
        "pinyin": "miyang",

        "postfix": "县"
    },
    {
        "id": 1990,
        "name": "汝南",
        "father": 288,
        "key": "r",
        "abbreviation": "rn",
        "pinyin": "runan",

        "postfix": "县"
    },
    {
        "id": 1991,
        "name": "遂平",
        "father": 288,
        "key": "s",
        "abbreviation": "sp",
        "pinyin": "suiping",

        "postfix": "县"
    },
    {
        "id": 1992,
        "name": "新蔡",
        "father": 288,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xincai",

        "postfix": "县"
    },
    {
        "id": 1993,
        "name": "江岸",
        "father": 290,
        "key": "j",
        "abbreviation": "ja",
        "pinyin": "jiangan",

        "postfix": "区"
    },
    {
        "id": 1994,
        "name": "江汉",
        "father": 290,
        "key": "j",
        "abbreviation": "jh",
        "pinyin": "jianghan",

        "postfix": "区"
    },
    {
        "id": 1995,
        "name": "硚口",
        "father": 290,
        "key": "q",
        "abbreviation": "qk",
        "pinyin": "qiaokou",

        "postfix": "区"
    },
    {
        "id": 1996,
        "name": "汉阳",
        "father": 290,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "hanyang",

        "postfix": "区"
    },
    {
        "id": 1997,
        "name": "武昌",
        "father": 290,
        "key": "w",
        "abbreviation": "wc",
        "pinyin": "wuchang",

        "postfix": "区"
    },
    {
        "id": 1998,
        "name": "青山",
        "father": 290,
        "key": "q",
        "abbreviation": "qs",
        "pinyin": "qingshan",

        "postfix": "区"
    },
    {
        "id": 1999,
        "name": "洪山",
        "father": 290,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "hongshan",

        "postfix": "区"
    },
    {
        "id": 2000,
        "name": "东西湖",
        "father": 290,
        "key": "d",
        "abbreviation": "dxh",
        "pinyin": "dongxihu",

        "postfix": "区"
    },
    {
        "id": 2001,
        "name": "汉南",
        "father": 290,
        "key": "h",
        "abbreviation": "hn",
        "pinyin": "hannan",

        "postfix": "区"
    },
    {
        "id": 2002,
        "name": "蔡甸",
        "father": 290,
        "key": "c",
        "abbreviation": "cd",
        "pinyin": "caidian",

        "postfix": "区"
    },
    {
        "id": 2003,
        "name": "江夏",
        "father": 290,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jiangxia",

        "postfix": "区"
    },
    {
        "id": 2004,
        "name": "黄陂",
        "father": 290,
        "key": "h",
        "abbreviation": "hp",
        "pinyin": "huangpo",

        "postfix": "区"
    },
    {
        "id": 2005,
        "name": "新洲",
        "father": 290,
        "key": "x",
        "abbreviation": "xz",
        "pinyin": "xinzhou",

        "postfix": "区"
    },
    {
        "id": 2006,
        "name": "黄石港",
        "father": 291,
        "key": "h",
        "abbreviation": "hsg",
        "pinyin": "huangshigang",

        "postfix": "区"
    },
    {
        "id": 2007,
        "name": "西塞山",
        "father": 291,
        "key": "x",
        "abbreviation": "xss",
        "pinyin": "xisaishan",

        "postfix": "区"
    },
    {
        "id": 2008,
        "name": "下陆",
        "father": 291,
        "key": "x",
        "abbreviation": "xl",
        "pinyin": "xialu",

        "postfix": "区"
    },
    {
        "id": 2009,
        "name": "铁山",
        "father": 291,
        "key": "t",
        "abbreviation": "ts",
        "pinyin": "tieshan",

        "postfix": "区"
    },
    {
        "id": 2010,
        "name": "阳新",
        "father": 291,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yangxin",

        "postfix": "县"
    },
    {
        "id": 2011,
        "name": "大冶",
        "father": 291,
        "key": "d",
        "abbreviation": "dy",
        "pinyin": "daye",

        "postfix": "市"
    },
    {
        "id": 2012,
        "name": "茅箭",
        "father": 292,
        "key": "m",
        "abbreviation": "mj",
        "pinyin": "maojian",

        "postfix": "区"
    },
    {
        "id": 2013,
        "name": "张湾",
        "father": 292,
        "key": "z",
        "abbreviation": "zw",
        "pinyin": "zhangwan",

        "postfix": "区"
    },
    {
        "id": 2014,
        "name": "郧阳",
        "father": 292,
        "key": "y",
        "abbreviation": "yy",
        "pinyin": "yunyang",

        "postfix": "区"
    },
    {
        "id": 2015,
        "name": "郧西",
        "father": 292,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yunxi",

        "postfix": "县"
    },
    {
        "id": 2016,
        "name": "竹山",
        "father": 292,
        "key": "z",
        "abbreviation": "zs",
        "pinyin": "zhushan",

        "postfix": "县"
    },
    {
        "id": 2017,
        "name": "竹溪",
        "father": 292,
        "key": "z",
        "abbreviation": "zx",
        "pinyin": "zhuxi",

        "postfix": "县"
    },
    {
        "id": 2018,
        "name": "房县",
        "father": 292,
        "key": "f",
        "abbreviation": "fx",
        "pinyin": "fangxian",

        "postfix": ""
    },
    {
        "id": 2019,
        "name": "丹江口",
        "father": 292,
        "key": "d",
        "abbreviation": "djk",
        "pinyin": "danjiangkou",

        "postfix": "市"
    },
    {
        "id": 2020,
        "name": "西陵",
        "father": 293,
        "key": "x",
        "abbreviation": "xl",
        "pinyin": "xiling",

        "postfix": "区"
    },
    {
        "id": 2021,
        "name": "伍家岗",
        "father": 293,
        "key": "w",
        "abbreviation": "wjg",
        "pinyin": "wujiagang",

        "postfix": "区"
    },
    {
        "id": 2022,
        "name": "点军",
        "father": 293,
        "key": "d",
        "abbreviation": "dj",
        "pinyin": "dianjun",

        "postfix": "区"
    },
    {
        "id": 2023,
        "name": "虢亭",
        "father": 293,
        "key": "g",
        "abbreviation": "gt",
        "pinyin": "guoting",

        "postfix": "区"
    },
    {
        "id": 2024,
        "name": "夷陵",
        "father": 293,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yiling",

        "postfix": "区"
    },
    {
        "id": 2025,
        "name": "远安",
        "father": 293,
        "key": "y",
        "abbreviation": "ya",
        "pinyin": "yuanan",

        "postfix": "县"
    },
    {
        "id": 2026,
        "name": "兴山",
        "father": 293,
        "key": "x",
        "abbreviation": "xs",
        "pinyin": "xingshan",

        "postfix": "县"
    },
    {
        "id": 2027,
        "name": "秭归",
        "father": 293,
        "key": "z",
        "abbreviation": "zg",
        "pinyin": "zigui",

        "postfix": "县"
    },
    {
        "id": 2028,
        "name": "长阳",
        "father": 293,
        "key": "c",
        "abbreviation": "cy",
        "pinyin": "changyang",
        "": "土家族",
        "postfix": "自治县"
    },
    {
        "id": 2029,
        "name": "五峰",
        "father": 293,
        "key": "w",
        "abbreviation": "wf",
        "pinyin": "wufeng",
        "": "土家族",
        "postfix": "自治县"
    },
    {
        "id": 2030,
        "name": "宜都",
        "father": 293,
        "key": "y",
        "abbreviation": "yd",
        "pinyin": "yidu",

        "postfix": "市"
    },
    {
        "id": 2031,
        "name": "当阳",
        "father": 293,
        "key": "d",
        "abbreviation": "dy",
        "pinyin": "dangyang",

        "postfix": "市"
    },
    {
        "id": 2032,
        "name": "枝江",
        "father": 293,
        "key": "z",
        "abbreviation": "zj",
        "pinyin": "zhijiang",

        "postfix": "市"
    },
    {
        "id": 2033,
        "name": "襄城",
        "father": 294,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xiangcheng",

        "postfix": "区"
    },
    {
        "id": 2034,
        "name": "樊城",
        "father": 294,
        "key": "f",
        "abbreviation": "fc",
        "pinyin": "fancheng",

        "postfix": "区"
    },
    {
        "id": 2035,
        "name": "襄州",
        "father": 294,
        "key": "x",
        "abbreviation": "xz",
        "pinyin": "xiangzhou",

        "postfix": "区"
    },
    {
        "id": 2036,
        "name": "南漳",
        "father": 294,
        "key": "n",
        "abbreviation": "nz",
        "pinyin": "nanzhang",

        "postfix": "县"
    },
    {
        "id": 2037,
        "name": "谷城",
        "father": 294,
        "key": "g",
        "abbreviation": "gc",
        "pinyin": "gucheng",

        "postfix": "县"
    },
    {
        "id": 2038,
        "name": "保康",
        "father": 294,
        "key": "b",
        "abbreviation": "bk",
        "pinyin": "baokang",

        "postfix": "县"
    },
    {
        "id": 2039,
        "name": "老河口",
        "father": 294,
        "key": "l",
        "abbreviation": "lhk",
        "pinyin": "laohekou",

        "postfix": "市"
    },
    {
        "id": 2040,
        "name": "枣阳",
        "father": 294,
        "key": "z",
        "abbreviation": "zy",
        "pinyin": "zaoyang",

        "postfix": "市"
    },
    {
        "id": 2041,
        "name": "宜城",
        "father": 294,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yicheng",

        "postfix": "市"
    },
    {
        "id": 2042,
        "name": "粱子湖",
        "father": 295,
        "key": "l",
        "abbreviation": "lzh",
        "pinyin": "liangzihu",

        "postfix": "区"
    },
    {
        "id": 2043,
        "name": "华容",
        "father": 295,
        "key": "h",
        "abbreviation": "hr",
        "pinyin": "huarong",

        "postfix": "区"
    },
    {
        "id": 2044,
        "name": "鄂城",
        "father": 295,
        "key": "e",
        "abbreviation": "ec",
        "pinyin": "echeng",

        "postfix": "区"
    },
    {
        "id": 2045,
        "name": "东宝",
        "father": 296,
        "key": "d",
        "abbreviation": "db",
        "pinyin": "dongbao",

        "postfix": "区"
    },
    {
        "id": 2046,
        "name": "掇刀",
        "father": 296,
        "key": "d",
        "abbreviation": "dd",
        "pinyin": "duodao",

        "postfix": "区"
    },
    {
        "id": 2047,
        "name": "京山",
        "father": 296,
        "key": "j",
        "abbreviation": "js",
        "pinyin": "jingshan",

        "postfix": "市"
    },
    {
        "id": 2048,
        "name": "沙洋",
        "father": 296,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "shayang",

        "postfix": "县"
    },
    {
        "id": 2049,
        "name": "钟祥",
        "father": 296,
        "key": "z",
        "abbreviation": "zx",
        "pinyin": "zhongxiang",

        "postfix": "市"
    },
    {
        "id": 2050,
        "name": "孝南",
        "father": 297,
        "key": "x",
        "abbreviation": "xn",
        "pinyin": "xiaonan",

        "postfix": "区"
    },
    {
        "id": 2051,
        "name": "大悟",
        "father": 297,
        "key": "d",
        "abbreviation": "dw",
        "pinyin": "dawu",

        "postfix": "县"
    },
    {
        "id": 2052,
        "name": "云梦",
        "father": 297,
        "key": "y",
        "abbreviation": "ym",
        "pinyin": "yunmeng",

        "postfix": "县"
    },
    {
        "id": 2053,
        "name": "应城",
        "father": 297,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yingcheng",

        "postfix": "市"
    },
    {
        "id": 2054,
        "name": "安陆",
        "father": 297,
        "key": "a",
        "abbreviation": "al",
        "pinyin": "anlu",

        "postfix": "市"
    },
    {
        "id": 2055,
        "name": "汉川",
        "father": 297,
        "key": "h",
        "abbreviation": "hc",
        "pinyin": "hanchuan",

        "postfix": "市"
    },
    {
        "id": 2056,
        "name": "沙市",
        "father": 298,
        "key": "s",
        "abbreviation": "ss",
        "pinyin": "shashi",

        "postfix": "区"
    },
    {
        "id": 2057,
        "name": "荆州",
        "father": 298,
        "key": "j",
        "abbreviation": "jz",
        "pinyin": "jingzhou",

        "postfix": "区"
    },
    {
        "id": 2058,
        "name": "公安",
        "father": 298,
        "key": "g",
        "abbreviation": "ga",
        "pinyin": "gongan",

        "postfix": "县"
    },
    {
        "id": 2059,
        "name": "监利",
        "father": 298,
        "key": "j",
        "abbreviation": "jl",
        "pinyin": "jianli",

        "postfix": "县"
    },
    {
        "id": 2060,
        "name": "江陵",
        "father": 298,
        "key": "j",
        "abbreviation": "jl",
        "pinyin": "jiangling",

        "postfix": "县"
    },
    {
        "id": 2061,
        "name": "石首",
        "father": 298,
        "key": "s",
        "abbreviation": "ss",
        "pinyin": "shishou",

        "postfix": "市"
    },
    {
        "id": 2062,
        "name": "洪湖",
        "father": 298,
        "key": "h",
        "abbreviation": "hh",
        "pinyin": "honghu",

        "postfix": "市"
    },
    {
        "id": 2063,
        "name": "松滋",
        "father": 298,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "songzi",

        "postfix": "市"
    },
    {
        "id": 2064,
        "name": "黄州",
        "father": 299,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "huangzhou",

        "postfix": "区"
    },
    {
        "id": 2065,
        "name": "团风",
        "father": 299,
        "key": "t",
        "abbreviation": "tf",
        "pinyin": "tuanfeng",

        "postfix": "县"
    },
    {
        "id": 2066,
        "name": "红安",
        "father": 299,
        "key": "h",
        "abbreviation": "ha",
        "pinyin": "hongan",

        "postfix": "县"
    },
    {
        "id": 2067,
        "name": "罗田",
        "father": 299,
        "key": "l",
        "abbreviation": "lt",
        "pinyin": "luotian",

        "postfix": "县"
    },
    {
        "id": 2068,
        "name": "英山",
        "father": 299,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yingshan",

        "postfix": "县"
    },
    {
        "id": 2069,
        "name": "浠水",
        "father": 299,
        "key": "x",
        "abbreviation": "xs",
        "pinyin": "xishui",

        "postfix": "县"
    },
    {
        "id": 2070,
        "name": "蕲春",
        "father": 299,
        "key": "q",
        "abbreviation": "qc",
        "pinyin": "qichun",

        "postfix": "县"
    },
    {
        "id": 2071,
        "name": "黄梅",
        "father": 299,
        "key": "h",
        "abbreviation": "hm",
        "pinyin": "huangmei",

        "postfix": "县"
    },
    {
        "id": 2072,
        "name": "麻城",
        "father": 299,
        "key": "m",
        "abbreviation": "mc",
        "pinyin": "macheng",

        "postfix": "市"
    },
    {
        "id": 2073,
        "name": "武穴",
        "father": 299,
        "key": "w",
        "abbreviation": "wx",
        "pinyin": "wuxue",

        "postfix": "市"
    },
    {
        "id": 2074,
        "name": "咸安",
        "father": 300,
        "key": "x",
        "abbreviation": "xa",
        "pinyin": "xianan",

        "postfix": "区"
    },
    {
        "id": 2075,
        "name": "嘉鱼",
        "father": 300,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jiayu",

        "postfix": "县"
    },
    {
        "id": 2076,
        "name": "通城",
        "father": 300,
        "key": "t",
        "abbreviation": "tc",
        "pinyin": "tongcheng",

        "postfix": "县"
    },
    {
        "id": 2077,
        "name": "崇阳",
        "father": 300,
        "key": "c",
        "abbreviation": "cy",
        "pinyin": "chongyang",

        "postfix": "县"
    },
    {
        "id": 2078,
        "name": "通山",
        "father": 300,
        "key": "t",
        "abbreviation": "ts",
        "pinyin": "tongshan",

        "postfix": "县"
    },
    {
        "id": 2079,
        "name": "赤壁",
        "father": 300,
        "key": "c",
        "abbreviation": "cb",
        "pinyin": "chibi",

        "postfix": "市"
    },
    {
        "id": 2080,
        "name": "曾都",
        "father": 301,
        "key": "c",
        "abbreviation": "cd",
        "pinyin": "cengdu",

        "postfix": "区"
    },
    {
        "id": 2081,
        "name": "随县",
        "father": 301,
        "key": "s",
        "abbreviation": "sx",
        "pinyin": "suixian",

        "postfix": ""
    },
    {
        "id": 2082,
        "name": "广水",
        "father": 301,
        "key": "g",
        "abbreviation": "gs",
        "pinyin": "guangshui",

        "postfix": "市"
    },
    {
        "id": 2083,
        "name": "恩施",
        "father": 302,
        "key": "e",
        "abbreviation": "es",
        "pinyin": "enshi",

        "postfix": "市"
    },
    {
        "id": 2084,
        "name": "利川",
        "father": 302,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "lichuan",

        "postfix": "市"
    },
    {
        "id": 2085,
        "name": "建始",
        "father": 302,
        "key": "j",
        "abbreviation": "js",
        "pinyin": "jianshi",

        "postfix": "县"
    },
    {
        "id": 2086,
        "name": "巴东",
        "father": 302,
        "key": "b",
        "abbreviation": "bd",
        "pinyin": "badong",

        "postfix": "县"
    },
    {
        "id": 2087,
        "name": "宣恩",
        "father": 302,
        "key": "x",
        "abbreviation": "xe",
        "pinyin": "xuanen",

        "postfix": "县"
    },
    {
        "id": 2088,
        "name": "咸丰",
        "father": 302,
        "key": "x",
        "abbreviation": "xf",
        "pinyin": "xianfeng",

        "postfix": "县"
    },
    {
        "id": 2089,
        "name": "来凤",
        "father": 302,
        "key": "l",
        "abbreviation": "lf",
        "pinyin": "laifeng",

        "postfix": "县"
    },
    {
        "id": 2090,
        "name": "鹤峰",
        "father": 302,
        "key": "h",
        "abbreviation": "hf",
        "pinyin": "hefeng",

        "postfix": "县"
    },
    {
        "id": 2091,
        "name": "芙蓉",
        "father": 307,
        "key": "f",
        "abbreviation": "fr",
        "pinyin": "furong",

        "postfix": "区"
    },
    {
        "id": 2092,
        "name": "天心",
        "father": 307,
        "key": "t",
        "abbreviation": "tx",
        "pinyin": "tianxin",

        "postfix": "区"
    },
    {
        "id": 2093,
        "name": "岳麓",
        "father": 307,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yuelu",

        "postfix": "区"
    },
    {
        "id": 2094,
        "name": "开福",
        "father": 307,
        "key": "k",
        "abbreviation": "kf",
        "pinyin": "kaifu",

        "postfix": "区"
    },
    {
        "id": 2095,
        "name": "雨花",
        "father": 307,
        "key": "y",
        "abbreviation": "yh",
        "pinyin": "yuhua",

        "postfix": "区"
    },
    {
        "id": 2096,
        "name": "望城",
        "father": 307,
        "key": "w",
        "abbreviation": "wc",
        "pinyin": "wangcheng",

        "postfix": "区"
    },
    {
        "id": 2097,
        "name": "长沙",
        "father": 307,
        "key": "c",
        "abbreviation": "cs",
        "pinyin": "changsha",

        "postfix": "县"
    },
    {
        "id": 2098,
        "name": "宁乡",
        "father": 307,
        "key": "n",
        "abbreviation": "nx",
        "pinyin": "ningxiang",

        "postfix": "市"
    },
    {
        "id": 2099,
        "name": "浏阳",
        "father": 307,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "liuyang",

        "postfix": "市"
    },
    {
        "id": 2100,
        "name": "荷塘",
        "father": 308,
        "key": "h",
        "abbreviation": "ht",
        "pinyin": "hetang",

        "postfix": "区"
    },
    {
        "id": 2101,
        "name": "芦淞",
        "father": 308,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lusong",

        "postfix": "区"
    },
    {
        "id": 2102,
        "name": "石峰",
        "father": 308,
        "key": "s",
        "abbreviation": "sf",
        "pinyin": "shifeng",

        "postfix": "区"
    },
    {
        "id": 2103,
        "name": "天元",
        "father": 308,
        "key": "t",
        "abbreviation": "ty",
        "pinyin": "tianyuan",

        "postfix": "区"
    },
    {
        "id": 2104,
        "name": "渌口",
        "father": 308,
        "key": "l",
        "abbreviation": "lk",
        "pinyin": "lukou",

        "postfix": "区"
    },
    {
        "id": 2105,
        "name": "攸县",
        "father": 308,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "youxian",

        "postfix": ""
    },
    {
        "id": 2106,
        "name": "茶陵",
        "father": 308,
        "key": "c",
        "abbreviation": "cl",
        "pinyin": "chaling",

        "postfix": "县"
    },
    {
        "id": 2107,
        "name": "炎陵",
        "father": 308,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yanling",

        "postfix": "县"
    },
    {
        "id": 2108,
        "name": "醴陵",
        "father": 308,
        "key": "l",
        "abbreviation": "ll",
        "pinyin": "liling",

        "postfix": "市"
    },
    {
        "id": 2109,
        "name": "雨湖",
        "father": 309,
        "key": "y",
        "abbreviation": "yh",
        "pinyin": "yuhu",

        "postfix": "区"
    },
    {
        "id": 2110,
        "name": "岳塘",
        "father": 309,
        "key": "y",
        "abbreviation": "yt",
        "pinyin": "yuetang",

        "postfix": "区"
    },
    {
        "id": 2111,
        "name": "湘潭",
        "father": 309,
        "key": "x",
        "abbreviation": "xt",
        "pinyin": "xiangtan",

        "postfix": "县"
    },
    {
        "id": 2112,
        "name": "湘乡",
        "father": 309,
        "key": "x",
        "abbreviation": "xx",
        "pinyin": "xiangxiang",

        "postfix": "市"
    },
    {
        "id": 2113,
        "name": "韶山",
        "father": 309,
        "key": "s",
        "abbreviation": "ss",
        "pinyin": "shaoshan",

        "postfix": "市"
    },
    {
        "id": 2114,
        "name": "珠晖",
        "father": 310,
        "key": "z",
        "abbreviation": "zh",
        "pinyin": "zhuhui",

        "postfix": "区"
    },
    {
        "id": 2115,
        "name": "雁峰",
        "father": 310,
        "key": "y",
        "abbreviation": "yf",
        "pinyin": "yanfeng",

        "postfix": "区"
    },
    {
        "id": 2116,
        "name": "石鼓",
        "father": 310,
        "key": "s",
        "abbreviation": "sg",
        "pinyin": "shigu",

        "postfix": "区"
    },
    {
        "id": 2117,
        "name": "蒸湘",
        "father": 310,
        "key": "z",
        "abbreviation": "zx",
        "pinyin": "zhengxiang",

        "postfix": "区"
    },
    {
        "id": 2118,
        "name": "南岳",
        "father": 310,
        "key": "n",
        "abbreviation": "ny",
        "pinyin": "nanyue",

        "postfix": "区"
    },
    {
        "id": 2119,
        "name": "衡阳",
        "father": 310,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "hengyang",

        "postfix": "县"
    },
    {
        "id": 2120,
        "name": "衡南",
        "father": 310,
        "key": "h",
        "abbreviation": "hn",
        "pinyin": "hengnan",

        "postfix": "县"
    },
    {
        "id": 2121,
        "name": "衡山",
        "father": 310,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "hengshan",

        "postfix": "县"
    },
    {
        "id": 2122,
        "name": "衡东",
        "father": 310,
        "key": "h",
        "abbreviation": "hd",
        "pinyin": "hengdong",

        "postfix": "县"
    },
    {
        "id": 2123,
        "name": "祁东",
        "father": 310,
        "key": "q",
        "abbreviation": "qd",
        "pinyin": "qidong",

        "postfix": "县"
    },
    {
        "id": 2124,
        "name": "耒阳",
        "father": 310,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "leiyang",

        "postfix": "市"
    },
    {
        "id": 2125,
        "name": "常宁",
        "father": 310,
        "key": "c",
        "abbreviation": "cn",
        "pinyin": "changning",

        "postfix": "市"
    },
    {
        "id": 2126,
        "name": "双清",
        "father": 311,
        "key": "s",
        "abbreviation": "sq",
        "pinyin": "shuangqing",

        "postfix": "区"
    },
    {
        "id": 2127,
        "name": "大祥",
        "father": 311,
        "key": "d",
        "abbreviation": "dx",
        "pinyin": "daxiang",

        "postfix": "区"
    },
    {
        "id": 2128,
        "name": "北塔",
        "father": 311,
        "key": "b",
        "abbreviation": "bt",
        "pinyin": "beita",

        "postfix": "区"
    },
    {
        "id": 2129,
        "name": "邵东",
        "father": 311,
        "key": "s",
        "abbreviation": "sd",
        "pinyin": "shaodong",

        "postfix": "县"
    },
    {
        "id": 2130,
        "name": "新邵",
        "father": 311,
        "key": "x",
        "abbreviation": "xs",
        "pinyin": "xinshao",

        "postfix": "县"
    },
    {
        "id": 2131,
        "name": "邵阳",
        "father": 311,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "shaoyang",

        "postfix": "县"
    },
    {
        "id": 2132,
        "name": "隆回",
        "father": 311,
        "key": "l",
        "abbreviation": "lh",
        "pinyin": "longhui",

        "postfix": "县"
    },
    {
        "id": 2133,
        "name": "洞口",
        "father": 311,
        "key": "d",
        "abbreviation": "dk",
        "pinyin": "dongkou",

        "postfix": "县"
    },
    {
        "id": 2134,
        "name": "绥宁",
        "father": 311,
        "key": "s",
        "abbreviation": "sn",
        "pinyin": "suining",

        "postfix": "县"
    },
    {
        "id": 2135,
        "name": "新宁",
        "father": 311,
        "key": "x",
        "abbreviation": "xn",
        "pinyin": "xinning",

        "postfix": "县"
    },
    {
        "id": 2136,
        "name": "城步",
        "father": 311,
        "key": "c",
        "abbreviation": "cb",
        "pinyin": "chengbu",
        "": "苗族",
        "postfix": "自治县"
    },
    {
        "id": 2137,
        "name": "武冈",
        "father": 311,
        "key": "w",
        "abbreviation": "wg",
        "pinyin": "wugang",

        "postfix": "市"
    },
    {
        "id": 2138,
        "name": "岳阳楼",
        "father": 312,
        "key": "y",
        "abbreviation": "yyl",
        "pinyin": "yueyanglou",

        "postfix": "区"
    },
    {
        "id": 2139,
        "name": "云溪",
        "father": 312,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yunxi",

        "postfix": "区"
    },
    {
        "id": 2140,
        "name": "君山",
        "father": 312,
        "key": "j",
        "abbreviation": "js",
        "pinyin": "junshan",

        "postfix": "区"
    },
    {
        "id": 2141,
        "name": "岳阳",
        "father": 312,
        "key": "y",
        "abbreviation": "yy",
        "pinyin": "yueyang",

        "postfix": "县"
    },
    {
        "id": 2142,
        "name": "华容",
        "father": 312,
        "key": "h",
        "abbreviation": "hr",
        "pinyin": "huarong",

        "postfix": "县"
    },
    {
        "id": 2143,
        "name": "湘阴",
        "father": 312,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xiangyin",

        "postfix": "县"
    },
    {
        "id": 2144,
        "name": "平江",
        "father": 312,
        "key": "p",
        "abbreviation": "pj",
        "pinyin": "pingjiang",

        "postfix": "县"
    },
    {
        "id": 2145,
        "name": "汨罗",
        "father": 312,
        "key": "m",
        "abbreviation": "ml",
        "pinyin": "miluo",

        "postfix": "市"
    },
    {
        "id": 2146,
        "name": "临湘",
        "father": 312,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "linxiang",

        "postfix": "市"
    },
    {
        "id": 2147,
        "name": "武陵",
        "father": 313,
        "key": "w",
        "abbreviation": "wl",
        "pinyin": "wuling",

        "postfix": "区"
    },
    {
        "id": 2148,
        "name": "鼎城",
        "father": 313,
        "key": "d",
        "abbreviation": "dc",
        "pinyin": "dingcheng",

        "postfix": "区"
    },
    {
        "id": 2149,
        "name": "安乡",
        "father": 313,
        "key": "a",
        "abbreviation": "ax",
        "pinyin": "anxiang",

        "postfix": "县"
    },
    {
        "id": 2150,
        "name": "汉寿",
        "father": 313,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "hanshou",

        "postfix": "县"
    },
    {
        "id": 2151,
        "name": "澧县",
        "father": 313,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "lixian",

        "postfix": ""
    },
    {
        "id": 2152,
        "name": "临澧",
        "father": 313,
        "key": "l",
        "abbreviation": "ll",
        "pinyin": "linli",

        "postfix": "县"
    },
    {
        "id": 2153,
        "name": "桃源",
        "father": 313,
        "key": "t",
        "abbreviation": "ty",
        "pinyin": "taoyuan",

        "postfix": "县"
    },
    {
        "id": 2154,
        "name": "石门",
        "father": 313,
        "key": "s",
        "abbreviation": "sm",
        "pinyin": "shimen",

        "postfix": "县"
    },
    {
        "id": 2155,
        "name": "津市",
        "father": 313,
        "key": "j",
        "abbreviation": "js",
        "pinyin": "jinshi",

        "postfix": "市"
    },
    {
        "id": 2156,
        "name": "永定",
        "father": 314,
        "key": "y",
        "abbreviation": "yd",
        "pinyin": "yongding",

        "postfix": "区"
    },
    {
        "id": 2157,
        "name": "武陵源",
        "father": 314,
        "key": "w",
        "abbreviation": "wly",
        "pinyin": "wulingyuan",

        "postfix": "区"
    },
    {
        "id": 2158,
        "name": "慈利",
        "father": 314,
        "key": "c",
        "abbreviation": "cl",
        "pinyin": "cili",

        "postfix": "县"
    },
    {
        "id": 2159,
        "name": "桑植",
        "father": 314,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "sangzhi",

        "postfix": "县"
    },
    {
        "id": 2160,
        "name": "资阳",
        "father": 315,
        "key": "z",
        "abbreviation": "zy",
        "pinyin": "ziyang",

        "postfix": "区"
    },
    {
        "id": 2161,
        "name": "赫山",
        "father": 315,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "heshan",

        "postfix": "区"
    },
    {
        "id": 2162,
        "name": "南县",
        "father": 315,
        "key": "n",
        "abbreviation": "nx",
        "pinyin": "nanxian",

        "postfix": ""
    },
    {
        "id": 2163,
        "name": "桃江",
        "father": 315,
        "key": "t",
        "abbreviation": "tj",
        "pinyin": "taojiang",

        "postfix": "县"
    },
    {
        "id": 2164,
        "name": "安化",
        "father": 315,
        "key": "a",
        "abbreviation": "ah",
        "pinyin": "anhua",

        "postfix": "县"
    },
    {
        "id": 2165,
        "name": "沅江",
        "father": 315,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "yuanjiang",

        "postfix": "市"
    },
    {
        "id": 2166,
        "name": "北湖",
        "father": 316,
        "key": "b",
        "abbreviation": "bh",
        "pinyin": "beihu",

        "postfix": "区"
    },
    {
        "id": 2167,
        "name": "苏仙",
        "father": 316,
        "key": "s",
        "abbreviation": "sx",
        "pinyin": "suxian",

        "postfix": "区"
    },
    {
        "id": 2168,
        "name": "桂阳",
        "father": 316,
        "key": "g",
        "abbreviation": "gy",
        "pinyin": "guiyang",

        "postfix": "县"
    },
    {
        "id": 2169,
        "name": "宜章",
        "father": 316,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yizhang",

        "postfix": "县"
    },
    {
        "id": 2170,
        "name": "永兴",
        "father": 316,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yongxing",

        "postfix": "县"
    },
    {
        "id": 2171,
        "name": "嘉禾",
        "father": 316,
        "key": "j",
        "abbreviation": "jh",
        "pinyin": "jiahe",

        "postfix": "县"
    },
    {
        "id": 2172,
        "name": "临武",
        "father": 316,
        "key": "l",
        "abbreviation": "lw",
        "pinyin": "linwu",

        "postfix": "县"
    },
    {
        "id": 2173,
        "name": "汝城",
        "father": 316,
        "key": "r",
        "abbreviation": "rc",
        "pinyin": "rucheng",

        "postfix": "县"
    },
    {
        "id": 2174,
        "name": "桂东",
        "father": 316,
        "key": "g",
        "abbreviation": "gd",
        "pinyin": "guidong",

        "postfix": "县"
    },
    {
        "id": 2175,
        "name": "安仁",
        "father": 316,
        "key": "a",
        "abbreviation": "ar",
        "pinyin": "anren",

        "postfix": "县"
    },
    {
        "id": 2176,
        "name": "资兴",
        "father": 316,
        "key": "z",
        "abbreviation": "zx",
        "pinyin": "zixing",

        "postfix": "市"
    },
    {
        "id": 2177,
        "name": "零陵",
        "father": 317,
        "key": "l",
        "abbreviation": "ll",
        "pinyin": "lingling",

        "postfix": "区"
    },
    {
        "id": 2178,
        "name": "冷水滩",
        "father": 317,
        "key": "l",
        "abbreviation": "lst",
        "pinyin": "lengshuitan",

        "postfix": "区"
    },
    {
        "id": 2179,
        "name": "祁阳",
        "father": 317,
        "key": "q",
        "abbreviation": "qy",
        "pinyin": "qiyang",

        "postfix": "县"
    },
    {
        "id": 2180,
        "name": "东安",
        "father": 317,
        "key": "d",
        "abbreviation": "da",
        "pinyin": "dongan",

        "postfix": "县"
    },
    {
        "id": 2181,
        "name": "双牌",
        "father": 317,
        "key": "s",
        "abbreviation": "sp",
        "pinyin": "shuangpai",

        "postfix": "县"
    },
    {
        "id": 2182,
        "name": "道县",
        "father": 317,
        "key": "d",
        "abbreviation": "dx",
        "pinyin": "daoxian",

        "postfix": ""
    },
    {
        "id": 2183,
        "name": "江永",
        "father": 317,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jiangyong",

        "postfix": "县"
    },
    {
        "id": 2184,
        "name": "宁远",
        "father": 317,
        "key": "n",
        "abbreviation": "ny",
        "pinyin": "ningyuan",

        "postfix": "县"
    },
    {
        "id": 2185,
        "name": "蓝山",
        "father": 317,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lanshan",

        "postfix": "县"
    },
    {
        "id": 2186,
        "name": "新田",
        "father": 317,
        "key": "x",
        "abbreviation": "xt",
        "pinyin": "xintian",

        "postfix": "县"
    },
    {
        "id": 2187,
        "name": "江华",
        "father": 317,
        "key": "j",
        "abbreviation": "jh",
        "pinyin": "jianghua",
        "": "瑶族",
        "postfix": "自治县"
    },
    {
        "id": 2188,
        "name": "鹤城",
        "father": 318,
        "key": "h",
        "abbreviation": "hc",
        "pinyin": "hecheng",

        "postfix": "区"
    },
    {
        "id": 2189,
        "name": "中方",
        "father": 318,
        "key": "z",
        "abbreviation": "zf",
        "pinyin": "zhongfang",

        "postfix": "县"
    },
    {
        "id": 2190,
        "name": "沅陵",
        "father": 318,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yuanling",

        "postfix": "县"
    },
    {
        "id": 2191,
        "name": "辰溪",
        "father": 318,
        "key": "c",
        "abbreviation": "cx",
        "pinyin": "chenxi",

        "postfix": "县"
    },
    {
        "id": 2192,
        "name": "溆浦",
        "father": 318,
        "key": "x",
        "abbreviation": "xp",
        "pinyin": "xupu",

        "postfix": "县"
    },
    {
        "id": 2193,
        "name": "会同",
        "father": 318,
        "key": "h",
        "abbreviation": "ht",
        "pinyin": "huitong",

        "postfix": "县"
    },
    {
        "id": 2194,
        "name": "麻阳",
        "father": 318,
        "key": "m",
        "abbreviation": "my",
        "pinyin": "mayang",
        "": "苗族",
        "postfix": "自治县"
    },
    {
        "id": 2195,
        "name": "新晃",
        "father": 318,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xinhuang",
        "": "侗族",
        "postfix": "自治县"
    },
    {
        "id": 2196,
        "name": "芷江",
        "father": 318,
        "key": "z",
        "abbreviation": "zj",
        "pinyin": "zhijiang",
        "": "侗族",
        "postfix": "自治县"
    },
    {
        "id": 2197,
        "name": "靖州",
        "father": 318,
        "key": "j",
        "abbreviation": "jz",
        "pinyin": "jingzhou",
        "": "苗族侗族",
        "postfix": "自治县"
    },
    {
        "id": 2198,
        "name": "通道",
        "father": 318,
        "key": "t",
        "abbreviation": "td",
        "pinyin": "tongdao",
        "": "侗族",
        "postfix": "自治县"
    },
    {
        "id": 2199,
        "name": "洪江",
        "father": 318,
        "key": "h",
        "abbreviation": "hj",
        "pinyin": "hongjiang",

        "postfix": "市"
    },
    {
        "id": 2200,
        "name": "娄星",
        "father": 319,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "louxing",

        "postfix": "区"
    },
    {
        "id": 2201,
        "name": "双峰",
        "father": 319,
        "key": "s",
        "abbreviation": "sf",
        "pinyin": "shuangfeng",

        "postfix": "县"
    },
    {
        "id": 2202,
        "name": "新化",
        "father": 319,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xinhua",

        "postfix": "县"
    },
    {
        "id": 2203,
        "name": "冷水江",
        "father": 319,
        "key": "l",
        "abbreviation": "lsj",
        "pinyin": "lengshuijiang",

        "postfix": "市"
    },
    {
        "id": 2204,
        "name": "涟源",
        "father": 319,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "lianyuan",

        "postfix": "市"
    },
    {
        "id": 2205,
        "name": "吉首",
        "father": 320,
        "key": "j",
        "abbreviation": "js",
        "pinyin": "jishou",

        "postfix": "市"
    },
    {
        "id": 2206,
        "name": "泸溪",
        "father": 320,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "luxi",

        "postfix": "县"
    },
    {
        "id": 2207,
        "name": "凤凰",
        "father": 320,
        "key": "f",
        "abbreviation": "fh",
        "pinyin": "fenghuang",

        "postfix": "县"
    },
    {
        "id": 2208,
        "name": "花垣",
        "father": 320,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "huayuan",

        "postfix": "县"
    },
    {
        "id": 2209,
        "name": "保靖",
        "father": 320,
        "key": "b",
        "abbreviation": "bj",
        "pinyin": "baojing",

        "postfix": "县"
    },
    {
        "id": 2210,
        "name": "古丈",
        "father": 320,
        "key": "g",
        "abbreviation": "gz",
        "pinyin": "guzhang",

        "postfix": "县"
    },
    {
        "id": 2211,
        "name": "永顺",
        "father": 320,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yongshun",

        "postfix": "县"
    },
    {
        "id": 2212,
        "name": "龙山",
        "father": 320,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "longshan",

        "postfix": "县"
    },
    {
        "id": 2213,
        "name": "荔湾",
        "father": 321,
        "key": "l",
        "abbreviation": "lw",
        "pinyin": "liwan",

        "postfix": "区"
    },
    {
        "id": 2214,
        "name": "越秀",
        "father": 321,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yuexiu",

        "postfix": "区"
    },
    {
        "id": 2215,
        "name": "海珠",
        "father": 321,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "haizhu",

        "postfix": "区"
    },
    {
        "id": 2216,
        "name": "天河",
        "father": 321,
        "key": "t",
        "abbreviation": "th",
        "pinyin": "tianhe",

        "postfix": "区"
    },
    {
        "id": 2217,
        "name": "白云",
        "father": 321,
        "key": "b",
        "abbreviation": "by",
        "pinyin": "baiyun",

        "postfix": "区"
    },
    {
        "id": 2218,
        "name": "黄埔",
        "father": 321,
        "key": "h",
        "abbreviation": "hp",
        "pinyin": "huangpu",

        "postfix": "区"
    },
    {
        "id": 2219,
        "name": "番禺",
        "father": 321,
        "key": "f",
        "abbreviation": "fy",
        "pinyin": "fanyu",

        "postfix": "区"
    },
    {
        "id": 2220,
        "name": "花都",
        "father": 321,
        "key": "h",
        "abbreviation": "hd",
        "pinyin": "huadu",

        "postfix": "区"
    },
    {
        "id": 2221,
        "name": "南沙",
        "father": 321,
        "key": "n",
        "abbreviation": "ns",
        "pinyin": "nansha",

        "postfix": "区"
    },
    {
        "id": 2223,
        "name": "增城",
        "father": 321,
        "key": "z",
        "abbreviation": "zc",
        "pinyin": "zengcheng",

        "postfix": "区"
    },
    {
        "id": 2224,
        "name": "从化",
        "father": 321,
        "key": "c",
        "abbreviation": "ch",
        "pinyin": "conghua",

        "postfix": "区"
    },
    {
        "id": 2225,
        "name": "武江",
        "father": 322,
        "key": "w",
        "abbreviation": "wj",
        "pinyin": "wujiang",

        "postfix": "区"
    },
    {
        "id": 2226,
        "name": "浈江",
        "father": 322,
        "key": "z",
        "abbreviation": "zj",
        "pinyin": "zhenjiang",

        "postfix": "区"
    },
    {
        "id": 2227,
        "name": "曲江",
        "father": 322,
        "key": "q",
        "abbreviation": "qj",
        "pinyin": "qujiang",

        "postfix": "区"
    },
    {
        "id": 2228,
        "name": "始兴",
        "father": 322,
        "key": "s",
        "abbreviation": "sx",
        "pinyin": "shixing",

        "postfix": "县"
    },
    {
        "id": 2229,
        "name": "仁化",
        "father": 322,
        "key": "r",
        "abbreviation": "rh",
        "pinyin": "renhua",

        "postfix": "县"
    },
    {
        "id": 2230,
        "name": "翁源",
        "father": 322,
        "key": "w",
        "abbreviation": "wy",
        "pinyin": "wengyuan",

        "postfix": "县"
    },
    {
        "id": 2231,
        "name": "乳源",
        "father": 322,
        "key": "r",
        "abbreviation": "ry",
        "pinyin": "ruyuan",
        "": "瑶族",
        "postfix": "自治县"
    },
    {
        "id": 2232,
        "name": "新丰",
        "father": 322,
        "key": "x",
        "abbreviation": "xf",
        "pinyin": "xinfeng",

        "postfix": "县"
    },
    {
        "id": 2233,
        "name": "乐昌",
        "father": 322,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "lechang",

        "postfix": "市"
    },
    {
        "id": 2234,
        "name": "南雄",
        "father": 322,
        "key": "n",
        "abbreviation": "nx",
        "pinyin": "nanxiong",

        "postfix": "市"
    },
    {
        "id": 2235,
        "name": "罗湖",
        "father": 323,
        "key": "l",
        "abbreviation": "lh",
        "pinyin": "luohu",

        "postfix": "区"
    },
    {
        "id": 2236,
        "name": "福田",
        "father": 323,
        "key": "f",
        "abbreviation": "ft",
        "pinyin": "futian",

        "postfix": "区"
    },
    {
        "id": 2237,
        "name": "南山",
        "father": 323,
        "key": "n",
        "abbreviation": "ns",
        "pinyin": "nanshan",

        "postfix": "区"
    },
    {
        "id": 2238,
        "name": "宝安",
        "father": 323,
        "key": "b",
        "abbreviation": "ba",
        "pinyin": "baoan",

        "postfix": "区"
    },
    {
        "id": 2239,
        "name": "龙岗",
        "father": 323,
        "key": "l",
        "abbreviation": "lg",
        "pinyin": "longgang",

        "postfix": "区"
    },
    {
        "id": 2240,
        "name": "盐田",
        "father": 323,
        "key": "y",
        "abbreviation": "yt",
        "pinyin": "yantian",

        "postfix": "区"
    },
    {
        "id": 2241,
        "name": "香洲",
        "father": 324,
        "key": "x",
        "abbreviation": "xz",
        "pinyin": "xiangzhou",

        "postfix": "区"
    },
    {
        "id": 2242,
        "name": "斗门",
        "father": 324,
        "key": "d",
        "abbreviation": "dm",
        "pinyin": "doumen",

        "postfix": "区"
    },
    {
        "id": 2243,
        "name": "金湾",
        "father": 324,
        "key": "j",
        "abbreviation": "jw",
        "pinyin": "jinwan",

        "postfix": "区"
    },
    {
        "id": 2244,
        "name": "龙湖",
        "father": 325,
        "key": "l",
        "abbreviation": "lh",
        "pinyin": "longhu",

        "postfix": "区"
    },
    {
        "id": 2245,
        "name": "金平",
        "father": 325,
        "key": "j",
        "abbreviation": "jp",
        "pinyin": "jinping",

        "postfix": "区"
    },
    {
        "id": 2246,
        "name": "濠江",
        "father": 325,
        "key": "h",
        "abbreviation": "hj",
        "pinyin": "haojiang",

        "postfix": "区"
    },
    {
        "id": 2247,
        "name": "潮阳",
        "father": 325,
        "key": "c",
        "abbreviation": "cy",
        "pinyin": "chaoyang",

        "postfix": "区"
    },
    {
        "id": 2248,
        "name": "潮南",
        "father": 325,
        "key": "c",
        "abbreviation": "cn",
        "pinyin": "chaonan",

        "postfix": "区"
    },
    {
        "id": 2249,
        "name": "澄海",
        "father": 325,
        "key": "c",
        "abbreviation": "ch",
        "pinyin": "chenghai",

        "postfix": "区"
    },
    {
        "id": 2250,
        "name": "南澳",
        "father": 325,
        "key": "n",
        "abbreviation": "na",
        "pinyin": "nanao",

        "postfix": "县"
    },
    {
        "id": 2251,
        "name": "禅城",
        "father": 326,
        "key": "s",
        "abbreviation": "sc",
        "pinyin": "shancheng",

        "postfix": "区"
    },
    {
        "id": 2252,
        "name": "南海",
        "father": 326,
        "key": "n",
        "abbreviation": "nh",
        "pinyin": "nanhai",

        "postfix": "区"
    },
    {
        "id": 2253,
        "name": "顺德",
        "father": 326,
        "key": "s",
        "abbreviation": "sd",
        "pinyin": "shunde",

        "postfix": "区"
    },
    {
        "id": 2254,
        "name": "三水",
        "father": 326,
        "key": "s",
        "abbreviation": "ss",
        "pinyin": "sanshui",

        "postfix": "区"
    },
    {
        "id": 2255,
        "name": "高明",
        "father": 326,
        "key": "g",
        "abbreviation": "gm",
        "pinyin": "gaoming",

        "postfix": "区"
    },
    {
        "id": 2256,
        "name": "蓬江",
        "father": 327,
        "key": "p",
        "abbreviation": "pj",
        "pinyin": "pengjiang",

        "postfix": "区"
    },
    {
        "id": 2257,
        "name": "江海",
        "father": 327,
        "key": "j",
        "abbreviation": "jh",
        "pinyin": "jianghai",

        "postfix": "区"
    },
    {
        "id": 2258,
        "name": "新会",
        "father": 327,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xinhui",

        "postfix": "区"
    },
    {
        "id": 2259,
        "name": "台山",
        "father": 327,
        "key": "t",
        "abbreviation": "ts",
        "pinyin": "taishan",

        "postfix": "市"
    },
    {
        "id": 2260,
        "name": "开平",
        "father": 327,
        "key": "k",
        "abbreviation": "kp",
        "pinyin": "kaiping",

        "postfix": "市"
    },
    {
        "id": 2261,
        "name": "鹤山",
        "father": 327,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "heshan",

        "postfix": "市"
    },
    {
        "id": 2262,
        "name": "恩平",
        "father": 327,
        "key": "e",
        "abbreviation": "ep",
        "pinyin": "enping",

        "postfix": "市"
    },
    {
        "id": 2263,
        "name": "赤坎",
        "father": 328,
        "key": "c",
        "abbreviation": "ck",
        "pinyin": "chikan",

        "postfix": "区"
    },
    {
        "id": 2264,
        "name": "霞山",
        "father": 328,
        "key": "x",
        "abbreviation": "xs",
        "pinyin": "xiashan",

        "postfix": "区"
    },
    {
        "id": 2265,
        "name": "坡头",
        "father": 328,
        "key": "p",
        "abbreviation": "pt",
        "pinyin": "potou",

        "postfix": "区"
    },
    {
        "id": 2266,
        "name": "麻章",
        "father": 328,
        "key": "m",
        "abbreviation": "mz",
        "pinyin": "mazhang",

        "postfix": "区"
    },
    {
        "id": 2267,
        "name": "遂溪",
        "father": 328,
        "key": "s",
        "abbreviation": "sx",
        "pinyin": "suixi",

        "postfix": "县"
    },
    {
        "id": 2268,
        "name": "徐闻",
        "father": 328,
        "key": "x",
        "abbreviation": "xw",
        "pinyin": "xuwen",

        "postfix": "县"
    },
    {
        "id": 2269,
        "name": "廉江",
        "father": 328,
        "key": "l",
        "abbreviation": "lj",
        "pinyin": "lianjiang",

        "postfix": "市"
    },
    {
        "id": 2270,
        "name": "雷州",
        "father": 328,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "leizhou",

        "postfix": "市"
    },
    {
        "id": 2271,
        "name": "吴川",
        "father": 328,
        "key": "w",
        "abbreviation": "wc",
        "pinyin": "wuchuan",

        "postfix": "市"
    },
    {
        "id": 2272,
        "name": "茂南",
        "father": 329,
        "key": "m",
        "abbreviation": "mn",
        "pinyin": "maonan",

        "postfix": "区"
    },
    {
        "id": 2274,
        "name": "电白",
        "father": 329,
        "key": "d",
        "abbreviation": "db",
        "pinyin": "dianbai",

        "postfix": "区"
    },
    {
        "id": 2275,
        "name": "高州",
        "father": 329,
        "key": "g",
        "abbreviation": "gz",
        "pinyin": "gaozhou",

        "postfix": "市"
    },
    {
        "id": 2276,
        "name": "化州",
        "father": 329,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "huazhou",

        "postfix": "市"
    },
    {
        "id": 2277,
        "name": "信宜",
        "father": 329,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xinyi",

        "postfix": "市"
    },
    {
        "id": 2278,
        "name": "端州",
        "father": 330,
        "key": "d",
        "abbreviation": "dz",
        "pinyin": "duanzhou",

        "postfix": "区"
    },
    {
        "id": 2279,
        "name": "鼎湖",
        "father": 330,
        "key": "d",
        "abbreviation": "dh",
        "pinyin": "dinghu",

        "postfix": "区"
    },
    {
        "id": 2280,
        "name": "广宁",
        "father": 330,
        "key": "g",
        "abbreviation": "gn",
        "pinyin": "guangning",

        "postfix": "县"
    },
    {
        "id": 2281,
        "name": "怀集",
        "father": 330,
        "key": "h",
        "abbreviation": "hj",
        "pinyin": "huaiji",

        "postfix": "县"
    },
    {
        "id": 2282,
        "name": "封开",
        "father": 330,
        "key": "f",
        "abbreviation": "fk",
        "pinyin": "fengkai",

        "postfix": "县"
    },
    {
        "id": 2283,
        "name": "德庆",
        "father": 330,
        "key": "d",
        "abbreviation": "dq",
        "pinyin": "deqing",

        "postfix": "县"
    },
    {
        "id": 2284,
        "name": "高要",
        "father": 330,
        "key": "g",
        "abbreviation": "gy",
        "pinyin": "gaoyao",

        "postfix": "区"
    },
    {
        "id": 2285,
        "name": "四会",
        "father": 330,
        "key": "s",
        "abbreviation": "sh",
        "pinyin": "sihui",

        "postfix": "市"
    },
    {
        "id": 2286,
        "name": "惠城",
        "father": 331,
        "key": "h",
        "abbreviation": "hc",
        "pinyin": "huicheng",

        "postfix": "区"
    },
    {
        "id": 2287,
        "name": "惠阳",
        "father": 331,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "huiyang",

        "postfix": "区"
    },
    {
        "id": 2288,
        "name": "博罗",
        "father": 331,
        "key": "b",
        "abbreviation": "bl",
        "pinyin": "boluo",

        "postfix": "县"
    },
    {
        "id": 2289,
        "name": "惠东",
        "father": 331,
        "key": "h",
        "abbreviation": "hd",
        "pinyin": "huidong",

        "postfix": "县"
    },
    {
        "id": 2290,
        "name": "龙门",
        "father": 331,
        "key": "l",
        "abbreviation": "lm",
        "pinyin": "longmen",

        "postfix": "县"
    },
    {
        "id": 2291,
        "name": "梅江",
        "father": 332,
        "key": "m",
        "abbreviation": "mj",
        "pinyin": "meijiang",

        "postfix": "区"
    },
    {
        "id": 2292,
        "name": "梅县",
        "father": 332,
        "key": "m",
        "abbreviation": "mx",
        "pinyin": "meixian",

        "postfix": "区"
    },
    {
        "id": 2293,
        "name": "大埔",
        "father": 332,
        "key": "d",
        "abbreviation": "dp",
        "pinyin": "dapu",

        "postfix": "县"
    },
    {
        "id": 2294,
        "name": "丰顺",
        "father": 332,
        "key": "f",
        "abbreviation": "fs",
        "pinyin": "fengshun",

        "postfix": "县"
    },
    {
        "id": 2295,
        "name": "五华",
        "father": 332,
        "key": "w",
        "abbreviation": "wh",
        "pinyin": "wuhua",

        "postfix": "县"
    },
    {
        "id": 2296,
        "name": "平远",
        "father": 332,
        "key": "p",
        "abbreviation": "py",
        "pinyin": "pingyuan",

        "postfix": "县"
    },
    {
        "id": 2297,
        "name": "蕉岭",
        "father": 332,
        "key": "j",
        "abbreviation": "jl",
        "pinyin": "jiaoling",

        "postfix": "县"
    },
    {
        "id": 2298,
        "name": "兴宁",
        "father": 332,
        "key": "x",
        "abbreviation": "xn",
        "pinyin": "xingning",

        "postfix": "市"
    },
    {
        "id": 2299,
        "name": "城区",
        "father": 333,
        "key": "c",
        "abbreviation": "cq",
        "pinyin": "chengqu",

        "postfix": "区"
    },
    {
        "id": 2300,
        "name": "海丰",
        "father": 333,
        "key": "h",
        "abbreviation": "hf",
        "pinyin": "haifeng",

        "postfix": "县"
    },
    {
        "id": 2301,
        "name": "陆河",
        "father": 333,
        "key": "l",
        "abbreviation": "lh",
        "pinyin": "luhe",

        "postfix": "县"
    },
    {
        "id": 2302,
        "name": "陆丰",
        "father": 333,
        "key": "l",
        "abbreviation": "lf",
        "pinyin": "lufeng",

        "postfix": "市"
    },
    {
        "id": 2303,
        "name": "源城",
        "father": 334,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yuancheng",

        "postfix": "区"
    },
    {
        "id": 2304,
        "name": "紫金",
        "father": 334,
        "key": "z",
        "abbreviation": "zj",
        "pinyin": "zijin",

        "postfix": "县"
    },
    {
        "id": 2305,
        "name": "龙川",
        "father": 334,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "longchuan",

        "postfix": "县"
    },
    {
        "id": 2306,
        "name": "连平",
        "father": 334,
        "key": "l",
        "abbreviation": "lp",
        "pinyin": "lianping",

        "postfix": "县"
    },
    {
        "id": 2307,
        "name": "和平",
        "father": 334,
        "key": "h",
        "abbreviation": "hp",
        "pinyin": "heping",

        "postfix": "县"
    },
    {
        "id": 2308,
        "name": "东源",
        "father": 334,
        "key": "d",
        "abbreviation": "dy",
        "pinyin": "dongyuan",

        "postfix": "县"
    },
    {
        "id": 2309,
        "name": "江城",
        "father": 335,
        "key": "j",
        "abbreviation": "jc",
        "pinyin": "jiangcheng",

        "postfix": "区"
    },
    {
        "id": 2310,
        "name": "阳西",
        "father": 335,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yangxi",

        "postfix": "县"
    },
    {
        "id": 2311,
        "name": "阳东",
        "father": 335,
        "key": "y",
        "abbreviation": "yd",
        "pinyin": "yangdong",

        "postfix": "区"
    },
    {
        "id": 2312,
        "name": "阳春",
        "father": 335,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yangchun",

        "postfix": "市"
    },
    {
        "id": 2313,
        "name": "清城",
        "father": 336,
        "key": "q",
        "abbreviation": "qc",
        "pinyin": "qingcheng",

        "postfix": "区"
    },
    {
        "id": 2314,
        "name": "佛冈",
        "father": 336,
        "key": "f",
        "abbreviation": "fg",
        "pinyin": "fogang",

        "postfix": "县"
    },
    {
        "id": 2315,
        "name": "阳山",
        "father": 336,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yangshan",

        "postfix": "县"
    },
    {
        "id": 2316,
        "name": "连山",
        "father": 336,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lianshan",
        "": "壮族瑶族",
        "postfix": "自治县"
    },
    {
        "id": 2317,
        "name": "连南",
        "father": 336,
        "key": "l",
        "abbreviation": "ln",
        "pinyin": "liannan",
        "": "瑶族",
        "postfix": "自治县"
    },
    {
        "id": 2318,
        "name": "清新",
        "father": 336,
        "key": "q",
        "abbreviation": "qx",
        "pinyin": "qingxin",

        "postfix": "县"
    },
    {
        "id": 2319,
        "name": "英德",
        "father": 336,
        "key": "y",
        "abbreviation": "yd",
        "pinyin": "yingde",

        "postfix": "市"
    },
    {
        "id": 2320,
        "name": "连州",
        "father": 336,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "lianzhou",

        "postfix": "市"
    },
    {
        "id": 2321,
        "name": "湘桥",
        "father": 339,
        "key": "x",
        "abbreviation": "xq",
        "pinyin": "xiangqiao",

        "postfix": "区"
    },
    {
        "id": 2322,
        "name": "潮安",
        "father": 339,
        "key": "c",
        "abbreviation": "ca",
        "pinyin": "chaoan",

        "postfix": "区"
    },
    {
        "id": 2323,
        "name": "饶平",
        "father": 339,
        "key": "r",
        "abbreviation": "rp",
        "pinyin": "raoping",

        "postfix": "县"
    },
    {
        "id": 2324,
        "name": "榕城",
        "father": 340,
        "key": "r",
        "abbreviation": "rc",
        "pinyin": "rongcheng",

        "postfix": "区"
    },
    {
        "id": 2325,
        "name": "揭东",
        "father": 340,
        "key": "j",
        "abbreviation": "jd",
        "pinyin": "jiedong",

        "postfix": "县"
    },
    {
        "id": 2326,
        "name": "揭西",
        "father": 340,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jiexi",

        "postfix": "县"
    },
    {
        "id": 2327,
        "name": "惠来",
        "father": 340,
        "key": "h",
        "abbreviation": "hl",
        "pinyin": "huilai",

        "postfix": "县"
    },
    {
        "id": 2328,
        "name": "普宁",
        "father": 340,
        "key": "p",
        "abbreviation": "pn",
        "pinyin": "puning",

        "postfix": "市"
    },
    {
        "id": 2329,
        "name": "云城",
        "father": 341,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yuncheng",

        "postfix": "区"
    },
    {
        "id": 2330,
        "name": "新兴",
        "father": 341,
        "key": "x",
        "abbreviation": "xx",
        "pinyin": "xinxing",

        "postfix": "县"
    },
    {
        "id": 2331,
        "name": "郁南",
        "father": 341,
        "key": "y",
        "abbreviation": "yn",
        "pinyin": "yunan",

        "postfix": "县"
    },
    {
        "id": 2332,
        "name": "云安",
        "father": 341,
        "key": "y",
        "abbreviation": "ya",
        "pinyin": "yunan",

        "postfix": "区"
    },
    {
        "id": 2333,
        "name": "罗定",
        "father": 341,
        "key": "l",
        "abbreviation": "ld",
        "pinyin": "luoding",

        "postfix": "市"
    },
    {
        "id": 2334,
        "name": "兴宁",
        "father": 342,
        "key": "x",
        "abbreviation": "xn",
        "pinyin": "xingning",

        "postfix": "区"
    },
    {
        "id": 2335,
        "name": "青秀",
        "father": 342,
        "key": "q",
        "abbreviation": "qx",
        "pinyin": "qingxiu",

        "postfix": "区"
    },
    {
        "id": 2336,
        "name": "江南",
        "father": 342,
        "key": "j",
        "abbreviation": "jn",
        "pinyin": "jiangnan",

        "postfix": "区"
    },
    {
        "id": 2337,
        "name": "西乡塘",
        "father": 342,
        "key": "x",
        "abbreviation": "xxt",
        "pinyin": "xixiangtang",

        "postfix": "区"
    },
    {
        "id": 2338,
        "name": "良庆",
        "father": 342,
        "key": "l",
        "abbreviation": "lq",
        "pinyin": "liangqing",

        "postfix": "区"
    },
    {
        "id": 2339,
        "name": "邕宁",
        "father": 342,
        "key": "y",
        "abbreviation": "yn",
        "pinyin": "yongning",

        "postfix": "区"
    },
    {
        "id": 2340,
        "name": "武鸣",
        "father": 342,
        "key": "w",
        "abbreviation": "wm",
        "pinyin": "wuming",

        "postfix": "区"
    },
    {
        "id": 2341,
        "name": "隆安",
        "father": 342,
        "key": "l",
        "abbreviation": "la",
        "pinyin": "longan",

        "postfix": "县"
    },
    {
        "id": 2342,
        "name": "马山",
        "father": 342,
        "key": "m",
        "abbreviation": "ms",
        "pinyin": "mashan",

        "postfix": "县"
    },
    {
        "id": 2343,
        "name": "上林",
        "father": 342,
        "key": "s",
        "abbreviation": "sl",
        "pinyin": "shanglin",

        "postfix": "县"
    },
    {
        "id": 2344,
        "name": "宾阳",
        "father": 342,
        "key": "b",
        "abbreviation": "by",
        "pinyin": "binyang",

        "postfix": "县"
    },
    {
        "id": 2345,
        "name": "横县",
        "father": 342,
        "key": "h",
        "abbreviation": "hx",
        "pinyin": "hengxian",

        "postfix": ""
    },
    {
        "id": 2346,
        "name": "城中",
        "father": 343,
        "key": "c",
        "abbreviation": "cz",
        "pinyin": "chengzhong",

        "postfix": "区"
    },
    {
        "id": 2347,
        "name": "鱼峰",
        "father": 343,
        "key": "y",
        "abbreviation": "yf",
        "pinyin": "yufeng",

        "postfix": "区"
    },
    {
        "id": 2348,
        "name": "柳南",
        "father": 343,
        "key": "l",
        "abbreviation": "ln",
        "pinyin": "liunan",

        "postfix": "区"
    },
    {
        "id": 2349,
        "name": "柳北",
        "father": 343,
        "key": "l",
        "abbreviation": "lb",
        "pinyin": "liubei",

        "postfix": "区"
    },
    {
        "id": 2350,
        "name": "柳江",
        "father": 343,
        "key": "l",
        "abbreviation": "lj",
        "pinyin": "liujiang",

        "postfix": "区"
    },
    {
        "id": 2351,
        "name": "柳城",
        "father": 343,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "liucheng",

        "postfix": "县"
    },
    {
        "id": 2352,
        "name": "鹿寨",
        "father": 343,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "luzhai",

        "postfix": "县"
    },
    {
        "id": 2353,
        "name": "融安",
        "father": 343,
        "key": "r",
        "abbreviation": "ra",
        "pinyin": "rongan",

        "postfix": "县"
    },
    {
        "id": 2354,
        "name": "融水",
        "father": 343,
        "key": "r",
        "abbreviation": "rs",
        "pinyin": "rongshui",
        "": "苗族",
        "postfix": "自治县"
    },
    {
        "id": 2355,
        "name": "三江",
        "father": 343,
        "key": "s",
        "abbreviation": "sj",
        "pinyin": "sanjiang",
        "": "侗族",
        "postfix": "自治县"
    },
    {
        "id": 2356,
        "name": "秀峰",
        "father": 344,
        "key": "x",
        "abbreviation": "xf",
        "pinyin": "xiufeng",

        "postfix": "区"
    },
    {
        "id": 2357,
        "name": "叠彩",
        "father": 344,
        "key": "d",
        "abbreviation": "dc",
        "pinyin": "diecai",

        "postfix": "区"
    },
    {
        "id": 2358,
        "name": "象山",
        "father": 344,
        "key": "x",
        "abbreviation": "xs",
        "pinyin": "xiangshan",

        "postfix": "区"
    },
    {
        "id": 2359,
        "name": "七星",
        "father": 344,
        "key": "q",
        "abbreviation": "qx",
        "pinyin": "qixing",

        "postfix": "区"
    },
    {
        "id": 2360,
        "name": "雁山",
        "father": 344,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yanshan",

        "postfix": "区"
    },
    {
        "id": 2361,
        "name": "阳朔",
        "father": 344,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yangshuo",

        "postfix": "县"
    },
    {
        "id": 2362,
        "name": "临桂",
        "father": 344,
        "key": "l",
        "abbreviation": "lg",
        "pinyin": "lingui",

        "postfix": "区"
    },
    {
        "id": 2363,
        "name": "灵川",
        "father": 344,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "lingchuan",

        "postfix": "县"
    },
    {
        "id": 2364,
        "name": "全州",
        "father": 344,
        "key": "q",
        "abbreviation": "qz",
        "pinyin": "quanzhou",

        "postfix": "县"
    },
    {
        "id": 2365,
        "name": "兴安",
        "father": 344,
        "key": "x",
        "abbreviation": "xa",
        "pinyin": "xingan",

        "postfix": "县"
    },
    {
        "id": 2366,
        "name": "永福",
        "father": 344,
        "key": "y",
        "abbreviation": "yf",
        "pinyin": "yongfu",

        "postfix": "县"
    },
    {
        "id": 2367,
        "name": "灌阳",
        "father": 344,
        "key": "g",
        "abbreviation": "gy",
        "pinyin": "guanyang",

        "postfix": "县"
    },
    {
        "id": 2368,
        "name": "龙胜",
        "father": 344,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "longsheng",
        "": "各族",
        "postfix": "自治县"
    },
    {
        "id": 2369,
        "name": "资源",
        "father": 344,
        "key": "z",
        "abbreviation": "zy",
        "pinyin": "ziyuan",

        "postfix": "县"
    },
    {
        "id": 2370,
        "name": "平乐",
        "father": 344,
        "key": "p",
        "abbreviation": "pl",
        "pinyin": "pingle",

        "postfix": "县"
    },
    {
        "id": 2371,
        "name": "荔浦",
        "father": 344,
        "key": "l",
        "abbreviation": "lp",
        "pinyin": "lipu",

        "postfix": "市"
    },
    {
        "id": 2372,
        "name": "恭城",
        "father": 344,
        "key": "g",
        "abbreviation": "gc",
        "pinyin": "gongcheng",
        "": "瑶族",
        "postfix": "自治县"
    },
    {
        "id": 2373,
        "name": "龙圩",
        "father": 345,
        "key": "l",
        "abbreviation": "lw",
        "pinyin": "longwei",

        "postfix": "区"
    },
    {
        "id": 2374,
        "name": "万秀",
        "father": 345,
        "key": "w",
        "abbreviation": "wx",
        "pinyin": "wanxiu",

        "postfix": "区"
    },
    {
        "id": 2375,
        "name": "长洲",
        "father": 345,
        "key": "c",
        "abbreviation": "cz",
        "pinyin": "changzhou",

        "postfix": "区"
    },
    {
        "id": 2376,
        "name": "苍梧",
        "father": 345,
        "key": "c",
        "abbreviation": "cw",
        "pinyin": "cangwu",

        "postfix": "县"
    },
    {
        "id": 2377,
        "name": "藤县",
        "father": 345,
        "key": "t",
        "abbreviation": "tx",
        "pinyin": "tengxian",

        "postfix": ""
    },
    {
        "id": 2378,
        "name": "蒙山",
        "father": 345,
        "key": "m",
        "abbreviation": "ms",
        "pinyin": "mengshan",

        "postfix": "县"
    },
    {
        "id": 2379,
        "name": "岑溪",
        "father": 345,
        "key": "c",
        "abbreviation": "cx",
        "pinyin": "cenxi",

        "postfix": "市"
    },
    {
        "id": 2380,
        "name": "海城",
        "father": 346,
        "key": "h",
        "abbreviation": "hc",
        "pinyin": "haicheng",

        "postfix": "区"
    },
    {
        "id": 2381,
        "name": "银海",
        "father": 346,
        "key": "y",
        "abbreviation": "yh",
        "pinyin": "yinhai",

        "postfix": "区"
    },
    {
        "id": 2382,
        "name": "铁山港",
        "father": 346,
        "key": "t",
        "abbreviation": "tsg",
        "pinyin": "tieshangang",

        "postfix": "区"
    },
    {
        "id": 2383,
        "name": "合浦",
        "father": 346,
        "key": "h",
        "abbreviation": "hp",
        "pinyin": "hepu",

        "postfix": "县"
    },
    {
        "id": 2384,
        "name": "港口",
        "father": 347,
        "key": "g",
        "abbreviation": "gk",
        "pinyin": "gangkou",

        "postfix": "区"
    },
    {
        "id": 2385,
        "name": "防城",
        "father": 347,
        "key": "f",
        "abbreviation": "fc",
        "pinyin": "fangcheng",

        "postfix": "区"
    },
    {
        "id": 2386,
        "name": "上思",
        "father": 347,
        "key": "s",
        "abbreviation": "ss",
        "pinyin": "shangsi",

        "postfix": "县"
    },
    {
        "id": 2387,
        "name": "东兴",
        "father": 347,
        "key": "d",
        "abbreviation": "dx",
        "pinyin": "dongxing",

        "postfix": "市"
    },
    {
        "id": 2388,
        "name": "钦南",
        "father": 348,
        "key": "q",
        "abbreviation": "qn",
        "pinyin": "qinnan",

        "postfix": "区"
    },
    {
        "id": 2389,
        "name": "钦北",
        "father": 348,
        "key": "q",
        "abbreviation": "qb",
        "pinyin": "qinbei",

        "postfix": "区"
    },
    {
        "id": 2390,
        "name": "灵山",
        "father": 348,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lingshan",

        "postfix": "县"
    },
    {
        "id": 2391,
        "name": "浦北",
        "father": 348,
        "key": "p",
        "abbreviation": "pb",
        "pinyin": "pubei",

        "postfix": "县"
    },
    {
        "id": 2392,
        "name": "港北",
        "father": 349,
        "key": "g",
        "abbreviation": "gb",
        "pinyin": "gangbei",

        "postfix": "区"
    },
    {
        "id": 2393,
        "name": "港南",
        "father": 349,
        "key": "g",
        "abbreviation": "gn",
        "pinyin": "gangnan",

        "postfix": "区"
    },
    {
        "id": 2394,
        "name": "覃塘",
        "father": 349,
        "key": "t",
        "abbreviation": "tt",
        "pinyin": "tantang",

        "postfix": "区"
    },
    {
        "id": 2395,
        "name": "桂平",
        "father": 349,
        "key": "g",
        "abbreviation": "gp",
        "pinyin": "guiping",

        "postfix": "市"
    },
    {
        "id": 2396,
        "name": "平南",
        "father": 349,
        "key": "p",
        "abbreviation": "pn",
        "pinyin": "pingnan",

        "postfix": "县"
    },
    {
        "id": 2397,
        "name": "玉州",
        "father": 350,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yuzhou",

        "postfix": "区"
    },
    {
        "id": 2398,
        "name": "容县",
        "father": 350,
        "key": "r",
        "abbreviation": "rx",
        "pinyin": "rongxian",

        "postfix": ""
    },
    {
        "id": 2399,
        "name": "陆川",
        "father": 350,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "luchuan",

        "postfix": "县"
    },
    {
        "id": 2400,
        "name": "博白",
        "father": 350,
        "key": "b",
        "abbreviation": "bb",
        "pinyin": "bobai",

        "postfix": "县"
    },
    {
        "id": 2401,
        "name": "兴业",
        "father": 350,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xingye",

        "postfix": "县"
    },
    {
        "id": 2402,
        "name": "北流",
        "father": 350,
        "key": "b",
        "abbreviation": "bl",
        "pinyin": "beiliu",

        "postfix": "市"
    },
    {
        "id": 2403,
        "name": "右江",
        "father": 351,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "youjiang",

        "postfix": "区"
    },
    {
        "id": 2404,
        "name": "田阳",
        "father": 351,
        "key": "t",
        "abbreviation": "ty",
        "pinyin": "tianyang",

        "postfix": "县"
    },
    {
        "id": 2405,
        "name": "田东",
        "father": 351,
        "key": "t",
        "abbreviation": "td",
        "pinyin": "tiandong",

        "postfix": "县"
    },
    {
        "id": 2406,
        "name": "平果",
        "father": 351,
        "key": "p",
        "abbreviation": "pg",
        "pinyin": "pingguo",

        "postfix": "县"
    },
    {
        "id": 2407,
        "name": "德保",
        "father": 351,
        "key": "d",
        "abbreviation": "db",
        "pinyin": "debao",

        "postfix": "县"
    },
    {
        "id": 2408,
        "name": "靖西",
        "father": 351,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jingxi",

        "postfix": "市"
    },
    {
        "id": 2409,
        "name": "那坡",
        "father": 351,
        "key": "n",
        "abbreviation": "np",
        "pinyin": "neipo",

        "postfix": "县"
    },
    {
        "id": 2410,
        "name": "凌云",
        "father": 351,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "lingyun",

        "postfix": "县"
    },
    {
        "id": 2411,
        "name": "乐业",
        "father": 351,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "leye",

        "postfix": "县"
    },
    {
        "id": 2412,
        "name": "田林",
        "father": 351,
        "key": "t",
        "abbreviation": "tl",
        "pinyin": "tianlin",

        "postfix": "县"
    },
    {
        "id": 2413,
        "name": "西林",
        "father": 351,
        "key": "x",
        "abbreviation": "xl",
        "pinyin": "xilin",

        "postfix": "县"
    },
    {
        "id": 2414,
        "name": "隆林",
        "father": 351,
        "key": "l",
        "abbreviation": "ll",
        "pinyin": "longlin",
        "": "各族",
        "postfix": "自治县"
    },
    {
        "id": 2415,
        "name": "八步",
        "father": 352,
        "key": "b",
        "abbreviation": "bb",
        "pinyin": "babu",

        "postfix": "区"
    },
    {
        "id": 2416,
        "name": "昭平",
        "father": 352,
        "key": "z",
        "abbreviation": "zp",
        "pinyin": "zhaoping",

        "postfix": "县"
    },
    {
        "id": 2417,
        "name": "钟山",
        "father": 352,
        "key": "z",
        "abbreviation": "zs",
        "pinyin": "zhongshan",

        "postfix": "县"
    },
    {
        "id": 2418,
        "name": "富川",
        "father": 352,
        "key": "f",
        "abbreviation": "fc",
        "pinyin": "fuchuan",
        "": "瑶族",
        "postfix": "自治县"
    },
    {
        "id": 2419,
        "name": "金城江",
        "father": 353,
        "key": "j",
        "abbreviation": "jcj",
        "pinyin": "jinchengjiang",

        "postfix": "区"
    },
    {
        "id": 2420,
        "name": "南丹",
        "father": 353,
        "key": "n",
        "abbreviation": "nd",
        "pinyin": "nandan",

        "postfix": "县"
    },
    {
        "id": 2421,
        "name": "天峨",
        "father": 353,
        "key": "t",
        "abbreviation": "te",
        "pinyin": "tiane",

        "postfix": "县"
    },
    {
        "id": 2422,
        "name": "凤山",
        "father": 353,
        "key": "f",
        "abbreviation": "fs",
        "pinyin": "fengshan",

        "postfix": "县"
    },
    {
        "id": 2423,
        "name": "东兰",
        "father": 353,
        "key": "d",
        "abbreviation": "dl",
        "pinyin": "donglan",

        "postfix": "县"
    },
    {
        "id": 2424,
        "name": "罗城",
        "father": 353,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "luocheng",
        "": "仫佬族",
        "postfix": "自治县"
    },
    {
        "id": 2425,
        "name": "环江",
        "father": 353,
        "key": "h",
        "abbreviation": "hj",
        "pinyin": "huanjiang",
        "": "毛南族",
        "postfix": "自治县"
    },
    {
        "id": 2426,
        "name": "巴马",
        "father": 353,
        "key": "b",
        "abbreviation": "bm",
        "pinyin": "bama",
        "": "瑶族",
        "postfix": "自治县"
    },
    {
        "id": 2427,
        "name": "都安",
        "father": 353,
        "key": "d",
        "abbreviation": "da",
        "pinyin": "duan",
        "": "瑶族",
        "postfix": "自治县"
    },
    {
        "id": 2428,
        "name": "大化",
        "father": 353,
        "key": "d",
        "abbreviation": "dh",
        "pinyin": "dahua",
        "": "瑶族",
        "postfix": "自治县"
    },
    {
        "id": 2429,
        "name": "宜州",
        "father": 353,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yizhou",

        "postfix": "区"
    },
    {
        "id": 2430,
        "name": "兴宾",
        "father": 354,
        "key": "x",
        "abbreviation": "xb",
        "pinyin": "xingbin",

        "postfix": "区"
    },
    {
        "id": 2431,
        "name": "忻城",
        "father": 354,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xincheng",

        "postfix": "县"
    },
    {
        "id": 2432,
        "name": "象州",
        "father": 354,
        "key": "x",
        "abbreviation": "xz",
        "pinyin": "xiangzhou",

        "postfix": "县"
    },
    {
        "id": 2433,
        "name": "武宣",
        "father": 354,
        "key": "w",
        "abbreviation": "wx",
        "pinyin": "wuxuan",

        "postfix": "县"
    },
    {
        "id": 2434,
        "name": "金秀",
        "father": 354,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jinxiu",
        "": "瑶族",
        "postfix": "自治县"
    },
    {
        "id": 2435,
        "name": "合山",
        "father": 354,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "heshan",

        "postfix": "市"
    },
    {
        "id": 2436,
        "name": "江州",
        "father": 355,
        "key": "j",
        "abbreviation": "jz",
        "pinyin": "jiangzhou",

        "postfix": "区"
    },
    {
        "id": 2437,
        "name": "扶绥",
        "father": 355,
        "key": "f",
        "abbreviation": "fs",
        "pinyin": "fusui",

        "postfix": "县"
    },
    {
        "id": 2438,
        "name": "宁明",
        "father": 355,
        "key": "n",
        "abbreviation": "nm",
        "pinyin": "ningming",

        "postfix": "县"
    },
    {
        "id": 2439,
        "name": "龙州",
        "father": 355,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "longzhou",

        "postfix": "县"
    },
    {
        "id": 2440,
        "name": "大新",
        "father": 355,
        "key": "d",
        "abbreviation": "dx",
        "pinyin": "daxin",

        "postfix": "县"
    },
    {
        "id": 2441,
        "name": "天等",
        "father": 355,
        "key": "t",
        "abbreviation": "td",
        "pinyin": "tiandeng",

        "postfix": "县"
    },
    {
        "id": 2442,
        "name": "凭祥",
        "father": 355,
        "key": "p",
        "abbreviation": "px",
        "pinyin": "pingxiang",

        "postfix": "市"
    },
    {
        "id": 2443,
        "name": "秀英",
        "father": 356,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xiuying",

        "postfix": "区"
    },
    {
        "id": 2444,
        "name": "龙华",
        "father": 356,
        "key": "l",
        "abbreviation": "lh",
        "pinyin": "longhua",

        "postfix": "区"
    },
    {
        "id": 2445,
        "name": "琼山",
        "father": 356,
        "key": "q",
        "abbreviation": "qs",
        "pinyin": "qiongshan",

        "postfix": "区"
    },
    {
        "id": 2446,
        "name": "美兰",
        "father": 356,
        "key": "m",
        "abbreviation": "ml",
        "pinyin": "meilan",

        "postfix": "区"
    },
    {
        "id": 2447,
        "name": "锦江",
        "father": 375,
        "key": "j",
        "abbreviation": "jj",
        "pinyin": "jinjiang",

        "postfix": "区"
    },
    {
        "id": 2448,
        "name": "青羊",
        "father": 375,
        "key": "q",
        "abbreviation": "qy",
        "pinyin": "qingyang",

        "postfix": "区"
    },
    {
        "id": 2449,
        "name": "金牛",
        "father": 375,
        "key": "j",
        "abbreviation": "jn",
        "pinyin": "jinniu",

        "postfix": "区"
    },
    {
        "id": 2450,
        "name": "武侯",
        "father": 375,
        "key": "w",
        "abbreviation": "wh",
        "pinyin": "wuhou",

        "postfix": "区"
    },
    {
        "id": 2451,
        "name": "成华",
        "father": 375,
        "key": "c",
        "abbreviation": "ch",
        "pinyin": "chenghua",

        "postfix": "区"
    },
    {
        "id": 2452,
        "name": "龙泉驿",
        "father": 375,
        "key": "l",
        "abbreviation": "lqy",
        "pinyin": "longquanyi",

        "postfix": "区"
    },
    {
        "id": 2453,
        "name": "青白江",
        "father": 375,
        "key": "q",
        "abbreviation": "qbj",
        "pinyin": "qingbaijiang",

        "postfix": "区"
    },
    {
        "id": 2454,
        "name": "新都",
        "father": 375,
        "key": "x",
        "abbreviation": "xd",
        "pinyin": "xindu",

        "postfix": "区"
    },
    {
        "id": 2455,
        "name": "温江",
        "father": 375,
        "key": "w",
        "abbreviation": "wj",
        "pinyin": "wenjiang",

        "postfix": "区"
    },
    {
        "id": 2456,
        "name": "金堂",
        "father": 375,
        "key": "j",
        "abbreviation": "jt",
        "pinyin": "jintang",

        "postfix": "县"
    },
    {
        "id": 2457,
        "name": "双流",
        "father": 375,
        "key": "s",
        "abbreviation": "sl",
        "pinyin": "shuangliu",

        "postfix": "区"
    },
    {
        "id": 2458,
        "name": "郫都",
        "father": 375,
        "key": "p",
        "abbreviation": "pd",
        "pinyin": "pidu",

        "postfix": "区"
    },
    {
        "id": 2459,
        "name": "大邑",
        "father": 375,
        "key": "d",
        "abbreviation": "dy",
        "pinyin": "dayi",

        "postfix": "县"
    },
    {
        "id": 2460,
        "name": "蒲江",
        "father": 375,
        "key": "p",
        "abbreviation": "pj",
        "pinyin": "pujiang",

        "postfix": "县"
    },
    {
        "id": 2461,
        "name": "新津",
        "father": 375,
        "key": "x",
        "abbreviation": "xj",
        "pinyin": "xinjin",

        "postfix": "县"
    },
    {
        "id": 2462,
        "name": "都江堰",
        "father": 375,
        "key": "d",
        "abbreviation": "djy",
        "pinyin": "dujiangyan",

        "postfix": "市"
    },
    {
        "id": 2463,
        "name": "彭州",
        "father": 375,
        "key": "p",
        "abbreviation": "pz",
        "pinyin": "pengzhou",

        "postfix": "市"
    },
    {
        "id": 2464,
        "name": "邛崃",
        "father": 375,
        "key": "q",
        "abbreviation": "ql",
        "pinyin": "qionglai",

        "postfix": "市"
    },
    {
        "id": 2465,
        "name": "崇州",
        "father": 375,
        "key": "c",
        "abbreviation": "cz",
        "pinyin": "chongzhou",

        "postfix": "市"
    },
    {
        "id": 2466,
        "name": "自流井",
        "father": 376,
        "key": "z",
        "abbreviation": "zlj",
        "pinyin": "ziliujing",

        "postfix": "区"
    },
    {
        "id": 2467,
        "name": "贡井",
        "father": 376,
        "key": "g",
        "abbreviation": "gj",
        "pinyin": "gongjing",

        "postfix": "区"
    },
    {
        "id": 2468,
        "name": "大安",
        "father": 376,
        "key": "d",
        "abbreviation": "da",
        "pinyin": "daan",

        "postfix": "区"
    },
    {
        "id": 2469,
        "name": "沿滩",
        "father": 376,
        "key": "y",
        "abbreviation": "yt",
        "pinyin": "yantan",

        "postfix": "区"
    },
    {
        "id": 2470,
        "name": "荣县",
        "father": 376,
        "key": "r",
        "abbreviation": "rx",
        "pinyin": "rongxian",

        "postfix": ""
    },
    {
        "id": 2471,
        "name": "富顺",
        "father": 376,
        "key": "f",
        "abbreviation": "fs",
        "pinyin": "fushun",

        "postfix": "县"
    },
    {
        "id": 2472,
        "name": "东区",
        "father": 377,
        "key": "d",
        "abbreviation": "dq",
        "pinyin": "dongqu",

        "postfix": ""
    },
    {
        "id": 2473,
        "name": "西区",
        "father": 377,
        "key": "x",
        "abbreviation": "xq",
        "pinyin": "xiqu",

        "postfix": ""
    },
    {
        "id": 2474,
        "name": "仁和",
        "father": 377,
        "key": "r",
        "abbreviation": "rh",
        "pinyin": "renhe",

        "postfix": "区"
    },
    {
        "id": 2475,
        "name": "米易",
        "father": 377,
        "key": "m",
        "abbreviation": "my",
        "pinyin": "miyi",

        "postfix": "县"
    },
    {
        "id": 2476,
        "name": "盐边",
        "father": 377,
        "key": "y",
        "abbreviation": "yb",
        "pinyin": "yanbian",

        "postfix": "县"
    },
    {
        "id": 2477,
        "name": "江阳",
        "father": 378,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jiangyang",

        "postfix": "区"
    },
    {
        "id": 2478,
        "name": "纳溪",
        "father": 378,
        "key": "n",
        "abbreviation": "nx",
        "pinyin": "naxi",

        "postfix": "区"
    },
    {
        "id": 2479,
        "name": "龙马潭",
        "father": 378,
        "key": "l",
        "abbreviation": "lmt",
        "pinyin": "longmatan",

        "postfix": "区"
    },
    {
        "id": 2480,
        "name": "泸县",
        "father": 378,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "luxian",

        "postfix": ""
    },
    {
        "id": 2481,
        "name": "合江",
        "father": 378,
        "key": "h",
        "abbreviation": "hj",
        "pinyin": "hejiang",

        "postfix": "县"
    },
    {
        "id": 2482,
        "name": "叙永",
        "father": 378,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xuyong",

        "postfix": "县"
    },
    {
        "id": 2483,
        "name": "古蔺",
        "father": 378,
        "key": "g",
        "abbreviation": "gl",
        "pinyin": "gulin",

        "postfix": "县"
    },
    {
        "id": 2484,
        "name": "旌阳",
        "father": 379,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jingyang",

        "postfix": "区"
    },
    {
        "id": 2485,
        "name": "中江",
        "father": 379,
        "key": "z",
        "abbreviation": "zj",
        "pinyin": "zhongjiang",

        "postfix": "县"
    },
    {
        "id": 2486,
        "name": "罗江",
        "father": 379,
        "key": "l",
        "abbreviation": "lj",
        "pinyin": "luojiang",

        "postfix": "区"
    },
    {
        "id": 2487,
        "name": "广汉",
        "father": 379,
        "key": "g",
        "abbreviation": "gh",
        "pinyin": "guanghan",

        "postfix": "市"
    },
    {
        "id": 2488,
        "name": "什邡",
        "father": 379,
        "key": "s",
        "abbreviation": "sf",
        "pinyin": "shenfang",

        "postfix": "市"
    },
    {
        "id": 2489,
        "name": "绵竹",
        "father": 379,
        "key": "m",
        "abbreviation": "mz",
        "pinyin": "mianzhu",

        "postfix": "市"
    },
    {
        "id": 2490,
        "name": "涪城",
        "father": 380,
        "key": "f",
        "abbreviation": "fc",
        "pinyin": "fucheng",

        "postfix": "区"
    },
    {
        "id": 2491,
        "name": "游仙",
        "father": 380,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "youxian",

        "postfix": "区"
    },
    {
        "id": 2492,
        "name": "三台",
        "father": 380,
        "key": "s",
        "abbreviation": "st",
        "pinyin": "santai",

        "postfix": "县"
    },
    {
        "id": 2493,
        "name": "盐亭",
        "father": 380,
        "key": "y",
        "abbreviation": "yt",
        "pinyin": "yanting",

        "postfix": "县"
    },
    {
        "id": 2494,
        "name": "安州",
        "father": 380,
        "key": "a",
        "abbreviation": "az",
        "pinyin": "anzhou",

        "postfix": "区"
    },
    {
        "id": 2495,
        "name": "梓潼",
        "father": 380,
        "key": "z",
        "abbreviation": "zt",
        "pinyin": "zitong",

        "postfix": "县"
    },
    {
        "id": 2496,
        "name": "北川",
        "father": 380,
        "key": "b",
        "abbreviation": "bc",
        "pinyin": "beichuan",
        "": "羌族",
        "postfix": "自治县"
    },
    {
        "id": 2497,
        "name": "平武",
        "father": 380,
        "key": "p",
        "abbreviation": "pw",
        "pinyin": "pingwu",

        "postfix": "县"
    },
    {
        "id": 2498,
        "name": "江油",
        "father": 380,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jiangyou",

        "postfix": "市"
    },
    {
        "id": 2499,
        "name": "利州",
        "father": 381,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "lizhou",

        "postfix": "区"
    },
    {
        "id": 2500,
        "name": "昭化",
        "father": 381,
        "key": "z",
        "abbreviation": "zh",
        "pinyin": "zhaohua",

        "postfix": "区"
    },
    {
        "id": 2501,
        "name": "朝天",
        "father": 381,
        "key": "c",
        "abbreviation": "ct",
        "pinyin": "chaotian",

        "postfix": "区"
    },
    {
        "id": 2502,
        "name": "旺苍",
        "father": 381,
        "key": "w",
        "abbreviation": "wc",
        "pinyin": "wangcang",

        "postfix": "县"
    },
    {
        "id": 2503,
        "name": "青川",
        "father": 381,
        "key": "q",
        "abbreviation": "qc",
        "pinyin": "qingchuan",

        "postfix": "县"
    },
    {
        "id": 2504,
        "name": "剑阁",
        "father": 381,
        "key": "j",
        "abbreviation": "jg",
        "pinyin": "jiange",

        "postfix": "县"
    },
    {
        "id": 2505,
        "name": "苍溪",
        "father": 381,
        "key": "c",
        "abbreviation": "cx",
        "pinyin": "cangxi",

        "postfix": "县"
    },
    {
        "id": 2506,
        "name": "船山",
        "father": 382,
        "key": "c",
        "abbreviation": "cs",
        "pinyin": "chuanshan",

        "postfix": "区"
    },
    {
        "id": 2507,
        "name": "安居",
        "father": 382,
        "key": "a",
        "abbreviation": "aj",
        "pinyin": "anju",

        "postfix": "区"
    },
    {
        "id": 2508,
        "name": "蓬溪",
        "father": 382,
        "key": "p",
        "abbreviation": "px",
        "pinyin": "pengxi",

        "postfix": "县"
    },
    {
        "id": 2509,
        "name": "射洪",
        "father": 382,
        "key": "s",
        "abbreviation": "sh",
        "pinyin": "shehong",

        "postfix": "县"
    },
    {
        "id": 2510,
        "name": "大英",
        "father": 382,
        "key": "d",
        "abbreviation": "dy",
        "pinyin": "daying",

        "postfix": "县"
    },
    {
        "id": 2511,
        "name": "市中",
        "father": 383,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "shizhong",

        "postfix": "区"
    },
    {
        "id": 2512,
        "name": "东兴",
        "father": 383,
        "key": "d",
        "abbreviation": "dx",
        "pinyin": "dongxing",

        "postfix": "区"
    },
    {
        "id": 2513,
        "name": "威远",
        "father": 383,
        "key": "w",
        "abbreviation": "wy",
        "pinyin": "weiyuan",

        "postfix": "县"
    },
    {
        "id": 2514,
        "name": "资中",
        "father": 383,
        "key": "z",
        "abbreviation": "zz",
        "pinyin": "zizhong",

        "postfix": "县"
    },
    {
        "id": 2515,
        "name": "隆昌",
        "father": 383,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "longchang",

        "postfix": "市"
    },
    {
        "id": 2516,
        "name": "市中",
        "father": 384,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "shizhong",

        "postfix": "区"
    },
    {
        "id": 2517,
        "name": "沙湾",
        "father": 384,
        "key": "s",
        "abbreviation": "sw",
        "pinyin": "shawan",

        "postfix": "区"
    },
    {
        "id": 2518,
        "name": "五通桥",
        "father": 384,
        "key": "w",
        "abbreviation": "wtq",
        "pinyin": "wutongqiao",

        "postfix": "区"
    },
    {
        "id": 2519,
        "name": "金口河",
        "father": 384,
        "key": "j",
        "abbreviation": "jkh",
        "pinyin": "jinkouhe",

        "postfix": "区"
    },
    {
        "id": 2520,
        "name": "犍为",
        "father": 384,
        "key": "j",
        "abbreviation": "jw",
        "pinyin": "jianwei",

        "postfix": "县"
    },
    {
        "id": 2521,
        "name": "井研",
        "father": 384,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jingyan",

        "postfix": "县"
    },
    {
        "id": 2522,
        "name": "夹江",
        "father": 384,
        "key": "j",
        "abbreviation": "jj",
        "pinyin": "jiajiang",

        "postfix": "县"
    },
    {
        "id": 2523,
        "name": "沐川",
        "father": 384,
        "key": "m",
        "abbreviation": "mc",
        "pinyin": "muchuan",

        "postfix": "县"
    },
    {
        "id": 2524,
        "name": "峨边",
        "father": 384,
        "key": "e",
        "abbreviation": "eb",
        "pinyin": "ebian",
        "": "彝族",
        "postfix": "自治县"
    },
    {
        "id": 2525,
        "name": "马边",
        "father": 384,
        "key": "m",
        "abbreviation": "mb",
        "pinyin": "mabian",
        "": "彝族",
        "postfix": "自治县"
    },
    {
        "id": 2526,
        "name": "峨眉山",
        "father": 384,
        "key": "e",
        "abbreviation": "ems",
        "pinyin": "emeishan",

        "postfix": "市"
    },
    {
        "id": 2527,
        "name": "顺庆",
        "father": 385,
        "key": "s",
        "abbreviation": "sq",
        "pinyin": "shunqing",

        "postfix": "区"
    },
    {
        "id": 2528,
        "name": "高坪",
        "father": 385,
        "key": "g",
        "abbreviation": "gp",
        "pinyin": "gaoping",

        "postfix": "区"
    },
    {
        "id": 2529,
        "name": "嘉陵",
        "father": 385,
        "key": "j",
        "abbreviation": "jl",
        "pinyin": "jialing",

        "postfix": "区"
    },
    {
        "id": 2530,
        "name": "南部",
        "father": 385,
        "key": "n",
        "abbreviation": "nb",
        "pinyin": "nanbu",

        "postfix": "县"
    },
    {
        "id": 2531,
        "name": "营山",
        "father": 385,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yingshan",

        "postfix": "县"
    },
    {
        "id": 2532,
        "name": "蓬安",
        "father": 385,
        "key": "p",
        "abbreviation": "pa",
        "pinyin": "pengan",

        "postfix": "县"
    },
    {
        "id": 2533,
        "name": "仪陇",
        "father": 385,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yilong",

        "postfix": "县"
    },
    {
        "id": 2534,
        "name": "西充",
        "father": 385,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xichong",

        "postfix": "县"
    },
    {
        "id": 2535,
        "name": "阆中",
        "father": 385,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "langzhong",

        "postfix": "市"
    },
    {
        "id": 2536,
        "name": "东坡",
        "father": 386,
        "key": "d",
        "abbreviation": "dp",
        "pinyin": "dongpo",

        "postfix": "区"
    },
    {
        "id": 2537,
        "name": "仁寿",
        "father": 386,
        "key": "r",
        "abbreviation": "rs",
        "pinyin": "renshou",

        "postfix": "县"
    },
    {
        "id": 2538,
        "name": "彭山",
        "father": 386,
        "key": "p",
        "abbreviation": "ps",
        "pinyin": "pengshan",

        "postfix": "区"
    },
    {
        "id": 2539,
        "name": "洪雅",
        "father": 386,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "hongya",

        "postfix": "县"
    },
    {
        "id": 2540,
        "name": "丹棱",
        "father": 386,
        "key": "d",
        "abbreviation": "dl",
        "pinyin": "danleng",

        "postfix": "县"
    },
    {
        "id": 2541,
        "name": "青神",
        "father": 386,
        "key": "q",
        "abbreviation": "qs",
        "pinyin": "qingshen",

        "postfix": "县"
    },
    {
        "id": 2542,
        "name": "翠屏",
        "father": 387,
        "key": "c",
        "abbreviation": "cp",
        "pinyin": "cuiping",

        "postfix": "区"
    },
    {
        "id": 2543,
        "name": "南溪",
        "father": 387,
        "key": "n",
        "abbreviation": "nx",
        "pinyin": "nanxi",

        "postfix": "区"
    },
    {
        "id": 2544,
        "name": "叙州",
        "father": 387,
        "key": "x",
        "abbreviation": "xz",
        "pinyin": "xuzhou",

        "postfix": "区"
    },
    {
        "id": 2545,
        "name": "江安",
        "father": 387,
        "key": "j",
        "abbreviation": "ja",
        "pinyin": "jiangan",

        "postfix": "县"
    },
    {
        "id": 2546,
        "name": "长宁",
        "father": 387,
        "key": "c",
        "abbreviation": "cn",
        "pinyin": "changning",

        "postfix": "县"
    },
    {
        "id": 2547,
        "name": "高县",
        "father": 387,
        "key": "g",
        "abbreviation": "gx",
        "pinyin": "gaoxian",

        "postfix": ""
    },
    {
        "id": 2548,
        "name": "珙县",
        "father": 387,
        "key": "g",
        "abbreviation": "gx",
        "pinyin": "gongxian",

        "postfix": ""
    },
    {
        "id": 2549,
        "name": "筠连",
        "father": 387,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yunlian",

        "postfix": "县"
    },
    {
        "id": 2550,
        "name": "兴文",
        "father": 387,
        "key": "x",
        "abbreviation": "xw",
        "pinyin": "xingwen",

        "postfix": "县"
    },
    {
        "id": 2551,
        "name": "屏山",
        "father": 387,
        "key": "p",
        "abbreviation": "ps",
        "pinyin": "pingshan",

        "postfix": "县"
    },
    {
        "id": 2552,
        "name": "广安",
        "father": 388,
        "key": "g",
        "abbreviation": "ga",
        "pinyin": "guangan",

        "postfix": "区"
    },
    {
        "id": 2553,
        "name": "岳池",
        "father": 388,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yuechi",

        "postfix": "县"
    },
    {
        "id": 2554,
        "name": "武胜",
        "father": 388,
        "key": "w",
        "abbreviation": "ws",
        "pinyin": "wusheng",

        "postfix": "县"
    },
    {
        "id": 2555,
        "name": "邻水",
        "father": 388,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "linshui",

        "postfix": "县"
    },
    {
        "id": 2556,
        "name": "华蓥",
        "father": 388,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "huaying",

        "postfix": "市"
    },
    {
        "id": 2557,
        "name": "通川",
        "father": 389,
        "key": "t",
        "abbreviation": "tc",
        "pinyin": "tongchuan",

        "postfix": "区"
    },
    {
        "id": 2558,
        "name": "达川",
        "father": 389,
        "key": "d",
        "abbreviation": "dc",
        "pinyin": "dachuan",

        "postfix": "区"
    },
    {
        "id": 2559,
        "name": "宣汉",
        "father": 389,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xuanhan",

        "postfix": "县"
    },
    {
        "id": 2560,
        "name": "开江",
        "father": 389,
        "key": "k",
        "abbreviation": "kj",
        "pinyin": "kaijiang",

        "postfix": "县"
    },
    {
        "id": 2561,
        "name": "大竹",
        "father": 389,
        "key": "d",
        "abbreviation": "dz",
        "pinyin": "dazhu",

        "postfix": "县"
    },
    {
        "id": 2562,
        "name": "渠县",
        "father": 389,
        "key": "q",
        "abbreviation": "qx",
        "pinyin": "quxian",

        "postfix": ""
    },
    {
        "id": 2563,
        "name": "万源",
        "father": 389,
        "key": "w",
        "abbreviation": "wy",
        "pinyin": "wanyuan",

        "postfix": "市"
    },
    {
        "id": 2564,
        "name": "雨城",
        "father": 390,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yucheng",

        "postfix": "区"
    },
    {
        "id": 2565,
        "name": "名山",
        "father": 390,
        "key": "m",
        "abbreviation": "ms",
        "pinyin": "mingshan",

        "postfix": "区"
    },
    {
        "id": 2566,
        "name": "荥经",
        "father": 390,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "yingjing",

        "postfix": "县"
    },
    {
        "id": 2567,
        "name": "汉源",
        "father": 390,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "hanyuan",

        "postfix": "县"
    },
    {
        "id": 2568,
        "name": "石棉",
        "father": 390,
        "key": "s",
        "abbreviation": "sm",
        "pinyin": "shimian",

        "postfix": "县"
    },
    {
        "id": 2569,
        "name": "天全",
        "father": 390,
        "key": "t",
        "abbreviation": "tq",
        "pinyin": "tianquan",

        "postfix": "县"
    },
    {
        "id": 2570,
        "name": "芦山",
        "father": 390,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lushan",

        "postfix": "县"
    },
    {
        "id": 2571,
        "name": "宝兴",
        "father": 390,
        "key": "b",
        "abbreviation": "bx",
        "pinyin": "baoxing",

        "postfix": "县"
    },
    {
        "id": 2572,
        "name": "巴州",
        "father": 391,
        "key": "b",
        "abbreviation": "bz",
        "pinyin": "bazhou",

        "postfix": "区"
    },
    {
        "id": 2573,
        "name": "通江",
        "father": 391,
        "key": "t",
        "abbreviation": "tj",
        "pinyin": "tongjiang",

        "postfix": "县"
    },
    {
        "id": 2574,
        "name": "南江",
        "father": 391,
        "key": "n",
        "abbreviation": "nj",
        "pinyin": "nanjiang",

        "postfix": "县"
    },
    {
        "id": 2575,
        "name": "平昌",
        "father": 391,
        "key": "p",
        "abbreviation": "pc",
        "pinyin": "pingchang",

        "postfix": "县"
    },
    {
        "id": 2576,
        "name": "雁江",
        "father": 392,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "yanjiang",

        "postfix": "区"
    },
    {
        "id": 2577,
        "name": "安岳",
        "father": 392,
        "key": "a",
        "abbreviation": "ay",
        "pinyin": "anyue",

        "postfix": "县"
    },
    {
        "id": 2578,
        "name": "乐至",
        "father": 392,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "lezhi",

        "postfix": "县"
    },
    {
        "id": 2579,
        "name": "简阳",
        "father": 375,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jianyang",

        "postfix": "市"
    },
    {
        "id": 2580,
        "name": "马尔康",
        "father": 393,
        "key": "m",
        "abbreviation": "mek",
        "pinyin": "maerkang",

        "postfix": "市"
    },
    {
        "id": 2581,
        "name": "汶川",
        "father": 393,
        "key": "w",
        "abbreviation": "wc",
        "pinyin": "wenchuan",

        "postfix": "县"
    },
    {
        "id": 2582,
        "name": "理县",
        "father": 393,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "lixian",

        "postfix": ""
    },
    {
        "id": 2583,
        "name": "茂县",
        "father": 393,
        "key": "m",
        "abbreviation": "mx",
        "pinyin": "maoxian",

        "postfix": ""
    },
    {
        "id": 2584,
        "name": "松潘",
        "father": 393,
        "key": "s",
        "abbreviation": "sp",
        "pinyin": "songpan",

        "postfix": "县"
    },
    {
        "id": 2585,
        "name": "九寨沟",
        "father": 393,
        "key": "j",
        "abbreviation": "jzg",
        "pinyin": "jiuzhaigou",

        "postfix": "县"
    },
    {
        "id": 2586,
        "name": "金川",
        "father": 393,
        "key": "j",
        "abbreviation": "jc",
        "pinyin": "jinchuan",

        "postfix": "县"
    },
    {
        "id": 2587,
        "name": "小金",
        "father": 393,
        "key": "x",
        "abbreviation": "xj",
        "pinyin": "xiaojin",

        "postfix": "县"
    },
    {
        "id": 2588,
        "name": "黑水",
        "father": 393,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "heishui",

        "postfix": "县"
    },
    {
        "id": 2589,
        "name": "壤塘",
        "father": 393,
        "key": "r",
        "abbreviation": "rt",
        "pinyin": "rangtang",

        "postfix": "县"
    },
    {
        "id": 2590,
        "name": "阿坝",
        "father": 393,
        "key": "a",
        "abbreviation": "ab",
        "pinyin": "aba",

        "postfix": "县"
    },
    {
        "id": 2591,
        "name": "若尔盖",
        "father": 393,
        "key": "r",
        "abbreviation": "reg",
        "pinyin": "ruoergai",

        "postfix": "县"
    },
    {
        "id": 2592,
        "name": "红原",
        "father": 393,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "hongyuan",

        "postfix": "县"
    },
    {
        "id": 2593,
        "name": "康定",
        "father": 394,
        "key": "k",
        "abbreviation": "kd",
        "pinyin": "kangding",

        "postfix": "市"
    },
    {
        "id": 2594,
        "name": "泸定",
        "father": 394,
        "key": "l",
        "abbreviation": "ld",
        "pinyin": "luding",

        "postfix": "县"
    },
    {
        "id": 2595,
        "name": "丹巴",
        "father": 394,
        "key": "d",
        "abbreviation": "db",
        "pinyin": "danba",

        "postfix": "县"
    },
    {
        "id": 2596,
        "name": "九龙",
        "father": 394,
        "key": "j",
        "abbreviation": "jl",
        "pinyin": "jiulong",

        "postfix": "县"
    },
    {
        "id": 2597,
        "name": "雅江",
        "father": 394,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "yajiang",

        "postfix": "县"
    },
    {
        "id": 2598,
        "name": "道孚",
        "father": 394,
        "key": "d",
        "abbreviation": "df",
        "pinyin": "daofu",

        "postfix": "县"
    },
    {
        "id": 2599,
        "name": "炉霍",
        "father": 394,
        "key": "l",
        "abbreviation": "lh",
        "pinyin": "luhuo",

        "postfix": "县"
    },
    {
        "id": 2600,
        "name": "甘孜",
        "father": 394,
        "key": "g",
        "abbreviation": "gz",
        "pinyin": "ganzi",

        "postfix": "县"
    },
    {
        "id": 2601,
        "name": "新龙",
        "father": 394,
        "key": "x",
        "abbreviation": "xl",
        "pinyin": "xinlong",

        "postfix": "县"
    },
    {
        "id": 2602,
        "name": "德格",
        "father": 394,
        "key": "d",
        "abbreviation": "dg",
        "pinyin": "dege",

        "postfix": "县"
    },
    {
        "id": 2603,
        "name": "白玉",
        "father": 394,
        "key": "b",
        "abbreviation": "by",
        "pinyin": "baiyu",

        "postfix": "县"
    },
    {
        "id": 2604,
        "name": "石渠",
        "father": 394,
        "key": "s",
        "abbreviation": "sq",
        "pinyin": "shiqu",

        "postfix": "县"
    },
    {
        "id": 2605,
        "name": "色达",
        "father": 394,
        "key": "s",
        "abbreviation": "sd",
        "pinyin": "seda",

        "postfix": "县"
    },
    {
        "id": 2606,
        "name": "理塘",
        "father": 394,
        "key": "l",
        "abbreviation": "lt",
        "pinyin": "litang",

        "postfix": "县"
    },
    {
        "id": 2607,
        "name": "巴塘",
        "father": 394,
        "key": "b",
        "abbreviation": "bt",
        "pinyin": "batang",

        "postfix": "县"
    },
    {
        "id": 2608,
        "name": "乡城",
        "father": 394,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xiangcheng",

        "postfix": "县"
    },
    {
        "id": 2609,
        "name": "稻城",
        "father": 394,
        "key": "d",
        "abbreviation": "dc",
        "pinyin": "daocheng",

        "postfix": "县"
    },
    {
        "id": 2610,
        "name": "得荣",
        "father": 394,
        "key": "d",
        "abbreviation": "dr",
        "pinyin": "derong",

        "postfix": "县"
    },
    {
        "id": 2611,
        "name": "西昌",
        "father": 395,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xichang",

        "postfix": "市"
    },
    {
        "id": 2612,
        "name": "木里",
        "father": 395,
        "key": "m",
        "abbreviation": "ml",
        "pinyin": "muli",
        "": "藏族",
        "postfix": "自治县"
    },
    {
        "id": 2613,
        "name": "盐源",
        "father": 395,
        "key": "y",
        "abbreviation": "yy",
        "pinyin": "yanyuan",

        "postfix": "县"
    },
    {
        "id": 2614,
        "name": "德昌",
        "father": 395,
        "key": "d",
        "abbreviation": "dc",
        "pinyin": "dechang",

        "postfix": "县"
    },
    {
        "id": 2615,
        "name": "会理",
        "father": 395,
        "key": "h",
        "abbreviation": "hl",
        "pinyin": "huili",

        "postfix": "县"
    },
    {
        "id": 2616,
        "name": "会东",
        "father": 395,
        "key": "h",
        "abbreviation": "hd",
        "pinyin": "huidong",

        "postfix": "县"
    },
    {
        "id": 2617,
        "name": "宁南",
        "father": 395,
        "key": "n",
        "abbreviation": "nn",
        "pinyin": "ningnan",

        "postfix": "县"
    },
    {
        "id": 2618,
        "name": "普格",
        "father": 395,
        "key": "p",
        "abbreviation": "pg",
        "pinyin": "puge",

        "postfix": "县"
    },
    {
        "id": 2619,
        "name": "布拖",
        "father": 395,
        "key": "b",
        "abbreviation": "bt",
        "pinyin": "butuo",

        "postfix": "县"
    },
    {
        "id": 2620,
        "name": "金阳",
        "father": 395,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jinyang",

        "postfix": "县"
    },
    {
        "id": 2621,
        "name": "昭觉",
        "father": 395,
        "key": "z",
        "abbreviation": "zj",
        "pinyin": "zhaojue",

        "postfix": "县"
    },
    {
        "id": 2622,
        "name": "喜德",
        "father": 395,
        "key": "x",
        "abbreviation": "xd",
        "pinyin": "xide",

        "postfix": "县"
    },
    {
        "id": 2623,
        "name": "冕宁",
        "father": 395,
        "key": "m",
        "abbreviation": "mn",
        "pinyin": "mianning",

        "postfix": "县"
    },
    {
        "id": 2624,
        "name": "越西",
        "father": 395,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yuexi",

        "postfix": "县"
    },
    {
        "id": 2625,
        "name": "甘洛",
        "father": 395,
        "key": "g",
        "abbreviation": "gl",
        "pinyin": "ganluo",

        "postfix": "县"
    },
    {
        "id": 2626,
        "name": "美姑",
        "father": 395,
        "key": "m",
        "abbreviation": "mg",
        "pinyin": "meigu",

        "postfix": "县"
    },
    {
        "id": 2627,
        "name": "雷波",
        "father": 395,
        "key": "l",
        "abbreviation": "lb",
        "pinyin": "leibo",

        "postfix": "县"
    },
    {
        "id": 2628,
        "name": "观山湖",
        "father": 396,
        "key": "g",
        "abbreviation": "gsh",
        "pinyin": "guanshanhu",

        "postfix": "区"
    },
    {
        "id": 2629,
        "name": "南明",
        "father": 396,
        "key": "n",
        "abbreviation": "nm",
        "pinyin": "nanming",

        "postfix": "区"
    },
    {
        "id": 2630,
        "name": "云岩",
        "father": 396,
        "key": "y",
        "abbreviation": "yy",
        "pinyin": "yunyan",

        "postfix": "区"
    },
    {
        "id": 2631,
        "name": "花溪",
        "father": 396,
        "key": "h",
        "abbreviation": "hx",
        "pinyin": "huaxi",

        "postfix": "区"
    },
    {
        "id": 2632,
        "name": "乌当",
        "father": 396,
        "key": "w",
        "abbreviation": "wd",
        "pinyin": "wudang",

        "postfix": "区"
    },
    {
        "id": 2633,
        "name": "白云",
        "father": 396,
        "key": "b",
        "abbreviation": "by",
        "pinyin": "baiyun",

        "postfix": "区"
    },
    {
        "id": 2634,
        "name": "开阳",
        "father": 396,
        "key": "k",
        "abbreviation": "ky",
        "pinyin": "kaiyang",

        "postfix": "县"
    },
    {
        "id": 2635,
        "name": "息烽",
        "father": 396,
        "key": "x",
        "abbreviation": "xf",
        "pinyin": "xifeng",

        "postfix": "县"
    },
    {
        "id": 2636,
        "name": "修文",
        "father": 396,
        "key": "x",
        "abbreviation": "xw",
        "pinyin": "xiuwen",

        "postfix": "县"
    },
    {
        "id": 2637,
        "name": "清镇",
        "father": 396,
        "key": "q",
        "abbreviation": "qz",
        "pinyin": "qingzhen",

        "postfix": "市"
    },
    {
        "id": 2638,
        "name": "钟山",
        "father": 397,
        "key": "z",
        "abbreviation": "zs",
        "pinyin": "zhongshan",

        "postfix": "区"
    },
    {
        "id": 2639,
        "name": "六枝特",
        "father": 397,
        "key": "l",
        "abbreviation": "lzt",
        "pinyin": "liuzhite",

        "postfix": "区"
    },
    {
        "id": 2640,
        "name": "水城",
        "father": 397,
        "key": "s",
        "abbreviation": "sc",
        "pinyin": "shuicheng",

        "postfix": "县"
    },
    {
        "id": 2641,
        "name": "盘州",
        "father": 397,
        "key": "p",
        "abbreviation": "pz",
        "pinyin": "panzhou",

        "postfix": "市"
    },
    {
        "id": 2642,
        "name": "红花岗",
        "father": 398,
        "key": "h",
        "abbreviation": "hhg",
        "pinyin": "honghuagang",

        "postfix": "区"
    },
    {
        "id": 2643,
        "name": "汇川",
        "father": 398,
        "key": "h",
        "abbreviation": "hc",
        "pinyin": "huichuan",

        "postfix": "区"
    },
    {
        "id": 2644,
        "name": "播州",
        "father": 398,
        "key": "b",
        "abbreviation": "bz",
        "pinyin": "bozhou",

        "postfix": "区"
    },
    {
        "id": 2645,
        "name": "桐梓",
        "father": 398,
        "key": "t",
        "abbreviation": "tz",
        "pinyin": "tongzi",

        "postfix": "县"
    },
    {
        "id": 2646,
        "name": "绥阳",
        "father": 398,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "suiyang",

        "postfix": "县"
    },
    {
        "id": 2647,
        "name": "正安",
        "father": 398,
        "key": "z",
        "abbreviation": "za",
        "pinyin": "zhengan",

        "postfix": "县"
    },
    {
        "id": 2648,
        "name": "道真",
        "father": 398,
        "key": "d",
        "abbreviation": "dz",
        "pinyin": "daozhen",
        "": "仡佬族苗族",
        "postfix": "自治县"
    },
    {
        "id": 2649,
        "name": "务川",
        "father": 398,
        "key": "w",
        "abbreviation": "wc",
        "pinyin": "wuchuan",
        "": "仡佬族苗族",
        "postfix": "自治县"
    },
    {
        "id": 2650,
        "name": "凤冈",
        "father": 398,
        "key": "f",
        "abbreviation": "fg",
        "pinyin": "fenggang",

        "postfix": "县"
    },
    {
        "id": 2651,
        "name": "湄潭",
        "father": 398,
        "key": "m",
        "abbreviation": "mt",
        "pinyin": "meitan",

        "postfix": "县"
    },
    {
        "id": 2652,
        "name": "余庆",
        "father": 398,
        "key": "y",
        "abbreviation": "yq",
        "pinyin": "yuqing",

        "postfix": "县"
    },
    {
        "id": 2653,
        "name": "习水",
        "father": 398,
        "key": "x",
        "abbreviation": "xs",
        "pinyin": "xishui",

        "postfix": "县"
    },
    {
        "id": 2654,
        "name": "赤水",
        "father": 398,
        "key": "c",
        "abbreviation": "cs",
        "pinyin": "chishui",

        "postfix": "市"
    },
    {
        "id": 2655,
        "name": "仁怀",
        "father": 398,
        "key": "r",
        "abbreviation": "rh",
        "pinyin": "renhuai",

        "postfix": "市"
    },
    {
        "id": 2656,
        "name": "西秀",
        "father": 399,
        "key": "x",
        "abbreviation": "xx",
        "pinyin": "xixiu",

        "postfix": "区"
    },
    {
        "id": 2657,
        "name": "平坝",
        "father": 399,
        "key": "p",
        "abbreviation": "pb",
        "pinyin": "pingba",

        "postfix": "区"
    },
    {
        "id": 2658,
        "name": "普定",
        "father": 399,
        "key": "p",
        "abbreviation": "pd",
        "pinyin": "puding",

        "postfix": "县"
    },
    {
        "id": 2659,
        "name": "镇宁",
        "father": 399,
        "key": "z",
        "abbreviation": "zn",
        "pinyin": "zhenning",
        "": "布依族苗族",
        "postfix": "自治县"
    },
    {
        "id": 2660,
        "name": "关岭",
        "father": 399,
        "key": "g",
        "abbreviation": "gl",
        "pinyin": "guanling",
        "": "布依族苗族",
        "postfix": "自治县"
    },
    {
        "id": 2661,
        "name": "紫云",
        "father": 399,
        "key": "z",
        "abbreviation": "zy",
        "pinyin": "ziyun",
        "": "苗族布依族",
        "postfix": "自治县"
    },
    {
        "id": 2662,
        "name": "七星关",
        "father": 400,
        "key": "q",
        "abbreviation": "qxg",
        "pinyin": "qixingguan",

        "postfix": "区"
    },
    {
        "id": 2663,
        "name": "大方",
        "father": 400,
        "key": "d",
        "abbreviation": "df",
        "pinyin": "dafang",

        "postfix": "县"
    },
    {
        "id": 2664,
        "name": "黔西",
        "father": 400,
        "key": "q",
        "abbreviation": "qx",
        "pinyin": "qianxi",

        "postfix": "县"
    },
    {
        "id": 2665,
        "name": "金沙",
        "father": 400,
        "key": "j",
        "abbreviation": "js",
        "pinyin": "jinsha",

        "postfix": "县"
    },
    {
        "id": 2666,
        "name": "织金",
        "father": 400,
        "key": "z",
        "abbreviation": "zj",
        "pinyin": "zhijin",

        "postfix": "县"
    },
    {
        "id": 2667,
        "name": "纳雍",
        "father": 400,
        "key": "n",
        "abbreviation": "ny",
        "pinyin": "nayong",

        "postfix": "县"
    },
    {
        "id": 2668,
        "name": "威宁",
        "father": 400,
        "key": "w",
        "abbreviation": "wn",
        "pinyin": "weining",
        "": "彝族回族苗族",
        "postfix": "自治县"
    },
    {
        "id": 2669,
        "name": "赫章",
        "father": 400,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "hezhang",

        "postfix": "县"
    },
    {
        "id": 2670,
        "name": "碧江",
        "father": 401,
        "key": "b",
        "abbreviation": "bj",
        "pinyin": "bijiang",

        "postfix": "区"
    },
    {
        "id": 2671,
        "name": "万山",
        "father": 401,
        "key": "w",
        "abbreviation": "ws",
        "pinyin": "wanshan",

        "postfix": "区"
    },
    {
        "id": 2672,
        "name": "江口",
        "father": 401,
        "key": "j",
        "abbreviation": "jk",
        "pinyin": "jiangkou",

        "postfix": "县"
    },
    {
        "id": 2673,
        "name": "玉屏",
        "father": 401,
        "key": "y",
        "abbreviation": "yp",
        "pinyin": "yuping",
        "": "侗族",
        "postfix": "自治县"
    },
    {
        "id": 2674,
        "name": "石阡",
        "father": 401,
        "key": "s",
        "abbreviation": "sq",
        "pinyin": "shiqian",

        "postfix": "县"
    },
    {
        "id": 2675,
        "name": "思南",
        "father": 401,
        "key": "s",
        "abbreviation": "sn",
        "pinyin": "sinan",

        "postfix": "县"
    },
    {
        "id": 2676,
        "name": "印江",
        "father": 401,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "yinjiang",
        "": "土家族苗族",
        "postfix": "自治县"
    },
    {
        "id": 2677,
        "name": "德江",
        "father": 401,
        "key": "d",
        "abbreviation": "dj",
        "pinyin": "dejiang",

        "postfix": "县"
    },
    {
        "id": 2678,
        "name": "沿河",
        "father": 401,
        "key": "y",
        "abbreviation": "yh",
        "pinyin": "yanhe",
        "": "土家族",
        "postfix": "自治县"
    },
    {
        "id": 2679,
        "name": "松桃",
        "father": 401,
        "key": "s",
        "abbreviation": "st",
        "pinyin": "songtao",
        "": "苗族",
        "postfix": "自治县"
    },
    {
        "id": 2680,
        "name": "兴义",
        "father": 402,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xingyi",

        "postfix": "市"
    },
    {
        "id": 2681,
        "name": "兴仁",
        "father": 402,
        "key": "x",
        "abbreviation": "xr",
        "pinyin": "xingren",

        "postfix": "市"
    },
    {
        "id": 2682,
        "name": "普安",
        "father": 402,
        "key": "p",
        "abbreviation": "pa",
        "pinyin": "puan",

        "postfix": "县"
    },
    {
        "id": 2683,
        "name": "晴隆",
        "father": 402,
        "key": "q",
        "abbreviation": "ql",
        "pinyin": "qinglong",

        "postfix": "县"
    },
    {
        "id": 2684,
        "name": "贞丰",
        "father": 402,
        "key": "z",
        "abbreviation": "zf",
        "pinyin": "zhenfeng",

        "postfix": "县"
    },
    {
        "id": 2685,
        "name": "望谟",
        "father": 402,
        "key": "w",
        "abbreviation": "wm",
        "pinyin": "wangmo",

        "postfix": "县"
    },
    {
        "id": 2686,
        "name": "册亨",
        "father": 402,
        "key": "c",
        "abbreviation": "ch",
        "pinyin": "ceheng",

        "postfix": "县"
    },
    {
        "id": 2687,
        "name": "安龙",
        "father": 402,
        "key": "a",
        "abbreviation": "al",
        "pinyin": "anlong",

        "postfix": "县"
    },
    {
        "id": 2688,
        "name": "凯里",
        "father": 403,
        "key": "k",
        "abbreviation": "kl",
        "pinyin": "kaili",

        "postfix": "市"
    },
    {
        "id": 2689,
        "name": "黄平",
        "father": 403,
        "key": "h",
        "abbreviation": "hp",
        "pinyin": "huangping",

        "postfix": "县"
    },
    {
        "id": 2690,
        "name": "施秉",
        "father": 403,
        "key": "s",
        "abbreviation": "sb",
        "pinyin": "shibing",

        "postfix": "县"
    },
    {
        "id": 2691,
        "name": "三穗",
        "father": 403,
        "key": "s",
        "abbreviation": "ss",
        "pinyin": "sansui",

        "postfix": "县"
    },
    {
        "id": 2692,
        "name": "镇远",
        "father": 403,
        "key": "z",
        "abbreviation": "zy",
        "pinyin": "zhenyuan",

        "postfix": "县"
    },
    {
        "id": 2693,
        "name": "岑巩",
        "father": 403,
        "key": "c",
        "abbreviation": "cg",
        "pinyin": "cengong",

        "postfix": "县"
    },
    {
        "id": 2694,
        "name": "天柱",
        "father": 403,
        "key": "t",
        "abbreviation": "tz",
        "pinyin": "tianzhu",

        "postfix": "县"
    },
    {
        "id": 2695,
        "name": "锦屏",
        "father": 403,
        "key": "j",
        "abbreviation": "jp",
        "pinyin": "jinping",

        "postfix": "县"
    },
    {
        "id": 2696,
        "name": "剑河",
        "father": 403,
        "key": "j",
        "abbreviation": "jh",
        "pinyin": "jianhe",

        "postfix": "县"
    },
    {
        "id": 2697,
        "name": "台江",
        "father": 403,
        "key": "t",
        "abbreviation": "tj",
        "pinyin": "taijiang",

        "postfix": "县"
    },
    {
        "id": 2698,
        "name": "黎平",
        "father": 403,
        "key": "l",
        "abbreviation": "lp",
        "pinyin": "liping",

        "postfix": "县"
    },
    {
        "id": 2699,
        "name": "榕江",
        "father": 403,
        "key": "r",
        "abbreviation": "rj",
        "pinyin": "rongjiang",

        "postfix": "县"
    },
    {
        "id": 2700,
        "name": "从江",
        "father": 403,
        "key": "c",
        "abbreviation": "cj",
        "pinyin": "congjiang",

        "postfix": "县"
    },
    {
        "id": 2701,
        "name": "雷山",
        "father": 403,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "leishan",

        "postfix": "县"
    },
    {
        "id": 2702,
        "name": "麻江",
        "father": 403,
        "key": "m",
        "abbreviation": "mj",
        "pinyin": "majiang",

        "postfix": "县"
    },
    {
        "id": 2703,
        "name": "丹寨",
        "father": 403,
        "key": "d",
        "abbreviation": "dz",
        "pinyin": "danzhai",

        "postfix": "县"
    },
    {
        "id": 2704,
        "name": "都匀",
        "father": 404,
        "key": "d",
        "abbreviation": "dy",
        "pinyin": "duyun",

        "postfix": "市"
    },
    {
        "id": 2705,
        "name": "福泉",
        "father": 404,
        "key": "f",
        "abbreviation": "fq",
        "pinyin": "fuquan",

        "postfix": "市"
    },
    {
        "id": 2706,
        "name": "荔波",
        "father": 404,
        "key": "l",
        "abbreviation": "lb",
        "pinyin": "libo",

        "postfix": "县"
    },
    {
        "id": 2707,
        "name": "贵定",
        "father": 404,
        "key": "g",
        "abbreviation": "gd",
        "pinyin": "guiding",

        "postfix": "县"
    },
    {
        "id": 2708,
        "name": "瓮安",
        "father": 404,
        "key": "w",
        "abbreviation": "wa",
        "pinyin": "wengan",

        "postfix": "县"
    },
    {
        "id": 2709,
        "name": "独山",
        "father": 404,
        "key": "d",
        "abbreviation": "ds",
        "pinyin": "dushan",

        "postfix": "县"
    },
    {
        "id": 2710,
        "name": "平塘",
        "father": 404,
        "key": "p",
        "abbreviation": "pt",
        "pinyin": "pingtang",

        "postfix": "县"
    },
    {
        "id": 2711,
        "name": "罗甸",
        "father": 404,
        "key": "l",
        "abbreviation": "ld",
        "pinyin": "luodian",

        "postfix": "县"
    },
    {
        "id": 2712,
        "name": "长顺",
        "father": 404,
        "key": "c",
        "abbreviation": "cs",
        "pinyin": "changshun",

        "postfix": "县"
    },
    {
        "id": 2713,
        "name": "龙里",
        "father": 404,
        "key": "l",
        "abbreviation": "ll",
        "pinyin": "longli",

        "postfix": "县"
    },
    {
        "id": 2714,
        "name": "惠水",
        "father": 404,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "huishui",

        "postfix": "县"
    },
    {
        "id": 2715,
        "name": "三都",
        "father": 404,
        "key": "s",
        "abbreviation": "sd",
        "pinyin": "sandu",
        "": "水族",
        "postfix": "自治县"
    },
    {
        "id": 2716,
        "name": "五华",
        "father": 405,
        "key": "w",
        "abbreviation": "wh",
        "pinyin": "wuhua",

        "postfix": "区"
    },
    {
        "id": 2717,
        "name": "盘龙",
        "father": 405,
        "key": "p",
        "abbreviation": "pl",
        "pinyin": "panlong",

        "postfix": "区"
    },
    {
        "id": 2718,
        "name": "官渡",
        "father": 405,
        "key": "g",
        "abbreviation": "gd",
        "pinyin": "guandu",

        "postfix": "区"
    },
    {
        "id": 2719,
        "name": "西山",
        "father": 405,
        "key": "x",
        "abbreviation": "xs",
        "pinyin": "xishan",

        "postfix": "区"
    },
    {
        "id": 2720,
        "name": "东川",
        "father": 405,
        "key": "d",
        "abbreviation": "dc",
        "pinyin": "dongchuan",

        "postfix": "区"
    },
    {
        "id": 2721,
        "name": "呈贡",
        "father": 405,
        "key": "c",
        "abbreviation": "cg",
        "pinyin": "chenggong",

        "postfix": "区"
    },
    {
        "id": 2722,
        "name": "晋宁",
        "father": 405,
        "key": "j",
        "abbreviation": "jn",
        "pinyin": "jinning",

        "postfix": "区"
    },
    {
        "id": 2723,
        "name": "富民",
        "father": 405,
        "key": "f",
        "abbreviation": "fm",
        "pinyin": "fumin",

        "postfix": "县"
    },
    {
        "id": 2724,
        "name": "宜良",
        "father": 405,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yiliang",

        "postfix": "县"
    },
    {
        "id": 2725,
        "name": "石林",
        "father": 405,
        "key": "s",
        "abbreviation": "sl",
        "pinyin": "shilin",
        "": "彝族",
        "postfix": "自治县"
    },
    {
        "id": 2726,
        "name": "嵩明",
        "father": 405,
        "key": "s",
        "abbreviation": "sm",
        "pinyin": "songming",

        "postfix": "县"
    },
    {
        "id": 2727,
        "name": "禄劝",
        "father": 405,
        "key": "l",
        "abbreviation": "lq",
        "pinyin": "luquan",
        "": "彝族苗族",
        "postfix": "自治县"
    },
    {
        "id": 2728,
        "name": "寻甸",
        "father": 405,
        "key": "x",
        "abbreviation": "xd",
        "pinyin": "xundian",
        "": "回族彝族",
        "postfix": "自治县"
    },
    {
        "id": 2729,
        "name": "安宁",
        "father": 405,
        "key": "a",
        "abbreviation": "an",
        "pinyin": "anning",

        "postfix": "市"
    },
    {
        "id": 2730,
        "name": "麒麟",
        "father": 406,
        "key": "q",
        "abbreviation": "ql",
        "pinyin": "qilin",

        "postfix": "区"
    },
    {
        "id": 2731,
        "name": "马龙",
        "father": 406,
        "key": "m",
        "abbreviation": "ml",
        "pinyin": "malong",

        "postfix": "区"
    },
    {
        "id": 2732,
        "name": "陆良",
        "father": 406,
        "key": "l",
        "abbreviation": "ll",
        "pinyin": "luliang",

        "postfix": "县"
    },
    {
        "id": 2733,
        "name": "师宗",
        "father": 406,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "shizong",

        "postfix": "县"
    },
    {
        "id": 2734,
        "name": "罗平",
        "father": 406,
        "key": "l",
        "abbreviation": "lp",
        "pinyin": "luoping",

        "postfix": "县"
    },
    {
        "id": 2735,
        "name": "富源",
        "father": 406,
        "key": "f",
        "abbreviation": "fy",
        "pinyin": "fuyuan",

        "postfix": "县"
    },
    {
        "id": 2736,
        "name": "会泽",
        "father": 406,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "huize",

        "postfix": "县"
    },
    {
        "id": 2737,
        "name": "沾益",
        "father": 406,
        "key": "z",
        "abbreviation": "zy",
        "pinyin": "zhanyi",

        "postfix": "区"
    },
    {
        "id": 2738,
        "name": "宣威",
        "father": 406,
        "key": "x",
        "abbreviation": "xw",
        "pinyin": "xuanwei",

        "postfix": "市"
    },
    {
        "id": 2739,
        "name": "红塔",
        "father": 407,
        "key": "h",
        "abbreviation": "ht",
        "pinyin": "hongta",

        "postfix": "区"
    },
    {
        "id": 2740,
        "name": "江川",
        "father": 407,
        "key": "j",
        "abbreviation": "jc",
        "pinyin": "jiangchuan",

        "postfix": "区"
    },
    {
        "id": 2741,
        "name": "澄江",
        "father": 407,
        "key": "c",
        "abbreviation": "cj",
        "pinyin": "chengjiang",

        "postfix": "县"
    },
    {
        "id": 2742,
        "name": "通海",
        "father": 407,
        "key": "t",
        "abbreviation": "th",
        "pinyin": "tonghai",

        "postfix": "县"
    },
    {
        "id": 2743,
        "name": "华宁",
        "father": 407,
        "key": "h",
        "abbreviation": "hn",
        "pinyin": "huaning",

        "postfix": "县"
    },
    {
        "id": 2744,
        "name": "易门",
        "father": 407,
        "key": "y",
        "abbreviation": "ym",
        "pinyin": "yimen",

        "postfix": "县"
    },
    {
        "id": 2745,
        "name": "峨山",
        "father": 407,
        "key": "e",
        "abbreviation": "es",
        "pinyin": "eshan",
        "": "彝族",
        "postfix": "自治县"
    },
    {
        "id": 2746,
        "name": "新平",
        "father": 407,
        "key": "x",
        "abbreviation": "xp",
        "pinyin": "xinping",
        "": "彝族傣族",
        "postfix": "自治县"
    },
    {
        "id": 2747,
        "name": "元江",
        "father": 407,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "yuanjiang",
        "": "哈尼族彝族傣族",
        "postfix": "自治县"
    },
    {
        "id": 2748,
        "name": "昭阳",
        "father": 408,
        "key": "z",
        "abbreviation": "zy",
        "pinyin": "zhaoyang",

        "postfix": "区"
    },
    {
        "id": 2749,
        "name": "鲁甸",
        "father": 408,
        "key": "l",
        "abbreviation": "ld",
        "pinyin": "ludian",

        "postfix": "县"
    },
    {
        "id": 2750,
        "name": "巧家",
        "father": 408,
        "key": "q",
        "abbreviation": "qj",
        "pinyin": "qiaojia",

        "postfix": "县"
    },
    {
        "id": 2751,
        "name": "盐津",
        "father": 408,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "yanjin",

        "postfix": "县"
    },
    {
        "id": 2752,
        "name": "大关",
        "father": 408,
        "key": "d",
        "abbreviation": "dg",
        "pinyin": "daguan",

        "postfix": "县"
    },
    {
        "id": 2753,
        "name": "永善",
        "father": 408,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yongshan",

        "postfix": "县"
    },
    {
        "id": 2754,
        "name": "绥江",
        "father": 408,
        "key": "s",
        "abbreviation": "sj",
        "pinyin": "suijiang",

        "postfix": "县"
    },
    {
        "id": 2755,
        "name": "镇雄",
        "father": 408,
        "key": "z",
        "abbreviation": "zx",
        "pinyin": "zhenxiong",

        "postfix": "县"
    },
    {
        "id": 2756,
        "name": "彝良",
        "father": 408,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yiliang",

        "postfix": "县"
    },
    {
        "id": 2757,
        "name": "威信",
        "father": 408,
        "key": "w",
        "abbreviation": "wx",
        "pinyin": "weixin",

        "postfix": "县"
    },
    {
        "id": 2758,
        "name": "水富",
        "father": 408,
        "key": "s",
        "abbreviation": "sf",
        "pinyin": "shuifu",

        "postfix": "市"
    },
    {
        "id": 2759,
        "name": "古城",
        "father": 409,
        "key": "g",
        "abbreviation": "gc",
        "pinyin": "gucheng",

        "postfix": "区"
    },
    {
        "id": 2760,
        "name": "玉龙",
        "father": 409,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yulong",
        "": "纳西族",
        "postfix": "自治县"
    },
    {
        "id": 2761,
        "name": "永胜",
        "father": 409,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yongsheng",

        "postfix": "县"
    },
    {
        "id": 2762,
        "name": "华坪",
        "father": 409,
        "key": "h",
        "abbreviation": "hp",
        "pinyin": "huaping",

        "postfix": "县"
    },
    {
        "id": 2763,
        "name": "宁蒗",
        "father": 409,
        "key": "n",
        "abbreviation": "nl",
        "pinyin": "ninglang",
        "": "彝族",
        "postfix": "自治县"
    },
    {
        "id": 2764,
        "name": "思茅",
        "father": 410,
        "key": "s",
        "abbreviation": "sm",
        "pinyin": "simao",

        "postfix": "区"
    },
    {
        "id": 2765,
        "name": "宁洱",
        "father": 410,
        "key": "n",
        "abbreviation": "ne",
        "pinyin": "ninger",
        "": "哈尼族彝族",
        "postfix": "县"
    },
    {
        "id": 2766,
        "name": "墨江",
        "father": 410,
        "key": "m",
        "abbreviation": "mj",
        "pinyin": "mojiang",
        "": "哈尼族",
        "postfix": "县"
    },
    {
        "id": 2767,
        "name": "景东",
        "father": 410,
        "key": "j",
        "abbreviation": "jd",
        "pinyin": "jingdong",
        "": "彝族",
        "postfix": "县"
    },
    {
        "id": 2768,
        "name": "景谷",
        "father": 410,
        "key": "j",
        "abbreviation": "jg",
        "pinyin": "jinggu",
        "": "傣族彝族",
        "postfix": "县"
    },
    {
        "id": 2769,
        "name": "镇沅",
        "father": 410,
        "key": "z",
        "abbreviation": "zy",
        "pinyin": "zhenyuan",
        "": "彝族哈尼族拉祜族",
        "postfix": "县"
    },
    {
        "id": 2770,
        "name": "江城",
        "father": 410,
        "key": "j",
        "abbreviation": "jc",
        "pinyin": "jiangcheng",
        "": "哈尼族彝族",
        "postfix": "县"
    },
    {
        "id": 2771,
        "name": "孟连",
        "father": 410,
        "key": "m",
        "abbreviation": "ml",
        "pinyin": "menglian",
        "": "傣族拉祜族佤族",
        "postfix": "县"
    },
    {
        "id": 2772,
        "name": "澜沧",
        "father": 410,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "lancang",
        "": "拉祜族",
        "postfix": "县"
    },
    {
        "id": 2773,
        "name": "西盟",
        "father": 410,
        "key": "x",
        "abbreviation": "xm",
        "pinyin": "ximeng",
        "": "佤族",
        "postfix": "县"
    },
    {
        "id": 2774,
        "name": "临翔",
        "father": 411,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "linxiang",

        "postfix": "区"
    },
    {
        "id": 2775,
        "name": "凤庆",
        "father": 411,
        "key": "f",
        "abbreviation": "fq",
        "pinyin": "fengqing",

        "postfix": "县"
    },
    {
        "id": 2776,
        "name": "云县",
        "father": 411,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yunxian",

        "postfix": ""
    },
    {
        "id": 2777,
        "name": "永德",
        "father": 411,
        "key": "y",
        "abbreviation": "yd",
        "pinyin": "yongde",

        "postfix": "县"
    },
    {
        "id": 2778,
        "name": "镇康",
        "father": 411,
        "key": "z",
        "abbreviation": "zk",
        "pinyin": "zhenkang",

        "postfix": "县"
    },
    {
        "id": 2779,
        "name": "双江",
        "father": 411,
        "key": "s",
        "abbreviation": "sj",
        "pinyin": "shuangjiang",
        "": "拉祜族佤族布朗族傣族",
        "postfix": "自治县"
    },
    {
        "id": 2780,
        "name": "耿马",
        "father": 411,
        "key": "g",
        "abbreviation": "gm",
        "pinyin": "gengma",
        "": "傣族佤族",
        "postfix": "自治县"
    },
    {
        "id": 2781,
        "name": "沧源",
        "father": 411,
        "key": "c",
        "abbreviation": "cy",
        "pinyin": "cangyuan",
        "": "佤族",
        "postfix": "自治县"
    },
    {
        "id": 2782,
        "name": "楚雄",
        "father": 412,
        "key": "c",
        "abbreviation": "cx",
        "pinyin": "chuxiong",

        "postfix": "市"
    },
    {
        "id": 2783,
        "name": "双柏",
        "father": 412,
        "key": "s",
        "abbreviation": "sb",
        "pinyin": "shuangbo",

        "postfix": "县"
    },
    {
        "id": 2784,
        "name": "牟定",
        "father": 412,
        "key": "m",
        "abbreviation": "md",
        "pinyin": "mouding",

        "postfix": "县"
    },
    {
        "id": 2785,
        "name": "南华",
        "father": 412,
        "key": "n",
        "abbreviation": "nh",
        "pinyin": "nanhua",

        "postfix": "县"
    },
    {
        "id": 2786,
        "name": "姚安",
        "father": 412,
        "key": "y",
        "abbreviation": "ya",
        "pinyin": "yaoan",

        "postfix": "县"
    },
    {
        "id": 2787,
        "name": "大姚",
        "father": 412,
        "key": "d",
        "abbreviation": "dy",
        "pinyin": "dayao",

        "postfix": "县"
    },
    {
        "id": 2788,
        "name": "永仁",
        "father": 412,
        "key": "y",
        "abbreviation": "yr",
        "pinyin": "yongren",

        "postfix": "县"
    },
    {
        "id": 2789,
        "name": "元谋",
        "father": 412,
        "key": "y",
        "abbreviation": "ym",
        "pinyin": "yuanmou",

        "postfix": "县"
    },
    {
        "id": 2790,
        "name": "武定",
        "father": 412,
        "key": "w",
        "abbreviation": "wd",
        "pinyin": "wuding",

        "postfix": "县"
    },
    {
        "id": 2791,
        "name": "禄丰",
        "father": 412,
        "key": "l",
        "abbreviation": "lf",
        "pinyin": "lufeng",

        "postfix": "县"
    },
    {
        "id": 2792,
        "name": "个旧",
        "father": 413,
        "key": "g",
        "abbreviation": "gj",
        "pinyin": "gejiu",

        "postfix": "市"
    },
    {
        "id": 2793,
        "name": "开远",
        "father": 413,
        "key": "k",
        "abbreviation": "ky",
        "pinyin": "kaiyuan",

        "postfix": "市"
    },
    {
        "id": 2794,
        "name": "蒙自",
        "father": 413,
        "key": "m",
        "abbreviation": "mz",
        "pinyin": "mengzi",

        "postfix": "市"
    },
    {
        "id": 2795,
        "name": "屏边",
        "father": 413,
        "key": "p",
        "abbreviation": "pb",
        "pinyin": "pingbian",
        "": "苗族",
        "postfix": "自治县"
    },
    {
        "id": 2796,
        "name": "建水",
        "father": 413,
        "key": "j",
        "abbreviation": "js",
        "pinyin": "jianshui",

        "postfix": "县"
    },
    {
        "id": 2797,
        "name": "石屏",
        "father": 413,
        "key": "s",
        "abbreviation": "sp",
        "pinyin": "shiping",

        "postfix": "县"
    },
    {
        "id": 2798,
        "name": "弥勒",
        "father": 413,
        "key": "m",
        "abbreviation": "ml",
        "pinyin": "mile",

        "postfix": "市"
    },
    {
        "id": 2799,
        "name": "泸西",
        "father": 413,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "luxi",

        "postfix": "县"
    },
    {
        "id": 2800,
        "name": "元阳",
        "father": 413,
        "key": "y",
        "abbreviation": "yy",
        "pinyin": "yuanyang",

        "postfix": "县"
    },
    {
        "id": 2801,
        "name": "红河",
        "father": 413,
        "key": "h",
        "abbreviation": "hh",
        "pinyin": "honghe",

        "postfix": "县"
    },
    {
        "id": 2802,
        "name": "金平",
        "father": 413,
        "key": "j",
        "abbreviation": "jp",
        "pinyin": "jinping",
        "": "苗族瑶族傣族",
        "postfix": "自治县"
    },
    {
        "id": 2803,
        "name": "绿春",
        "father": 413,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "lu:chun",

        "postfix": "县"
    },
    {
        "id": 2804,
        "name": "河口",
        "father": 413,
        "key": "h",
        "abbreviation": "hk",
        "pinyin": "hekou",
        "": "瑶族",
        "postfix": "自治县"
    },
    {
        "id": 2805,
        "name": "文山",
        "father": 414,
        "key": "w",
        "abbreviation": "ws",
        "pinyin": "wenshan",

        "postfix": "县"
    },
    {
        "id": 2806,
        "name": "砚山",
        "father": 414,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yanshan",

        "postfix": "县"
    },
    {
        "id": 2807,
        "name": "西畴",
        "father": 414,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xichou",

        "postfix": "县"
    },
    {
        "id": 2808,
        "name": "麻栗坡",
        "father": 414,
        "key": "m",
        "abbreviation": "mlp",
        "pinyin": "malipo",

        "postfix": "县"
    },
    {
        "id": 2809,
        "name": "马关",
        "father": 414,
        "key": "m",
        "abbreviation": "mg",
        "pinyin": "maguan",

        "postfix": "县"
    },
    {
        "id": 2810,
        "name": "丘北",
        "father": 414,
        "key": "q",
        "abbreviation": "qb",
        "pinyin": "qiubei",

        "postfix": "县"
    },
    {
        "id": 2811,
        "name": "广南",
        "father": 414,
        "key": "g",
        "abbreviation": "gn",
        "pinyin": "guangnan",

        "postfix": "县"
    },
    {
        "id": 2812,
        "name": "富宁",
        "father": 414,
        "key": "f",
        "abbreviation": "fn",
        "pinyin": "funing",

        "postfix": "县"
    },
    {
        "id": 2813,
        "name": "景洪",
        "father": 415,
        "key": "j",
        "abbreviation": "jh",
        "pinyin": "jinghong",

        "postfix": "市"
    },
    {
        "id": 2814,
        "name": "勐海",
        "father": 415,
        "key": "m",
        "abbreviation": "mh",
        "pinyin": "menghai",

        "postfix": "县"
    },
    {
        "id": 2815,
        "name": "勐腊",
        "father": 415,
        "key": "m",
        "abbreviation": "ml",
        "pinyin": "mengla",

        "postfix": "县"
    },
    {
        "id": 2816,
        "name": "大理",
        "father": 416,
        "key": "d",
        "abbreviation": "dl",
        "pinyin": "dali",

        "postfix": "市"
    },
    {
        "id": 2817,
        "name": "漾濞",
        "father": 416,
        "key": "y",
        "abbreviation": "yb",
        "pinyin": "yangbi",
        "": "彝族",
        "postfix": "自治县"
    },
    {
        "id": 2818,
        "name": "祥云",
        "father": 416,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xiangyun",

        "postfix": "县"
    },
    {
        "id": 2819,
        "name": "宾川",
        "father": 416,
        "key": "b",
        "abbreviation": "bc",
        "pinyin": "binchuan",

        "postfix": "县"
    },
    {
        "id": 2820,
        "name": "弥渡",
        "father": 416,
        "key": "m",
        "abbreviation": "md",
        "pinyin": "midu",

        "postfix": "县"
    },
    {
        "id": 2821,
        "name": "南涧",
        "father": 416,
        "key": "n",
        "abbreviation": "nj",
        "pinyin": "nanjian",
        "": "彝族",
        "postfix": "自治县"
    },
    {
        "id": 2822,
        "name": "巍山",
        "father": 416,
        "key": "w",
        "abbreviation": "ws",
        "pinyin": "weishan",
        "": "彝族回族",
        "postfix": "自治县"
    },
    {
        "id": 2823,
        "name": "永平",
        "father": 416,
        "key": "y",
        "abbreviation": "yp",
        "pinyin": "yongping",

        "postfix": "县"
    },
    {
        "id": 2824,
        "name": "云龙",
        "father": 416,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yunlong",

        "postfix": "县"
    },
    {
        "id": 2825,
        "name": "洱源",
        "father": 416,
        "key": "e",
        "abbreviation": "ey",
        "pinyin": "eryuan",

        "postfix": "县"
    },
    {
        "id": 2826,
        "name": "剑川",
        "father": 416,
        "key": "j",
        "abbreviation": "jc",
        "pinyin": "jianchuan",

        "postfix": "县"
    },
    {
        "id": 2827,
        "name": "鹤庆",
        "father": 416,
        "key": "h",
        "abbreviation": "hq",
        "pinyin": "heqing",

        "postfix": "县"
    },
    {
        "id": 2828,
        "name": "瑞丽",
        "father": 417,
        "key": "r",
        "abbreviation": "rl",
        "pinyin": "ruili",

        "postfix": "市"
    },
    {
        "id": 2829,
        "name": "芒市",
        "father": 417,
        "key": "m",
        "abbreviation": "ms",
        "pinyin": "mangshi",

        "postfix": ""
    },
    {
        "id": 2830,
        "name": "梁河",
        "father": 417,
        "key": "l",
        "abbreviation": "lh",
        "pinyin": "lianghe",

        "postfix": "县"
    },
    {
        "id": 2831,
        "name": "盈江",
        "father": 417,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "yingjiang",

        "postfix": "县"
    },
    {
        "id": 2832,
        "name": "陇川",
        "father": 417,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "longchuan",

        "postfix": "县"
    },
    {
        "id": 2833,
        "name": "泸水",
        "father": 418,
        "key": "l",
        "abbreviation": "ls",
        "pinyin": "lushui",

        "postfix": "市"
    },
    {
        "id": 2834,
        "name": "福贡",
        "father": 418,
        "key": "f",
        "abbreviation": "fg",
        "pinyin": "fugong",

        "postfix": "县"
    },
    {
        "id": 2835,
        "name": "贡山",
        "father": 418,
        "key": "g",
        "abbreviation": "gs",
        "pinyin": "gongshan",
        "": "独龙族怒族",
        "postfix": "县"
    },
    {
        "id": 2836,
        "name": "兰坪",
        "father": 418,
        "key": "l",
        "abbreviation": "lp",
        "pinyin": "lanping",
        "": "白族普米族",
        "postfix": "县"
    },
    {
        "id": 2837,
        "name": "香格里拉",
        "father": 419,
        "key": "x",
        "abbreviation": "xgll",
        "pinyin": "xianggelila",

        "postfix": "市"
    },
    {
        "id": 2838,
        "name": "德钦",
        "father": 419,
        "key": "d",
        "abbreviation": "dq",
        "pinyin": "deqin",

        "postfix": "县"
    },
    {
        "id": 2839,
        "name": "维西",
        "father": 419,
        "key": "w",
        "abbreviation": "wx",
        "pinyin": "weixi",

        "postfix": "县"
    },
    {
        "id": 2840,
        "name": "隆阳",
        "father": 420,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "longyang",

        "postfix": "区"
    },
    {
        "id": 2841,
        "name": "施甸",
        "father": 420,
        "key": "s",
        "abbreviation": "sd",
        "pinyin": "shidian",

        "postfix": "县"
    },
    {
        "id": 2842,
        "name": "腾冲",
        "father": 420,
        "key": "t",
        "abbreviation": "tc",
        "pinyin": "tengchong",

        "postfix": "市"
    },
    {
        "id": 2843,
        "name": "龙陵",
        "father": 420,
        "key": "l",
        "abbreviation": "ll",
        "pinyin": "longling",

        "postfix": "县"
    },
    {
        "id": 2844,
        "name": "昌宁",
        "father": 420,
        "key": "c",
        "abbreviation": "cn",
        "pinyin": "changning",

        "postfix": "县"
    },
    {
        "id": 2845,
        "name": "城关",
        "father": 421,
        "key": "c",
        "abbreviation": "cg",
        "pinyin": "chengguan",

        "postfix": "区"
    },
    {
        "id": 2846,
        "name": "林周",
        "father": 421,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "linzhou",

        "postfix": "县"
    },
    {
        "id": 2847,
        "name": "当雄",
        "father": 421,
        "key": "d",
        "abbreviation": "dx",
        "pinyin": "dangxiong",

        "postfix": "县"
    },
    {
        "id": 2848,
        "name": "尼木",
        "father": 421,
        "key": "n",
        "abbreviation": "nm",
        "pinyin": "nimu",

        "postfix": "县"
    },
    {
        "id": 2849,
        "name": "曲水",
        "father": 421,
        "key": "q",
        "abbreviation": "qs",
        "pinyin": "qushui",

        "postfix": "县"
    },
    {
        "id": 2850,
        "name": "堆龙德庆",
        "father": 421,
        "key": "d",
        "abbreviation": "dldq",
        "pinyin": "duilongdeqing",

        "postfix": "区"
    },
    {
        "id": 2851,
        "name": "达孜",
        "father": 421,
        "key": "d",
        "abbreviation": "dz",
        "pinyin": "dazi",

        "postfix": "区"
    },
    {
        "id": 2852,
        "name": "墨竹工卡",
        "father": 421,
        "key": "m",
        "abbreviation": "mzgk",
        "pinyin": "mozhugongka",

        "postfix": "县"
    },
    {
        "id": 2853,
        "name": "卡若",
        "father": 422,
        "key": "k",
        "abbreviation": "kr",
        "pinyin": "karuo",

        "postfix": "区"
    },
    {
        "id": 2854,
        "name": "江达",
        "father": 422,
        "key": "j",
        "abbreviation": "jd",
        "pinyin": "jiangda",

        "postfix": "县"
    },
    {
        "id": 2855,
        "name": "贡觉",
        "father": 422,
        "key": "g",
        "abbreviation": "gj",
        "pinyin": "gongjue",

        "postfix": "县"
    },
    {
        "id": 2856,
        "name": "类乌齐",
        "father": 422,
        "key": "l",
        "abbreviation": "lwq",
        "pinyin": "leiwuqi",

        "postfix": "县"
    },
    {
        "id": 2857,
        "name": "丁青",
        "father": 422,
        "key": "d",
        "abbreviation": "dq",
        "pinyin": "dingqing",

        "postfix": "县"
    },
    {
        "id": 2858,
        "name": "察雅",
        "father": 422,
        "key": "c",
        "abbreviation": "cy",
        "pinyin": "chaya",

        "postfix": "县"
    },
    {
        "id": 2859,
        "name": "八宿",
        "father": 422,
        "key": "b",
        "abbreviation": "bs",
        "pinyin": "basu",

        "postfix": "县"
    },
    {
        "id": 2860,
        "name": "左贡",
        "father": 422,
        "key": "z",
        "abbreviation": "zg",
        "pinyin": "zuogong",

        "postfix": "县"
    },
    {
        "id": 2861,
        "name": "芒康",
        "father": 422,
        "key": "m",
        "abbreviation": "mk",
        "pinyin": "mangkang",

        "postfix": "县"
    },
    {
        "id": 2862,
        "name": "洛隆",
        "father": 422,
        "key": "l",
        "abbreviation": "ll",
        "pinyin": "luolong",

        "postfix": "县"
    },
    {
        "id": 2863,
        "name": "边坝",
        "father": 422,
        "key": "b",
        "abbreviation": "bb",
        "pinyin": "bianba",

        "postfix": "县"
    },
    {
        "id": 2864,
        "name": "乃东",
        "father": 423,
        "key": "n",
        "abbreviation": "nd",
        "pinyin": "naidong",

        "postfix": "区"
    },
    {
        "id": 2865,
        "name": "扎囊",
        "father": 423,
        "key": "z",
        "abbreviation": "zn",
        "pinyin": "zhanang",

        "postfix": "县"
    },
    {
        "id": 2866,
        "name": "贡嘎",
        "father": 423,
        "key": "g",
        "abbreviation": "gg",
        "pinyin": "gongga",

        "postfix": "县"
    },
    {
        "id": 2867,
        "name": "桑日",
        "father": 423,
        "key": "s",
        "abbreviation": "sr",
        "pinyin": "sangri",

        "postfix": "县"
    },
    {
        "id": 2868,
        "name": "琼结",
        "father": 423,
        "key": "q",
        "abbreviation": "qj",
        "pinyin": "qiongjie",

        "postfix": "县"
    },
    {
        "id": 2869,
        "name": "曲松",
        "father": 423,
        "key": "q",
        "abbreviation": "qs",
        "pinyin": "qusong",

        "postfix": "县"
    },
    {
        "id": 2870,
        "name": "措美",
        "father": 423,
        "key": "c",
        "abbreviation": "cm",
        "pinyin": "cuomei",

        "postfix": "县"
    },
    {
        "id": 2871,
        "name": "洛扎",
        "father": 423,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "luozha",

        "postfix": "县"
    },
    {
        "id": 2872,
        "name": "加查",
        "father": 423,
        "key": "j",
        "abbreviation": "jc",
        "pinyin": "jiacha",

        "postfix": "县"
    },
    {
        "id": 2873,
        "name": "隆子",
        "father": 423,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "longzi",

        "postfix": "县"
    },
    {
        "id": 2874,
        "name": "错那",
        "father": 423,
        "key": "c",
        "abbreviation": "cn",
        "pinyin": "cuonei",

        "postfix": "县"
    },
    {
        "id": 2875,
        "name": "浪卡子",
        "father": 423,
        "key": "l",
        "abbreviation": "lkz",
        "pinyin": "langkazi",

        "postfix": "县"
    },
    {
        "id": 2876,
        "name": "桑珠孜",
        "father": 424,
        "key": "s",
        "abbreviation": "szz",
        "pinyin": "sangzhuzi",

        "postfix": "区"
    },
    {
        "id": 2877,
        "name": "南木林",
        "father": 424,
        "key": "n",
        "abbreviation": "nml",
        "pinyin": "nanmulin",

        "postfix": "县"
    },
    {
        "id": 2878,
        "name": "江孜",
        "father": 424,
        "key": "j",
        "abbreviation": "jz",
        "pinyin": "jiangzi",

        "postfix": "县"
    },
    {
        "id": 2879,
        "name": "定日",
        "father": 424,
        "key": "d",
        "abbreviation": "dr",
        "pinyin": "dingri",

        "postfix": "县"
    },
    {
        "id": 2880,
        "name": "萨迦",
        "father": 424,
        "key": "s",
        "abbreviation": "sj",
        "pinyin": "sajia",

        "postfix": "县"
    },
    {
        "id": 2881,
        "name": "拉孜",
        "father": 424,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "lazi",

        "postfix": "县"
    },
    {
        "id": 2882,
        "name": "昂仁",
        "father": 424,
        "key": "a",
        "abbreviation": "ar",
        "pinyin": "angren",

        "postfix": "县"
    },
    {
        "id": 2883,
        "name": "谢通门",
        "father": 424,
        "key": "x",
        "abbreviation": "xtm",
        "pinyin": "xietongmen",

        "postfix": "县"
    },
    {
        "id": 2884,
        "name": "白朗",
        "father": 424,
        "key": "b",
        "abbreviation": "bl",
        "pinyin": "bailang",

        "postfix": "县"
    },
    {
        "id": 2885,
        "name": "仁布",
        "father": 424,
        "key": "r",
        "abbreviation": "rb",
        "pinyin": "renbu",

        "postfix": "县"
    },
    {
        "id": 2886,
        "name": "康马",
        "father": 424,
        "key": "k",
        "abbreviation": "km",
        "pinyin": "kangma",

        "postfix": "县"
    },
    {
        "id": 2887,
        "name": "定结",
        "father": 424,
        "key": "d",
        "abbreviation": "dj",
        "pinyin": "dingjie",

        "postfix": "县"
    },
    {
        "id": 2888,
        "name": "仲巴",
        "father": 424,
        "key": "z",
        "abbreviation": "zb",
        "pinyin": "zhongba",

        "postfix": "县"
    },
    {
        "id": 2889,
        "name": "亚东",
        "father": 424,
        "key": "y",
        "abbreviation": "yd",
        "pinyin": "yadong",

        "postfix": "县"
    },
    {
        "id": 2890,
        "name": "吉隆",
        "father": 424,
        "key": "j",
        "abbreviation": "jl",
        "pinyin": "jilong",

        "postfix": "县"
    },
    {
        "id": 2891,
        "name": "聂拉木",
        "father": 424,
        "key": "n",
        "abbreviation": "nlm",
        "pinyin": "nielamu",

        "postfix": "县"
    },
    {
        "id": 2892,
        "name": "萨嘎",
        "father": 424,
        "key": "s",
        "abbreviation": "sg",
        "pinyin": "saga",

        "postfix": "县"
    },
    {
        "id": 2893,
        "name": "岗巴",
        "father": 424,
        "key": "g",
        "abbreviation": "gb",
        "pinyin": "gangba",

        "postfix": "县"
    },
    {
        "id": 2894,
        "name": "双湖",
        "father": 425,
        "key": "s",
        "abbreviation": "sh",
        "pinyin": "shuanghu",

        "postfix": "县"
    },
    {
        "id": 2895,
        "name": "色尼",
        "father": 425,
        "key": "s",
        "abbreviation": "sn",
        "pinyin": "seni",

        "postfix": "区"
    },
    {
        "id": 2896,
        "name": "嘉黎",
        "father": 425,
        "key": "j",
        "abbreviation": "jl",
        "pinyin": "jiali",

        "postfix": "县"
    },
    {
        "id": 2897,
        "name": "比如",
        "father": 425,
        "key": "b",
        "abbreviation": "br",
        "pinyin": "biru",

        "postfix": "县"
    },
    {
        "id": 2898,
        "name": "聂荣",
        "father": 425,
        "key": "n",
        "abbreviation": "nr",
        "pinyin": "nierong",

        "postfix": "县"
    },
    {
        "id": 2899,
        "name": "安多",
        "father": 425,
        "key": "a",
        "abbreviation": "ad",
        "pinyin": "anduo",

        "postfix": "县"
    },
    {
        "id": 2900,
        "name": "申扎",
        "father": 425,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "shenzha",

        "postfix": "县"
    },
    {
        "id": 2901,
        "name": "索县",
        "father": 425,
        "key": "s",
        "abbreviation": "sx",
        "pinyin": "suoxian",

        "postfix": ""
    },
    {
        "id": 2902,
        "name": "班戈",
        "father": 425,
        "key": "b",
        "abbreviation": "bg",
        "pinyin": "bange",

        "postfix": "县"
    },
    {
        "id": 2903,
        "name": "巴青",
        "father": 425,
        "key": "b",
        "abbreviation": "bq",
        "pinyin": "baqing",

        "postfix": "县"
    },
    {
        "id": 2904,
        "name": "尼玛",
        "father": 425,
        "key": "n",
        "abbreviation": "nm",
        "pinyin": "nima",

        "postfix": "县"
    },
    {
        "id": 2905,
        "name": "普兰",
        "father": 426,
        "key": "p",
        "abbreviation": "pl",
        "pinyin": "pulan",

        "postfix": "县"
    },
    {
        "id": 2906,
        "name": "札达",
        "father": 426,
        "key": "z",
        "abbreviation": "zd",
        "pinyin": "zhada",

        "postfix": "县"
    },
    {
        "id": 2907,
        "name": "噶尔",
        "father": 426,
        "key": "g",
        "abbreviation": "ge",
        "pinyin": "gaer",

        "postfix": "县"
    },
    {
        "id": 2908,
        "name": "日土",
        "father": 426,
        "key": "r",
        "abbreviation": "rt",
        "pinyin": "ritu",

        "postfix": "县"
    },
    {
        "id": 2909,
        "name": "革吉",
        "father": 426,
        "key": "g",
        "abbreviation": "gj",
        "pinyin": "geji",

        "postfix": "县"
    },
    {
        "id": 2910,
        "name": "改则",
        "father": 426,
        "key": "g",
        "abbreviation": "gz",
        "pinyin": "gaize",

        "postfix": "县"
    },
    {
        "id": 2911,
        "name": "措勤",
        "father": 426,
        "key": "c",
        "abbreviation": "cq",
        "pinyin": "cuoqin",

        "postfix": "县"
    },
    {
        "id": 2912,
        "name": "巴宜",
        "father": 427,
        "key": "b",
        "abbreviation": "by",
        "pinyin": "bayi",

        "postfix": "区"
    },
    {
        "id": 2913,
        "name": "工布江达",
        "father": 427,
        "key": "g",
        "abbreviation": "gbjd",
        "pinyin": "gongbujiangda",

        "postfix": "县"
    },
    {
        "id": 2914,
        "name": "米林",
        "father": 427,
        "key": "m",
        "abbreviation": "ml",
        "pinyin": "milin",

        "postfix": "县"
    },
    {
        "id": 2915,
        "name": "墨脱",
        "father": 427,
        "key": "m",
        "abbreviation": "mt",
        "pinyin": "motuo",

        "postfix": "县"
    },
    {
        "id": 2916,
        "name": "波密",
        "father": 427,
        "key": "b",
        "abbreviation": "bm",
        "pinyin": "bomi",

        "postfix": "县"
    },
    {
        "id": 2917,
        "name": "察隅",
        "father": 427,
        "key": "c",
        "abbreviation": "cy",
        "pinyin": "chayu",

        "postfix": "县"
    },
    {
        "id": 2918,
        "name": "朗县",
        "father": 427,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "langxian",

        "postfix": ""
    },
    {
        "id": 2919,
        "name": "新城",
        "father": 428,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xincheng",

        "postfix": "区"
    },
    {
        "id": 2920,
        "name": "碑林",
        "father": 428,
        "key": "b",
        "abbreviation": "bl",
        "pinyin": "beilin",

        "postfix": "区"
    },
    {
        "id": 2921,
        "name": "莲湖",
        "father": 428,
        "key": "l",
        "abbreviation": "lh",
        "pinyin": "lianhu",

        "postfix": "区"
    },
    {
        "id": 2922,
        "name": "灞桥",
        "father": 428,
        "key": "b",
        "abbreviation": "bq",
        "pinyin": "baqiao",

        "postfix": "区"
    },
    {
        "id": 2923,
        "name": "未央",
        "father": 428,
        "key": "w",
        "abbreviation": "wy",
        "pinyin": "weiyang",

        "postfix": "区"
    },
    {
        "id": 2924,
        "name": "雁塔",
        "father": 428,
        "key": "y",
        "abbreviation": "yt",
        "pinyin": "yanta",

        "postfix": "区"
    },
    {
        "id": 2925,
        "name": "阎良",
        "father": 428,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yanliang",

        "postfix": "区"
    },
    {
        "id": 2926,
        "name": "临潼",
        "father": 428,
        "key": "l",
        "abbreviation": "lt",
        "pinyin": "lintong",

        "postfix": "区"
    },
    {
        "id": 2927,
        "name": "长安",
        "father": 428,
        "key": "c",
        "abbreviation": "ca",
        "pinyin": "changan",

        "postfix": "区"
    },
    {
        "id": 2928,
        "name": "蓝田",
        "father": 428,
        "key": "l",
        "abbreviation": "lt",
        "pinyin": "lantian",

        "postfix": "县"
    },
    {
        "id": 2929,
        "name": "周至",
        "father": 428,
        "key": "z",
        "abbreviation": "zz",
        "pinyin": "zhouzhi",

        "postfix": "县"
    },
    {
        "id": 2930,
        "name": "鄠邑",
        "father": 428,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "huyi",

        "postfix": "区"
    },
    {
        "id": 2931,
        "name": "高陵",
        "father": 428,
        "key": "g",
        "abbreviation": "gl",
        "pinyin": "gaoling",

        "postfix": "区"
    },
    {
        "id": 2932,
        "name": "王益",
        "father": 429,
        "key": "w",
        "abbreviation": "wy",
        "pinyin": "wangyi",

        "postfix": "区"
    },
    {
        "id": 2933,
        "name": "印台",
        "father": 429,
        "key": "y",
        "abbreviation": "yt",
        "pinyin": "yintai",

        "postfix": "区"
    },
    {
        "id": 2934,
        "name": "耀州",
        "father": 429,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yaozhou",

        "postfix": "区"
    },
    {
        "id": 2935,
        "name": "宜君",
        "father": 429,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "yijun",

        "postfix": "县"
    },
    {
        "id": 2936,
        "name": "渭滨",
        "father": 430,
        "key": "w",
        "abbreviation": "wb",
        "pinyin": "weibin",

        "postfix": "区"
    },
    {
        "id": 2937,
        "name": "金台",
        "father": 430,
        "key": "j",
        "abbreviation": "jt",
        "pinyin": "jintai",

        "postfix": "区"
    },
    {
        "id": 2938,
        "name": "陈仓",
        "father": 430,
        "key": "c",
        "abbreviation": "cc",
        "pinyin": "chencang",

        "postfix": "区"
    },
    {
        "id": 2939,
        "name": "凤翔",
        "father": 430,
        "key": "f",
        "abbreviation": "fx",
        "pinyin": "fengxiang",

        "postfix": "县"
    },
    {
        "id": 2940,
        "name": "岐山",
        "father": 430,
        "key": "q",
        "abbreviation": "qs",
        "pinyin": "qishan",

        "postfix": "县"
    },
    {
        "id": 2941,
        "name": "扶风",
        "father": 430,
        "key": "f",
        "abbreviation": "ff",
        "pinyin": "fufeng",

        "postfix": "县"
    },
    {
        "id": 2942,
        "name": "眉县",
        "father": 430,
        "key": "m",
        "abbreviation": "mx",
        "pinyin": "meixian",

        "postfix": ""
    },
    {
        "id": 2943,
        "name": "陇县",
        "father": 430,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "longxian",

        "postfix": ""
    },
    {
        "id": 2944,
        "name": "千阳",
        "father": 430,
        "key": "q",
        "abbreviation": "qy",
        "pinyin": "qianyang",

        "postfix": "县"
    },
    {
        "id": 2945,
        "name": "麟游",
        "father": 430,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "linyou",

        "postfix": "县"
    },
    {
        "id": 2946,
        "name": "凤县",
        "father": 430,
        "key": "f",
        "abbreviation": "fx",
        "pinyin": "fengxian",

        "postfix": ""
    },
    {
        "id": 2947,
        "name": "太白",
        "father": 430,
        "key": "t",
        "abbreviation": "tb",
        "pinyin": "taibai",

        "postfix": "县"
    },
    {
        "id": 2948,
        "name": "秦都",
        "father": 431,
        "key": "q",
        "abbreviation": "qd",
        "pinyin": "qindu",

        "postfix": "区"
    },
    {
        "id": 2949,
        "name": "杨陵",
        "father": 431,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yangling",

        "postfix": "区"
    },
    {
        "id": 2950,
        "name": "渭城",
        "father": 431,
        "key": "w",
        "abbreviation": "wc",
        "pinyin": "weicheng",

        "postfix": "区"
    },
    {
        "id": 2951,
        "name": "三原",
        "father": 431,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "sanyuan",

        "postfix": "县"
    },
    {
        "id": 2952,
        "name": "泾阳",
        "father": 431,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jingyang",

        "postfix": "县"
    },
    {
        "id": 2953,
        "name": "乾县",
        "father": 431,
        "key": "q",
        "abbreviation": "qx",
        "pinyin": "qianxian",

        "postfix": ""
    },
    {
        "id": 2954,
        "name": "礼泉",
        "father": 431,
        "key": "l",
        "abbreviation": "lq",
        "pinyin": "liquan",

        "postfix": "县"
    },
    {
        "id": 2955,
        "name": "永寿",
        "father": 431,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yongshou",

        "postfix": "县"
    },
    {
        "id": 2956,
        "name": "彬州",
        "father": 431,
        "key": "b",
        "abbreviation": "bz",
        "pinyin": "binzhou",

        "postfix": "市"
    },
    {
        "id": 2957,
        "name": "长武",
        "father": 431,
        "key": "c",
        "abbreviation": "cw",
        "pinyin": "changwu",

        "postfix": "县"
    },
    {
        "id": 2958,
        "name": "旬邑",
        "father": 431,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xunyi",

        "postfix": "县"
    },
    {
        "id": 2959,
        "name": "淳化",
        "father": 431,
        "key": "c",
        "abbreviation": "ch",
        "pinyin": "chunhua",

        "postfix": "县"
    },
    {
        "id": 2960,
        "name": "武功",
        "father": 431,
        "key": "w",
        "abbreviation": "wg",
        "pinyin": "wugong",

        "postfix": "县"
    },
    {
        "id": 2961,
        "name": "兴平",
        "father": 431,
        "key": "x",
        "abbreviation": "xp",
        "pinyin": "xingping",

        "postfix": "市"
    },
    {
        "id": 2962,
        "name": "临渭",
        "father": 432,
        "key": "l",
        "abbreviation": "lw",
        "pinyin": "linwei",

        "postfix": "区"
    },
    {
        "id": 2963,
        "name": "华州",
        "father": 432,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "huazhou",

        "postfix": "区"
    },
    {
        "id": 2964,
        "name": "潼关",
        "father": 432,
        "key": "t",
        "abbreviation": "tg",
        "pinyin": "tongguan",

        "postfix": "县"
    },
    {
        "id": 2965,
        "name": "大荔",
        "father": 432,
        "key": "d",
        "abbreviation": "dl",
        "pinyin": "dali",

        "postfix": "县"
    },
    {
        "id": 2966,
        "name": "合阳",
        "father": 432,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "heyang",

        "postfix": "县"
    },
    {
        "id": 2967,
        "name": "澄城",
        "father": 432,
        "key": "c",
        "abbreviation": "cc",
        "pinyin": "chengcheng",

        "postfix": "县"
    },
    {
        "id": 2968,
        "name": "蒲城",
        "father": 432,
        "key": "p",
        "abbreviation": "pc",
        "pinyin": "pucheng",

        "postfix": "县"
    },
    {
        "id": 2969,
        "name": "白水",
        "father": 432,
        "key": "b",
        "abbreviation": "bs",
        "pinyin": "baishui",

        "postfix": "县"
    },
    {
        "id": 2970,
        "name": "富平",
        "father": 432,
        "key": "f",
        "abbreviation": "fp",
        "pinyin": "fuping",

        "postfix": "县"
    },
    {
        "id": 2971,
        "name": "韩城",
        "father": 432,
        "key": "h",
        "abbreviation": "hc",
        "pinyin": "hancheng",

        "postfix": "市"
    },
    {
        "id": 2972,
        "name": "华阴",
        "father": 432,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "huayin",

        "postfix": "市"
    },
    {
        "id": 2973,
        "name": "宝塔",
        "father": 433,
        "key": "b",
        "abbreviation": "bt",
        "pinyin": "baota",

        "postfix": "区"
    },
    {
        "id": 2974,
        "name": "延长",
        "father": 433,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yanchang",

        "postfix": "县"
    },
    {
        "id": 2975,
        "name": "延川",
        "father": 433,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yanchuan",

        "postfix": "县"
    },
    {
        "id": 2976,
        "name": "子长",
        "father": 433,
        "key": "z",
        "abbreviation": "zc",
        "pinyin": "zichang",

        "postfix": "县"
    },
    {
        "id": 2977,
        "name": "安塞",
        "father": 433,
        "key": "a",
        "abbreviation": "as",
        "pinyin": "ansai",

        "postfix": "区"
    },
    {
        "id": 2978,
        "name": "志丹",
        "father": 433,
        "key": "z",
        "abbreviation": "zd",
        "pinyin": "zhidan",

        "postfix": "县"
    },
    {
        "id": 2979,
        "name": "吴起",
        "father": 433,
        "key": "w",
        "abbreviation": "wq",
        "pinyin": "wuqi",

        "postfix": "县"
    },
    {
        "id": 2980,
        "name": "甘泉",
        "father": 433,
        "key": "g",
        "abbreviation": "gq",
        "pinyin": "ganquan",

        "postfix": "县"
    },
    {
        "id": 2981,
        "name": "富县",
        "father": 433,
        "key": "f",
        "abbreviation": "fx",
        "pinyin": "fuxian",

        "postfix": ""
    },
    {
        "id": 2982,
        "name": "洛川",
        "father": 433,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "luochuan",

        "postfix": "县"
    },
    {
        "id": 2983,
        "name": "宜川",
        "father": 433,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yichuan",

        "postfix": "县"
    },
    {
        "id": 2984,
        "name": "黄龙",
        "father": 433,
        "key": "h",
        "abbreviation": "hl",
        "pinyin": "huanglong",

        "postfix": "县"
    },
    {
        "id": 2985,
        "name": "黄陵",
        "father": 433,
        "key": "h",
        "abbreviation": "hl",
        "pinyin": "huangling",

        "postfix": "县"
    },
    {
        "id": 2986,
        "name": "汉台",
        "father": 434,
        "key": "h",
        "abbreviation": "ht",
        "pinyin": "hantai",

        "postfix": "区"
    },
    {
        "id": 2987,
        "name": "南郑",
        "father": 434,
        "key": "n",
        "abbreviation": "nz",
        "pinyin": "nanzheng",

        "postfix": "区"
    },
    {
        "id": 2988,
        "name": "城固",
        "father": 434,
        "key": "c",
        "abbreviation": "cg",
        "pinyin": "chenggu",

        "postfix": "县"
    },
    {
        "id": 2989,
        "name": "洋县",
        "father": 434,
        "key": "y",
        "abbreviation": "yx",
        "pinyin": "yangxian",

        "postfix": ""
    },
    {
        "id": 2990,
        "name": "西乡",
        "father": 434,
        "key": "x",
        "abbreviation": "xx",
        "pinyin": "xixiang",

        "postfix": "县"
    },
    {
        "id": 2991,
        "name": "勉县",
        "father": 434,
        "key": "m",
        "abbreviation": "mx",
        "pinyin": "mianxian",

        "postfix": ""
    },
    {
        "id": 2992,
        "name": "宁强",
        "father": 434,
        "key": "n",
        "abbreviation": "nq",
        "pinyin": "ningqiang",

        "postfix": "县"
    },
    {
        "id": 2993,
        "name": "略阳",
        "father": 434,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "lu:eyang",

        "postfix": "县"
    },
    {
        "id": 2994,
        "name": "镇巴",
        "father": 434,
        "key": "z",
        "abbreviation": "zb",
        "pinyin": "zhenba",

        "postfix": "县"
    },
    {
        "id": 2995,
        "name": "留坝",
        "father": 434,
        "key": "l",
        "abbreviation": "lb",
        "pinyin": "liuba",

        "postfix": "县"
    },
    {
        "id": 2996,
        "name": "佛坪",
        "father": 434,
        "key": "f",
        "abbreviation": "fp",
        "pinyin": "foping",

        "postfix": "县"
    },
    {
        "id": 2997,
        "name": "榆阳",
        "father": 435,
        "key": "y",
        "abbreviation": "yy",
        "pinyin": "yuyang",

        "postfix": "区"
    },
    {
        "id": 2998,
        "name": "神木",
        "father": 435,
        "key": "s",
        "abbreviation": "sm",
        "pinyin": "shenmu",

        "postfix": "市"
    },
    {
        "id": 2999,
        "name": "府谷",
        "father": 435,
        "key": "f",
        "abbreviation": "fg",
        "pinyin": "fugu",

        "postfix": "县"
    },
    {
        "id": 3000,
        "name": "横山",
        "father": 435,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "hengshan",

        "postfix": "区"
    },
    {
        "id": 3001,
        "name": "靖边",
        "father": 435,
        "key": "j",
        "abbreviation": "jb",
        "pinyin": "jingbian",

        "postfix": "县"
    },
    {
        "id": 3002,
        "name": "定边",
        "father": 435,
        "key": "d",
        "abbreviation": "db",
        "pinyin": "dingbian",

        "postfix": "县"
    },
    {
        "id": 3003,
        "name": "绥德",
        "father": 435,
        "key": "s",
        "abbreviation": "sd",
        "pinyin": "suide",

        "postfix": "县"
    },
    {
        "id": 3004,
        "name": "米脂",
        "father": 435,
        "key": "m",
        "abbreviation": "mz",
        "pinyin": "mizhi",

        "postfix": "县"
    },
    {
        "id": 3005,
        "name": "佳县",
        "father": 435,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jiaxian",

        "postfix": ""
    },
    {
        "id": 3006,
        "name": "吴堡",
        "father": 435,
        "key": "w",
        "abbreviation": "wb",
        "pinyin": "wubao",

        "postfix": "县"
    },
    {
        "id": 3007,
        "name": "清涧",
        "father": 435,
        "key": "q",
        "abbreviation": "qj",
        "pinyin": "qingjian",

        "postfix": "县"
    },
    {
        "id": 3008,
        "name": "子洲",
        "father": 435,
        "key": "z",
        "abbreviation": "zz",
        "pinyin": "zizhou",

        "postfix": "县"
    },
    {
        "id": 3009,
        "name": "汉滨",
        "father": 436,
        "key": "h",
        "abbreviation": "hb",
        "pinyin": "hanbin",

        "postfix": "区"
    },
    {
        "id": 3010,
        "name": "汉阴",
        "father": 436,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "hanyin",

        "postfix": "县"
    },
    {
        "id": 3011,
        "name": "石泉",
        "father": 436,
        "key": "s",
        "abbreviation": "sq",
        "pinyin": "shiquan",

        "postfix": "县"
    },
    {
        "id": 3012,
        "name": "宁陕",
        "father": 436,
        "key": "n",
        "abbreviation": "ns",
        "pinyin": "ningshan",

        "postfix": "县"
    },
    {
        "id": 3013,
        "name": "紫阳",
        "father": 436,
        "key": "z",
        "abbreviation": "zy",
        "pinyin": "ziyang",

        "postfix": "县"
    },
    {
        "id": 3014,
        "name": "岚皋",
        "father": 436,
        "key": "l",
        "abbreviation": "lg",
        "pinyin": "langao",

        "postfix": "县"
    },
    {
        "id": 3015,
        "name": "平利",
        "father": 436,
        "key": "p",
        "abbreviation": "pl",
        "pinyin": "pingli",

        "postfix": "县"
    },
    {
        "id": 3016,
        "name": "镇坪",
        "father": 436,
        "key": "z",
        "abbreviation": "zp",
        "pinyin": "zhenping",

        "postfix": "县"
    },
    {
        "id": 3017,
        "name": "旬阳",
        "father": 436,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xunyang",

        "postfix": "县"
    },
    {
        "id": 3018,
        "name": "白河",
        "father": 436,
        "key": "b",
        "abbreviation": "bh",
        "pinyin": "baihe",

        "postfix": "县"
    },
    {
        "id": 3019,
        "name": "商州",
        "father": 437,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "shangzhou",

        "postfix": "区"
    },
    {
        "id": 3020,
        "name": "洛南",
        "father": 437,
        "key": "l",
        "abbreviation": "ln",
        "pinyin": "luonan",

        "postfix": "县"
    },
    {
        "id": 3021,
        "name": "丹凤",
        "father": 437,
        "key": "d",
        "abbreviation": "df",
        "pinyin": "danfeng",

        "postfix": "县"
    },
    {
        "id": 3022,
        "name": "商南",
        "father": 437,
        "key": "s",
        "abbreviation": "sn",
        "pinyin": "shangnan",

        "postfix": "县"
    },
    {
        "id": 3023,
        "name": "山阳",
        "father": 437,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "shanyang",

        "postfix": "县"
    },
    {
        "id": 3024,
        "name": "镇安",
        "father": 437,
        "key": "z",
        "abbreviation": "za",
        "pinyin": "zhenan",

        "postfix": "县"
    },
    {
        "id": 3025,
        "name": "柞水",
        "father": 437,
        "key": "z",
        "abbreviation": "zs",
        "pinyin": "zuoshui",

        "postfix": "县"
    },
    {
        "id": 3026,
        "name": "城关",
        "father": 438,
        "key": "c",
        "abbreviation": "cg",
        "pinyin": "chengguan",

        "postfix": "区"
    },
    {
        "id": 3027,
        "name": "七里河",
        "father": 438,
        "key": "q",
        "abbreviation": "qlh",
        "pinyin": "qilihe",

        "postfix": "区"
    },
    {
        "id": 3028,
        "name": "西固",
        "father": 438,
        "key": "x",
        "abbreviation": "xg",
        "pinyin": "xigu",

        "postfix": "区"
    },
    {
        "id": 3029,
        "name": "安宁",
        "father": 438,
        "key": "a",
        "abbreviation": "an",
        "pinyin": "anning",

        "postfix": "区"
    },
    {
        "id": 3030,
        "name": "红古",
        "father": 438,
        "key": "h",
        "abbreviation": "hg",
        "pinyin": "honggu",

        "postfix": "区"
    },
    {
        "id": 3031,
        "name": "永登",
        "father": 438,
        "key": "y",
        "abbreviation": "yd",
        "pinyin": "yongdeng",

        "postfix": "县"
    },
    {
        "id": 3032,
        "name": "皋兰",
        "father": 438,
        "key": "g",
        "abbreviation": "gl",
        "pinyin": "gaolan",

        "postfix": "县"
    },
    {
        "id": 3033,
        "name": "榆中",
        "father": 438,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yuzhong",

        "postfix": "县"
    },
    {
        "id": 3034,
        "name": "镜铁",
        "father": 439,
        "key": "j",
        "abbreviation": "jt",
        "pinyin": "jingtie",

        "postfix": "区"
    },
    {
        "id": 3035,
        "name": "长城",
        "father": 439,
        "key": "c",
        "abbreviation": "cc",
        "pinyin": "changcheng",

        "postfix": "区"
    },
    {
        "id": 3036,
        "name": "雄关",
        "father": 439,
        "key": "x",
        "abbreviation": "xg",
        "pinyin": "xiongguan",

        "postfix": "区"
    },
    {
        "id": 3037,
        "name": "金川",
        "father": 440,
        "key": "j",
        "abbreviation": "jc",
        "pinyin": "jinchuan",

        "postfix": "区"
    },
    {
        "id": 3038,
        "name": "永昌",
        "father": 440,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yongchang",

        "postfix": "县"
    },
    {
        "id": 3039,
        "name": "白银",
        "father": 441,
        "key": "b",
        "abbreviation": "by",
        "pinyin": "baiyin",

        "postfix": "区"
    },
    {
        "id": 3040,
        "name": "平川",
        "father": 441,
        "key": "p",
        "abbreviation": "pc",
        "pinyin": "pingchuan",

        "postfix": "区"
    },
    {
        "id": 3041,
        "name": "靖远",
        "father": 441,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jingyuan",

        "postfix": "县"
    },
    {
        "id": 3042,
        "name": "会宁",
        "father": 441,
        "key": "h",
        "abbreviation": "hn",
        "pinyin": "huining",

        "postfix": "县"
    },
    {
        "id": 3043,
        "name": "景泰",
        "father": 441,
        "key": "j",
        "abbreviation": "jt",
        "pinyin": "jingtai",

        "postfix": "县"
    },
    {
        "id": 3044,
        "name": "秦州",
        "father": 442,
        "key": "q",
        "abbreviation": "qz",
        "pinyin": "qinzhou",

        "postfix": "区"
    },
    {
        "id": 3045,
        "name": "麦积",
        "father": 442,
        "key": "m",
        "abbreviation": "mj",
        "pinyin": "maiji",

        "postfix": "区"
    },
    {
        "id": 3046,
        "name": "清水",
        "father": 442,
        "key": "q",
        "abbreviation": "qs",
        "pinyin": "qingshui",

        "postfix": "县"
    },
    {
        "id": 3047,
        "name": "秦安",
        "father": 442,
        "key": "q",
        "abbreviation": "qa",
        "pinyin": "qinan",

        "postfix": "县"
    },
    {
        "id": 3048,
        "name": "甘谷",
        "father": 442,
        "key": "g",
        "abbreviation": "gg",
        "pinyin": "gangu",

        "postfix": "县"
    },
    {
        "id": 3049,
        "name": "武山",
        "father": 442,
        "key": "w",
        "abbreviation": "ws",
        "pinyin": "wushan",

        "postfix": "县"
    },
    {
        "id": 3050,
        "name": "张家川",
        "father": 442,
        "key": "z",
        "abbreviation": "zjc",
        "pinyin": "zhangjiachuan",
        "": "回族",
        "postfix": "自治县"
    },
    {
        "id": 3051,
        "name": "凉州",
        "father": 443,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "liangzhou",

        "postfix": "区"
    },
    {
        "id": 3052,
        "name": "民勤",
        "father": 443,
        "key": "m",
        "abbreviation": "mq",
        "pinyin": "minqin",

        "postfix": "县"
    },
    {
        "id": 3053,
        "name": "古浪",
        "father": 443,
        "key": "g",
        "abbreviation": "gl",
        "pinyin": "gulang",

        "postfix": "县"
    },
    {
        "id": 3054,
        "name": "天祝",
        "father": 443,
        "key": "t",
        "abbreviation": "tz",
        "pinyin": "tianzhu",
        "": "藏族",
        "postfix": "自治县"
    },
    {
        "id": 3055,
        "name": "甘州",
        "father": 444,
        "key": "g",
        "abbreviation": "gz",
        "pinyin": "ganzhou",

        "postfix": "区"
    },
    {
        "id": 3056,
        "name": "肃南",
        "father": 444,
        "key": "s",
        "abbreviation": "sn",
        "pinyin": "sunan",
        "": "裕固族",
        "postfix": "自治县"
    },
    {
        "id": 3057,
        "name": "民乐",
        "father": 444,
        "key": "m",
        "abbreviation": "ml",
        "pinyin": "minle",

        "postfix": "县"
    },
    {
        "id": 3058,
        "name": "临泽",
        "father": 444,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "linze",

        "postfix": "县"
    },
    {
        "id": 3059,
        "name": "高台",
        "father": 444,
        "key": "g",
        "abbreviation": "gt",
        "pinyin": "gaotai",

        "postfix": "县"
    },
    {
        "id": 3060,
        "name": "山丹",
        "father": 444,
        "key": "s",
        "abbreviation": "sd",
        "pinyin": "shandan",

        "postfix": "县"
    },
    {
        "id": 3061,
        "name": "崆峒",
        "father": 445,
        "key": "k",
        "abbreviation": "kt",
        "pinyin": "kongtong",

        "postfix": "区"
    },
    {
        "id": 3062,
        "name": "泾川",
        "father": 445,
        "key": "j",
        "abbreviation": "jc",
        "pinyin": "jingchuan",

        "postfix": "县"
    },
    {
        "id": 3063,
        "name": "灵台",
        "father": 445,
        "key": "l",
        "abbreviation": "lt",
        "pinyin": "lingtai",

        "postfix": "县"
    },
    {
        "id": 3064,
        "name": "崇信",
        "father": 445,
        "key": "c",
        "abbreviation": "cx",
        "pinyin": "chongxin",

        "postfix": "县"
    },
    {
        "id": 3065,
        "name": "华亭",
        "father": 445,
        "key": "h",
        "abbreviation": "ht",
        "pinyin": "huating",

        "postfix": "市"
    },
    {
        "id": 3066,
        "name": "庄浪",
        "father": 445,
        "key": "z",
        "abbreviation": "zl",
        "pinyin": "zhuanglang",

        "postfix": "县"
    },
    {
        "id": 3067,
        "name": "静宁",
        "father": 445,
        "key": "j",
        "abbreviation": "jn",
        "pinyin": "jingning",

        "postfix": "县"
    },
    {
        "id": 3068,
        "name": "肃州",
        "father": 446,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "suzhou",

        "postfix": "区"
    },
    {
        "id": 3069,
        "name": "金塔",
        "father": 446,
        "key": "j",
        "abbreviation": "jt",
        "pinyin": "jinta",

        "postfix": "县"
    },
    {
        "id": 3070,
        "name": "瓜州",
        "father": 446,
        "key": "g",
        "abbreviation": "gz",
        "pinyin": "guazhou",

        "postfix": "县"
    },
    {
        "id": 3071,
        "name": "肃北",
        "father": 446,
        "key": "s",
        "abbreviation": "sb",
        "pinyin": "subei",
        "": "蒙古族",
        "postfix": "自治县"
    },
    {
        "id": 3072,
        "name": "阿克塞",
        "father": 446,
        "key": "a",
        "abbreviation": "aks",
        "pinyin": "akesai",
        "": "哈萨克族",
        "postfix": "自治县"
    },
    {
        "id": 3073,
        "name": "玉门",
        "father": 446,
        "key": "y",
        "abbreviation": "ym",
        "pinyin": "yumen",

        "postfix": "市"
    },
    {
        "id": 3074,
        "name": "敦煌",
        "father": 446,
        "key": "d",
        "abbreviation": "dh",
        "pinyin": "dunhuang",

        "postfix": "市"
    },
    {
        "id": 3075,
        "name": "西峰",
        "father": 447,
        "key": "x",
        "abbreviation": "xf",
        "pinyin": "xifeng",

        "postfix": "区"
    },
    {
        "id": 3076,
        "name": "庆城",
        "father": 447,
        "key": "q",
        "abbreviation": "qc",
        "pinyin": "qingcheng",

        "postfix": "县"
    },
    {
        "id": 3077,
        "name": "环县",
        "father": 447,
        "key": "h",
        "abbreviation": "hx",
        "pinyin": "huanxian",

        "postfix": ""
    },
    {
        "id": 3078,
        "name": "华池",
        "father": 447,
        "key": "h",
        "abbreviation": "hc",
        "pinyin": "huachi",

        "postfix": "县"
    },
    {
        "id": 3079,
        "name": "合水",
        "father": 447,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "heshui",

        "postfix": "县"
    },
    {
        "id": 3080,
        "name": "正宁",
        "father": 447,
        "key": "z",
        "abbreviation": "zn",
        "pinyin": "zhengning",

        "postfix": "县"
    },
    {
        "id": 3081,
        "name": "宁县",
        "father": 447,
        "key": "n",
        "abbreviation": "nx",
        "pinyin": "ningxian",

        "postfix": ""
    },
    {
        "id": 3082,
        "name": "镇原",
        "father": 447,
        "key": "z",
        "abbreviation": "zy",
        "pinyin": "zhenyuan",

        "postfix": "县"
    },
    {
        "id": 3083,
        "name": "安定",
        "father": 448,
        "key": "a",
        "abbreviation": "ad",
        "pinyin": "anding",

        "postfix": "区"
    },
    {
        "id": 3084,
        "name": "通渭",
        "father": 448,
        "key": "t",
        "abbreviation": "tw",
        "pinyin": "tongwei",

        "postfix": "县"
    },
    {
        "id": 3085,
        "name": "陇西",
        "father": 448,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "longxi",

        "postfix": "县"
    },
    {
        "id": 3086,
        "name": "渭源",
        "father": 448,
        "key": "w",
        "abbreviation": "wy",
        "pinyin": "weiyuan",

        "postfix": "县"
    },
    {
        "id": 3087,
        "name": "临洮",
        "father": 448,
        "key": "l",
        "abbreviation": "lt",
        "pinyin": "lintao",

        "postfix": "县"
    },
    {
        "id": 3088,
        "name": "漳县",
        "father": 448,
        "key": "z",
        "abbreviation": "zx",
        "pinyin": "zhangxian",

        "postfix": ""
    },
    {
        "id": 3089,
        "name": "岷县",
        "father": 448,
        "key": "m",
        "abbreviation": "mx",
        "pinyin": "minxian",

        "postfix": ""
    },
    {
        "id": 3090,
        "name": "武都",
        "father": 449,
        "key": "w",
        "abbreviation": "wd",
        "pinyin": "wudu",

        "postfix": "区"
    },
    {
        "id": 3091,
        "name": "成县",
        "father": 449,
        "key": "c",
        "abbreviation": "cx",
        "pinyin": "chengxian",

        "postfix": ""
    },
    {
        "id": 3092,
        "name": "文县",
        "father": 449,
        "key": "w",
        "abbreviation": "wx",
        "pinyin": "wenxian",

        "postfix": ""
    },
    {
        "id": 3093,
        "name": "宕昌",
        "father": 449,
        "key": "d",
        "abbreviation": "dc",
        "pinyin": "dangchang",

        "postfix": "县"
    },
    {
        "id": 3094,
        "name": "康县",
        "father": 449,
        "key": "k",
        "abbreviation": "kx",
        "pinyin": "kangxian",

        "postfix": ""
    },
    {
        "id": 3095,
        "name": "西和",
        "father": 449,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xihe",

        "postfix": "县"
    },
    {
        "id": 3096,
        "name": "礼县",
        "father": 449,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "lixian",

        "postfix": ""
    },
    {
        "id": 3097,
        "name": "徽县",
        "father": 449,
        "key": "h",
        "abbreviation": "hx",
        "pinyin": "huixian",

        "postfix": ""
    },
    {
        "id": 3098,
        "name": "两当",
        "father": 449,
        "key": "l",
        "abbreviation": "ld",
        "pinyin": "liangdang",

        "postfix": "县"
    },
    {
        "id": 3099,
        "name": "临夏",
        "father": 450,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "linxia",

        "postfix": "市"
    },
    {
        "id": 3100,
        "name": "临夏",
        "father": 450,
        "key": "l",
        "abbreviation": "lx",
        "pinyin": "linxia",

        "postfix": "县"
    },
    {
        "id": 3101,
        "name": "康乐",
        "father": 450,
        "key": "k",
        "abbreviation": "kl",
        "pinyin": "kangle",

        "postfix": "县"
    },
    {
        "id": 3102,
        "name": "永靖",
        "father": 450,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "yongjing",

        "postfix": "县"
    },
    {
        "id": 3103,
        "name": "广河",
        "father": 450,
        "key": "g",
        "abbreviation": "gh",
        "pinyin": "guanghe",

        "postfix": "县"
    },
    {
        "id": 3104,
        "name": "和政",
        "father": 450,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "hezheng",

        "postfix": "县"
    },
    {
        "id": 3105,
        "name": "东乡族",
        "father": 450,
        "key": "d",
        "abbreviation": "dxz",
        "pinyin": "dongxiangzu",

        "postfix": "自治县"
    },
    {
        "id": 3106,
        "name": "积石山",
        "father": 450,
        "key": "j",
        "abbreviation": "jss",
        "pinyin": "jishishan",
        "": "保安族东乡族撒拉族",
        "postfix": "自治县"
    },
    {
        "id": 3107,
        "name": "合作",
        "father": 451,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "hezuo",

        "postfix": "市"
    },
    {
        "id": 3108,
        "name": "临潭",
        "father": 451,
        "key": "l",
        "abbreviation": "lt",
        "pinyin": "lintan",

        "postfix": "县"
    },
    {
        "id": 3109,
        "name": "卓尼",
        "father": 451,
        "key": "z",
        "abbreviation": "zn",
        "pinyin": "zhuoni",

        "postfix": "县"
    },
    {
        "id": 3110,
        "name": "舟曲",
        "father": 451,
        "key": "z",
        "abbreviation": "zq",
        "pinyin": "zhouqu",

        "postfix": "县"
    },
    {
        "id": 3111,
        "name": "迭部",
        "father": 451,
        "key": "d",
        "abbreviation": "db",
        "pinyin": "diebu",

        "postfix": "县"
    },
    {
        "id": 3112,
        "name": "玛曲",
        "father": 451,
        "key": "m",
        "abbreviation": "mq",
        "pinyin": "maqu",

        "postfix": "县"
    },
    {
        "id": 3113,
        "name": "碌曲",
        "father": 451,
        "key": "l",
        "abbreviation": "lq",
        "pinyin": "liuqu",

        "postfix": "县"
    },
    {
        "id": 3114,
        "name": "夏河",
        "father": 451,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xiahe",

        "postfix": "县"
    },
    {
        "id": 3115,
        "name": "城东",
        "father": 452,
        "key": "c",
        "abbreviation": "cd",
        "pinyin": "chengdong",

        "postfix": "区"
    },
    {
        "id": 3116,
        "name": "城中",
        "father": 452,
        "key": "c",
        "abbreviation": "cz",
        "pinyin": "chengzhong",

        "postfix": "区"
    },
    {
        "id": 3117,
        "name": "城西",
        "father": 452,
        "key": "c",
        "abbreviation": "cx",
        "pinyin": "chengxi",

        "postfix": "区"
    },
    {
        "id": 3118,
        "name": "城北",
        "father": 452,
        "key": "c",
        "abbreviation": "cb",
        "pinyin": "chengbei",

        "postfix": "区"
    },
    {
        "id": 3119,
        "name": "大通",
        "father": 452,
        "key": "d",
        "abbreviation": "dt",
        "pinyin": "datong",
        "": "回族土族",
        "postfix": "自治县"
    },
    {
        "id": 3120,
        "name": "湟中",
        "father": 452,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "huangzhong",

        "postfix": "县"
    },
    {
        "id": 3121,
        "name": "湟源",
        "father": 452,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "huangyuan",

        "postfix": "县"
    },
    {
        "id": 3122,
        "name": "乐都",
        "father": 453,
        "key": "l",
        "abbreviation": "ld",
        "pinyin": "ledu",

        "postfix": "区"
    },
    {
        "id": 3123,
        "name": "平安",
        "father": 453,
        "key": "p",
        "abbreviation": "pa",
        "pinyin": "pingan",

        "postfix": "区"
    },
    {
        "id": 3124,
        "name": "民和",
        "father": 453,
        "key": "m",
        "abbreviation": "mh",
        "pinyin": "minhe",
        "": "回族土族",
        "postfix": "自治县"
    },
    {
        "id": 3125,
        "name": "互助",
        "father": 453,
        "key": "h",
        "abbreviation": "hz",
        "pinyin": "huzhu",
        "": "土族",
        "postfix": "自治县"
    },
    {
        "id": 3126,
        "name": "化隆",
        "father": 453,
        "key": "h",
        "abbreviation": "hl",
        "pinyin": "hualong",
        "": "回族",
        "postfix": "自治县"
    },
    {
        "id": 3127,
        "name": "循化",
        "father": 453,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xunhua",
        "": "撒拉族",
        "postfix": "自治县"
    },
    {
        "id": 3128,
        "name": "门源",
        "father": 454,
        "key": "m",
        "abbreviation": "my",
        "pinyin": "menyuan",
        "": "回族",
        "postfix": "自治县"
    },
    {
        "id": 3129,
        "name": "祁连",
        "father": 454,
        "key": "q",
        "abbreviation": "ql",
        "pinyin": "qilian",

        "postfix": "县"
    },
    {
        "id": 3130,
        "name": "海晏",
        "father": 454,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "haiyan",

        "postfix": "县"
    },
    {
        "id": 3131,
        "name": "刚察",
        "father": 454,
        "key": "g",
        "abbreviation": "gc",
        "pinyin": "gangcha",

        "postfix": "县"
    },
    {
        "id": 3132,
        "name": "同仁",
        "father": 455,
        "key": "t",
        "abbreviation": "tr",
        "pinyin": "tongren",

        "postfix": "县"
    },
    {
        "id": 3133,
        "name": "尖扎",
        "father": 455,
        "key": "j",
        "abbreviation": "jz",
        "pinyin": "jianzha",

        "postfix": "县"
    },
    {
        "id": 3134,
        "name": "泽库",
        "father": 455,
        "key": "z",
        "abbreviation": "zk",
        "pinyin": "zeku",

        "postfix": "县"
    },
    {
        "id": 3135,
        "name": "河南",
        "father": 455,
        "key": "h",
        "abbreviation": "hn",
        "pinyin": "henan",
        "": "蒙古族",
        "postfix": "自治县"
    },
    {
        "id": 3136,
        "name": "共和",
        "father": 456,
        "key": "g",
        "abbreviation": "gh",
        "pinyin": "gonghe",

        "postfix": "县"
    },
    {
        "id": 3137,
        "name": "同德",
        "father": 456,
        "key": "t",
        "abbreviation": "td",
        "pinyin": "tongde",

        "postfix": "县"
    },
    {
        "id": 3138,
        "name": "贵德",
        "father": 456,
        "key": "g",
        "abbreviation": "gd",
        "pinyin": "guide",

        "postfix": "县"
    },
    {
        "id": 3139,
        "name": "兴海",
        "father": 456,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xinghai",

        "postfix": "县"
    },
    {
        "id": 3140,
        "name": "贵南",
        "father": 456,
        "key": "g",
        "abbreviation": "gn",
        "pinyin": "guinan",

        "postfix": "县"
    },
    {
        "id": 3141,
        "name": "玛沁",
        "father": 457,
        "key": "m",
        "abbreviation": "mq",
        "pinyin": "maqin",

        "postfix": "县"
    },
    {
        "id": 3142,
        "name": "班玛",
        "father": 457,
        "key": "b",
        "abbreviation": "bm",
        "pinyin": "banma",

        "postfix": "县"
    },
    {
        "id": 3143,
        "name": "甘德",
        "father": 457,
        "key": "g",
        "abbreviation": "gd",
        "pinyin": "gande",

        "postfix": "县"
    },
    {
        "id": 3144,
        "name": "达日",
        "father": 457,
        "key": "d",
        "abbreviation": "dr",
        "pinyin": "dari",

        "postfix": "县"
    },
    {
        "id": 3145,
        "name": "久治",
        "father": 457,
        "key": "j",
        "abbreviation": "jz",
        "pinyin": "jiuzhi",

        "postfix": "县"
    },
    {
        "id": 3146,
        "name": "玛多",
        "father": 457,
        "key": "m",
        "abbreviation": "md",
        "pinyin": "maduo",

        "postfix": "县"
    },
    {
        "id": 3147,
        "name": "玉树",
        "father": 458,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yushu",

        "postfix": "市"
    },
    {
        "id": 3148,
        "name": "杂多",
        "father": 458,
        "key": "z",
        "abbreviation": "zd",
        "pinyin": "zaduo",

        "postfix": "县"
    },
    {
        "id": 3149,
        "name": "治多",
        "father": 458,
        "key": "z",
        "abbreviation": "zd",
        "pinyin": "zhiduo",

        "postfix": "县"
    },
    {
        "id": 3150,
        "name": "囊谦",
        "father": 458,
        "key": "n",
        "abbreviation": "nq",
        "pinyin": "nangqian",

        "postfix": "县"
    },
    {
        "id": 3151,
        "name": "曲麻莱",
        "father": 458,
        "key": "q",
        "abbreviation": "qml",
        "pinyin": "qumalai",

        "postfix": "县"
    },
    {
        "id": 3154,
        "name": "茫崖",
        "father": 459,
        "key": "m",
        "abbreviation": "my",
        "pinyin": "mangya",

        "postfix": "市"
    },
    {
        "id": 3155,
        "name": "格尔木",
        "father": 459,
        "key": "g",
        "abbreviation": "gem",
        "pinyin": "geermu",

        "postfix": "市"
    },
    {
        "id": 3156,
        "name": "德令哈",
        "father": 459,
        "key": "d",
        "abbreviation": "dlh",
        "pinyin": "delingha",

        "postfix": "市"
    },
    {
        "id": 3157,
        "name": "乌兰",
        "father": 459,
        "key": "w",
        "abbreviation": "wl",
        "pinyin": "wulan",

        "postfix": "县"
    },
    {
        "id": 3158,
        "name": "都兰",
        "father": 459,
        "key": "d",
        "abbreviation": "dl",
        "pinyin": "dulan",

        "postfix": "县"
    },
    {
        "id": 3159,
        "name": "天峻",
        "father": 459,
        "key": "t",
        "abbreviation": "tj",
        "pinyin": "tianjun",

        "postfix": "县"
    },
    {
        "id": 3160,
        "name": "兴庆",
        "father": 460,
        "key": "x",
        "abbreviation": "xq",
        "pinyin": "xingqing",

        "postfix": "区"
    },
    {
        "id": 3161,
        "name": "西夏",
        "father": 460,
        "key": "x",
        "abbreviation": "xx",
        "pinyin": "xixia",

        "postfix": "区"
    },
    {
        "id": 3162,
        "name": "金凤",
        "father": 460,
        "key": "j",
        "abbreviation": "jf",
        "pinyin": "jinfeng",

        "postfix": "区"
    },
    {
        "id": 3163,
        "name": "永宁",
        "father": 460,
        "key": "y",
        "abbreviation": "yn",
        "pinyin": "yongning",

        "postfix": "县"
    },
    {
        "id": 3164,
        "name": "贺兰",
        "father": 460,
        "key": "h",
        "abbreviation": "hl",
        "pinyin": "helan",

        "postfix": "县"
    },
    {
        "id": 3165,
        "name": "灵武",
        "father": 460,
        "key": "l",
        "abbreviation": "lw",
        "pinyin": "lingwu",

        "postfix": "市"
    },
    {
        "id": 3166,
        "name": "大武口",
        "father": 461,
        "key": "d",
        "abbreviation": "dwk",
        "pinyin": "dawukou",

        "postfix": "区"
    },
    {
        "id": 3167,
        "name": "惠农",
        "father": 461,
        "key": "h",
        "abbreviation": "hn",
        "pinyin": "huinong",

        "postfix": "区"
    },
    {
        "id": 3168,
        "name": "平罗",
        "father": 461,
        "key": "p",
        "abbreviation": "pl",
        "pinyin": "pingluo",

        "postfix": "县"
    },
    {
        "id": 3169,
        "name": "红寺堡",
        "father": 462,
        "key": "h",
        "abbreviation": "hsb",
        "pinyin": "hongsibao",

        "postfix": "区"
    },
    {
        "id": 3170,
        "name": "利通",
        "father": 462,
        "key": "l",
        "abbreviation": "lt",
        "pinyin": "litong",

        "postfix": "区"
    },
    {
        "id": 3171,
        "name": "盐池",
        "father": 462,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yanchi",

        "postfix": "县"
    },
    {
        "id": 3172,
        "name": "同心",
        "father": 462,
        "key": "t",
        "abbreviation": "tx",
        "pinyin": "tongxin",

        "postfix": "县"
    },
    {
        "id": 3173,
        "name": "青铜峡",
        "father": 462,
        "key": "q",
        "abbreviation": "qtx",
        "pinyin": "qingtongxia",

        "postfix": "市"
    },
    {
        "id": 3174,
        "name": "原州",
        "father": 463,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yuanzhou",

        "postfix": "区"
    },
    {
        "id": 3175,
        "name": "西吉",
        "father": 463,
        "key": "x",
        "abbreviation": "xj",
        "pinyin": "xiji",

        "postfix": "县"
    },
    {
        "id": 3176,
        "name": "隆德",
        "father": 463,
        "key": "l",
        "abbreviation": "ld",
        "pinyin": "longde",

        "postfix": "县"
    },
    {
        "id": 3177,
        "name": "泾源",
        "father": 463,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jingyuan",

        "postfix": "县"
    },
    {
        "id": 3178,
        "name": "彭阳",
        "father": 463,
        "key": "p",
        "abbreviation": "py",
        "pinyin": "pengyang",

        "postfix": "县"
    },
    {
        "id": 3179,
        "name": "沙坡头",
        "father": 464,
        "key": "s",
        "abbreviation": "spt",
        "pinyin": "shapotou",

        "postfix": "区"
    },
    {
        "id": 3180,
        "name": "中宁",
        "father": 464,
        "key": "z",
        "abbreviation": "zn",
        "pinyin": "zhongning",

        "postfix": "县"
    },
    {
        "id": 3181,
        "name": "海原",
        "father": 464,
        "key": "h",
        "abbreviation": "hy",
        "pinyin": "haiyuan",

        "postfix": "县"
    },
    {
        "id": 3182,
        "name": "天山",
        "father": 465,
        "key": "t",
        "abbreviation": "ts",
        "pinyin": "tianshan",

        "postfix": "区"
    },
    {
        "id": 3183,
        "name": "沙依巴克",
        "father": 465,
        "key": "s",
        "abbreviation": "sybk",
        "pinyin": "shayibake",

        "postfix": "区"
    },
    {
        "id": 3184,
        "name": "新市",
        "father": 465,
        "key": "x",
        "abbreviation": "xs",
        "pinyin": "xinshi",

        "postfix": "区"
    },
    {
        "id": 3185,
        "name": "水磨沟",
        "father": 465,
        "key": "s",
        "abbreviation": "smg",
        "pinyin": "shuimogou",

        "postfix": "区"
    },
    {
        "id": 3186,
        "name": "头屯河",
        "father": 465,
        "key": "t",
        "abbreviation": "tth",
        "pinyin": "toutunhe",

        "postfix": "区"
    },
    {
        "id": 3187,
        "name": "达坂城",
        "father": 465,
        "key": "d",
        "abbreviation": "dbc",
        "pinyin": "dabancheng",

        "postfix": "区"
    },
    {
        "id": 3188,
        "name": "米东",
        "father": 465,
        "key": "m",
        "abbreviation": "md",
        "pinyin": "midong",

        "postfix": "区"
    },
    {
        "id": 3189,
        "name": "乌鲁木齐",
        "father": 465,
        "key": "w",
        "abbreviation": "wlmq",
        "pinyin": "wulumuqi",

        "postfix": "县"
    },
    {
        "id": 3190,
        "name": "独山子",
        "father": 466,
        "key": "d",
        "abbreviation": "dsz",
        "pinyin": "dushanzi",

        "postfix": "区"
    },
    {
        "id": 3191,
        "name": "克拉玛依",
        "father": 466,
        "key": "k",
        "abbreviation": "klmy",
        "pinyin": "kelamayi",

        "postfix": "区"
    },
    {
        "id": 3192,
        "name": "白碱滩",
        "father": 466,
        "key": "b",
        "abbreviation": "bjt",
        "pinyin": "baijiantan",

        "postfix": "区"
    },
    {
        "id": 3193,
        "name": "乌尔禾",
        "father": 466,
        "key": "w",
        "abbreviation": "weh",
        "pinyin": "wuerhe",

        "postfix": "区"
    },
    {
        "id": 3194,
        "name": "高昌",
        "father": 467,
        "key": "g",
        "abbreviation": "gc",
        "pinyin": "gaochang",

        "postfix": "区"
    },
    {
        "id": 3195,
        "name": "鄯善",
        "father": 467,
        "key": "s",
        "abbreviation": "ss",
        "pinyin": "shanshan",

        "postfix": "县"
    },
    {
        "id": 3196,
        "name": "托克逊",
        "father": 467,
        "key": "t",
        "abbreviation": "tkx",
        "pinyin": "tuokexun",

        "postfix": "县"
    },
    {
        "id": 3197,
        "name": "伊州",
        "father": 468,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yizhou",

        "postfix": "区"
    },
    {
        "id": 3198,
        "name": "巴里坤",
        "father": 468,
        "key": "b",
        "abbreviation": "blk",
        "pinyin": "balikun",
        "": "哈萨克",
        "postfix": "自治县"
    },
    {
        "id": 3199,
        "name": "伊吾",
        "father": 468,
        "key": "y",
        "abbreviation": "yw",
        "pinyin": "yiwu",

        "postfix": "县"
    },
    {
        "id": 3200,
        "name": "昌吉",
        "father": 469,
        "key": "c",
        "abbreviation": "cj",
        "pinyin": "changji",

        "postfix": "市"
    },
    {
        "id": 3201,
        "name": "阜康",
        "father": 469,
        "key": "f",
        "abbreviation": "fk",
        "pinyin": "fukang",

        "postfix": "市"
    },
    {
        "id": 3202,
        "name": "呼图壁",
        "father": 469,
        "key": "h",
        "abbreviation": "htb",
        "pinyin": "hutubi",

        "postfix": "县"
    },
    {
        "id": 3203,
        "name": "玛纳斯",
        "father": 469,
        "key": "m",
        "abbreviation": "mns",
        "pinyin": "manasi",

        "postfix": "县"
    },
    {
        "id": 3204,
        "name": "奇台",
        "father": 469,
        "key": "q",
        "abbreviation": "qt",
        "pinyin": "qitai",

        "postfix": "县"
    },
    {
        "id": 3205,
        "name": "吉木萨尔",
        "father": 469,
        "key": "j",
        "abbreviation": "jmse",
        "pinyin": "jimusaer",

        "postfix": "县"
    },
    {
        "id": 3206,
        "name": "木垒",
        "father": 469,
        "key": "m",
        "abbreviation": "ml",
        "pinyin": "mulei",
        "": "哈萨克",
        "postfix": "自治县"
    },
    {
        "id": 3207,
        "name": "阿拉山口",
        "father": 470,
        "key": "a",
        "abbreviation": "alsk",
        "pinyin": "alashankou",

        "postfix": "市"
    },
    {
        "id": 3208,
        "name": "博乐",
        "father": 470,
        "key": "b",
        "abbreviation": "bl",
        "pinyin": "bole",

        "postfix": "市"
    },
    {
        "id": 3209,
        "name": "精河",
        "father": 470,
        "key": "j",
        "abbreviation": "jh",
        "pinyin": "jinghe",

        "postfix": "县"
    },
    {
        "id": 3210,
        "name": "温泉",
        "father": 470,
        "key": "w",
        "abbreviation": "wq",
        "pinyin": "wenquan",

        "postfix": "县"
    },
    {
        "id": 3211,
        "name": "库尔勒",
        "father": 471,
        "key": "k",
        "abbreviation": "kel",
        "pinyin": "kuerle",

        "postfix": "市"
    },
    {
        "id": 3212,
        "name": "轮台",
        "father": 471,
        "key": "l",
        "abbreviation": "lt",
        "pinyin": "luntai",

        "postfix": "县"
    },
    {
        "id": 3213,
        "name": "尉犁",
        "father": 471,
        "key": "w",
        "abbreviation": "wl",
        "pinyin": "weili",

        "postfix": "县"
    },
    {
        "id": 3214,
        "name": "若羌",
        "father": 471,
        "key": "r",
        "abbreviation": "rq",
        "pinyin": "ruoqiang",

        "postfix": "县"
    },
    {
        "id": 3215,
        "name": "且末",
        "father": 471,
        "key": "q",
        "abbreviation": "qm",
        "pinyin": "qiemo",

        "postfix": "县"
    },
    {
        "id": 3216,
        "name": "焉耆",
        "father": 471,
        "key": "y",
        "abbreviation": "yq",
        "pinyin": "yanqi",
        "": "回族",
        "postfix": "自治县"
    },
    {
        "id": 3217,
        "name": "和静",
        "father": 471,
        "key": "h",
        "abbreviation": "hj",
        "pinyin": "hejing",

        "postfix": "县"
    },
    {
        "id": 3218,
        "name": "和硕",
        "father": 471,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "heshuo",

        "postfix": "县"
    },
    {
        "id": 3219,
        "name": "博湖",
        "father": 471,
        "key": "b",
        "abbreviation": "bh",
        "pinyin": "bohu",

        "postfix": "县"
    },
    {
        "id": 3220,
        "name": "阿克苏",
        "father": 472,
        "key": "a",
        "abbreviation": "aks",
        "pinyin": "akesu",

        "postfix": "市"
    },
    {
        "id": 3221,
        "name": "温宿",
        "father": 472,
        "key": "w",
        "abbreviation": "ws",
        "pinyin": "wensu",

        "postfix": "县"
    },
    {
        "id": 3222,
        "name": "库车",
        "father": 472,
        "key": "k",
        "abbreviation": "kc",
        "pinyin": "kuche",

        "postfix": "县"
    },
    {
        "id": 3223,
        "name": "沙雅",
        "father": 472,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "shaya",

        "postfix": "县"
    },
    {
        "id": 3224,
        "name": "新和",
        "father": 472,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xinhe",

        "postfix": "县"
    },
    {
        "id": 3225,
        "name": "拜城",
        "father": 472,
        "key": "b",
        "abbreviation": "bc",
        "pinyin": "baicheng",

        "postfix": "县"
    },
    {
        "id": 3226,
        "name": "乌什",
        "father": 472,
        "key": "w",
        "abbreviation": "ws",
        "pinyin": "wushen",

        "postfix": "县"
    },
    {
        "id": 3227,
        "name": "阿瓦提",
        "father": 472,
        "key": "a",
        "abbreviation": "awt",
        "pinyin": "awati",

        "postfix": "县"
    },
    {
        "id": 3228,
        "name": "柯坪",
        "father": 472,
        "key": "k",
        "abbreviation": "kp",
        "pinyin": "keping",

        "postfix": "县"
    },
    {
        "id": 3229,
        "name": "阿图什",
        "father": 473,
        "key": "a",
        "abbreviation": "ats",
        "pinyin": "atushen",

        "postfix": "市"
    },
    {
        "id": 3230,
        "name": "阿克陶",
        "father": 473,
        "key": "a",
        "abbreviation": "akt",
        "pinyin": "aketao",

        "postfix": "县"
    },
    {
        "id": 3231,
        "name": "阿合奇",
        "father": 473,
        "key": "a",
        "abbreviation": "ahq",
        "pinyin": "aheqi",

        "postfix": "县"
    },
    {
        "id": 3232,
        "name": "乌恰",
        "father": 473,
        "key": "w",
        "abbreviation": "wq",
        "pinyin": "wuqia",

        "postfix": "县"
    },
    {
        "id": 3233,
        "name": "喀什",
        "father": 474,
        "key": "k",
        "abbreviation": "ks",
        "pinyin": "kashen",

        "postfix": "市"
    },
    {
        "id": 3234,
        "name": "疏附",
        "father": 474,
        "key": "s",
        "abbreviation": "sf",
        "pinyin": "shufu",

        "postfix": "县"
    },
    {
        "id": 3235,
        "name": "疏勒",
        "father": 474,
        "key": "s",
        "abbreviation": "sl",
        "pinyin": "shule",

        "postfix": "县"
    },
    {
        "id": 3236,
        "name": "英吉沙",
        "father": 474,
        "key": "y",
        "abbreviation": "yjs",
        "pinyin": "yingjisha",

        "postfix": "县"
    },
    {
        "id": 3237,
        "name": "泽普",
        "father": 474,
        "key": "z",
        "abbreviation": "zp",
        "pinyin": "zepu",

        "postfix": "县"
    },
    {
        "id": 3238,
        "name": "莎车",
        "father": 474,
        "key": "s",
        "abbreviation": "sc",
        "pinyin": "shache",

        "postfix": "县"
    },
    {
        "id": 3239,
        "name": "叶城",
        "father": 474,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yecheng",

        "postfix": "县"
    },
    {
        "id": 3240,
        "name": "麦盖提",
        "father": 474,
        "key": "m",
        "abbreviation": "mgt",
        "pinyin": "maigaiti",

        "postfix": "县"
    },
    {
        "id": 3241,
        "name": "岳普湖",
        "father": 474,
        "key": "y",
        "abbreviation": "yph",
        "pinyin": "yuepuhu",

        "postfix": "县"
    },
    {
        "id": 3242,
        "name": "伽师",
        "father": 474,
        "key": "j",
        "abbreviation": "js",
        "pinyin": "jiashi",

        "postfix": "县"
    },
    {
        "id": 3243,
        "name": "巴楚",
        "father": 474,
        "key": "b",
        "abbreviation": "bc",
        "pinyin": "bachu",

        "postfix": "县"
    },
    {
        "id": 3244,
        "name": "塔什库尔干",
        "father": 474,
        "key": "t",
        "abbreviation": "tskeg",
        "pinyin": "tashenkuergan",
        "": "塔吉克",
        "postfix": "自治县"
    },
    {
        "id": 3245,
        "name": "和田",
        "father": 475,
        "key": "h",
        "abbreviation": "ht",
        "pinyin": "hetian",

        "postfix": "市"
    },
    {
        "id": 3246,
        "name": "和田",
        "father": 475,
        "key": "h",
        "abbreviation": "ht",
        "pinyin": "hetian",

        "postfix": "县"
    },
    {
        "id": 3247,
        "name": "墨玉",
        "father": 475,
        "key": "m",
        "abbreviation": "my",
        "pinyin": "moyu",

        "postfix": "县"
    },
    {
        "id": 3248,
        "name": "皮山",
        "father": 475,
        "key": "p",
        "abbreviation": "ps",
        "pinyin": "pishan",

        "postfix": "县"
    },
    {
        "id": 3249,
        "name": "洛浦",
        "father": 475,
        "key": "l",
        "abbreviation": "lp",
        "pinyin": "luopu",

        "postfix": "县"
    },
    {
        "id": 3250,
        "name": "策勒",
        "father": 475,
        "key": "c",
        "abbreviation": "cl",
        "pinyin": "cele",

        "postfix": "县"
    },
    {
        "id": 3251,
        "name": "于田",
        "father": 475,
        "key": "y",
        "abbreviation": "yt",
        "pinyin": "yutian",

        "postfix": "县"
    },
    {
        "id": 3252,
        "name": "民丰",
        "father": 475,
        "key": "m",
        "abbreviation": "mf",
        "pinyin": "minfeng",

        "postfix": "县"
    },
    {
        "id": 3253,
        "name": "伊宁",
        "father": 476,
        "key": "y",
        "abbreviation": "yn",
        "pinyin": "yining",

        "postfix": "市"
    },
    {
        "id": 3254,
        "name": "奎屯",
        "father": 476,
        "key": "k",
        "abbreviation": "kt",
        "pinyin": "kuitun",

        "postfix": "市"
    },
    {
        "id": 3255,
        "name": "伊宁",
        "father": 476,
        "key": "y",
        "abbreviation": "yn",
        "pinyin": "yining",

        "postfix": "县"
    },
    {
        "id": 3256,
        "name": "察布查尔锡伯",
        "father": 476,
        "key": "c",
        "abbreviation": "cbcexb",
        "pinyin": "chabuchaerxibo",

        "postfix": "自治县"
    },
    {
        "id": 3257,
        "name": "霍城",
        "father": 476,
        "key": "h",
        "abbreviation": "hc",
        "pinyin": "huocheng",

        "postfix": "县"
    },
    {
        "id": 3258,
        "name": "巩留",
        "father": 476,
        "key": "g",
        "abbreviation": "gl",
        "pinyin": "gongliu",

        "postfix": "县"
    },
    {
        "id": 3259,
        "name": "新源",
        "father": 476,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xinyuan",

        "postfix": "县"
    },
    {
        "id": 3260,
        "name": "昭苏",
        "father": 476,
        "key": "z",
        "abbreviation": "zs",
        "pinyin": "zhaosu",

        "postfix": "县"
    },
    {
        "id": 3261,
        "name": "特克斯",
        "father": 476,
        "key": "t",
        "abbreviation": "tks",
        "pinyin": "tekesi",

        "postfix": "县"
    },
    {
        "id": 3262,
        "name": "尼勒克",
        "father": 476,
        "key": "n",
        "abbreviation": "nlk",
        "pinyin": "nileke",

        "postfix": "县"
    },
    {
        "id": 3263,
        "name": "塔城",
        "father": 477,
        "key": "t",
        "abbreviation": "tc",
        "pinyin": "tacheng",

        "postfix": "市"
    },
    {
        "id": 3264,
        "name": "乌苏",
        "father": 477,
        "key": "w",
        "abbreviation": "ws",
        "pinyin": "wusu",

        "postfix": "市"
    },
    {
        "id": 3265,
        "name": "额敏",
        "father": 477,
        "key": "e",
        "abbreviation": "em",
        "pinyin": "emin",

        "postfix": "县"
    },
    {
        "id": 3266,
        "name": "沙湾",
        "father": 477,
        "key": "s",
        "abbreviation": "sw",
        "pinyin": "shawan",

        "postfix": "县"
    },
    {
        "id": 3267,
        "name": "托里",
        "father": 477,
        "key": "t",
        "abbreviation": "tl",
        "pinyin": "tuoli",

        "postfix": "县"
    },
    {
        "id": 3268,
        "name": "裕民",
        "father": 477,
        "key": "y",
        "abbreviation": "ym",
        "pinyin": "yumin",

        "postfix": "县"
    },
    {
        "id": 3269,
        "name": "和布克赛尔",
        "father": 477,
        "key": "h",
        "abbreviation": "hbkse",
        "pinyin": "hebukesaier",
        "": "蒙古",
        "postfix": "自治县"
    },
    {
        "id": 3270,
        "name": "阿勒泰",
        "father": 478,
        "key": "a",
        "abbreviation": "alt",
        "pinyin": "aletai",

        "postfix": "市"
    },
    {
        "id": 3271,
        "name": "布尔津",
        "father": 478,
        "key": "b",
        "abbreviation": "bej",
        "pinyin": "buerjin",

        "postfix": "县"
    },
    {
        "id": 3272,
        "name": "富蕴",
        "father": 478,
        "key": "f",
        "abbreviation": "fy",
        "pinyin": "fuyun",

        "postfix": "县"
    },
    {
        "id": 3273,
        "name": "福海",
        "father": 478,
        "key": "f",
        "abbreviation": "fh",
        "pinyin": "fuhai",

        "postfix": "县"
    },
    {
        "id": 3274,
        "name": "哈巴河",
        "father": 478,
        "key": "h",
        "abbreviation": "hbh",
        "pinyin": "habahe",

        "postfix": "县"
    },
    {
        "id": 3275,
        "name": "青河",
        "father": 478,
        "key": "q",
        "abbreviation": "qh",
        "pinyin": "qinghe",

        "postfix": "县"
    },
    {
        "id": 3276,
        "name": "吉木乃",
        "father": 478,
        "key": "j",
        "abbreviation": "jmn",
        "pinyin": "jimunai",

        "postfix": "县"
    },
    {
        "id": 3277,
        "name": "松山",
        "father": 485,
        "key": "s",
        "abbreviation": "ss",
        "pinyin": "songshan",

        "postfix": "区"
    },
    {
        "id": 3278,
        "name": "信义",
        "father": 485,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xinyi",

        "postfix": "区"
    },
    {
        "id": 3279,
        "name": "大安",
        "father": 485,
        "key": "d",
        "abbreviation": "da",
        "pinyin": "daan",

        "postfix": "区"
    },
    {
        "id": 3280,
        "name": "中山",
        "father": 485,
        "key": "z",
        "abbreviation": "zs",
        "pinyin": "zhongshan",

        "postfix": "区"
    },
    {
        "id": 3281,
        "name": "中正",
        "father": 485,
        "key": "z",
        "abbreviation": "zz",
        "pinyin": "zhongzheng",

        "postfix": "区"
    },
    {
        "id": 3282,
        "name": "大同",
        "father": 485,
        "key": "d",
        "abbreviation": "dt",
        "pinyin": "datong",

        "postfix": "区"
    },
    {
        "id": 3283,
        "name": "万华",
        "father": 485,
        "key": "w",
        "abbreviation": "wh",
        "pinyin": "wanhua",

        "postfix": "区"
    },
    {
        "id": 3284,
        "name": "文山",
        "father": 485,
        "key": "w",
        "abbreviation": "ws",
        "pinyin": "wenshan",

        "postfix": "区"
    },
    {
        "id": 3285,
        "name": "南港",
        "father": 485,
        "key": "n",
        "abbreviation": "ng",
        "pinyin": "nangang",

        "postfix": "区"
    },
    {
        "id": 3286,
        "name": "内湖",
        "father": 485,
        "key": "n",
        "abbreviation": "nh",
        "pinyin": "neihu",

        "postfix": "区"
    },
    {
        "id": 3287,
        "name": "士林",
        "father": 485,
        "key": "s",
        "abbreviation": "sl",
        "pinyin": "shilin",

        "postfix": "区"
    },
    {
        "id": 3288,
        "name": "北投",
        "father": 485,
        "key": "b",
        "abbreviation": "bt",
        "pinyin": "beitou",

        "postfix": "区"
    },
    {
        "id": 3289,
        "name": "盐埕",
        "father": 486,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yancheng",

        "postfix": "区"
    },
    {
        "id": 3290,
        "name": "鼓山",
        "father": 486,
        "key": "g",
        "abbreviation": "gs",
        "pinyin": "gushan",

        "postfix": "区"
    },
    {
        "id": 3291,
        "name": "左营",
        "father": 486,
        "key": "z",
        "abbreviation": "zy",
        "pinyin": "zuoying",

        "postfix": "区"
    },
    {
        "id": 3292,
        "name": "楠梓",
        "father": 486,
        "key": "n",
        "abbreviation": "nz",
        "pinyin": "nanzi",

        "postfix": "区"
    },
    {
        "id": 3293,
        "name": "三民",
        "father": 486,
        "key": "s",
        "abbreviation": "sm",
        "pinyin": "sanmin",

        "postfix": "区"
    },
    {
        "id": 3294,
        "name": "新兴",
        "father": 486,
        "key": "x",
        "abbreviation": "xx",
        "pinyin": "xinxing",

        "postfix": "区"
    },
    {
        "id": 3295,
        "name": "前金",
        "father": 486,
        "key": "q",
        "abbreviation": "qj",
        "pinyin": "qianjin",

        "postfix": "区"
    },
    {
        "id": 3296,
        "name": "苓雅",
        "father": 486,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "lingya",

        "postfix": "区"
    },
    {
        "id": 3297,
        "name": "前镇",
        "father": 486,
        "key": "q",
        "abbreviation": "qz",
        "pinyin": "qianzhen",

        "postfix": "区"
    },
    {
        "id": 3298,
        "name": "旗津",
        "father": 486,
        "key": "q",
        "abbreviation": "qj",
        "pinyin": "qijin",

        "postfix": "区"
    },
    {
        "id": 3299,
        "name": "小港",
        "father": 486,
        "key": "x",
        "abbreviation": "xg",
        "pinyin": "xiaogang",

        "postfix": "区"
    },
    {
        "id": 3300,
        "name": "中正",
        "father": 487,
        "key": "z",
        "abbreviation": "zz",
        "pinyin": "zhongzheng",

        "postfix": "区"
    },
    {
        "id": 3301,
        "name": "七堵",
        "father": 487,
        "key": "q",
        "abbreviation": "qd",
        "pinyin": "qidu",

        "postfix": "区"
    },
    {
        "id": 3302,
        "name": "暖暖",
        "father": 487,
        "key": "n",
        "abbreviation": "nn",
        "pinyin": "nuannuan",

        "postfix": "区"
    },
    {
        "id": 3303,
        "name": "仁爱",
        "father": 487,
        "key": "r",
        "abbreviation": "ra",
        "pinyin": "renai",

        "postfix": "区"
    },
    {
        "id": 3304,
        "name": "中山",
        "father": 487,
        "key": "z",
        "abbreviation": "zs",
        "pinyin": "zhongshan",

        "postfix": "区"
    },
    {
        "id": 3305,
        "name": "安乐",
        "father": 487,
        "key": "a",
        "abbreviation": "al",
        "pinyin": "anle",

        "postfix": "区"
    },
    {
        "id": 3306,
        "name": "信义",
        "father": 487,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xinyi",

        "postfix": "区"
    },
    {
        "id": 3307,
        "name": "大安",
        "father": 488,
        "key": "d",
        "abbreviation": "da",
        "pinyin": "daan",

        "postfix": "区"
    },
    {
        "id": 3308,
        "name": "神冈",
        "father": 488,
        "key": "s",
        "abbreviation": "sg",
        "pinyin": "shengang",

        "postfix": "区"
    },
    {
        "id": 3309,
        "name": "石冈",
        "father": 488,
        "key": "s",
        "abbreviation": "sg",
        "pinyin": "shigang",

        "postfix": "区"
    },
    {
        "id": 3310,
        "name": "东势",
        "father": 488,
        "key": "d",
        "abbreviation": "ds",
        "pinyin": "dongshi",

        "postfix": "区"
    },
    {
        "id": 3311,
        "name": "新社",
        "father": 488,
        "key": "x",
        "abbreviation": "xs",
        "pinyin": "xinshe",

        "postfix": "区"
    },
    {
        "id": 3312,
        "name": "和平",
        "father": 488,
        "key": "h",
        "abbreviation": "hp",
        "pinyin": "heping",

        "postfix": "区"
    },
    {
        "id": 3313,
        "name": "大肚",
        "father": 488,
        "key": "d",
        "abbreviation": "dd",
        "pinyin": "dadu",

        "postfix": "区"
    },
    {
        "id": 3314,
        "name": "沙鹿",
        "father": 488,
        "key": "s",
        "abbreviation": "sl",
        "pinyin": "shalu",

        "postfix": "区"
    },
    {
        "id": 3315,
        "name": "龙井",
        "father": 488,
        "key": "l",
        "abbreviation": "lj",
        "pinyin": "longjing",

        "postfix": "区"
    },
    {
        "id": 3316,
        "name": "梧栖",
        "father": 488,
        "key": "w",
        "abbreviation": "wq",
        "pinyin": "wuqi",

        "postfix": "区"
    },
    {
        "id": 3317,
        "name": "清水",
        "father": 488,
        "key": "q",
        "abbreviation": "qs",
        "pinyin": "qingshui",

        "postfix": "区"
    },
    {
        "id": 3318,
        "name": "大甲",
        "father": 488,
        "key": "d",
        "abbreviation": "dj",
        "pinyin": "dajia",

        "postfix": "区"
    },
    {
        "id": 3319,
        "name": "外埔",
        "father": 488,
        "key": "w",
        "abbreviation": "wp",
        "pinyin": "waipu",

        "postfix": "区"
    },
    {
        "id": 3320,
        "name": "大雅",
        "father": 488,
        "key": "d",
        "abbreviation": "dy",
        "pinyin": "daya",

        "postfix": "区"
    },
    {
        "id": 3321,
        "name": "潭子",
        "father": 488,
        "key": "t",
        "abbreviation": "tz",
        "pinyin": "tanzi",

        "postfix": "区"
    },
    {
        "id": 3322,
        "name": "后里",
        "father": 488,
        "key": "h",
        "abbreviation": "hl",
        "pinyin": "houli",

        "postfix": "区"
    },
    {
        "id": 3323,
        "name": "丰原",
        "father": 488,
        "key": "f",
        "abbreviation": "fy",
        "pinyin": "fengyuan",

        "postfix": "区"
    },
    {
        "id": 3324,
        "name": "乌日",
        "father": 488,
        "key": "w",
        "abbreviation": "wr",
        "pinyin": "wuri",

        "postfix": "区"
    },
    {
        "id": 3325,
        "name": "雾峰",
        "father": 488,
        "key": "w",
        "abbreviation": "wf",
        "pinyin": "wufeng",

        "postfix": "区"
    },
    {
        "id": 3326,
        "name": "大里",
        "father": 488,
        "key": "d",
        "abbreviation": "dl",
        "pinyin": "dali",

        "postfix": "区"
    },
    {
        "id": 3327,
        "name": "太平",
        "father": 488,
        "key": "t",
        "abbreviation": "tp",
        "pinyin": "taiping",

        "postfix": "区"
    },
    {
        "id": 3328,
        "name": "中区",
        "father": 488,
        "key": "z",
        "abbreviation": "zq",
        "pinyin": "zhongqu",

        "postfix": ""
    },
    {
        "id": 3329,
        "name": "东区",
        "father": 488,
        "key": "d",
        "abbreviation": "dq",
        "pinyin": "dongqu",

        "postfix": ""
    },
    {
        "id": 3330,
        "name": "南区",
        "father": 488,
        "key": "n",
        "abbreviation": "nq",
        "pinyin": "nanqu",

        "postfix": ""
    },
    {
        "id": 3331,
        "name": "西区",
        "father": 488,
        "key": "x",
        "abbreviation": "xq",
        "pinyin": "xiqu",

        "postfix": ""
    },
    {
        "id": 3332,
        "name": "北区",
        "father": 488,
        "key": "b",
        "abbreviation": "bq",
        "pinyin": "beiqu",

        "postfix": ""
    },
    {
        "id": 3333,
        "name": "西屯",
        "father": 488,
        "key": "x",
        "abbreviation": "xt",
        "pinyin": "xitun",

        "postfix": "区"
    },
    {
        "id": 3334,
        "name": "南屯",
        "father": 488,
        "key": "n",
        "abbreviation": "nt",
        "pinyin": "nantun",

        "postfix": "区"
    },
    {
        "id": 3335,
        "name": "北屯",
        "father": 488,
        "key": "b",
        "abbreviation": "bt",
        "pinyin": "beitun",

        "postfix": "区"
    },
    {
        "id": 3336,
        "name": "东区",
        "father": 489,
        "key": "d",
        "abbreviation": "dq",
        "pinyin": "dongqu",

        "postfix": ""
    },
    {
        "id": 3337,
        "name": "南区",
        "father": 489,
        "key": "n",
        "abbreviation": "nq",
        "pinyin": "nanqu",

        "postfix": ""
    },
    {
        "id": 3338,
        "name": "北区",
        "father": 489,
        "key": "b",
        "abbreviation": "bq",
        "pinyin": "beiqu",

        "postfix": ""
    },
    {
        "id": 3339,
        "name": "安南",
        "father": 489,
        "key": "a",
        "abbreviation": "an",
        "pinyin": "annan",

        "postfix": "区"
    },
    {
        "id": 3340,
        "name": "安平",
        "father": 489,
        "key": "a",
        "abbreviation": "ap",
        "pinyin": "anping",

        "postfix": "区"
    },
    {
        "id": 3341,
        "name": "中西",
        "father": 489,
        "key": "z",
        "abbreviation": "zx",
        "pinyin": "zhongxi",

        "postfix": "区"
    },
    {
        "id": 3342,
        "name": "东区",
        "father": 490,
        "key": "d",
        "abbreviation": "dq",
        "pinyin": "dongqu",

        "postfix": ""
    },
    {
        "id": 3343,
        "name": "北区",
        "father": 490,
        "key": "b",
        "abbreviation": "bq",
        "pinyin": "beiqu",

        "postfix": ""
    },
    {
        "id": 3344,
        "name": "香山",
        "father": 490,
        "key": "x",
        "abbreviation": "xs",
        "pinyin": "xiangshan",

        "postfix": "区"
    },
    {
        "id": 3345,
        "name": "东区",
        "father": 491,
        "key": "d",
        "abbreviation": "dq",
        "pinyin": "dongqu",

        "postfix": ""
    },
    {
        "id": 3346,
        "name": "西区",
        "father": 491,
        "key": "x",
        "abbreviation": "xq",
        "pinyin": "xiqu",

        "postfix": ""
    },
    {
        "id": 3347,
        "name": "板桥",
        "father": 492,
        "key": "b",
        "abbreviation": "bq",
        "pinyin": "banqiao",

        "postfix": "区"
    },
    {
        "id": 3348,
        "name": "瑞芳",
        "father": 492,
        "key": "r",
        "abbreviation": "rf",
        "pinyin": "ruifang",

        "postfix": "区"
    },
    {
        "id": 3349,
        "name": "八里",
        "father": 492,
        "key": "b",
        "abbreviation": "bl",
        "pinyin": "bali",

        "postfix": "区"
    },
    {
        "id": 3350,
        "name": "深坑",
        "father": 492,
        "key": "s",
        "abbreviation": "sk",
        "pinyin": "shenkeng",

        "postfix": "区"
    },
    {
        "id": 3351,
        "name": "三芝",
        "father": 492,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "sanzhi",

        "postfix": "区"
    },
    {
        "id": 3352,
        "name": "金山",
        "father": 492,
        "key": "j",
        "abbreviation": "js",
        "pinyin": "jinshan",

        "postfix": "区"
    },
    {
        "id": 3353,
        "name": "万里",
        "father": 492,
        "key": "w",
        "abbreviation": "wl",
        "pinyin": "wanli",

        "postfix": "区"
    },
    {
        "id": 3354,
        "name": "贡寮",
        "father": 492,
        "key": "g",
        "abbreviation": "gl",
        "pinyin": "gongliao",

        "postfix": "区"
    },
    {
        "id": 3355,
        "name": "石门",
        "father": 492,
        "key": "s",
        "abbreviation": "sm",
        "pinyin": "shimen",

        "postfix": "区"
    },
    {
        "id": 3356,
        "name": "双溪",
        "father": 492,
        "key": "s",
        "abbreviation": "sx",
        "pinyin": "shuangxi",

        "postfix": "区"
    },
    {
        "id": 3357,
        "name": "石碇",
        "father": 492,
        "key": "s",
        "abbreviation": "sd",
        "pinyin": "shiding",

        "postfix": "区"
    },
    {
        "id": 3358,
        "name": "坪林",
        "father": 492,
        "key": "p",
        "abbreviation": "pl",
        "pinyin": "pinglin",

        "postfix": "区"
    },
    {
        "id": 3359,
        "name": "乌来",
        "father": 492,
        "key": "w",
        "abbreviation": "wl",
        "pinyin": "wulai",

        "postfix": "区"
    },
    {
        "id": 3360,
        "name": "泰山",
        "father": 492,
        "key": "t",
        "abbreviation": "ts",
        "pinyin": "taishan",

        "postfix": "区"
    },
    {
        "id": 3361,
        "name": "五股",
        "father": 492,
        "key": "w",
        "abbreviation": "wg",
        "pinyin": "wugu",

        "postfix": "区"
    },
    {
        "id": 3362,
        "name": "莺歌",
        "father": 492,
        "key": "y",
        "abbreviation": "yg",
        "pinyin": "yingge",

        "postfix": "区"
    },
    {
        "id": 3363,
        "name": "中和",
        "father": 492,
        "key": "z",
        "abbreviation": "zh",
        "pinyin": "zhonghe",

        "postfix": "区"
    },
    {
        "id": 3364,
        "name": "新庄",
        "father": 492,
        "key": "x",
        "abbreviation": "xz",
        "pinyin": "xinzhuang",

        "postfix": "区"
    },
    {
        "id": 3365,
        "name": "三重",
        "father": 492,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "sanzhong",

        "postfix": "区"
    },
    {
        "id": 3366,
        "name": "新店",
        "father": 492,
        "key": "x",
        "abbreviation": "xd",
        "pinyin": "xindian",

        "postfix": "区"
    },
    {
        "id": 3367,
        "name": "土城",
        "father": 492,
        "key": "t",
        "abbreviation": "tc",
        "pinyin": "tucheng",

        "postfix": "区"
    },
    {
        "id": 3368,
        "name": "永和",
        "father": 492,
        "key": "y",
        "abbreviation": "yh",
        "pinyin": "yonghe",

        "postfix": "区"
    },
    {
        "id": 3369,
        "name": "芦洲",
        "father": 492,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "luzhou",

        "postfix": "区"
    },
    {
        "id": 3370,
        "name": "汐止",
        "father": 492,
        "key": "x",
        "abbreviation": "xz",
        "pinyin": "xizhi",

        "postfix": "区"
    },
    {
        "id": 3371,
        "name": "树林",
        "father": 492,
        "key": "s",
        "abbreviation": "sl",
        "pinyin": "shulin",

        "postfix": "区"
    },
    {
        "id": 3372,
        "name": "淡水",
        "father": 492,
        "key": "d",
        "abbreviation": "ds",
        "pinyin": "danshui",

        "postfix": "区"
    },
    {
        "id": 3373,
        "name": "三峡",
        "father": 492,
        "key": "s",
        "abbreviation": "sx",
        "pinyin": "sanxia",

        "postfix": "区"
    },
    {
        "id": 3374,
        "name": "林口",
        "father": 492,
        "key": "l",
        "abbreviation": "lk",
        "pinyin": "linkou",

        "postfix": "区"
    },
    {
        "id": 3375,
        "name": "平溪",
        "father": 492,
        "key": "p",
        "abbreviation": "px",
        "pinyin": "pingxi",

        "postfix": "区"
    },
    {
        "id": 3376,
        "name": "宜兰",
        "father": 493,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yilan",

        "postfix": "市"
    },
    {
        "id": 3377,
        "name": "罗东",
        "father": 493,
        "key": "l",
        "abbreviation": "ld",
        "pinyin": "luodong",

        "postfix": "镇"
    },
    {
        "id": 3378,
        "name": "苏澳",
        "father": 493,
        "key": "s",
        "abbreviation": "sa",
        "pinyin": "suao",

        "postfix": "镇"
    },
    {
        "id": 3379,
        "name": "头城",
        "father": 493,
        "key": "t",
        "abbreviation": "tc",
        "pinyin": "toucheng",

        "postfix": "乡"
    },
    {
        "id": 3380,
        "name": "礁溪",
        "father": 493,
        "key": "j",
        "abbreviation": "jx",
        "pinyin": "jiaoxi",

        "postfix": "乡"
    },
    {
        "id": 3381,
        "name": "壮围",
        "father": 493,
        "key": "z",
        "abbreviation": "zw",
        "pinyin": "zhuangwei",

        "postfix": "乡"
    },
    {
        "id": 3382,
        "name": "员山",
        "father": 493,
        "key": "y",
        "abbreviation": "ys",
        "pinyin": "yuanshan",

        "postfix": "乡"
    },
    {
        "id": 3383,
        "name": "冬山",
        "father": 493,
        "key": "d",
        "abbreviation": "ds",
        "pinyin": "dongshan",

        "postfix": "乡"
    },
    {
        "id": 3384,
        "name": "五结",
        "father": 493,
        "key": "w",
        "abbreviation": "wj",
        "pinyin": "wujie",

        "postfix": "乡"
    },
    {
        "id": 3385,
        "name": "三星",
        "father": 493,
        "key": "s",
        "abbreviation": "sx",
        "pinyin": "sanxing",

        "postfix": "乡"
    },
    {
        "id": 3386,
        "name": "大同",
        "father": 493,
        "key": "d",
        "abbreviation": "dt",
        "pinyin": "datong",

        "postfix": "乡"
    },
    {
        "id": 3387,
        "name": "南澳",
        "father": 493,
        "key": "n",
        "abbreviation": "na",
        "pinyin": "nanao",

        "postfix": "乡"
    },
    {
        "id": 3388,
        "name": "桃园",
        "father": 494,
        "key": "t",
        "abbreviation": "ty",
        "pinyin": "taoyuan",

        "postfix": "市"
    },
    {
        "id": 3389,
        "name": "中坜",
        "father": 494,
        "key": "z",
        "abbreviation": "zl",
        "pinyin": "zhongli",

        "postfix": "市"
    },
    {
        "id": 3390,
        "name": "大溪",
        "father": 494,
        "key": "d",
        "abbreviation": "dx",
        "pinyin": "daxi",

        "postfix": "镇"
    },
    {
        "id": 3391,
        "name": "杨梅",
        "father": 494,
        "key": "y",
        "abbreviation": "ym",
        "pinyin": "yangmei",

        "postfix": "镇"
    },
    {
        "id": 3392,
        "name": "芦竹",
        "father": 494,
        "key": "l",
        "abbreviation": "lz",
        "pinyin": "luzhu",

        "postfix": "乡"
    },
    {
        "id": 3393,
        "name": "大园",
        "father": 494,
        "key": "d",
        "abbreviation": "dy",
        "pinyin": "dayuan",

        "postfix": "乡"
    },
    {
        "id": 3394,
        "name": "龟山",
        "father": 494,
        "key": "g",
        "abbreviation": "gs",
        "pinyin": "guishan",

        "postfix": "乡"
    },
    {
        "id": 3395,
        "name": "八德",
        "father": 494,
        "key": "b",
        "abbreviation": "bd",
        "pinyin": "bade",

        "postfix": "市"
    },
    {
        "id": 3396,
        "name": "龙潭",
        "father": 494,
        "key": "l",
        "abbreviation": "lt",
        "pinyin": "longtan",

        "postfix": "乡"
    },
    {
        "id": 3397,
        "name": "平镇",
        "father": 494,
        "key": "p",
        "abbreviation": "pz",
        "pinyin": "pingzhen",

        "postfix": "市"
    },
    {
        "id": 3398,
        "name": "新屋",
        "father": 494,
        "key": "x",
        "abbreviation": "xw",
        "pinyin": "xinwu",

        "postfix": "乡"
    },
    {
        "id": 3399,
        "name": "观音",
        "father": 494,
        "key": "g",
        "abbreviation": "gy",
        "pinyin": "guanyin",

        "postfix": "乡"
    },
    {
        "id": 3400,
        "name": "复兴",
        "father": 494,
        "key": "f",
        "abbreviation": "fx",
        "pinyin": "fuxing",

        "postfix": "乡"
    },
    {
        "id": 3401,
        "name": "竹北",
        "father": 495,
        "key": "z",
        "abbreviation": "zb",
        "pinyin": "zhubei",

        "postfix": "市"
    },
    {
        "id": 3402,
        "name": "竹东",
        "father": 495,
        "key": "z",
        "abbreviation": "zd",
        "pinyin": "zhudong",

        "postfix": "镇"
    },
    {
        "id": 3403,
        "name": "新埔",
        "father": 495,
        "key": "x",
        "abbreviation": "xp",
        "pinyin": "xinpu",

        "postfix": "镇"
    },
    {
        "id": 3404,
        "name": "关西",
        "father": 495,
        "key": "g",
        "abbreviation": "gx",
        "pinyin": "guanxi",

        "postfix": "镇"
    },
    {
        "id": 3405,
        "name": "湖口",
        "father": 495,
        "key": "h",
        "abbreviation": "hk",
        "pinyin": "hukou",

        "postfix": "乡"
    },
    {
        "id": 3406,
        "name": "新丰",
        "father": 495,
        "key": "x",
        "abbreviation": "xf",
        "pinyin": "xinfeng",

        "postfix": "乡"
    },
    {
        "id": 3407,
        "name": "芎林",
        "father": 495,
        "key": "x",
        "abbreviation": "xl",
        "pinyin": "xionglin",

        "postfix": "乡"
    },
    {
        "id": 3408,
        "name": "横山",
        "father": 495,
        "key": "h",
        "abbreviation": "hs",
        "pinyin": "hengshan",

        "postfix": "乡"
    },
    {
        "id": 3409,
        "name": "北埔",
        "father": 495,
        "key": "b",
        "abbreviation": "bp",
        "pinyin": "beipu",

        "postfix": "乡"
    },
    {
        "id": 3410,
        "name": "宝山",
        "father": 495,
        "key": "b",
        "abbreviation": "bs",
        "pinyin": "baoshan",

        "postfix": "乡"
    },
    {
        "id": 3411,
        "name": "峨眉",
        "father": 495,
        "key": "e",
        "abbreviation": "em",
        "pinyin": "emei",

        "postfix": "乡"
    },
    {
        "id": 3412,
        "name": "尖石",
        "father": 495,
        "key": "j",
        "abbreviation": "js",
        "pinyin": "jianshi",

        "postfix": "乡"
    },
    {
        "id": 3413,
        "name": "五峰",
        "father": 495,
        "key": "w",
        "abbreviation": "wf",
        "pinyin": "wufeng",

        "postfix": "乡"
    },
    {
        "id": 3414,
        "name": "苗栗",
        "father": 496,
        "key": "m",
        "abbreviation": "ml",
        "pinyin": "miaoli",

        "postfix": "市"
    },
    {
        "id": 3415,
        "name": "苑里",
        "father": 496,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yuanli",

        "postfix": "镇"
    },
    {
        "id": 3416,
        "name": "通霄",
        "father": 496,
        "key": "t",
        "abbreviation": "tx",
        "pinyin": "tongxiao",

        "postfix": "镇"
    },
    {
        "id": 3417,
        "name": "竹南",
        "father": 496,
        "key": "z",
        "abbreviation": "zn",
        "pinyin": "zhunan",

        "postfix": "镇"
    },
    {
        "id": 3418,
        "name": "头份",
        "father": 496,
        "key": "t",
        "abbreviation": "tf",
        "pinyin": "toufen",

        "postfix": "镇"
    },
    {
        "id": 3419,
        "name": "后龙",
        "father": 496,
        "key": "h",
        "abbreviation": "hl",
        "pinyin": "houlong",

        "postfix": "镇"
    },
    {
        "id": 3420,
        "name": "卓兰",
        "father": 496,
        "key": "z",
        "abbreviation": "zl",
        "pinyin": "zhuolan",

        "postfix": "镇"
    },
    {
        "id": 3421,
        "name": "大湖",
        "father": 496,
        "key": "d",
        "abbreviation": "dh",
        "pinyin": "dahu",

        "postfix": "乡"
    },
    {
        "id": 3422,
        "name": "公馆",
        "father": 496,
        "key": "g",
        "abbreviation": "gg",
        "pinyin": "gongguan",

        "postfix": "乡"
    },
    {
        "id": 3423,
        "name": "铜锣",
        "father": 496,
        "key": "t",
        "abbreviation": "tl",
        "pinyin": "tongluo",

        "postfix": "乡"
    },
    {
        "id": 3424,
        "name": "南庄",
        "father": 496,
        "key": "n",
        "abbreviation": "nz",
        "pinyin": "nanzhuang",

        "postfix": "乡"
    },
    {
        "id": 3425,
        "name": "头屋",
        "father": 496,
        "key": "t",
        "abbreviation": "tw",
        "pinyin": "touwu",

        "postfix": "乡"
    },
    {
        "id": 3426,
        "name": "三义",
        "father": 496,
        "key": "s",
        "abbreviation": "sy",
        "pinyin": "sanyi",

        "postfix": "乡"
    },
    {
        "id": 3427,
        "name": "西湖",
        "father": 496,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xihu",

        "postfix": "乡"
    },
    {
        "id": 3428,
        "name": "造桥",
        "father": 496,
        "key": "z",
        "abbreviation": "zq",
        "pinyin": "zaoqiao",

        "postfix": "乡"
    },
    {
        "id": 3429,
        "name": "三湾",
        "father": 496,
        "key": "s",
        "abbreviation": "sw",
        "pinyin": "sanwan",

        "postfix": "乡"
    },
    {
        "id": 3430,
        "name": "狮潭",
        "father": 496,
        "key": "s",
        "abbreviation": "st",
        "pinyin": "shitan",

        "postfix": "乡"
    },
    {
        "id": 3431,
        "name": "泰安",
        "father": 496,
        "key": "t",
        "abbreviation": "ta",
        "pinyin": "taian",

        "postfix": "乡"
    },
    {
        "id": 3432,
        "name": "彰化",
        "father": 497,
        "key": "z",
        "abbreviation": "zh",
        "pinyin": "zhanghua",

        "postfix": "市"
    },
    {
        "id": 3433,
        "name": "鹿港",
        "father": 497,
        "key": "l",
        "abbreviation": "lg",
        "pinyin": "lugang",

        "postfix": "镇"
    },
    {
        "id": 3434,
        "name": "和美",
        "father": 497,
        "key": "h",
        "abbreviation": "hm",
        "pinyin": "hemei",

        "postfix": "镇"
    },
    {
        "id": 3435,
        "name": "线西",
        "father": 497,
        "key": "x",
        "abbreviation": "xx",
        "pinyin": "xianxi",

        "postfix": "乡"
    },
    {
        "id": 3436,
        "name": "伸港",
        "father": 497,
        "key": "s",
        "abbreviation": "sg",
        "pinyin": "shengang",

        "postfix": "乡"
    },
    {
        "id": 3437,
        "name": "福兴",
        "father": 497,
        "key": "f",
        "abbreviation": "fx",
        "pinyin": "fuxing",

        "postfix": "乡"
    },
    {
        "id": 3438,
        "name": "秀水",
        "father": 497,
        "key": "x",
        "abbreviation": "xs",
        "pinyin": "xiushui",

        "postfix": "乡"
    },
    {
        "id": 3439,
        "name": "花坛",
        "father": 497,
        "key": "h",
        "abbreviation": "ht",
        "pinyin": "huatan",

        "postfix": "乡"
    },
    {
        "id": 3440,
        "name": "芬园",
        "father": 497,
        "key": "f",
        "abbreviation": "fy",
        "pinyin": "fenyuan",

        "postfix": "乡"
    },
    {
        "id": 3441,
        "name": "员林",
        "father": 497,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yuanlin",

        "postfix": "镇"
    },
    {
        "id": 3442,
        "name": "溪湖",
        "father": 497,
        "key": "x",
        "abbreviation": "xh",
        "pinyin": "xihu",

        "postfix": "镇"
    },
    {
        "id": 3443,
        "name": "田中",
        "father": 497,
        "key": "t",
        "abbreviation": "tz",
        "pinyin": "tianzhong",

        "postfix": "镇"
    },
    {
        "id": 3444,
        "name": "大村",
        "father": 497,
        "key": "d",
        "abbreviation": "dc",
        "pinyin": "dacun",

        "postfix": "乡"
    },
    {
        "id": 3445,
        "name": "埔盐",
        "father": 497,
        "key": "p",
        "abbreviation": "py",
        "pinyin": "puyan",

        "postfix": "乡"
    },
    {
        "id": 3446,
        "name": "埔心",
        "father": 497,
        "key": "p",
        "abbreviation": "px",
        "pinyin": "puxin",

        "postfix": "乡"
    },
    {
        "id": 3447,
        "name": "永靖",
        "father": 497,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "yongjing",

        "postfix": "乡"
    },
    {
        "id": 3448,
        "name": "社头",
        "father": 497,
        "key": "s",
        "abbreviation": "st",
        "pinyin": "shetou",

        "postfix": "乡"
    },
    {
        "id": 3449,
        "name": "二水",
        "father": 497,
        "key": "e",
        "abbreviation": "es",
        "pinyin": "ershui",

        "postfix": "乡"
    },
    {
        "id": 3450,
        "name": "北斗",
        "father": 497,
        "key": "b",
        "abbreviation": "bd",
        "pinyin": "beidou",

        "postfix": "镇"
    },
    {
        "id": 3451,
        "name": "二林",
        "father": 497,
        "key": "e",
        "abbreviation": "el",
        "pinyin": "erlin",

        "postfix": "镇"
    },
    {
        "id": 3452,
        "name": "田尾",
        "father": 497,
        "key": "t",
        "abbreviation": "tw",
        "pinyin": "tianwei",

        "postfix": "乡"
    },
    {
        "id": 3453,
        "name": "埤头",
        "father": 497,
        "key": "p",
        "abbreviation": "pt",
        "pinyin": "pitou",

        "postfix": "乡"
    },
    {
        "id": 3454,
        "name": "芳苑",
        "father": 497,
        "key": "f",
        "abbreviation": "fy",
        "pinyin": "fangyuan",

        "postfix": "乡"
    },
    {
        "id": 3455,
        "name": "大城",
        "father": 497,
        "key": "d",
        "abbreviation": "dc",
        "pinyin": "dacheng",

        "postfix": "乡"
    },
    {
        "id": 3456,
        "name": "竹塘",
        "father": 497,
        "key": "z",
        "abbreviation": "zt",
        "pinyin": "zhutang",

        "postfix": "乡"
    },
    {
        "id": 3457,
        "name": "溪州",
        "father": 497,
        "key": "x",
        "abbreviation": "xz",
        "pinyin": "xizhou",

        "postfix": "乡"
    },
    {
        "id": 3458,
        "name": "南投",
        "father": 498,
        "key": "n",
        "abbreviation": "nt",
        "pinyin": "nantou",

        "postfix": "市"
    },
    {
        "id": 3459,
        "name": "南投",
        "father": 498,
        "key": "n",
        "abbreviation": "nt",
        "pinyin": "nantou",

        "postfix": "镇"
    },
    {
        "id": 3460,
        "name": "草屯",
        "father": 498,
        "key": "c",
        "abbreviation": "ct",
        "pinyin": "caotun",

        "postfix": "镇"
    },
    {
        "id": 3461,
        "name": "竹山",
        "father": 498,
        "key": "z",
        "abbreviation": "zs",
        "pinyin": "zhushan",

        "postfix": "镇"
    },
    {
        "id": 3462,
        "name": "集集",
        "father": 498,
        "key": "j",
        "abbreviation": "jj",
        "pinyin": "jiji",

        "postfix": "镇"
    },
    {
        "id": 3463,
        "name": "名间",
        "father": 498,
        "key": "m",
        "abbreviation": "mj",
        "pinyin": "mingjian",

        "postfix": "乡"
    },
    {
        "id": 3464,
        "name": "鹿谷",
        "father": 498,
        "key": "l",
        "abbreviation": "lg",
        "pinyin": "lugu",

        "postfix": "乡"
    },
    {
        "id": 3465,
        "name": "中寮",
        "father": 498,
        "key": "z",
        "abbreviation": "zl",
        "pinyin": "zhongliao",

        "postfix": "乡"
    },
    {
        "id": 3466,
        "name": "鱼池",
        "father": 498,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yuchi",

        "postfix": "乡"
    },
    {
        "id": 3467,
        "name": "国姓",
        "father": 498,
        "key": "g",
        "abbreviation": "gx",
        "pinyin": "guoxing",

        "postfix": "乡"
    },
    {
        "id": 3468,
        "name": "水里",
        "father": 498,
        "key": "s",
        "abbreviation": "sl",
        "pinyin": "shuili",

        "postfix": "乡"
    },
    {
        "id": 3469,
        "name": "信义",
        "father": 498,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xinyi",

        "postfix": "乡"
    },
    {
        "id": 3470,
        "name": "仁爱",
        "father": 498,
        "key": "r",
        "abbreviation": "ra",
        "pinyin": "renai",

        "postfix": "乡"
    },
    {
        "id": 3471,
        "name": "斗六",
        "father": 499,
        "key": "d",
        "abbreviation": "dl",
        "pinyin": "douliu",

        "postfix": "市"
    },
    {
        "id": 3472,
        "name": "斗南",
        "father": 499,
        "key": "d",
        "abbreviation": "dn",
        "pinyin": "dounan",

        "postfix": "镇"
    },
    {
        "id": 3473,
        "name": "虎尾",
        "father": 499,
        "key": "h",
        "abbreviation": "hw",
        "pinyin": "huwei",

        "postfix": "镇"
    },
    {
        "id": 3474,
        "name": "西螺",
        "father": 499,
        "key": "x",
        "abbreviation": "xl",
        "pinyin": "xiluo",

        "postfix": "镇"
    },
    {
        "id": 3475,
        "name": "土库",
        "father": 499,
        "key": "t",
        "abbreviation": "tk",
        "pinyin": "tuku",

        "postfix": "镇"
    },
    {
        "id": 3476,
        "name": "北港",
        "father": 499,
        "key": "b",
        "abbreviation": "bg",
        "pinyin": "beigang",

        "postfix": "镇"
    },
    {
        "id": 3477,
        "name": "古坑",
        "father": 499,
        "key": "g",
        "abbreviation": "gk",
        "pinyin": "gukeng",

        "postfix": "乡"
    },
    {
        "id": 3478,
        "name": "大埤",
        "father": 499,
        "key": "d",
        "abbreviation": "dp",
        "pinyin": "dapi",

        "postfix": "乡"
    },
    {
        "id": 3479,
        "name": "莿桐",
        "father": 499,
        "key": "c",
        "abbreviation": "ct",
        "pinyin": "citong",

        "postfix": "乡"
    },
    {
        "id": 3480,
        "name": "林内",
        "father": 499,
        "key": "l",
        "abbreviation": "ln",
        "pinyin": "linnei",

        "postfix": "乡"
    },
    {
        "id": 3481,
        "name": "二仑",
        "father": 499,
        "key": "e",
        "abbreviation": "el",
        "pinyin": "erlun",

        "postfix": "乡"
    },
    {
        "id": 3482,
        "name": "仑背",
        "father": 499,
        "key": "l",
        "abbreviation": "lb",
        "pinyin": "lunbei",

        "postfix": "乡"
    },
    {
        "id": 3483,
        "name": "麦寮",
        "father": 499,
        "key": "m",
        "abbreviation": "ml",
        "pinyin": "mailiao",

        "postfix": "乡"
    },
    {
        "id": 3484,
        "name": "东势",
        "father": 499,
        "key": "d",
        "abbreviation": "ds",
        "pinyin": "dongshi",

        "postfix": "乡"
    },
    {
        "id": 3485,
        "name": "褒忠",
        "father": 499,
        "key": "b",
        "abbreviation": "bz",
        "pinyin": "baozhong",

        "postfix": "乡"
    },
    {
        "id": 3486,
        "name": "台西",
        "father": 499,
        "key": "t",
        "abbreviation": "tx",
        "pinyin": "taixi",

        "postfix": "乡"
    },
    {
        "id": 3487,
        "name": "元长",
        "father": 499,
        "key": "y",
        "abbreviation": "yc",
        "pinyin": "yuanchang",

        "postfix": "乡"
    },
    {
        "id": 3488,
        "name": "四湖",
        "father": 499,
        "key": "s",
        "abbreviation": "sh",
        "pinyin": "sihu",

        "postfix": "乡"
    },
    {
        "id": 3489,
        "name": "口湖",
        "father": 499,
        "key": "k",
        "abbreviation": "kh",
        "pinyin": "kouhu",

        "postfix": "乡"
    },
    {
        "id": 3490,
        "name": "水林",
        "father": 499,
        "key": "s",
        "abbreviation": "sl",
        "pinyin": "shuilin",

        "postfix": "乡"
    },
    {
        "id": 3491,
        "name": "太保",
        "father": 500,
        "key": "t",
        "abbreviation": "tb",
        "pinyin": "taibao",

        "postfix": "市"
    },
    {
        "id": 3492,
        "name": "朴子",
        "father": 500,
        "key": "p",
        "abbreviation": "pz",
        "pinyin": "pozi",

        "postfix": "市"
    },
    {
        "id": 3493,
        "name": "布袋",
        "father": 500,
        "key": "b",
        "abbreviation": "bd",
        "pinyin": "budai",

        "postfix": "镇"
    },
    {
        "id": 3494,
        "name": "大林",
        "father": 500,
        "key": "d",
        "abbreviation": "dl",
        "pinyin": "dalin",

        "postfix": "镇"
    },
    {
        "id": 3495,
        "name": "民雄",
        "father": 500,
        "key": "m",
        "abbreviation": "mx",
        "pinyin": "minxiong",

        "postfix": "乡"
    },
    {
        "id": 3496,
        "name": "溪口",
        "father": 500,
        "key": "x",
        "abbreviation": "xk",
        "pinyin": "xikou",

        "postfix": "乡"
    },
    {
        "id": 3497,
        "name": "新港",
        "father": 500,
        "key": "x",
        "abbreviation": "xg",
        "pinyin": "xingang",

        "postfix": "乡"
    },
    {
        "id": 3498,
        "name": "六脚",
        "father": 500,
        "key": "l",
        "abbreviation": "lj",
        "pinyin": "liujiao",

        "postfix": "乡"
    },
    {
        "id": 3499,
        "name": "东石",
        "father": 500,
        "key": "d",
        "abbreviation": "ds",
        "pinyin": "dongshi",

        "postfix": "乡"
    },
    {
        "id": 3500,
        "name": "义竹",
        "father": 500,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yizhu",

        "postfix": "乡"
    },
    {
        "id": 3501,
        "name": "鹿草",
        "father": 500,
        "key": "l",
        "abbreviation": "lc",
        "pinyin": "lucao",

        "postfix": "乡"
    },
    {
        "id": 3502,
        "name": "水上",
        "father": 500,
        "key": "s",
        "abbreviation": "ss",
        "pinyin": "shuishang",

        "postfix": "乡"
    },
    {
        "id": 3503,
        "name": "中埔",
        "father": 500,
        "key": "z",
        "abbreviation": "zp",
        "pinyin": "zhongpu",

        "postfix": "乡"
    },
    {
        "id": 3504,
        "name": "竹崎",
        "father": 500,
        "key": "z",
        "abbreviation": "zq",
        "pinyin": "zhuqi",

        "postfix": "乡"
    },
    {
        "id": 3505,
        "name": "梅山",
        "father": 500,
        "key": "m",
        "abbreviation": "ms",
        "pinyin": "meishan",

        "postfix": "乡"
    },
    {
        "id": 3506,
        "name": "番路",
        "father": 500,
        "key": "f",
        "abbreviation": "fl",
        "pinyin": "fanlu",

        "postfix": "乡"
    },
    {
        "id": 3507,
        "name": "大埔",
        "father": 500,
        "key": "d",
        "abbreviation": "dp",
        "pinyin": "dapu",

        "postfix": "乡"
    },
    {
        "id": 3508,
        "name": "阿里山",
        "father": 500,
        "key": "a",
        "abbreviation": "als",
        "pinyin": "alishan",

        "postfix": "乡"
    },
    {
        "id": 3509,
        "name": "屏东",
        "father": 501,
        "key": "p",
        "abbreviation": "pd",
        "pinyin": "pingdong",

        "postfix": "市"
    },
    {
        "id": 3510,
        "name": "潮州",
        "father": 501,
        "key": "c",
        "abbreviation": "cz",
        "pinyin": "chaozhou",

        "postfix": "镇"
    },
    {
        "id": 3511,
        "name": "东港",
        "father": 501,
        "key": "d",
        "abbreviation": "dg",
        "pinyin": "donggang",

        "postfix": "镇"
    },
    {
        "id": 3512,
        "name": "恒春",
        "father": 501,
        "key": "h",
        "abbreviation": "hc",
        "pinyin": "hengchun",

        "postfix": "镇"
    },
    {
        "id": 3513,
        "name": "万丹",
        "father": 501,
        "key": "w",
        "abbreviation": "wd",
        "pinyin": "wandan",

        "postfix": "乡"
    },
    {
        "id": 3514,
        "name": "长治",
        "father": 501,
        "key": "c",
        "abbreviation": "cz",
        "pinyin": "changzhi",

        "postfix": "乡"
    },
    {
        "id": 3515,
        "name": "麟洛",
        "father": 501,
        "key": "l",
        "abbreviation": "ll",
        "pinyin": "linluo",

        "postfix": "乡"
    },
    {
        "id": 3516,
        "name": "九如",
        "father": 501,
        "key": "j",
        "abbreviation": "jr",
        "pinyin": "jiuru",

        "postfix": "乡"
    },
    {
        "id": 3517,
        "name": "里港",
        "father": 501,
        "key": "l",
        "abbreviation": "lg",
        "pinyin": "ligang",

        "postfix": "乡"
    },
    {
        "id": 3518,
        "name": "盐埔",
        "father": 501,
        "key": "y",
        "abbreviation": "yp",
        "pinyin": "yanpu",

        "postfix": "乡"
    },
    {
        "id": 3519,
        "name": "高树",
        "father": 501,
        "key": "g",
        "abbreviation": "gs",
        "pinyin": "gaoshu",

        "postfix": "乡"
    },
    {
        "id": 3520,
        "name": "万峦",
        "father": 501,
        "key": "w",
        "abbreviation": "wl",
        "pinyin": "wanluan",

        "postfix": "乡"
    },
    {
        "id": 3521,
        "name": "内埔",
        "father": 501,
        "key": "n",
        "abbreviation": "np",
        "pinyin": "neipu",

        "postfix": "乡"
    },
    {
        "id": 3522,
        "name": "竹田",
        "father": 501,
        "key": "z",
        "abbreviation": "zt",
        "pinyin": "zhutian",

        "postfix": "乡"
    },
    {
        "id": 3523,
        "name": "新埤",
        "father": 501,
        "key": "x",
        "abbreviation": "xp",
        "pinyin": "xinpi",

        "postfix": "乡"
    },
    {
        "id": 3524,
        "name": "枋寮",
        "father": 501,
        "key": "f",
        "abbreviation": "fl",
        "pinyin": "fangliao",

        "postfix": "乡"
    },
    {
        "id": 3525,
        "name": "新园",
        "father": 501,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xinyuan",

        "postfix": "乡"
    },
    {
        "id": 3526,
        "name": "崁顶",
        "father": 501,
        "key": "k",
        "abbreviation": "kd",
        "pinyin": "kanding",

        "postfix": "乡"
    },
    {
        "id": 3527,
        "name": "林边",
        "father": 501,
        "key": "l",
        "abbreviation": "lb",
        "pinyin": "linbian",

        "postfix": "乡"
    },
    {
        "id": 3528,
        "name": "南州",
        "father": 501,
        "key": "n",
        "abbreviation": "nz",
        "pinyin": "nanzhou",

        "postfix": "乡"
    },
    {
        "id": 3529,
        "name": "佳冬",
        "father": 501,
        "key": "j",
        "abbreviation": "jd",
        "pinyin": "jiadong",

        "postfix": "乡"
    },
    {
        "id": 3530,
        "name": "琉球",
        "father": 501,
        "key": "l",
        "abbreviation": "lq",
        "pinyin": "liuqiu",

        "postfix": "乡"
    },
    {
        "id": 3531,
        "name": "车城",
        "father": 501,
        "key": "c",
        "abbreviation": "cc",
        "pinyin": "checheng",

        "postfix": "乡"
    },
    {
        "id": 3532,
        "name": "满州",
        "father": 501,
        "key": "m",
        "abbreviation": "mz",
        "pinyin": "manzhou",

        "postfix": "乡"
    },
    {
        "id": 3533,
        "name": "枋山",
        "father": 501,
        "key": "f",
        "abbreviation": "fs",
        "pinyin": "fangshan",

        "postfix": "乡"
    },
    {
        "id": 3534,
        "name": "三地门",
        "father": 501,
        "key": "s",
        "abbreviation": "sdm",
        "pinyin": "sandimen",

        "postfix": "乡"
    },
    {
        "id": 3535,
        "name": "雾台",
        "father": 501,
        "key": "w",
        "abbreviation": "wt",
        "pinyin": "wutai",

        "postfix": "乡"
    },
    {
        "id": 3536,
        "name": "玛家",
        "father": 501,
        "key": "m",
        "abbreviation": "mj",
        "pinyin": "majia",

        "postfix": "乡"
    },
    {
        "id": 3537,
        "name": "泰武",
        "father": 501,
        "key": "t",
        "abbreviation": "tw",
        "pinyin": "taiwu",

        "postfix": "乡"
    },
    {
        "id": 3538,
        "name": "来义",
        "father": 501,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "laiyi",

        "postfix": "乡"
    },
    {
        "id": 3539,
        "name": "春日",
        "father": 501,
        "key": "c",
        "abbreviation": "cr",
        "pinyin": "chunri",

        "postfix": "乡"
    },
    {
        "id": 3540,
        "name": "狮子",
        "father": 501,
        "key": "s",
        "abbreviation": "sz",
        "pinyin": "shizi",

        "postfix": "乡"
    },
    {
        "id": 3541,
        "name": "牡丹",
        "father": 501,
        "key": "m",
        "abbreviation": "md",
        "pinyin": "mudan",

        "postfix": "乡"
    },
    {
        "id": 3542,
        "name": "卑南",
        "father": 502,
        "key": "b",
        "abbreviation": "bn",
        "pinyin": "beinan",

        "postfix": "乡"
    },
    {
        "id": 3543,
        "name": "台东",
        "father": 502,
        "key": "t",
        "abbreviation": "td",
        "pinyin": "taidong",

        "postfix": "市"
    },
    {
        "id": 3544,
        "name": "成功",
        "father": 502,
        "key": "c",
        "abbreviation": "cg",
        "pinyin": "chenggong",

        "postfix": "镇"
    },
    {
        "id": 3545,
        "name": "关山",
        "father": 502,
        "key": "g",
        "abbreviation": "gs",
        "pinyin": "guanshan",

        "postfix": "镇"
    },
    {
        "id": 3546,
        "name": "鹿野",
        "father": 502,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "luye",

        "postfix": "乡"
    },
    {
        "id": 3547,
        "name": "池上",
        "father": 502,
        "key": "c",
        "abbreviation": "cs",
        "pinyin": "chishang",

        "postfix": "乡"
    },
    {
        "id": 3548,
        "name": "东河",
        "father": 502,
        "key": "d",
        "abbreviation": "dh",
        "pinyin": "donghe",

        "postfix": "乡"
    },
    {
        "id": 3549,
        "name": "长滨",
        "father": 502,
        "key": "c",
        "abbreviation": "cb",
        "pinyin": "changbin",

        "postfix": "乡"
    },
    {
        "id": 3550,
        "name": "太麻里",
        "father": 502,
        "key": "t",
        "abbreviation": "tml",
        "pinyin": "taimali",

        "postfix": "乡"
    },
    {
        "id": 3551,
        "name": "大武",
        "father": 502,
        "key": "d",
        "abbreviation": "dw",
        "pinyin": "dawu",

        "postfix": "乡"
    },
    {
        "id": 3552,
        "name": "绿岛",
        "father": 502,
        "key": "l",
        "abbreviation": "ld",
        "pinyin": "lu:dao",

        "postfix": "乡"
    },
    {
        "id": 3553,
        "name": "海端",
        "father": 502,
        "key": "h",
        "abbreviation": "hd",
        "pinyin": "haiduan",

        "postfix": "乡"
    },
    {
        "id": 3554,
        "name": "延平",
        "father": 502,
        "key": "y",
        "abbreviation": "yp",
        "pinyin": "yanping",

        "postfix": "乡"
    },
    {
        "id": 3555,
        "name": "金峰",
        "father": 502,
        "key": "j",
        "abbreviation": "jf",
        "pinyin": "jinfeng",

        "postfix": "乡"
    },
    {
        "id": 3556,
        "name": "达仁",
        "father": 502,
        "key": "d",
        "abbreviation": "dr",
        "pinyin": "daren",

        "postfix": "乡"
    },
    {
        "id": 3557,
        "name": "兰屿",
        "father": 502,
        "key": "l",
        "abbreviation": "ly",
        "pinyin": "lanyu",

        "postfix": "乡"
    },
    {
        "id": 3558,
        "name": "花莲",
        "father": 503,
        "key": "h",
        "abbreviation": "hl",
        "pinyin": "hualian",

        "postfix": "市"
    },
    {
        "id": 3559,
        "name": "凤林",
        "father": 503,
        "key": "f",
        "abbreviation": "fl",
        "pinyin": "fenglin",

        "postfix": "镇"
    },
    {
        "id": 3560,
        "name": "玉里",
        "father": 503,
        "key": "y",
        "abbreviation": "yl",
        "pinyin": "yuli",

        "postfix": "镇"
    },
    {
        "id": 3561,
        "name": "新城",
        "father": 503,
        "key": "x",
        "abbreviation": "xc",
        "pinyin": "xincheng",

        "postfix": "乡"
    },
    {
        "id": 3562,
        "name": "吉安",
        "father": 503,
        "key": "j",
        "abbreviation": "ja",
        "pinyin": "jian",

        "postfix": "乡"
    },
    {
        "id": 3563,
        "name": "寿丰",
        "father": 503,
        "key": "s",
        "abbreviation": "sf",
        "pinyin": "shoufeng",

        "postfix": "乡"
    },
    {
        "id": 3564,
        "name": "光复",
        "father": 503,
        "key": "g",
        "abbreviation": "gf",
        "pinyin": "guangfu",

        "postfix": "乡"
    },
    {
        "id": 3565,
        "name": "丰滨",
        "father": 503,
        "key": "f",
        "abbreviation": "fb",
        "pinyin": "fengbin",

        "postfix": "乡"
    },
    {
        "id": 3566,
        "name": "瑞穗",
        "father": 503,
        "key": "r",
        "abbreviation": "rs",
        "pinyin": "ruisui",

        "postfix": "乡"
    },
    {
        "id": 3567,
        "name": "富里",
        "father": 503,
        "key": "f",
        "abbreviation": "fl",
        "pinyin": "fuli",

        "postfix": "乡"
    },
    {
        "id": 3568,
        "name": "秀林",
        "father": 503,
        "key": "x",
        "abbreviation": "xl",
        "pinyin": "xiulin",

        "postfix": "乡"
    },
    {
        "id": 3569,
        "name": "万荣",
        "father": 503,
        "key": "w",
        "abbreviation": "wr",
        "pinyin": "wanrong",

        "postfix": "乡"
    },
    {
        "id": 3570,
        "name": "卓溪",
        "father": 503,
        "key": "z",
        "abbreviation": "zx",
        "pinyin": "zhuoxi",

        "postfix": "乡"
    },
    {
        "id": 3571,
        "name": "马公",
        "father": 504,
        "key": "m",
        "abbreviation": "mg",
        "pinyin": "magong",

        "postfix": "市"
    },
    {
        "id": 3572,
        "name": "湖西",
        "father": 504,
        "key": "h",
        "abbreviation": "hx",
        "pinyin": "huxi",

        "postfix": "乡"
    },
    {
        "id": 3573,
        "name": "白沙",
        "father": 504,
        "key": "b",
        "abbreviation": "bs",
        "pinyin": "baisha",

        "postfix": "乡"
    },
    {
        "id": 3574,
        "name": "西屿",
        "father": 504,
        "key": "x",
        "abbreviation": "xy",
        "pinyin": "xiyu",

        "postfix": "乡"
    },
    {
        "id": 3575,
        "name": "望安",
        "father": 504,
        "key": "w",
        "abbreviation": "wa",
        "pinyin": "wangan",

        "postfix": "乡"
    },
    {
        "id": 3576,
        "name": "七美",
        "father": 504,
        "key": "q",
        "abbreviation": "qm",
        "pinyin": "qimei",

        "postfix": "乡"
    },
    {
        "id": 3577,
        "name": "双河",
        "father": 31,
        "key": "s",
        "abbreviation": "sh",
        "pinyin": "shuanghe",

        "postfix": "市"
    },
    {
        "id": 3578,
        "name": "海棠",
        "father": 357,
        "key": "h",
        "abbreviation": "ht",
        "pinyin": "haitang",

        "postfix": "区"
    },
    {
        "id": 3579,
        "name": "吉阳",
        "father": 357,
        "key": "j",
        "abbreviation": "jy",
        "pinyin": "jiyang",

        "postfix": "区"
    },
    {
        "id": 3580,
        "name": "天涯",
        "father": 357,
        "key": "t",
        "abbreviation": "ty",
        "pinyin": "tianya",

        "postfix": "区"
    },
    {
        "id": 3581,
        "name": "崖州",
        "father": 357,
        "key": "y",
        "abbreviation": "yz",
        "pinyin": "yazhou",

        "postfix": "区"
    },
    {
        "id": 3582,
        "name": "霍尔果斯",
        "father": 476,
        "key": "h",
        "abbreviation": "hegs",
        "pinyin": "huoerguosi",

        "postfix": "市"
    },
    {
        "id": 3583,
        "name": "前锋",
        "father": 388,
        "key": "q",
        "abbreviation": "qf",
        "pinyin": "qianfeng",

        "postfix": "区"
    },
    {
        "id": 3584,
        "name": "福绵",
        "father": 350,
        "key": "f",
        "abbreviation": "fm",
        "pinyin": "fumian",

        "postfix": "区"
    },
    {
        "id": 3585,
        "name": "可克达拉",
        "father": 31,
        "key": "k",
        "abbreviation": "kdkl",
        "pinyin": "kedakela",

        "postfix": "市"
    },
    {
        "id": 7036,
        "name": "龙华",
        "father": 323,
        "key": "l",
        "abbreviation": "lh",
        "pinyin": "longhua",

        "postfix": "区"
    },
    {
        "id": 7037,
        "name": "坪山",
        "father": 323,
        "key": "p",
        "abbreviation": "ps",
        "pinyin": "pingshan",

        "postfix": "区"
    },
    {
        "id": 7038,
        "name": "昆玉",
        "father": 31,
        "key": "k",
        "abbreviation": "ky",
        "pinyin": "kunyu",

        "postfix": "市"
    },
    {
        "id": 7039,
        "name": "平桂",
        "father": 352,
        "key": "p",
        "abbreviation": "pg",
        "pinyin": "pinggui",

        "postfix": "区"
    },
    {
        "id": 7040,
        "name": "巴什",
        "father": 152,
        "key": "b",
        "abbreviation": "bs",
        "pinyin": "bashi",

        "postfix": "区"
    },
    {
        "id": 7041,
        "name": "叶集",
        "father": 231,
        "key": "y",
        "abbreviation": "yj",
        "pinyin": "yeji",

        "postfix": "区"
    },
    {
        "id": 7042,
        "name": "光明",
        "father": 323,
        "key": "g",
        "abbreviation": "gm",
        "pinyin": "guangming",

        "postfix": "区"
    }
];
const copy = JSON.parse(JSON.stringify(arr));
const arr1 = copy.filter(
    obj => obj.father === 0
);
const get = (arr, data) => {
    const res = arr.filter(
        obj => obj.id === data.father
    );
    if (res.length === 0) {
        arr.map(
            val => val.children && get(val.children, data)
        );
    } else {
        const children = res[0].children;
        children ?
            children.push(data) :
            (res[0].children = [data]);
    }
};
arr.map(
    obj => {
        if (obj.father > 0) {
            get(arr1, obj);
        }
    }
);
const fix = (arr) => {
    arr.map(
        obj => {
            obj.name += obj.postfix;
            if (obj.children) {
                fix(obj.children);
            }
        }
    );
};
fix(arr1);
export default arr1;
export {arr};

