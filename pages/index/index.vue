<template>
	<view class="">


		<view class="content">
			<image class="logo" src="/static/logo.png"></image>
			<view class="text-area w-full text-left">
				<text class="title">{{title}}</text>
			</view>
			<view class="text-center p-5 m-2">
				<u-button text="月落"></u-button>
			</view>

		</view>

		<view class="">
			<c-frame>
				框框
			</c-frame>
		</view>
	</view>
</template>

<script>
	import cFrame from "@/components/c-frame/c-frame.vue"
	import store from '@/store/index.js';
	import {
		login,
		getVerifyCode
	} from "@/api/login.js"

	export default {
		components: {
			cFrame
		},
		data() {
			return {
				title: 'Hello',
				state: store.state
			}
		},
		onLoad() {

		},
		mounted() {
			// console.log("当前平台：", uni.$u.os());
			// getVerifyCode({
			// 	id: 1
			// }).then(res => {
			// 	console.log(res);
			// })
		},
		methods: {

		}
	}
</script>

<style scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>