<template>
	<view class="mainBox bg-white">
		<view class="text-xxl" style="height: 486rpx; position: relative;">
			<image src='https://cdn.zhoukaiwen.com/login_top2.jpg' mode='widthFix' class='png' style='width:100%;height:486rpx'></image>
			<text @click="goBack" class="cuIcon-back" style="position: absolute; left: 40rpx;top: 100rpx;color: #000000;"></text>
			<image class="logoImg" src="../../static/logo.png"></image>
			<view class="logoName text-white text-bold text-xl">前端铺子</view>
		</view>
		
		<view class="padding text-center margin-top-xl">
			<view class="padding-xl radius shadow-warp bg-white margin-top">
				<view class="text-bold text-black text-xl">前端铺子</view>
				<view class="describe margin-top-sm">这是一段描述，「前端铺子」授权登录页面，UI模仿图鸟UI，感谢作者开源。</view>
				<button class="margin-top-lg bg-gradual-blue" type="primary" lang="zh_CN" @click="login()">授权登录</button>
				<button class="margin-top bg-gradual-red" type="warn" lang="zh_CN" @click="goBack()">我再看看</button>
				<view class="describe margin-top text-gray">授权信息仅用于测试小程序登录</view>
				<view class="describe margin-top-xs text-gray">头像和昵称仅用于测试数功能展示</view>
			</view>
		</view>
		
			
		
		<view class="bottom_bg">
			<image src="https://cdn.zhoukaiwen.com/login_bottom_bg.jpg" mode="widthFix"></image>
		</view>
		
	</view>
</template>

<script>
	import request from '@/common/request.js';
	import QQMapWX from "@/common/qqmap-wx-jssdk.js";
	export default {
		data() {
			return {
				encryptedData: '',
				phoneIv: ''
			};
		},
		onLoad() {
		},
		methods: {
			login(){
				var that = this;
				uni.getUserProfile({
					desc: '获取您的微信信息以授权小程序',
					lang: 'zh_CN',
					success: UserProfileRes => {  
						console.log(UserProfileRes)
						uni.login({
							provider: 'weixin',
							success: function(loginRes) {
						 	console.log('----1:', loginRes);
						 	console.log('----2:', UserProfileRes);
								uni.navigateBack({
									delta: 1
								});
							}
						});
					},
					fail:err=>{
						console.log(err)
					}
				})
			},
			goBack(){
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mainBox{
		height: 100vh;
		.logoImg{
			width: 140rpx;
			height: 140rpx;
			border-radius: 50%;
			position: absolute;
			left: 50%;
			margin-left: -70rpx;
			top: 170rpx;
			display: block;
		}
		.logoName{
			width: 750rpx;
			position: absolute;
			left: 0;
			top: 340rpx;
			text-align: center;
		}
	}
	
	.bottom_bg{
		width: 750rpx;
		position: fixed;
		bottom: 0;
		image{
			width: 750rpx;
		}
	}
</style>
