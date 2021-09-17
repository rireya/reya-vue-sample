module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    /** General Rules */
    // 문단 마지막 세미콜론
    "semi": [ "error", "always" ],

    // 싱글 코테 사용
    "quotes": [ "error", "single" ],

    // Tab은 Space 2칸으로 정의
    "indent": [ "error", 2, { "SwitchCase": 1 } ],

    // Function과 소괄호 사이의 공백 X
    "space-before-function-paren": ["error", "never"],

    // {} 앞에는 공백
    "space-before-blocks": [ "error",  "always" ],

    // {} 안에 공백 여부
    "object-curly-spacing": ["error", "always", {
      "objectsInObjects": false,
      "arraysInObjects": false
    }],

    // [] 안에 공백 여부
    "array-bracket-spacing": ["error", "always", {
      "arraysInArrays": false,
      "objectsInArrays": false,
    }],

    // code 한줄당 최대길이 제한
    "max-len": ["error", { code: 180 }],

    // 조건/반복문/제어문에 중괄호 사용
    "curly": "error",

    // 콜론(:)을 사용하는 경우에는 반드시 뒤에 공백을 삽입한다.
    "key-spacing": ["error", {
        "afterColon": true
    }],

    // 특정 키워드의 경우 뒤에 공백을 삽입한다.
    "keyword-spacing": ["error", {
        "before": true,
        "after": true,
        "overrides": {
            "return": { "after": true },
            "throw": { "after": true },
            "case": { "after": true }
        }
    }],

    // comma는 뒤에 삽입
    "comma-style": ["error", "last"],

    // 멀티라인인 경우 후행 콤마 사용
    // "comma-dangle": ["error", "always-multiline"],

    // 화살표 함수 괄호 사용 방식
    "arrow-parens": [2, "as-needed", { "requireForBlockBody": true }],

    // new 생성자 금지 (Object, Array, Function)
    "no-new-object": "error",
    "no-array-constructor": "error",
    "no-new-func": "error",

    /** Vue Rules */
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/max-attributes-per-line": "off", // html attr 한줄로 작성 off
    "vue/html-self-closing": "off", // 셀프 클로징 off
  }
}
