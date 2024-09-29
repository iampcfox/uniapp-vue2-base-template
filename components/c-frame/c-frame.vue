<template>
	<view class="frame">
		<view class="title">{{title}}</view>
		<view class="content">
			<slot>这里是内容</slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: "这是标题"
			},

		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.frame {
		width: 100%;

		.title {
			padding: 10px;
			font-weight: bold;
		}

		.content {
			// margin: 10px;
			// margin-top: 0;
			padding: 10px;
			background-color: #fff;
			border-radius: 10px;
			text-align: left;
		}
	}
</style>