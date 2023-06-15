const userId = document.querySelector("#userId");
const spanId = document.querySelector("#spanId");
const userPw = document.querySelector("#userPw");
const spanPw = document.querySelector("#spanPw");
const userPwCheck = document.querySelector("#userPwCheck");
const spanPwCheck = document.querySelector("#spanPwCheck");
const userName = document.querySelector("#userName");
const spanName = document.querySelector("#spanName")
const userPhone = document.querySelector("#userPhone");
const spanPhone = document.querySelector("#spanPhone");
const emailId = document.querySelector("#emailId");
const spanEmail = document.querySelector("#spanEmail");
const emailUrl = document.querySelector("#emailUrl");
const userBirthday = document.querySelector("#userBirthday");
const submit = document.querySelector(".submit");
// const email = emailId.value + '@' + emailUrl.value;

// 제출시 유효성 검사
// localStorage에 가입정보 저장
const saveSignUp = (e) => {

    if((!/^[a-z]/.test(userId.value)) || (!/\d/.test(userId.value)) || (!/^.{4,12}$/.test(userId.value))) {
        alert('아이디가 유효하지 않습니다.');
        return false; // 이하 코드 실행 방지용
    };

    if( ((!/\w/.test(userPw.value)) || (!/\d/.test(userPw.value)) || (!/[!@#$%^&*]/.test(userPw.value)) || (!/^.{8,15}$/.test(userPw.value))) ){
        alert('비밀번호가 유효하지 않습니다.');
        return false;
    };

    if( (userPw.value != userPwCheck.value) ) {
        alert('비밀번호가 일치하지 않습니다.');
        return false;
    };

    if( ((!/^.{2,}$/.test(userName.value)) || (!/[가-힣]/.test(userName.value))) ) {
        alert('이름이 유효하지 않습니다.');
        return false;
    };

    if( ((!/^(010|011)/.test(userPhone.value)) || (!/\d/.test(userPhone.value)) || (!/^.{10,11}$/.test(userPhone.value))) ) {
        alert('휴대폰 번호가 유효하지 않습니다.');
        return false;
    };

    if( ((!/^[a-z]/.test(emailId.value)) || (!/\d/.test(emailId.value)) || (!/^.{4,12}$/.test(emailId.value))) ) {
        alert('이메일이 유효하지 않습니다.');
        return false;
    };

    if( ((!/^[a-z]/.test(emailUrl.value)) || (!/\./.test(emailUrl.value))) ) {
        alert('이메일이 유효하지 않습니다.');
        return false;
    };

    alert('가입 성공!');

    const frm = document.signUpFrm;
    
    const user = new User(userId.value, userPw.value, userName.value, userPhone.value, userBirthday.value, email = emailId.value + '@' + emailUrl.value);
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    const jsonStr = JSON.stringify(users);
    localStorage.setItem("users", jsonStr);
    
    userId.value = "";
    userPw.value = "";
    userPwCheck.value = "";
    userName.value = "";
    userPhone.value = "";
    emailId.value = "";
    emailUrl.value = "";

};

class User {
    constructor(userId, userPw, userName, userPhone, userBirthday, email, emailId, emailUrl) {
        this.userId = userId;
        this.userPw = userPw;
        this.userName = userName;
        this.userPhone = userPhone;
        this.userBirthday = userBirthday;
        this.email = email;
        this.emailId = emailId;
        this.emailUrl = emailUrl;
    }
};

// 실시간 유효성 검사
// ID 유효성 검사
const validateUserId = () => {
    const value = userId.value;

    const idValidations = [
        {re : /^[a-z]/, msg : '첫글자는 반드시 영소문자로 이루어져야합니다.'},
        {re : /\d/, msg : '숫자를 하나이상 포함해야합니다.'},
        {re : /^.{4,12}$/, msg : '아이디 길이는 4~12자리 입니다.'},
    ];

    const result = idValidations.every(({re, msg}) => {
        if(!re.test(value)) {
            idErr.innerHTML = msg;
            spanId.nextElementSibling.style.display = 'inline';
            return false; // forEach용 break
        }
        return true;
    });

    if(result || value=="")
        spanId.nextElementSibling.style.display = 'none';
};

userId.oninput = validateUserId;

// 비밀번호 유효성 검사
const validateUserPassword = () => {
    const value = userPw.value;

    const pwdValidations = [
        {re : /\w/, msg : '문자를 하나이상 포함해야합니다.'},
        {re : /\d/, msg : '숫자를 하나이상 포함해야합니다.'},
        {re : /[!@#$%^&*]/, msg : '특수문자(!@#$%^&*)를 하나이상 포함해야합니다.'},
        {re : /^.{8,15}$/, msg : '비밀번호 길이는 8~15자리 입니다.'},
    ];

    const result = pwdValidations.every(({re, msg}) => {
        if(!re.test(value)) {
            pwErr.innerHTML = msg;
            spanPw.nextElementSibling.style.display = 'inline';
            return false; // forEach용 break
        }
        return true;
    });

    if(result || value=="")
        spanPw.nextElementSibling.style.display = 'none';

};

userPw.oninput = validateUserPassword;

// 비밀번호 일치 검사
const validateUserPasswordCheck = () => {
    const value = userPwCheck.value;
    
    if((value == userPw.value) || (value == "")) {
        spanPwCheck.nextElementSibling.style.display = 'none';
    } else {
        pwCheckErr.innerHTML = '비밀번호가 일치하지 않습니다.';
        spanPwCheck.nextElementSibling.style.display = 'inline';
    };

};

userPwCheck.oninput = validateUserPasswordCheck;

// 이름 검사
const validateUserName = () => {
    const value = userName.value;

    const nameValidations = [
        {re : /^.{2,}$/, msg : '이름 길이는 2글자 이상 입니다.'},
        {re : /[가-힣]/, msg : '한글만 입력가능합니다.'},
    ];

    const result = nameValidations.every(({re, msg}) => {
        if(!re.test(value)) {
            nameErr.innerHTML = msg;
            spanName.nextElementSibling.style.display = 'inline';
            return false; // forEach용 break
        }
        return true;
    });

    if(result || value=="")
        spanName.nextElementSibling.style.display = 'none';
};

userName.oninput = validateUserName;

//전화번호 검사
const validateTel = () => {
    const value = userPhone.value;

    const phoneValidations = [
        {re : /^(010|011)/, msg : '유효한 번호가 아닙니다.'},
        {re : /\d/, msg : '숫자만 입력가능.'},
        {re : /^.{10,11}$/, msg : '10~11 자리 입력해주세요.'},
    ];

    const result = phoneValidations.every(({re, msg}) => {
        if(!re.test(value)) {
            phoneErr.innerHTML = msg;
            spanPhone.nextElementSibling.style.display = 'inline';
            return false; // forEach용 break
        }
        return true;
    });

    if(result || value=="") {
        spanPhone.nextElementSibling.style.display = 'none';
    };

};

userPhone.oninput = validateTel;

// 이메일 ID 검사
const validateEmail = () => {
    const value = emailId.value;

    const emailValidations = [
        {re : /^[a-z]/, msg : '(이메일 주소 ID) 영문자로 시작해야합니다.'},
        {re : /\d/, msg : '(이메일 주소 ID) 숫자 필수입니다.'},
        {re : /^.{4,12}$/, msg : '(이메일 주소 ID) 4~12 자리 입니다.'},
    ];

    const result = emailValidations.every(({re, msg}) => {
        if(!re.test(value)) {
            emailErr.innerHTML = msg;
            spanEmail.nextElementSibling.style.display = 'inline';
            return false; // forEach용 break
        }
        return true;
    });

    if(result || value=="")
        spanEmail.nextElementSibling.style.display = 'none';
};

emailId.oninput = validateEmail;

// 이메일 URL 검사
const validateEmailUrl = () => {
    const value = emailUrl.value;

    const emailUrlValidations = [
        {re : /^[a-z]/, msg : '(URL) 영문자로 시작해야합니다.'},
        {re : /\./, msg : "(URL) '.' 필수입니다."},
    ];

    const result = emailUrlValidations.every(({re, msg}) => {
        if(!re.test(value)) {
            emailErr.innerHTML = msg;
            spanEmail.nextElementSibling.style.display = 'inline';
            return false; // forEach용 break
        }
        return true;
    });

    if(result || value=="")
        spanEmail.nextElementSibling.style.display = 'none';
};

emailUrl.oninput = validateEmailUrl;