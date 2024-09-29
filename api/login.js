const http = uni.$u.http

// 登录
export const login = (data) => http.post('/service/login/applet', data);

// 获取手机验证码
export const getVerifyCode = (params) => http.get('/s', {
	params: params
});